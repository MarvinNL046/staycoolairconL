import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, Euro, Zap, Phone, Battery, ArrowRight, DollarSign, Clock, LineChart } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijDynamischEnergieConcractPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Dynamisch Energiecontract' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€500-1.500/Jaar Verdienen",
      description: "Actief handelen op EPEX, onbalans en congestiemarkt met AlphaESS"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Beste EPEX Resultaten",
      description: "AlphaESS behaalt hoogste handelsopbrengsten vergeleken met andere merken"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "24/7 Automatisch Handelen",
      description: "AlphaCloud handelt volledig automatisch op het beste moment"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Slimme Batterijsturing",
      description: "Laad bij lage prijzen, ontlaad bij hoge prijzen - volledig geautomatiseerd"
    }
  ];

  const providers = [
    {
      name: "EPEX Spot Markt",
      type: "Directe groothandelsmarkt",
      description: "Handel direct op de Europese stroommarkt met uurtarieven. Prijzen fluctueren van €-0,05 tot €0,80/kWh.",
      compatibility: "AlphaESS SMILE-G3-T10 + AlphaCloud",
      earnings: "€300-800/jaar",
      automation: "Volledig automatisch via AlphaCloud",
      pros: ["Hoogste verdiensten", "24/7 actief", "Geen menselijke tussenkomst", "Real-time prijzen"],
      cons: ["Vereist compatibele batterij", "Complexe software", "Marktrisico"],
      best: true
    },
    {
      name: "Tibber",
      type: "Dynamisch uurtarief",
      description: "Scandinavische aanbieder met uurprijzen gebaseerd op EPEX. App toont prijzen dag vooruit.",
      compatibility: "Alle AlphaESS systemen",
      earnings: "€200-500/jaar",
      automation: "Handmatig of via smart home",
      pros: ["Transparante prijzen", "Geen maandkosten", "Real-time inzicht", "Nederlandse support"],
      cons: ["Handmatig optimaliseren tijdrovend", "Beperkte automatisering zonder extra hardware"]
    },
    {
      name: "Frank Energie",
      type: "Dynamisch dagprijs + uurprijs",
      description: "Nederlandse aanbieder met dagelijks wisselende tarieven. Prijzen bekend om 16:00u voor volgende dag.",
      compatibility: "Alle AlphaESS systemen",
      earnings: "€150-400/jaar",
      automation: "Handmatig of via AlphaCloud",
      pros: ["Nederlandse aanbieder", "Duidelijke communicatie", "Goede app", "Energietips"],
      cons: ["Lager verdienmodel dan EPEX direct", "Prijzen later bekend dan Tibber"]
    },
    {
      name: "ANWB Energie Dynamisch",
      type: "Dynamisch uurtarief",
      description: "Ledenaanbieding met uurtarieven. Gebaseerd op EPEX + kleine marge.",
      compatibility: "Alle AlphaESS systemen",
      earnings: "€150-350/jaar",
      automation: "Handmatig via app",
      pros: ["Ledenvoordeel", "Betrouwbaar", "Nederlandse service"],
      cons: ["Beperkte automatisering", "Marge bovenop EPEX prijzen"]
    },
    {
      name: "Onbalansmarkt (TenneT)",
      type: "Balanceringsmarkt",
      description: "Help het elektriciteitsnet stabiliseren door energie af te geven of op te nemen bij netschommelingen.",
      compatibility: "AlphaESS SMILE-G3-T10 (3-fase)",
      earnings: "€100-300/jaar extra",
      automation: "Volledig automatisch",
      pros: ["Passief verdienen", "Netondersteuning", "Geen actie vereist", "Combineerbaar met EPEX"],
      cons: ["Vereist 3-fase aansluiting", "Lagere opbrengst dan EPEX"]
    },
    {
      name: "Congestiemarkt",
      type: "Netcongestie diensten",
      description: "Verdien door uw batterij beschikbaar te stellen voor netcongestieoplo ssing in uw regio.",
      compatibility: "AlphaESS SMILE-G3-T10",
      earnings: "€50-200/jaar extra",
      automation: "Volledig automatisch",
      pros: ["Extra inkomsten", "Helpt lokaal net", "Geen inspanning", "Groeiende markt"],
      cons: ["Regio-afhankelijk", "Nog in ontwikkeling", "Variabele opbrengsten"]
    }
  ];

  const strategies = [
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Peak Shaving Strategie",
      description: "Laad batterij tijdens lage prijzen (nachttarief 02:00-06:00, vaak €0,10-0,15/kWh), gebruik energie tijdens hoge prijzen (17:00-21:00, vaak €0,40-0,60/kWh). Besparing: €0,25-0,45/kWh.",
      saving: "€400-700/jaar"
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Negatieve Prijzen Benutten",
      description: "Bij overproductie van wind/zon worden prijzen soms negatief (u krijgt betaald om stroom af te nemen!). Laad batterij volledig, gebruik later. Komt 50-100x per jaar voor.",
      saving: "€100-250/jaar extra"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Zonne-Energie Optimalisatie",
      description: "Sla overtollige zonne-energie op bij lage EPEX prijzen (middag), gebruik 's avonds bij hoge prijzen. Voorkom teruglevering tegen €0,08/kWh, gebruik tegen €0,40/kWh.",
      saving: "€300-600/jaar"
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Multi-Markt Strategie",
      description: "Combineer EPEX handel, onbalansmarkt en congestiemarkt. AlphaCloud optimaliseert automatisch welke markt op welk moment het meest oplevert. Hoogste totale opbrengst.",
      saving: "€700-1.500/jaar"
    }
  ];

  const requirements = [
    {
      title: "Compatibele Thuisbatterij",
      must: ["AlphaESS SMILE-G3-T10 (beste EPEX resultaten)", "3-fase aansluiting (voor onbalans/congestie)", "Minimaal 10 kWh capaciteit aanbevolen"],
      nice: ["Modulaire uitbreiding mogelijk", "Slimme meter (P1 poort)", "Wifi connectiviteit"]
    },
    {
      title: "Dynamisch Energiecontract",
      must: ["Uurtarief of EPEX-gebaseerd contract", "Geen exit kosten (voor flexibiliteit)", "API toegang voor automatisering"],
      nice: ["Historische prijsdata beschikbaar", "App met prijsvoorspelling", "Nederlandse klantenservice"]
    },
    {
      title: "Installatievereisten",
      must: ["AlphaCloud account voor automatisering", "Stabiele internetverbinding", "P1 meter uitlezing (voor optimalisatie)"],
      nice: ["Zonnepanelen (voor hogere opbrengst)", "Home Assistant integratie", "Smart home systeem"]
    }
  ];

  const scenarios = [
    {
      title: "Klein Huishouden met EPEX",
      setup: "SMILE5 (5 kWh) + Frank Energie dynamisch + 6 zonnepanelen",
      investment: "€5.785",
      consumption: "3.000 kWh/jaar",
      strategy: "Laad bij lage prijzen, gebruik bij hoge prijzen, zonnestroom bufferen",
      earnings: "€450/jaar (€250 prijsverschil + €200 zonneopslag)",
      payback: "13 jaar",
      verdict: "Geschikt voor bewust verbruik, handmatige optimalisatie"
    },
    {
      title: "Gemiddeld Huishouden met Tibber",
      setup: "SMILE-G3-T10 (10 kWh) + Tibber + 12 zonnepanelen + AlphaCloud",
      investment: "€7.750",
      consumption: "4.500 kWh/jaar",
      strategy: "Automatisch handelen via AlphaCloud, negatieve prijzen benutten",
      earnings: "€750/jaar (€400 handel + €250 zon + €100 negatieve prijzen)",
      payback: "10 jaar",
      verdict: "Ideale balans, 60% geautomatiseerd, goede ROI"
    },
    {
      title: "Groot Huishouden met EPEX Direct",
      setup: "SMILE-G3-T10 (10 kWh) + EPEX direct + 20 zonnepanelen + AlphaCloud Premium",
      investment: "€7.750",
      consumption: "6.500 kWh/jaar",
      strategy: "Volledig automatisch multi-markt (EPEX + onbalans + congestie)",
      earnings: "€1.200/jaar (€600 EPEX + €350 zon + €150 onbalans + €100 congestie)",
      payback: "6,5 jaar",
      verdict: "Hoogste opbrengst, volledig geautomatiseerd, snelste terugverdientijd"
    },
    {
      title: "Met Elektrische Auto",
      setup: "SMILE-G3-T10 (10 kWh) + Tibber + 15 zonnepanelen + EV (40 kWh)",
      investment: "€7.750",
      consumption: "8.000 kWh/jaar (incl. 3.000 kWh EV)",
      strategy: "Batterij + EV slim laden bij lage prijzen, maximaliseren prijsverschil",
      earnings: "€1.400/jaar (€600 batterij + €500 EV slim laden + €300 zon)",
      payback: "5,5 jaar",
      verdict: "Perfect voor EV bezitters, dubbele optimalisatie, excellent rendement"
    }
  ];

  const faqs = [
    {
      question: "Hoe werkt handelen op EPEX met een thuisbatterij precies?",
      answer: "EPEX (European Power Exchange) is de Europese stroommarkt waar elektriciteit per uur verhandeld wordt. Prijzen variëren van negatief (u krijgt betaald om stroom af te nemen) tot €0,80/kWh bij schaarste. Met een AlphaESS thuisbatterij en AlphaCloud software handelt uw systeem automatisch: laad bij lage prijzen (vaak nachts/weekend), ontlaad bij hoge prijzen (ochtend/avond). U hoeft niets te doen - het systeem optimaliseert 24/7 op basis van prijsvoorspellingen en uw verbruikspatroon."
    },
    {
      question: "Welke energieleveranciers ondersteunen dynamische contracten met thuisbatterijen?",
      answer: "In Nederland: Tibber (Scandinavisch, beste automatisering), Frank Energie (Nederlands, dag-vooruit prijzen), ANWB Energie Dynamisch (uurtarieven), Eneco Dynamisch, Essent Dynamisch. Voor directe EPEX handel zonder leverancier: AlphaESS AlphaCloud Premium. Let op: alleen AlphaESS SMILE-G3-T10 ondersteunt volledig automatisch handelen. Andere batterijen vereisen handmatige optimalisatie of smart home integratie."
    },
    {
      question: "Hoeveel kan ik realistisch verdienen met dynamisch handelen?",
      answer: "Realistische verdiensten per jaar: Klein systeem (5 kWh) met handmatige optimalisatie: €200-400. Gemiddeld systeem (10 kWh) met Tibber/Frank Energie: €400-700. Groot systeem (10 kWh) met EPEX direct + AlphaCloud: €700-1.200. Met elektrische auto erbij: +€300-500. Factoren: batterijgrootte, automatiseringsgraad, prijsvolatiliteit, zonnepanelen, verbruikspatroon. Hoogste verdiensten in winter (meer volatiliteit) en bij hoog energieverbruik."
    },
    {
      question: "Is handmatige optimalisatie effectief of heb ik automatisering nodig?",
      answer: "Handmatig optimaliseren kan €200-400/jaar opleveren, maar vereist dagelijkse aandacht: prijzen checken, batterij instellen, verbruik plannen. Tijdsinvestering: 10-15 min/dag = 60+ uur/jaar. Semi-automatisch (smart home + prijsdata): €400-600/jaar, beperkte inspanning. Volledig automatisch (AlphaCloud): €700-1.200/jaar, 0 inspanning. Conclusie: voor €200 extra per jaar is automatisering de moeite waard - bespaart 60 uur én verhoogt opbrengst met 50-100%."
    },
    {
      question: "Wat zijn de risico's van dynamische energiecontracten?",
      answer: "Risico's: (1) Prijsschommelingen - bij langdurig hoge prijzen hogere kosten, (2) Geen prijszekerheid - maandelijks variabel, (3) Complexiteit - vereist begrip van marktwerking, (4) Technische afhankelijkheid - automatisering moet werken. Mitigatie: (1) Thuisbatterij buffert extreme prijzen, (2) Gemiddeld altijd voordeliger dan vast contract, (3) AlphaCloud neemt complexiteit weg, (4) Kan altijd terug naar vast contract. Feitelijk risico bij batterij: minimaal, want batterij voorkomt blootstelling aan prijspieken."
    },
    {
      question: "Hoe verhoudt EPEX handel zich tot de salderingsregeling?",
      answer: "Saldering (terugleververgoeding) wordt afgebouwd: 2024 (70%), 2025 (50%), 2026 (30%), 2027 (0%). Na 2027: teruglevering €0,08-0,12/kWh vs. inkoop €0,35-0,45/kWh. EPEX handel lost dit op: in plaats van terug leveren tegen €0,10, slaat u op in batterij en gebruikt u tegen €0,40 (€0,30 verschil!). Met dynamisch contract versterkt u dit effect: laad bij €0,15, gebruik bij €0,50 (€0,35 verschil). Conclusie: dynamisch contract + batterij is perfecte oplossing voor einde saldering."
    },
    {
      question: "Wat is de onbalansmarkt en hoe verdien ik hieraan?",
      answer: "De onbalansmarkt (TenneT) stabiliseert het elektriciteitsnet door vraagoverschot en -tekorten op te vangen. Met een 3-fase thuisbatterij (SMILE-G3-T10) kunt u automatisch meedoen: TenneT stuurt signaal → batterij laadt (bij overschot) of ontlaadt (bij tekort) → u krijgt betaald. Verdiensten: €100-300/jaar passief, bovenop EPEX handel. Vereisten: 3-fase aansluiting, AlphaCloud Premium, minimaal 10 kWh batterij. Voordeel: volledig geautomatiseerd, helpt energietransitie, geen inspanning."
    },
    {
      question: "Kan ik dynamisch handelen combineren met zonnepanelen?",
      answer: "Ja, dit is zelfs de ideale combinatie! Overdag: zonnepanelen produceren → bij lage EPEX prijs: sla op in batterij → bij hoge prijs avond: gebruik uit batterij (€0,30-0,40 verschil). Voorbeeld: zonne-overproductie om 14:00u bij EPEX prijs €0,12/kWh → opslaan → gebruiken om 19:00u bij EPEX prijs €0,48/kWh = €0,36 winst per kWh. Met 10 kWh batterij en goede automatisering: €400-700 extra per jaar alleen al door slimme zonne-opslag. AlphaCloud optimaliseert dit volledig automatisch."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij met Dynamisch Energiecontract | EPEX Handelen & Geld Verdienen | StayCool Airco"
        description="Verdien €500-1.500/jaar met thuisbatterij + dynamisch contract ✓ EPEX handelen ✓ AlphaESS ✓ Automatisch optimaliseren ✓ Limburg"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@type": "Product",
          name: "AlphaESS Thuisbatterij met Dynamisch Energiecontract",
          description: "Verdien geld door automatisch te handelen op EPEX, onbalans en congestiemarkt met AlphaESS thuisbatterij en dynamisch energiecontract.",
          brand: { "@type": "Brand", name: "AlphaESS" },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "5785",
            highPrice: "7750",
            offerCount: "3"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij met Dynamisch Energiecontract: Verdien €500-1.500/Jaar met EPEX Handelen
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Handel automatisch op de Europese stroommarkt met AlphaESS batterij. Laad bij lage prijzen, gebruik bij hoge prijzen. Volledig geautomatiseerd via AlphaCloud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis EPEX Advies
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk AlphaESS Batterijen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">AlphaESS = Beste EPEX Resultaten</p>
                <p className="text-sm">
                  AlphaESS behaalt hoogste handelsopbrengsten op EPEX, onbalans en congestiemarkt vergeleken met andere merken. 24/7 automatisch optimaliseren.
                </p>
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
              Waarom Dynamisch Contract + Thuisbatterij de Perfecte Combinatie Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximale besparing én verdiensten door slim te handelen op de energiemarkt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
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
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat is een Dynamisch Energiecontract en Hoe Werkt Het?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Een <strong>dynamisch energiecontract</strong> betekent dat je elektriciteitsprijs per uur varieert op basis van de actuele marktprijs. In tegenstelling tot vaste contracten (één prijs heel het jaar) betaal je bij dynamische contracten de werkelijke prijs op de <strong>EPEX groothandelsmarkt</strong> plus een kleine marge.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hoe Dynamische Prijzen Werken:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Lage Prijzen (Laad Batterij)</h4>
                  <p className="text-3xl font-bold text-green-600 mb-2">€0,10-0,20/kWh</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Nachts (02:00-06:00)</li>
                    <li>✓ Weekend overschot</li>
                    <li>✓ Veel wind/zon</li>
                    <li>✓ Lage vraag</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Normale Prijzen</h4>
                  <p className="text-3xl font-bold text-yellow-600 mb-2">€0,25-0,35/kWh</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>→ Overdag</li>
                    <li>→ Gemiddelde vraag</li>
                    <li>→ Normale productie</li>
                    <li>→ Stabiel weer</li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Hoge Prijzen (Gebruik Batterij)</h4>
                  <p className="text-3xl font-bold text-red-600 mb-2">€0,40-0,80/kWh</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>⚠ Ochtend/avond (17:00-21:00)</li>
                    <li>⚠ Hoge vraag</li>
                    <li>⚠ Weinig wind/zon</li>
                    <li>⚠ Koud weer</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Verdienmodel met Thuisbatterij:</p>
                <p className="text-gray-700">
                  Laad batterij bij €0,15/kWh (nachts) → gebruik bij €0,50/kWh (avond) = <strong className="text-green-600">€0,35 winst per kWh</strong>. Met 10 kWh batterij en dagelijks cyclus: €0,35 × 10 kWh × 300 dagen = <strong className="text-green-600">€1.050/jaar verdiensten</strong>!
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Beste Dynamische Energiecontracten voor Thuisbatterijen
            </h2>

            <div className="space-y-6 mb-8">
              {providers.map((provider, index) => (
                <div key={index} className={`bg-white rounded-lg p-6 shadow-md ${provider.best ? 'border-2 border-yellow-500' : ''}`}>
                  {provider.best && (
                    <div className="bg-yellow-500 text-gray-900 font-bold text-sm px-3 py-1 rounded-full inline-block mb-3">
                      ⭐ Aanbevolen voor AlphaESS
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                      <p className="text-sm text-gray-600">{provider.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{provider.earnings}</p>
                      <p className="text-xs text-gray-600">Verwachte opbrengst</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{provider.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Compatibiliteit:</p>
                      <p className="text-sm text-gray-600">{provider.compatibility}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">Automatisering:</p>
                      <p className="text-sm text-gray-600">{provider.automation}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-bold text-green-600 mb-2">Voordelen:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {provider.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-2">Nadelen:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {provider.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">−</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Handelsstrategieën voor Maximale Opbrengst
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    {strategy.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{strategy.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-bold text-green-700">Verwachte besparing: {strategy.saving}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Wat Heb Je Nodig voor Dynamisch Handelen?
            </h2>

            <div className="space-y-6 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{req.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Vereist:</p>
                      <ul className="space-y-2">
                        {req.must.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Aanbevolen:</p>
                      <ul className="space-y-2">
                        {req.nice.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Realistische Scenario's: Wat Kun Je Verdienen?
            </h2>

            <div className="space-y-6 mb-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <h3 className="text-2xl font-bold">{scenario.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Configuratie:</h4>
                        <p className="text-sm text-gray-700 mb-2"><strong>Setup:</strong> {scenario.setup}</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Investering:</strong> {scenario.investment}</p>
                        <p className="text-sm text-gray-700"><strong>Verbruik:</strong> {scenario.consumption}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Strategie:</h4>
                        <p className="text-sm text-gray-700">{scenario.strategy}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Jaarlijkse Opbrengst</p>
                          <p className="text-2xl font-bold text-green-600">{scenario.earnings}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Terugverdientijd</p>
                          <p className="text-2xl font-bold text-yellow-600">{scenario.payback}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Na 15 jaar</p>
                          <p className="text-2xl font-bold text-blue-600">€{(parseFloat(scenario.earnings.replace(/[€.,/jaar]/g, '')) * 15 - parseFloat(scenario.investment.replace(/[€.,]/g, ''))).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-center">
                      <strong>Conclusie:</strong> {scenario.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Met Geld Verdienen op de Energiemarkt
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontdek hoeveel jij kunt verdienen met dynamisch handelen. Gratis persoonlijk advies en ROI-berekening voor jouw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis EPEX Advies
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Dynamische Energiecontracten
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Ontdek Meer Over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-G3-T10</h3>
              <p className="text-sm text-gray-600 mb-3">Beste EPEX resultaten, 3-fase, 10 kWh</p>
              <p className="text-yellow-600 font-bold">Perfect voor EPEX handel</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">ROI berekening en scenario's</p>
              <p className="text-yellow-600 font-bold">4-7 jaar met EPEX handel</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Batterijen</h3>
              <p className="text-sm text-gray-600 mb-3">Compleet AlphaESS assortiment</p>
              <p className="text-yellow-600 font-bold">Vind jouw ideale systeem</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Verdien €500-1.500 Per Jaar Extra Met EPEX Handelen
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Volledig geautomatiseerd via AlphaCloud. Jij doet niets, de batterij verdient voor je. 0% BTW, 10 jaar garantie. Direct starten mogelijk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Adviesgesprek
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijDynamischEnergieConcractPage;
