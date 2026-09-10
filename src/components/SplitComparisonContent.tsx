import { comparisonChoices,type ComparisonChoice } from '../data/splitComparison';
import { costExamples } from '../data/costGuide';
import { formatPrice } from '../utils/installationPricing';

const primary = 'inline-block rounded-xl bg-blue-700 px-5 py-4 font-bold text-white text-center hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700';
const link = 'text-blue-800 underline underline-offset-4 hover:text-blue-950';
const differences = [
  ['Binnen- en buitenunits', 'Eén binnenunit op één buitenunit. Twee losse sets hebben dus twee buitenunits.', 'Meerdere binnenunits delen één buitenunit. Een duo-split heeft twee binnenunits.'],
  ['Gebruik per ruimte', 'Elke losse set heeft zijn eigen systeem. Afzonderlijke sets kunnen een verschillende bedrijfsstand gebruiken.', 'Temperatuur en bediening per binnenunit; bij gangbare woningmodellen dezelfde bedrijfsstand: koelen óf verwarmen.'],
  ['Plek buiten', 'Voor iedere losse set is een geschikte buitenlocatie nodig.', 'Eén buitenlocatie, met leidingroutes naar de aangesloten binnenunits.'],
  ['Later uitbreiden', 'Een extra losse set vraagt ook een nieuwe buitenunit en installatie.', 'Alleen mogelijk als buitenunit, aansluitingen, capaciteit en toegestane combinaties het toelaten.'],
  ['Afhankelijkheid', 'Losse systemen delen geen buitenunit. Uitval van één set hoeft de andere niet te raken.', 'Een defect aan de gedeelde buitenunit kan meerdere ruimtes tegelijk treffen.'],
  ['Kosten', 'Vergelijk de complete installatie voor alle gewenste ruimtes.', 'Vergelijk dezelfde ruimtes en functies. Eén buitenunit betekent niet automatisch een lagere prijs.'],
];

