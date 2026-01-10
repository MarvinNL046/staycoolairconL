import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, CheckCircle, X, Euro, Shield, Phone, Calculator, Award, Home, Building2 } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const Thuisbatterij1FaseVs3FasePage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: '1-Fase vs 3-Fase Thuisbatterij' }
  ];

  const comparisonFeatures = [
    {
      feature: "Max. vermogen",
      phase1: "5-8 kW (25-35A)",
      phase3: "10-15 kW (3x 25A)",
      winner: "phase3"
    },
    {
      feature: "Geschikt voor",
      phase1: "Kleine/middelgrote huishoudens",
      phase3: "Grote huishoudens + zakelijk",
      winner: "tie"
    },
    {
      feature: "Prijs",
      phase1: "€6.000-9.000 (5-8 kWh)",
      phase3: "€9.000-12.000 (10 kWh)",
      winner: "phase1"
    },
    {
      feature: "Installatie complexiteit",
      phase1: "Eenvoudig",
      phase3: "Complexer (3 fasen verdelen)",
      winner: "phase1"
    },
    {
      feature: "Belasting verdeling",
      phase1: "Alles op 1 fase",
      phase3: "Verdeeld over 3 fasen",
      winner: "phase3"
    },
    {
      feature: "EV laden",
      phase1: "Max 7 kW (langzaam)",
      phase3: "Tot 11-22 kW (snel)",
      winner: "phase3"
    },
    {
      feature: "Warmtepomp",
      phase1: "Beperkt (klein vermogen)",
      phase3: "Optimaal (hoog vermogen)",
      winner: "phase3"
    },
    {
      feature: "Overbelasting risico",
      phase1: "Hoger (alles op 1 fase)",
      phase3: "Lager (verdeeld)",
      winner: "phase3"
    },
    {
      feature: "Terugverdientijd",
      phase1: "7-10 jaar",
      phase3: "8-11 jaar (hogere investering)",
      winner: "phase1"
    }
  ];

  const scenarios1Fase = [
    {
      title: "2-3 Persoons Huishouden",
      verbruik: "3.000-5.000 kWh/jaar",
      description: "Klein gezin zonder elektrische auto of warmtepomp",
      recommendation: "SMILE-B3 (2,9 kWh) of SMILE5 (5 kWh)"
    },
    {
      title: "3-4 Persoons Huishouden",
      verbruik: "4.000-6.000 kWh/jaar",
      description: "Gemiddeld gezin met standaard verbruikers",
      recommendation: "SMILE5 (5-10 kWh uitbreidbaar)"
    },
    {
      title: "Appartement/Stadswoning",
      verbruik: "2.500-4.000 kWh/jaar",
      description: "Kleinere woning met 1-fase aansluiting",
      recommendation: "SMILE-B3 (2,9 kWh) - compact"
    }
  ];

  const scenarios3Fase = [
    {
      title: "4-5+ Persoons Huishouden",
      verbruik: "6.000-10.000 kWh/jaar",
      description: "Groot gezin met hoog gelijktijdig verbruik",
      recommendation: "SMILE-T10 (10 kWh 3-fase)"
    },
    {
      title: "Elektrisch Rijden",
      verbruik: "5.000+ kWh/jaar (incl. EV)",
      description: "Huishouden met 1 of meer elektrische auto's",
      recommendation: "SMILE-T10 (10 kW 3-fase voor snel laden)"
    },
    {
      title: "Warmtepomp + EV",
      verbruik: "8.000-12.000 kWh/jaar",
      description: "All-electric woning met warmtepomp en EV",
      recommendation: "SMILE-T10 of meerdere parallel (tot 30 kWh)"
    },
    {
      title: "Zakelijk (Kantoor/Winkel)",
      verbruik: "10.000-30.000 kWh/jaar",
      description: "Bedrijfspand met 3-fase aansluiting",
      recommendation: "SMILE-T10 (verplicht 3-fase zakelijk)"
    }
  ];

  const faqs = [
    {
      question: "Hoe weet ik of ik 1-fase of 3-fase heb?",
      answer: "Check uw meterkast: 1-fase heeft 1 hoofdzekering (25-35A), 3-fase heeft 3 hoofdzekeringen (elk 25A). Bij twijfel staat het op uw energiecontract, of bel uw netbeheerder. Nieuwe woningen (na 2010) hebben vaak standaard 3-fase. Oude woningen meestal 1-fase tenzij opgewaardeerd. Voor zakelijke aansluitingen is 3-fase standaard."
    },
    {
      question: "Kan ik een 3-fase batterij op 1-fase aansluiting gebruiken?",
      answer: "Nee, dat werkt niet optimaal. Een 3-fase batterij (zoals SMILE-T10) vereist 3-fase aansluiting. Op 1-fase kunt u alleen 1 fase gebruiken, waardoor u maar 1/3 van het vermogen benut. Dit is inefficiënt en niet economisch. Voor 1-fase aansluitingen kiest u SMILE-B3 of SMILE5 (beide 1-fase). Wilt u toch 3-fase batterij? Laat uw aansluiting upgraden door netbeheerder (€500-1.500)."
    },
    {
      question: "Wanneer moet ik upgraden naar 3-fase?",
      answer: "Upgrade naar 3-fase is zinvol als: (1) U regelmatig uw hoofdzekering laat springen (&gt;5A gelijktijdig verbruik), (2) U elektrische auto wilt laden tijdens koken/wassen, (3) U warmtepomp installeert (vaak &gt; kW vermogen), (4) U grote thuisbatterij wilt (&gt; kWh met hoog vermogen), (5) Toekomstige uitbreiding (2e EV, sauna, zwembad) plant. Kosten upgrade: €500-1.500 via netbeheerder. Dit opent mogelijkheden voor SMILE-T10 en sneller EV laden."
    },
    {
      question: "Wat is het verschil in laadsnelheid tussen 1-fase en 3-fase?",
      answer: "Bij 1-fase batterijen (SMILE-B3/SMILE5) laadt u met max 5-8 kW. Een 5 kWh batterij is dan vol in 1 uur bij optimale zon. Bij 3-fase (SMILE-T10) laadt u met 10 kW - dezelfde 5 kWh in 30 minuten, of 10 kWh in 1 uur. Voor elektrisch rijden: 1-fase laadpaal max 7 kW (30 km/uur), 3-fase laadpaal 11-22 kW (60-120 km/uur). Met 3-fase systeem bent u flexibeler en kunt u sneller laden/ontladen bij piekvraag."
    },
    {
      question: "Zijn 3-fase batterijen duurder in onderhoud?",
      answer: "Nee, onderhoudskosten zijn vergelijkbaar. Zowel 1-fase als 3-fase AlphaESS batterijen zijn onderhoudsvrij met 10 jaar garantie. Geen jaarlijks onderhoud, geen extra kosten. Het enige verschil zit in aanschafprijs (3-fase €1.500-3.000 duurder door krachtigere omvormer) en installatie (3-fase iets complexer, €200-400 extra installatiekosten). Na installatie zijn operationele kosten identiek: €0/jaar."
    },
    {
      question: "Kan ik met 1-fase batterij ook mijn elektrische auto laden?",
      answer: "Ja, maar langzamer. Met 1-fase batterij (5-8 kW) en 1-fase laadpaal (max 7 kW) laadt u ongeveer 30-35 km bereik per uur - genoeg voor dagelijks gebruik (40 km/dag = 1-1,5 uur laden). Met 3-fase batterij (10 kW) en 3-fase laadpaal (11 kW) laadt u 60 km/uur - 2x sneller. Als u weinig rijdt (20-40 km/dag) is 1-fase voldoende. Rijdt u veel (100+ km/dag) of heeft u haast, dan is 3-fase prettiger."
    },
    {
      question: "Wat gebeurt er bij overbelasting op 1-fase?",
      answer: "Bij 1-fase gaat alle stroom door één hoofdzekering (25-35A). Als u gelijktijdig te veel gebruikt (koken 3 kW + wasmachine 2 kW + EV laden 7 kW + airco 2 kW = 14 kW = 61A), springt uw zekering. Met 3-fase verdeelt dit over drie fasen (elk 20A), geen probleem. Batterij kan dit deels opvangen door extra vermogen te leveren, maar op 1-fase blijft risico op overbelasting bestaan. Oplossing: upgrade naar 3-fase of gedrag aanpassen (niet alles tegelijk)."
    },
    {
      question: "Voor zakelijk gebruik: is 3-fase verplicht?",
      answer: "Praktisch gezien wel. De meeste bedrijfspanden hebben 3-fase aansluiting (standaard zakelijk). Apparatuur zoals krachtige computers, horeca-apparatuur, productie-machines vereist 3-fase. Voor thuisbatterijen in zakelijke context is 3-fase essentieel voor: (1) Peak shaving (10 kW vermogen nodig), (2) Backup tijdens storingen (genoeg vermogen voor bedrijfscontinuïteit), (3) Gelijktijdig hoog verbruik (meerdere apparaten). Onze aanbeveling: SMILE-T10 (10 kW 3-fase) voor zakelijk gebruik."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij 1-Fase of 3-Fase? | Wanneer Welke Kiezen? | Gids 2026 | Limburg"
        description="1-fase vs 3-fase thuisbatterij ✓ Verschillen ✓ Voor- en nadelen ✓ Wanneer welke? ✓ Kosten ✓ Advies op maat | StayCool Airco Limburg"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij 1-Fase of 3-Fase: Wanneer Welke Kiezen?",
          description: "Uitgebreide gids over verschillen tussen 1-fase en 3-fase thuisbatterijen, wanneer welke oplossing te kiezen, en praktische scenario's.",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij 1-Fase of 3-Fase: Wanneer Welke Kiezen?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Begrijp het verschil tussen 1-fase en 3-fase thuisbatterijen, wanneer welke oplossing optimaal is, en wat het betekent voor uw situatie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Fase-Advies
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw Besparing
            </Link>
          </div>

          <div className="flex items-center gap-4 text-yellow-900">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span>Expert Advies</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Op Maat Oplossing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Guide Section */}
      <section className="py-12 bg-blue-50 border-b-4 border-blue-500">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            🎯 Snelle Beslissingshulp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Kies 1-Fase als:</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Huishouden 2-4 personen</li>
                <li>✓ Verbruik 3.000-6.000 kWh/jaar</li>
                <li>✓ Geen elektrische auto (of langzaam laden OK)</li>
                <li>✓ Geen warmtepomp</li>
                <li>✓ Budget €6.000-9.000</li>
              </ul>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
                className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-700"
              >
                → Bekijk SMILE5 (1-fase)
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Kies 3-Fase als:</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Huishouden 4+ personen of zakelijk</li>
                <li>✓ Verbruik 6.000+ kWh/jaar</li>
                <li>✓ Elektrische auto met snel laden</li>
                <li>✓ Warmtepomp geïnstalleerd</li>
                <li>✓ Budget €9.000-12.000</li>
              </ul>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
                className="mt-4 inline-block text-orange-600 font-semibold hover:text-orange-700"
              >
                → Bekijk SMILE-T10 (3-fase)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              1-Fase vs 3-Fase: Complete Vergelijking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle verschillen op een rij
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Kenmerk</th>
                    <th className="px-6 py-4 text-left">1-Fase Batterij</th>
                    <th className="px-6 py-4 text-left">3-Fase Batterij</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className={`px-6 py-4 ${item.winner === 'phase1' ? 'bg-green-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'phase1' && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                          {item.phase1}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${item.winner === 'phase3' ? 'bg-orange-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'phase3' && <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />}
                          {item.phase3}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Praktijk Scenario's: Wanneer 1-Fase?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {scenarios1Fase.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">Verbruik: {scenario.verbruik}</p>
                <p className="text-gray-700 mb-4">{scenario.description}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-900">Aanbeveling:</p>
                  <p className="text-sm text-gray-700">{scenario.recommendation}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Praktijk Scenario's: Wanneer 3-Fase?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios3Fase.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">Verbruik: {scenario.verbruik}</p>
                <p className="text-gray-700 mb-4">{scenario.description}</p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-900">Aanbeveling:</p>
                  <p className="text-sm text-gray-700">{scenario.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat Betekent 1-Fase en 3-Fase Precies?
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1-Fase Aansluiting</h3>
            <p className="text-lg text-gray-600 mb-6">
              Bij een <strong>1-fase aansluiting</strong> loopt alle stroom door één hoofdleiding met één hoofdzekering (meestal 25-35 ampère). Dit betekent een maximaal vermogen van ongeveer 5,5-8 kW (230V x 25-35A). Alle apparaten in uw huis delen deze ene fase.
            </p>
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Voorbeeld situatie 1-fase:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Inductie koken: 3 kW</li>
                <li>Wasmachine: 2 kW</li>
                <li>Elektrische auto laden: 7 kW</li>
                <li><strong>Totaal: 12 kW = Te veel! (max 5,5-8 kW)</strong></li>
                <li>Resultaat: Hoofdzekering springt ⚠️</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Fase Aansluiting</h3>
            <p className="text-lg text-gray-600 mb-6">
              Bij een <strong>3-fase aansluiting</strong> heeft u drie hoofdleidingen met drie hoofdzekeringen (elk 25 ampère). Elke fase kan 5,5 kW leveren, totaal 16,5 kW (3 x 5,5 kW). Uw apparaten worden verdeeld over de drie fasen, waardoor u meer gelijktijdig kunt gebruiken.
            </p>
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Voorbeeld situatie 3-fase:</strong></p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fase 1: Inductie koken 3 kW</li>
                <li>Fase 2: Wasmachine 2 kW</li>
                <li>Fase 3: Elektrische auto laden 7 kW</li>
                <li><strong>Totaal: 12 kW verdeeld = Geen probleem! ✓</strong></li>
                <li>Elke fase &lt; 5,5 kW, geen overbelasting</li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Hoe Beïnvloedt Dit Uw Thuisbatterij Keuze?
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1-Fase Batterijen (SMILE-B3 / SMILE5)</h3>
            <p className="text-lg text-gray-600 mb-6">
              AlphaESS SMILE-B3 (2,9 kWh) en SMILE5 (5-15 kWh) zijn 1-fase systemen met 5-8 kW omvormer vermogen. Perfect voor:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Kleine tot middelgrote huishoudens</strong> (2-4 personen, 3.000-6.000 kWh/jaar)</li>
              <li><strong>Standaard verbruikspatroon</strong> zonder extreme pieken</li>
              <li><strong>Geen of beperkt EV laden</strong> (of alleen 's nachts op rustige momenten)</li>
              <li><strong>Budget-bewust</strong> (€3.500-9.000)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Fase Batterijen (SMILE-T10)</h3>
            <p className="text-lg text-gray-600 mb-6">
              AlphaESS SMILE-T10 (10 kWh) heeft 10 kW 3-fase omvormer. Dit systeem verdeelt laden/ontladen over drie fasen. Perfect voor:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Grote huishoudens</strong> (4+ personen, 6.000+ kWh/jaar)</li>
              <li><strong>Elektrisch rijden</strong> met snelle thuislader (11-22 kW)</li>
              <li><strong>Warmtepomp</strong> of andere krachtige apparaten</li>
              <li><strong>Zakelijk gebruik</strong> (kantoren, winkels, bedrijven)</li>
              <li><strong>Toekomstbestendig</strong> (uitbreidbaar tot 30 kWh)</li>
            </ul>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Kosten en Terugverdientijd
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">1-Fase Systeem (SMILE5, 5 kWh):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Aanschaf: €6.000-7.000 (na BTW-teruggave €5.000-5.800)</li>
                <li>Jaarlijkse besparing: €600-800</li>
                <li>Terugverdientijd: 7-9 jaar</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">3-Fase Systeem (SMILE-T10, 10 kWh):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Aanschaf: €11.000-12.000 (na BTW-teruggave €9.000-10.000)</li>
                <li>Jaarlijkse besparing: €1.000-1.400 (particulier) of €1.500-2.500 (zakelijk met peak shaving)</li>
                <li>Terugverdientijd: 8-10 jaar (particulier), 5-7 jaar (zakelijk)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Twijfelt U Over 1-Fase of 3-Fase?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij checken uw meterkast, berekenen uw verbruik, en adviseren de optimale oplossing voor uw situatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Fase-Check
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
            Veelgestelde Vragen over 1-Fase en 3-Fase
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
            Kies De Juiste Batterij Voor Uw Aansluiting
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            1-fase: SMILE-B3/SMILE5 voor €3.500-9.000. 3-fase: SMILE-T10 voor €11.000. Wij adviseren gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Besparing
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Alle Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thuisbatterij1FaseVs3FasePage;
