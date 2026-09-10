import assert from 'node:assert/strict';
import { notifyChanges } from './indexnow.mjs';
const key = 'e0de79cc528a36c914d4350dd4def61f';
const config = { host: 'staycoolairco.nl', keyFile: key + '.txt', changes: [{ path: '/test', revision: '1', expectedTitle: 'New page', expectedText: 'Published text' }] };
const html = '<title>New page</title><link rel="canonical" href="https://staycoolairco.nl/test"><h1>Published text</h1>';
function mock({ page = html, keyText = key, status = 200 } = {}) {
  const posts = [];
  return { posts, request: async (url, options) => {
    if (options.method === 'POST') { posts.push(JSON.parse(options.body)); return new Response('', { status }); }
    return new Response(url.endsWith('.txt') ? keyText : page);
  } };
}
let m = mock();
assert.equal((await notifyChanges({ config, request: m.request })).ready.length, 1);
assert.equal(m.posts.length, 0, 'Dry-run verstuurt niets');
const rootConfig = { ...config, changes: [{ path: '/', revision: 'root-1', expectedTitle: 'New page', expectedText: 'Published text' }] };
assert.equal((await notifyChanges({ config: rootConfig, request: mock({page: html.replace('https://staycoolairco.nl/test', 'https://staycoolairco.nl')}).request })).ready.length, 1, 'Root canonical without slash is equivalent');
const revisionConfig = { ...config, changes: [{ ...config.changes[0], revision: 'new-hash', expectedText: '<meta name="content-revision" content="new-hash">' }] };
assert.equal((await notifyChanges({ config: revisionConfig, request: mock().request })).blocked.length, 1, 'Same title and H1 do not prove the new revision is live');
m = mock({ page: '<title>Old page</title>' });
assert.equal((await notifyChanges({ config, request: m.request, submit: true })).blocked.length, 1);
assert.equal(m.posts.length, 0, 'Niet-gepubliceerde wijziging geblokkeerd');
m = mock({ page: html + '<meta name="bingbot" content="noindex">' });
assert.equal((await notifyChanges({ config, request: m.request, submit: true })).blocked.length, 1);
assert.equal(m.posts.length, 0);
m = mock({ keyText: 'wrong' });
await assert.rejects(notifyChanges({ config, request: m.request, submit: true }), /sleutelbestand/);
for (const status of [200, 202]) {
  m = mock({ status });
  const state = {};
  const result = await notifyChanges({ config, state, request: m.request, submit: true });
  assert.equal(result.status, status);
  assert.deepEqual(m.posts[0].urlList, ['https://staycoolairco.nl/test']);
  assert.equal(m.posts[0].keyLocation, 'https://staycoolairco.nl/' + key + '.txt');
  const repeat = await notifyChanges({ config, state, request: m.request, submit: true });
  assert.equal(repeat.skipped.length, 1);
  assert.equal(m.posts.length, 1, 'Geaccepteerde revisie niet herhaald');
}
m = mock({ status: 429 });
const state = {};
await assert.rejects(notifyChanges({ config, state, request: m.request, submit: true }), /429/);
assert.deepEqual(state, {});
assert.equal(m.posts.length, 1, 'Geen automatische herhaling bij fout');
await assert.rejects(notifyChanges({ config: { ...config, changes: [{ ...config.changes[0], path: '//example.com/private' }] }, request: mock().request }), /wijzigingsregel/);
console.log('IndexNow: dry-run, publicatiecontrole, noindex, sleutel, 200/202, revisie-deduplicatie, externe host en 429 getest zonder externe pings.');
