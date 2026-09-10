# SEO-werkstatus — eerst lezen bij hervatten

## Publicatie gestart — 10 september 2026

De gebruiker heeft expliciet toestemming gegeven om alle afgeronde wijzigingen live te pushen. Publicatie via main van MarvinNL046/staycoolairconL naar Vercel-project staycoolairco-nl. Vorige productie/terugvaloptie: dpl_2hRTrgVTDHnX1Z4ZSsV23946Yfzx (commit ca8d981ef6ede773c8f21034de696a331d6175c3). De onderstaande lokale controles zijn afgerond; de daadwerkelijke deployment- en livecontrole-uitkomsten worden vastgelegd in het externe publicatierapport bij deze werkmap. Historische vermeldingen over ontbrekende publicatietoestemming zijn hiermee vervallen.

## Actuele status — publicatiecontrole afgerond, 10 september 2026

Deze aanvulling vervangt de oudere openstaande TypeScript- en inhoudspunten hieronder. Het actuele rapport staat in `../../publicatiecontrole-2026-09-10/Publicatiecontrole.md`.

- App-TypeScript, Node-configuratie, `api/send-email.ts` en `middleware.ts` slagen met strenge instellingen. De eerdere 786 meldingen zijn opgelost; instellingen zijn niet versoepeld. `npm run build` en `build:seo` gebruiken nu dezelfde build met typecontrole, bronprijs-, routing-, inhoud- en offline IndexNow-tests. Geen oude generator meer in de standaardbuild.
- 52 gidsen herschreven via EvidenceGuide: 41 batterijgidsen en 11 aircogidsen. Geen onbevestigde ISDE-/btw-/terugverdienbeloften in deze nieuwe gidsen. Labelgrens A+++ voor splitverwarming: SCOP ≥5,10. Primaire bronnen staan op de pagina’s en in het rapport. Geen nieuwe redirects of noindex-besluiten.
- Brede opschoning van garanties, besparingspercentages en aantallen; herkenbare voorbeeldreviews/videoplaceholders verwijderd uit weergave. De bestaande `googleReviews.ts`-broncollectie is niet opnieuw als compleet geverifieerde actuele Google-export bestempeld. Volledige certificering van elk oud fabrikantdetail is niet gedaan.
- Batterijcalculator rekent nu werkelijk met invoer en expliciete aannames voor een scenario na salderen. Geen vaste €1.150/6,2 jaar meer. Nul/ongeldige invoer en negatieve opbrengst getest. Nieuwe onderwerp-CTA’s komen met context aan op contact.
- Definitieve build geslaagd: 689 HTML-routes, 636 technisch indexeerbaar, 336 sitemappagina’s, 0 dubbele titles/descriptions tussen verschillende canonicals en 0 schema-auditfouten. 336 kopstructuren geslaagd. 689 zonder JS geslaagd. Met JS eerst 8 time-outs onder gelijktijdige testbelasting; alle 8 daarna met dezelfde 12s-limiet afzonderlijk geslaagd (0,2–2,3s). Bewaar beide rapporten; geen foutmeldingen wegpoetsen.
- CRO: 44 pagina/viewportcombinaties en calculator/aanvraagcontext geslaagd, ook op definitieve build. Bestaande vier koop-CTA’s/reset/FAQ en productcarrousel/SPA/terugknop geslaagd. Geen formulierinzendingen.
- IndexNow: build genereert `dist/indexnow-manifest.json` met 336 sitemap-URL’s en inhoudshashes. Productieworkflow gebruikt `node scripts/indexnow.mjs --live-manifest --submit`. Iedere live pagina moet dezelfde hash, titel en canonical hebben en indexeerbaar zijn. Manifest offline volledig gecontroleerd. Het oude rootbestand bevat alleen vertrouwde host/keyconfiguratie en een lege legacywijzigingslijst. Gebruik voor live dry-run expliciet `--live-manifest`; nog NIET uitgevoerd of gepingd.
- Drie ongebruikte defecte legacyfiles uit src verwijderd en bewaard in `../../../work/legacy-retired/`: AI-generator, testgenerator met ontbrekende databasehelper, en ongebruikte Express-types. Geen databasewrites/API-generatie gedaan.
- Nog niet gepubliceerd of gepusht. Repo: `MarvinNL046/staycoolairconL`, lokale branch `main`. De volgende stap is een afzonderlijk beoordeelde release/publicatie, daarna echte live HTTP-/formulier-/IndexNow-/GSC-/Bing-controles. Geen nieuwe toestemming vragen voor gewone lokale fixes; publicatie nog niet als uitgevoerd beschouwen.
- Voor verdere kannibalisatiesamenvoegingen blijft volledige query×pagina-/weekdata met conversies nodig. Het bestaande clusterplan, de hubverwijzingen en het rolonderscheid zijn al geïmplementeerd.

