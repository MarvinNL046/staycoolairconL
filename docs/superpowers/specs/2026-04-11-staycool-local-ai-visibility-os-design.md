# StayCool Local AI Visibility OS Design

**Date:** 2026-04-11  
**Business:** StayCool Airco  
**Primary region:** Limburg breed  
**Primary channel:** Claude in Chrome  
**Output language:** Nederlands

## 1. Context

StayCool wil zijn bestaande webapp, Google Business Profile en lokale contentmachine aanpassen op een nieuw lokaal zoeklandschap waarin klassieke local SEO niet meer voldoende is. Naast proximity, relevance en prominence moet de digitale footprint ook sterk genoeg zijn op `attribute match`: concrete eigenschappen, use-cases, responstijden, servicecontext, regionale signalen en reviewtaal die door AI-systemen zoals Gemini in Google Maps kunnen worden gematcht met de vraag van een zoeker.

Deze blueprint is expliciet ontworpen voor StayCool zelf, niet als generiek agency-framework. De output moet direct bruikbaar zijn in Claude in Chrome, waarbij Claude toegang kan gebruiken tot browserbronnen zoals Google Maps, Google Business Profile, Ahrefs, Google Search Console en de bestaande StayCool-webapp.

## 2. Doel

Een production-ready operating system ontwerpen waarmee StayCool:

- beter zichtbaar wordt in klassieke lokale zoekresultaten;
- sterker wordt op AI-gedreven lokale aanbevelingen;
- zijn GBP, reviews, website en contentproductie op elkaar afstemt;
- sneller auditinzichten omzet in concrete acties;
- zowel `airco` als `thuisbatterijen` structureel als lokale zichtbaarheidspijlers ontwikkelt.

## 3. Scope

### In scope

- strategie voor lokale zichtbaarheid op basis van attribute match;
- promptbibliotheek voor Claude in Chrome;
- auditflows voor GBP, concurrenten, reviews, website en keyword gaps;
- productiepijplijn voor GBP-copy, reviewsystemen en websitecontent;
- maandelijkse en wekelijkse executieroutines;
- twee inhoudelijke pijlers:
  - `airco installatie, onderhoud, reparatie, verwarmen met airco, merken/modellen en use-cases`
  - `thuisbatterijen, rendement, capaciteit, installatiecontext, dynamische energie, zonnepanelen en AlphaESS-gerelateerde content`

### Out of scope

- generieke agency templates voor andere bedrijven;
- technische implementatie van nieuwe websitefeatures;
- directe wijzigingen aan de codebase in deze specfase;
- stadsgerichte massaproductie van dunne SEO-pagina's als hoofdaanpak.

## 4. Strategische uitgangspunten

1. StayCool moet niet alleen ranken, maar ook gekozen worden wanneer AI-systemen GBP, reviews en sitecontent samenvatten.
2. Reviewinhoud weegt zwaarder dan alleen reviewvolume; specifieke taal is belangrijker dan generieke lof.
3. Limburg-brede relevantie is de hoofdlijn; lokale signalen worden gebruikt als versterking, niet als losse stads-SEO-fabriek.
4. De website moet leesbaar zijn voor zowel klassieke zoekmachines als AI-systemen die attributen uit teksten halen.
5. Elke prompt moet eindigen in beslisbare output: tabellen, prioriteiten, publiceerbare copy of checklists.

## 5. Systeemopbouw

Het systeem bestaat uit vier lagen.

### 5.1 Contextlaag

Claude moet steeds werken vanuit vaste StayCool-context in plaats van generieke aannames. Deze laag bevat:

- bedrijfsprofiel StayCool;
- USP's en positionering;
- Limburg-brede focus;
- bestaande services;
- kernzoekwoorden;
- concurrentenlijst;
- GBP-informatie;
- bestaande websitestructuur;
- scheiding tussen de pijlers `airco` en `thuisbatterijen`.

### 5.2 Auditlaag

Deze laag brengt in kaart waar de digitale footprint nog te dun is, met nadruk op attribute match.

### 5.3 Beslislaag

Deze laag vertaalt auditdata naar prioriteit, impact en uitvoervolgorde.

### 5.4 Productielaag

Deze laag levert direct bruikbare output voor publicatie of uitvoering op GBP, reviewniveau en website.

## 6. Audit Stack

De audit stack wordt ingericht als een `attribute match audit engine`.

### 6.1 GBP Foundation Audit

Analyse van:

- primaire en secundaire categorieën;
- attributen;
- services en service descriptions;
- description;
- Q&A;
- posts;
- foto's;
- profielvolledigheid.

Doel: bepalen wat op profielniveau ontbreekt om lokaal mee te doen.

