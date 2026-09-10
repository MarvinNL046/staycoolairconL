import assert from 'node:assert/strict';
import { build } from 'esbuild';
const result = await build({stdin:{contents:"export {productData} from './src/data/products'; export {aircoProducts} from './src/data/aircoProducts'; export {cashflowVariants} from './src/data/cashflowVariants';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {productData,aircoProducts,cashflowVariants}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
assert.equal(cashflowVariants.length,53);
assert.equal(new Set(cashflowVariants.map(v=>v.sourceSlug)).size,53);
const models=productData.brands.flatMap(b=>b.models).filter(m=>m.cashflowOffers);
assert.equal(models.length,10);
assert.equal(models.reduce((n,m)=>n+m.cashflowOffers.length,0),53);
assert.ok(models.every(m=>m.specifications.every(s=>!/prijs|prijzen/i.test(s.label))));
assert.equal(aircoProducts.filter(p=>p.cashflowPrice).length,94);
assert.equal(aircoProducts.find(p=>p.id==='81002012').price,1571.19);
assert.equal(aircoProducts.find(p=>p.id==='81002032').price,1654.07);
assert.equal(aircoProducts.find(p=>p.id==='81002036').price,1632.29);
assert.equal(aircoProducts.find(p=>p.id==='81001690').price,undefined,'Pular-duo heeft conflicterende catalogusprijzen');
assert.equal(aircoProducts.find(p=>p.id==='81001691').price,undefined);
assert.equal(aircoProducts.find(p=>p.id==='81001686').price,3847.8,'Cosmo-triple heeft de prijs voor drie binnenunits');
assert.equal(aircoProducts.find(p=>p.id==='mitsubishi-msz-hr35vf').price,1840);
assert.equal(aircoProducts.find(p=>p.id==='mitsubishi-msz-hr50vf').price,2559.15);
assert.equal(aircoProducts.find(p=>p.id==='81001367').price,3387.40,'Commercieel: afronding op halve cent');
assert.notEqual(aircoProducts.find(p=>p.id==='81001627').price,aircoProducts.find(p=>p.id==='81002196').price,'MU2R15-0909 en 0909P blijven gescheiden');
for(const id of ['81002212','81002214','81001402','81002042','81001948','81001684']) {
  assert.equal(aircoProducts.find(p=>p.id===id).price,undefined,'Onzekere/oude/outlet-uitvoering op aanvraag: '+id);
}
const daikin=productData.brands.find(b=>b.name==='Daikin');
assert.equal(daikin.models.find(m=>m.slug==='perfera-ftxm-r').cashflowOffers,undefined,'FTXM-R mag niet de prijs van FTXM-A krijgen');
assert.equal(daikin.models.find(m=>m.slug==='perfera-vloermodel').cashflowOffers.length,3);
assert.ok(daikin.models.find(m=>m.slug==='perfera-vloermodel').cashflowOffers.every(v=>v.name.includes('A9')),'Geen goedkopere B-generatie bij A9');
assert.equal(daikin.models.find(m=>m.slug==='emura').cashflowOffers.length,12);
assert.equal(daikin.models.find(m=>m.slug==='comfora').price,'Vanaf €\u00a02.136,00 inclusief btw, installatie en materialen');
assert.equal(daikin.models.find(m=>m.slug==='stylish').price,'Prijs op aanvraag');
const allModels=productData.brands.flatMap(b=>b.models);
assert.equal(allModels.length,55);
assert.equal(allModels.filter(m=>!m.cashflowOffers).length,45);
for(const model of allModels) {
  assert.ok(model.specifications.every(s=>!/€|prijs/i.test(s.label+' '+s.value)),model.name);
  if(!model.cashflowOffers) assert.equal(model.price,'Prijs op aanvraag',model.name);
}
for(const p of aircoProducts) {
  if(p.cashflowPrice) { assert.ok(p.price>0 && p.cashflowSourceSlug,p.id); assert.ok(Number.isSafeInteger(Math.round(p.price*100))); }
  else assert.equal(p.price,undefined,p.id);
}
console.log('Alle 55 modelgroepen en 128 artikelen gecontroleerd: 53 modelvarianten, 94 artikelprijzen; onzeker aanbod op aanvraag.');
