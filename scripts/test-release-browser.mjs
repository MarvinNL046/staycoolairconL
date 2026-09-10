import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';
const out=process.argv[2]||'.cache/release-browser',base='http://127.0.0.1:4173';
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext();
let posts=0;
await context.route('**/*',r=>{if(r.request().method()==='POST'){posts++;return r.abort()}return new URL(r.request().url()).origin===base?r.continue():r.abort()});
const page=await context.newPage(),errors=[],checks=[];
page.on('pageerror',e=>errors.push(e.message));
const ready=()=>page.waitForFunction(()=>document.documentElement.dataset.routeReady===location.pathname);
try{
 const paths=['/','/contact','/thuisbatterij-calculator','/thuisbatterijen','/airco-a-plus-plus-plus-verwarmen','/airco-verwarming-kosten-besparing','/blog/airco-offerte-sittard','/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-2026','/products/tosot/pular','/onderhoud','/kosten-airco-plaatsen'];
 for(const width of [320,375,768,1440]){
  await page.setViewportSize({width,height:950});
  for(const path of paths){
   await page.goto(base+path);await ready();
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   checks.push({width,path,overflow});assert.ok(overflow<=2,`${path} overflow ${overflow} at ${width}`);
  }
 }
 await page.setViewportSize({width:375,height:950});
 await page.goto(base+'/thuisbatterij-calculator');await ready();
 assert.match(await page.locator('section[aria-live]').innerText(),/330/);
 await page.getByLabel('Jaarlijks stroomverbruik (kWh)',{exact:true}).fill('0');
 assert.match(await page.locator('section[aria-live]').innerText(),/€\s*0/);
 assert.match(await page.locator('section[aria-live]').innerText(),/niet berekenbaar/);
 await page.getByLabel('Jaarlijks stroomverbruik (kWh)',{exact:true}).fill('4500');
 await page.getByLabel('Prijs ingekochte stroom (€/kWh)',{exact:true}).fill('0.40');
 assert.match(await page.locator('section[aria-live]').innerText(),/465/);
 await page.getByLabel('Prijs ingekochte stroom (€/kWh)',{exact:true}).fill('');
 assert.match(await page.locator('section[aria-live]').innerText(),/Vul alle velden/);
 await page.getByLabel('Prijs ingekochte stroom (€/kWh)',{exact:true}).fill('0.30');
 await page.screenshot({path:out+'/calculator-mobiel.png',fullPage:true});
 await page.goto(base+'/blog/airco-offerte-sittard');await ready();
 await page.getByRole('link',{name:'Vraag een airco-offerte voor Sittard',exact:true}).click();await ready();
 assert.match(await page.locator('main').innerText(),/Een airco laten installeren in Sittard/);
 await page.goto(base+'/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-2026');await ready();
 await page.screenshot({path:out+'/subsidie-mobiel.png',fullPage:true});
 assert.deepEqual(errors,[]);assert.equal(posts,0);
 console.log(JSON.stringify({passed:checks.length,calculator:true,ctaContext:true,posts,errors}));
} finally {await fs.writeFile(out+'/browser-check.json',JSON.stringify({checks,posts,errors},null,2));await browser.close()}
