import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Phone, Shield, Ban, Euro, Wrench } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Breadcrumbs from '../../components/Breadcrumbs';

const CANONICAL_URL = 'https://staycoolairco.nl/kennisbank/airco-bijvullen-zelf-doen';

const AircoBijvullenZelfDoen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco zelf bijvullen' },
  ];

  const redenen = [
    {
      icon: <Ban className="h-8 w-8 text-red-500" />,
      titel: '1. Het is wettelijk verboden',
      tekst: 'Sinds 2015 verbiedt EU-verordening 517/2014 (de F-gassen-verordening) particulieren om aan koudemiddelsystemen te werken. Geen schemerzone, geen "tenzij" — gewoon verboden. Alleen F-gassen + STEK gecertificeerde monteurs mogen dit. Toezicht ligt bij de Inspectie Leefomgeving en Transport (ILT).',
    },
    {
      icon: <Euro className="h-8 w-8 text-red-500" />,
      titel: '2. Boete kan oplopen tot €1.500',
      tekst: 'Voor particulieren bedraagt de boete bij overtreding circa €1.500. Voor bedrijven significant meer. Daarbovenop kan een rechter aansprakelijkheid voor milieuschade opleggen — koudemiddel is een krachtig broeikasgas en lekken vormen een meldplicht.',
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      titel: '3. Verzekering en garantie vervallen',
      tekst: 'Twee dingen tegelijk: uw fabrieksgarantie op de airco is per direct ongeldig (alle handleidingen vermelden expliciet "uitsluitend door gecertificeerd personeel"), en uw inboedel- of woonhuisverzekering kan uitkering weigeren bij brand of lekschade als blijkt dat u zelf hebt geknoeid aan het systeem.',
    },
    {
      icon: <Wrench className="h-8 w-8 text-red-500" />,
      titel: '4. Compressor sloopt binnen een seizoen',
      tekst: 'Zonder vacuümpomp én manometerset breng je vocht en lucht in het systeem. Vocht verandert in zuur als het door de compressor gaat — dat eet de wikkelingen weg. Verkeerde druk overbelast de motor. Praktijk: een unit die "even is bijgevuld" zonder de juiste apparatuur begeeft het binnen 6-12 maanden. Compressor-vervanging kost €600-€1.000 plus arbeid.',
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      titel: '5. Veiligheidsrisico — brand en koudverbranding',
      tekst: 'R32 en R290 (propaan) zijn brandbaar. Verkeerd type vullen (bv. R32 in een R410A-systeem) kan tot brand leiden. Daarnaast: vloeibaar koudemiddel verlaat de cilinder met -40°C — onbeschermde huid raakt direct bevroren. Geen ondernemerstaak voor een doe-het-zelver.',
    },
  ];

  const faqItems = [
    {
      question: 'Mag ik echt nooit zelf airco bijvullen?',
      answer: 'Nee, dat is geen interpretatie maar harde wet. EU-verordening 517/2014, uitgewerkt in Nederland via de Regeling gefluoreerde broeikasgassen. Alleen F-gassen-gecertificeerde monteurs mogen aan systemen met R32, R410A, R407C of R134a werken. Geen uitzondering voor "kleine" bijvullingen, geen uitzondering voor "alleen even meten". De certificering bestaat juist om te voorkomen dat amateurs schade aan milieu en eigen gezondheid veroorzaken.',
    },
    {
      question: 'Wat als ik een cilinder gewoon online koop?',
      answer: 'Legitieme leveranciers verkopen koudemiddel-cilinders niet aan particulieren — ze controleren je certificaat-nummer. Wat je online soms tegenkomt is grijze import of restpartijen via grijze kanalen, vaak van twijfelachtige herkomst. Naast dat dit illegaal is om als particulier te kopen, weet je nooit zeker of het de juiste samenstelling heeft. Verkeerde samenstelling = compressor-schade binnen weken.',
    },
    {
      question: 'Ik zag een YouTube-tutorial. Werkt dat niet?',
      answer: 'Wat je daar ziet is meestal: (1) Amerikaanse content over auto-airco\'s waar regelgeving anders is, (2) systemen voor servicebedrijven met cursus-achtergrond, of (3) iemand die het illegaal doet en het filmt zonder de gevolgen te tonen. De beelden tonen niet dat zonder vacuümpomp het systeem na een seizoen kapot is, of dat de compressor in maand 8 het opgeeft. Onze ervaring: we krijgen geregeld klanten die "iemand" hadden gevraagd en nu een buitenunit van €1.500-€2.500 moeten vervangen.',
    },
    {
      question: 'Is luchten of bijvullen via service-poorten dan niet toegestaan?',
      answer: 'Servicepoorten op de buitenunit (Schraderkleppen) lijken misschien gewone bandventielen, maar het zijn ze niet. Eraan draaien zonder de juiste apparatuur veroorzaakt onbeheersbaar koudemiddelverlies plus risico op koudverbranding. Bovendien is elke gasmutatie (toevoegen of afnemen) wettelijk meldingsplichtig bij de Nederlandse Emissieautoriteit (NEa). Een particulier kan die melding niet doen — die voorziening bestaat alleen voor gecertificeerde bedrijven.',
    },
    {
      question: 'Mag ik wél zelf de filters reinigen?',
      answer: 'Ja, dat is helemaal toegestaan en zelfs aanbevolen. Filters reinigen heeft niets met koudemiddel te maken — je opent alleen de binnenunit, neemt de filterplaat eruit, spoelt onder de kraan, laat drogen en plaatst terug. 2-3 minuten werk, maandelijks doen, voorkomt veel onderhoud-bezoeken. Wat je verder zelf kunt: buitenunit vrijhouden van bladeren, thermostaat checken vóór je een storing meldt. Alles wat geen koudemiddel raakt is uw werk.',
    },
    {
      question: 'Wat doe ik als mijn airco lijkt bij te vullen?',
      answer: 'Bel een F-gassen-gecertificeerde installateur. Voor Limburg zijn wij dat (StayCool Airco, 046 202 1430) — maar er zijn meerdere goede partijen. Vraag bij elk bedrijf om hun F-gassen-certificaat-nummer en NEa-registratie. Een bedrijf dat dat niet kan tonen is per definitie niet gerechtigd aan uw airco te werken. We doen lekdetectie eerst (anders staat u over zes weken weer aan de beurt), repareren waar nodig, en vullen pas dan bij. Richtprijzen: €175-€650 afhankelijk van wat we vinden.',
    },
  ];

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://staycoolairco.nl/' },
          { '@type': 'ListItem', position: 2, name: 'Kennisbank', item: 'https://staycoolairco.nl/kennisbank' },
          { '@type': 'ListItem', position: 3, name: 'Airco zelf bijvullen', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${CANONICAL_URL}#article`,
        headline: 'Waarom je airco niet zelf kunt of mag bijvullen — wet, risico\'s en alternatieven',
        description: 'Particulieren mogen geen koudemiddel toevoegen aan airco. Boete tot €1.500, garantie en verzekering vervallen. Lees hier waarom en wat de alternatieven zijn.',
        url: CANONICAL_URL,
        datePublished: '2026-05-06',
        dateModified: '2026-05-06',
        author: {
          '@type': 'Person',
          name: 'Marvin Smit',
          jobTitle: 'F-gassen gecertificeerd airco-specialist',
          worksFor: { '@type': 'Organization', name: 'StayCool Airco' },
        },
        publisher: {
          '@type': 'Organization',
          name: 'StayCool Airco',
          url: 'https://staycoolairco.nl',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL_URL}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <MetaTags
        title="Airco Zelf Bijvullen | Verboden + €1.500 Boete | StayCool"
        description="Airco zelf bijvullen mag niet — sinds 2015 wettelijk verboden onder EU 517/2014. Boete tot €1.500, garantie en verzekering vervallen. 5 redenen + alternatieven."
        canonicalUrl={CANONICAL_URL}
        type="article"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco zelf bijvullen — waarom dat niet kan en niet mag
          </h1>
          <p className="text-xl md:text-2xl text-red-50 mb-4 max-w-3xl">
            Korte versie: het is wettelijk verboden, de boete is rond <strong>€1.500</strong>, uw fabrieksgarantie vervalt, en de compressor sloopt zichzelf binnen een seizoen.
          </p>
          <p className="text-lg text-red-100 max-w-3xl">
            Hieronder vijf redenen + wat u wél zelf kunt doen om kosten te beperken.
          </p>
        </div>
      </section>

      {/* Author + last-updated */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="text-gray-600">
            <strong className="text-gray-900">Geschreven door:</strong> Marvin Smit, eigenaar StayCool Airco — F-gassen + STEK gecertificeerd
          </div>
          <time dateTime="2026-05-06" className="text-gray-500">Laatste update: 6 mei 2026</time>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              We krijgen elke maand wel een telefoontje van iemand die "even iemand wil sturen om bij te vullen". Of een klant die zelf een cilinder online heeft gevonden. Het antwoord is altijd nee, en dat is geen marketing-truc om u over te halen ons in te huren — het is gewoon Europese wetgeving plus 5 jaar praktijkervaring met wat er mis gaat als amateurs eraan beginnen.
            </p>

            <p>
              Hieronder de vijf redenen op een rij. Daarna: wat u <em>wél</em> zelf kunt doen, en wanneer u écht een F-gassen-gecertificeerd bedrijf moet bellen.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5 redenen waarom u dit niet zelf doet</h2>

            <div className="space-y-4 my-8">
              {redenen.map((r, i) => (
                <div key={i} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500 flex gap-4">
                  <div className="flex-shrink-0 mt-1">{r.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{r.titel}</h3>
                    <p className="text-gray-700">{r.tekst}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Wat is "F-gassen + STEK gecertificeerd" precies?</h2>

            <p>
              In Nederland zijn er twee veelgebruikte termen voor hetzelfde concept: een persoon of bedrijf dat wettelijk gerechtigd is met koudemiddel te werken.
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>F-gassen-certificering</strong> — de Europese standaard, vastgelegd in <a href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32014R0517" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">EU-verordening 517/2014</a>. Per persoon (categorie I-IV) en per bedrijf.</li>
              <li><strong>STEK-certificering</strong> — Nederlandse uitvoering, beheerd door de <a href="https://www.stek.nl" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Stichting Erkenningsregeling voor het Uitoefenen van het Koeltechnisch Installatiebedrijf</a>. Audit-gebaseerd en strenger dan minimaal F-gas-niveau.</li>
              <li><strong>NEa-registratie</strong> — bedrijven moeten elke koudemiddelmutatie melden bij de <a href="https://www.emissieautoriteit.nl/onderwerpen/algemeen-f-gassen" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Nederlandse Emissieautoriteit</a>. Particulier kan dat niet — die meldingsplek bestaat alleen voor erkende bedrijven.</li>
            </ul>

            <p>
              Bij elke installateur kunt u vragen om het certificaat-nummer en NEa-registratiebewijs. Krijgt u dat niet binnen 24 uur per mail toegestuurd? Andere installateur zoeken — dat bedrijf werkt buiten de wet.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Wat u <em>wél</em> zelf kunt doen</h2>

            <p>
              Veel mensen denken: "ik mag niks zelf doen aan mijn airco". Niet waar. Drie dingen die u maandelijks zelf doet, voorkomen 70% van de service-belletjes.
            </p>

            <ol className="space-y-3 ml-6 my-6 list-decimal">
              <li><strong>Filters maandelijks reinigen.</strong> Open de binnenunit (klik aan de zijkant), pak de filterplaten eruit, spoel ze onder de kraan, laat drogen, terugplaatsen. 3 minuten werk. Een vervuilde filter laat de unit harder werken — meer slijtage, hoger stroomverbruik, sneller flare-verbindingen-lekkage.</li>
              <li><strong>Buitenunit vrijhouden.</strong> Bladeren, sneeuw, bloembakken, klimplanten — alles weg houden. Minimaal 30 cm vrij rondom. Een ingeperkte buitenunit verhoogt druk in het systeem en versnelt lekkage bij verbindingen.</li>
              <li><strong>Thermostaat correct gebruiken.</strong> Niet 16°C als u 22°C wilt — dat zorgt voor onnodige overcapaciteit en compressor-slijt. Stel in op de gewenste eindtemperatuur. Modern unit doet de rest.</li>
            </ol>

            <p>
              Wat u <strong>nooit</strong> zelf doet: leiding aanraken, servicekleppen openen, koudemiddel "horen sissen" en denken "ik vul wel even bij", of cilinders kopen via grijze kanalen. Allemaal verboden, allemaal duur, allemaal gevaarlijk.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Wanneer een gecertificeerde installateur bellen?</h2>

            <p>
              Vier signalen waarbij u niet moet wachten:
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>Verminderde koeling</strong> — duurt langer dan vroeger om de gewenste temperatuur te halen, of haalt 'm helemaal niet meer.</li>
              <li><strong>IJsvorming op leidingen</strong> — visueel zichtbare ijslaag op de koudemiddelleidingen of op de verdamper. Stop direct met gebruik en bel.</li>
              <li><strong>Compressor draait door</strong> — de buitenunit slaat niet meer af, blijft draaien zonder dat het binnen koeler wordt.</li>
              <li><strong>Sissend of borrelend geluid</strong> — vaak een lek bij een verbinding. Hoor je dat 's nachts in de stille ruimte? Bel zo snel mogelijk.</li>
            </ul>

            <p>
              Voor Limburg kunt u ons bellen op 046 202 1430 of een appje sturen naar 06 36481054. Stuur eventueel een foto van het typeplaatje van de buitenunit erbij — dan zien we direct welk koudemiddel erin zit en kunnen we vooraf een realistische bandbreedte noemen. Voor de complete prijsindicatie: zie onze <Link to="/airco-vullen-kosten" className="text-sky-600 underline">kosten-pagina</Link>. Voor de uitleg over het hele proces (lekdetectie → reparatie → vacumeren → bijvullen): de <Link to="/airco-bijvullen" className="text-sky-600 underline">pillar-page airco bijvullen</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgestelde vragen</h2>
            <div className="space-y-4 my-8">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12 bg-sky-50 border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Liever direct hulp dan zelf knutselen?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Stuur een foto van uw typeplaatje via WhatsApp — we geven binnen het uur een prijsindicatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700">
              <Phone className="h-5 w-5 mr-2" />Bel 046 202 1430
            </a>
            <a href="https://wa.me/31636481054" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
              WhatsApp 06 36481054
            </a>
            <Link to="/airco-bijvullen" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
              Bekijk pillar bijvullen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoBijvullenZelfDoen;
