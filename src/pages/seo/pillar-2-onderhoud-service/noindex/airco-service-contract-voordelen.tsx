import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Phone, CheckCircle, Euro, TrendingDown, Zap, AlertCircle, Calendar, Award, Wrench, FileText } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoServiceContractVoordelenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Service Limburg', path: '/kennisbank/airco-service-limburg' },
    { label: 'Servicecontract Voordelen' }
  ];

  const prijzen = [
    {
      type: 'Losse Servicebeurt',
      prijs: '€179',
      periode: 'per beurt',
      color: 'gray',
      features: [
        'Eenmalige servicebeurt',
        'Volledige reiniging en inspectie',
        'Koudemiddel controle',
        'Testrapport met foto\'s',
        'Geen vaste kosten',
        'Op aanvraag ingepland'
      ],
      geschiktVoor: 'Wie incidenteel service wil',
      minpunten: [
        'Hogere kosten per beurt',
        'Geen voorrang bij storingen',
        'Risico op vergeten onderhoud',
        'Geen korting op reparaties'
      ]
    },
    {
      type: 'Servicecontract 1 Unit',
      prijs: '€11',
      periode: 'per maand',
      jaarprijs: '€132 per jaar',
      color: 'blue',
      highlight: true,
      features: [
        'Jaarlijkse servicebeurt inclusief',
        'Proactieve planning (wij bellen u)',
        'Voorrang bij storingen',
        'Korting op reparaties',
        'Gratis filters bij service',
        'Koudemiddel bijvullen inclusief*',
        '24/7 storingsdienst',
        'Vaste lage maandprijs'
      ],
      geschiktVoor: 'Eigenaren van 1 airco systeem',
      besparing: 'Bespaar €47 per jaar vs losse beurt'
    },
    {
      type: 'Servicecontract 2+ Units',
      prijs: '€16',
      periode: 'per maand',
      jaarprijs: '€192 per jaar',
      color: 'green',
      features: [
        'Jaarlijkse service voor ALLE units',
        'Proactieve planning',
        'Hoogste prioriteit bij storingen',
        'Extra korting op reparaties',
        'Gratis filters bij service',
        'Koudemiddel bijvullen inclusief*',
        '24/7 storingsdienst',
        'Beste prijs-kwaliteit verhouding'
      ],
      geschiktVoor: 'Multisplit of meerdere airco\'s',
      besparing: 'Bespaar €166+ per jaar vs losse beurten'
    }
  ];

  const voordelen = [
    {
      titel: 'Financiële Voordelen',
      icon: Euro,
      items: [
        {
          punt: 'Lagere kosten per servicebeurt',
          uitleg: 'Met contract betaalt u €132/jaar voor 1 unit vs €179 voor losse beurt - een besparing van €47.'
        },
        {
          punt: 'Korting op reparaties',
          uitleg: 'Contracthouders krijgen 10-15% korting op eventuele reparaties en onderdelen.'
        },
        {
          punt: 'Spreiding van kosten',
          uitleg: 'Lage vaste maandprijs voorkomt hoge eenmalige uitgaven.'
        },
        {
          punt: 'Gratis filters',
          uitleg: 'Bij service worden filters gratis gereinigd of vervangen (waarde €25-40).'
        },
        {
          punt: 'Koudemiddel inclusief',
          uitleg: 'Klein bijvullen van koudemiddel zit in het contract (normaal €75-150 meerprijs).'
        }
      ]
    },
    {
      titel: 'Service & Gemak',
      icon: Zap,
      items: [
        {
          punt: 'Wij bellen u proactief',
          uitleg: 'U hoeft niet te onthouden wanneer service nodig is - wij plannen dit automatisch in.'
        },
        {
          punt: 'Voorrang bij storingen',
          uitleg: 'Bij storing wordt u binnen 24-48 uur geholpen, andere klanten hebben langere wachttijd.'
        },
        {
          punt: 'Vaste contactpersoon',
          uitleg: 'U krijgt een vaste servicemonteur die uw systeem kent.'
        },
        {
          punt: '24/7 storingsdienst',
          uitleg: 'Ook buiten kantooruren zijn wij bereikbaar voor urgente storingen.'
        },
        {
          punt: 'Geen verrassingen',
          uitleg: 'Alles vooraf duidelijk - geen onverwachte kosten voor regulier onderhoud.'
        }
      ]
    },
    {
      titel: 'Technische Voordelen',
      icon: Wrench,
      items: [
        {
          punt: 'Langere levensduur',
          uitleg: 'Regelmatig onderhoud verlengt de levensduur van uw airco met 3-5 jaar.'
        },
        {
          punt: 'Minder storingen',
          uitleg: 'Proactief onderhoud voorkomt 70% van de storingen en defecten.'
        },
        {
          punt: 'Optimaal rendement',
          uitleg: 'Schone filters en systeem besparen 15-20% op energiekosten.'
        },
        {
          punt: 'Garantiebehoud',
          uitleg: 'Jaarlijks onderhoud is vaak verplicht om fabrieksgarantie geldig te houden.'
        },
        {
          punt: 'Trending & monitoring',
          uitleg: 'Wij volgen prestaties in de tijd en signaleren problemen vroegtijdig.'
        }
      ]
    }
  ];

  const vergelijking = [
    {
      aspect: 'Jaarlijkse servicekosten',
      losseBeurt: '€179 per beurt',
      contract1: '€132 per jaar',
      contract2: '€192 voor alle units',
      winner: 'contract'
    },
    {
      aspect: 'Planning',
      losseBeurt: 'Zelf onthouden en boeken',
      contract1: 'Wij bellen u proactief',
      contract2: 'Wij bellen u proactief',
      winner: 'contract'
    },
    {
      aspect: 'Bij storing',
      losseBeurt: 'Reguliere wachttijd (5-7 dagen)',
      contract1: 'Voorrang (24-48 uur)',
      contract2: 'Hoogste prioriteit (24-48 uur)',
      winner: 'contract'
    },
    {
      aspect: 'Korting reparaties',
      losseBeurt: 'Geen korting',
      contract1: '10% korting',
      contract2: '15% korting',
      winner: 'contract'
    },
    {
      aspect: 'Filters',
      losseBeurt: 'Reiniging (vervangen is meerprijs)',
      contract1: 'Gratis vervangen indien nodig',
      contract2: 'Gratis vervangen indien nodig',
      winner: 'contract'
    },
    {
      aspect: 'Koudemiddel bijvullen',
      losseBeurt: 'Meerprijs €75-150',
      contract1: 'Klein bijvullen inclusief*',
      contract2: 'Klein bijvullen inclusief*',
      winner: 'contract'
    },
    {
      aspect: 'Storingsdienst 24/7',
      losseBeurt: 'Niet beschikbaar',
      contract1: 'Inclusief',
      contract2: 'Inclusief',
      winner: 'contract'
    },
    {
      aspect: 'Flexibiliteit',
      losseBeurt: 'Maximaal flexibel',
      contract1: 'Opzegbaar per jaar',
      contract2: 'Opzegbaar per jaar',
      winner: 'losse'
    }
  ];

  const rekenvoorbeeld = {
    titel: 'Rekenvoorbeeld: 5 Jaar',
    losseBeurt: {
      scenario: 'Losse servicebeurten',
      kosten: [
        { jaar: 'Jaar 1', omschrijving: 'Servicebeurt', bedrag: 179 },
        { jaar: 'Jaar 2', omschrijving: 'Servicebeurt', bedrag: 179 },
        { jaar: 'Jaar 3', omschrijving: 'Servicebeurt + koudemiddel', bedrag: 179 + 125 },
        { jaar: 'Jaar 4', omschrijving: 'Servicebeurt', bedrag: 179 },
        { jaar: 'Jaar 5', omschrijving: 'Servicebeurt + filters', bedrag: 179 + 35 }
      ],
      totaal: 1055
    },
    contract: {
      scenario: 'Servicecontract',
      kosten: [
        { jaar: 'Jaar 1', omschrijving: '12 maanden × €11', bedrag: 132 },
        { jaar: 'Jaar 2', omschrijving: '12 maanden × €11', bedrag: 132 },
        { jaar: 'Jaar 3', omschrijving: '12 maanden × €11 (koudemiddel incl.)', bedrag: 132 },
        { jaar: 'Jaar 4', omschrijving: '12 maanden × €11', bedrag: 132 },
        { jaar: 'Jaar 5', omschrijving: '12 maanden × €11 (filters incl.)', bedrag: 132 }
      ],
      totaal: 660
    },
    besparing: 395
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Servicecontract Voordelen | Bespaar met Contract | StayCool"
        description="Ontdek de voordelen van een airco servicecontract in Limburg. Bespaar geld, krijg voorrang en zorgeloos onderhoud. Vanaf €11/maand voor compleet onderhoud."
        canonicalUrl="https://staycoolairco.nl/airco-service/noindex/contract-voordelen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500/30 rounded-full text-sm font-medium mb-4">
            Prijzen & Voordelen
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicecontract vs Losse Servicebeurt
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Waarom een servicecontract financieel én praktisch voordeliger is
          </p>
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
            Bespaar tot €395 in 5 jaar met een contract
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Waarom deze vergelijking?</h3>
                <p className="text-gray-700">
                  Veel mensen kiezen voor losse servicebeurten zonder te weten dat een servicecontract uiteindelijk goedkoper is. Op deze pagina rekenen we het helder voor: wat betaalt u echt en wat krijgt u ervoor terug?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prijzen Overzicht */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Prijzen in één oogopslag
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {prijzen.map((optie, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  optie.highlight ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {optie.highlight && (
                  <div className="bg-blue-600 text-white text-center py-2 font-bold">
                    Meest Gekozen
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{optie.type}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{optie.prijs}</span>
                    <span className="text-gray-600"> {optie.periode}</span>
                  </div>
                  {optie.jaarprijs && (
                    <div className="text-sm text-gray-600 mb-4">({optie.jaarprijs})</div>
                  )}
                  {optie.besparing && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                      {optie.besparing}
                    </div>
                  )}

                  <div className="border-t pt-4 mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-3">{optie.geschiktVoor}</div>
                    <ul className="space-y-2">
                      {optie.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {optie.minpunten && (
                    <div className="border-t pt-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">Let op:</div>
                      <ul className="space-y-2">
                        {optie.minpunten.map((minpunt, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <AlertCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{minpunt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            * Klein bijvullen van koudemiddel (tot 200 gram) zit in het contract. Grotere bijvullingen tegen kostprijs.
          </div>
        </div>
      </section>

      {/* Gedetailleerde Vergelijking */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Punt voor Punt Vergelijking
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                    <th className="px-6 py-4 text-left font-bold">Losse Beurt</th>
                    <th className="px-6 py-4 text-left font-bold">Contract 1 Unit</th>
                    <th className="px-6 py-4 text-left font-bold">Contract 2+ Units</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vergelijking.map((rij, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{rij.aspect}</td>
                      <td className={`px-6 py-4 text-gray-700 ${rij.winner === 'losse' ? 'bg-green-50 font-medium' : ''}`}>
                        {rij.losseBeurt}
                      </td>
                      <td className={`px-6 py-4 text-gray-700 ${rij.winner === 'contract' ? 'bg-green-50 font-medium' : ''}`}>
                        {rij.contract1}
                      </td>
                      <td className={`px-6 py-4 text-gray-700 ${rij.winner === 'contract' ? 'bg-green-50 font-medium' : ''}`}>
                        {rij.contract2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <span className="inline-block bg-green-50 px-3 py-1 rounded">Groene achtergrond</span> = beste optie voor dat aspect
          </div>
        </div>
      </section>

      {/* Voordelen Uitgelegd */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Alle Voordelen van een Servicecontract
          </h2>

          <div className="space-y-8">
            {voordelen.map((categorie, index) => {
              const Icon = categorie.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 rounded-lg p-3 mr-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{categorie.titel}</h3>
                  </div>

                  <div className="space-y-4">
                    {categorie.items.map((item, idx) => (
                      <div key={idx} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-gray-900 mb-1">{item.punt}</div>
                          <div className="text-gray-700">{item.uitleg}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Rekenvoorbeeld: Wat Bespaart U Echt?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Vergelijking over 5 jaar voor 1 airco unit
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Losse Beurt */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {rekenvoorbeeld.losseBeurt.scenario}
              </h3>
              <div className="space-y-3">
                {rekenvoorbeeld.losseBeurt.kosten.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-gray-900">{item.jaar}</span>
                      <span className="font-bold text-gray-900">€{item.bedrag}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.omschrijving}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-gray-400">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Totaal 5 jaar:</span>
                  <span className="text-3xl font-bold text-red-600">€{rekenvoorbeeld.losseBeurt.totaal}</span>
                </div>
              </div>
            </div>

            {/* Contract */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {rekenvoorbeeld.contract.scenario}
              </h3>
              <div className="space-y-3">
                {rekenvoorbeeld.contract.kosten.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-gray-900">{item.jaar}</span>
                      <span className="font-bold text-gray-900">€{item.bedrag}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.omschrijving}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-blue-400">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Totaal 5 jaar:</span>
                  <span className="text-3xl font-bold text-green-600">€{rekenvoorbeeld.contract.totaal}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8 text-center">
            <div className="text-lg mb-2">Uw besparing over 5 jaar:</div>
            <div className="text-5xl font-bold mb-4">€{rekenvoorbeeld.besparing}</div>
            <div className="text-green-100">
              Dat is €{Math.round(rekenvoorbeeld.besparing / 5)} besparing per jaar gemiddeld
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Let op: Dit voorbeeld is conservatief</h3>
                <p className="text-gray-700">
                  We hebben maar 1× koudemiddel bijvullen en 1× filter vervangen meegerekend. In de praktijk kunnen deze kosten vaker voorkomen bij losse beurten, waardoor de besparing met een contract nog groter wordt. Ook de besparing op energiekosten door beter onderhoud is niet meegerekend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor Wie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Welke Optie Past Bij U?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kies Losse Beurt Als:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U maximale flexibiliteit wilt zonder verplichtingen</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U de airco sporadisch gebruikt en goed zelf onderhoud kan doen</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U van plan bent de airco binnen 1-2 jaar te vervangen</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kies Contract 1 Unit Als:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U 1 airco systeem heeft en optimaal wilt onderhouden</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U geld wilt besparen én voorrang wilt bij storingen</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U niet wilt nadenken over planning en onderhoud</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U een vaste lage maandprijs wilt zonder verrassingen</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kies Contract 2+ Units Als:</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U een multisplit heeft of meerdere losse airco systemen</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U maximaal wilt besparen (€166+ per jaar besparing)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U hoogste prioriteit wilt bij storingen en service</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U compleet zorgeloos wilt zijn over al uw airco's</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar hoofdpagina */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer over airco service</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/kennisbank/airco-service-limburg" className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-600 mb-2">→ Airco Service Limburg</h3>
              <p className="text-gray-600">Complete informatie over airco service in Limburg</p>
            </Link>
            <Link to="/contact" className="p-6 bg-gradient-to-br from-green-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <h3 className="font-bold text-green-600 mb-2">→ Contract Aanvragen</h3>
              <p className="text-gray-600">Start met besparen en zorgeloos airco onderhoud</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Met Besparen</h2>
          <p className="text-xl mb-8">
            Kies voor een servicecontract en bespaar tot €395 in 5 jaar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:046-202-1430"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              046 - 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              <FileText className="h-5 w-5 mr-2" />
              Contract Aanvragen
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Vanaf €11/maand | Opzegbaar per jaar | Inclusief voorrang bij storingen
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoServiceContractVoordelenPage;
