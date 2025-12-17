import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, ArrowRight, Phone, TrendingUp, TrendingDown, Calculator, Euro, Clock, CheckCircle, XCircle, AlertCircle, Sun, Home } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijWanneerRendabel = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Wanneer rendabel?' }
  ];

  const rendabelFactoren = [
    {
      factor: "Zonnepanelen vermogen",
      impact: "Hoog",
      uitleg: "Hoe meer zonnepanelen, hoe meer overtollige stroom u kunt opslaan. Minimaal 10 zonnepanelen (3-4 kWp) is aan te raden voor rendabele thuisbatterij.",
      optimaal: "15+ panelen (5+ kWp)",
      suboptimaal: "< 10 panelen (< 3 kWp)"
    },
    {
      factor: "Energieverbruik profiel",
      impact: "Hoog",
      uitleg: "Hoe hoger uw verbruik 's avonds en 's nachts (wanneer panelen niet produceren), hoe meer u profiteert van opgeslagen energie.",
      optimaal: "Piekverbruik 's avonds/nacht",
      suboptimaal: "Vooral overdag thuis"
    },
    {
      factor: "Dynamisch energiecontract",
      impact: "Zeer hoog",
      uitleg: "Met dynamische tarieven kunt u laden bij lage prijzen en ontladen bij hoge prijzen. Dit vergroot de besparing met €200-500 per jaar.",
      optimaal: "Dynamisch contract",
      suboptimaal: "Vast contract"
    },
    {
      factor: "Salderingsregeling",
      impact: "Zeer hoog",
      uitleg: "Tot 2027 wordt salderen afgebouwd. Zonder salderen is terugleveren minder voordelig, waardoor een batterij veel rendabeler wordt.",
      optimaal: "Na 2027 (geen salderen)",
      suboptimaal: "Voor 2025 (100% salderen)"
    },
    {
      factor: "Huidige teruglevering",
      impact: "Hoog",
      uitleg: "Hoe meer stroom u nu teruglevert aan het net (vooral in zomer), hoe meer u kunt besparen door deze op te slaan in een batterij.",
      optimaal: "> 2000 kWh/jaar teruglevering",
      suboptimaal: "< 1000 kWh/jaar teruglevering"
    },
    {
      factor: "Elektrische auto",
      impact: "Gemiddeld",
      uitleg: "Met een EV verbruikt u meer stroom. Een batterij helpt om dit goedkoper te doen door laden met eigen zonnestroom of bij lage tarieven.",
      optimaal: "EV aanwezig of gepland",
      suboptimaal: "Geen EV"
    },
    {
      factor: "Investeringsbedrag",
      impact: "Hoog",
      uitleg: "Lagere aanschafkosten betekenen kortere terugverdientijd. Prijzen dalen nog steeds, dus timing is belangrijk.",
      optimaal: "€5.000-7.000 (10 kWh)",
      suboptimaal: "> €9.000"
    },
    {
      factor: "Subsidies beschikbaar",
      impact: "Gemiddeld",
      uitleg: "ISDE subsidie of andere regelingen kunnen de investering met €1.000-2.500 verlagen, wat de terugverdientijd verkort.",
      optimaal: "Subsidie beschikbaar",
      suboptimaal: "Geen subsidie"
    }
  ];

  const rekenvoorbeelden = [
    {
      situatie: "Gezin met zonnepanelen (optimaal scenario)",
      kenmerken: [
        "4-persoons gezin",
        "18 zonnepanelen (6 kWp)",
        "Verbruik 4.500 kWh/jaar",
        "Thuisbatterij 10 kWh",
        "Dynamisch energiecontract",
        "Huidig: 2.500 kWh teruglevering/jaar"
      ],
      berekening: {
        investering: 6500,
        jaarlijkseBesparing: 850,
        subsidie: 1500,
        nettoInvestering: 5000,
        terugverdientijd: 5.9,
        besparing25Jaar: 21250,
        roi: "Zeer rendabel"
      }
    },
    {
      situatie: "Gezin met zonnepanelen (gemiddeld scenario)",
      kenmerken: [
        "3-persoons gezin",
        "12 zonnepanelen (4 kWp)",
        "Verbruik 3.200 kWh/jaar",
        "Thuisbatterij 8 kWh",
        "Vast energiecontract",
        "Huidig: 1.500 kWh teruglevering/jaar"
      ],
      berekening: {
        investering: 5500,
        jaarlijkseBesparing: 550,
        subsidie: 1200,
        nettoInvestering: 4300,
        terugverdientijd: 7.8,
        besparing25Jaar: 13750,
        roi: "Rendabel"
      }
    },
    {
      situatie: "Klein huishouden (suboptimaal scenario)",
      kenmerken: [
        "2-persoons huishouden",
        "8 zonnepanelen (2.5 kWp)",
        "Verbruik 2.000 kWh/jaar",
        "Thuisbatterij 5 kWh",
        "Vast energiecontract",
        "Huidig: 800 kWh teruglevering/jaar"
      ],
      berekening: {
        investering: 4500,
        jaarlijkseBesparing: 320,
        subsidie: 800,
        nettoInvestering: 3700,
        terugverdientijd: 11.6,
        besparing25Jaar: 8000,
        roi: "Marginaal rendabel"
      }
    }
  ];

  const toekomstScenarios = [
    {
      jaar: "2025",
      salderen: "70%",
      impact: "Thuisbatterij wordt interessanter. Terugleveren levert nog steeds redelijk op, maar batterij begint lonenswaardig te worden bij hoog verbruik 's avonds."
    },
    {
      jaar: "2026",
      salderen: "40%",
      impact: "Batterij wordt sterk aangeraden. U krijgt nog maar 40% terug van teruggeleverde stroom, dus opslaan in batterij is veel voordeliger."
    },
    {
      jaar: "2027",
      salderen: "10%",
      impact: "Batterij bijna noodzakelijk. Zonder batterij gooit u overtollige zonnestroom bijna weg. Batterij voorkomt dit en maximaliseert uw besparing."
    },
    {
      jaar: "2028+",
      salderen: "0%",
      impact: "Batterij zeer rendabel. Zonder salderen is terugleveren niet meer interessant. Batterij zorgt dat u maximaal profiteert van uw zonnepanelen."
    }
  ];

  const checklist = [
    {
      categorie: "Zeer gunstig (batterij sterk aanbevolen)",
      criteria: [
        "15+ zonnepanelen met teruglevering > 2000 kWh/jaar",
        "Piekverbruik vooral 's avonds/nacht",
        "Dynamisch energiecontract of bereid over te stappen",
        "Elektrische auto aanwezig of gepland binnen 2 jaar",
        "Subsidie beschikbaar en batterij < €7.000",
        "Woont in Limburg (StayCool Airco kan installeren)"
      ],
      conclusie: "In uw situatie is een thuisbatterij zeer rendabel. Terugverdientijd waarschijnlijk 5-7 jaar met hoge besparingen."
    },
    {
      categorie: "Gunstig (batterij overwegen)",
      criteria: [
        "10-15 zonnepanelen met teruglevering 1000-2000 kWh/jaar",
        "Gemiddeld verbruiksprofiel",
        "Vast contract maar bereid te wisselen",
        "Geen EV maar wel interessant voor toekomst",
        "Batterij €7.000-8.500",
        "Interesse in energieonafhankelijkheid"
      ],
      conclusie: "Een thuisbatterij kan rendabel zijn. Terugverdientijd 7-10 jaar. Adviseer persoonlijk advies voor exacte berekening."
    },
    {
      categorie: "Beperkt gunstig (afwachten overwegen)",
      criteria: [
        "< 10 zonnepanelen met lage teruglevering",
        "Vooral overdag thuis met laag avondverbruik",
        "Vast contract en geen interesse in dynamisch",
        "Geen EV en niet verwacht",
        "Batterij > €9.000",
        "Beperkt budget beschikbaar"
      ],
      conclusie: "In uw huidige situatie is de batterij minder rendabel. Overweeg te wachten tot prijzen verder dalen of situatie verandert."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Wanneer is een Thuisbatterij Rendabel? Berekening en Advies | StayCool Airco"
        description="Ontdek of een thuisbatterij rendabel is voor uw situatie. Complete analyse met rekenvoorbeelden, criteria en terugverdientijd berekeningen."
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-wanneer-rendabel"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8" />
            <span className="text-blue-100 font-semibold">Rendement Analyse</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wanneer Loont een Thuisbatterij?
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Complete analyse om te bepalen of een thuisbatterij rendabel is voor uw specifieke situatie
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Euro className="w-5 h-5" />
              <span>Kosten-batenanalyse</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>ROI berekening</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Terugverdientijd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is een thuisbatterij de investering waard?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Een thuisbatterij kost tussen de €5.000 en €10.000, afhankelijk van capaciteit en merk. Dat is een aanzienlijke investering. De belangrijkste vraag is daarom: <strong>verdien ik deze investering terug en wanneer?</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Het antwoord hangt af van meerdere factoren die samen bepalen hoeveel u jaarlijks bespaart. In sommige situaties verdient een thuisbatterij zich binnen 5-6 jaar terug, in andere gevallen duurt dit 10+ jaar of is het (nog) niet rendabel.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Belangrijke ontwikkeling</h3>
                  <p className="text-gray-700">
                    Door het afbouwen van de salderingsregeling (tot 2027 volledig weg) en dalende batterijprijzen, wordt een thuisbatterij steeds rendabeler. Wat nu misschien marginaal is, kan over 1-2 jaar zeer interessant zijn. Timing is dus belangrijk!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rendabelheidsfactoren */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8 factoren die rendement bepalen</h2>
          <p className="text-gray-700 mb-8">
            De rendabiliteit van een thuisbatterij wordt bepaald door een combinatie van deze factoren:
          </p>

          <div className="space-y-4">
            {rendabelFactoren.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.factor}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        item.impact === 'Zeer hoog' ? 'bg-red-100 text-red-800' :
                        item.impact === 'Hoog' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        Impact: {item.impact}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{item.uitleg}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded-r">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-gray-900 text-sm">Optimaal</span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.optimaal}</p>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded-r">
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="w-4 h-4 text-red-600" />
                        <span className="font-semibold text-gray-900 text-sm">Suboptimaal</span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.suboptimaal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekenvoorbeelden */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Concrete rekenvoorbeelden</h2>
          <p className="text-gray-700 mb-8">
            Om het tastbaar te maken, hieronder drie realistische scenario's met berekeningen:
          </p>

          <div className="space-y-8">
            {rekenvoorbeelden.map((voorbeeld, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`p-6 ${
                  voorbeeld.berekening.roi === 'Zeer rendabel' ? 'bg-gradient-to-r from-green-600 to-green-700' :
                  voorbeeld.berekening.roi === 'Rendabel' ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                  'bg-gradient-to-r from-yellow-600 to-yellow-700'
                } text-white`}>
                  <h3 className="text-2xl font-bold mb-4">{voorbeeld.situatie}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {voorbeeld.kenmerken.map((kenmerk, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{kenmerk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Financiële berekening:</h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Investering thuisbatterij</span>
                      <span className="font-bold text-gray-900">€ {voorbeeld.berekening.investering.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="text-gray-700">Subsidie (ISDE)</span>
                      <span className="font-bold text-green-600">- € {voorbeeld.berekening.subsidie.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-2 border-blue-600">
                      <span className="font-bold text-gray-900">Netto investering</span>
                      <span className="font-bold text-blue-600 text-lg">€ {voorbeeld.berekening.nettoInvestering.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Jaarlijkse besparing</span>
                      <span className="font-bold text-green-600">€ {voorbeeld.berekening.jaarlijkseBesparing.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-gray-900">Terugverdientijd</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">{voorbeeld.berekening.terugverdientijd} jaar</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                      <div className="flex items-center gap-2 mb-1">
                        <Euro className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-gray-900">Besparing 25 jaar</span>
                      </div>
                      <p className="text-2xl font-bold text-green-600">€ {voorbeeld.berekening.besparing25Jaar.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className={`mt-4 p-4 rounded-lg ${
                    voorbeeld.berekening.roi === 'Zeer rendabel' ? 'bg-green-100 border-2 border-green-600' :
                    voorbeeld.berekening.roi === 'Rendabel' ? 'bg-blue-100 border-2 border-blue-600' :
                    'bg-yellow-100 border-2 border-yellow-600'
                  }`}>
                    <h5 className="font-bold text-gray-900 mb-2">Conclusie:</h5>
                    <p className={`font-semibold ${
                      voorbeeld.berekening.roi === 'Zeer rendabel' ? 'text-green-700' :
                      voorbeeld.berekening.roi === 'Rendabel' ? 'text-blue-700' :
                      'text-yellow-700'
                    }`}>
                      {voorbeeld.berekening.roi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Let op bij berekeningen
            </h3>
            <p className="text-gray-700 mb-2">
              Deze voorbeelden zijn gebaseerd op huidige energieprijzen en subsidies. Daadwerkelijke besparingen kunnen hoger of lager uitvallen door:
            </p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Veranderende energieprijzen (meestal stijgend)</li>
              <li>• Wijzigingen in verbruik (EV, warmtepomp, etc.)</li>
              <li>• Snellere of tragere batterijdegradatie dan verwacht</li>
              <li>• Veranderingen in subsidies en salderingsregeling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Toekomst scenario's */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Afbouw saldering: impact op rendement</h2>
          <p className="text-gray-700 mb-8">
            De salderingsregeling wordt gefaseerd afgebouwd tot 2027. Dit heeft grote impact op de rendabiliteit van thuisbatterijen:
          </p>

          <div className="space-y-4">
            {toekomstScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center gap-4 p-6">
                  <div className="bg-blue-600 text-white rounded-lg p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-bold">{scenario.jaar}</div>
                    <div className="text-xs mt-1">Salderen</div>
                    <div className="text-lg font-bold">{scenario.salderen}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{scenario.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">Conclusie timing</h3>
            <p className="text-gray-700 mb-3">
              Hoe dichter bij 2027, hoe rendabeler een thuisbatterij wordt. Als u nu al zonnepanelen heeft en regelmatig teruglevert, is <strong>2024-2025 een goed moment</strong> om te investeren:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <TrendingDown className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Batterijprijzen dalen nog steeds (10-15% per jaar)</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Salderingsvoordeel neemt af (batterij wordt aantrekkelijker)</span>
              </li>
              <li className="flex items-start gap-2">
                <Euro className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Subsidies mogelijk nog beschikbaar (ISDE)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is een thuisbatterij iets voor u? Checklist</h2>
          <p className="text-gray-700 mb-8">
            Bekijk in welke categorie uw situatie valt:
          </p>

          <div className="space-y-6">
            {checklist.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`p-5 ${
                  index === 0 ? 'bg-green-600' :
                  index === 1 ? 'bg-blue-600' :
                  'bg-yellow-600'
                } text-white`}>
                  <h3 className="text-xl font-bold">{item.categorie}</h3>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Herkenningspunten:</h4>
                  <ul className="space-y-2 mb-4">
                    {item.criteria.map((criterium, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          index === 0 ? 'text-green-600' :
                          index === 1 ? 'text-blue-600' :
                          'text-yellow-600'
                        }`} />
                        <span>{criterium}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`p-4 rounded-lg border-2 ${
                    index === 0 ? 'bg-green-50 border-green-600' :
                    index === 1 ? 'bg-blue-50 border-blue-600' :
                    'bg-yellow-50 border-yellow-600'
                  }`}>
                    <h5 className="font-bold text-gray-900 mb-1">Advies:</h5>
                    <p className="text-gray-700">{item.conclusie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra overwegingen */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Extra overwegingen naast rendement</h2>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Financieel rendement is belangrijk, maar er zijn meer redenen om voor een thuisbatterij te kiezen:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Energieonafhankelijkheid
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Met een thuisbatterij bent u minder afhankelijk van energieleveranciers en netbeheerders. Bij stroomstoringen (met noodstroomfunctie) blijft uw huis functioneren.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-600" />
                  Duurzaamheid
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Door meer van uw eigen groene zonnestroom te gebruiken, verkleint u uw CO2-footprint en draagt u bij aan energietransitie.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5 text-green-600" />
                  Woningwaarde
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Een energiezuinige woning met zonnepanelen en thuisbatterij wordt steeds waardevollere op de woningmarkt. Het is een investering in uw huis.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Toekomstbestendig
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Met elektrificatie (EV's, warmtepompen) neemt energieverbruik toe. Een batterij helpt deze transitie betaalbaar te houden.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Holistische benadering</h3>
              <p className="text-gray-700">
                Bij StayCool Airco kijken we niet alleen naar financieel rendement, maar naar uw totale energiesituatie en toekomstplannen. Soms is een thuisbatterij op papier marginaal rendabel, maar in combinatie met geplande EV-aanschaf of warmtepomp ineens zeer interessant. Wij denken graag met u mee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde informatie */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde informatie</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/thuisbatterijen" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Battery className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Thuisbatterijen overzicht</span>
              </div>
              <p className="text-gray-600 text-sm">Alle merken, specificaties en prijzen</p>
            </Link>

            <Link to="/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-werking-uitgelegd" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Hoe werkt een thuisbatterij?</span>
              </div>
              <p className="text-gray-600 text-sm">Technische uitleg voor beginners</p>
            </Link>

            <Link to="/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-installeren-stappen" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Installatie stappen</span>
              </div>
              <p className="text-gray-600 text-sm">Van locatie kiezen tot inbedrijfstelling</p>
            </Link>

            <Link to="/contact" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Persoonlijk advies</span>
              </div>
              <p className="text-gray-600 text-sm">Gratis berekening voor uw situatie</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Twijfelt u of een thuisbatterij rendabel is voor u?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Laat onze specialisten een gratis rendementberekening maken op basis van uw specifieke situatie
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Gratis rendementberekening
            </Link>
            <a
              href="tel:+31612345678"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Direct bellen
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            ✓ Persoonlijke analyse ✓ Geen verplichtingen ✓ Eerlijk advies ✓ Lokaal in Limburg
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijWanneerRendabel;
