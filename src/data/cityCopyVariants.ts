import type { CityTier, FaqItem } from '../types/programmatic-locations';

/**
 * City copy variants — paragraph-pools for programmatic city pages.
 *
 * The build picks one variant per content-type (intro / services / practical),
 * stable per city via djb2-hash. Combined with city-specific overrides this
 * gives every city a visibly different page, avoiding near-duplicate content.
 *
 * Tone follows /references/voice.md and /references/humour.md:
 *  - Marvin Smit, eigenaar StayCool, first-person
 *  - Short sentences, one idea per sentence
 *  - "all-in incl. BTW" pricing language
 *  - No exclamation marks, no marketing-jargon
 *  - Light dry observation per ~500 words, not a punchline per paragraph
 *
 * Tokens (interpolated by `renderTemplate`):
 *   {{city}}, {{region}}, {{postcodeRange}}, {{postcodeRangeReadable}},
 *   {{population}}, {{neighborhood1}}, {{neighborhood2}},
 *   {{landmark1}}, {{landmark2}}, {{housingMix}}, {{localConstraint}},
 *   {{installationCount}}
 */

/** Replace `{{token}}` placeholders in a string with values from the tokens map. */
export function renderTemplate(template: string, tokens: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => tokens[key] ?? `{{${key}}}`);
}

// ─── INTRO PARAGRAPHS ──────────────────────────────────────────────────────────
// Eerste alinea op de page — direct, antwoord-eerst, geen opwarmer.

export const CITY_INTRO_VARIANTS: Record<CityTier, string[]> = {
  groot: [
    `In {{city}} hebben we de afgelopen jaren ruim {{installationCount}} airco's geïnstalleerd, van enkele wandunits tot complete multi-split-systemen. We werken vanuit Nieuwstadt en zijn binnen 30-45 minuten ter plaatse — bij u thuis voor een vrijblijvende opname, of voor service als er iets is. Als grote gemeente met {{population}} inwoners zien we hier elk type woning langskomen: van moderne appartementen rond {{landmark1}} tot oudere woningen in {{neighborhood1}}.`,
    `{{city}} is voor ons al jaren één van de drukste werkgebieden. {{population}} inwoners, {{housingMix}}, en flink wat warmte-eilanden in de zomer — een logische combinatie voor airco-installatie. We zien hier veel single-splits voor slaap- of woonkamers, regelmatig multi-split bij grotere woningen, en sinds vorig jaar fors meer airco-warmtepompen omdat klanten gas willen vervangen.`,
    `Voor airco-installatie in {{city}} bent u bij ons aan het juiste adres. We hebben hier {{installationCount}}+ klanten geholpen, kennen de verschillen tussen {{neighborhood1}} en {{neighborhood2}}, en houden bij elke opname rekening met {{localConstraint}}. F-gassen gecertificeerd, eerlijke all-in prijzen vanaf €1.600 incl. BTW, en geen verhalen over "starting at" — wat in de offerte staat is wat u betaalt.`,
  ],
  middel: [
    `In {{city}} hebben we inmiddels {{installationCount}}+ installaties op de teller. {{population}} inwoners, een mix van {{housingMix}}, en in de zomer steeds meer dagen waarop een airco geen luxe is maar comfort. We rijden vanaf Nieuwstadt regelmatig richting {{city}} — vaak meerdere keren per week in het hoogseizoen.`,
    `Voor airco-installatie in {{city}} werken we al jaren samen met particulieren én met aannemers die nieuwbouw afronden. {{installationCount}} woningen later kennen we de typische woningvormen hier en de uitdagingen van {{localConstraint}}. We adviseren altijd op basis van uw situatie — niet op basis van wat het meest oplevert voor ons.`,
    `{{city}} ({{population}} inwoners) staat hoog op onze planning vanwege het werkvolume in de regio {{region}}. Met {{installationCount}}+ installaties hier weten we wat werkt: korte leidingroutes, stille buitenunits, en een helder voorgesprek zodat u weet wat u krijgt vóór de monteur komt. Geen meerwerk-verrassingen achteraf.`,
  ],
  klein: [
    `{{city}} is met zijn {{population}} inwoners een dorp waar we letterlijk klanten hebben in elke straat. We hebben hier {{installationCount}}+ airco's geplaatst — vaak na een aanbeveling van de buren, want zo gaat dat in deze omgeving. Geen anonieme landelijke partij; gewoon één team uit Nieuwstadt dat een halfuurtje rijdt en de klus klaart.`,
    `Voor airco-installatie in {{city}} hoeft u niet ver te zoeken. We rijden vanaf Nieuwstadt naar {{city}} en omgeving, kennen het werkgebied en de typische {{housingMix}} hier. {{installationCount}}+ installaties later weten we welke vermogens passen bij welke woningtypes, en hoe we {{localConstraint}} in goede banen leiden.`,
    `In {{city}} en de directe omgeving hebben we de afgelopen jaren {{installationCount}}+ klanten geholpen. Klein dorp, korte lijnen — de meeste opnames doen we binnen een week na uw aanvraag. Plaatsing volgt meestal binnen 1-3 weken; in het laagseizoen (november tot maart) regelmatig sneller.`,
  ],
};