### Nieuwe herhaalbare checks

- `node scripts/build-seo.mjs` — volledige lokale releasebuild; nooit externe pings.
- `node scripts/test-release-browser.mjs [output-map]` — 44 viewportcontroles, calculator, onderwerp-CTA; alle POST’s geblokkeerd.
- `node scripts/test-prerender-recheck.mjs <eerder-results.json>` — gerichte hercontrole met behoud van de oorspronkelijke foutregistratie.
- `node scripts/test-battery-estimate.mjs` — rekenlogica en grensgevallen.
- `node scripts/test-indexnow-manifest.mjs` — volledige gebouwde sitemapmanifest offline controleren.

---

## Historische werkstatus vóór deze publicatiecontrole

Bijgewerkt: 10 september 2026, na inhoudelijke opschoning, clusterlinks en finale CRO-controle.

## Laatste ronde — actuele aanvulling

- Unieke titles/descriptions op alle 636 indexeerbare routes; laatste twee dubbele descriptiongroepen opgelost via specifieke artikelmetadata. 126 leverancierbeschrijvingen opgeschoond.
- Generieke schema-ratings verwijderd (474 AggregateRating-objecten → 0), vier ComparisonTable-aanroepen hersteld, verzonnen datums/aanboddefaults en lege breadcrumb-items verwijderd. Gedeelde schemabuilders gebruiken het werkgebied niet langer als fictief vestigingsadres.
- Lokale generator: geen gefingeerde cases, installatie-aantallen, auteurscontrole of oude onderhoudsprijzen meer. Ruimte/plaats-template en homepageclaims opgeschoond. Niet iedere oude detailpagina is volledig gefactcheckt.
- Drie subsidiepagina's hebben een eigen taak en RVO-bronnen; geen onbevestigde bedragen/termijnen. Drie servicepagina's onderscheiden montageproces, woningvoorbereiding en offertecontrole.
- Homepage en alle 40 servicepagina's verwijzen naar aankoop, kosten, splitvergelijking en/of onderhoudsabonnementen. Geen nieuwe commerciële redirects zonder voldoende query/conversiebewijs.
- 56 grote productfoto's in dist geoptimaliseerd; 14.279.368 bytes bespaard. Public-bronnen onveranderd. Energie-/technische tekeningen uitgesloten op bestandsnaam.
- build:seo bevat nu audit-content-quality.mjs --check. Finale build geslaagd; brede 689-routecontrole en 336-kopcontrole geslaagd. Daarna extra homepagewijzigingen afzonderlijk met CRO/SPA getest. Mobiele kaartoverloop opgelost, CRO geslaagd op 320/375/768/1440. Geen leads of pings.
- Strikte TypeScript-check blijft falen: laatste opgeslagen meting 786 meldingen. Niet alle types opgelost, instellingen niet versoepeld.
- Actuele rapporten: ../../seo-afronding-2026-09-10/Resultaat-en-open-punten.md en Kannibalisatie-en-clusterplan.md. GSC-bewijs: exacte query installatie 27 URL's, onderhoud 31; van elk zijn slechts eerste 10 rijen opgeslagen. Geen wekelijkse query×pagina- of conversiereeks. Dat onderscheid behouden.

## Doel en toestemming

Marvin wil betere verkoopaanvragen in Limburg, onderhoud en vooral onderhoudsabonnementen. Lokale implementatie, audit en controles zijn herhaaldelijk toegestaan. Niet naar productie gepubliceerd, niets gepusht, geen echte leads verzonden. Vraag niet opnieuw toestemming voor normale lokale fixes. Gebruiker is ingelogd bij Bing Webmaster Tools; property staycoolairco.nl is toegankelijk.

