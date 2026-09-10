import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { pageFile } from './prerender-site.mjs';
const base='http://127.0.0.1:4173';
const report=JSON.parse(await readFile('.cache/prerender/report.json','utf8'));
const out=process.argv[2] || '.cache/prerender-verification';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext();
await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
const results=[];let cursor=0;
async function worker(){
 const page=await context.newPage();let errors=[];
 page.on('pageerror',e=>errors.push(e.message.split('\n')[0]));
 while(cursor<report.pages.length){const item=report.pages[cursor++];errors=[];
  try{
   const html=await readFile(pageFile('dist',item.path),'utf8');
   assert.equal((html.match(/<h1\b/g)||[]).length,1,'source H1');
   assert.equal((html.match(/rel="canonical"/g)||[]).length,1,'source canonical');
   assert.ok(html.includes('data-prerendered="true"'));
   for(const m of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
   const response=await page.goto(base+item.path,{waitUntil:'domcontentloaded'});assert.equal(response.status(),200);
   await page.waitForFunction(()=>document.documentElement.dataset.routeReady===location.pathname,undefined,{timeout:12000,polling:50});
   const observed=await page.evaluate(()=>({title:document.title,h1:[...document.querySelectorAll('main h1')].map(e=>e.textContent.trim()),canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(e=>e.getAttribute("href")),description:document.querySelectorAll('meta[name="description"]').length,robots:document.querySelector('meta[name="robots"]')?.content||''}));
   assert.equal(observed.title,item.title.replace(/\s+/g," ").trim());assert.equal(observed.h1.length,1);assert.deepEqual(observed.canonical,[item.canonical]);assert.equal(observed.description,1);assert.equal(!/noindex/.test(observed.robots),item.indexable);
   assert.deepEqual(errors,[],'hydration/runtime errors');
   results.push({path:item.path,passed:true});
  }catch(e){results.push({path:item.path,passed:false,error:e.message,errors:[...new Set(errors)]});}
  if(results.length%100===0)console.log(results.length+'/'+report.pages.length+' HTML + browser gecontroleerd');
 }
 await page.close();
}
try{await Promise.all([worker(),worker(),worker(),worker()]);}finally{await context.close()}
const noJs=await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:900}});
await noJs.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
const noJsResults=[];let noJsCursor=0;
const screenshotPaths=new Set(['/','/kosten-airco-plaatsen','/products/tosot/pular','/airco-installatie/heerlen','/airco-onderhoud-limburg','/kennisbank/verwarmen-met-airco']);
async function noJsWorker(){const p=await noJs.newPage();while(noJsCursor<report.pages.length){const {path}=report.pages[noJsCursor++];
 try{
  const response=await p.goto(base+path,{waitUntil:'domcontentloaded'});assert.equal(response.status(),200);const h1=p.locator('main h1');assert.equal(await h1.count(),1);assert.equal(await h1.isVisible(),true);
  assert.equal(await h1.evaluate(e=>{for(let n=e;n;n=n.parentElement)if(getComputedStyle(n).opacity==='0')return false;return true}),true,'H1 invisible through animation');
  assert.ok(await p.locator('a[href^="tel:"]').count());
  assert.equal(await p.locator('form:visible').count(),0,'JS-only form can submit without JS');
  if(screenshotPaths.has(path))await p.screenshot({path:out+'/nojs-'+(path==='/'?'home':path.replaceAll('/','-'))+'.png'});
  noJsResults.push({path,passed:true});
 }catch(e){noJsResults.push({path,passed:false,error:e.message});}
 if(noJsResults.length%100===0)console.log(noJsResults.length+'/'+report.pages.length+' zonder JavaScript gecontroleerd');
}await p.close()}
await Promise.all([noJsWorker(),noJsWorker(),noJsWorker(),noJsWorker()]);
await browser.close();
const failures=results.filter(r=>!r.passed),noJsFailures=noJsResults.filter(r=>!r.passed);
await writeFile(out+'/results.json',JSON.stringify({checkedAt:new Date().toISOString(),pages:results.length,failures,noJsResults},null,2));
console.log(JSON.stringify({pages:results.length,failures,noJsFailures}));
if(failures.length||noJsFailures.length)process.exitCode=1;
