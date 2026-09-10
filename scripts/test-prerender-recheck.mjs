import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {chromium} from 'playwright';
const reportPath=process.argv[2];
if(!reportPath)throw new Error('Pass the broad browser report to recheck its failed routes.');
const previous=JSON.parse(await fs.readFile(reportPath,'utf8'));
const rendered=JSON.parse(await fs.readFile('.cache/prerender/report.json','utf8'));
const base='http://127.0.0.1:4173',browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext();
await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
const results=[];
try{for(const {path}of previous.failures){
 const page=await context.newPage(),errors=[],badResponses=[];const start=Date.now();
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)badResponses.push({url:r.url(),status:r.status()})});
 try{
  const expected=rendered.pages.find(p=>p.path===path);
  const response=await page.goto(base+path,{waitUntil:'domcontentloaded'});assert.equal(response.status(),200);
  await page.waitForFunction(()=>document.documentElement.dataset.routeReady===location.pathname,undefined,{timeout:12000,polling:50});
  const observed=await page.evaluate(()=>({title:document.title,h1:[...document.querySelectorAll('main h1')].map(e=>e.textContent.trim()),canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(e=>e.getAttribute('href')),descriptions:document.querySelectorAll('meta[name="description"]').length,robots:document.querySelector('meta[name="robots"]')?.content||''}));
  assert.equal(observed.title,expected.title.replace(/\s+/g,' ').trim());assert.equal(observed.h1.length,1);assert.ok(observed.h1[0]);assert.deepEqual(observed.canonical,[expected.canonical]);assert.equal(observed.descriptions,1);assert.equal(!/noindex/.test(observed.robots),expected.indexable);assert.deepEqual(errors,[]);assert.deepEqual(badResponses,[]);
  results.push({path,passed:true,milliseconds:Date.now()-start});
 }catch(e){results.push({path,passed:false,error:e.message,errors,badResponses,location:await page.evaluate(()=>({href:location.href,ready:document.documentElement.dataset.routeReady}))})}
 await page.close();
}}finally{await browser.close()}
await fs.writeFile(reportPath.replace(/\.json$/,'-recheck.json'),JSON.stringify({previousFailures:previous.failures.length,results},null,2));
console.log(JSON.stringify(results));if(results.some(r=>!r.passed))process.exitCode=1;
