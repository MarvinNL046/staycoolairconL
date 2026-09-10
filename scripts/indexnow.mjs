import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Geen verzending tijdens de build: deze controle draait pas na een productiepublicatie.
export async function notifyChanges({ config, state = {}, request = fetch, submit = false }) {
  if (config.host !== 'staycoolairco.nl' || !/^[a-f0-9]{32}\.txt$/.test(config.keyFile)) throw new Error('Ongeldige IndexNow-host of sleutelbestandsnaam');
  const origin = `https://${config.host}`;
  const key = config.keyFile.slice(0, -4);
  const keyLocation = `${origin}/${config.keyFile}`;
  const options = { redirect: 'manual', signal: AbortSignal.timeout(20000) };
  const keyResponse = await request(keyLocation, options);
  if (keyResponse.status !== 200 || (await keyResponse.text()).trim() !== key) throw new Error('Live sleutelbestand niet geldig');
  const ready = [];
  const blocked = [];
  const skipped = [];
  for (const change of config.changes) {
    const url = new URL(change.path, origin);
    if (url.origin !== origin || url.search || url.hash || !change.path.startsWith('/') || !change.revision || !change.expectedTitle || !change.expectedText) throw new Error('Ongeldige wijzigingsregel');
    if (state[url.href] === change.revision) { skipped.push(url.href); continue; }
    const response = await request(url.href, { ...options, signal: AbortSignal.timeout(20000) });
    const html = await response.text();
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];
    const canonicalTag = html.match(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i)?.[0];
    const canonical = canonicalTag?.match(/href=["']([^"']+)["']/i)?.[1];
    const robotsTags = [...html.matchAll(/<meta\b(?=[^>]*name=["'](?:robots|bingbot|yandex)["'])[^>]*>/gi)].map(m => m[0]).join(' ');
    let canonicalMatches = false;
    try { canonicalMatches = new URL(canonical).href === url.href; } catch { /* Missing/invalid canonical blocks submission. */ }
    if (response.status !== 200 || title !== change.expectedTitle || !html.includes(change.expectedText) || !canonicalMatches || /noindex/i.test(robotsTags + ' ' + response.headers.get('x-robots-tag'))) {
      blocked.push({ url: url.href, status: response.status, reason: 'Gewijzigde canonieke pagina nog niet aantoonbaar live/indexeerbaar' });
      continue;
    }
    ready.push({ url: url.href, revision: change.revision });
  }
  let status = null;
  if (submit && ready.length) {
    if (ready.length > 10000) throw new Error('Meer dan 10.000 URL’s; splits de wijzigingslijst');
    const response = await request('https://api.indexnow.org/indexnow', { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(20000), headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host: config.host, key, keyLocation, urlList: ready.map(r => r.url) }) });
    status = response.status;
    if (![200, 202].includes(status)) throw new Error(`IndexNow HTTP ${status}; niet automatisch opnieuw verzonden. Retry-After: ${response.headers.get('retry-after') || 'niet opgegeven'}`);
    for (const item of ready) state[item.url] = item.revision;
  }
  return { checkedAt: new Date().toISOString(), mode: submit ? 'submit' : 'dry-run', status, ready, blocked, skipped, state, indexed: 'Niet vastgesteld; ontvangst door IndexNow is geen indexatiebewijs.' };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dir = '.cache/indexnow';
  let config = JSON.parse(await readFile('indexnow-changes.json', 'utf8'));
  if (process.argv.includes('--live-manifest')) {
    const response = await fetch('https://staycoolairco.nl/indexnow-manifest.json', { redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error('Gepubliceerd IndexNow-manifest niet beschikbaar');
    const published = await response.json();
    if (published.host !== config.host || published.keyFile !== config.keyFile || !Array.isArray(published.changes) || published.changes.length > 10000) throw new Error('Onjuist gepubliceerd IndexNow-manifest');
    config = published;
  }
  let state = {};
  try { state = JSON.parse(await readFile(`${dir}/state.json`, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const result = await notifyChanges({ config, state, submit: process.argv.includes('--submit') });
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}/last-run.json`, JSON.stringify(result, null, 2));
  if (result.status) await writeFile(`${dir}/state.json`, JSON.stringify(result.state, null, 2));
  console.log(JSON.stringify({ ...result, state: undefined }, null, 2));
  if (process.argv.includes('--submit') && result.blocked.length) process.exitCode = 1;
}
