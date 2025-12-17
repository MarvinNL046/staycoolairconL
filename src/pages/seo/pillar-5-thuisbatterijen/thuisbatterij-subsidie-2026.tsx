import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, CheckCircle, Gift, FileText, Calculator, Phone, TrendingUp, AlertCircle, Award, Building2 } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijSubsidie2026Page = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Subsidie 2026' }
  ];

  const usps = [
    {
      icon: <Gift className="h-12 w-12 text-yellow-500" />,
      title: "ISDE Subsidie 2026",
      description: "Tot €1.740 ISDE subsidie voor thuisbatterij in eigen woning"
    },
    {
      icon: <Building2 className="h-12 w-12 text-yellow-500" />,
      title: "Gemeentelijke Regelingen",
      description: "Extra subsidies mogelijk via uw gemeente tot €2.000"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "0% BTW Tarief",
      description: "Combineer subsidie met BTW-vrijstelling voor maximaal voordeel"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Wij Regelen Aanvraag",
      description: "StayCool verzorgt alle subsidieaanvragen volledig voor u"
    }
  ];

  const isdeDetails = [
    {
      title: "ISDE Thuisbatterij Subsidie 2026",
      amount: "€1.740",
      capacity: "Voor batterijen 2-10 kWh",
      requirements: "Combinatie met zonnepanelen verplicht",
      notes: "Bedrag geldt voor particuliere woningen. Budget: €150 miljoen (ruim beschikbaar)."
    },
    {
      title: "ISDE Uitbreiding Bestaande Batterij",
      amount: "€1.160",
      capacity: "Voor uitbreiding van bestaande batterij",
      requirements: "Minimaal 2 kWh extra capaciteit",
      notes: "Ook voor uitbreiding SMILE5 modulair systeem. Capaciteitsstapje meetellen."
    }
  ];

  const gemeenteSubsidies = [
    {
      gemeente: "Maastricht",
      subsidie: "Tot €1.500",
      details: "Duurzaamheidslening met 2% rente voor energieopslagsystemen",
      contactInfo: "Loket Duurzaam: 043-350 5555"
    },
    {
      gemeente: "Heerlen",
      subsidie: "Tot €1.000",
      details: "Subsidie energiebesparing particulieren, 25% van investering",
      contactInfo: "Gemeente Heerlen Duurzaamheid"
    },
    {
      gemeente: "Sittard-Geleen",
      subsidie: "Tot €750",
      details: "Groenfonds subsidie voor duurzame energie-investeringen",
      contactInfo: "014-2566"
    },
    {
      gemeente: "Venlo",
      subsidie: "Tot €1.200",
      details: "Energietransitie stimuleringsregeling voor batterijopslag",
      contactInfo: "077-359 3333"
    },
    {
      gemeente: "Roermond",
      subsidie: "Tot €800",
      details: "Duurzaamheidslening tegen gunstige voorwaarden",
      contactInfo: "0475-359 359"
    }
  ];

  const calculationExamples = [
    {
      scenario: "SMILE-B3 (2,9 kWh) met Maximale Subsidie",
      basePrice: "€5.500",
      btw: "-€955 (0% BTW)",
      isde: "-€1.740 (ISDE 2026)",
      gemeente: "-€750 (gem. subsidie)",
      totalSubsidy: "€3.445",
      finalPrice: "€2.055",
      savings: "63% korting!"
    },
    {
      scenario: "SMILE5 (5 kWh) met ISDE + BTW",
      basePrice: "€7.000",
      btw: "-€1.215 (0% BTW)",
      isde: "-€1.740 (ISDE 2026)",
      gemeente: "-€1.000 (gem. subsidie)",
      totalSubsidy: "€3.955",
      finalPrice: "€3.045",
      savings: "57% korting!"
    },
    {
      scenario: "SMILE5 (10 kWh) met Alle Voordelen",
      basePrice: "€9.000",
      btw: "-€1.562 (0% BTW)",
      isde: "-€1.740 (ISDE 2026)",
      gemeente: "-€1.500 (gem. subsidie)",
      totalSubsidy: "€4.802",
      finalPrice: "€4.198",
      savings: "53% korting!"
    }
  ];

  const applicationSteps = [
    {
      number: 1,
      title: "Aanvraag Voorbereiden",
      description: "Wij controleren of u in aanmerking komt voor ISDE en gemeentelijke subsidies. We verzamelen alle benodigde documenten.",
      duration: "1-2 werkdagen"
    },
    {
      number: 2,
      title: "Offerte met Subsidieberekening",
      description: "U ontvangt gedetailleerde offerte met exacte berekening van BTW-voordeel, ISDE subsidie en gemeentelijke regelingen.",
      duration: "Direct beschikbaar"
    },
    {
      number: 3,
      title: "ISDE Aanvraag Indienen",
      description: "Na akkoord dienen wij ISDE subsidieaanvraag in bij RVO. U ontvangt binnen 2-4 weken toezegging.",
      duration: "2-4 weken wachttijd"
    },
    {
      number: 4,
      title: "Gemeentelijke Subsidie Aanvragen",
      description: "Parallel vragen we gemeentelijke subsidie aan. Procedures verschillen per gemeente (4-8 weken).",
      duration: "4-8 weken"
    },
    {
      number: 5,
      title: "Installatie Plannen",
      description: "Na subsidietoezegging plannen we installatie. Thuisbatterij binnen 3-4 weken geïnstalleerd.",
      duration: "3-4 weken"
    },
    {
      number: 6,
      title: "Subsidie Uitbetaling",
      description: "Na oplevering dienen we uitbetalingsverzoek in. ISDE: 6-8 weken. Gemeente: 8-12 weken uitbetaald.",
      duration: "6-12 weken"
    }
  ];

  const requirements = [
    {
      title: "Voorwaarden ISDE Subsidie 2026",
      items: [
        "Particuliere woning waar u permanent woont (hoofdverblijf)",
        "Combinatie met zonnepanelen verplicht (bestaand of nieuw)",
        "Batterij minimaal 2 kWh capaciteit, maximaal 10 kWh subsidie",
        "Installatie door erkende installateur (StayCool is erkend)",
        "Budget beschikbaar (op=op, maar 2026 budget is ruim bemeten)",
        "Aanvraag indienen vóór installatie (wij regelen dit)"
      ]
    },
    {
      title: "Voorwaarden Gemeentelijke Subsidies",
      items: [
        "Inwoner van betreffende gemeente met vaste woon-/verblijfplaats",
        "Eigenaar of huurder met schriftelijke toestemming verhuurder",
        "Subsidie aanvragen vóór start werkzaamheden",
        "Installatie voldoet aan gemeentelijke duurzaamheidseisen",
        "Soms inkomensgrens van toepassing (check bij uw gemeente)",
        "Vaak kan ISDE en gemeentesubsidie gecombineerd worden"
      ]
    }
  ];

  const faqs = [
    {
      question: "Hoeveel ISDE subsidie krijg ik in 2026 voor een thuisbatterij?",
      answer: "In 2026 bedraagt de ISDE subsidie €1.740 voor thuisbatterijen met capaciteit van 2-10 kWh in combinatie met zonnepanelen. Bij uitbreiding van een bestaande batterij is het €1.160. Dit bedrag wordt na installatie uitbetaald door RVO (Rijksdienst voor Ondernemend Nederland). De subsidie geldt voor particuliere woningen en is onafhankelijk van de aanschafprijs - u krijgt een vast bedrag per categorie."
    },
    {
      question: "Kan ik ISDE subsidie combineren met gemeentelijke subsidies?",
      answer: "Ja, in vrijwel alle gevallen kunt u ISDE subsidie combineren met gemeentelijke regelingen. Veel Limburgse gemeenten (Maastricht, Heerlen, Venlo, Sittard-Geleen) bieden aanvullende subsidies van €750 tot €1.500. In totaal kunt u daardoor €2.490 tot €3.240 aan subsidies ontvangen, bovenop de BTW-vrijstelling van 21%. Wij controleren voor uw situatie welke combinaties mogelijk zijn."
    },
    {
      question: "Wanneer wordt de subsidie uitbetaald?",
      answer: "De ISDE subsidie wordt 6-8 weken na oplevering en indiening van het uitbetalingsverzoek overgemaakt door RVO. Gemeentelijke subsidies duren vaak wat langer: 8-12 weken. U betaalt eerst de volledige investering (minus BTW-voordeel) en ontvangt later de subsidie teruggestort. Sommige gemeenten werken met voorschotten. Wij helpen u met cashflowplanning en eventuele financieringsopties."
    },
    {
      question: "Is er genoeg ISDE budget in 2026?",
      answer: "Voor 2026 is €150 miljoen ISDE budget beschikbaar voor energieopslagsystemen - dit is ruim bemeten. In 2025 was het budget binnen 4 maanden uitgeput, dus verwacht wordt dat 2026 budget tot Q3/Q4 beschikbaar blijft. Wij adviseren aanvraag in Q1 of Q2 2026 in te dienen voor zekerheid. Bij vroege aanvraag bent u gegarandeerd van subsidie, mits u aan voorwaarden voldoet."
    },
    {
      question: "Moet ik zelf de subsidie aanvragen of doet StayCool dat?",
      answer: "StayCool regelt de volledige subsidieaanvraag voor u - zowel ISDE als gemeentelijke subsidies. Wij verzamelen alle documenten, vullen formulieren in, communiceren met RVO en gemeentes, en zorgen voor correcte opleverdocumentatie. U hoeft alleen de offerte te accorderen en formulieren te ondertekenen. Onze ervaring zorgt voor snellere behandeling en hogere slagingskans. Deze service is kosteloos inbegrepen."
    },
    {
      question: "Kan ik subsidie krijgen als ik al zonnepanelen heb?",
      answer: "Ja, absoluut! ISDE subsidie 2026 geldt ook voor thuisbatterijen die later worden toegevoegd aan bestaande zonnepanelen. De batterij moet wel worden gecombineerd met een zonnepanelensysteem op hetzelfde adres. Het maakt niet uit wanneer de zonnepanelen zijn geïnstalleerd - zelfs systemen van 10+ jaar oud komen in aanmerking. Ook het 0% BTW-tarief geldt voor batterijen bij bestaande zonnepanelen."
    },
    {
      question: "Wat gebeurt er als het ISDE budget op is?",
      answer: "Als het ISDE budget op is, worden aanvragen op wachtlijst geplaatst en behandeld zodra nieuw budget beschikbaar komt (meestal volgend jaar). Aanvragen worden behandeld op volgorde van binnenkomst. Daarom adviseren wij vroeg in 2026 aan te vragen. Gemeentelijke subsidies hebben meestal aparte budgetten en zijn niet afhankelijk van ISDE. Ook zonder ISDE blijft de combinatie van 0% BTW + gemeentesubsidie zeer aantrekkelijk."
    },
    {
      question: "Zijn er inkomenseisen voor thuisbatterij subsidies?",
      answer: "Voor ISDE subsidie zijn geen inkomenseisen - iedereen met particuliere woning komt in aanmerking. Sommige gemeentelijke regelingen hebben wel inkomenseisen of geven voorrang aan lagere inkomens. Bijvoorbeeld: Maastricht hanteert geen inkomensgrens, Heerlen geeft extra subsidie bij huishoudinkomen onder modaal. Wij checken voor uw gemeente of inkomenseisen van toepassing zijn en adviseren over optimale subsidiecombinatie."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Subsidie 2026 Limburg | ISDE + Gemeente | StayCool Airco"
        description="Thuisbatterij subsidie 2026 ✓ ISDE €1.740 + gemeente tot €2.000 ✓ Combineer met 0% BTW ✓ Wij regelen aanvraag ✓ Tot 63% korting mogelijk!"
      />

      <SchemaMarkup
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Subsidie 2026: Tot €3.240 Subsidie + 0% BTW
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Profiteer in 2026 van ISDE subsidie (€1.740), gemeentelijke regelingen (tot €2.000) én 0% BTW-tarief. Maximaal voordeel: tot 63% korting op uw thuisbatterij!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Subsidiecheck 2026
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Totale Korting
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Budget 2026: €150 miljoen beschikbaar</p>
                <p className="text-sm">
                  Verwacht wordt dat budget tot Q3/Q4 2026 toereikend is. Adviseer: aanvraag Q1-Q2 2026 voor zekerheid.
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
              Maximaal Financieel Voordeel 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combineer ISDE, gemeentelijke subsidies en BTW-vrijstelling
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

      {/* ISDE Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            ISDE Subsidie Thuisbatterijen 2026
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            De ISDE (Investeringssubsidie Duurzame Energie) is een rijkssubsidie voor energieopslagsystemen. Voor 2026 zijn de bedragen als volgt vastgesteld:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {isdeDetails.map((detail, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <Gift className="h-10 w-10 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{detail.title}</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">{detail.amount}</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Capaciteit:</strong> {detail.capacity}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Vereiste:</strong> {detail.requirements}</span>
                  </div>
                  <div className="bg-yellow-50 rounded p-3 mt-4">
                    <p className="text-sm text-gray-600">{detail.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Belangrijk: Volgorde van Aanvraag</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span>ISDE aanvraag indienen <strong>vóór installatie</strong> (verplicht)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span>Na toezegging: installatie binnen 12 maanden uitvoeren</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span>Na oplevering: uitbetalingsverzoek indienen met documentatie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span>Uitbetaling: 6-8 weken na goedgekeurd uitbetalingsverzoek</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gemeentelijke Subsidies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Gemeentelijke Subsidies Limburg
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Veel Limburgse gemeenten bieden aanvullende subsidies voor thuisbatterijen. Deze kunt u meestal combineren met ISDE subsidie:
          </p>

          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-yellow-500 text-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Gemeente</th>
                    <th className="px-6 py-4 text-left font-bold">Subsidie</th>
                    <th className="px-6 py-4 text-left font-bold">Details</th>
                    <th className="px-6 py-4 text-left font-bold">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {gemeenteSubsidies.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-bold text-gray-900">{item.gemeente}</td>
                      <td className="px-6 py-4 font-bold text-green-600">{item.subsidie}</td>
                      <td className="px-6 py-4 text-gray-600">{item.details}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.contactInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Wijzigingen in Gemeentelijke Regelingen</h3>
            <p className="text-gray-700 mb-3">
              Gemeentelijke subsidies worden jaarlijks herzien. Bedragen en voorwaarden kunnen per jaar wijzigen. Wij checken voor u de actuele regelingen in uw gemeente en adviseren over optimale subsidiecombinatie.
            </p>
            <p className="text-gray-700">
              <strong>Let op:</strong> Ook gemeenten hanteren vaak "op=op" beleid. Vroeg aanvragen vergroot uw kans op toewijzing.
            </p>
          </div>
        </div>
      </section>

      {/* Calculation Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Rekenvoorbeelden: Totale Korting 2026
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Door slimme combinatie van BTW-vrijstelling, ISDE en gemeentelijke subsidies bereikt u 50-63% korting:
          </p>

          <div className="space-y-6">
            {calculationExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{example.scenario}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Adviesprijs inclusief BTW:</span>
                      <span className="font-bold text-gray-900">{example.basePrice}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">BTW-voordeel (0% tarief):</span>
                      <span className="font-bold text-green-600">{example.btw}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">ISDE subsidie 2026:</span>
                      <span className="font-bold text-green-600">{example.isde}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Gemeentelijke subsidie:</span>
                      <span className="font-bold text-green-600">{example.gemeente}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 flex flex-col justify-center">
                    <div className="text-center mb-4">
                      <p className="text-gray-700 text-lg mb-2">Totaal voordeel:</p>
                      <p className="text-4xl font-bold text-green-600 mb-2">{example.totalSubsidy}</p>
                      <p className="text-2xl font-bold text-yellow-600">{example.savings}</p>
                    </div>
                    <div className="border-t-2 border-yellow-300 pt-4 mt-4">
                      <p className="text-gray-700 text-center mb-2">Uw netto investering:</p>
                      <p className="text-3xl font-bold text-gray-900 text-center">{example.finalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Belangrijke Opmerkingen:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>BTW-voordeel geldt direct bij aankoop (u betaalt meteen 21% minder)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>ISDE subsidie wordt 6-8 weken na installatie uitbetaald</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Gemeentelijke subsidie: uitbetaling 8-12 weken (verschilt per gemeente)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Financiering mogelijk: betaal in termijnen, ontvang later subsidies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Voorwaarden Subsidies 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-yellow-500 mr-3" />
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Aanvraagproces: Zo Regelen Wij Het Voor U
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            StayCool verzorgt de volledige subsidieaanvraag - u hoeft alleen de formulieren te ondertekenen:
          </p>

          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-md">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="text-sm text-yellow-600 font-semibold">⏱ {step.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Totale Doorlooptijd</h3>
            <p className="text-gray-700 mb-3">
              Van aanvraag tot volledige uitbetaling: <strong>12-16 weken</strong>. U kunt direct na ISDE-toezegging (2-4 weken) starten met installatie. Volledige subsidieuitbetaling volgt later.
            </p>
            <p className="text-gray-700">
              <strong>Tip:</strong> Start vroeg in 2026 voor optimale planning en budgetzekerheid. Wij houden u op de hoogte van alle stappen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Check Uw Subsidierecht 2026 - Gratis
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij controleren voor u welke subsidies beschikbaar zijn en berekenen het totale voordeel. Geheel vrijblijvend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Subsidiecheck
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
            Veelgestelde Vragen Subsidie 2026
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
            Meer Financiële Informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BTW Teruggave</h3>
              <p className="text-gray-600 mb-4">
                Alles over 0% BTW-tarief sinds 2023 en 21% besparing.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-financieren"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Financieren</h3>
              <p className="text-gray-600 mb-4">
                Betaal in termijnen, ontvang later subsidies terug.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-besparing-berekenen"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Besparing Berekenen</h3>
              <p className="text-gray-600 mb-4">
                Bereken uw energiebesparing met voorbeelden.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu en Profiteer van Maximale Subsidies 2026
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Wij regelen alle aanvragen en zorgen voor snelle behandeling. Budget beschikbaar, maar op=op. Wacht niet te lang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Totale Korting
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Award className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijSubsidie2026Page;
