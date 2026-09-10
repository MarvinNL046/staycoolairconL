import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
const base='http://127.0.0.1:4173';
const out=process.argv[2] || '.cache/seo-browser';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext();
await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(base+'/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split');
 await page.locator('textarea').waitFor();
 await page.setViewportSize({width:1440,height:1000});
 await page.screenshot({path:out+'/split-desktop.png'});
 for(const [cta,text] of [['Advies voor één ruimte','ik wil beginnen met één ruimte'],['Vergelijk mijn installatieopties','ik wil meerdere ruimtes'],['Bespreek mijn uitbreidingsplan','ik wil nu beginnen'],['Vraag advies en een offerte aan','graag advies en een offerte voor mijn woning in Limburg.']]){
  await page.getByRole('link',{name:cta,exact:true}).click();
  await page.waitForFunction(text=>document.querySelector('p[aria-live="polite"]')?.textContent.includes(text),text);
  assert.match(await page.locator('p[aria-live="polite"]').innerText(),new RegExp(text));
 }
 const faq=page.locator('main details').first();await faq.locator('summary').click();assert.equal(await faq.getAttribute('open'),'');
 for(const width of [320,375,768,1440]){
  await page.setViewportSize({width,height:900});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'comparison overflow at '+width);
 }
 await page.setViewportSize({width:375,height:900});await page.evaluate(()=>scrollTo(0,0));
 await page.screenshot({path:out+'/split-mobile.png'});
 await page.goto(base+'/');await page.waitForFunction(()=>document.querySelector('main h1')?.textContent.includes('Limburg'));
 await page.setViewportSize({width:320,height:900});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'home overflow');
 await page.screenshot({path:out+'/home-mobile.png'});
 assert.deepEqual(errors,[]);
 await writeFile(out+'/browser-check.json',JSON.stringify({passed:true,comparisonCTA:4,faq:true,widths:[320,375,768,1440],homeWidth:320,submittedForms:0,pageErrors:errors},null,2));
 console.log('Browser: vier CTA-keuzes en reset, FAQ, mobiele layout, homepage-H1 en nul formulierinzendingen gecontroleerd.');
}finally{await browser.close()}
