import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingDown, Euro, CheckCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Is een airco goedkoper dan gas voor verwarming?',
    answer:
      'Ja, bij de huidige energieprijzen is een airco met SCOP 4.0 meer dan twee keer goedkoper dan een HR-ketel. Kostprijs per kWh warmte: airco €0,058 versus gas €0,125-€0,142 (bij gasprijs €1,10/m³).',
  },
  {
    question: 'Bij welke gasprijs is een airco goedkoper?',
    answer:
      'Al bij een gasprijs boven €0,45/m³ is een airco met SCOP 4.0 al goedkoper dan gas. Momenteel staat gas op ca. €1,10/m³, dus de airco is nu ruim 2,4x goedkoper per kWh warmte.',
  },
  {
    question: 'Wanneer is gas toch voordeliger dan een airco?',
    answer:
      'Gas zou alleen voordeliger zijn als de stroomprijs boven €0,50/kWh zou stijgen bij SCOP 4.0. Dat scenario is op dit moment onwaarschijnlijk. Bij uitzonderlijk lage gasprijzen (onder €0,45/m³) zou gas marginaal goedkoper kunnen zijn.',
  },
  {
    question: 'Wat is een hybride verwarmingssysteem?',
    answer:
      'Een hybride systeem combineert uw bestaande cv-ketel met een airco. Boven -5°C verwarmt de airco (goedkoper), onder -5°C schakelt de ketel bij. Dit is de meest kostenefficiënte aanpak voor grotere woningen die al een cv-installatie hebben.',
  },
  {
    question: 'Hoeveel bespaar ik per jaar als ik overstap van gas naar airco?',
    answer:
      'Voor een gemiddeld Limburgs huishouden dat 1.500-2.000 m³ gas per jaar voor verwarming gebruikt, is de besparing €300-€700 per jaar. Dit hangt af van uw verbruik, de kwaliteit van uw isolatie en de SCOP-waarde van de gekozen airco.',
  },
  {
    question: 'Heeft mijn cv-ketel nog zin als ik een airco koop voor verwarming?',
    answer:
      'Uw cv-ketel is nuttig als backup bij extreme vrieskou en voor warm tapwater. Veel klanten houden de cv-ketel aan als aanvulling en verwarmen het grootste deel van het jaar met de airco. Op die manier profiteert u van de lage kosten van de airco zonder afhankelijk te zijn van één systeem.',
  },
];

