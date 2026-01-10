import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Wind, Shield, Heart, Droplets, Phone, AlertTriangle, Calendar, Sparkles, ThermometerSun } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoFilterReiniging: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Onderhoud & Service', path: '/onderhoud' },
    { label: 'Airco Filter Reiniging' }
  ];

  const usps = [
    {
      icon: <Heart className="h-12 w-12 text-sky-500" />,
      title: "Gezondere Lucht",
      description: "Verwijder stof, pollen, bacteriën en schimmels voor optimale luchtkwaliteit"
    },
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Betere Prestaties",
      description: "Schone filters zorgen voor maximale luchtstroom en koelcapaciteit"
    },
    {
      icon: <Sparkles className="h-12 w-12 text-sky-500" />,
      title: "Tot 15% Besparing",
      description: "Verminder energieverbruik door optimale doorstroming van lucht"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Langere Levensduur",
      description: "Voorkom overbelasting en slijtage van uw airconditioning"
    }
  ];

  const gezondheidsgevolgen = [
    {
      probleem: "Allergieën en Hooikoorts",
      beschrijving: "Vuile filters laten pollen, huisstofmijt en allergenen circuleren, wat kan leiden tot niezen, jeuk en verstopte neus"
    },
    {
      probleem: "Luchtwegklachten",
      beschrijving: "Bacteriën en schimmels in filters veroorzaken hoesten, benauwdheid en kunnen astma verergeren"
    },
    {
      probleem: "Vermoeide Ogen",
      beschrijving: "Stofdeeltjes en allergenen irriteren ogen, leiden tot rode ogen en tranende ogen"
    },
    {
      probleem: "Hoofdpijn en Vermoeidheid",
      beschrijving: "Slechte luchtkwaliteit vermindert zuurstofopname en kan hoofdpijn en concentratieproblemen veroorzaken"
    },
    {
      probleem: "Legionella Risico",
      beschrijving: "In extreme gevallen kan een vervuild systeem Legionella-bacteriën verspreiden, vooral bij slecht onderhouden systemen"
    }
  ];

  const filterTypes = [
    {
      type: "Standaard Stoffilter",
      functie: "Vangt stof, pluizen en grotere deeltjes op",
      reiniging: "Elke 2-4 weken afzuigen of uitwassen met lauw water"
    },
    {
      type: "Anti-bacterie Filter",
      functie: "Elimineert bacteriën en virussen met speciale coating",
      reiniging: "Alleen stofzuigen, niet wassen. Vervangen volgens fabrikant (6-12 maanden)"
    },
    {
      type: "Actieve Koolstoffilter",
      functie: "Filtert geuren, rook en chemische dampen uit de lucht",
      reiniging: "Niet reinigbaar, vervangen elke 3-6 maanden bij intensief gebruik"
    },
    {
      type: "HEPA Filter",
      functie: "Vangt 99.97% van deeltjes tot 0.3 micron, inclusief allergenen",
      reiniging: "Meestal niet wasbaar, vervangen volgens fabrikant (6-12 maanden)"
    },
    {
      type: "Plasma/Ionisatie Filter",
      functie: "Gebruikt elektrische lading om deeltjes en microben te elimineren",
      reiniging: "Filter-elementen reinigen met droge doek, niet wassen"
    }
  ];

  const reinigingsstappen = [
    "Schakel de airco uit en haal de stekker uit het stopcontact",
    "Open het frontpaneel van de binnenunit volgens handleiding",
    "Verwijder voorzichtig de filters door ze omhoog te tillen of naar buiten te schuiven",
    "Zuig losse stofdeeltjes af met stofzuiger op lage stand",
    "Was wasbare filters met lauw water (max 40°C) en eventueel milde zeep",
    "Spoel filters grondig uit totdat het water helder is",
    "Laat filters volledig aan de lucht drogen (6-8 uur), NIET in direct zonlicht",
    "Plaats droge filters terug in de juiste positie",
    "Sluit het frontpaneel en controleer of alles goed vastzit",
    "Start de airco en controleer of deze normaal functioneert"
  ];

  const faqItems = [
    {
      question: "Hoe vaak moet ik mijn airco filters reinigen?",
      answer: "Voor optimale prestaties en luchtkwaliteit adviseren we standaard stoffilters elke 2-4 weken te reinigen, afhankelijk van gebruik. In stoffige omgevingen, bij huisdieren of tijdens intensief gebruik (zomer) kan wekelijkse reiniging nodig zijn. Speciale filters zoals HEPA en actieve koolstof zijn vaak niet wasbaar en moeten elke 3-12 maanden vervangen worden volgens fabrieksspecificaties."
    },
    {
      question: "Kan ik de filters zelf reinigen of moet een monteur komen?",
      answer: "Standaard stoffilters kunt u zelf eenvoudig reinigen door ze uit de unit te halen, af te zuigen en uit te wassen met lauw water. Dit bespaart kosten en kan frequent gedaan worden. Voor grondige professionele reiniging inclusief interne componenten, controle van alle filtertypes en advies over vervanging raden we jaarlijks een monteur aan. Dit voorkomt schade door verkeerde reiniging en waarborgt optimale werking."
    },
    {
      question: "Wat zijn de tekenen dat mijn filters toe zijn aan reiniging?",
      answer: "Duidelijke signalen zijn: verminderde luchtstroom uit de unit, langere tijd nodig om te koelen, verhoogd energieverbruik, onprettige of muffe geuren, zichtbaar stof op de filters, airco die vaker in en uit schakelt, en verhoogde luchtwegklachten bij bewoners. Bij deze symptomen is directe reiniging of vervanging aangeraden om verdere schade en gezondheidsproblemen te voorkomen."
    },
    {
      question: "Kan ik gewone filters vervangen door betere filters?",
      answer: "In veel gevallen ja, maar niet altijd. Sommige airconditioners ondersteunen upgrade naar HEPA of actieve koolstoffilters voor betere luchtzuivering. Echter, dikkere filters kunnen de luchtstroom beperken en het systeem overbelasten. Raadpleeg altijd de handleiding of een specialist voordat u filters upgrade. Wij adviseren graag over geschikte filteropties voor uw specifieke model en situatie."
    },
    {
      question: "Zijn vuile filters slecht voor mijn gezondheid?",
      answer: "Ja, zeer zeker. Vuile filters circuleren stof, pollen, schimmelsporen, bacteriën en allergenen door uw huis. Dit kan leiden tot allergieën, astma-aanvallen, luchtweginfecties, hoofdpijn en vermoeidheid. Bij ernstige verwaarlozing kunnen gevaarlijke bacteriën zoals Legionella zich ontwikkelen. Mensen met astma, allergieën of verminderde weerstand lopen extra risico. Regelmatige filterreiniging is daarom essentieel voor een gezonde leefomgeving."
    },
    {
      question: "Wat kost professionele filter reiniging?",
      answer: "Een professionele filterreiniging als onderdeel van een reguliere onderhoudsbeurt kost gemiddeld €75-125, afhankelijk van het systeem. Dit omvat reiniging van alle filters, interne componenten, controle van luchtkwaliteit en advies. Losse filtervervanging kost €25-75 per filter, afhankelijk van type (standaard, HEPA, actieve koolstof). Bij een onderhoudscontract is jaarlijkse professionele reiniging vaak inbegrepen."
    },
    {
      question: "Kunnen schone filters echt energiekosten besparen?",
      answer: "Absoluut. Vuile filters blokkeren luchtstroom, waardoor de airco harder moet werken om dezelfde koelprestatie te leveren. Dit verhoogt het energieverbruik met 10-15%. Bij een airco die 6 maanden per jaar 8 uur per dag draait, kan dit €50-150 extra per jaar kosten. Regelmatige filterreiniging betaalt zich dus letterlijk terug, naast de voordelen voor gezondheid en levensduur van het apparaat."
    },
    {
      question: "Hoe droog ik filters na het wassen?",
      answer: "Laat filters minimaal 6-8 uur volledig aan de lucht drogen op een schone, droge locatie. NOOIT in direct zonlicht (kan filters beschadigen) of in de droger. Gebruik geen föhn of verwarming voor sneller drogen - dit kan filters vervormen. Vochtige filters terugplaatsen leidt tot schimmelvorming en onaangename geuren. Controleer dat filters werkelijk volledig droog zijn voordat u ze terugplaatst."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Filter Reiniging Limburg | Luchtkwaliteit Verbeteren | StayCool Airco"
        description="Airco filter reiniging ✓ Gezondere lucht ✓ 15% energiebesparing ✓ Alle filtertypes ✓ Zelf doen of professioneel ✓ Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Filter Reiniging",
          description: "Professionele airco filter reiniging voor optimale luchtkwaliteit en energiebesparing. Alle filtertypes, advies en service in Limburg.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          },
          serviceType: "Airconditioning Onderhoud"
        }}
      />

      <FAQSchema faqs={faqItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Filter Reiniging in Limburg
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Verbeter luchtkwaliteit en bespaar tot 15% energie met schone airco filters. Professionele reiniging of doe-het-zelf advies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Plan Professionele Reiniging
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel: 046 202 1430
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Gezondere luchtkwaliteit
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Tot 15% besparing
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Professioneel advies
            </span>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Schone Airco Filters Essentieel Zijn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filters zijn de longen van uw airco - houd ze schoon voor optimale gezondheid en prestaties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Airco Filter Reiniging: Investering in Gezondheid en Comfort
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  De filters van uw airconditioning zijn misschien wel de belangrijkste componenten voor <strong>luchtkwaliteit en gezondheid</strong> in uw woning of bedrijf. Elke dag pompt uw airco honderden kubieke meters lucht door deze filters. Alles wat zich in de lucht bevindt - stof, pollen, bacteriën, schimmelsporen, huisstofmijt - wordt door deze filters opgevangen.
                </p>

                <p>
                  Maar wat gebeurt er als filters vol raken? Ze worden een <strong>broeinest voor allergenen en micro-organismen</strong> die vervolgens weer door uw huis worden geblazen. Daarnaast blokkeert vuil de luchtstroom, waardoor uw airco tot 15% meer energie verbruikt en veel sneller slijt. Regelmatige filterreiniging is daarom geen luxe, maar een <strong>essentiële noodzaak</strong>.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Gezondheidsgevolgen Van Vuile Airco Filters
                </h3>

                <p>
                  De impact van vuile filters op uw gezondheid wordt vaak onderschat. Onderzoek toont aan dat <strong>binnenluchtkwaliteit vaak slechter is dan buitenlucht</strong>, vooral in gebouwen met slecht onderhouden airconditioners. Hier zijn de meest voorkomende gezondheidsproblemen:
                </p>

                <div className="space-y-4 my-8">
                  {gezondheidsgevolgen.map((item, index) => (
                    <div key={index} className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        {item.probleem}
                      </h4>
                      <p className="text-gray-600">{item.beschrijving}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Vooral <strong>mensen met astma, allergieën of een verzwakt immuunsysteem</strong> zijn extra kwetsbaar voor de gevolgen van vervuilde filters. Kinderen en ouderen lopen eveneens verhoogd risico. Regelmatige filterreiniging is voor deze groepen niet alleen belangrijk voor comfort, maar werkelijk voor hun gezondheid.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Verschillende Filtertypes en Hun Onderhoud
                </h3>

                <p>
                  Niet alle filters zijn hetzelfde. Moderne airconditioners hebben vaak <strong>meerdere filtertypes</strong> die elk een specifieke functie hebben en eigen onderhoudsbehoeften kennen:
                </p>

                <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden">
                  {filterTypes.map((filter, index) => (
                    <div key={index} className={`p-6 ${index !== filterTypes.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Wind className="h-5 w-5 text-sky-500 mr-2" />
                        {filter.type}
                      </h4>
                      <p className="text-gray-600 mb-2"><strong>Functie:</strong> {filter.functie}</p>
                      <p className="text-gray-600"><strong>Onderhoud:</strong> {filter.reiniging}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Het is belangrijk te weten <strong>welke filters uw airco heeft</strong>. Raadpleeg de handleiding of neem contact met ons op voor advies. Verkeerd onderhoud kan filters beschadigen en de garantie laten vervallen.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Stap-voor-Stap: Filters Zelf Reinigen
                </h3>

                <p>
                  De meeste <strong>standaard stoffilters zijn eenvoudig zelf te reinigen</strong>. Dit bespaart kosten en kan zo vaak als nodig worden gedaan. Volg deze stappen voor veilige en effectieve reiniging:
                </p>

                <div className="bg-sky-50 rounded-lg p-6 my-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Filter Reinigingsprotocol</h4>
                  <ol className="space-y-3">
                    {reinigingsstappen.map((stap, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 pt-1">{stap}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                    Belangrijke Waarschuwingen
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• NOOIT vochtige filters terugplaatsen - dit leidt tot schimmelvorming</li>
                    <li>• Gebruik geen agressieve schoonmaakmiddelen of bleekmiddel</li>
                    <li>• Was filters niet in de vaatwasser of wasmachine</li>
                    <li>• Droog filters niet in direct zonlicht of met een föhn</li>
                    <li>• Controleer of filters niet beschadigd zijn (scheuren, gaten)</li>
                    <li>• Speciale filters (HEPA, ionisatie) meestal NIET wassen</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Wanneer Professionele Reiniging Nodig Is
                </h3>

                <p>
                  Hoewel u standaard filters zelf kunt reinigen, is <strong>jaarlijkse professionele reiniging</strong> sterk aan te raden. Een professionele onderhoudsbeurt omvat meer dan alleen de filters:
                </p>

                <ul className="space-y-2 ml-6">
                  <li><strong>Diepe reiniging van interne componenten</strong> - Verdamper, ventilator en binnenwerk worden grondig gereinigd</li>
                  <li><strong>Controle van alle filtertypes</strong> - Ook filters die niet zichtbaar zijn worden gecontroleerd</li>
                  <li><strong>Luchtkwaliteit meting</strong> - We kunnen de luchtkwaliteit voor en na reiniging meten</li>
                  <li><strong>Filter vervanging indien nodig</strong> - Niet alle filters zijn reinigbaar, sommige moeten vervangen worden</li>
                  <li><strong>Advies op maat</strong> - Persoonlijk advies over reinigingsfrequentie voor uw situatie</li>
                  <li><strong>Controle condensafvoer</strong> - Verstopte afvoer leidt tot waterlekkage en schimmel</li>
                  <li><strong>Inspectie op schimmel</strong> - Vroege detectie van schimmelvorming voorkomt gezondheidsproblemen</li>
                </ul>

                <p>
                  Vooral in <strong>vochtige omgevingen, bij huisdieren of tijdens bouwwerkzaamheden</strong> is professionele reiniging waardevol. Onze monteurs beschikken over speciale reinigingsmiddelen en apparatuur die grondiger reinigen dan thuisreiniging mogelijk maakt.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Energiebesparing Door Schone Filters
                </h3>

                <p>
                  De financiële voordelen van schone filters worden vaak onderschat. Een <strong>verstopte filter verhoogt het energieverbruik met 10-15%</strong>. Laten we dit doorrekenen:
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Rekenvoorbeeld Energiebesparing</h4>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Situatie:</strong> Airco (3.5 kW) draait 6 maanden per jaar, 8 uur per dag</p>
                    <p><strong>Energiekosten:</strong> €0.40 per kWh (gemiddeld tarief 2024)</p>
                    <p><strong>Verbruik met vuile filters:</strong> 1500 kWh per seizoen = €600</p>
                    <p><strong>Verbruik met schone filters:</strong> 1300 kWh per seizoen = €520</p>
                    <p className="text-xl font-bold text-green-600 pt-4 border-t border-gray-200">
                      Jaarlijkse besparing: €80 - €120
                    </p>
                  </div>
                </div>

                <p>
                  Deze besparing is structureel - jaar na jaar. Over de levensduur van uw airco (10-15 jaar) bespaart regelmatige filterreiniging <strong>honderden tot duizenden euro's</strong>. Daarbij verlengt het de levensduur van uw systeem doordat componenten minder zwaar belast worden.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Herkennen Wanneer Filters Toe Zijn Aan Reiniging
                </h3>

                <p>
                  Wacht niet tot uw airco problemen vertoont. Let op deze <strong>waarschuwingssignalen</strong>:
                </p>

                <ul className="space-y-2 ml-6">
                  <li>Merkbaar verminderde luchtstroom uit de binnenunit</li>
                  <li>Airco heeft langer nodig om de gewenste temperatuur te bereiken</li>
                  <li>Ongebruikelijke of muffe geuren bij inschakelen</li>
                  <li>Verhoogd energieverbruik zonder wijziging in gebruik</li>
                  <li>Toename van stof in huis kort na schoonmaken</li>
                  <li>Meer allergische reacties of luchtwegklachten bij bewoners</li>
                  <li>Zichtbaar stof op de filters (inspecteer maandelijks)</li>
                  <li>Waterdruppels of condensvorming bij de binnenunit</li>
                </ul>

                <p>
                  Bij deze signalen is <strong>directe actie aangeraden</strong>. Meestal volstaat zelf reinigen, maar bij aanhoudende problemen of onplezierige geuren kan professionele reiniging en inspectie noodzakelijk zijn.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionele Filter Reiniging</h3>
                <p className="text-gray-600 mb-6">
                  Laat uw filters professioneel reinigen inclusief controle en advies
                </p>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Plan Reiniging
                  </Link>

                  <a
                    href="tel:0462021430"
                    className="block w-full text-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Phone className="inline h-5 w-5 mr-2" />
                    046 202 1430
                  </a>

                  <a
                    href="https://wa.me/31636481054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Professionele Service Omvat</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Reiniging alle filters
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Interne componenten
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Luchtkwaliteit check
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Advies op maat
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Filter vervanging indien nodig
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Gerelateerde Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/jaarlijks-airco-onderhoud" className="text-sky-600 hover:text-sky-700">
                        → Jaarlijks Onderhoud
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-reparatie-service" className="text-sky-600 hover:text-sky-700">
                        → Reparatie Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen" className="text-sky-600 hover:text-sky-700">
                        → Koudemiddel Bijvullen
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-storing-oplossen" className="text-sky-600 hover:text-sky-700">
                        → Storing Oplossen
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen Over Airco Filter Reiniging
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Verbeter Uw Luchtkwaliteit Vandaag
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Plan nu professionele filter reiniging of vraag advies over zelf reinigen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calendar className="h-6 w-6 mr-2" />
              Plan Reiniging
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoFilterReiniging;
