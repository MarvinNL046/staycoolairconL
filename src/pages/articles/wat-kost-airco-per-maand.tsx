import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, TrendingDown, ChevronDown, ChevronUp, Phone, Lightbulb } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Hoeveel kWh verbruikt een airco per maand bij koelen?',
    answer:
      'Een 2,5 kW airco met SEER 8,5 verbruikt bij 6 uur gebruik per dag circa 53 kWh per maand. Een 3,5 kW unit circa 74 kWh en een 5,0 kW unit bij 8 uur gebruik zo\'n 141 kWh per maand. Dit vertaalt zich naar €12-€32 per maand aan stroomkosten.',
  },
  {
    question: 'Wat kost een airco per maand in de winter?',
    answer:
      'Bij verwarmen (SCOP 4.6, 3,5 kW unit, 8 uur per dag) verbruikt u circa 183 kWh per maand. Bij een stroomprijs van €0,23/kWh is dat €42 per maand. Over 5 wintermaanden is dat €210 in totaal — beduidend minder dan gas voor dezelfde warmteproductie.',
  },
  {
    question: 'Hoe bereken ik mijn airco stroomverbruik zelf?',
    answer:
      'Gebruik de formule: kWh stroom = (capaciteit in kW / SEER of SCOP) × uren gebruik. Voorbeeld: 3,5 kW / SEER 8,5 × 180 uur (zomermaand bij 6u/dag) = 74 kWh. Vermenigvuldig met de stroomprijs voor uw maandkosten.',
  },
  {
    question: 'Kan ik de airco-kosten verlagen met een timer?',
    answer:
      'Zeker. Door een timer of wifi-planning in te stellen, verwarmt of koelt de airco alleen wanneer u thuis bent of de ruimte gebruikt. Een goede nachtmodus (hogere koeltemperatuur of lagere verwarmingstemperatuur) bespaart 20-30% op het verbruik.',
  },
  {
    question: 'Wat kost een airco per jaar in totaal (stroom)?',
    answer:
      'Bij normaal gebruik (3 maanden koelen en 5 maanden verwarmen met een 3,5 kW unit) ligt het jaarverbruik op 150-600 kWh stroom, afhankelijk van gebruiksintensiteit en isolatie. Kosten: €35-€140 per jaar. Verwarmen is intensiever dan koelen.',
  },
  {
    question: 'Heeft een hoger SEER/SCOP cijfer veel invloed op mijn rekening?',
    answer:
      'Ja, het maakt een merkbaar verschil. Een unit met SEER 9,0 verbruikt 6% minder stroom dan een met SEER 8,5 voor dezelfde hoeveelheid koeling. Over meerdere jaren telt dat op. Kies bij aankoop altijd voor de hoogste energieklasse die uw budget toelaat.',
  },
];

