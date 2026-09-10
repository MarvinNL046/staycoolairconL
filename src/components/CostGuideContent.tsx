import { costExamples,type CostExample } from '../data/costGuide';
import { formatPrice } from '../utils/installationPricing';

const primary = 'inline-block rounded-xl bg-orange-600 px-5 py-4 text-center font-bold text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600';
const textLink = 'text-blue-800 underline underline-offset-4 hover:text-blue-950';

// Zonder router of browserafhankelijkheden: dezelfde inhoud wordt bij de build in HTML gezet.
export default function CostGuideContent({ onSelect }: { onSelect?: (example: CostExample | null) => void }) {
  const highlights = [costExamples[0], costExamples[3], costExamples[4]];
  return <div className="break-words pt-20 text-gray-800 md:pt-36">
    <section className="bg-blue-950 px-4 pb-16 pt-8 text-white"><div className="mx-auto max-w-6xl">
      <nav aria-label="Broodkruimel" className="mb-8 text-sm text-blue-100"><a href="/" className="underline">Home</a><span aria-hidden="true"> / </span><span>Kosten airco plaatsen</span></nav>
      <p className="font-semibold text-blue-200">Airco met installatie in Limburg</p>
      <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">Wat kost een airco inclusief installatie?</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-50">Een complete Tosot Cosmo van 2,5 kW kost bij StayCool {formatPrice(costExamples[0].grossCents)}, inclusief btw, installatie en materialen. Voor twee ruimtes ziet u hieronder een LG duo-split van {formatPrice(costExamples[3].grossCents)}; voor drie ruimtes een Tosot Pular triple-split van {formatPrice(costExamples[4].grossCents)}.</p>
      <p className="mt-4 max-w-3xl text-blue-100">Dit zijn prijzen van specifieke opstellingen. Het passende vermogen, de plaatsing en eventuele aanvullende werkzaamheden leggen we vast in uw offerte.</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a className={primary} href="#contact-aanvraag" onClick={() => onSelect?.(null)}>Vraag een prijs voor uw woning aan</a><a className="rounded-xl border border-white px-5 py-4 text-center font-bold hover:bg-blue-900" href="#prijsvoorbeelden">Bekijk prijsvoorbeelden</a></div>
      <p className="mt-5 text-sm text-blue-200">Prijspeil <time dateTime="2026-09-10">10 september 2026</time> · Alle bedragen hieronder inclusief 21% btw</p>
    </div></section>

    <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="opstellingen-heading">
      <h2 id="opstellingen-heading" className="text-2xl font-bold sm:text-3xl">Kosten voor één, twee of drie ruimtes</h2>
      <p className="mt-4 max-w-3xl leading-relaxed">Een single-split heeft één binnenunit en één buitenunit. Een duo- of triple-split verbindt twee of drie binnenunits met één buitenunit. Deze voorbeelden gaan uit van één binnenunit per ruimte. Ze zijn geen gemiddelde prijs voor iedere woning.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{highlights.map(example => <a key={example.id} href={`#voorbeeld-${example.id}`} className="min-w-0 rounded-xl border border-blue-100 bg-blue-50 p-6 hover:border-blue-500"><h3 className="text-xl font-bold">{example.rooms === 1 ? 'Eén ruimte' : `${example.rooms} ruimtes`}</h3><p className="mt-4 text-3xl font-bold text-blue-900">{formatPrice(example.grossCents)}</p><p className="mt-3">{example.name}</p><p className="mt-1 text-sm">{example.configuration}</p><p className="mt-4 text-sm font-semibold text-blue-800 underline">Bekijk deze opstelling</p></a>)}</div>
      <p className="mt-6 leading-relaxed">Een multi-split is niet automatisch goedkoper dan twee losse single-splits. Vergelijk dezelfde ruimtes, gewenste functies en montageomstandigheden. Het aantal buitenunits en mogelijke leidingroutes wegen ook mee. Bekijk de <a className={textLink} href="/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split">keuzehulp single-split of multi-split</a> of lees meer over <a className={textLink} href="/multi-split-airco-installatie">een multi-split laten installeren</a>.</p>
    </section>

    <section id="prijsvoorbeelden" className="scroll-mt-28 bg-gray-50 px-4 py-14" aria-labelledby="prijzen-heading"><div className="mx-auto max-w-6xl">
      <h2 id="prijzen-heading" className="text-2xl font-bold sm:text-3xl">Vijf concrete prijzen inclusief montage</h2>
      <p className="mt-4 max-w-3xl leading-relaxed">Vergelijk eerst de opstelling en uitvoering. Een 3,5 kW-model is een andere keuze dan een 2,5 kW-model; een hogere prijs vertelt op zichzelf niet welk toestel geschikt is. Bij modellen zonder gecontroleerde prijs houden we het op prijs op aanvraag.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{costExamples.map(example => <article key={example.id} id={`voorbeeld-${example.id}`} className="flex min-w-0 scroll-mt-28 flex-col rounded-xl border bg-white p-6">
        <p className="text-sm font-semibold text-blue-800">{example.rooms} {example.rooms === 1 ? 'binnenunit' : 'binnenunits'} + 1 buitenunit</p><h3 className="mt-3 text-xl font-bold">{example.name}</h3><p className="mt-3">{example.configuration}</p><p className="mt-6 text-3xl font-bold text-blue-900">{formatPrice(example.grossCents)}</p><p className="mb-6 mt-2 text-sm">Inclusief btw, installatie en materialen</p>
        <a href="#contact-aanvraag" onClick={() => onSelect?.(example)} className={`${primary} mt-auto`} aria-label={`Offerte voor ${example.name}, ${example.configuration}`}>Offerte voor deze opstelling</a><a className={`${textLink} mt-4 py-2 text-center`} href={example.href}>Bekijk {example.name}</a>
      </article>)}</div>
      <p className="mt-6 text-sm leading-relaxed">De offerte bevestigt de uitvoering en werkzaamheden voor uw woning. Vergelijk ook de selectie op <a href="/airco-kopen-limburg" className={textLink}>airco kopen in Limburg</a> of bekijk <a href="/products" className={textLink}>alle merken en modellen</a>.</p>
    </div></section>

    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
      <div><h2 className="text-2xl font-bold">Wat zit er in deze aanschafprijs?</h2><ul className="mt-5 list-disc space-y-3 pl-5"><li>De complete aircoset in de genoemde uitvoering.</li><li>Installatie en materialen.</li><li>21% btw over het totaalbedrag.</li></ul><p className="mt-5 leading-relaxed">U hoeft bij deze voorbeelden geen apart algemeen montagebedrag of btw meer op te tellen. Controleer bij andere offertes of dezelfde onderdelen en werkzaamheden zijn opgenomen.</p></div>
      <div><h2 className="text-2xl font-bold">Waardoor kan uw offerte afwijken?</h2><ul className="mt-5 list-disc space-y-3 pl-5"><li>Een andere uitvoering, ander vermogen of extra binnenunit.</li><li>De afstand en route tussen binnen- en buitenunit.</li><li>De bereikbaarheid van de montageplek en de condensafvoer.</li><li>Nodige aanpassingen aan de elektrische aansluiting.</li></ul><p className="mt-5 leading-relaxed">Of extra werk nodig is, beoordelen we voor uw woning. Eventuele aanvullende kosten worden in de offerte benoemd. Zonder die beoordeling geeft een vast bedrag per meter leiding geen betrouwbare totaalprijs.</p></div>
    </section>

    <section className="bg-blue-50 px-4 py-14"><div className="mx-auto max-w-6xl"><h2 className="text-2xl font-bold sm:text-3xl">Van prijsvoorbeeld naar een passende offerte</h2><ol className="mt-6 grid gap-6 md:grid-cols-3">
      <li><h3 className="text-lg font-bold">1. Beschrijf uw ruimtes</h3><p className="mt-3 leading-relaxed">Vermeld uw woonplaats in Limburg, het aantal ruimtes en of u wilt koelen, verwarmen of beide. Afmetingen en informatie over isolatie helpen bij een eerste beoordeling.</p></li>
      <li><h3 className="text-lg font-bold">2. Kies een opstelling</h3><p className="mt-3 leading-relaxed">Selecteer een voorbeeld of vraag hulp bij uw keuze. Glasoppervlak, zoninstraling en ruimtevolume tellen mee bij het vermogen. Onze <a href="/capaciteit-calculator" className={textLink}>capaciteitscalculator</a> geeft een eerste indicatie.</p></li>
      <li><h3 className="text-lg font-bold">3. Controleer het totaalvoorstel</h3><p className="mt-3 leading-relaxed">U beoordeelt de gekozen set, plaatsing en werkzaamheden voordat u beslist. Lees hoe <a href="/airco-installatie-limburg" className={textLink}>airco-installatie in Limburg</a> verloopt.</p></li>
    </ol><a href="#contact-aanvraag" onClick={() => onSelect?.(null)} className={`${primary} mt-8`}>Help mij een airco kiezen</a></div></section>

    <section className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-2xl font-bold">En de kosten na de installatie?</h2><p className="mt-4 max-w-3xl leading-relaxed">Naast de aanschaf betaalt u voor stroom en onderhoud. Stroomkosten hangen af van uw gebruik, energietarief, woning en gekozen toestel. Daarom hoort bij deze aanschafvoorbeelden geen vaste jaarlijkse besparing of terugverdientijd.</p><p className="mt-4 max-w-3xl leading-relaxed">Voor een door StayCool geleverde en geïnstalleerde airco kunt u kiezen voor los onderhoud of een Basis- of Premium-abonnement. Een abonnement is optioneel en zit niet automatisch in de aanschafprijs. Vergelijk de dekking en kosten voordat u kiest.</p><a className={`${textLink} mt-5 inline-block py-2 font-semibold`} href="/onderhoud">Vergelijk Basis en Premium onderhoudsabonnementen</a></section>

    <section className="bg-gray-50 px-4 py-14" aria-labelledby="vragen-heading"><div className="mx-auto max-w-4xl"><h2 id="vragen-heading" className="text-2xl font-bold sm:text-3xl">Veelgestelde vragen over aircokosten</h2><div className="mt-6 space-y-3">
      {[
        ['Zijn deze aircoprijzen inclusief installatie en btw?', 'Ja. De getoonde bedragen zijn inclusief 21% btw, installatie en materialen voor de genoemde set. Eventuele aanvullende werkzaamheden voor uw woning worden apart in de offerte beschreven.'],
        ['Wat kost een airco voor twee ruimtes?', `Het LG MU2R15-0909-voorbeeld met twee binnenunits van 2,5 kW kost ${formatPrice(costExamples[3].grossCents)} inclusief btw, installatie en materialen. Dat is de prijs van die specifieke set. Een andere uitvoering of plaatsing kan een ander totaal opleveren.`],
        ['Is een multi-split altijd voordeliger?', 'Nee. Vergelijk een multi-split en losse single-splits met passend vermogen en dezelfde installatiewensen. De beschikbare plek voor buitenunits kan uw keuze beïnvloeden.'],
        ['Kan ik alleen op vierkante meters een airco kiezen?', 'Vierkante meters zijn een begin, maar ook plafondhoogte, isolatie, glas, zon en het gewenste gebruik tellen mee. Gebruik de calculator voor een indicatie en laat de keuze controleren voor u bestelt.'],
        ['Waarom staat bij sommige modellen prijs op aanvraag?', 'Voor die uitvoering is nog geen eenduidige, gecontroleerde verkoopprijs beschikbaar. Wij bevestigen daarvoor een prijs in de offerte, zodat u geen bedrag van een ander model of een onvolledige set vergelijkt.'],
        ['Moet ik bij aanschaf een onderhoudsabonnement afsluiten?', 'Nee. Het onderhoudsabonnement is optioneel. Voor door StayCool geleverde en geïnstalleerde airco’s kunt u de mogelijkheden voor los onderhoud, Basis en Premium vergelijken.'],
      ].map(([question, answer]) => <details key={question} className="rounded-xl border bg-white p-5"><summary className="cursor-pointer font-bold leading-relaxed">{question}</summary><p className="mt-4 leading-relaxed">{answer}</p></details>)}
    </div><div className="mt-8"><h3 className="text-xl font-bold">Wilt u weten wat het voor uw woning kost?</h3><p className="mt-3">Vermeld uw woonplaats en ruimtes. U kunt ook een van de opstellingen hierboven selecteren.</p><a href="#contact-aanvraag" onClick={() => onSelect?.(null)} className={`${primary} mt-5`}>Vraag uw airco-offerte aan</a></div></div></section>
  </div>;
}