## Bronnen van waarheid

- Cashflow: cashflow.wetry.app; repository MarvinNL046/wetrycashflow is lokaal gekloond. Catalogusprijzen exclusief 21% btw, inclusief installatie én materialen. Btw één keer toevoegen. Gebruik gecontroleerde mappings in src/data/cashflow*.ts / installationOffers, geen nieuwe aannames.
- Modellen zonder betrouwbare match: prijs op aanvraag (expliciet goedgekeurd).
- Onderhoud: aanmelden.staycoolairco.nl is actueel. Basis €13/maand, Premium €16/maand; extra binnenunit €8/€11. Alleen door StayCool geleverde/geïnstalleerde systemen; optioneel abonnement. Controleer bestaande data/maintenancePlans.ts.
- Eerdere GSC-export, Obsidian-onderzoek en auditbestanden staan in de outputs buiten deze repository. Nieuwe gegevens niet verzinnen. Clustertracker bevat ook oudere onbewezen volumes/claims; behandel die als historische planning.

## Gereed lokaal

- Aankoopcluster, onderhoudscluster, merk/modelpagina's. Prijsregressie: 55 modelgroepen, 128 artikelen, 94 artikelprijzen, 53 varianten; onzekere modellen op aanvraag.
- Kostengids /kosten-airco-plaatsen, bronprijzen en context naar offerteformulier; exacte legacy-kopie krijgt redirect.
- MOFU-keuzehulp /seo/pillar-8-vergelijkingen/mono-split-vs-multi-split: één of meerdere ruimtes, uitbreiding, realistische beperkingen, bronprijzen, interne links en vier CTA-contexten inclusief reset. Browser getest op mobiel/desktop zonder inzendingen.
- Alle 689 bestaande eindroutes krijgen inhoud, metadata en schema in initiële HTML via src/entry-server.tsx en scripts/prerender-site.mjs. React hydrateert dezelfde componenten. De eerdere renderer voor twee gidsen is vervangen. 636 routes staan indexatie toe, 53 behouden noindex; dit zijn GEEN gemeten indexatieaantallen.
- Vercel gebruikt cleanUrls en losse HTML-bestanden zonder homepage-catchall; middleware geeft echte permanente redirects en 404's. Lokale preview spiegelt de routing. Productiegedrag na deployment nog verifiëren.
- De gegenereerde sitemaps bevatten 336 unieke canonieke URL's, zonder redirects/noindex. Bron-sitemaps blijven de redactionele selectie bepalen; niet alle 636 indexeerbare routes automatisch toegevoegd. Canonical-typo bij /advies en niet-bestaande canonical bij Horst hersteld.
- Alle 689 routes getest met én zonder JavaScript: nul gemelde render/hydration-fouten. Alle 336 sitemap-URL's: één H1 als eerste kop, geen overgeslagen niveaus, één canonical en description. 56 productcarrousels: eerste afbeelding geladen en zichtbaar zonder JS. SPA-navigatie, terugknop, carrousel en CTA-contexten getest zonder formulierinzending.
- Stabiele initiële chatbot/calculatorstaat; reviews niet meer willekeurig herschikt of met verzonnen plaatsnamen aangevuld. Native afbeeldingen en contactfallback zonder JavaScript. Dit verifieert niet automatisch alle oorspronkelijke reviewclaims.
- Echte 404- en redirectafhandeling voorbereid in middleware.ts / routing-manifest.json / vercel.json.
- Eerdere kopcontrole herstelde zeven kapotte thuisbatterijpagina's en dertig ontbrekende canonicals. Bredere renderingcontrole herstelde aanvullende browserafhankelijkheden en ontbrekende imports. Dit is geen complete factcheck van oude content.
- IndexNow-key bestaat al en is live geldig. Nieuwe sender en GitHub workflow voorbereid, alleen twee expliciete gewijzigde paginarevisies geregistreerd. Live dry-run blokkeert terecht nog niet gepubliceerde inhoud. Er is NIET gepingd.

## Gemeten live — NIET verwarren met lokaal

