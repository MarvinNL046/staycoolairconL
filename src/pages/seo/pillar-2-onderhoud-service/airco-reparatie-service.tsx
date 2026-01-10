import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Wrench, Clock, Phone, AlertCircle, ThermometerSnowflake, Wind, Settings, Award, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoReparatieService: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Onderhoud & Service', path: '/onderhoud' },
    { label: 'Airco Reparatie Service' }
  ];

  const usps = [
    {
      icon: <Clock className="h-12 w-12 text-sky-500" />,
      title: "Snelle Responstijd",
      description: "Bij spoedgevallen vaak binnen 24-48 uur ter plaatse voor diagnose en reparatie"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Vakkundige Reparatie",
      description: "F-gassen gecertificeerde monteurs met 15+ jaar ervaring in alle airco merken"
    },
    {
      icon: <Settings className="h-12 w-12 text-sky-500" />,
      title: "Originele Onderdelen",
      description: "Gebruik van kwaliteitsonderdelen voor duurzame reparaties met garantie"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Garantie Op Reparatie",
      description: "Uitgebreide garantie op uitgevoerde werkzaamheden en vervangen onderdelen"
    }
  ];

  const veelvoorkomendeStoringen = [
    {
      title: "Airco Koelt Niet of Onvoldoende",
      symptomen: "Warme lucht, zwakke koeling, lange opwarmduur",
      oorzaken: "Koudemiddellek, verstopte filter, defecte compressor, sensor storing",
      oplossing: "Diagnose met drukmeting, lek detectie, filter reiniging of vervanging compressor"
    },
    {
      title: "Waterlekkage Binnenunit",
      symptomen: "Druppels of water uit binnenunit, vochtvlekken op muur",
      oorzaken: "Verstopte condensafvoer, verkeerde installatie, bevroren verdamper",
      oplossing: "Afvoer reinigen, afvoerpomp controleren, installatie aanpassen"
    },
    {
      title: "Vreemde Geluiden",
      symptomen: "Piepen, ratelen, bonken, fluiten tijdens werking",
      oorzaken: "Loszittende onderdelen, ventilator problemen, compressor defect",
      oplossing: "Bevestigingen controleren, ventilator repareren, compressor vervangen"
    },
    {
      title: "Airco Start Niet Op",
      symptomen: "Geen reactie op afstandsbediening, geen LED indicatie",
      oorzaken: "Elektrische storing, zekering defect, printplaat defect, sensor probleem",
      oplossing: "Elektrische aansluitingen controleren, printplaat diagnostiek, sensor vervangen"
    },
    {
      title: "Onprettige Geuren",
      symptomen: "Muffie lucht, chemische geur, brandlucht",
      oorzaken: "Schimmelvorming, vuile filters, elektrisch defect, koudemiddellek",
      oplossing: "Grondige reiniging, filter vervangen, elektrische reparatie, lek herstellen"
    },
    {
      title: "Hoog Energieverbruik",
      symptomen: "Sterk verhoogde energierekening zonder wijziging gebruik",
      oorzaken: "Koudemiddeltekort, vuile condensor, defecte compressor, verkeerde instellingen",
      oplossing: "Systeem optimalisatie, koudemiddel bijvullen, onderdelen vervangen"
    }
  ];

  const reparatieproces = [
    {
      stap: "1. Storingsmelding",
      beschrijving: "U meldt de storing telefonisch, via WhatsApp of via ons contactformulier. We plannen een afspraak op korte termijn."
    },
    {
      stap: "2. Diagnose Ter Plaatse",
      beschrijving: "Onze monteur inspecteert uw systeem grondig met professionele meetapparatuur om de oorzaak te achterhalen."
    },
    {
      stap: "3. Offerte & Advies",
      beschrijving: "U ontvangt een duidelijke uitleg van het probleem en een offerte voor de reparatie inclusief onderdelen en arbeid."
    },
    {
      stap: "4. Reparatie Uitvoering",
      beschrijving: "Na uw akkoord voeren we de reparatie vakkundig uit volgens fabrieksspecificaties en veiligheidsnormen."
    },
    {
      stap: "5. Test & Controle",
      beschrijving: "We testen alle functies uitgebreid en controleren of het systeem weer optimaal presteert."
    },
    {
      stap: "6. Garantie & Nazorg",
      beschrijving: "U ontvangt garantie op de reparatie en kunt ons altijd bellen bij vragen of nazorgbehoefte."
    }
  ];

  const faqItems = [
    {
      question: "Wat kost een airco reparatie gemiddeld?",
      answer: "De kosten voor airco reparatie variëren sterk afhankelijk van het type storing en benodigde onderdelen. Een eenvoudige reparatie zoals filter vervangen of condensafvoer reinigen kost €75-150. Complexere reparaties zoals compressor vervanging of koudemiddel bijvullen lopen uiteen van €200-800. We maken altijd eerst een kosteloze diagnose en offerte voordat we aan de reparatie beginnen, zodat u weet waar u aan toe bent."
    },
    {
      question: "Hoe snel kunt u ter plaatse zijn bij een storing?",
      answer: "Voor spoedgevallen proberen we binnen 24-48 uur een monteur te plannen. Bij minder urgente reparaties is de levertijd meestal 2-5 werkdagen. Klanten met een onderhoudscontract krijgen voorrang in de planning. In piekperiodes (hittegolven in de zomer) kunnen wachttijden oplopen, maar we doen ons uiterste best om iedereen zo snel mogelijk te helpen."
    },
    {
      question: "Wordt er bij reparatie originele onderdelen gebruikt?",
      answer: "Ja, wij werken zoveel mogelijk met originele onderdelen van de fabrikant of gelijkwaardige A-merk onderdelen. Dit garandeert optimale pasvorm, prestaties en levensduur. Voor oudere modellen waar originele onderdelen niet meer leverbaar zijn, gebruiken we hoogwaardige alternatieve onderdelen van erkende leveranciers. We bespreken dit altijd vooraf in de offerte."
    },
    {
      question: "Krijg ik garantie op de reparatie?",
      answer: "Ja, op al onze reparaties geven we standaard garantie. Op arbeid geeft StayCool Airco 6 maanden tot 1 jaar garantie, afhankelijk van het type werkzaamheden. Op nieuwe onderdelen geldt de fabrieksgarantie (meestal 1-2 jaar). Bij grotere reparaties zoals compressor vervanging kan de garantieperiode langer zijn. Alle garantievoorwaarden worden duidelijk vermeld op de factuur."
    },
    {
      question: "Mijn airco is ouder dan 10 jaar, is reparatie nog zinvol?",
      answer: "Dit hangt af van de aard van het defect en de kosten van reparatie versus vervanging. Bij eenvoudige reparaties (minder dan €300) is herstellen vaak zinvol. Bij dure reparaties (>€500) kan vervanging economisch voordeliger zijn, zeker gezien de aanzienlijk hogere energie-efficiëntie van moderne airconditioners. Onze monteur adviseert u eerlijk over de beste oplossing voor uw situatie."
    },
    {
      question: "Kan ik zelf kleine storingen oplossen?",
      answer: "Sommige problemen kunt u zelf oplossen: filter reinigen, batterijen in afstandsbediening vervangen, zekeringen controleren. Maar werkzaamheden aan het koudemiddelsysteem, elektrische aansluitingen of interne componenten zijn wettelijk voorbehouden aan F-gassen gecertificeerde monteurs. Onvakkundige reparaties kunnen leiden tot gevaarlijke situaties, garantieverlies en hogere reparatiekosten."
    },
    {
      question: "Wat als de reparatie duurder uitvalt dan verwacht?",
      answer: "We maken altijd eerst een diagnose en offerte voordat we beginnen met repareren. Als tijdens de reparatie blijkt dat er aanvullende werkzaamheden nodig zijn, nemen we altijd eerst contact met u op voor akkoord. We beginnen nooit zonder uw toestemming aan extra werkzaamheden. Transparantie en duidelijke communicatie staan bij ons voorop."
    },
    {
      question: "Repareren jullie alle merken airconditioners?",
      answer: "Ja, onze monteurs hebben ervaring met alle gangbare merken: Daikin, Mitsubishi, LG, Samsung, Toshiba, Panasonic, Fujitsu, en meer. We hebben toegang tot technische documentatie en onderdelenleveranciers voor vrijwel alle merken. Ook voor minder bekende merken kunnen we meestal helpen, hoewel levertijden van specifieke onderdelen soms langer kunnen zijn."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Reparatie Service Limburg | Storing Verhelpen 24/48u | StayCool Airco"
        description="Airco reparatie service ✓ Binnen 24-48u ter plaatse ✓ F-gassen gecertificeerd ✓ Alle merken ✓ Garantie op reparatie ✓ Bel 046-2021430"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Reparatie Service",
          description: "Professionele airco reparatie service voor alle merken. Snelle responstijd, vakkundige monteurs, garantie op werkzaamheden.",
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
            Airco Reparatie Service in Limburg
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Airco defect? Wij lossen storingen en defecten snel op. F-gassen gecertificeerde monteurs binnen 24-48 uur ter plaatse in heel Limburg.
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
              <Wrench className="h-5 w-5 mr-2" />
              Storing Melden
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              24-48u responstijd
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Alle merken
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Garantie op reparatie
            </span>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professionele Airco Reparatie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Snelle diagnose en duurzame oplossingen door ervaren specialisten
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
                Snelle en Vakkundige Airco Reparatie
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Een defecte airconditioning is niet alleen oncomfortabel, maar kan ook leiden tot <strong>gezondheidsproblemen en hogere energiekosten</strong>. Vooral tijdens warme zomerperiodes is een werkende airco essentieel voor een aangenaam binnenklimaat. Bij StayCool Airco begrijpen we dat u snel geholpen wilt worden bij storingen en defecten.
                </p>

                <p>
                  Onze <strong>F-gassen gecertificeerde monteurs</strong> hebben ruim 15 jaar ervaring in het repareren van alle soorten airconditioners: van eenvoudige split-units tot complexe multi-split systemen en VRF-installaties. We werken met professionele diagnose-apparatuur om snel de oorzaak van het probleem te vinden en efficiënt een duurzame oplossing te bieden.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Veelvoorkomende Airco Storingen en Defecten
                </h3>

                <p>
                  In onze jarenlange praktijk zien we steeds terugkerende problemen. Hieronder de meest voorkomende storingen, hun symptomen, mogelijke oorzaken en oplossingen:
                </p>

                <div className="space-y-6 my-8">
                  {veelvoorkomendeStoringen.map((storing, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-sky-500">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertCircle className="h-6 w-6 text-sky-500 mr-2" />
                        {storing.title}
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <p><strong className="text-gray-900">Symptomen:</strong> {storing.symptomen}</p>
                        <p><strong className="text-gray-900">Mogelijke oorzaken:</strong> {storing.oorzaken}</p>
                        <p><strong className="text-gray-900">Oplossing:</strong> {storing.oplossing}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Ons Reparatieproces: Van Melding tot Oplossing
                </h3>

                <p>
                  Bij StayCool Airco werken we volgens een gestructureerd proces om <strong>efficiënte en duurzame reparaties</strong> te garanderen:
                </p>

                <div className="bg-sky-50 rounded-lg p-6 my-8">
                  <div className="space-y-6">
                    {reparatieproces.map((fase, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{fase.stap}</h4>
                          <p className="text-gray-600">{fase.beschrijving}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Waarom Kiezen Voor StayCool Airco Reparatie?
                </h3>

                <p>
                  Er zijn veel aanbieders van airco reparaties, maar niet allemaal bieden dezelfde <strong>kwaliteit en betrouwbaarheid</strong>. Dit onderscheidt StayCool Airco:
                </p>

                <ul className="space-y-3 ml-6">
                  <li><strong>F-gassen certificering verplicht:</strong> Sinds 2015 mogen alleen gecertificeerde monteurs aan airco's werken. Al onze monteurs beschikken over geldige certificering</li>
                  <li><strong>15+ jaar ervaring:</strong> We hebben duizenden reparaties uitgevoerd aan alle merken en types airconditioners</li>
                  <li><strong>Professionele apparatuur:</strong> We gebruiken geavanceerde meet- en diagnose-apparatuur voor nauwkeurige probleemdetectie</li>
                  <li><strong>Originele onderdelen:</strong> We werken met originele of gelijkwaardige A-merk onderdelen voor langdurige betrouwbaarheid</li>
                  <li><strong>Transparante prijzen:</strong> U ontvangt altijd een duidelijke offerte vooraf, zonder verborgen kosten achteraf</li>
                  <li><strong>Garantie op werkzaamheden:</strong> Op alle reparaties geven we garantie, zodat u met vertrouwen onze service afneemt</li>
                  <li><strong>Snelle responstijd:</strong> Bij spoedgevallen zijn we meestal binnen 24-48 uur ter plaatse</li>
                  <li><strong>Heel Limburg:</strong> We bedienen de gehele provincie inclusief Maastricht, Roermond, Heerlen, Sittard, Venlo en omstreken</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Repareren of Vervangen? Onze Eerlijke Advies
                </h3>

                <p>
                  Niet altijd is reparatie de meest verstandige keuze. Bij oudere systemen (10+ jaar) of zeer dure reparaties kan <strong>vervanging economisch voordeliger</strong> zijn. Factoren die meewegen:
                </p>

                <div className="bg-white rounded-lg p-6 shadow-md my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Repareren is vaak zinvol bij:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Systemen jonger dan 5-7 jaar
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Eenvoudige reparaties onder €300
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Goed onderhouden systemen met beperkte defecten
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      High-end merken met lange levensduur
                    </li>
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Vervanging verdient overweging bij:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      Systemen ouder dan 10 jaar met meerdere defecten
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      Reparatiekosten hoger dan 50% van nieuwwaarde
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      Zeer hoog energieverbruik vergeleken met moderne systemen
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      Verouderd koudemiddel (R22, R407C) dat niet meer leverbaar is
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      Herhaaldelijke storingen ondanks eerdere reparaties
                    </li>
                  </ul>
                </div>

                <p>
                  Onze monteurs adviseren u altijd eerlijk. We hebben <strong>geen belang bij onnodig dure reparaties</strong> of vervanging. Uw tevredenheid en een duurzame oplossing staan voorop. Bij twijfel berekenen we de totale kosten over een periode van 5 jaar (reparatie + verwacht energieverbruik versus vervanging) zodat u een weloverwogen beslissing kunt nemen.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Spoedservice: Wanneer Snel Handelen Essentieel Is
                </h3>

                <p>
                  Sommige situaties vereisen <strong>onmiddellijke actie</strong>. Neem direct contact op bij:
                </p>

                <ul className="space-y-2 ml-6">
                  <li>Waterlekkage die schade veroorzaakt aan vloeren, plafonds of muren</li>
                  <li>Brandlucht of rookontwikkeling uit de unit</li>
                  <li>Zeer luide ongebruikelijke geluiden die op mechanisch falen duiden</li>
                  <li>Elektrische vonken of flikkerende verlichting</li>
                  <li>Complete uitval tijdens extreme temperaturen (hittegolf, koudeperiode)</li>
                </ul>

                <p>
                  Voor spoedgevallen bieden we <strong>prioriteit aan contractklanten</strong>, maar we doen ons uiterste best om iedereen zo snel mogelijk te helpen. Bel ons op 046 202 1430 en meld de urgentie, dan plannen we zo spoedig mogelijk een monteur.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                  <p className="text-sm font-semibold text-orange-900 mb-2">Airco defect?</p>
                  <p className="text-sm text-orange-700">Bel direct voor spoedservice of plan een afspraak</p>
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
                      24-48u responstijd
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Alle merken en types
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Garantie op reparatie
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Originele onderdelen
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Transparante prijzen
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
                      <Link to="/seo/pillar-2-onderhoud-service/airco-filter-reiniging" className="text-sky-600 hover:text-sky-700">
                        → Filter Reiniging
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
            Veelgestelde Vragen Over Airco Reparatie
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
            Airco Defect? Wij Helpen U Snel!
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Meld uw storing en wij plannen binnen 24-48 uur een vakkundige monteur voor diagnose en reparatie
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
              <Wrench className="h-6 w-6 mr-2" />
              Storing Melden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoReparatieService;
