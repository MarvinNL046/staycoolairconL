import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Euro, ThermometerSun, TrendingUp, Phone, Calculator, Shield, Wind } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const VerwarmenMetAirco: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energie Besparen', path: '/seo/pillar-4-energie-besparen' },
    { label: 'Verwarmen met Airco' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: '60% Lagere Verwarmingskosten',
      description: 'Bespaar tot 60% op uw energierekening vergeleken met traditionele CV-ketel of elektrische verwarming.'
    },
    {
      icon: <ThermometerSun className="h-12 w-12 text-orange-500" />,
      title: 'Warmtepomp Technologie',
      description: 'Haal 3-5 kW warmte uit 1 kW stroom. Tot 500% rendement met moderne inverter technologie.'
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: 'Optimaal met Zonnepanelen',
      description: 'Voorkom terugleverkosten door eigen opgewekte stroom direct te gebruiken voor verwarming.'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: '10 Jaar Garantie',
      description: 'Tot 10 jaar volledige garantie op premium warmtepomp airco\'s van Daikin, Mitsubishi en LG.'
    }
  ];

  const faqs = [
    {
      question: 'Hoe efficiënt is verwarmen met een airco ten opzichte van een CV-ketel?',
      answer: 'Een moderne warmtepomp airco heeft een SCOP (seizoensefficiëntie) van 4,0 tot 5,0. Dit betekent dat u uit 1 kW elektriciteit 4-5 kW warmte haalt. Een HR-combiketel heeft daarentegen een rendement van maximaal 95%. Bij lage gasprijzen is gas goedkoper, maar bij hogere energieprijzen of met zonnepanelen is een warmtepomp 40-60% voordeliger. Bovendien bent u met een warmtepomp onafhankelijk van fossiele brandstoffen en draagt u bij aan CO2-reductie.'
    },
    {
      question: 'Kan een airco mijn hele huis verwarmen in de winter?',
      answer: 'Dat hangt af van de isolatiegraad van uw woning, de capaciteit van de airco en de buitentemperatuur. Een goed geïsoleerde woning van 80-100m² kan met een enkele multi-split airco van 5-7 kW effectief verwarmd worden tot circa -10°C buitentemperatuur. Voor grotere woningen of bij lagere temperaturen kunt u een multi-split systeem met meerdere binnenunits overwegen, of een combinatie met een traditioneel verwarmingssysteem als backup. Moderne Daikin en Mitsubishi warmtepompen werken tot -25°C buitentemperatuur.'
    },
    {
      question: 'Is verwarmen met airco duurzamer dan gas?',
      answer: 'Absoluut. Een warmtepomp airco gebruikt elektriciteit en haalt energie uit de buitenlucht. Als u groene stroom afneemt of eigen zonnepanelen heeft, verwarmt u vrijwel CO2-neutraal. Een gasgestookte CV-ketel stoot direct CO2 uit. Zelfs met grijze stroom is het CO2-voetafdruk per kWh warmte 50-70% lager dan met gas. De EU stimuleert warmtepompen dan ook als duurzame verwarmingsoplossing en vanaf 2026 geldt in nieuwbouw een verbod op gasaansluitingen.'
    },
    {
      question: 'Wat zijn de voordelen van verwarmen met zonnepanelen en airco?',
      answer: 'Met zonnepanelen en een warmtepomp airco maximaliseert u uw besparing. Overdag opgewekte zonne-energie gebruikt u direct voor verwarming, zonder terugleverkosten. Een thuisbatterij slaat overtollige stroom op voor gebruik \'s avonds en \'s nachts. Hierdoor kunt u tot 70-80% zelfvoorzienend worden. In combinatie met een thuisbatterij kunt u zelfs uw terugleverkosten tot nul reduceren en optimaal profiteren van uw zonnepanelen.'
    },
    {
      question: 'Tot welke buitentemperatuur kan ik effectief verwarmen met een airco?',
      answer: 'Premium warmtepomp airco\'s zoals Daikin Emura, Mitsubishi Heavy SRK-serie en LG Artcool blijven efficiënt verwarmen tot -15°C tot -25°C buitentemperatuur. Bij temperaturen onder -10°C neemt de efficiëntie iets af, maar moderne modellen leveren nog steeds 70-80% van hun nominale capaciteit. Voor Limburg, waar het zelden kouder wordt dan -10°C, zijn warmtepomp airco\'s een zeer effectieve verwarmingsoplossing het hele jaar door.'
    },
    {
      question: 'Welke airco merken zijn het beste voor verwarmen?',
      answer: 'Voor verwarmen raden wij vooral Daikin, Mitsubishi Heavy Industries en LG aan. Deze merken hebben bewezen warmtepomp technologie met hoge SCOP-waarden (4,5-5,2) en uitstekende prestaties bij lage temperaturen. Daikin Emura en Perfera series, Mitsubishi SRK-ZS Diamond en LG Artcool Mirror zijn topmodellen met A+++ energielabels. Wij installeren alleen F-gassen gecertificeerd en bieden tot 10 jaar garantie op deze premium systemen.'
    },
    {
      question: 'Wat kost het om te verwarmen met een airco per jaar?',
      answer: 'Voor een gemiddelde woning van 120m² in Limburg met redelijke isolatie kunt u rekenen op circa €500-€800 per jaar aan stroomkosten voor verwarming met een warmtepomp airco (op basis van gemiddelde elektriciteitsprijzen 2024). Ter vergelijking: verwarmen met een HR-combiketel kost €1200-€1800 per jaar aan gas. Met zonnepanelen dalen de kosten voor de airco tot €200-€400 per jaar. De terugverdientijd van een warmtepomp airco is gemiddeld 5-8 jaar, mede dankzij subsidies en lagere onderhoudskosten.'
    },
    {
      question: 'Heb ik een aparte installatie nodig naast mijn CV voor een airco?',
      answer: 'Nee, een airco is een volledig zelfstandig systeem. U heeft alleen een stroomaansluiting nodig (geen gasaansluiting). Veel van onze klanten in Limburg gebruiken de airco als primaire verwarming en houden hun CV als backup voor extreem koude dagen. U kunt ook hybride verwarmen: airco tot circa 5°C buitentemperatuur (meest efficiënt) en CV wanneer het echt koud is. Dit combineert comfort met maximale besparing.'
    }
  ];

  return (
    <>
      <MetaTags
        title="Verwarmen met Airco - 60% Besparing | Warmtepomp Limburg | StayCool"
        description="Verwarmen met airco ✓ Tot 60% lagere kosten ✓ Warmtepomp efficiency ✓ Ideaal met zonnepanelen ✓ SCOP 4.0-5.0 ✓ F-gassen gecertificeerd ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Verwarmen met Airco - Warmtepomp",
          description: "Professionele installatie van energiezuinige warmtepomp airco's voor verwarming met tot 60% besparing. F-gassen gecertificeerd, A-merken, 10 jaar garantie.",
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
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR"
            }
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Verwarmen met Airco - 60% Lagere Energiekosten met Warmtepomp Technologie
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-4xl">
            Bespaar tot 60% op uw verwarmingskosten met een moderne warmtepomp airco.
            Haal 4-5 kW warmte uit 1 kW stroom. Ideaal in combinatie met zonnepanelen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Offerte Aanvragen
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken uw Besparing
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sky-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>SCOP 4.0-5.0 efficiency</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Tot 10 jaar garantie</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Heel Limburg</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Waarom Verwarmen met een Airco de Toekomst Is
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Verwarmen met een airco, oftewel een warmtepomp, is een van de meest energiezuinige manieren om uw woning te verwarmen.
                Waar traditionele verwarmingssystemen warmte genereren door fossiele brandstoffen te verbranden, haalt een warmtepomp airco
                energie uit de buitenlucht en pompt deze naar binnen. Deze technologie is niet alleen veel efficiënter, maar ook duurzamer
                en voordeliger op de lange termijn.
              </p>

              <p>
                In Limburg zien we steeds meer huiseigenaren en bedrijven overstappen op verwarmen met een airco. De reden is simpel:
                met stijgende gasprijzen en toenemende focus op duurzaamheid is een warmtepomp airco een logische keuze. Bovendien kunt u
                in de zomer met hetzelfde systeem koelen, wat dubbel rendement oplevert. Bij StayCool Airco installeren we al meer dan
                15 jaar professionele warmtepomp systemen in heel Limburg.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Hoe Werkt Verwarmen met een Airco?
              </h2>

              <p>
                Een warmtepomp airco werkt volgens het omgekeerde principe van een koelkast. Waar een koelkast warmte uit de binnenruimte
                haalt en naar buiten afvoert, haalt een warmtepomp warmte uit de buitenlucht en brengt deze naar binnen. Dit lijkt
                tegenstrijdig - hoe kun je warmte uit koude lucht halen? Maar zelfs bij temperaturen tot -20°C bevat lucht nog steeds
                energie die een warmtepomp kan extraheren.
              </p>

              <p>
                Het proces werkt als volgt: een ventilator in de buitenunit zuigt buitenlucht aan. Deze lucht stroomt over een verdamper
                die koudemiddel bevat. Het koudemiddel verdampt al bij zeer lage temperaturen en neemt daarbij warmte op uit de buitenlucht.
                Een compressor comprimeert vervolgens het koudemiddel, waardoor de temperatuur nog verder stijgt. Deze warmte wordt
                afgegeven aan de binnenlucht via de binnenunit, waarna het koudemiddel weer afkoelt en de cyclus opnieuw begint.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Inverter Technologie voor Maximale Efficiëntie
              </h3>

              <p>
                Moderne warmtepomp airco's gebruiken inverter technologie. Dit betekent dat de compressor continu draait op variabel
                toerental, afhankelijk van de warmtevraag. Traditionele on/off systemen schakelen volledig aan of uit, wat veel energie
                kost en comfortschommelingen veroorzaakt. Een inverter systeem past het vermogen geleidelijk aan, wat resulteert in:
              </p>

              <ul className="list-disc pl-6 space-y-2 my-6">
                <li><strong>30-50% lager energieverbruik</strong> vergeleken met on/off systemen</li>
                <li><strong>Constante kamertemperatuur</strong> zonder schommelingen</li>
                <li><strong>Snellere opwarming</strong> bij het opstarten</li>
                <li><strong>Langere levensduur</strong> door minder start-stop cycli</li>
                <li><strong>Stiller werken</strong> doordat de compressor niet constant op vol vermogen draait</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                SCOP: De Efficiëntie-indicator voor Warmtepompen
              </h2>

              <p>
                De efficiëntie van een warmtepomp voor verwarmen wordt uitgedrukt in de SCOP (Seasonal Coefficient of Performance).
                Dit getal geeft aan hoeveel warmte u gemiddeld over een verwarmingsseizoen krijgt uit 1 kW elektriciteit. Een SCOP van
                4,0 betekent dat u 4 kW warmte krijgt uit 1 kW stroom - oftewel een rendement van 400%.
              </p>

              <p>
                De beste warmtepomp airco's hebben een SCOP van 4,5 tot 5,2. Ter vergelijking: een HR-combiketel heeft een rendement
                van maximaal 95% (0,95). Dit verklaart waarom verwarmen met een airco zoveel voordeliger is, vooral als u gebruik maakt
                van eigen opgewekte zonne-energie of een gunstig elektriciteitstarief.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Rekenvoorbeeld SCOP-besparing
                </h4>
                <p className="text-gray-700">
                  <strong>Situatie:</strong> Verwarming van 120m² woning in Limburg, 1500 uur verwarming per jaar, 8 kW warmtevraag.
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li><strong>Gas (HR-ketel 95%):</strong> 12.600 kWh gas × €1,45 = €1.827 per jaar</li>
                  <li><strong>Airco warmtepomp (SCOP 4,5):</strong> 2.667 kWh stroom × €0,30 = €800 per jaar</li>
                  <li><strong>Besparing:</strong> €1.027 per jaar (56% kostenreductie)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Verwarmen met Airco en Zonnepanelen: De Perfecte Combinatie
              </h2>

              <p>
                De combinatie van zonnepanelen en een warmtepomp airco is goud waard. Overdag produceren uw zonnepanelen stroom die u
                direct kunt gebruiken om uw woning te verwarmen. Dit voorkomt terugleverkosten en maximaliseert uw rendement. In de
                winter, wanneer de zon lager staat, produceert u minder stroom maar heeft u juist meer warmtevraag. Een slimme thermostaat
                kan uw airco automatisch inschakelen tijdens piekproductie van uw zonnepanelen.
              </p>

              <p>
                Voor optimale besparing kunt u een thuisbatterij overwegen zoals de AlphaESS Smile-serie. Deze slaat overtollige zonne-energie
                op voor gebruik 's avonds en 's nachts wanneer uw zonnepanelen geen stroom leveren. Hierdoor kunt u uw zelfvoorzieningsgraad
                verhogen tot 70-80% en voorkomt u terugleverkosten vrijwel volledig.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Terugleverkosten Voorkomen met Slim Verwarmen
              </h3>

              <p>
                Sinds 2023 zijn de terugleverkosten voor zonne-energie fors gestegen. Per 2025 betaalt u gemiddeld €0,12 per kWh
                die u teruggeeft aan het net, terwijl u zelf €0,30-0,40 betaalt voor ingekochte stroom. Door uw eigen opgewekte
                stroom direct te gebruiken voor verwarming met uw airco, voorkomt u deze ongelijke verrekening en maximaliseert u
                uw besparing.
              </p>

              <p>
                Een gemiddeld huishouden met 10 zonnepanelen (3.500 kWp) en een warmtepomp airco kan tot €600-800 per jaar besparen
                door slimme laadsturing en het gebruik van overtollige zonne-energie voor verwarming in plaats van terugleverkosten
                te betalen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om 60% te Besparen op Verwarming?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontdek wat een warmtepomp airco voor u kan betekenen. Gratis advies en offerte op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Gratis Advies Aan
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              Bel: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Welke Airco is het Beste voor Verwarmen?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Niet elke airco is even geschikt voor verwarmen. Voor optimale prestaties bij lage temperaturen heeft u een hoogwaardig
                warmtepomp model nodig met de juiste specificaties. Bij StayCool Airco adviseren we specifieke modellen die bewezen hebben
                uitstekend te presteren in het Nederlandse klimaat.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Top Merken voor Verwarmen
              </h3>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Daikin - Marktleider in Warmtepompen</h4>
                <p className="mb-4">
                  Daikin is wereldmarktleider in warmtepomp technologie. Hun modellen presteren uitstekend tot -25°C buitentemperatuur
                  en behoren tot de meest efficiënte op de markt.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Daikin Emura FTXJ-MS:</strong> Design topmodel, SCOP 5,15, A+++, €1.600-2.200</li>
                  <li><strong>Daikin Perfera FTXM-R:</strong> Premium kwaliteit, SCOP 5,10, 3D luchtstroom, €1.400-1.900</li>
                  <li><strong>Daikin Stylish FTXA-AT:</strong> Strak design, SCOP 4,70, oog-sensor, €1.300-1.700</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Mitsubishi Heavy Industries - Japanse Kwaliteit</h4>
                <p className="mb-4">
                  Mitsubishi Heavy Industries staat bekend om betrouwbaarheid en uitstekende prestaties bij koude temperaturen.
                  Hun warmtepompen behoren tot de stilste op de markt.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Mitsubishi SRK-ZS Diamond:</strong> SCOP 5,20, tot -25°C, ultra stil 19 dB, €1.700-2.300</li>
                  <li><strong>Mitsubishi SRK-ZR Premium:</strong> SCOP 4,80, Plasma Quad filter, €1.500-2.000</li>
                  <li><strong>Mitsubishi SRK-ZMP Design:</strong> SCOP 4,60, premium afwerking, €1.400-1.800</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">LG - Innovatie en Design</h4>
                <p className="mb-4">
                  LG combineert geavanceerde technologie met strak design. Hun Artcool serie is zeer populair voor woningen waar
                  esthetiek belangrijk is.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>LG Artcool Mirror AC12BQ:</strong> SCOP 4,65, spiegelfront, UV-nano technologie, €1.500-2.000</li>
                  <li><strong>LG Deluxe DC12RQ:</strong> SCOP 4,50, premium afwerking, auto-reiniging, €1.300-1.700</li>
                  <li><strong>LG Standard Plus PC12SQ:</strong> SCOP 4,20, beste prijs/kwaliteit, €1.100-1.500</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Belangrijke Specificaties voor Verwarmen
              </h3>

              <p>
                Bij het kiezen van een airco voor verwarmen zijn de volgende specificaties cruciaal:
              </p>

              <ul className="list-disc pl-6 space-y-3 my-6">
                <li>
                  <strong>SCOP (Seasonal Coefficient of Performance):</strong> Minimaal 4,0, bij voorkeur 4,5 of hoger.
                  Dit is de gemiddelde efficiëntie over een heel verwarmingsseizoen.
                </li>
                <li>
                  <strong>Verwarmingscapaciteit bij -7°C:</strong> Veel fabrikanten geven capaciteit bij 7°C aan, maar prestaties
                  bij -7°C zijn relevanter voor Nederlandse winters. Kies een model dat bij -7°C nog minstens 80% van de nominale
                  capaciteit levert.
                </li>
                <li>
                  <strong>Minimale bedrijfstemperatuur:</strong> Voor Nederlands klimaat voldoet -15°C, maar -20°C of -25°C biedt
                  extra zekerheid voor strenge winters.
                </li>
                <li>
                  <strong>Inverter technologie:</strong> Essentieel voor efficiënt verwarmen. DC-inverter compressoren passen
                  het toerental nauwkeurig aan voor optimaal rendement.
                </li>
                <li>
                  <strong>Energielabel:</strong> Kies minimaal A++ voor verwarmen, bij voorkeur A+++. Dit garandeert hoge efficiëntie
                  en lage operationele kosten.
                </li>
                <li>
                  <strong>Geluidsniveau:</strong> Voor slaapkamers: maximaal 22 dB binnen, 45 dB buiten. Voor woonkamers: maximaal
                  28 dB binnen, 50 dB buiten.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Kosten en Baten van Verwarmen met Airco
              </h2>

              <p>
                De investering in een warmtepomp airco ligt tussen €1.500 en €3.500 per binnenunit, inclusief professionele installatie.
                Dit lijkt een forse investering, maar de terugverdientijd is vaak korter dan u denkt dankzij substantiële besparingen
                op uw energierekening.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Investeringskosten
              </h3>

              <ul className="list-disc pl-6 space-y-2 my-6">
                <li><strong>Single split 2,5 kW (kleine ruimte):</strong> €1.500 - €2.000 all-in</li>
                <li><strong>Single split 3,5 kW (standaard woonkamer):</strong> €1.800 - €2.500 all-in</li>
                <li><strong>Multi-split 2x 2,5 kW (2 kamers):</strong> €2.800 - €3.800 all-in</li>
                <li><strong>Multi-split 3x 2,5 kW (3 kamers):</strong> €4.000 - €5.500 all-in</li>
                <li><strong>Multi-split 4x 2,5-3,5 kW (hele woning):</strong> €5.500 - €7.500 all-in</li>
              </ul>

              <p className="text-sm text-gray-600 italic mt-4">
                Prijzen zijn inclusief professionele F-gassen gecertificeerde installatie, materiaal, afvoer condenswater,
                elektrische aansluiting en garantie.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Jaarlijkse Besparingen
              </h3>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Rekenvoorbeeld: Appartement 80m² (matige isolatie)</h4>
                <p className="mb-3"><strong>Huidige situatie (HR-combiketel):</strong></p>
                <ul className="space-y-1 mb-4">
                  <li>Gasverbruik verwarming: 1.200 m³ per jaar</li>
                  <li>Kosten: 1.200 × €1,45 = €1.740 per jaar</li>
                </ul>
                <p className="mb-3"><strong>Met warmtepomp airco (SCOP 4,5):</strong></p>
                <ul className="space-y-1 mb-4">
                  <li>Stroomverbruik: 2.400 kWh per jaar</li>
                  <li>Kosten zonder zonnepanelen: 2.400 × €0,30 = €720 per jaar</li>
                  <li>Kosten met zonnepanelen (50% eigen gebruik): €360 per jaar</li>
                </ul>
                <p className="font-bold text-green-700 text-lg">
                  Besparing: €1.020 - €1.380 per jaar (59-79% kostenreductie)
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Rekenvoorbeeld: Eengezinswoning 140m² (goede isolatie)</h4>
                <p className="mb-3"><strong>Huidige situatie (HR-combiketel):</strong></p>
                <ul className="space-y-1 mb-4">
                  <li>Gasverbruik verwarming: 1.400 m³ per jaar</li>
                  <li>Kosten: 1.400 × €1,45 = €2.030 per jaar</li>
                </ul>
                <p className="mb-3"><strong>Met multi-split warmtepomp (SCOP 5,0):</strong></p>
                <ul className="space-y-1 mb-4">
                  <li>Stroomverbruik: 2.520 kWh per jaar</li>
                  <li>Kosten zonder zonnepanelen: 2.520 × €0,30 = €756 per jaar</li>
                  <li>Kosten met zonnepanelen + thuisbatterij (80% eigen gebruik): €151 per jaar</li>
                </ul>
                <p className="font-bold text-blue-700 text-lg">
                  Besparing: €1.274 - €1.879 per jaar (63-93% kostenreductie)
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Terugverdientijd
              </h3>

              <p>
                De terugverdientijd van een warmtepomp airco hangt af van uw huidige verwarmingsmethode, isolatiegraad, gebruik van
                zonnepanelen en energieprijzen. Gemiddeld rekenen we in Limburg op de volgende terugverdientijden:
              </p>

              <ul className="list-disc pl-6 space-y-2 my-6">
                <li><strong>Vervanging elektrische verwarming:</strong> 2-4 jaar</li>
                <li><strong>Vervanging oudere gasketel + zonnepanelen:</strong> 3-5 jaar</li>
                <li><strong>Vervanging HR-ketel zonder zonnepanelen:</strong> 5-8 jaar</li>
                <li><strong>Vervanging HR-ketel + zonnepanelen + thuisbatterij:</strong> 4-6 jaar</li>
              </ul>

              <p>
                Na de terugverdientijd is elke euro besparing directe winst. Met een gemiddelde levensduur van 15-20 jaar voor
                premium warmtepompen bespaart u dus 10-15 jaar lang €1.000-2.000 per jaar.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Installatie en Onderhoud
              </h2>

              <p>
                Een professionele installatie is cruciaal voor optimale prestaties en levensduur van uw warmtepomp airco. Bij
                StayCool Airco zijn al onze monteurs F-gassen gecertificeerd en gespecialiseerd in warmtepomp installaties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Wat Houdt Professionele Installatie In?
              </h3>

              <ul className="list-disc pl-6 space-y-3 my-6">
                <li>
                  <strong>Capaciteitsberekening:</strong> We berekenen exact welke capaciteit u nodig heeft op basis van isolatie,
                  volume, gewenste temperatuur en buitentemperaturen in Limburg.
                </li>
                <li>
                  <strong>Optimale plaatsing:</strong> Buitenunit op een locatie met goede luchtstroom en minimale geluidsoverlast.
                  Binnenunit(s) strategisch geplaatst voor optimale warmteverdeling.
                </li>
                <li>
                  <strong>Vacuümpomp procedure:</strong> Complete evacuatie van lucht en vocht uit het systeem voorafgaand aan vulling
                  met koudemiddel. Dit garandeert optimale efficiëntie en voorkomt compressorschade.
                </li>
                <li>
                  <strong>Lekdichtheidstest:</strong> Controle op lekkages met perslucht en elektronische lekdetector volgens F-gassen
                  certificering eisen.
                </li>
                <li>
                  <strong>Condensafvoer:</strong> Correcte afvoer van condenswater met afschot, frostbeveiliging in winter en
                  antisyfonfunctie.
                </li>
                <li>
                  <strong>Elektrische installatie:</strong> Aparte groep met aardlekschakelaar, correcte kabeldikte en waterdichte
                  doorvoeren.
                </li>
                <li>
                  <strong>Inbedrijfstelling en instructie:</strong> Uitgebreide test van alle functies, programmering thermostaat
                  en persoonlijke instructie.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Onderhoud Warmtepomp Airco
              </h3>

              <p>
                Een warmtepomp airco vraagt minimaal onderhoud, maar regelmatige controle verlengt de levensduur en waarborgt
                optimale efficiëntie. Wij adviseren jaarlijks onderhoud, vooral als u de airco intensief gebruikt voor verwarming.
              </p>

              <p><strong>Jaarlijks onderhoud omvat:</strong></p>

              <ul className="list-disc pl-6 space-y-2 my-6">
                <li>Reiniging filters binnenunit (elke 2-3 maanden zelf, grondiger tijdens onderhoudsbeurt)</li>
                <li>Reiniging warmtewisselaar binnenunit</li>
                <li>Controle en reiniging buitenunit (lamellen, ventilator, condensafvoer)</li>
                <li>Controle koudemiddel niveau en eventueel bijvullen</li>
                <li>Lekdichtheidstest volgens F-gassen wetgeving (verplicht bij  meer dan 5 kg koudemiddel)</li>
                <li>Controle elektrische aansluitingen</li>
                <li>Test verwarmings- en koelingsfunctie</li>
                <li>Software-updates indien beschikbaar</li>
              </ul>

              <p>
                Bij StayCool Airco bieden we onderhoudscontracten vanaf €95 per jaar voor single-split systemen en €145 voor
                multi-split systemen. Dit voorkomt onverwachte kosten en garandeert dat uw warmtepomp optimaal blijft presteren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Verwarmen met Airco
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professioneel Advies over Verwarmen met Airco
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Onze specialisten berekenen gratis welke warmtepomp airco perfect past bij uw woning en besparing.
            F-gassen gecertificeerd, 10 jaar garantie, heel Limburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek Plannen
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken uw Ideale Capaciteit
            </Link>
          </div>
          <p className="text-blue-100">
            <strong>Direct contact?</strong> Bel ons op{' '}
            <a href="tel:0462021430" className="underline hover:text-white font-semibold">
              046 202 1430
            </a>{' '}
            of WhatsApp{' '}
            <a href="https://wa.me/31636481054" className="underline hover:text-white font-semibold">
              06 36481054
            </a>
          </p>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Gerelateerde Informatie</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/seo/pillar-4-energie-besparen/terugleverkosten-voorkomen" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Terugleverkosten voorkomen met slim verwarmen
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/scop-waarde-uitgelegd" className="text-blue-600 hover:text-blue-700 hover:underline">
              → SCOP waarde uitgelegd - seizoensefficiëntie
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/energielabel-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → A+++ energielabel airco - maximale efficiëntie
            </Link>
            <Link to="/merken" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bekijk onze A-merk warmtepompen
            </Link>
            <Link to="/thuisbatterijen" className="text-blue-600 hover:text-blue-700 hover:underline">
              → AlphaESS thuisbatterijen voor maximale besparing
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Neem contact op voor persoonlijk advies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerwarmenMetAirco;