export default function WatKostAircoPerMaand() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Wat kost een airco per maand?' },
  ];

  return (
    <>
      <Helmet>
        <title>Wat Kost een Airco per Maand aan Stroom? | Berekening</title>
        <meta
          name="description"
          content="Hoeveel stroom verbruikt een airco per maand? Koelen: 50-150 kWh, verwarmen: 150-400 kWh. Bereken uw kosten met onze tabel. StayCool Airco Limburg."
        />
        <link rel="canonical" href="https://staycoolairco.nl/wat-kost-airco-per-maand" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Wat Kost een Airco per Maand aan Stroom?',
          description:
            'Hoeveel stroom verbruikt een airco per maand? Koelen: 50-150 kWh, verwarmen: 150-400 kWh. Bereken uw kosten met onze tabel.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/wat-kost-airco-per-maand',
          },
          inLanguage: 'nl-NL',
          keywords:
            'airco kosten per maand, airco stroomverbruik, airco elektriciteit kosten, airco SEER SCOP berekening',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wat Kost een Airco per Maand aan Stroom?
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Hoeveel stroom verbruikt uw airco bij koelen én verwarmen? We geven u concrete tabellen
            en de formule om uw eigen maandkosten te berekenen.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Het stroomverbruik van een airco hangt af van drie factoren: het vermogen (kW), het
          energierendement (SEER voor koelen of SCOP voor verwarmen) en het aantal gebruiksuren. Met
          de onderstaande formule kunt u het zelf berekenen, of gebruik onze kant-en-klare tabellen.
        </p>

        {/* Formule */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-sky-900 mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5" /> De formule
          </h2>
          <p className="text-gray-700 mb-2 font-mono bg-white rounded p-3 text-sm">
            kWh stroom = Vermogen (kW) ÷ SEER (koelen) of SCOP (verwarmen) × Gebruiksuren
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Voorbeeld: 3,5 kW airco, SEER 8,5, 6 uur/dag, 30 dagen → 3,5 / 8,5 × 180 = <strong>74 kWh</strong>
          </p>
        </div>

        {/* Tabel koelen */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Stroomverbruik bij koelen (zomer, 3 maanden)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De onderstaande tabel gaat uit van SEER 8,5 en een stroomprijs van €0,23/kWh:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Vermogen (SEER 8,5)</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Gebruik per dag</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Maandverbruik</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Kosten/maand</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Seizoenskosten</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 text-sm font-medium">2,5 kW (kleine ruimte)</td>
                <td className="px-4 py-3 text-right text-sm">6 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">53 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-green-700">€12</td>
                <td className="px-4 py-3 text-right text-sm">€36</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">3,5 kW (woonkamer)</td>
                <td className="px-4 py-3 text-right text-sm">6 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">74 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-green-700">€17</td>
                <td className="px-4 py-3 text-right text-sm">€51</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">5,0 kW (grote ruimte)</td>
                <td className="px-4 py-3 text-right text-sm">8 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">141 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-orange-600">€32</td>
                <td className="px-4 py-3 text-right text-sm">€96</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">7,0 kW (open plan woning)</td>
                <td className="px-4 py-3 text-right text-sm">8 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">197 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-orange-600">€45</td>
                <td className="px-4 py-3 text-right text-sm">€135</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabel verwarmen */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Stroomverbruik bij verwarmen (winter, 5 maanden)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Verwarmen kost meer stroom dan koelen, maar is nog altijd goedkoper dan gas. De tabel
          gebruikt SCOP 4,6 en stroomprijs €0,23/kWh:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Vermogen (SCOP 4,6)</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Gebruik per dag</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Maandverbruik</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Kosten/maand</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Seizoenskosten</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 text-sm font-medium">2,5 kW</td>
                <td className="px-4 py-3 text-right text-sm">8 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">130 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-green-700">€30</td>
                <td className="px-4 py-3 text-right text-sm">€150</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">3,5 kW</td>
                <td className="px-4 py-3 text-right text-sm">8 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">183 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-green-700">€42</td>
                <td className="px-4 py-3 text-right text-sm">€210</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">5,0 kW</td>
                <td className="px-4 py-3 text-right text-sm">10 uur/dag</td>
                <td className="px-4 py-3 text-right text-sm">326 kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-orange-600">€75</td>
                <td className="px-4 py-3 text-right text-sm">€375</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Welke airco past bij uw ruimte?</p>
            <p className="text-orange-100 text-sm">Bekijk de beste modellen voor uw situatie.</p>
          </div>
          <Link
            to="/beste-airco-voor-verwarmen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Beste airco voor verwarmen
          </Link>
        </div>

        {/* Tips */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          5 tips om airco-kosten te verlagen
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              tip: 'Gebruik de timerstand',
              desc: 'Stel in dat de airco 30 minuten voor thuiskomst start en uitzet zodra u vertrekt. Veel moderne units hebben een weekplanning.',
            },
            {
              tip: 'Activeer de nachtmodus',
              desc: 'Nachtmodus verlaagt de aangeblazen lucht (bij koelen) of verlaagt het setpoint (bij verwarmen) automatisch — ideaal voor een goede nachtrust én lagere kosten.',
            },
            {
              tip: 'Reinig de filters elke 2-4 weken',
              desc: 'Vuile filters verhogen het energieverbruik met 5-15%. Spoel de filters af onder de kraan en laat ze drogen.',
            },
            {
              tip: 'Gebruik wifi-bediening',
              desc: 'Via de app kunt u de airco bedienen vanuit de trein, zodat u aankomt in een al geconditioneerde woning zonder onnodige uren te draaien.',
            },
            {
              tip: 'Kies het juiste vermogen',
              desc: 'Een te kleine unit draait altijd op vol vermogen; een te grote unit slaat te snel aan en uit (short cycling), wat het verbruik verhoogt. Laat StayCool het juiste vermogen berekenen.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.tip}</p>
                <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Jaarkosten overzicht */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Totaaloverzicht jaarkosten (3,5 kW unit)
        </h2>
        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Zomer koelen (3 mnd)</p>
              <p className="text-2xl font-bold text-sky-700">€51</p>
              <p className="text-xs text-gray-400">bij 6u/dag</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Winter verwarmen (5 mnd)</p>
              <p className="text-2xl font-bold text-blue-700">€210</p>
              <p className="text-xs text-gray-400">bij 8u/dag</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-sky-200">
              <p className="text-sm text-gray-500 mb-1">Totaal per jaar</p>
              <p className="text-2xl font-bold text-gray-900">~€261</p>
              <p className="text-xs text-gray-400">stroom voor airco</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            <Lightbulb className="h-4 w-4 inline mr-1" />
            Ter vergelijking: verwarmen van dezelfde ruimte met gas kost bij €1,10/m³ gemiddeld €450-€600
            per jaar voor alleen het verwarmingsdeel.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Vraag een gratis offerte aan in Limburg</p>
            <p className="text-orange-100 text-sm">Professionele installatie binnen 1-3 weken, STEK erkend.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3 mb-12">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-sky-600 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 text-base leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-sky-800 rounded-xl p-6 mb-10 text-white text-center">
          <p className="text-xl font-bold mb-2">Bel ons voor persoonlijk advies</p>
          <p className="text-sky-200 mb-4">StayCool Airco | Limburg | 4.9 ⭐ | F-gassen gecertificeerd</p>
          <a
            href="tel:0462021430"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl"
          >
            <Phone className="h-5 w-5" /> 046 202 1430
          </a>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
