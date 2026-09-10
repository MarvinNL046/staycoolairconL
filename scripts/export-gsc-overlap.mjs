import fs from 'node:fs';
const out='../../../outputs/seo-afronding-2026-09-10';const source='../../../outputs/seo-audit-staycool-2026-09-10';
const queries=[];
for(const [name,query] of [['installatie','airco installatie limburg'],['onderhoud','airco onderhoud limburg']]) {
 const text=fs.readFileSync(`${source}/gsc-query-${name}-limburg.txt`,'utf8');
 const rows=[...text.matchAll(/- row "(https:\/\/staycoolairco\.nl\/[^\s]*) ([\d.]+) ([\d.]+)":/g)].map(m=>({url:m[1],clicks:Number(m[2].replaceAll('.','')),impressions:Number(m[3].replaceAll('.',''))}));
 const total=Number(text.match(/1-10 van (\d+)/)?.[1]);
 queries.push({query,period:'2026-06-09/2026-09-08',totalReportedUrls:total,savedRows:rows.length,rows,limitation:'Only the first visible 10 URL rows were saved; no weekly query-by-page history or attributed conversions.'});
}
fs.writeFileSync(`${out}/gsc-query-page-evidence.json`,JSON.stringify(queries,null,2));
const q=v=>'"'+String(v).replaceAll('"','""')+'"';
fs.writeFileSync(`${out}/gsc-query-page-evidence.csv`,['query;url;clicks;impressions;period',...queries.flatMap(g=>g.rows.map(r=>[g.query,r.url,r.clicks,r.impressions,g.period].map(q).join(';')))].join('\n'));
console.log(queries.map(g=>({query:g.query,totalReported:g.totalReportedUrls,saved:g.savedRows})));
