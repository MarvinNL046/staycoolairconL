import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Euro, TrendingUp, Battery, Phone, Calculator, Sun, Home } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const TerugleverKostenVoorkomen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energie Besparen', path: '/seo/pillar-4-energie-besparen' },
    { label: 'Terugleverkosten Voorkomen' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-green-500" />,
      title: 'Tot €800 per Jaar Besparen',
      description: 'Voorkom terugleverkosten door zonne-energie direct te gebruiken voor verwarming met uw warmtepomp airco.'
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: 'Thuisbatterij Integratie',
      description: 'Sla overtollige energie op voor gebruik \'s avonds en \'s nachts. Tot 80% zelfvoorzienend.'
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      title: 'Slimme Laadsturing',
      description: 'Automatische aansturing van airco tijdens piekproductie zonnepanelen voor maximaal rendement.'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Snelle Terugverdientijd',
      description: 'Investering verdient zich terug in 3-5 jaar door vermeden terugleverkosten en lagere energiekosten.'
    }
  ];

  const faqs = [
    {
      question: 'Wat zijn terugleverkosten en waarom moet ik die betalen?',
      answer: 'Terugleverkosten zijn de kosten die u betaalt om overtollige elektriciteit van uw zonnepanelen terug te leveren aan het elektriciteitsnet. Deze kosten dekken de netbeheerkosten en administratie. Sinds 2023 zijn terugleverkosten fors gestegen: gemiddeld €0,08-0,15 per kWh. Dit betekent dat u effectief minder ontvangt voor teruggeleverde stroom dan wat u betaalt voor ingekochte stroom (€0,30-0,40/kWh). Door uw eigen opgewekte stroom direct te gebruiken voorkomt u deze ongelijke verrekening.'
    },
    {
      question: 'Hoe kan ik terugleverkosten vermijden met mijn airco?',
      answer: 'Door uw airco slim te gebruiken als warmtepomp tijdens momenten van hoge zonne-energieproductie. Overdag, wanneer uw zonnepanelen het meeste produceren, schakelt uw airco automatisch in om uw woning voor te verwarmen. Deze warmte blijft enkele uren hangen in uw woning (thermische massa). U gebruikt dan uw eigen opgewekte stroom direct, zonder terugleverkosten, en uw woning blijft comfortabel warm tot in de avond. Met een slimme thermostaat automatiseert u dit proces volledig.'
    },
    {
      question: 'Hoeveel kan ik besparen door terugleverkosten te voorkomen?',
      answer: 'Een gemiddeld huishouden met 10 zonnepanelen (3.500 Wp) levert zonder maatregelen circa 1.500-2.000 kWh per jaar terug aan het net. Bij €0,12 terugleverkosten betaalt u €180-240 per jaar. Door deze energie direct te gebruiken voor verwarming met uw airco bespaart u niet alleen deze kosten, maar ook de stroom die u anders zou inkopen (€0,30/kWh). Het totale bespaarpotentieel ligt tussen €600-800 per jaar voor een gemiddeld huishouden in Limburg.'
    },
    {
      question: 'Is een thuisbatterij noodzakelijk om terugleverkosten te voorkomen?',
      answer: 'Nee, een thuisbatterij is niet noodzakelijk maar wel zeer effectief. Zonder batterij gebruikt u zonne-energie alleen overdag wanneer de zon schijnt. Met een warmtepomp airco kunt u al 40-60% van uw teruglevering vermijden door slimme laadsturing. Met een thuisbatterij zoals AlphaESS Smile-serie kunt u overtollige energie opslaan voor gebruik \'s avonds en \'s nachts, waardoor u 70-85% van terugleverkosten voorkomt. De keuze hangt af van uw budget en gewenste zelfvoorzieningsgraad.'
    },
    {
      question: 'Welke airco is het beste om terugleverkosten te voorkomen?',
      answer: 'Een moderne inverter warmtepomp airco met Wi-Fi/app-bediening is ideaal. Merken zoals Daikin (met Onecta app), Mitsubishi (MELCloud) en LG (ThinQ) bieden apps waarmee u de airco op afstand kunt bedienen en programmeren. Kies een model met SCOP van minimaal 4,5 zodat u maximaal profiteert van elk kWh eigen opgewekte stroom. Voor multi-room systemen kiest u een multi-split met voldoende capaciteit om meerdere ruimtes tegelijk te verwarmen tijdens zonne-piekproductie.'
    },
    {
      question: 'Hoe werkt slimme laadsturing precies?',
      answer: 'Slimme laadsturing gebruikt real-time data van uw zonnepanelen om apparaten zoals uw airco automatisch in te schakelen tijdens piekproductie. Een slimme thermostaat (zoals Tado, Nest of Homey) is gekoppeld aan uw zonnepanelen-monitoring. Wanneer uw panelen meer produceren dan u verbruikt, schakelt het systeem automatisch uw airco in verwarmingsmodus om overtollige stroom direct te gebruiken. Zodra de zon minder schijnt of uw verbruik toeneemt, past het systeem zich aan. Dit gebeurt volledig automatisch zonder dat u er iets voor hoeft te doen.'
    },
    {
      question: 'Kan ik mijn bestaande airco gebruiken of heb ik een nieuwe nodig?',
      answer: 'Uw bestaande airco is mogelijk geschikt, mits het een warmtepomp model is met verwarmingsfunctie en bij voorkeur Wi-Fi-bediening. Oudere airco\'s zonder inverter technologie zijn minder efficiënt en niet altijd geschikt voor integratie met slimme laadsturing. Als uw airco ouder is dan 8-10 jaar of geen Wi-Fi heeft, raden we een upgrade aan naar een moderne inverter airco. De extra investering verdient zich snel terug door hogere efficiëntie en volledige integratie met uw zonne-energiesysteem.'
    },
    {
      question: 'Welke subsidies zijn beschikbaar voor warmtepompen en thuisbatterijen?',
      answer: 'Voor 2024-2025 zijn er diverse subsidiemogelijkheden: ISDE subsidie (Investeringssubsidie Duurzame Energie) tot €2.550 voor warmtepompen, BTW-verlaging van 21% naar 0% voor zonnepanelen en thuisbatterijen sinds 2023, en gemeentelijke subsidieregelingen in Limburg (wisselend per gemeente). Daarnaast zijn energiebesparende investeringen fiscaal aftrekbaar via de Energie-investeringsaftrek (EIA) voor ondernemers. Check altijd de actuele regelingen, want subsidiepotjes wisselen per jaar en raken snel uitgeput. Wij helpen u graag met het aanvragen van subsidies.'
    }
  ];

  return (
    <>
      <MetaTags
        title="Terugleverkosten Voorkomen met Airco | Bespaar tot €800 | Limburg"
        description="Terugleverkosten voorkomen ✓ Slim verwarmen met zonnepanelen ✓ Tot €800 besparing per jaar ✓ Warmtepomp airco + thuisbatterij ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Terugleverkosten Voorkomen met Warmtepomp Airco",
          description: "Voorkom terugleverkosten door zonne-energie direct te gebruiken voor verwarming. Professionele integratie van airco, zonnepanelen en thuisbatterij voor maximale besparing.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Terugleverkosten Voorkomen - Bespaar tot €800 per Jaar met Slim Verwarmen
          </h1>

          <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-4xl">
            Stop met betalen om uw eigen stroom terug te leveren. Gebruik zonne-energie direct voor verwarming
            met een warmtepomp airco en voorkom tot €800 per jaar aan terugleverkosten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Besparingsadvies
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken uw Besparing
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-green-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>€600-800 besparing/jaar</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Slimme laadsturing</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>80% zelfvoorzienend</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Professionele integratie</span>
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
              Het Probleem: Stijgende Terugleverkosten
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Steeds meer huishoudens in Limburg hebben zonnepanelen geïnstalleerd om hun energierekening te verlagen en duurzamer
                te leven. Maar er is een groeiend probleem: terugleverkosten. Wanneer uw zonnepanelen meer elektriciteit produceren
                dan u op dat moment gebruikt, levert u de overtollige stroom terug aan het elektriciteitsnet. Hiervoor betaalt u
                sinds 2023 steeds hogere kosten.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3 text-xl flex items-center">
                  <Euro className="h-6 w-6 mr-2 text-red-500" />
                  De Ongelijke Verrekening
                </h4>
                <ul className="space-y-2">
                  <li><strong>Ingekochte stroom:</strong> €0,30 - €0,40 per kWh (wat u betaalt)</li>
                  <li><strong>Teruggeleverde stroom:</strong> €0,06 - €0,15 per kWh (wat u ontvangt)</li>
                  <li><strong>Terugleverkosten:</strong> €0,08 - €0,15 per kWh (wat u betaalt voor terugleveren)</li>
                  <li><strong>Netto ontvangst:</strong> Vaak negatief of vrijwel nihil</li>
                </ul>
                <p className="mt-4 font-semibold text-gray-900">
                  Voor elk kWh dat u teruggeeft aan het net ontvangt u dus minder dan wat u betaalt om het terug te kopen!
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Waarom Stijgen Terugleverkosten?
              </h3>

              <p>
                De stijging van terugleverkosten heeft meerdere oorzaken. Ten eerste is er een enorme groei van zonnepanelen in
                Nederland - medio 2024 hebben meer dan 2 miljoen huishoudens zonnepanelen. Dit betekent dat tijdens zonnige dagen
                massaal stroom wordt teruggeleverd aan het net, wat de netbeheerders voor grote uitdagingen stelt.
              </p>

              <p>
                Ten tweede moeten netbeheerders investeren in netuitbreiding en -verzwaring om al deze teruggeleverde stroom te kunnen
                verwerken. Deze kosten worden doorberekend via terugleverkosten. En ten derde wordt de salderingsregeling afgebouwd:
                waar u eerder 1-op-1 kon salderen (1 kWh teruggeleverd = 1 kWh gratis inkopen), is dit percentage gedaald en zal
                het de komende jaren verder afnemen.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                De Oplossing: Slim Verwarmen met Zonne-energie
              </h2>

              <p>
                De slimme oplossing is om overtollige zonne-energie direct te gebruiken in plaats van terug te leveren. Een van de
                meest effectieve manieren is verwarmen met een warmtepomp airco tijdens momenten van hoge zonnepanelen-productie.
                Hiermee slaat u energie als het ware op in de thermische massa van uw woning.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Hoe Werkt Slim Verwarmen?
              </h3>

              <div className="bg-blue-50 rounded-lg p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <Sun className="h-6 w-6 mr-2 text-yellow-500" />
                  Het Principe van Thermische Opslag
                </h4>
                <ol className="space-y-3 list-decimal pl-6">
                  <li>
                    <strong>Overdag (10:00-16:00):</strong> Uw zonnepanelen produceren maximaal. Uw warmtepomp airco schakelt
                    automatisch in en verwarmt uw woning tot 21-22°C.
                  </li>
                  <li>
                    <strong>Middagperiode (12:00-15:00):</strong> Tijdens piekproductie gebruikt uw airco uw eigen opgewekte stroom
                    voor verwarming. Deze warmte wordt opgeslagen in muren, vloeren en meubilair (thermische massa).
                  </li>
                  <li>
                    <strong>Avond (16:00-22:00):</strong> De zon staat lager, maar uw woning is nog warm door de thermische massa.
                    De temperatuur daalt geleidelijk van 22°C naar 19-20°C - nog steeds comfortabel.
                  </li>
                  <li>
                    <strong>Nacht (22:00-07:00):</strong> De airco schakelt indien nodig kort bij om de temperatuur op 18-19°C te
                    houden. Dit kost minimale stroom omdat de woning al is voorverwarmd.
                  </li>
                </ol>
                <p className="mt-4 font-semibold text-blue-900">
                  Resultaat: U gebruikt uw eigen opgewekte stroom direct, voorkomt terugleverkosten, en verwarmt efficiënt met
                  een SCOP van 4-5 (400-500% rendement).
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Slimme Laadsturing: Automatisch Optimaliseren
              </h3>

              <p>
                Handmatig uw airco aan en uit zetten is niet praktisch. Daarom gebruiken we slimme laadsturing - systemen die
                automatisch uw apparaten aansturen op basis van real-time zonnepanelen productie. Er zijn verschillende oplossingen
                beschikbaar, van eenvoudig tot geavanceerd.
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-green-500 bg-green-50 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Niveau 1: Handmatige Programmering (Gratis)</h4>
                  <p className="mb-3">
                    De eenvoudigste methode is het programmeren van uw airco via de meegeleverde afstandsbediening of app.
                    U stelt in dat de airco automatisch inschakelt van 11:00-15:00 op werkdagen (piekproductie zonnepanelen).
                  </p>
                  <p className="font-semibold text-green-700">
                    ✓ Kosten: €0 (gratis met bestaande airco)<br />
                    ✓ Besparing: 30-40% van terugleverkosten voorkomen
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Niveau 2: Slimme Thermostaat (€150-300)</h4>
                  <p className="mb-3">
                    Een slimme thermostaat zoals Tado, Nest of Honeywell Lyric leert uw verwarmingspatroon en kan gekoppeld
                    worden aan weersvoorspellingen. Deze thermostaten ondersteunen veel moderne airco merken.
                  </p>
                  <p className="font-semibold text-blue-700">
                    ✓ Kosten: €150-300 eenmalig<br />
                    ✓ Besparing: 40-60% van terugleverkosten voorkomen<br />
                    ✓ Extra: Leerfunctie en remote bediening
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Niveau 3: Home Automation Hub (€200-500)</h4>
                  <p className="mb-3">
                    Een home automation systeem zoals Homey Pro, Home Assistant of Domoticz integreert uw zonnepanelen-monitoring
                    (bijv. SolarEdge, Enphase) met uw airco. Het systeem schakelt automatisch uw airco in zodra uw zonnepanelen
                    meer produceren dan u verbruikt.
                  </p>
                  <p className="font-semibold text-purple-700">
                    ✓ Kosten: €200-500 eenmalig + eventuele installatie<br />
                    ✓ Besparing: 60-75% van terugleverkosten voorkomen<br />
                    ✓ Extra: Volledige integratie meerdere apparaten
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Niveau 4: Thuisbatterij + Energiemanagement (€5.000-8.000)</h4>
                  <p className="mb-3">
                    De meest geavanceerde oplossing is een thuisbatterij zoals AlphaESS Smile-serie met geïntegreerd energie-
                    managementsysteem. Dit slaat overtollige zonne-energie op en beheert automatisch wanneer u stroom gebruikt,
                    opslaat of (in uiterste geval) teruggeeft aan het net.
                  </p>
                  <p className="font-semibold text-yellow-700">
                    ✓ Kosten: €5.000-8.000 voor 10-13 kWh batterij<br />
                    ✓ Besparing: 80-95% van terugleverkosten voorkomen<br />
                    ✓ Extra: Noodstroomfunctie, volledige onafhankelijkheid
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Rekenvoorbeeld: Hoeveel Bespaart u Echt?
              </h2>

              <p>
                Laten we een concreet rekenvoorbeeld bekijken van een gemiddeld huishouden in Limburg met zonnepanelen.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 my-8 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Situatie: Gezin in Roermond</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Installatie:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 10 zonnepanelen (3.500 Wp)</li>
                      <li>• Jaarproductie: 3.200 kWh</li>
                      <li>• Eigen gebruik zonder maatregelen: 40% (1.280 kWh)</li>
                      <li>• Teruglevering: 60% (1.920 kWh)</li>
                      <li>• Warmtepomp airco: Daikin Perfera (SCOP 5,0)</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Kosten zonder slim verwarmen:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Inkoop elektriciteit verwarming: 2.400 kWh × €0,35 = €840</li>
                      <li>• Teruglevering: 1.920 kWh × €0,08 ontvangen = €154</li>
                      <li>• Terugleverkosten: 1.920 kWh × €0,12 = €230</li>
                      <li><strong>• Netto kosten verwarming: €840 + €230 - €154 = €916</strong></li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 mt-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Met slim verwarmen (slimme laadsturing):</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Eigen gebruik verhoogd naar: 70% (2.240 kWh)</li>
                      <li>• Teruglevering verminderd naar: 30% (960 kWh)</li>
                      <li>• Inkoop elektriciteit verwarming: 800 kWh × €0,35 = €280</li>
                      <li>• Teruglevering: 960 kWh × €0,08 = €77</li>
                      <li>• Terugleverkosten: 960 kWh × €0,12 = €115</li>
                      <li><strong>• Netto kosten verwarming: €280 + €115 - €77 = €318</strong></li>
                    </ul>
                  </div>

                  <div className="bg-green-600 text-white rounded-lg p-4 mt-4">
                    <h5 className="font-bold mb-2 text-xl">Besparing per jaar: €598</h5>
                    <p className="text-green-100">65% kostenreductie door slim gebruik van eigen zonne-energie</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Nog Grotere Besparing met Thuisbatterij
              </h3>

              <p>
                Als u een thuisbatterij toevoegt aan het systeem, kunt u nog meer besparen. Een thuisbatterij slaat overtollige
                zonne-energie op voor gebruik 's avonds en 's nachts wanneer uw zonnepanelen geen stroom produceren.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-8 my-8 border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Met AlphaESS Thuisbatterij (10 kWh)</h4>

                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Eigen gebruik verhoogd naar: 85% (2.720 kWh)</li>
                  <li>• Teruglevering verminderd naar: 15% (480 kWh)</li>
                  <li>• Inkoop elektriciteit: 400 kWh × €0,35 = €140</li>
                  <li>• Terugleverkosten: 480 kWh × €0,12 = €58</li>
                  <li>• Teruglevering: 480 kWh × €0,08 = €38</li>
                  <li><strong>• Netto kosten verwarming: €140 + €58 - €38 = €160</strong></li>
                </ul>

                <div className="bg-yellow-600 text-white rounded-lg p-4">
                  <h5 className="font-bold mb-2 text-xl">Totale besparing: €756 per jaar</h5>
                  <p className="text-yellow-100 mb-2">83% kostenreductie vergeleken met situatie zonder maatregelen</p>
                  <p className="text-sm text-yellow-200">
                    Terugverdientijd thuisbatterij (€6.500): circa 8-9 jaar.<br />
                    Met subsidie en oplopende energieprijzen: 6-7 jaar.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Stappenplan: Terugleverkosten Voorkomen
              </h2>

              <p>
                Klaar om terugleverkosten te voorkomen? Volg dit stappenplan voor maximale besparing:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Analyseer uw Huidige Situatie</h4>
                    <p className="text-gray-600">
                      Check uw energierekening: hoeveel kWh levert u gemiddeld per maand terug? Wat zijn uw terugleverkosten?
                      Hoeveel betaalt u voor ingekochte stroom? Deze gegevens vormen de basis voor uw besparingsberekening.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Kies het Juiste Airco Systeem</h4>
                    <p className="text-gray-600">
                      Heeft u al een airco met verwarmingsfunctie? Check of deze geschikt is (inverter, SCOP  meer dan 4,0, Wi-Fi).
                      Zo niet, adviseren wij een nieuwe warmtepomp airco met optimale efficiëntie en slimme bediening.
                      Wij helpen u de juiste capaciteit te berekenen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Implementeer Slimme Laadsturing</h4>
                    <p className="text-gray-600">
                      Kies een niveau van slimme laadsturing dat past bij uw budget en technische kennis. Van eenvoudige
                      programmering (gratis) tot geavanceerde home automation (€200-500). Wij adviseren en installeren op maat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Overweeg een Thuisbatterij</h4>
                    <p className="text-gray-600">
                      Voor maximale besparing (80-95% minder terugleverkosten) is een thuisbatterij de ultieme oplossing.
                      AlphaESS Smile-serie combineert opslag, energiemanagement en noodstroomfunctie. Terugverdientijd 6-9 jaar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Monitor en Optimaliseer</h4>
                    <p className="text-gray-600">
                      Na installatie: monitor uw energiegebruik via de app van uw airco en/of thuisbatterij. Pas indien nodig
                      de tijdsinstellingen aan voor optimale besparing. Wij bieden nazorg en helpdesk ondersteuning.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Waarom Kiezen voor StayCool Airco?
              </h2>

              <p>
                Bij StayCool Airco zijn we gespecialiseerd in de integratie van warmtepomp airco's met zonne-energie systemen
                en thuisbatterijen. Onze installateurs zijn F-gassen gecertificeerd en hebben ruime ervaring met slimme laadsturing
                en energie-optimalisatie.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
                    Totaaloplossingen
                  </h4>
                  <p className="text-gray-700">
                    Wij leveren complete systemen: warmtepomp airco + slimme laadsturing + thuisbatterij (indien gewenst).
                    Alles uit één hand, perfect op elkaar afgestemd.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
                    Gratis Besparingsadvies
                  </h4>
                  <p className="text-gray-700">
                    Wij berekenen gratis wat u kunt besparen op basis van uw energierekening, zonnepanelen en woningsituatie.
                    Inclusief terugverdientijd en ROI-berekening.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-orange-600" />
                    A-merk Kwaliteit
                  </h4>
                  <p className="text-gray-700">
                    Alleen premium merken met hoge SCOP-waarden: Daikin, Mitsubishi, LG. Combineren perfect met AlphaESS
                    thuisbatterijen voor maximaal rendement.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-purple-600" />
                    Subsidieondersteuning
                  </h4>
                  <p className="text-gray-700">
                    Wij helpen met aanvraag van ISDE-subsidie en andere subsidieregelingen. Zo haalt u maximaal rendement
                    uit uw investering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop met Betalen voor Teruglevering
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontdek hoeveel u kunt besparen met slim verwarmen. Gratis besparingsadvies op maat voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Gratis Advies
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Terugleverkosten Voorkomen
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Maximale Besparing?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Bespaar tot €800 per jaar door slim te verwarmen met uw eigen zonne-energie.
            Professionele integratie van airco, zonnepanelen en thuisbatterij.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Besparingsadvies
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-lg shadow-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Thuisbatterijen
            </Link>
          </div>
          <p className="text-green-100">
            <strong>Direct contact?</strong> Bel{' '}
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

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Gerelateerde Informatie</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/seo/pillar-4-energie-besparen/verwarmen-met-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Verwarmen met airco - warmtepomp efficiëntie
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/scop-waarde-uitgelegd" className="text-blue-600 hover:text-blue-700 hover:underline">
              → SCOP waarde uitgelegd
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/stroomverbruik-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Stroomverbruik airco berekenen
            </Link>
            <Link to="/thuisbatterijen" className="text-blue-600 hover:text-blue-700 hover:underline">
              → AlphaESS thuisbatterijen
            </Link>
            <Link to="/merken" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Onze warmtepomp airco merken
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Vraag persoonlijk advies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TerugleverKostenVoorkomen;
