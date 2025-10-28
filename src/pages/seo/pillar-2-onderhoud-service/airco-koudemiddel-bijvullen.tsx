import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Droplets, AlertTriangle, Phone, Thermometer, Wind, Award, TrendingDown, Settings } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoKoudemiddelBijvullen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Onderhoud & Service', path: '/onderhoud' },
    { label: 'Koudemiddel Bijvullen' }
  ];

  const usps = [
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "F-Gassen Gecertificeerd",
      description: "Wettelijk verplichte certificering voor veilig en milieuvriendelijk werken met koudemiddel"
    },
    {
      icon: <Droplets className="h-12 w-12 text-sky-500" />,
      title: "Lekdetectie Inbegrepen",
      description: "Professionele lekdetectie om oorzaak te vinden en herhaling te voorkomen"
    },
    {
      icon: <Settings className="h-12 w-12 text-sky-500" />,
      title: "Juiste Hoeveelheid",
      description: "Nauwkeurige drukmeting en vulling volgens fabrieksspecificaties"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Garantie Op Service",
      description: "Garantie op werkzaamheden en controle na bijvullen"
    }
  ];

  const tekensTekort = [
    {
      symptoom: "Verminderde Koelprestatie",
      beschrijving: "Airco koelt niet meer voldoende of duurt langer om gewenste temperatuur te bereiken",
      ernst: "Matig"
    },
    {
      symptoom: "IJsvorming Op Leidingen",
      beschrijving: "Zichtbare ijslaag op koudemiddelleidingen of verdamper, vooral bij de binnenunit",
      ernst: "Ernstig"
    },
    {
      symptoom: "Verhoogd Energieverbruik",
      beschrijving: "Merkbaar hogere energierekening terwijl gebruik gelijk is gebleven",
      ernst: "Matig"
    },
    {
      symptoom: "Constant Doordraaien Compressor",
      beschrijving: "Buitenunit draait continu door zonder gewenste koeling te bereiken",
      ernst: "Ernstig"
    },
    {
      symptoom: "Luchtbellen In Kijkglas",
      beschrijving: "Zichtbare luchtbellen in het kijkglas (indien aanwezig) duiden op tekort",
      ernst: "Matig"
    },
    {
      symptoom: "Warme Lucht Uit Binnenunit",
      beschrijving: "Airco blaast warme of lauwwarme lucht in plaats van koude lucht",
      ernst: "Ernstig"
    }
  ];

  const koudemiddelTypes = [
    {
      type: "R32",
      eigenschappen: "Modern, lage GWP (675), energie-efficiënt",
      toepassingen: "Nieuwe single-split en multi-split systemen vanaf 2015",
      milieu: "Milieuvriendelijker dan R410A, wordt steeds populairder"
    },
    {
      type: "R410A",
      eigenschappen: "Veel gebruikt, hoge GWP (2088), goede prestaties",
      toepassingen: "Meeste systemen tussen 2010-2020",
      milieu: "Wordt uitgefaseerd maar nog veel in gebruik"
    },
    {
      type: "R407C",
      eigenschappen: "Vervanging voor R22, matige GWP (1774)",
      toepassingen: "Oudere systemen en industriële toepassingen",
      milieu: "Overgangsproduct, minder populair bij nieuwbouw"
    },
    {
      type: "R22",
      eigenschappen: "Oud type, zeer hoge GWP (1810), VERBODEN",
      toepassingen: "Oude systemen voor 2010",
      milieu: "Sinds 2015 verboden in Europa, niet meer leverbaar"
    },
    {
      type: "R290 (Propaan)",
      eigenschappen: "Natuurlijk koudemiddel, zeer lage GWP (3)",
      toepassingen: "Nieuwe generatie milieuvriendelijke systemen",
      milieu: "Toekomst, brandbaar maar zeer milieuvriendelijk"
    }
  ];

  const lekOorzaken = [
    "Slechte installatie met ondeugdelijke verbindingen of flareverbindingen",
    "Corrosie van leidingen door vocht of agressieve omgeving",
    "Mechanische beschadiging bij verbouwing of schilderwerk",
    "Trilling-schade aan verbindingen door verkeerde montage",
    "Slijtage van afdichtingen en rubber delen",
    "Vorst-schade aan leidingen in onverwachte koude periodes",
    "Fabricagefouten aan units of componenten"
  ];

  const faqItems = [
    {
      question: "Hoe vaak moet koudemiddel bijgevuld worden?",
      answer: "Bij een goed geïnstalleerd en onderhouden systeem zou koudemiddel NOOIT bijgevuld hoeven te worden - het is een gesloten systeem. Als u koudemiddel moet bijvullen, dan is er sprake van een lek. De frequentie van bijvullen hangt af van de grootte van het lek: van jaarlijks (klein lek) tot binnen enkele weken (groot lek). Het is altijd verstandig om het lek op te sporen en te repareren in plaats van steeds bij te vullen."
    },
    {
      question: "Wat kost het om koudemiddel bij te laten vullen?",
      answer: "De kosten variëren sterk afhankelijk van het type koudemiddel, de hoeveelheid, en of lekdetectie en reparatie nodig is. Voor een standaard bijvulling inclusief arbeid en koudemiddel rekent u gemiddeld €150-400. Bij grote systemen of dure koudemiddeltypes (R410A) kan dit oplopen tot €500-800. Lekdetectie en reparatie komen daar bovenop. R22 is niet meer leverbaar. We maken altijd eerst een offerte na inspectie."
    },
    {
      question: "Kan ik zelf koudemiddel bijvullen?",
      answer: "Nee, absoluut niet. Sinds 2015 is het WETTELIJK VERBODEN voor particulieren om zelf aan koudemiddelsystemen te werken. Alleen F-gassen gecertificeerde monteurs mogen koudemiddel bijvullen. Dit ter bescherming van milieu (koudemiddel is broeikasgas), veiligheid (hoge druk, mogelijk brandbaar), en om correcte druk te garanderen. Verkeerd bijvullen kan leiden tot ernstige schade aan de airco en gevaarlijke situaties."
    },
    {
      question: "Hoe weet ik welk type koudemiddel mijn airco gebruikt?",
      answer: "Het type koudemiddel staat vermeld op het typeplaatje van zowel de binnen- als buitenunit. Dit is meestal een sticker met specificaties zoals model, serienummer en koudemiddel-type (bijv. R32, R410A). Ook in de handleiding vindt u deze informatie. Weet u het niet zeker? Onze monteurs kunnen dit snel bepalen aan de hand van model- en serienummers, of door drukmeting."
    },
    {
      question: "Is koudemiddel gevaarlijk of giftig?",
      answer: "De meeste moderne koudemiddelen (R32, R410A) zijn niet giftig maar kunnen bij hoge concentraties in gesloten ruimtes zuurstof verdringen. R290 (propaan) is brandbaar maar wordt in kleine hoeveelheden gebruikt. Het grootste risico is het broeikaseffect - koudemiddelen zijn krachtige broeikasgassen. Daarom is correct omgaan met koudemiddel en voorkomen van lekken essentieel. Bij normale gebruik in een goed onderhouden airco zijn er geen gezondheidsrisico's."
    },
    {
      question: "Kan ik van R410A naar R32 overstappen?",
      answer: "Nee, dat is technisch niet mogelijk zonder het volledige systeem te vervangen. Elk koudemiddel vereist specifieke componenten, compressor-types, en systeemdrukken. R32 en R410A zijn niet onderling uitwisselbaar. Als uw systeem op R410A draait, moet u dat koudemiddel blijven gebruiken. Bij vervanging van een oud systeem kunt u wel kiezen voor een nieuw R32 systeem dat milieuvriendelijker en efficiënter is."
    },
    {
      question: "Wat gebeurt er als mijn airco te veel koudemiddel heeft?",
      answer: "Te veel koudemiddel is net zo schadelijk als te weinig. Het leidt tot verhoogde druk in het systeem, overbelasting van de compressor, verminderde efficiëntie, en mogelijk beschadiging van componenten. Symptomen zijn onder andere zeer hoge druk (meetbaar), warme lucht, vreemde geluiden, en frequent in- en uitschakelen. Bij vermoeden van overvulling moet een monteur het systeem controleren en eventueel koudemiddel afvoeren tot de juiste hoeveelheid."
    },
    {
      question: "Moet er een lek zijn als koudemiddel bijgevuld moet worden?",
      answer: "Ja, een airco is een 100% gesloten systeem. Koudemiddel verdampt niet, raakt niet op, en hoeft bij een correct functionerend systeem nooit bijgevuld te worden. Als er een tekort is, is er ALTIJD sprake van een lek - van minuscuul klein (microscopisch) tot groot en direct zichtbaar. Het is niet verstandig om alleen bij te vullen zonder het lek op te sporen, want u moet dan steeds opnieuw bijvullen, wat duur en slecht voor het milieu is."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Koudemiddel Bijvullen Limburg | F-Gassen Gecertificeerd | StayCool"
        description="Airco koudemiddel bijvullen ✓ F-gassen gecertificeerd ✓ Lekdetectie ✓ R32, R410A, R407C ✓ Garantie ✓ Bel 046-2021430"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Koudemiddel Bijvullen",
          description: "Professioneel koudemiddel bijvullen door F-gassen gecertificeerde monteurs. Inclusief lekdetectie en garantie op werkzaamheden.",
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
          serviceType: "Koudemiddel Service"
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Koudemiddel Bijvullen in Limburg
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            F-gassen gecertificeerde service voor alle koudemiddeltypes. Inclusief professionele lekdetectie en reparatie in heel Limburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Droplets className="h-5 w-5 mr-2" />
              Vraag Offerte Aan
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
              F-gassen gecertificeerd
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Lekdetectie inclusief
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Alle koudemiddeltypes
            </span>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professionele F-Gassen Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veilig, wettelijk correct en milieuvriendelijk werken met koudemiddel
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
                Koudemiddel Bijvullen: Wat U Moet Weten
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Koudemiddel is het <strong>levensbloed van uw airconditioning</strong>. Het absorbeert warmte uit uw woning en voert deze naar buiten af. Een airconditioning is een volledig gesloten systeem - in theorie zou koudemiddel nooit bijgevuld hoeven te worden. Als er een tekort ontstaat, betekent dit dat er <strong>altijd een lek aanwezig is</strong>.
                </p>

                <p>
                  Bij StayCool Airco zijn al onze monteurs <strong>F-gassen gecertificeerd</strong> zoals wettelijk verplicht sinds 2015. Deze certificering garandeert dat we veilig, professioneel en milieuvriendelijk met koudemiddel werken. We vullen niet zomaar bij, maar zoeken eerst altijd naar de oorzaak van het probleem.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                    Waarschuwing: Zelf Bijvullen Is Illegaal
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Sinds 2015 is het <strong>wettelijk verboden</strong> voor particulieren om zelf koudemiddel bij te vullen. Dit ter bescherming van:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Milieu - Koudemiddel is een krachtig broeikasgas</li>
                    <li>• Veiligheid - Hoge druk en mogelijk brandbare gassen</li>
                    <li>• Correcte werking - Verkeerde hoeveelheid beschadigt systeem</li>
                  </ul>
                  <p className="text-gray-600 mt-3">
                    Alleen <strong>F-gassen gecertificeerde bedrijven</strong> mogen aan koudemiddelsystemen werken.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Tekenen Van Koudemiddeltekort
                </h3>

                <p>
                  Hoe herkent u dat uw airco mogelijk koudemiddel tekort heeft? Let op deze symptomen:
                </p>

                <div className="space-y-4 my-8">
                  {tekensTekort.map((teken, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-sky-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{teken.symptoom}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          teken.ernst === 'Ernstig' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {teken.ernst}
                        </span>
                      </div>
                      <p className="text-gray-600">{teken.beschrijving}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Bij deze symptomen is het verstandig om <strong>direct contact op te nemen</strong>. Doordraaien met te weinig koudemiddel kan leiden tot ernstige compressorschade, wat zeer dure reparaties tot gevolg heeft.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Verschillende Koudemiddeltypes
                </h3>

                <p>
                  Er bestaan verschillende types koudemiddel, elk met eigen eigenschappen, toepassingen en milieu-impact. Het is <strong>essentieel dat het juiste type</strong> wordt gebruikt:
                </p>

                <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden">
                  {koudemiddelTypes.map((km, index) => (
                    <div key={index} className={`p-6 ${index !== koudemiddelTypes.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Droplets className="h-5 w-5 text-sky-500 mr-2" />
                        {km.type}
                      </h4>
                      <div className="space-y-2 text-gray-600 text-sm">
                        <p><strong>Eigenschappen:</strong> {km.eigenschappen}</p>
                        <p><strong>Toepassingen:</strong> {km.toepassingen}</p>
                        <p><strong>Milieu-aspect:</strong> {km.milieu}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  <strong>Belangrijk:</strong> Verschillende koudemiddeltypes zijn NIET onderling uitwisselbaar. Gebruik altijd het type dat gespecificeerd is voor uw systeem. Verkeerd koudemiddel leidt tot ernstige schade en garantieverlies.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Lekdetectie: Oorzaak Vinden Voor Duurzame Oplossing
                </h3>

                <p>
                  Simpelweg koudemiddel bijvullen zonder de <strong>oorzaak van het lek te vinden</strong> is symptoombestrijding. Binnen enkele weken of maanden zit u opnieuw met hetzelfde probleem. Daarom voeren wij altijd grondige lekdetectie uit:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>Visuele inspectie</strong> - Zoeken naar zichtbare beschadigingen, olievlekken of corrosie</li>
                  <li><strong>Elektronische lekdetector</strong> - Apparaat dat zelfs kleinste lekken detecteert</li>
                  <li><strong>UV-tracer methode</strong> - Speciale vloeistof wordt toegevoegd en lekt worden zichtbaar met UV-lamp</li>
                  <li><strong>Zeepoplossing test</strong> - Traditionele maar effectieve methode voor grotere lekken</li>
                  <li><strong>Drukmeting</strong> - Vaststellen van drukverlies over tijd</li>
                </ul>

                <p>
                  Veelvoorkomende oorzaken van koudemiddellekken zijn:
                </p>

                <div className="bg-sky-50 rounded-lg p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Veel Voorkomende Lekoorzaken</h4>
                  <ul className="space-y-2 text-gray-600">
                    {lekOorzaken.map((oorzaak, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        {oorzaak}
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Ons Koudemiddel Bijvul Proces
                </h3>

                <p>
                  Bij StayCool Airco volgen we een <strong>gestructureerd proces</strong> voor veilige en correcte koudemiddel service:
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 my-8">
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                      <div>
                        <strong className="text-gray-900">Diagnose & Inspectie</strong>
                        <p className="text-gray-600">Controleren van symptomen, drukmeting, visuele inspectie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                      <div>
                        <strong className="text-gray-900">Lekdetectie</strong>
                        <p className="text-gray-600">Opsporen van lekken met professionele apparatuur</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                      <div>
                        <strong className="text-gray-900">Offerte & Advies</strong>
                        <p className="text-gray-600">Duidelijke uitleg van probleem en kosten voor reparatie + bijvullen</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                      <div>
                        <strong className="text-gray-900">Lek Reparatie</strong>
                        <p className="text-gray-600">Herstellen van lekken door lassen, vervangen onderdelen of aanpassen installatie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                      <div>
                        <strong className="text-gray-900">Vacuümtrekken</strong>
                        <p className="text-gray-600">Verwijderen van lucht en vocht uit het systeem</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                      <div>
                        <strong className="text-gray-900">Koudemiddel Bijvullen</strong>
                        <p className="text-gray-600">Nauwkeurig vullen tot de juiste druk volgens fabrieksspecificaties</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">7</span>
                      <div>
                        <strong className="text-gray-900">Testen & Controle</strong>
                        <p className="text-gray-600">Uitgebreid testen van alle functies en koelprestaties</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">8</span>
                      <div>
                        <strong className="text-gray-900">Registratie & Documentatie</strong>
                        <p className="text-gray-600">Wettelijk verplichte registratie van koudemiddelhoeveelheid en werkzaamheden</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Milieu-Aspecten en F-Gassen Wetgeving
                </h3>

                <p>
                  Koudemiddelen zijn <strong>krachtige broeikasgassen</strong> met een Global Warming Potential (GWP) honderden tot duizenden keren hoger dan CO2. Daarom is correcte omgang met koudemiddel essentieel:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>Wettelijke certificering verplicht</strong> - Alleen F-gassen gecertificeerde bedrijven mogen werken aan airconditioners</li>
                  <li><strong>Registratieplicht</strong> - Alle werkzaamheden en koudemiddelhoeveelheden moeten geregistreerd worden</li>
                  <li><strong>Lekcontrole verplicht</strong> - Systemen met  meer dan 5 ton CO2-equivalent moeten regelmatig gecontroleerd worden</li>
                  <li><strong>Terugwinplicht</strong> - Bij demontage moet koudemiddel professioneel teruggewonnen worden</li>
                  <li><strong>Uitfasering van hoog-GWP gassen</strong> - Geleidelijke vervanging door milieuvriendelijker alternatieven</li>
                </ul>

                <p>
                  StayCool Airco is <strong>volledig geregistreerd bij de Nederlandse Emissieautoriteit (NEa)</strong> en voldoet aan alle wettelijke vereisten. We werken volgens de laatste milieunormen en adviseren over de meest duurzame oplossingen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Koudemiddel Service Nodig?</h3>
                <p className="text-gray-600 mb-6">
                  Neem contact op voor professionele lekdetectie en koudemiddel bijvulling
                </p>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Vraag Offerte Aan
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
                  <h4 className="font-semibold text-gray-900 mb-4">Onze Service Omvat</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Professionele lekdetectie
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Lek reparatie
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Koudemiddel bijvullen
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Druk- en prestatietest
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Garantie op werkzaamheden
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
                      <Link to="/seo/pillar-2-onderhoud-service/airco-filter-reiniging" className="text-sky-600 hover:text-sky-700">
                        → Filter Reiniging
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
            Veelgestelde Vragen Over Koudemiddel
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
            F-Gassen Service Nodig?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Neem contact op voor professionele lekdetectie en koudemiddel bijvulling door gecertificeerde specialisten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Droplets className="h-6 w-6 mr-2" />
              Vraag Offerte Aan
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

export default AircoKoudemiddelBijvullen;