// ─── SERVICES PARAGRAPHS ───────────────────────────────────────────────────────
// Wat we doen, met cijfers en eerlijke verwachtingen.

export const CITY_SERVICES_VARIANTS: Record<CityTier, string[]> = {
  groot: [
    `In {{city}} verzorgen we het complete traject: opname op locatie, advies op vermogen en merk, F-gassen-installatie, inbedrijfstelling en service achteraf. Vanaf €1.600 all-in incl. BTW voor een single-split, oplopend tot €4.000-€5.500 voor een multi-split met drie binnenunits. Géén "vanaf" zonder context — bij ons is het bedrag in de offerte het bedrag dat u betaalt, mits er bij de opname geen onverwachte zaken aan het licht komen (en die benoemen we vooraf).`,
    `Wat we in {{city}} aanbieden: nieuwe installatie, vervanging van bestaande units, jaarlijks onderhoud (vanaf €99), en storingsbezoek (vanaf €89 voorrijden, dat verrekenen we als we ter plaatse repareren). We werken met A-merken — Daikin, Mitsubishi Heavy, LG, Samsung, Toshiba en Tosot — en niet met no-name-units van Marktplaats. Reden: zonder Nederlandse service-organisatie kunnen we geen garantie geven, en zonder garantie willen we niet aan installatie beginnen.`,
    `Onze diensten in {{city}}: opname (gratis, vrijblijvend), installatie (1 dag voor single-split, 1-2 dagen voor multi-split), onderhoud (jaarlijks aanbevolen), en reparatie. F-gassen-handeling is altijd inbegrepen — illegaal anders, en uw garantie verloopt direct als de unit niet goed wordt aangesloten. We werken met installatiegarantie van 2 jaar op montage en lekdichtheid, plus 5 jaar fabrieksgarantie op de unit zelf (langer bij Daikin en Mitsubishi).`,
  ],
  middel: [
    `Voor klanten in {{city}} verzorgen we installatie van single-split en multi-split airco's, jaarlijks onderhoud, en storingsservice. Prijzen: vanaf €1.600 all-in voor een single-split, €2.800-€4.000 voor multi-split met twee binnenunits. Inclusief montage, leiding tot 5 meter, F-gassen-werk en BTW. Wat er níét standaard inzit: extra leiding boven 5 m (~€20-€40 per meter), hak- en breekwerk in dragende muur, en hoogwerker bij verdieping 3+. Die posten benoemen we op de opname.`,
    `In {{city}} doen we nieuwe installaties, onderhoud (vanaf €99 per beurt) en reparatie. We werken met de A-merken Daikin, Mitsubishi Heavy, LG, Samsung, Toshiba en Tosot. Geen no-name-units, geen los-aansluiten van iets dat u zelf op Marktplaats hebt gekocht — zonder F-gassen-papieren bij de unit kunnen we geen installatiegarantie geven.`,
    `Wat u in {{city}} van ons kunt verwachten: vrijblijvende opname, een offerte met alle posten erop (geen "starting at"), installatie binnen 1-3 weken na akkoord, en daarna jaarlijks onderhoud op aanvraag. We zijn eerlijk over subsidie: een split-airco (lucht-lucht warmtepomp) krijgt geen ISDE en geen 9% BTW — daarop geldt 21% BTW. We vertellen u wél wat er soms nog kan (gemeentelijke regeling, BTW-teruggave voor ondernemers) en rekenen u vooral voor wat de airco aan energie bespaart.`,
  ],
  klein: [
    `In {{city}} bieden we hetzelfde aan als in onze grotere werkgebieden: installatie van single-split (vanaf €1.600 all-in incl. BTW) of multi-split (€2.800-€5.500 afhankelijk van aantal binnenunits), jaarlijks onderhoud (vanaf €99) en storingsservice. Het klein-dorps voordeel: korte aanrijtijden en de monteur die u kent. Vaak Danny, onze vaste monteur, die in reviews regelmatig bij naam wordt genoemd.`,
    `Voor {{city}} kunt u bij ons terecht voor airco-installatie, onderhoud, en reparatie. We werken met A-merken (Daikin, Mitsubishi Heavy, LG, Samsung, Toshiba, Tosot), F-gassen gecertificeerd. Prijsindicatie: single-split installatie vanaf €1.600 all-in incl. BTW, multi-split vanaf €2.800. Onderhoud vanaf €99 per beurt. Bij storing: €89 voorrijden, dat verrekenen we als we ter plaatse de oplossing meebrengen.`,
    `Onze diensten in {{city}}: opname op locatie (vrijblijvend), installatie binnen 1-3 weken, en service achteraf. We adviseren altijd op uw situatie — een 2,5 kW unit in een slaapkamer waar 3,5 kW geen meerwaarde geeft is verspilling. Bij {{housingMix}} zien we vaak dat klanten te zwaar gedimensioneerd worden door de "voor de zekerheid"-redenering. Niet bij ons.`,
  ],
};