export default function IsAircoGoedkoperDanGas() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Is Airco Goedkoper dan Gas?' },
  ];

  return (
    <>
      <Helmet>
        <title>Is Airco Goedkoper dan Gas Verwarmen? | Berekening 2025</title>
        <meta
          name="description"
          content="Vergelijking: airco verwarmen vs gasketel. Bij SCOP 4.0 en stroom €0,23 is airco al goedkoper als gas >€0,70/m³. Bereken uw besparing."
        />
        <link rel="canonical" href="https://staycoolairco.nl/is-airco-goedkoper-dan-gas" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Is Airco Goedkoper dan Gas Verwarmen? Berekening 2025',
          description:
            'Vergelijking: airco verwarmen vs gasketel. Bij SCOP 4.0 en stroom €0,23 is airco al goedkoper als gas >€0,45/m³.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/is-airco-goedkoper-dan-gas',
          },
          inLanguage: 'nl-NL',
          keywords: 'airco goedkoper dan gas, airco vs gasketel kosten, airco verwarmen besparing',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Is een Airco Goedkoper dan Gas Verwarmen?
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Keihard antwoord: bij de huidige energieprijzen is verwarmen met een airco meer dan twee
            keer zo goedkoop als een HR-ketel op gas. We tonen u de exacte berekening.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          De vraag of een airco goedkoper is dan gas is op dit moment eenvoudig te beantwoorden:
          <strong> ja, en fors ook.</strong> Dit heeft alles te maken met het principe van de warmtepomp.
          Een airco met SCOP 4.0 levert 4 kWh warmte per 1 kWh stroom. Aardgas heeft een energieinhoud
          van 8,8 kWh per m³, maar een HR-ketel benut die maar voor 88%. Laten we dat doorrekenen.
        </p>

        {/* Break-even berekening */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Break-even berekening: bij welke gasprijs wint de airco?
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Stap voor stap</h3>
          <div className="space-y-3 text-gray-700 text-base">
            <div className="flex gap-3">
              <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
              <p>Airco (SCOP 4.0, stroom €0,23/kWh): kostprijs warmte = €0,23 ÷ 4,0 = <strong>€0,058/kWh</strong></p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-700 w-6 shrink-0">2.</span>
              <p>Gas: 1 m³ bevat 8,8 kWh × 88% rendement = 7,74 kWh nuttige warmte per m³</p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
              <p>
                Break-even gasprijs: <strong>€0,058 × 7,74 = €0,449/m³</strong><br />
                Al bij een gasprijs boven €0,45/m³ is de airco goedkoper.
              </p>
            </div>
            <div className="flex gap-3 bg-white rounded-lg p-3 border border-blue-100">
              <span className="font-bold text-green-700 w-6 shrink-0">✓</span>
              <p>
                Huidige gasprijs (2025): ~€1,10/m³<br />
                Kostprijs warmte gas: €1,10 ÷ 7,74 = <strong>€0,142/kWh</strong><br />
                Airco is <strong>2,4x goedkoper</strong> dan gas!
              </p>
            </div>
          </div>
        </div>

        {/* Vergelijkingstabel per SCOP */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Kostenvergelijking: verschillende SCOP-waarden vs. gasprijzen
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De onderstaande tabel toont de kostprijs per kWh warmte van een airco bij verschillende
          SCOP-waarden, vergeleken met gas bij verschillende gasprijzen:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Bron</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Gas €0,70/m³</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Gas €1,10/m³</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Gas €1,50/m³</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 text-sm">Gas (HR-ketel 88%)</td>
                <td className="px-4 py-3 text-right text-sm">€0,090/kWh</td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-orange-700">€0,142/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-red-700">€0,194/kWh</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 text-sm font-semibold text-green-800">Airco SCOP 3.5</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">€0,066/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-green-700 font-semibold">€0,066/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">€0,066/kWh</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 text-sm font-semibold text-green-800">Airco SCOP 4.0</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">€0,058/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-green-700 font-bold">€0,058/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">€0,058/kWh</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 text-sm font-semibold text-green-800">Airco SCOP 4.6</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">€0,050/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-green-700 font-bold">€0,050/kWh</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">€0,050/kWh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mb-8">
          Stroom €0,23/kWh. De airco-kosten zijn stabiel — alleen de gasprijs varieert.
        </p>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Welke airco heeft de beste SCOP in Limburg?</p>
            <p className="text-orange-100 text-sm">Bekijk onze topkeuzes voor verwarmen.</p>
          </div>
          <Link
            to="/beste-airco-voor-verwarmen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Beste airco voor verwarmen
          </Link>
        </div>

        {/* Wanneer is gas beter */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wanneer is gas toch voordeliger?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Gas zou theoretisch goedkoper worden dan een airco als de stroomprijs boven €0,50/kWh zou
          stijgen (bij SCOP 4.0) of als de gasprijs zou dalen tot onder €0,45/m³. Beide scenario's
          zijn voor 2025 onrealistisch:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
          <li>Gasprijzen daalden na 2022 maar stabiliseerden op €0,80-€1,20/m³.</li>
          <li>Stroomtarieven fluctueren maar blijven door netkosten doorgaans onder €0,35/kWh.</li>
          <li>
            Bij extreem lage buitentemperaturen (&lt;-10°C) daalt de SCOP tijdelijk — maar dit
            doet zich in Limburg maar weinig uur per jaar voor.
          </li>
        </ul>

        {/* Hybride */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Hybride: de beste van beide werelden
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Heeft u al een cv-ketel met radiatoren? Een hybride aanpak is dan financieel het slimst.
          U installeert een airco voor de primaire verwarming van woon- en slaapkamers. De cv-ketel
          blijft actief als backup voor extreme kou (&lt;-5°C) en voor warm tapwater. Het resultaat:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { label: '> -5°C buiten', action: 'Airco verwarmt (goedkoop)', color: 'bg-green-50 border-green-200 text-green-800' },
            { label: '< -5°C buiten', action: 'CV-ketel schakelt bij', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { label: 'Warm tapwater', action: 'CV-ketel altijd beschikbaar', color: 'bg-gray-50 border-gray-200 text-gray-800' },
          ].map((item, i) => (
            <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
              <p className="font-bold text-sm">{item.label}</p>
              <p className="text-sm mt-1">{item.action}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bij een gemiddeld Limburgs klimaat verwarmt de airco circa 95% van de verwarmingsuren.
          Dat levert een besparing van 50-60% op de totale verwarmingskosten.
        </p>

        {/* Conclusie */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Conclusie</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
          <div className="space-y-2">
            {[
              'Bij gasprijs €1,10/m³ is airco 2,4x goedkoper dan gas per kWh warmte',
              'Al bij gasprijs >€0,45/m³ is de airco goedkoper (SCOP 4.0)',
              'Hybride aanpak geeft maximale besparing met behoud van comfort',
              'Airco verdient investering gemiddeld terug in 4-6 jaar',
              'Daarna structurele besparing van €300-€700 per jaar',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Bereken uw besparing met StayCool Airco</p>
            <p className="text-orange-100 text-sm">Gratis advies, snelle installatie, STEK erkend.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Veelgestelde vragen</h2>
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
          <p className="text-xl font-bold mb-2">Bel ons voor een persoonlijk besparingsadvies</p>
          <p className="text-sky-200 mb-4">StayCool Airco | Limburg | 4.9 ⭐ | WhatsApp: 06 36481054</p>
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
