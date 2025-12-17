import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, X, Euro, Calendar, TrendingUp, Shield, Phone, Calculator, Award, CreditCard } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijHurenVsKopenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij Huren of Kopen' }
  ];

  const comparisonFeatures = [
    {
      feature: "Initiële kosten",
      huren: "€0 aanschaf, wel borgsom",
      kopen: "€6.000-12.000 aanschaf",
      winner: "huren"
    },
    {
      feature: "Maandelijkse kosten (10 kWh, 10 jaar)",
      huren: "€80-120/maand = €9.600-14.400 totaal",
      kopen: "€0/maand = €6.000-12.000 totaal",
      winner: "kopen"
    },
    {
      feature: "Eigendom na 10 jaar",
      huren: "Niets (verhuurder eigenaar)",
      kopen: "Volledig eigendom",
      winner: "kopen"
    },
    {
      feature: "Onderhoud & reparaties",
      huren: "Inbegrepen (verhuurder betaalt)",
      kopen: "Eigen verantwoordelijkheid (garantie 10 jaar)",
      winner: "huren"
    },
    {
      feature: "BTW teruggave",
      huren: "Niet van toepassing (huur)",
      kopen: "✓ 0% BTW besparing (€1.500-2.500)",
      winner: "kopen"
    },
    {
      feature: "Subsidies",
      huren: "Beperkt (verhuurder profiteert)",
      kopen: "✓ Alle subsidies voor u",
      winner: "kopen"
    },
    {
      feature: "Flexibiliteit",
      huren: "Contractperiode binding (5-15 jaar)",
      kopen: "Geen binding, eigen keuzes",
      winner: "kopen"
    },
    {
      feature: "Upgrade mogelijkheden",
      huren: "Beperkt (afhankelijk verhuurder)",
      kopen: "Volledig flexibel (uitbreiden wanneer u wilt)",
      winner: "kopen"
    },
    {
      feature: "Totale kosten 15 jaar",
      huren: "€14.400-21.600 (betaalt verhuurder winst)",
      kopen: "€6.000-12.000 (alle besparing voor u)",
      winner: "kopen"
    },
    {
      feature: "Geschikt voor",
      huren: "Korte termijn (&lt;5 jaar), geen budget",
      kopen: "Lange termijn (&gt; jaar), beste ROI",
      winner: "tie"
    }
  ];

  const rekenvoorbeeld = {
    huren: {
      titel: "Huren - AlphaESS SMILE5 (5 kWh) - 10 jaar",
      maandkosten: 75,
      aanschaf: 0,
      totaal10jaar: 9000,
      eigendom: "Nee - verhuurder eigenaar",
      btwVoordeel: 0,
      eindtotaal: 9000
    },
    kopen: {
      titel: "Kopen - AlphaESS SMILE5 (5 kWh) - 10 jaar",
      maandkosten: 0,
      aanschaf: 7500,
      totaal10jaar: 0,
      eigendom: "Ja - volledig eigendom",
      btwVoordeel: -1500,
      eindtotaal: 6000
    }
  };

  const scenarios = [
    {
      title: "Kies Huren als...",
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      conditions: [
        "U minder dan 5 jaar in uw woning blijft",
        "Geen budget voor aanschaf (€6.000-12.000) beschikbaar",
        "U geen risico op onderhoud/reparaties wilt",
        "Zorgeloze all-in oplossing prioriteit heeft",
        "U experimenteert voordat u koopt (testtijdvak)",
        "BTW-teruggave en subsidies niet toegankelijk zijn"
      ],
      warning: "Let op: Totale kosten 50-100% hoger dan kopen over 10-15 jaar"
    },
    {
      title: "Kies Kopen als...",
      icon: <Euro className="h-8 w-8 text-green-500" />,
      conditions: [
        "U 8+ jaar in uw woning blijft (standaard ROI periode)",
        "Budget voor aanschaf beschikbaar of financiering mogelijk",
        "Maximale besparing en laagste totale kosten prioriteit hebben",
        "U profiteert van 0% BTW (€1.500-2.500 besparing)",
        "Eigendom en flexibiliteit (uitbreiden, aanpassen) belangrijk zijn",
        "U alle subsidies en EPEX opbrengsten wilt behouden"
      ],
      warning: "Beste keuze voor 95% van huishoudens met langetermijn perspectief"
    }
  ];

  const faqs = [
    {
      question: "Waarom is huren duurder dan kopen?",
      answer: "Bij huren betaalt u niet alleen voor de batterij, maar ook voor de winst van de verhuurder, financieringskosten, administratie, en risico-opslag. Gemiddeld betaalt u €80-120/maand voor een 5-10 kWh systeem. Over 10 jaar is dit €9.600-14.400, terwijl kopen €6.000-12.000 kost (na BTW-teruggave). Het verschil (€3.000-6.000) is de kostprijs van gemak en geen aanschafkosten. Voor lange termijn (&gt; jaar) is kopen altijd goedkoper."
    },
    {
      question: "Wat gebeurt er na afloop van het huurcontract?",
      answer: "Dit hangt af van uw huurovereenkomst. Opties zijn: (1) Doorhuren tegen lagere maandprijs (batterij is afgeschreven), (2) Batterij overnemen tegen restwaarde (meestal €1.000-3.000 na 10 jaar), (3) Contract beëindigen en batterij laten verwijderen (verhuurder eigenaar), (4) Upgraden naar nieuwer systeem tegen nieuwe huurvoorwaarden. Belangrijkste nadeel: na 10 jaar huren (€9.000-14.000 betaald) bent u nog steeds geen eigenaar. Bij kopen bent u na 6-10 jaar quitte én eigenaar."
    },
    {
      question: "Is huren interessant voor korte termijn?",
      answer: "Ja, voor zeer korte termijn (&lt;5 jaar) kan huren aantrekkelijk zijn. Voorbeeld: u verhuist binnen 3 jaar. Huren kost €75/maand x 36 maanden = €2.700. Kopen kost €6.000-7.000, maar u krijgt mogelijk €3.000-4.000 terug bij verkoop (50-70% restwaarde). Netto verschil is klein. Voordeel huren: geen gedoe bij verhuizing (verhuurder regelt). Nadeel: u mist 3 jaar besparingen (€1.500-2.500) en BTW-voordeel. Voor &gt; jaar is kopen altijd voordeliger."
    },
    {
      question: "Zit onderhoud bij huren inbegrepen?",
      answer: "Ja, bij de meeste huurcontracten is onderhoud en reparatie inbegrepen. De verhuurder is verantwoordelijk voor defecten, garantieclaims, en vervangen onderdelen. Dit klinkt prettig, maar AlphaESS batterijen hebben 10 jaar garantie en zijn praktisch onderhoudsvrij (€0 onderhoudskosten). In de praktijk valt er weinig te repareren. U betaalt dus via huurprijs voor service die u waarschijnlijk niet nodig heeft. Bij kopen heeft u dezelfde 10 jaar garantie zonder extra kosten."
    },
    {
      question: "Kan ik BTW terugvragen bij huren?",
      answer: "Nee, de 0% BTW regeling geldt alleen bij aanschaf (kopen) van een thuisbatterij gecombineerd met zonnepanelen. Bij huren betaalt u gewoon 21% BTW over uw maandbedrag. Voorbeeld: €75/maand excl. BTW = €90,75 incl. BTW. Over 10 jaar betaalt u €1.890 extra BTW die u niet kunt terugvragen. Bij kopen bespaart u juist €1.500-2.500 door 0% BTW. Dit BTW-verschil alleen al maakt huren €3.000-4.500 duurder over 10 jaar."
    },
    {
      question: "Wat als ik het huurcontract vroegtijdig wil beëindigen?",
      answer: "Vroegtijdige beëindiging is vaak kostbaar. De meeste contracten hebben een minimale looptijd (5-10 jaar) met boetes bij vroegtijdig stoppen: meestal 50-80% van resterende maandbetalingen als afkoopsom. Voorbeeld: na 5 jaar stoppen met 10-jarig contract kost u 60 maanden x €75 x 70% boete = €3.150 afkoopsom. Bij kopen heeft u deze binding niet - de batterij is uw eigendom en gaat mee bij verhuizing, of wordt verkocht met de woning."
    },
    {
      question: "Kan ik een gehuurde batterij uitbreiden?",
      answer: "Dit is afhankelijk van de verhuurder en moeilijker dan bij eigendom. Bij AlphaESS kopen kunt u flexibel uitbreiden: SMILE-B3 (2,9 kWh) → SMILE5 (5-15 kWh) wanneer u wilt. Bij huren moet u onderhandelen met verhuurder over tweede module/systeem, wat vaak betekent: nieuw contract, hogere maandkosten, verlengde binding. U mist de flexibiliteit die eigendom biedt. Voor gezinnen met groeiende energiebehoefte (EV, uitbreiding, warmtepomp) is kopen daarom veel handiger."
    },
    {
      question: "Wat is de best ROI: huren of kopen?",
      answer: "Kopen heeft verreweg de beste ROI. Voorbeeld 10 kWh systeem over 15 jaar: (1) Kopen: €10.000 aanschaf (na BTW) - €15.000 besparing = €5.000 netto voordeel + eigendom. ROI: 150% na 15 jaar. (2) Huren: €18.000 totale huurkosten - €15.000 besparing = -€3.000 netto verlies + geen eigendom. ROI: -17%. Het verschil is €8.000+ over 15 jaar. Alleen bij zeer korte termijn (<4 jaar) is huren verdedigbaar, maar zelfs dan mist u BTW-voordelen en subsidies."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Huren of Kopen 2026? | Voor- en Nadelen | Kosten Vergelijking | Limburg"
        description="Thuisbatterij huren of kopen? ✓ Kosten vergelijking ✓ Voor- en nadelen ✓ ROI berekening ✓ BTW ✓ Eerlijk advies | StayCool Airco Limburg"
      />

      <SchemaMarkup
        type="ComparisonTable"
        data={{
          "@type": "ComparisonTable",
          name: "Thuisbatterij Huren vs Kopen Vergelijking",
          description: "Vergelijking tussen huren en kopen van een thuisbatterij op basis van kosten, voordelen, en ROI over 10-15 jaar.",
          items: [
            {
              "@type": "Offer",
              name: "Thuisbatterij Huren",
              description: "Maandelijkse huur zonder aanschafkosten, inclusief onderhoud"
            },
            {
              "@type": "Offer",
              name: "Thuisbatterij Kopen",
              description: "Eenmalige aanschaf met eigendom, BTW-voordeel en beste ROI"
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Huren of Kopen: Wat is Slimmer in 2026?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Eerlijke vergelijking tussen huren en kopen van een thuisbatterij. Kosten, voor- en nadelen, ROI en BTW-regels objectief uitgelegd.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Koop ROI
            </Link>
          </div>

          <div className="flex items-center gap-4 text-yellow-900">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span>Onafhankelijk Advies</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Eerlijke Cijfers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-12 bg-green-50 border-b-4 border-green-500">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            🎯 Direct Antwoord: Kopen Wint (in 95% van Gevallen)
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            <strong>Kopen</strong> is 40-60% goedkoper over 10-15 jaar, u profiteert van 0% BTW (€1.500-2.500 besparing), alle subsidies zijn voor u, en u bent volledig eigenaar. <strong>Huren</strong> is alleen zinvol bij zeer korte termijn (&lt;5 jaar) of als u absoluut geen aanschafbudget heeft.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kopen (10 kWh, 15 jaar):</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Aanschaf: €10.000 (na BTW)</li>
                  <li>✓ Besparing: €15.000-18.000</li>
                  <li>✓ Netto voordeel: <strong className="text-green-600">€5.000-8.000</strong></li>
                  <li>✓ Eigendom: Ja, 100%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Huren (10 kWh, 15 jaar):</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>× Totale huur: €18.000-21.600</li>
                  <li>× Besparing: €15.000-18.000</li>
                  <li>× Netto voordeel: <strong className="text-red-600">-€3.000 tot €0</strong></li>
                  <li>× Eigendom: Nee, verhuurder</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-700 font-semibold">
              Verschil: €8.000-11.000 voordeel voor kopen over 15 jaar
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Huren vs Kopen: Alle Aspecten Vergeleken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Objectieve vergelijking zonder marketing praatjes
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Aspect</th>
                    <th className="px-6 py-4 text-left">Huren</th>
                    <th className="px-6 py-4 text-left">Kopen</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className={`px-6 py-4 ${item.winner === 'huren' ? 'bg-blue-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'huren' && <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />}
                          {item.huren}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${item.winner === 'kopen' ? 'bg-green-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'kopen' && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                          {item.kopen}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6">
            <p className="text-gray-700">
              <strong>Conclusie:</strong> Kopen wint op totale kosten, eigendom, flexibiliteit, BTW-voordeel en ROI. Huren wint alleen op lage initiële kosten en zorgeloos onderhoud (dat toch al gratis is via garantie).
            </p>
          </div>
        </div>
      </section>

      {/* Calculation Example Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Rekenvoorbeeld: Huren vs Kopen (10 jaar)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <Calendar className="h-10 w-10 text-blue-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Huren</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Aanschafkosten:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.huren.aanschaf}</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Maandkosten:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.huren.maandkosten}/maand</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Totaal 10 jaar:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.huren.totaal10jaar}</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">BTW voordeel:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.huren.btwVoordeel}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-blue-400">
                  <span className="text-lg font-bold text-gray-900">Totale kosten:</span>
                  <span className="text-xl font-bold text-red-600">€{rekenvoorbeeld.huren.eindtotaal}</span>
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Eigendom:</strong> {rekenvoorbeeld.huren.eigendom}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-8 shadow-md border-2 border-green-400">
              <div className="flex items-center mb-6">
                <Euro className="h-10 w-10 text-green-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Kopen</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Aanschafkosten:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.kopen.aanschaf}</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Maandkosten:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.kopen.maandkosten}/maand</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Totaal 10 jaar:</span>
                  <span className="font-semibold text-gray-900">€{rekenvoorbeeld.kopen.totaal10jaar}</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">BTW voordeel:</span>
                  <span className="font-semibold text-green-600">-€{Math.abs(rekenvoorbeeld.kopen.btwVoordeel)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-green-400">
                  <span className="text-lg font-bold text-gray-900">Totale kosten:</span>
                  <span className="text-xl font-bold text-green-600">€{rekenvoorbeeld.kopen.eindtotaal}</span>
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Eigendom:</strong> {rekenvoorbeeld.kopen.eigendom}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Verschil na 10 jaar</h3>
            <p className="text-4xl font-bold text-green-600 mb-2">€3.000 voordeliger</p>
            <p className="text-gray-700">
              Kopen bespaart u €3.000 over 10 jaar (33% goedkoper). Na 15 jaar: €6.000-8.000 voordeliger.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Wanneer Huren, Wanneer Kopen?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {scenario.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{scenario.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {scenario.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
                {scenario.warning && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Let op:</strong> {scenario.warning}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Diepgaande Analyse: Waarom Kopen (Bijna) Altijd Slimmer Is
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. De Echte Kosten van Huren</h3>
            <p className="text-lg text-gray-600 mb-6">
              Huren lijkt aantrekkelijk: €0 aanschaf, alleen €75-120/maand betalen. Maar deze maandprijs bevat:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>Afschrijving batterij (€50-70/maand)</li>
              <li>Winst verhuurder (€15-25/maand, 20-30% marge)</li>
              <li>Financieringskosten (€5-10/maand, rente 5-8%)</li>
              <li>Administratie en service (€5-10/maand)</li>
              <li>BTW 21% (€13-20/maand, niet terugvraagbaar)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              Over 10 jaar betaalt u €9.000-14.400 voor een batterij die €6.000-12.000 kost. Het verschil (€3.000-4.000) is de kostprijs van 'gemak'.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. BTW-Voordeel: Kopen Bespaart €1.500-2.500</h3>
            <p className="text-lg text-gray-600 mb-6">
              Sinds 2023 geldt 0% BTW op thuisbatterijen gecombineerd met zonnepanelen bij aanschaf (kopen). Dit bespaart u 21% op de investering:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>SMILE5 (5 kWh): €7.500 → €6.200 (€1.300 besparing)</li>
              <li>SMILE-T10 (10 kWh): €12.000 → €9.900 (€2.100 besparing)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              Bij huren betaalt u gewoon 21% BTW over uw maandbedrag - geen teruggave mogelijk. Dit BTW-verschil alleen al maakt kopen €1.500-2.500 voordeliger.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Eigendom en Flexibiliteit</h3>
            <p className="text-lg text-gray-600 mb-6">
              Bij kopen bent u eigenaar met alle voordelen:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Uitbreiden wanneer u wilt:</strong> SMILE-B3 → SMILE5 → 10-15 kWh zonder toestemming verhuurder</li>
              <li><strong>Meeverhuizen:</strong> Batterij is van u, neem mee of verkoop met woning</li>
              <li><strong>Alle EPEX opbrengsten:</strong> €200-400/jaar extra voor u, niet voor verhuurder</li>
              <li><strong>Geen binding:</strong> Geen contractperiode, geen vroegtijdige beëindigingskosten</li>
              <li><strong>Restwaarde:</strong> Na 10 jaar nog €1.500-3.000 waarde, bij huren €0</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Het Onderhoudsmythe</h3>
            <p className="text-lg text-gray-600 mb-6">
              Verhuurders promoten 'zorgeloos onderhoud inbegrepen'. Maar AlphaESS batterijen hebben:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>10 jaar fabrieksgarantie (gratis reparaties/vervangen)</li>
              <li>Onderhoudsvrij systeem (€0 jaarlijks onderhoud)</li>
              <li>Faalpercentage &lt;1% (zeer betrouwbaar)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              In de praktijk heeft u tijdens de eerste 10 jaar geen onderhoudskosten - met of zonder huurcontract. U betaalt dus via huur voor service die u toch al gratis krijgt.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Wanneer is Huren Wel Zinvol?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Huren kan zinvol zijn in zeer specifieke situaties:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>✓ U blijft <strong>minder dan 5 jaar</strong> in uw woning (verhuis, tijdelijk)</li>
                <li>✓ Absoluut geen budget voor aanschaf én geen financiering mogelijk</li>
                <li>✓ U wilt experimenteren voordat u definitief investeert (testfase 1-2 jaar)</li>
                <li>✓ Zakelijk: operationele lease gewenst voor belastingvoordeel</li>
              </ul>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Voor 95% van particuliere huishoudens met langetermijn perspectief (8+ jaar) is kopen de slimste keuze.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wilt U Kopen? Wij Helpen Met Financiering
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Geen budget? Wij bieden betaalbare financieringsopties met lage rente. Beter dan huren, zelfde maandbedrag, wel eigenaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Huren vs Kopen
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            De Slimme Keuze: Kopen Met 0% BTW
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS batterijen vanaf €6.000 (na BTW). 6-10 jaar terugverdientijd. Volledig eigendom. Alle subsidies voor u.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Uw ROI
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijHurenVsKopenPage;
