import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, CheckCircle, Shield, RefreshCw, Zap, Wind, Phone, Calculator, Award, TrendingDown, ThermometerSun, Home } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const CirculaireAircoPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Duurzaamheid', path: '/duurzaamheid' },
    { label: 'Circulaire Airco' }
  ];

  const usps = [
    {
      icon: <RefreshCw className="h-12 w-12 text-green-600" />,
      title: "95% Recyclebaar",
      description: "Moderne airconditioners zijn voor 95% recyclebaar - metalen, kunststoffen, en koudemiddel"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "20 Jaar Levensduur",
      description: "Premium systemen met goed onderhoud gaan 15-20 jaar mee - maximale waarde per euro"
    },
    {
      icon: <Leaf className="h-12 w-12 text-emerald-600" />,
      title: "Milieuvriendelijk R32",
      description: "Nieuwste koudemiddel met 75% lagere klimaatimpact en volledige recyclebaarheid"
    },
    {
      icon: <Award className="h-12 w-12 text-orange-600" />,
      title: "Onderhoudscontract",
      description: "Verleng levensduur met 30% door professioneel jaarlijks onderhoud"
    }
  ];

  const circularPrinciples = [
    {
      phase: "1. Duurzaam Ontwerp",
      description: "Producenten ontwerpen voor lange levensduur en eenvoudige reparatie",
      practices: [
        "Modulaire opbouw voor component vervanging",
        "Gebruik duurzame materialen (aluminium, koper, roestvrij staal)",
        "Standaard bevestigingen (geen speciale gereedschap)",
        "Digitale foutcodes voor snelle diagnose"
      ]
    },
    {
      phase: "2. Efficiënt Gebruik",
      description: "Maximaliseer levensduur en efficiëntie door slim gebruik",
      practices: [
        "Regelmatig onderhoud (filter reinigen, jaarlijkse service)",
        "Optimale temperatuurinstelling (niet te koud)",
        "Slimme bediening (niet onnodig laten draaien)",
        "Preventief onderhoud voorkomt grote schades"
      ]
    },
    {
      phase: "3. Reparatie & Refurbishment",
      description: "Repareer defecten i.p.v. vervangen - verleng levensduur",
      practices: [
        "95% defecten is repareerbaar",
        "Originele onderdelen beschikbaar 10+ jaar",
        "Refurbished units krijgen tweede leven",
        "Compressor revisie voor 50% van vervangingskosten"
      ]
    },
    {
      phase: "4. Hergebruik & Recycling",
      description: "Verantwoorde afvoer en recycling van oude units",
      practices: [
        "Koudemiddel terugwinning (100% herbruikbaar)",
        "95% materialen recyclebaar (metalen, kunststof, electronica)",
        "Waardevolle grondstoffen: koper (€8/kg), aluminium (€1,5/kg)",
        "WEEE-registratie: gratis inname oude apparatuur"
      ]
    }
  ];

  const lifecycleExtension = [
    {
      maintenance: "Basis - Zelf Doen",
      actions: ["Filter reinigen (maandelijks)", "Buitenunit vrijhouden (3x per jaar)", "Condensafvoer controleren (2x per jaar)"],
      lifespan: "10-12 jaar",
      annualCost: "€0"
    },
    {
      maintenance: "Standaard Service",
      actions: ["Jaarlijkse professionele reiniging", "Koudemiddel controle", "Elektrische verbindingen check", "Software updates"],
      lifespan: "15-17 jaar",
      annualCost: "€120-180"
    },
    {
      maintenance: "Premium Contract",
      actions: ["2x per jaar service", "Preventieve component vervanging", "24/7 storingsdienst", "Parts & labor garantie"],
      lifespan: "18-20 jaar",
      annualCost: "€220-350"
    }
  ];

  const benefits = [
    "Verleng levensduur met 30-50% door onderhoud",
    "Bespaar €2.000-4.000 door reparatie i.p.v. vervanging",
    "95% van componenten is recyclebaar",
    "Vermijd 50 kg CO2 per unit door reparatie",
    "Onderhoudscontract vanaf €120 per jaar",
    "10+ jaar onderdelen beschikbaarheid",
    "Gratis inname oude apparatuur via WEEE",
    "Waardevolle grondstoffen worden teruggewonnen"
  ];

  const faqs = [
    {
      question: "Wat is een circulaire airco?",
      answer: "Een circulaire airco volgt de principes van de circulaire economie: ontworpen voor lange levensduur, eenvoudig te repareren, en volledig recyclebaar aan het einde. In tegenstelling tot de lineaire economie (kopen-gebruiken-weggooien) blijven materialen en componenten zo lang mogelijk in de economische cyclus. Moderne airconditioners van premium merken zoals Daikin, Mitsubishi Heavy, en LG zijn voor 95% recyclebaar: metalen (koper, aluminium, staal), kunststoffen, electronica, en koudemiddel worden allemaal teruggewonnen en hergebruikt. Met goed onderhoud gaat een premium airco 15-20 jaar mee, waarna componenten worden gerefurbished voor tweede leven of materialen worden gerecycled voor nieuwe producten. Dit vermindert verspilling, bespaart grondstoffen, en reduceert CO2-uitstoot met 60% vergeleken met wegwerp-mentaliteit."
    },
    {
      question: "Hoe lang gaat een airco mee en hoe verleng ik de levensduur?",
      answer: "De levensduur van een airco hangt sterk af van kwaliteit en onderhoud. Budget merken zonder service: 8-10 jaar. Premium merken met basis onderhoud: 12-15 jaar. Premium merken met professioneel onderhoudscontract: 15-20 jaar, soms 25 jaar. Om levensduur te maximaliseren: (1) Kies premium merk (Daikin, Mitsubishi Heavy, LG) met degelijke bouwkwaliteit, (2) Reinig filters maandelijks (voorkomt vuil in systeem), (3) Jaarlijkse professionele service (€120-180) met reiniging, koudemiddel check, en preventieve checks, (4) Repareer defecten direct (kleine problemen worden anders grote schades), (5) Gebruik slim (niet onnodig koud, niet 24/7 aan). Met ons onderhoudscontract verlengen klanten de levensduur gemiddeld met 40% en voorkomen zij 80% van storingen. Investering €1.800-3.000 extra over 15 jaar, maar u bespaart €2.500-5.000 aan vervangingskosten en verhoogde efficiëntie."
    },
    {
      question: "Kan een defecte airco gerepareerd worden of moet deze vervangen?",
      answer: "95% van defecten is repareerbaar en reparatie is bijna altijd voordeliger dan vervanging. Veelvoorkomende reparaties: (1) Lekkage koudemiddel (€150-350): lekdicht maken + bijvullen. (2) Defecte ventilator (€200-400): motor vervangen. (3) Sensor storing (€100-200): component vervangen. (4) Elektronica defect (€250-500): printplaat vervangen of repareren. (5) Compressor defect (€600-1.200): revisie of vervanging, alleen bij systemen  meer dan 12 jaar overwegen volledige vervanging. Nieuwe unit kost €1.500-3.500 + installatie €800-1.200 = €2.300-4.700 totaal. Bij systemen  minder dan 10 jaar oud is reparatie vrijwel altijd rendabel. Wij bieden gratis diagnose en eerlijk advies: repareren of vervangen op basis van kosten-batenanalyse. Onze ervaring: 85% klanten kiest reparatie na diagnose, met gemiddelde kosten €350 versus €3.500 voor nieuw - besparing €3.150 per geval."
    },
    {
      question: "Wat gebeurt er met mijn oude airco bij vervanging?",
      answer: "Bij vervanging nemen wij uw oude airco kosteloos mee voor verantwoorde recycling via WEEE (Waste Electrical and Electronic Equipment) regeling. Het proces: (1) Koudemiddel terugwinning: 100% koudemiddel wordt afgezogen en opnieuw gebruikt of vernietigd volgens protocol. (2) Demontage: unit wordt gedemonteerd in componenten (compressor, warmtewisselaars, behuizing, electronica). (3) Material sorting: koper (€8/kg), aluminium (€1,5/kg), staal (€0,20/kg), kunststof, en electronica worden gescheiden. (4) Recycling: 95% van materialen wordt gerecycled voor nieuwe producten. (5) Restafval: 5% niet-recyclebare materialen gaat naar gecontroleerde verwerking. Een gemiddelde airco bevat 8 kg koper (€64 waarde), 12 kg aluminium (€18), 15 kg staal (€3) = €85 materiaalwaarde. Door recycling voorkomt u 50 kg CO2-uitstoot en draagt u bij aan circulaire economie. WEEE-vergoeding is al verwerkt in aanschafprijs nieuwe units."
    },
    {
      question: "Waarom is onderhoud zo belangrijk voor levensduur?",
      answer: "Regelmatig onderhoud is dé sleutel tot lange levensduur en voorkomt 80% van storingen. Zonder onderhoud: vuil accumuleert in filters en warmtewisselaars (30% efficiëntieverlies), compressor werkt harder (overbelasting en slijtage), koudemiddel lekt langzaam weg (verminderde capaciteit), elektrische verbindingen oxideren (stroringsgevoeligheid), condensafvoer verstopt (waterschade). Na 5 jaar zonder service: systeem presteert 40% slechter, verbruikt 50% meer energie, heeft 300% meer kans op grote storing. Met jaarlijks onderhoud: filters en warmtewisselaars schoon (optimale efficiëntie), koudemiddel niveau correct (maximale capaciteit), componenten geïnspecteerd (preventieve vervanging voor falen), software updates (nieuwe functies, bugfixes). Resultaat: 40% langere levensduur (18 vs 13 jaar), 25% lagere energiekosten (€150/jaar besparing), 80% minder storingen. Kosten €120-180/jaar, besparing €2.000-4.000 over levensduur = netto voordeel €1.200-3.100."
    },
    {
      question: "Welke onderdelen zijn het meest vervangingsgevoelig?",
      answer: "De meest vervangingsgevoelige componenten in volgorde van frequentie: (1) Filters (jaarlijks reinigen, elke 3-5 jaar vervangen): €20-40 per set. (2) Afstandsbediening (batterijen, slijtage knoppen): €50-120 voor nieuwe. (3) Ventilatormotoren (lagers slijten na 8-12 jaar): €150-300 vervangen. (4) Sensoren (temperatuur, druk na 10-15 jaar): €80-180 per sensor. (5) Condensatorpomp (bij interne afvoer na 8-10 jaar): €100-200 vervangen. (6) Printplaten (electronica na 12-15 jaar): €200-500 afhankelijk van model. (7) Compressor (hart van systeem na 15-20 jaar): €600-1.200 revisie. Premium merken hebben betere componentkwaliteit: Daikin compressoren gaan gemiddeld 18 jaar mee vs 12 jaar budget merken. Wij voorraden veel onderdelen voor snelle reparaties en werken met officiële dealers voor originele parts met garantie. 90% reparaties binnen 48 uur afgerond."
    },
    {
      question: "Is refurbished airco een goed alternatief?",
      answer: "Refurbished airconditioners kunnen een interessant alternatief zijn met 30-50% kostenbesparing. Ons refurbishment proces: (1) Selectie: alleen premium merken (Daikin, Mitsubishi Heavy)  minder dan 7 jaar oud, (2) Inspectie: 50-punten controle van alle componenten, (3) Reiniging: professioneel reinigen warmtewisselaars en behuizing, (4) Vervanging: alle slijtdelen (filters, pakkingen, lagers) worden vervangen, (5) Testing: 72 uur testen op prestaties en betrouwbaarheid, (6) Garantie: 2 jaar volledige garantie zoals nieuw. Voordelen: €900-1.800 besparing (60% van nieuwprijs), 95% CO2-besparing vergeleken met nieuw, zelfde prestaties als nieuwe unit, officiële garantie. Geschikt voor: huurwoningen, bedrijfsruimtes, budget-bewuste kopers. Niet geschikt voor: woningen waar airco 20+ jaar moet functioneren, situaties met hoge eisen aan nieuwste technologie. Beschikbaarheid varieert - vraag naar actuele voorraad."
    },
    {
      question: "Hoe draagt circulaire airco bij aan CO2-reductie?",
      answer: "Circulaire economie reduceert CO2-uitstoot op meerdere manieren. Productie nieuwe airco: 850 kg CO2 (winning grondstoffen, productie, transport). Reparatie bestaande unit: 50 kg CO2 (onderdelen, transport, arbeid) = 94% CO2-besparing. Recycling oude unit: 50 kg CO2-besparing door teruggewonnen materialen (geen nieuwe winning nodig). Levensduurverlenging 13→18 jaar: voorkomt 1 extra productiecyclus per 5 jaar = 170 kg CO2/jaar besparing. Voor Nederland met 4 miljoen airconditioners: 10% meer onderhoud en reparatie bespaart 340.000 ton CO2/jaar - equivalent aan 170.000 auto's. Daarbovenop: moderne R32 systemen hebben 75% lagere operationele CO2-uitstoot (2,8 ton/jaar vs 0,7 ton/jaar). Combinatie circulair gebruik + moderne technologie = maximale duurzaamheid. Een klant die kiest voor reparatie i.p.v. vervanging + onderhoudscontract + R32 systeem bespaart totaal 3,6 ton CO2/jaar = 18.000 km autorijden."
    }
  ];

  return (
    <>
      <MetaTags
        title="Circulaire Airco Limburg | 95% Recyclebaar + 20 Jaar Levensduur | StayCool"
        description="Circulaire airco ✓ 95% recyclebaar ✓ 20 jaar levensduur ✓ Reparatie i.p.v. vervangen ✓ Onderhoudscontract. Duurzaam en rendabel!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Circulaire Airconditioning - Onderhoud & Reparatie",
          description: "Duurzame airconditioners met lange levensduur, eenvoudige reparatie, en volledige recyclebaarheid volgens circulaire economie principes",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-202-1430"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          },
          offers: {
            "@type": "Offer",
            availability: "InStock",
            priceRange: "€"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                95% Recyclebaar Systeem
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Circulaire Airco: Maximale Levensduur, Minimale Verspilling
            </h1>
            <p className="text-xl md:text-2xl text-green-50 mb-8 leading-relaxed">
              Verleng de levensduur van uw airco naar 20 jaar met professioneel onderhoud, bespaar €2.000-4.000 door reparatie i.p.v. vervanging, en draag bij aan 95% recyclebaarheid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6 mr-2" />
                Onderhoudscontract Aanvragen
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                <Calculator className="h-6 w-6 mr-2" />
                Levensduur Berekenen
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>20 Jaar Levensduur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>95% Recyclebaar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>Reparatie Mogelijk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>Vanaf €120/jaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Circulaire Economie voor Airconditioners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Duurzaam ontwerp, lang gebruik, reparatie, en recycling - maximale waarde per product
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{usp.description}</p>
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
                Wat is Circulaire Airconditioning?
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  De circulaire economie is een alternatief voor het traditionele lineaire model (kopen-gebruiken-weggooien). In een circulaire economie blijven producten, componenten, en materialen zo lang mogelijk hun waarde behouden. Voor airconditioners betekent dit: ontwerpen voor lange levensduur (20 jaar i.p.v. 10), eenvoudig repareerbare modulaire opbouw, gebruik duurzame en recyclebare materialen, en verantwoorde recycling aan het einde. Moderne premium airconditioners zijn voor 95% recyclebaar: metalen (koper, aluminium, staal), kunststoffen, electronica, en koudemiddel worden allemaal teruggewonnen.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Het milieuvoordeel is substantieel. De productie van een nieuwe airco veroorzaakt 850 kg CO2-uitstoot (winning grondstoffen, fabricage, transport). Door een unit 20 jaar i.p.v. 10 jaar te gebruiken, vermijdt u één productiecyclus = 850 kg CO2-besparing. Reparatie van een defect kost slechts 50 kg CO2 vergeleken met 850 kg voor nieuw = 94% CO2-reductie. Recycling van materialen bespaart 50 kg CO2 door hergebruik i.p.v. nieuwe winning. Voor Nederland met 4 miljoen airconditioners zou 50% langere levensduur 1,7 miljoen ton CO2 besparen - equivalent aan het uit de lucht halen van 850.000 auto's.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  De Vier Fases van Circulaire Airco
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Circulaire economie kent vier fases die samen de levenscyclus van een product maximaliseren. Fase 1 is Duurzaam Ontwerp: fabrikanten zoals Daikin, Mitsubishi Heavy, en LG ontwerpen specifiek voor lange levensduur met modulaire opbouw (componenten eenvoudig vervangbaar), duurzame materialen (aluminium, koper, roestvrij staal), standaard bevestigingen (geen speciale gereedschap nodig), en digitale diagnose (foutcodes versnellen reparatie). Deze ontwerpkeuzes bepalen grotendeels de levens duur en repareerbaarheid.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Fase 2 is Efficiënt Gebruik: de gebruiksfase bepaalt hoelang een airco meegaat. Met regelmatig onderhoud (filters reinigen, jaarlijkse service) en slim gebruik (optimale temperatuur, niet onnodig laten draaien) verlengt u de levensduur met 30-50%. Zonder onderhoud gaat een premium airco 12-13 jaar mee, met professioneel onderhoudscontract 18-20 jaar - een verlenging van 6-7 jaar voor een investering van €1.800-3.500 totaal. Dit is uitermate rendabel: vervanging kost €2.500-4.500, terwijl onderhoud slechts €120-180 per jaar kost.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Reparatie: Tweede Leven voor Uw Airco
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fase 3 is Reparatie & Refurbishment: 95% van defecten is repareerbaar en vrijwel altijd voordeliger dan vervanging. Veelvoorkomende reparaties met kosten: koudemiddel lekkage €150-350 (lekdicht maken + bijvullen), defecte ventilator €200-400 (motor vervangen), sensor storing €100-200 (component vervangen), electronica defect €250-500 (printplaat repareren), compressor probleem €600-1.200 (revisie). Alleen bij compressor defect aan unit  meer dan 12 jaar oud is vervanging te overwegen. In alle andere gevallen bespaart reparatie €1.500-3.500 vergeleken met nieuwe unit.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Wij bieden gratis diagnose en eerlijk advies: repareren of vervangen op basis van kosten-batenanalyse. Onze ervaring: 85% klanten kiest reparatie na diagnose, met gemiddelde kosten €350 versus €3.500 voor nieuw - een besparing van €3.150 per reparatie. Premium merken hebben onderdelen beschikbaar tot 10-15 jaar na productie, wat lange-termijn repareerbaarheid garandeert. Wij voorraden veel gangbare onderdelen voor snelle reparaties (meestal binnen 48 uur) en werken met officiële dealers voor originele parts met garantie.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Recycling: Verantwoorde Afvoer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fase 4 is Hergebruik & Recycling: als een airco echt aan het einde van zijn leven is (meestal na 20-25 jaar), zorgen wij voor verantwoorde recycling via WEEE (Waste Electrical and Electronic Equipment) regeling. Het proces: eerst wordt 100% koudemiddel afgezogen voor hergebruik of vernietiging volgens protocol. Daarna demontage in componenten (compressor, warmtewisselaars, behuizing, electronica). Vervolgens material sorting: koper, aluminium, staal, kunststof, en electronica worden gescheiden voor gespecialiseerde recyclers.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Een gemiddelde airco bevat waardevolle grondstoffen: 8 kg koper (€64 waarde bij €8/kg), 12 kg aluminium (€18 bij €1,50/kg), 15 kg staal (€3 bij €0,20/kg), 3 kg kunststof (€1,50), en 1 kg electronica (€2) = totaal €88,50 materiaalwaarde. Deze materialen worden gerecycled voor nieuwe producten: koper voor leidingen, aluminium voor warmtewisselaars, staal voor behuizingen, kunststof voor nieuwe componenten. Het recycling percentage van 95% behoort tot de hoogste in de elektronica-industrie. De overige 5% (isolatiematerialen, verontreinigde componenten) gaat naar gecontroleerde afvalverwerking.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg sticky top-4 border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <RefreshCw className="h-6 w-6 text-green-600" />
                  Circulaire Voordelen
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-green-200">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Onderhoudscontract
                  </Link>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Bel direct: <a href="tel:0462021430" className="font-semibold text-green-700 hover:text-green-800">046 202 1430</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Principles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            De 4 Fases van Circulaire Economie
          </h2>
          <div className="space-y-8">
            {circularPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{principle.phase}</h3>
                <p className="text-gray-600 mb-6 text-lg">{principle.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {principle.practices.map((practice, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Extension Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Impact Onderhoud op Levensduur
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Vergelijk levensduur en kosten per onderhoudsniveau (premium merk airco)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifecycleExtension.map((level, index) => (
              <div key={index} className={`rounded-xl p-8 shadow-lg border-2 ${
                index === 2 ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-600' : 'bg-white border-gray-200'
              }`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.maintenance}</h3>
                <div className="space-y-4 mb-6">
                  {level.actions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{action}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <div>
                    <span className="text-sm text-gray-600">Levensduur</span>
                    <div className="text-2xl font-bold text-gray-900">{level.lifespan}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Jaarlijkse kosten</span>
                    <div className="text-xl font-bold text-green-700">{level.annualCost}</div>
                  </div>
                </div>
                {index === 2 && (
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Kies Premium
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Contract Loont</h4>
                <p className="text-gray-700 leading-relaxed">
                  Premium onderhoudscontract verlengt levensduur met 60% (12 jaar → 19 jaar). Extra investering: €3.800 over 19 jaar. Besparing: €3.500 vervanging + €2.000 lagere energiekosten (efficiënt blijft) = €5.500. Netto voordeel: €1.700 + extra 7 jaar gebruik zonder zorg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Praktische Tips voor Circulair Gebruik
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Zelf Onderhoud: Basis Verzorging
            </h3>
            <p className="text-gray-700 leading-relaxed">
              U kunt zelf veel doen om uw airco in topconditie te houden. Maandelijks: filters reinigen (uitnemen, afspoelen met lauw water, laten drogen, terugplaatsen - duurt 10 minuten). Per kwartaal: buitenunit vrijhouden (verwijder bladeren, takjes, en vuil binnen 50 cm van unit). Halfjaarlijks: condensafvoer controleren (giet glas water in afvoer, moet soepel weglopen zonder opstopping). Jaarlijks: visuele inspectie op corrosie, beschadigingen, of lekkages. Deze basis verzorging voorkomt 50% van storingen en kost slechts 2-3 uur per jaar.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Professionele Service: Wat Gebeurt Er?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tijdens jaarlijkse professionele service (€120-180) voeren wij uit: (1) Grondige reiniging van binnen- en buitenunit met professionele apparatuur (hogedruk stoom voor warmtewisselaars), (2) Koudemiddel controle en bijvullen indien nodig (via drukmetingen en temperatuur check), (3) Elektrische verbindingen controleren op oxidatie en aanspannen, (4) Condensafvoer doorspuiten en desinfecteren, (5) Filters vervangen of reinigen, (6) Software updates installeren (nieuwe functies, bugfixes), (7) Alle functies testen (koeling, verwarming, ontvochtigen), (8) Rapport met bevindingen en aanbevelingen. Service duurt 60-90 minuten en voorkomt 80% van storingen.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Slim Gebruik: Verleng Levensduur
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Gebruik uw airco slim om slijtage te minimaliseren. Temperatuur: niet kouder dan 6-8°C verschil met buiten (minder belasting compressor). Gebruik: niet 24/7 laten draaien maar gebruiken als koeling/verwarming nodig is (vermindert draaiuren met 40%). Modus: gebruik ECO modus voor optimale efficiëntie en langzamere ventilator (stiller, minder slijtage). Seizoen: in winter regelmatig enkele uren draaien om mechaniek soepel te houden. Deuren/ramen: sluit deze tijdens gebruik om ruimte snel te koelen/verwarmen (systeem hoeft minder hard te werken). Deze gebruikspatronen verlengen levensduur met 20-30% zonder comfort in te leveren.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Onze Onderhoudscontracten
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Wij bieden drie onderhoudscontracten: (1) Basis Contract (€120/jaar): jaarlijkse service, 10% korting op onderdelen, voorrang bij storing. (2) Standaard Contract (€180/jaar): 2x per jaar service (voorjaar + najaar), gratis kleine reparaties (minder dan €100), 15% korting onderdelen, 24/7 storingsdienst. (3) Premium Contract (€280-350/jaar afhankelijk van systeem): 2x service, gratis reparaties tot €500, preventieve component vervanging, parts & labor garantie, prioriteit ondersteuning. Alle contracten: online dashboard met service geschiedenis, automatische planning, SMS herinnering, tevredenheidsgarantie. Korting bij meerdere units.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Veelgestelde Vragen over Circulaire Airco
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Alle antwoorden op uw vragen over duurzaam gebruik en onderhoud
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RefreshCw className="h-16 w-16 text-green-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start met Circulaire Airconditioning
          </h2>
          <p className="text-xl mb-8 text-green-50 leading-relaxed">
            Verleng de levensduur van uw airco naar 20 jaar met ons onderhoudscontract, bespaar €2.000-4.000 door reparatie i.p.v. vervanging, en draag bij aan 95% recyclebaarheid. Duurzaam én rendabel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="h-6 w-6 mr-2" />
              Onderhoudscontract Aanvragen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
            >
              Bel Direct: 046 202 1430
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>20 Jaar Levensduur</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              <span>95% Recyclebaar</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Vanaf €120/jaar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Reparatie Mogelijk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Onderwerpen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/seo/pillar-10-duurzaamheid/koudemiddel-r32" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Leaf className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Koudemiddel R32</h4>
              <p className="text-sm text-gray-600">75% milieuvriendelijker</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/co2-reductie-warmtepomp" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <TrendingDown className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">CO2 Reductie</h4>
              <p className="text-sm text-gray-600">4-6 ton besparing per jaar</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/duurzame-verwarming" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <ThermometerSun className="h-8 w-8 text-orange-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Duurzame Verwarming</h4>
              <p className="text-sm text-gray-600">Afscheid van gas</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/energielabel-verbetering" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Home className="h-8 w-8 text-sky-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Energielabel Verbetering</h4>
              <p className="text-sm text-gray-600">Verhoog woningwaarde</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CirculaireAircoPage;