// ─── PRACTICAL PARAGRAPHS ──────────────────────────────────────────────────────
// Praktische info: hoe het proces verloopt, wat ze kunnen verwachten.

export const CITY_PRACTICAL_VARIANTS: Record<CityTier, string[]> = {
  groot: [
    `Hoe het werkt in {{city}}: u belt of stuurt een appje (06 36481054 — vaak de snelste route), we plannen een vrijblijvende opname binnen een week, en u krijgt binnen 24-48 uur een schriftelijke offerte. Bij akkoord: installatie binnen 1-3 weken in laagseizoen, 3-4 weken in juni-augustus. Op de installatiedag zelf is het meestal één dag werk voor een single-split — twee monteurs, alles netjes opgeruimd, geen rommel.`,
    `Praktisch in {{city}}: aanvragen via website, telefoon of WhatsApp. We bellen of mailen terug voor een opname-afspraak. Tijdens de opname meten we ruimtes, kijken we naar plaatsing van de buitenunit, en bespreken we vermogen en merk. Daarna schriftelijke offerte. Akkoord? Dan plannen we direct in. Plaatsing zelf is in 9 van de 10 gevallen één werkdag voor enkelvoudige installatie, en we leveren altijd op met een korte uitleg van bediening en onderhoud.`,
    `Voor klanten in {{city}}: telefonische bereikbaarheid is bij ons niet altijd top in piekweken — eerlijk daarover. WhatsApp werkt vrijwel altijd sneller (06 36481054, Marvin reageert meestal binnen het uur). Na een aanvraag plannen we een opname op locatie, schrijven we een heldere offerte met alle posten erop, en — bij akkoord — staan we binnen 1-3 weken bij u op de stoep om te installeren.`,
  ],
  middel: [
    `Het traject voor {{city}}: aanvraag → opname binnen een week → offerte binnen 1-2 dagen → bij akkoord installatie binnen 1-3 weken. Tijdens de installatie zijn we 1 dag aan het werk voor een single-split en 1-2 dagen voor multi-split. We leveren netjes op — geen rommel achterlaten staat al jaren in onze reviews als terugkerend punt, en daar zijn we trots op zonder het te claimen.`,
    `Voor {{city}}: bel 046 202 1430, mail info@staycoolairco.nl, of stuur een appje naar 06 36481054. Voor een vrijblijvende opname rijden we naar u toe — geen kosten, geen verplichting. Daarna ontvangt u binnen 24-48 uur een offerte met alle posten gespecificeerd. Geen "vanaf" zonder context, geen verborgen meerprijzen.`,
    `Praktisch: voor opname in {{city}} plannen we doorgaans binnen een week in. Plaatsing volgt 1-3 weken na akkoord op de offerte; in mei-augustus loopt dat soms uit naar 3-4 weken omdat half Limburg gelijktijdig belt. We werken met een vast team — meestal Danny, die in reviews regelmatig bij naam wordt genoemd door tevreden klanten — en leveren elke installatie netjes op zonder rommel.`,
  ],
  klein: [
    `Praktisch voor {{city}}: aanvraag via telefoon, mail of WhatsApp. Opname meestal binnen een week — we combineren ritten in dezelfde regio waar mogelijk. Offerte binnen 1-2 dagen daarna. Plaatsing 1-3 weken na akkoord, tenzij het hoogseizoen is (juni-augustus, dan 3-4 weken). Voor noodgevallen (lekkage, koudemiddelverlies) proberen we sneller in te plannen.`,
    `Hoe het loopt in {{city}}: u belt of stuurt een appje, we plannen een vrijblijvende opname op locatie, en daarna een schriftelijke offerte met alle posten erop. Klein dorp betekent vaak korte communicatielijnen — ik (Marvin) reageer meestal zelf op aanvragen via WhatsApp. Bij akkoord plannen we de installatie in en komen we langs met een vast team.`,
    `Voor klanten in {{city}}: bereikbaar via 046 202 1430 en 06 36481054 (WhatsApp). Eerst een opname — die is vrijblijvend en kost niets — daarna een heldere offerte. Plaatsing meestal binnen 1-3 weken. Op de installatiedag zelf zijn we 1 dag aan het werk voor een single-split. We laten netjes achter; daar krijgen we al jaren reviews op die we zelf niet hoeven schrijven.`,
  ],
};