// Gedeeld door de clientpagina en de HTML die tijdens de build wordt geschreven.
export default function SplitComparisonContent({ onSelect }: { onSelect?: (choice: ComparisonChoice | null) => void }) {
  return <div className="break-words pt-20 text-gray-800 md:pt-36">
    <section className="bg-blue-950 px-4 pb-14 pt-8 text-white"><div className="mx-auto max-w-6xl">
      <nav aria-label="Broodkruimel" className="mb-8 text-sm text-blue-100"><a href="/" className="underline">Home</a><span aria-hidden="true"> / </span><span>Single-split of multi-split</span></nav>
      <p className="font-semibold text-blue-200">Keuzehulp voor uw woning in Limburg</p>
      <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">Single-split of multi-split airco: wat past bij uw woning?</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-50">Een single-split, ook mono-split genoemd, heeft één binnenunit en één buitenunit. Bij multi-split delen meerdere binnenunits één buitenunit. Voor één ruimte ligt single-split voor de hand. Bij meerdere ruimtes bepalen ook de plek buiten, uw gebruik en het leidingtraject de keuze.</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href="#keuzehulp" className={primary}>Welke situatie past bij mij?</a><a href="#verschillen" className="rounded-xl border border-white px-5 py-4 text-center font-bold hover:bg-blue-900">Bekijk de verschillen</a></div>
      <p className="mt-5 text-sm text-blue-200">Bijgewerkt op <time dateTime="2026-09-10">10 september 2026</time></p>
    </div></section>

    <section id="keuzehulp" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-14" aria-labelledby="keuze-heading">
      <h2 id="keuze-heading" className="text-2xl font-bold sm:text-3xl">Begin bij uw ruimtes en plannen</h2>
      <p className="mt-4 max-w-3xl leading-relaxed">Het aantal kamers is het startpunt. Neem ook mee welke ruimtes tegelijk gebruikt worden en waar buitenunits kunnen staan. Kies uw situatie; we nemen die mee in uw adviesaanvraag.</p>
      <div className="mt-7 grid gap-5 md:grid-cols-3">{comparisonChoices.map(choice => <article key={choice.id} className="flex min-w-0 flex-col rounded-xl border bg-blue-50 p-6"><h3 className="text-xl font-bold">{choice.title}</h3><p className="mb-6 mt-3 leading-relaxed">{choice.description}</p><a href="#contact-aanvraag" className={`${primary} mt-auto`} onClick={() => onSelect?.(choice)}>{choice.cta}</a></article>)}</div>
    </section>

    <section id="verschillen" className="scroll-mt-28 bg-gray-50 px-4 py-14"><div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold sm:text-3xl">De verschillen naast elkaar</h2>
      <div className="mt-7 space-y-4">{differences.map(([subject, single, multi]) => <section key={subject} className="rounded-xl border bg-white p-5"><h3 className="text-lg font-bold">{subject}</h3><dl className="mt-4 grid gap-5 md:grid-cols-2"><div><dt className="font-semibold text-blue-800">Single-split</dt><dd className="mt-2 leading-relaxed">{single}</dd></div><div><dt className="font-semibold text-blue-800">Multi-split</dt><dd className="mt-2 leading-relaxed">{multi}</dd></div></dl></section>)}</div>
    </div></section>

    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
      <div><h2 className="text-2xl font-bold">Wanneer zijn losse single-splits logisch?</h2><p className="mt-4 leading-relaxed">Wilt u nu één slaapkamer aanpakken? Dan hoeft u niet meteen een systeem voor het hele huis te kiezen. Bij een tweede ruimte kunt u opnieuw beoordelen wat nodig is.</p><p className="mt-4 leading-relaxed">Liggen kamers ver uit elkaar, dan kan een eigen buitenunit per set een bruikbare optie zijn. Laat de leidingroutes en montageplekken vergelijken. Controleer ook of er voldoende geschikte buitenruimte is.</p><p className="mt-4 leading-relaxed">Losse sets zijn eveneens het vergelijken waard als u in de ene kamer wilt koelen terwijl een andere moet verwarmen. Bespreek dat gebruik vooraf.</p></div>
      <div><h2 className="text-2xl font-bold">Wanneer is multi-split logisch?</h2><p className="mt-4 leading-relaxed">Wilt u meerdere ruimtes aanpakken en het aantal buitenunits beperken? Dan is multi-split een optie. Duo-split en triple-split zijn uitvoeringen met twee en drie binnenunits.</p><p className="mt-4 leading-relaxed">Bepaal vooraf welke kamers u wilt aansluiten. De installateur controleert de combinatie van binnenunits en buitenunit. Alleen hetzelfde merk kiezen is niet genoeg: de modellen moeten volgens de fabrikant samen kunnen werken.</p><p className="mt-4 leading-relaxed">Bekijk ook wat komt kijken bij <a className={link} href="/multi-split-airco-installatie">een multi-split laten installeren</a>.</p></div>
    </section>

    <section className="bg-blue-50 px-4 py-14"><div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold sm:text-3xl">Wat kost single-split tegenover multi-split?</h2>
      <p className="mt-4 max-w-3xl leading-relaxed">Vergelijk een offerte voor dezelfde ruimtes, functies en montage. Hieronder staan drie concrete StayCool-opstellingen, inclusief btw, installatie en materialen. Ze verschillen in merk en uitvoering en vormen dus geen één-op-één prijsvergelijking.</p>
      <div className="mt-7 grid gap-5 md:grid-cols-3">{[costExamples[0], costExamples[3], costExamples[4]].map(example => <article key={example.id} className="min-w-0 rounded-xl border bg-white p-6"><h3 className="text-lg font-bold">{example.name}</h3><p className="mt-3">{example.configuration}</p><p className="mt-4 text-2xl font-bold text-blue-900">{formatPrice(example.grossCents)}</p><p className="mt-2 text-sm">Inclusief 21% btw, installatie en materialen</p><a className={`${link} mt-5 inline-block py-2`} href={`/kosten-airco-plaatsen#voorbeeld-${example.id}`}>Bekijk dit prijsvoorbeeld</a></article>)}</div>
      <p className="mt-5 text-sm">Prijspeil 10 september 2026. Eventuele aanvullende werkzaamheden worden in de offerte bevestigd. Modellen zonder vastgestelde prijs blijven op aanvraag.</p>
      <p className="mt-5 leading-relaxed">Een vaste procentuele besparing voor multi-split kunnen we hier niet onderbouwen. Lees <a className={link} href="/kosten-airco-plaatsen">wat een airco inclusief installatie kost</a> of bekijk de <a className={link} href="/airco-kopen-limburg">aircosets voor uw woning in Limburg</a>.</p>
    </div></section>

    <section className="mx-auto max-w-6xl px-4 py-14"><h2 className="text-2xl font-bold">Vermogen, stroomverbruik en onderhoud</h2><div className="mt-5 grid gap-8 md:grid-cols-2">
      <div><h3 className="text-xl font-bold">Kies vermogen op uw gebruik</h3><p className="mt-3 leading-relaxed">Ruimtevolume, isolatie, glas en zoninstraling tellen mee. Bij multi-split moet ook de buitenunit passen bij het gelijktijdige gebruik. De toegestane combinaties zijn modelafhankelijk; een algemene optelregel in kW is onvoldoende.</p><p className="mt-3 leading-relaxed">Begin met de <a className={link} href="/capaciteit-calculator">capaciteitscalculator</a> voor een indicatie. Vergelijk daarna het energielabel van de werkelijke opstelling. Alleen het aantal buitenunits voorspelt uw stroomrekening niet.</p></div>
      <div><h3 className="text-xl font-bold">Meerdere binnenunits vragen onderhoud</h3><p className="mt-3 leading-relaxed">Eén buitenunit betekent niet dat onderhoud aan extra binnenunits vervalt. Neem het aantal binnen- én buitenunits mee wanneer u pakketten vergelijkt.</p><p className="mt-3 leading-relaxed">Voor een door StayCool geleverde en geïnstalleerde airco kunt u optioneel kiezen voor Basis of Premium. Extra binnenunits tellen mee in de abonnementsprijs. Bekijk de actuele <a className={link} href="/onderhoud">onderhoudsabonnementen en dekking</a>.</p></div>
    </div></section>

    <section className="bg-gray-50 px-4 py-14"><div className="mx-auto max-w-4xl"><h2 className="text-2xl font-bold sm:text-3xl">Veelgestelde vragen over single- en multi-split</h2><div className="mt-6 space-y-3">
      {[
        ['Is mono-split hetzelfde als single-split?', 'Ja. Beide namen beschrijven één binnenunit aangesloten op één buitenunit. Duo- en triple-split zijn multi-split-opstellingen met twee of drie binnenunits.'],
        ['Kan een multi-split tegelijk verwarmen en koelen?', 'Bij gangbare multi-split-systemen voor woningen gebruiken de binnenunits dezelfde bedrijfsstand. U kunt per ruimte een andere temperatuur instellen, maar niet tegelijk de ene kamer koelen en de andere verwarmen. Laat afwijkende wensen toetsen aan het exacte model.'],
        ['Zijn twee single-splits goedkoper dan een duo-split?', 'Dat is geen vaste regel. Vergelijk dezelfde gewenste ruimtes, passende modellen, leidingroutes en montage. Wij kunnen de twee opties voor uw woning naast elkaar zetten.'],
        ['Kan ik later een binnenunit toevoegen?', 'Bij multi-split kan dat alleen als de gekozen buitenunit daarvoor geschikt is en de fabrikant de combinatie toestaat. Bespreek uitbreiding dus vóór aanschaf. Bij een extra losse single-split komt er ook een eigen buitenunit bij.'],
        ['Welke binnenunits kunnen samen op één buitenunit?', 'Dat staat in de combinatietabellen van de fabrikant voor die buitenunit. Wand-, vloer- of andere binnenunits zijn niet vrij uitwisselbaar. We controleren model, capaciteit en aansluitmogelijkheden bij de selectie.'],
        ['Welk systeem is het zuinigst?', 'Er is geen winnaar op basis van alleen single- of multi-split. Vergelijk de labels van de gekozen opstellingen en kijk naar uw gebruik. Een slaapkamer die af en toe draait stelt andere eisen dan meerdere ruimtes die gelijktijdig worden gebruikt.'],
      ].map(([question, answer]) => <details key={question} className="rounded-xl border bg-white p-5"><summary className="cursor-pointer font-bold leading-relaxed">{question}</summary><p className="mt-4 leading-relaxed">{answer}</p></details>)}
      </div><p className="mt-7 text-sm leading-relaxed">Technische achtergrond: <a className={link} href="https://www.daikin.nl/nl_nl/consument/inspiration/articles/how-many-rooms-can-i-cool-or-heat-with-an-air-to-air-heat-pump.html">Daikin over meerdere ruimtes en bedrijfsstanden</a> en <a className={link} href="https://www.mitsubishi-les.com/nl-be/campagnes/faq/">Mitsubishi Electric over single- en multi-split</a>. Voor uw installatie gelden de specificaties van de gekozen modellen.</p>
      <div className="mt-8 rounded-xl border bg-white p-6"><h3 className="text-xl font-bold">Laat beide opties voor uw woning beoordelen</h3><p className="mt-3 leading-relaxed">Vermeld uw woonplaats, het aantal ruimtes en of u later wilt uitbreiden. We helpen u een opstelling kiezen voordat u beslist.</p><a href="#contact-aanvraag" onClick={() => onSelect?.(null)} className={`${primary} mt-5`}>Vraag advies en een offerte aan</a></div>
    </div></section>
  </div>;
}