- Bing: 473 geïndexeerd; 2 fouten, 14 waarschuwingen, 12 uitgesloten. Geen conclusie dat alle huidige pagina's geïndexeerd zijn.
- Bing Recommendations: ontbrekende H1 bij 44 pagina's; dubbele descriptions 96, dubbele titles 95, weinig inhoud 78. Historische scans.
- Beide Bing-sitemaps Success, geen fouten/waarschuwingen; index laatst gelezen 9 september. 647 ontdekt is som van twee rapportregels met overlap, geen uniek aantal.
- IndexNow: nul laatste 18 uur; grafiek 259 inzendingen in april, URL-tabel 344 historische regels.
- Eerdere live HTTP-crawl: 345 sitemap-URL's, alle 200; alle initiële bronresponsen zonder H1/canonical. Dit is nu lokaal verholpen, nog niet gepubliceerd.
- Bing indexeert historische /404 als 200. Dead-linkfilter toont airco-calculator.html en contact-us.html als oude 404. Server-errorfilter op de geopende rootselectie: No URLs Applicable. De twee fouten zijn daarmee niet individueel verklaard.

## Eerstvolgende werk, in volgorde

1. Uitgevoerd clusterplan verder toetsen met volledige query×pagina-/weekdata en conversies vóór samenvoegingen. Interne hubverwijzingen en eerste rolonderscheid zijn lokaal gereed; niet opnieuw als ongedaan werk voorstellen.
2. Oude content bevat nog onbewezen besparingspercentages, garanties, lokale installatie-aantallen en subsidieclaims. Structurele checks bewijzen zulke claims niet. Verifieer/repareer met primaire bronnen en bedrijfsinformatie.
3. Bestaande projectbrede TypeScript-fouten apart oplossen; inhoudelijke schema- en claimcontrole buiten de aangepaste componenten voortzetten. ComparisonTable, generieke ratings en grote productfoto's zijn in de laatste ronde aangepakt.
4. Productie-uitrol apart behandelen. Daarna live HTTP-/URL-inspectie, echte IndexNow-ontvangst en GitHub/Vercel deployment-event bewijzen. Ontvangst is geen indexatie. Andere zoekmachines niet als gecontroleerd claimen zonder hun data.

## Herhaalbare checks en omgeving

Repo: outputs/staycoolairco/staycoolairco.nl onder de hoofdworkspace. Preview http://127.0.0.1:4173 is actief.

- node scripts/build-seo.mjs — ook npm run build:seo; Vercel buildCommand is hierop ingesteld. Build + HTML/inhoud/prijs/routing/offline-IndexNowchecks, stopt bij fout.
- node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173
- node scripts/test-prerender-site.mjs [output-map] — alle 689 routes met en zonder JS.
- node scripts/test-prerender-images.mjs [output-map] — native eerste productafbeeldingen, inclusief decode en zichtbaarheid zonder JS.
- node scripts/test-prerender-navigation.mjs — SPA-navigatie, terugknop, canonical, carrousel.
- node scripts/audit-headings.mjs [output-map] — huidige 336 sitemaproutes in headless Chrome, blokkeert externe requests, exit 1 bij afwijkingen.
- node scripts/test-seo-browser.mjs [output-map] — echte CTA/FAQ/viewportcontrole; geen inzendingen.
- node scripts/test-cost-guide.mjs --http
- node scripts/test-split-comparison.mjs --http
- node scripts/test-model-prices.mjs
- node scripts/test-routing.mjs
- node scripts/test-indexnow.mjs — offline, geen externe pings.
- node scripts/indexnow.mjs — live read-only dry-run; --submit NIET gebruiken voor lokale versies.

Build en bovengenoemde regressie-/browserchecks geslaagd op 10 september. Echte app-typecheck met -p tsconfig.app.json faalt nog op veel bestaande fouten; root-tsc zonder project controleert de app niet volledig. build:seo bevat geen volledige app-typecheck. Niet claimen dat die fouten zijn opgelost. Veel eerdere uncommitted changes: niet resetten of overschrijven.

Actueel rapport en bewijs: ../../html-rendering-2026-09-10/Resultaat-en-gebruik.md, results.json, heading-audit.json, product-images.json, routing-render-report.json, navigation.json en cro/browser-check.json. Historisch Bing-rapport: ../../zoekmachine-controle-2026-09-10/Resultaat-en-vervolg.md. Eerder kostenrapport: ../../koop-update/Kostenpagina-SEO-en-CRO.md.