// ─── FAQ POOLS ─────────────────────────────────────────────────────────────────
// Per tier een pool van 7-8 FAQ's. djb2-seed kiest 4 stuks per stad.
// Stadsspecifieke overrides worden ervóór gepre-pend (zie programmaticLocations.ts).

interface FaqVariant {
  question: string;
  answer: string;
}

export const FAQ_QUESTION_VARIANTS: Record<CityTier, FaqVariant[]> = {
  groot: [
    {
      question: 'Wat kost een airco-installatie in {{city}}?',
      answer: 'Een single-split airco-installatie in {{city}} begint bij €1.600 all-in incl. BTW — dat is unit, montage, leiding tot 5 meter, en F-gassen-werk. Voor mid-range merken (Tosot, LG, Samsung) zit u rond de €1.600-€2.500. Premium-merken Daikin, Mitsubishi Heavy en Toshiba lopen op tot €3.500. Multi-split met twee binnenunits: €2.800-€4.000. Drie of meer binnenunits: €4.000-€5.500. We benoemen alle posten in de offerte — geen verborgen meerprijzen achteraf.',
    },
    {
      question: 'Hoe snel kunnen jullie installeren in {{city}}?',
      answer: 'Vanaf akkoord op de offerte werken we doorgaans 1-3 weken vooruit. In het laagseizoen (november tot maart) regelmatig sneller — soms binnen een week. In de piekmaanden juni-augustus loopt dat op tot 3-4 weken omdat veel klanten tegelijk willen plaatsen. De installatie zelf duurt 1 werkdag voor een single-split en 1-2 dagen voor multi-split.',
    },
    {
      question: 'Hoe lang duurt een airco-installatie in {{city}}?',
      answer: 'Een standaard single-split installatie nemen we in één werkdag. Een multi-split met twee of drie binnenunits is 1 tot 2 dagen, afhankelijk van leidingafstanden en doorvoeren. Bij oudere woningen ({{housingMix}}) houden we soms een extra halve dag rekening voor wegwerken van leidingwerk en netjes opleveren — daar wordt u in de offerte over geïnformeerd.',
    },
    {
      question: 'Bieden jullie ook onderhoud voor airco\'s in {{city}}?',
      answer: 'Ja. Jaarlijks onderhoud begint bij €99 per beurt: filter reinigen, drukcheck, lekkagecontrole en algehele inspectie. Voor klanten met multi-split of meerdere units bieden we een onderhoudscontract met vaste jaarlijkse afspraak en korting op storingsbezoek. Aanbevolen: minimaal één onderhoudsbeurt per jaar, bij voorkeur in het voorjaar voordat u de unit weer dagelijks gaat gebruiken.',
    },
    {
      question: 'Kan een airco in {{city}} ook verwarmen in de winter?',
      answer: 'Ja — moderne A+++ airco\'s zijn lucht-lucht-warmtepompen met een SCOP-waarde van 4-5. Dat betekent dat 1 kWh stroom 4-5 kWh warmte oplevert. Bij temperaturen boven -5°C werken ze efficiënt; daaronder valt het rendement terug en is uw gas-CV als back-up nuttig. Voor de gemiddelde Limburgse winter (zelden langere periodes onder -5°C) is een airco een goede aanvulling op of vervanging van gas in tussenseizoenen.',
    },
    {
      question: 'Welke A-merken installeren jullie in {{city}}?',
      answer: 'Wij installeren Daikin, Mitsubishi Heavy Industries, LG, Samsung, Toshiba en Tosot. Niet: B-merken, no-name units van Marktplaats, of merken zonder Nederlandse service-organisatie. Reden: zonder serviceorganisatie kunnen we geen installatiegarantie geven, en bij storing in jaar 3 of 4 wilt u niet horen dat uw merk niet meer ondersteund wordt.',
    },
    {
      question: 'Voor welke postcodes in {{city}} leveren jullie service?',
      answer: 'We bedienen alle postcodes in {{city}}: {{postcodeRangeReadable}}. Dat geldt voor installatie, onderhoud en storingsservice — door dezelfde gecertificeerde monteurs, niet door wisselende uitzendkrachten.',
    },
    {
      question: 'Voorkomen jullie geluidsoverlast bij airco-plaatsing in {{city}}?',
      answer: 'Ja — extra belangrijk in dichtbebouwde stedelijke kernen. We werken met geluidsarme units (rond 19-22 dB(A) op stille stand), trillingsdempers onder de buitenunit, en bewuste positionering ten opzichte van slaapkamerramen van buren. Na montage testen we de stille stand zodat het systeem ook \'s nachts comfortabel blijft. In {{city}} is dat geen extra service maar standaard.',
    },
  ],
  middel: [
    {
      question: 'Wat kost een airco-installatie in {{city}}?',
      answer: 'In {{city}} begint een single-split airco-installatie bij €1.600 all-in incl. BTW (unit, montage, leiding tot 5 meter, F-gassen-werk). Mid-range merken €1.600-€2.500, premium €2.500-€3.500. Multi-split met twee binnenunits €2.800-€4.000. Bij {{housingMix}} houden we bij de opname rekening met {{localConstraint}} — als dat extra werk vraagt benoemen we dat vooraf in de offerte.',
    },
    {
      question: 'Hoe snel kunnen jullie installeren in {{city}}?',
      answer: 'Standaard plannen we 1-3 weken vooruit na akkoord op de offerte. In rustigere maanden (november tot maart) gaat dat regelmatig sneller. In juni-augustus loopt het op tot 3-4 weken — dan willen heel veel klanten in {{region}} tegelijkertijd een airco. We bevestigen altijd een concrete plaatsingsdatum.',
    },
    {
      question: 'Welke airco past bij mijn woning in {{city}}?',
      answer: 'Dat hangt af van vierkante meters, isolatie, raampartij en uw verwachtingen. Vuistregel: ~1 kW per 10 m² woonoppervlak voor goed geïsoleerde woningen. Voor een typische slaapkamer is een 2,5 kW unit voldoende, voor een ruime woonkamer 3,5-5 kW. Bij de opname rekenen we het exact uit — geen "voor de zekerheid" een te zware unit, want dat is verspilling.',
    },
    {
      question: 'Bieden jullie ook onderhoud voor airco\'s in {{city}}?',
      answer: 'Ja, vanaf €99 per beurt. Jaarlijks onderhoud is geen luxe maar nodig voor optimaal rendement en de garantie blijft alleen geldig met regulier onderhoud. We checken filter, druk, lekkages en de algehele werking. Een onderhoudscontract met vaste jaarafspraak is mogelijk — dan staat het automatisch in de planning.',
    },
    {
      question: 'Kan een airco in {{city}} ook verwarmen?',
      answer: 'Ja. Een moderne A+++ airco met SCOP 4-5 levert 4-5 kWh warmte uit 1 kWh stroom — substantieel goedkoper dan elektrische verwarming, en boven -5°C ook goedkoper dan gas. Voor het gemiddelde Limburgse rijtjeshuis met €2.000-€2.500 gasverbruik per jaar zien we besparingen van €700-€1.200 als de airco serieus voor verwarming wordt ingezet.',
    },
    {
      question: 'Welke garantie krijg ik op een airco-installatie in {{city}}?',
      answer: '5 jaar fabrieksgarantie op de unit (afhankelijk van merk; Daikin en Mitsubishi vaak 7 jaar). Plus 2 jaar StayCool installatiegarantie op montage en lekdichtheid. Concreet: als de installatie binnen 2 jaar lekt door onze montage, is de fix kosteloos. We hebben dat in het verleden gedaan en het staat in onze reviews — dat is geen marketingclaim maar gewoon gedrag.',
    },
    {
      question: 'Voor welke postcodes in {{city}} leveren jullie service?',
      answer: 'Alle postcodes in {{city}}: {{postcodeRangeReadable}}. Voor installatie, onderhoud en storingen — alles door hetzelfde team. Geen onderaannemers die uw woning niet kennen.',
    },
    {
      question: 'Hoe vraag ik een offerte aan in {{city}}?',
      answer: 'Drie routes: bel 046 202 1430, mail info@staycoolairco.nl, of stuur een appje naar 06 36481054 (vaak de snelste — Marvin reageert meestal binnen het uur). Vervolgens plannen we een vrijblijvende opname op locatie. Geen kosten, geen verplichting. Daarna ontvangt u binnen 1-2 dagen een schriftelijke offerte met alle posten erop.',
    },
  ],
  klein: [
    {
      question: 'Wat kost een airco-installatie in {{city}}?',
      answer: 'Vanaf €1.600 all-in incl. BTW voor een single-split — unit, montage, leiding tot 5 meter, F-gassen-werk. Multi-split begint bij €2.800. In dorpen zoals {{city}} hebben we wel iets meer rij-tijd, maar omdat we ritten in dezelfde regio combineren reken ik daar geen extra voorrijkosten voor — die staan niet in de offerte. Wel: als er hoogwerker nodig is of extra leidinglengte boven 5 meter, benoemen we dat vooraf.',
    },
    {
      question: 'Hoe snel kunnen jullie installeren in {{city}}?',
      answer: '1-3 weken na akkoord op de offerte. In het laagseizoen (november tot maart) regelmatig binnen een week. In de zomerpiek 3-4 weken — dan zit half Limburg op dezelfde planning. We bevestigen altijd een concrete plaatsingsdatum, geen "ergens komende weken".',
    },
    {
      question: 'Komen jullie ook naar kleinere dorpen zoals {{city}}?',
      answer: 'Ja, dat is bijna ons standaard-werkgebied. We rijden vanuit Nieuwstadt elke week meerdere keren door {{region}} en hebben in {{city}} en omgeving al {{installationCount}}+ klanten geholpen. Klein dorp betekent vaak: korte aanrijroutes, veel mond-tot-mondreclame, en een team dat u na een jaar nog herkent als ze voor onderhoud terugkomen.',
    },
    {
      question: 'Welke airco past bij {{housingMix}}?',
      answer: 'Voor {{housingMix}} kijken we vooral naar woonkamergrootte, isolatie en het beoogde gebruik (alleen koelen, of ook verwarmen). Vuistregel: ~1 kW koelvermogen per 10 m². Een typische {{city}}-woonkamer van 30 m² heeft genoeg aan een 3,5 kW unit. Te zwaar dimensioneren betekent vaker aan/uit, hoger verbruik, en sneller slijtage — niet doen.',
    },
    {
      question: 'Bieden jullie ook onderhoud voor airco\'s in {{city}}?',
      answer: 'Ja, jaarlijks vanaf €99 per beurt. Voor klanten in {{city}} en omgeving combineren we onderhoudsbeurten in dezelfde week zodat we routes efficient kunnen plannen — dat houdt de prijs realistisch. Onderhoudscontract met vaste jaarafspraak is mogelijk; dan loopt het automatisch.',
    },
    {
      question: 'Kan ik mijn airco in {{city}} ook gebruiken als verwarming?',
      answer: 'Ja, een moderne airco-warmtepomp verwarmt efficiënt tot ongeveer -5°C buitentemperatuur. SCOP 4-5 betekent 4-5 kWh warmte uit 1 kWh stroom. Voor de gemiddelde Limburgse winter (zelden lange koude periodes) is dat een prima aanvulling op of vervanging van gas in tussenseizoenen. We rekenen het door bij de opname zodat u ziet wat u kunt besparen.',
    },
    {
      question: 'Voor welke postcodes leveren jullie in {{city}}?',
      answer: 'Alle postcodes in {{city}}: {{postcodeRangeReadable}}. Voor installatie én service. Hetzelfde team komt langs voor zowel installatie als jaarlijks onderhoud — die continuïteit telt op zo\'n termijn.',
    },
    {
      question: 'Hoe vraag ik een offerte aan voor {{city}}?',
      answer: 'Stuur een appje naar 06 36481054 (snelst), bel 046 202 1430, of mail naar info@staycoolairco.nl. Vermeld uw adres en wat u zoekt (single-split, multi-split, of nog onbekend). Ik (Marvin) reageer meestal binnen het uur via WhatsApp. Daarna plannen we een vrijblijvende opname op locatie.',
    },
  ],
};