### 6.2 Competitor Map Pack Audit

Vergelijkt StayCool met concurrenten op kernzoekopdrachten rond airco en thuisbatterijen in Limburg.

Doel: patronen vinden in categorieën, attributen en presentatie van bedrijven die terugkomen in zichtbare resultaten.

### 6.3 Review Attribute Audit

Analyse van StayCool- en concurrentreviews op:

- genoemde services;
- responstijd en beschikbaarheid;
- regio- of plaatsvermeldingen;
- concrete situaties;
- monteursnamen;
- resultaatbeschrijvingen;
- thuisbatterij- en airco-use-cases.

Doel: vaststellen welke attributen al door klanten bevestigd worden en welke ontbreken.

### 6.4 Website Attribute Coverage Audit

Controleert of de site expliciet genoeg is over:

- diensten;
- problemen;
- use-cases;
- servicegebieden;
- werkwijze;
- responstijden;
- product- en merkcontext;
- vertrouwen en ervaring.

Doel: bepalen welke intenties en eigenschappen onvoldoende expliciet op de site staan.

### 6.5 Keyword-to-Attribute Gap Audit

Koppelt Ahrefs- en GSC-data aan bestaande GBP-copy en webcontent.

Doel: zoektermen en semantische details vinden waarvoor vraag bestaat, maar waarvoor de huidige copy te dun is.

### 6.6 Service Area Relevance Audit

Beoordeelt of StayCool sterk genoeg Limburg-breed gepositioneerd is, zonder te leunen op dunne stadscontent.

Doel: regionale dekking valideren voor beide pijlers.

### 6.7 Content Freshness Audit

Meet activiteitssignalen zoals:

- recente posts;
- nieuwe pagina's;
- reviewgroei;
- foto-uploads;
- service-updates.

Doel: vaststellen of StayCool actief oogt voor Google en AI-systemen.

### 6.8 Execution Priority Audit

Combineert auditbevindingen in vijf actielagen:

- high impact, low effort;
- high impact, structural;
- content backlog;
- GBP quick wins;
- review system fixes.

Doel: alle losse audits terugbrengen naar een uitvoerbare prioriteitenlijst.

## 7. Content- en Productie Stack

De productielaag is ontworpen als doorlopende contentmachine.

### 7.1 GBP Copy Engine

Produceert:

- GBP description varianten;
- service descriptions;
- Q&A-antwoorden;
- postkalenders en postcopy;
- ideeën voor foto captions.

### 7.2 Review Engine

Produceert:

- review ask templates per dienst;
- review asks per situatie;
- follow-up verzoeken na installatie, onderhoud of reparatie;
- review response templates voor 5, 4, 3 en 1-2 sterren.

Doel: reviews sturen richting concrete, matchbare taal.

### 7.3 Service Page Engine

Genereert voorstellen voor:

- ontbrekende servicepagina's;
- use-casepagina's;
- probleemgerichte pagina's;
- vergelijking- en keuzehulppagina's.

Voor `airco` ligt de nadruk op installatie, onderhoud, storing, verwarmen, ruimtes, merken en hinderpunten.  
Voor `thuisbatterijen` ligt de nadruk op capaciteit, rendement, dynamische energie, zonnepanelen, noodstroom en installatiekeuzes.

### 7.4 Attribute Landing Engine

Genereert pagina's voor expliciete attributen en vraag-naar-antwoord-intenties, zoals:

- snelle installatie;
- stille oplossing voor slaapkamer;
- advies voor bestaande bouw;
- oplossing voor terugleverkosten;
- geschikt voor verwarmen in de winter;
- thuisbatterij voor slim energiegebruik.

### 7.5 Regional Relevance Engine

Bouwt Limburg-brede relevantie via:

- regionale servicecontent;
- regionale cases;
- posts met Limburg-context;
- reviewcopy met regioverwijzingen;
- ondersteunende locatievermeldingen waar inhoudelijk logisch.

### 7.6 Content Refresh Engine

Verbetert bestaande pagina's door:

- ontbrekende attributen toe te voegen;
- FAQ's uit te breiden;
- use-cases toe te voegen;
- reviews en cases te verwerken;
- interne links te verscherpen.

## 8. Prompt Library Structuur

De prompt library wordt ingericht als operationeel systeem voor Claude in Chrome.

### 8.1 `00-context`

Basisprompts en referentieteksten voor:

- bedrijfsprofiel;
- positionering;
- Limburg-focus;
- airco-pijler;
- thuisbatterij-pijler;
- concurrenten;
- kernzoekwoorden;
- huidige site-structuur.

### 8.2 `01-audits`

