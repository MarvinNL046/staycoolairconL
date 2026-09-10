import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { notifyChanges } from './indexnow.mjs';
import { pageFile } from './prerender-site.mjs';
const config=JSON.parse(await readFile('dist/indexnow-manifest.json','utf8'));
const report=JSON.parse(await readFile('.cache/prerender/report.json','utf8'));
assert.equal(config.changes.length,report.sitemapUrls);
assert.equal(new Set(config.changes.map(c=>c.path)).size,config.changes.length);
for(const change of config.changes)assert.match(change.revision,/^[a-f0-9]{64}$/);
const request=async(url,options)=>{
 assert.notEqual(options.method,'POST','Manifest test must not send a ping');
 const pathname=new URL(url).pathname;
 if(pathname==='/'+config.keyFile)return new Response(config.keyFile.slice(0,-4));
 return new Response(await readFile(pageFile('dist',pathname),'utf8'));
};
const result=await notifyChanges({config,request});
assert.equal(result.blocked.length,0);assert.equal(result.ready.length,config.changes.length);
console.log(`IndexNow manifest: ${result.ready.length} canonical published-revision checks passed offline; no pings.`);
