import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Phone, Wrench, Clock, Shield, Settings, TrendingUp, ThermometerSnowflake, Wind, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoStoringOplossen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Onderhoud & Service', path: '/onderhoud' },
    { label: 'Storing Oplossen' }
  ];

  const usps = [
    {
      icon: <Clock className="h-12 w-12 text-sky-500" />,
      title: "Snelle Diagnose",
      description: "Systematische foutdiagnose met professionele apparatuur voor snelle oplossing"
    },
    {
      icon: <Wrench className="h-12 w-12 text-sky-500" />,
      title: "24/48u Respons",
      description: "Bij spoedgevallen vaak binnen 24-48 uur ter plaatse voor herstel"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Ervaren Specialisten",
      description: "15+ jaar ervaring met alle merken en storingen, F-gassen gecertificeerd"
    },
    {
      icon: <Settings className="h-12 w-12 text-sky-500" />,
      title: "Duurzame Oplossing",
      description: "We lossen de oorzaak op, niet alleen het symptoom, voor blijvend resultaat"
    }
  ];

  const veelvoorkomendeStoringen = [
    {
      storing: "Airco Start Niet Op",
      mogelijkeOorzaken: [
        "Zekeringen gesprongen of stroomonderbreking",
        "Afstandsbediening defect of lege batterijen",
        "Thermostaat verkeerd ingesteld",
        "Printplaat defect",
        "Noodschakelaar geactiveerd",
        "Elektrische bedrading los of beschadigd"
      ],
      zelfdoen: "Controleer zekeringen, batterijen afstandsbediening, en noodschakelaar",
      wanneerBellen: "Als deze checks geen oplossing bieden"
    },
    {
      storing: "Airco Koelt Niet of Onvoldoende",
      mogelijkeOorzaken: [
        "Koudemiddeltekort door lekkage",
        "Verstopte of vuile filters",
        "Defecte compressor",
        "Bevroren verdamper",
        "Sensor storing",
        "Verkeerde modus ingesteld"
      ],
      zelfdoen: "Controleer en reinig filters, controleer instellingen en modus",
      wanneerBellen: "Als filters schoon zijn maar probleem blijft"
    },
    {
      storing: "Waterlekkage uit Binnenunit",
      mogelijkeOorzaken: [
        "Verstopte condensafvoer",
        "Defecte afvoerpomp",
        "Bevroren verdamper (ijs smelt)",
        "Verkeerde installatie hoogteverschil",
        "Losse of beschadigde afvoerleiding",
        "Te veel vocht in de lucht"
      ],
      zelfdoen: "Controleer of afvoerleiding niet verstopt of geknikt is",
      wanneerBellen: "Direct bij wateroverlast om schade te voorkomen"
    },
    {
      storing: "Vreemde Geluiden (Ratelen, Piepen, Bonken)",
      mogelijkeOorzaken: [
        "Loszittende onderdelen",
        "Ventilator raakt iets",
        "Compressor defect",
        "Lagers versleten",
        "Koudemiddel stroomgeluid (normaal)",
        "Trillingen door verkeerde montage"
      ],
      zelfdoen: "Controleer of buitenunit stabiel staat en niets in de weg zit",
      wanneerBellen: "Bij luide of toenemende geluiden direct contact opnemen"
    },
    {
      storing: "Onprettige Geuren uit Airco",
      mogelijkeOorzaken: [
        "Schimmel in binnenunit of afvoer",
        "Vuile filters vol bacteriën",
        "Dode insecten of bladeren in unit",
        "Chemische geur bij koudemiddellek",
        "Brandlucht bij elektrisch defect",
        "Condenswater opstopping"
      ],
      zelfdoen: "Reinig filters grondig en inspecteer buitenunit op bladeren",
      wanneerBellen: "Bij chemische of brandlucht direct, anders bij aanhoudende geur"
    },
    {
      storing: "Airco Schakel Constant In en Uit",
      mogelijkeOorzaken: [
        "Verkeerde capaciteit voor ruimte (te groot)",
        "Thermostaat defect of verkeerd geplaatst",
        "Vuile filters beperken luchtstroom",
        "Koudemiddeltekort",
        "Elektrisch probleem",
        "Compressor defect"
      ],
      zelfdoen: "Reinig filters en controleer thermostaat instellingen",
      wanneerBellen: "Als probleem na filter reiniging blijft bestaan"
    },
    {
      storing: "Hoog Energieverbruik",
      mogelijkeOorzaken: [
        "Vuile filters of condensor",
        "Koudemiddeltekort",
        "Oude inefficiënte unit",
        "Slecht geïsoleerde ruimte",
        "Verkeerde capaciteit",
        "Defecte componenten"
      ],
      zelfdoen: "Reinig filters en zorg voor goede ventilatie rond buitenunit",
      wanneerBellen: "Voor professionele controle en optimalisatie"
    },
    {
      storing: "IJsvorming op Leidingen",
      mogelijkeOorzaken: [
        "Vuile filters verminderen luchtstroom",
        "Koudemiddeltekort",
        "Defecte ventilator",
        "Thermostaat defect",
        "Te lage omgevingstemperatuur",
        "Verstopte verdamper"
      ],
      zelfdoen: "Reinig filters en schakel airco tijdelijk uit om ijs te laten smelten",
      wanneerBellen: "Als ijsvorming terugkeert na filter reiniging"
    }
  ];

  const diagnosestappen = [
    {
      stap: "Symptomen Inventariseren",
      beschrijving: "Noteer exact wat er mis is: wanneer begon het, onder welke omstandigheden, welke geluiden/geuren?"
    },
    {
      stap: "Basis Controles Uitvoeren",
      beschrijving: "Check zekeringen, filters, instellingen afstandsbediening, noodschakelaar, batterijen"
    },
    {
      stap: "Visuele Inspectie",
      beschrijving: "Inspecteer binnen- en buitenunit op zichtbare schade, waterlekkage, ijsvorming, vuil"
    },
    {
      stap: "Storing Documenteren",
      beschrijving: "Maak foto's van foutcodes, ijsvorming, waterlekkage voor monteur (versnelt diagnose)"
    },
    {
      stap: "Professionele Diagnose",
      beschrijving: "Monteur gebruikt meetapparatuur: drukmeting, elektrische metingen, thermische beeldvorming"
    },
    {
      stap: "Oorzaak Identificatie",
      beschrijving: "Systematisch uitsluiten van mogelijke oorzaken tot exacte diagnose"
    },
    {
      stap: "Oplossing Bepalen",
      beschrijving: "Advies over reparatie, onderdelen, kosten en tijdsplanning"
    },
    {
      stap: "Herstel & Verificatie",
      beschrijving: "Uitvoeren reparatie en uitgebreid testen van alle functies"
    }
  ];

  const faqItems = [
    {
      question: "Wat moet ik doen als mijn airco plotseling stopt met werken?",
      answer: "Voer eerst basis controles uit: (1) Controleer of de zekering niet gesprongen is, (2) Vervang batterijen in afstandsbediening, (3) Controleer of de noodschakelaar niet per ongeluk is ingedrukt, (4) Reinig filters indien zichtbaar vuil. Als deze checks geen oplossing bieden, neem dan contact op met StayCool Airco. Bij spoedgevallen (hittegolf, vitale ruimte) bieden we voorrang waar mogelijk."
    },
    {
      question: "Hoe weet ik of een storing urgent is of kan wachten?",
      answer: "URGENT bij: waterlekkage (schade aan interieur), brandlucht, vonken, zeer luide ongebruikelijke geluiden, of volledige uitval tijdens extreem weer. KAN WACHTEN bij: verminderde koeling, lichte geuren, kleine afwijkingen. In twijfel? Bel ons - we helpen inschatten of het spoed is. Bij urgent contact opnemen voorkomt vaak grotere schade en hogere reparatiekosten."
    },
    {
      question: "Wat kost het om een airco storing te laten diagnosticeren?",
      answer: "Diagnose ter plaatse kost gemiddeld €75-125 inclusief reistijd en eerste inspectie. Als u direct voor reparatie kiest, wordt dit bedrag vaak verrekend met de reparatiekosten. Voor klanten met een onderhoudscontract is diagnose vaak gratis of met korting. Na diagnose ontvangt u altijd eerst een duidelijke offerte voordat we met reparatie beginnen, zodat u weet waar u aan toe bent."
    },
    {
      question: "Kunnen jullie alle merken en types airconditioners repareren?",
      answer: "Ja, onze monteurs hebben ervaring met alle gangbare merken: Daikin, Mitsubishi, LG, Samsung, Toshiba, Panasonic, Fujitsu, Gree, en meer. We hebben toegang tot technische documentatie, diagnosesoftware en onderdelennetwerken voor vrijwel alle merken. Voor zeer specifieke of oude modellen kan het zijn dat onderdelen langer op zich laten wachten, maar we zoeken altijd naar een oplossing."
    },
    {
      question: "Hoe lang duurt het gemiddeld om een storing op te lossen?",
      answer: "Dit varieert sterk per storing. Eenvoudige reparaties (filter vervangen, elektrische aansluiting herstellen) worden vaak tijdens het eerste bezoek (1-2 uur) opgelost. Complexere reparaties waarbij onderdelen besteld moeten worden kunnen 3-7 werkdagen duren. Bij spoedgevallen met voorraadonderdelen streven we naar oplossing binnen 24-48 uur. We communiceren altijd duidelijk over verwachte doorlooptijd."
    },
    {
      question: "Krijg ik garantie op de reparatie van storingen?",
      answer: "Ja, op alle reparaties geven we standaard garantie. Op arbeid geldt minimaal 3-6 maanden garantie, op vervangen onderdelen geldt de fabrieksgarantie (meestal 1-2 jaar). Als dezelfde storing binnen de garantieperiode terugkeert, komen we kosteloos terug om het op te lossen. Garantievoorwaarden staan duidelijk vermeld op de factuur en worden vooraf besproken."
    },
    {
      question: "Kan ik zelf storingen oplossen of is dat gevaarlijk?",
      answer: "Sommige basis controles en onderhoud kunt u veilig zelf doen: filters reinigen, zekeringen controleren, batterijen vervangen. MAAR: werkzaamheden aan het koudemiddelsysteem, elektrische aansluitingen, of interne componenten zijn wettelijk voorbehouden aan F-gassen gecertificeerde monteurs. Onvakkundige reparaties kunnen leiden tot: elektrische schokken, koudemiddellekken, garantieverlies, en hogere reparatiekosten. Bij twijfel altijd een professional raadplegen."
    },
    {
      question: "Wat als de reparatie duurder is dan verwacht?",
      answer: "We maken altijd eerst een diagnose en offerte voordat we met repareren beginnen. U geeft expliciet toestemming voordat we starten. Als tijdens reparatie blijkt dat er extra werkzaamheden nodig zijn, stoppen we en nemen eerst contact op voor aanvullende toestemming. We werken volledig transparant - nooit onverwachte kosten achteraf. Dit is ook wettelijk verplicht: reparaties boven offertebedrag vereisen nieuwe toestemming."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Storing Oplossen Limburg | Diagnose & Herstel 24/48u | StayCool"
        description="Airco storing oplossen ✓ Snelle diagnose ✓ 24-48u respons ✓ Alle merken ✓ Ervaren monteurs ✓ Bel 046-2021430"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Storing Oplossen",
          description: "Professionele diagnose en oplossing van airco storingen. Snelle responstijd, ervaren monteurs, alle merken.",
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
          serviceType: "Airconditioning Reparatie"
        }}
      />

      <FAQSchema faqs={faqItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Storing Oplossen in Limburg
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Snelle diagnose en professionele oplossing van alle airco storingen. Ervaren monteurs binnen 24-48 uur ter plaatse in heel Limburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel Direct: 046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <AlertCircle className="h-5 w-5 mr-2" />
              Storing Melden
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              24-48u respons
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Alle merken
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              15+ jaar ervaring
            </span>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professionele Storing Oplossing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematische diagnose en duurzame herstel door ervaren specialisten
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
                Airco Storingen: Herkennen, Diagnoseren en Oplossen
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Een defecte airconditioning kan uw comfort en productiviteit ernstig verstoren. Vooral tijdens warme zomerdagen is een werkende airco essentieel. Bij StayCool Airco begrijpen we de urgentie van <strong>snel en effectief storing oplossen</strong>. Met ruim 15 jaar ervaring hebben onze monteurs duizenden storingen succesvol opgelost.
                </p>

                <p>
                  Het geheim van effectieve storing oplossing ligt in <strong>systematische diagnose</strong>. We lossen niet alleen symptomen op, maar achterhalen de werkelijke oorzaak. Dit voorkomt dat dezelfde storing na korte tijd terugkeert en bespaart u tijd en geld.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Veelvoorkomende Airco Storingen en Hun Oorzaken
                </h3>

                <p>
                  In onze jarenlange praktijk zien we steeds terugkerende storingen. Hier vindt u een <strong>uitgebreid overzicht van de meest voorkomende problemen</strong>, hun mogelijke oorzaken, wat u zelf kunt controleren, en wanneer u beter een monteur belt:
                </p>

                <div className="space-y-6 my-8">
                  {veelvoorkomendeStoringen.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sky-500">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertCircle className="h-6 w-6 text-sky-500 mr-2" />
                        {item.storing}
                      </h4>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Mogelijke Oorzaken:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          {item.mogelijkeOorzaken.map((oorzaak, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-sky-500 mr-2">•</span>
                              {oorzaak}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded p-3 mb-3">
                        <p className="text-sm text-gray-700">
                          <strong className="text-green-700">Zelf controleren:</strong> {item.zelfdoen}
                        </p>
                      </div>

                      <div className="bg-orange-50 rounded p-3">
                        <p className="text-sm text-gray-700">
                          <strong className="text-orange-700">Wanneer bellen:</strong> {item.wanneerBellen}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Ons Systematisch Diagnose Proces
                </h3>

                <p>
                  Effectieve storing oplossing begint met <strong>nauwkeurige diagnose</strong>. Bij StayCool Airco volgen we een gestructureerd proces:
                </p>

                <div className="bg-sky-50 rounded-lg p-6 my-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">8-Stappen Diagnose Methode</h4>
                  <div className="space-y-4">
                    {diagnosestappen.map((stap, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">{stap.stap}</h5>
                          <p className="text-gray-600 text-sm">{stap.beschrijving}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Wat U Zelf Kunt Doen (Veilig en Eenvoudig)
                </h3>

                <p>
                  Voordat u een monteur belt, kunt u zelf <strong>enkele basis controles</strong> uitvoeren. Dit kan het probleem soms direct oplossen of helpt de monteur sneller te diagnosticeren:
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Veilige Zelf-Checks</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Zekeringen:</strong> Controleer of de zekeringen voor de airco niet gesprongen zijn in de meterkast</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Afstandsbediening:</strong> Vervang batterijen en test of display reageert</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Filters:</strong> Controleer of filters niet extreem vuil zijn en reinig indien nodig</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Instellingen:</strong> Controleer of airco op juiste modus staat (koelen/verwarmen) en temperatuur correct is</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Buitenunit:</strong> Inspecteer of buitenunit vrij is van bladeren, vuil of objecten die ventilatie blokkeren</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Afvoer:</strong> Controleer of condensafvoer niet verstopt of geknikt is</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Geluiden:</strong> Noteer welke geluiden u hoort en wanneer ze optreden (helpt diagnose)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Foto's:</strong> Maak foto's van foutcodes op display (versnelt diagnose door monteur)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
                    NOOIT Zelf Proberen!
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Openen van binnen- of buitenunit (verlies garantie)</li>
                    <li>• Werken aan elektrische aansluitingen (levensgevaarlijk)</li>
                    <li>• Koudemiddel bijvullen of lekdetectie (wettelijk verboden)</li>
                    <li>• Vervangen van interne componenten</li>
                    <li>• Herprogrammeren van printplaten</li>
                    <li>• Aanpassen van koelcircuit</li>
                  </ul>
                  <p className="text-gray-600 mt-3 text-sm">
                    Deze werkzaamheden zijn voorbehouden aan F-gassen gecertificeerde monteurs. Zelf proberen kan leiden tot elektrische schokken, koudemiddellekken, garantieverlies en hogere reparatiekosten.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Wanneer Is Een Storing Urgent?
                </h3>

                <p>
                  Niet alle storingen vereisen <strong>onmiddellijke actie</strong>, maar sommige situaties verdienen prioriteit:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                    <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                      <AlertCircle className="h-6 w-6 mr-2" />
                      SPOED - Direct Bellen
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Waterlekkage (schade aan interieur)</li>
                      <li>• Brandlucht of rookontwikkeling</li>
                      <li>• Vonken of elektrische problemen</li>
                      <li>• Zeer luide ongebruikelijke geluiden</li>
                      <li>• Volledige uitval tijdens hittegolf</li>
                      <li>• Vitale ruimte (serverruimte, medisch)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-300">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                      <Clock className="h-6 w-6 mr-2" />
                      KAN WACHTEN - Plan Afspraak
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Verminderde koelprestaties</li>
                      <li>• Lichte geuren</li>
                      <li>• Kleine verhogingen energieverbruik</li>
                      <li>• Intermitterende kleine storingen</li>
                      <li>• Preventieve controles</li>
                      <li>• Optimalisatie vragen</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Preventie: Voorkomen Is Beter Dan Genezen
                </h3>

                <p>
                  Veel storingen zijn <strong>te voorkomen met regelmatig onderhoud</strong>. Een jaarlijkse onderhoudsbeurt voorkomt 80% van alle storingen:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>Filter reiniging</strong> - Voorkomt overbelasting en verminderde koeling</li>
                  <li><strong>Koudemiddel controle</strong> - Vroegtijdige lekdetectie voorkomt compressorschade</li>
                  <li><strong>Elektrische controle</strong> - Voorkomt uitval en brandgevaar</li>
                  <li><strong>Condensafvoer reiniging</strong> - Voorkomt waterlekkage</li>
                  <li><strong>Componenten inspectie</strong> - Detecteert slijtage voordat het tot storing leidt</li>
                </ul>

                <p>
                  Met een <strong>onderhoudscontract</strong> plant u automatisch jaarlijks onderhoud en krijgt u voorrang bij spoedmeldingen. Dit voorkomt niet alleen storingen, maar verlengt ook de levensduur van uw airco met jaren.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                  <p className="text-sm font-semibold text-orange-900 mb-2">Airco storing?</p>
                  <p className="text-sm text-orange-700">Bel direct of meld uw storing online</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:0462021430"
                    className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Phone className="inline h-5 w-5 mr-2" />
                    046 202 1430
                  </a>

                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Storing Melden
                  </Link>

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
                  <h4 className="font-semibold text-gray-900 mb-4">Onze Service</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Snelle diagnose
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      24-48u responstijd
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Alle merken
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Duurzame oplossingen
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Garantie op reparatie
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
                      <Link to="/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen" className="text-sky-600 hover:text-sky-700">
                        → Koudemiddel Bijvullen
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
            Veelgestelde Vragen Over Airco Storingen
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
            Airco Storing? Wij Lossen Het Op!
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Meld uw storing en wij plannen binnen 24-48 uur een vakkundige monteur voor diagnose en herstel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Bel Nu: 046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <AlertCircle className="h-6 w-6 mr-2" />
              Storing Melden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoStoringOplossen;