Prompts voor:

- GBP categorie-audit;
- GBP attributen-audit;
- review attribute-audit;
- review velocity-audit;
- GBP posts-audit;
- GBP foto-audit;
- services section-audit;
- website attribute coverage-audit;
- Ahrefs/GSC keyword attribute gap-audit;
- competitor map pack pattern-audit.

### 8.3 `02-prioritering`

Prompts voor:

- quick wins prioriteren;
- 90-dagen actieplan;
- hoogste impact contentgaten;
- GBP versus website gap-prioriteiten;
- review-systeem prioriteiten.

### 8.4 `03-gbp-productie`

Prompts voor:

- descriptions;
- service descriptions;
- Q&A;
- GBP posts;
- review responses;
- review asks;
- foto-uploadplanning;
- maandelijkse GBP-contentkalender.

### 8.5 `04-website-productie`

Prompts voor:

- nieuwe servicepagina's;
- refresh van bestaande pagina's;
- attributepagina's;
- FAQ-uitbreidingen;
- metadata;
- interne links;
- regionale relevantieblokken;
- schema-ideeën en contentextractie voor structured data.

### 8.6 `05-executie-routines`

Prompts voor ritme en onderhoud:

- wekelijkse local visibility review;
- maandelijkse competitor refresh;
- maandelijkse review analyse;
- kwartaal review van content gaps;
- QA prompt voor nieuwe pagina's.

### 8.7 `06-master-prompts`

Zwaardere samengestelde prompts voor:

- full local AI visibility audit;
- 90-dagen growth plan voor StayCool;
- airco content backlog generator;
- thuisbatterij content backlog generator;
- GBP execution operator.

## 9. Promptregels

Elke prompt in de bibliotheek moet Claude expliciet instrueren om:

- in Nederlands te antwoorden;
- geen vaag advies te geven;
- tabellen te gebruiken waar dat helpt;
- `airco` en `thuisbatterijen` apart te beoordelen;
- `Limburg breed` als hoofdregio te behandelen;
- af te sluiten met:
  - topprioriteiten;
  - quick wins;
  - direct publiceerbare output;
  - zaken die later kunnen.

## 10. Outputvereisten

Elke prompt moet eindigen in ten minste één van deze outputvormen:

- auditmatrix;
- impacttabel;
- publiceerbare copy;
- backlog met prioriteiten;
- weekplanning;
- checklist voor uitvoering.

De output moet beslisbaar zijn en niet blijven steken in algemene aanbevelingen.

## 11. Uitvoervolgorde

### Week 1: foundation

- categorie-audit;
- attributen-audit;
- foundation quick wins.

### Week 2: listing optimalisatie

- GBP description;
- services section;
- Q&A en basiscopy.

### Week 3: review engine

- review teardown;
- review ask systeem;
- response templates;
- velocity-doelen.

### Week 4: content engine

- posts;
- foto-aanpak;
- website attribute gaps;
- backlog voor nieuwe of te verversen pagina's.

### Daarna: ritmische uitvoering

- wekelijks: reviews, posts, quick checks;
- maandelijks: competitor en visibility refresh;
- per kwartaal: content- en structuurherijking.

## 12. Verwachte deliverables

Na uitwerking van deze blueprint moet StayCool beschikken over:

- een vaste contextset voor Claude in Chrome;
- een production-ready promptbibliotheek;
- een auditvolgorde;
- een prioriteringsmodel;
- een review- en GBP-systeem;
- een backlog voor airco-content;
- een backlog voor thuisbatterij-content;
- een uitvoerritme voor doorlopende lokale zichtbaarheid.

## 13. Risico's en guardrails

- Vermijd dunne, duplicatieve stadscontent als primaire groeistrategie.
- Vermijd generieke reviewvragen; stuur op concrete beschrijving van dienst, context en resultaat.
- Vermijd losse auditrapporten zonder prioritering of uitvoerbare output.
- Vermijd overmatige keyword stuffing in GBP of webcopy; matchbare attributen moeten natuurlijk geformuleerd blijven.
- Houd `airco` en `thuisbatterijen` inhoudelijk gescheiden waar intentie en funnel verschillen.

## 14. Succescriteria

Dit ontwerp is geslaagd wanneer de uiteindelijke promptbibliotheek:

- direct bruikbaar is in Claude in Chrome;
- volledig op StayCool is afgestemd;
- output levert in Nederlands;
- zowel GBP als website ondersteunt;
- zowel airco als thuisbatterijen afdekt;
- audit, besluitvorming en productie logisch aan elkaar koppelt;
- als terugkerend werkproces kan worden gebruikt, niet alleen als eenmalige oefening.
