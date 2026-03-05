import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sun, Snowflake, Thermometer, Euro, CheckCircle, Phone, ArrowRight,
  Star, Shield, Award, ChevronDown, ChevronUp, Leaf, Zap, TrendingDown
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const AircoKoelenEnVerwarmen: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Koelen én Verwarmen' },
  ];

  const schemaData = {
    name: 'Airco Koelen én Verwarmen | Dual Function',
    description:
      'Moderne airco\'s kunnen koelen én verwarmen. Ontdek hoe dit werkt, wat het kost en wanneer het voordelig is vs. cv-ketel. Specialist Limburg.',
    url: 'https://staycoolairco.nl/airco-koelen-en-verwarmen',
  };

  const faqItems = [
    {
      question: 'Hoe werkt een airco als verwarming?',
      answer:
        'Een airco is technisch gezien een lucht-lucht warmtepomp. In verwarmingsmodus onttrekt de unit warmte uit de buitenlucht — zelfs bij vriesweer — en brengt die via de binnenunit in uw ruimte. Dit is fundamenteel anders dan een kachel: er wordt geen warmte opgewekt, maar verplaatst. Daarom is het zo efficiënt.',
    },
    {
      question: 'Tot welke buitentemperatuur kan een airco verwarmen?',
      answer:
        'Moderne inverter airco\'s werken voor verwarming tot -15°C buitentemperatuur. Sommige premium modellen (zoals Mitsubishi Heavy ZS-WF) werken zelfs tot -25°C. Bij lagere temperaturen daalt de efficiëntie, maar de airco blijft warmte produceren.',
    },
    {
      question: 'Is airco verwarmen goedkoper dan gas?',
      answer:
        'Ja, aanzienlijk goedkoper. Bij een SCOP van 4.0 en stroom à €0,23/kWh kost aircowarmen €0,058/kWh warmte. Een HR-gasketel kost bij gas à €1,10/m³ (8,8 kWh/m³) circa €0,125/kWh warmte. U bespaart meer dan 50% op verwarmingskosten.',
    },
    {
      question: 'Kan ik mijn cv-ketel vervangen door een airco?',
      answer:
        'Gedeeltelijk of volledig, afhankelijk van uw woningsituatie. In een goed geïsoleerde woning is een airco als enige verwarming haalbaar. In oudere woningen werkt een hybride systeem het beste: airco bij temperaturen boven -5°C (meest efficiënt), gasketel bij extreme kou.',
    },
    {
      question: 'Wat is het verschil tussen SEER en SCOP?',
      answer:
        'SEER (Seasonal Energy Efficiency Ratio) meet de koelprestatie over het koelseizoen. SCOP (Seasonal Coefficient of Performance) meet de verwarmingsprestatie over het verwarmingsseizoen. Een A+++ airco heeft typisch SEER ≥ 8.5 en SCOP ≥ 4.6.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Airco Koelen én Verwarmen | Dual Function | StayCool Limburg</title>
        <meta
          name="description"
          content="Moderne airco's kunnen koelen én verwarmen. Ontdek hoe dit werkt, wat het kost en wanneer het voordelig is vs. cv-ketel. Specialist Limburg."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-koelen-en-verwarmen" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <Sun className="h-6 w-6 text-orange-400" />
                <Snowflake className="h-6 w-6 text-sky-300" />
              </div>
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Dual function airco</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Airco Koelen én Verwarmen
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Eén systeem, twee functies. Moderne airco's zijn zowel uw koeling in de zomer als uw
              meest energie-efficiënte verwarming in de winter. Ontdek hoe het werkt en wat u bespaart.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0462021430"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all"
              >
                <Phone className="h-5 w-5" />
                046 202 1430
              </a>
              <Link
                to="/airco-installatie-prijs"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all border border-white/20"
              >
                Bekijk prijzen <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Star className="h-5 w-5 text-yellow-500" />, text: '4.9 ster (127 reviews)' },
            { icon: <Shield className="h-5 w-5 text-blue-600" />, text: 'F-gassen gecertificeerd' },
            { icon: <Award className="h-5 w-5 text-blue-600" />, text: 'STEK erkend' },
            { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: '5 jaar garantie' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 flex items-center gap-3">
              {item.icon}
              <span className="text-sm font-semibold text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Dual function uitleg */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Hoe werkt koelen én verwarmen?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">Zomer: Koelen</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In de zomer werkt de airco als klassieke airconditioning. De binnenunit onttrekt warme lucht
                uit uw ruimte en de buitenunit geeft deze warmte af aan de buitenlucht.
              </p>
              <div className="bg-orange-50 rounded-xl p-3">
                <div className="text-sm font-semibold text-orange-700">SEER prestatie</div>
                <div className="text-orange-600 text-sm">A+++ = SEER ≥ 8.5</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-sky-500">
              <div className="flex items-center gap-3 mb-4">
                <Snowflake className="h-8 w-8 text-sky-500" />
                <h3 className="text-xl font-bold text-gray-900">Winter: Verwarmen</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In de winter keert het proces om. De buitenunit onttrekt warmte uit koude buitenlucht
                en de binnenunit geeft deze warmte af in uw ruimte. Werkt tot -15°C.
              </p>
              <div className="bg-sky-50 rounded-xl p-3">
                <div className="text-sm font-semibold text-sky-700">SCOP prestatie</div>
                <div className="text-sky-600 text-sm">A+++ = SCOP ≥ 4.6</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">Tussenseizoenen</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In voor- en najaar biedt bijverwarmen op koele maar niet extreem koude dagen de hoogste
                efficiëntie. Buitentemperatuur van +7°C levert de optimale SCOP-prestatie.
              </p>
              <div className="bg-green-50 rounded-xl p-3">
                <div className="text-sm font-semibold text-green-700">Optimaal bij</div>
                <div className="text-green-600 text-sm">Buitentemp +7°C = max efficiëntie</div>
              </div>
            </div>
          </div>
        </section>

        {/* Warmtepomp principe */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Airco als lucht-lucht warmtepomp: het principe
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Een reversibele airco (split systeem) is technisch identiek aan een warmtepomp. Het verschil
                  is alleen de warmtebron: een lucht-lucht warmtepomp haalt energie uit buitenlucht en levert
                  die als warme lucht in de woning.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Het koelcircuit werkt met een koudemiddel dat energie kan opnemen bij lage temperatuur en
                  afgeven bij hogere temperatuur. Zelfs bij -15°C buitentemperatuur bevat de lucht nog
                  voldoende energie om te onttrekken.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Het resultaat: bij elke kWh elektriciteit produceert de airco 4 tot 5 kWh warmte.
                  Dit is de reden waarom airco verwarmen zo veel goedkoper is dan gas of elektrisch.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Rendement per verwarmingsbron</h3>
                {[
                  { bron: 'Airco (SCOP 5,15)', eff: '515%', color: 'bg-green-500', width: '100%' },
                  { bron: 'Airco (SCOP 4,0)', eff: '400%', color: 'bg-green-400', width: '78%' },
                  { bron: 'HR-ketel gas', eff: '~107%', color: 'bg-yellow-400', width: '21%' },
                  { bron: 'Elektrische kachel', eff: '100%', color: 'bg-red-400', width: '19%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.bron}</span>
                      <span className="font-bold text-gray-900">{item.eff}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-3">
                      <div className={`${item.color} h-3 rounded-full transition-all`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kostenvergelijking */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Kostenvergelijking: airco vs. gasketel
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-900 to-blue-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Verwarmingsbron</th>
                  <th className="text-center px-6 py-4 font-semibold">Kosten per kWh warmte</th>
                  <th className="text-center px-6 py-4 font-semibold">Jaarkosten 100m²</th>
                  <th className="text-center px-6 py-4 font-semibold">Besparing vs. gas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { bron: 'Airco SCOP 5,15 (A+++)', kwhKost: '€ 0,045', jaarkosten: '€ 225', besparing: '64%', highlight: true },
                  { bron: 'Airco SCOP 4,6 (A++)', kwhKost: '€ 0,050', jaarkosten: '€ 250', besparing: '60%', highlight: false },
                  { bron: 'Airco SCOP 4,0 (A+)', kwhKost: '€ 0,058', jaarkosten: '€ 288', besparing: '54%', highlight: false },
                  { bron: 'HR-ketel gas', kwhKost: '€ 0,125', jaarkosten: '€ 625', besparing: '—', highlight: false },
                  { bron: 'Elektrische kachel', kwhKost: '€ 0,230', jaarkosten: '€ 1.150', besparing: '-84%', highlight: false },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-sky-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.bron}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">{row.kwhKost}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">{row.jaarkosten}</td>
                    <td className={`px-6 py-4 text-center font-bold ${row.highlight ? 'text-green-600' : row.besparing === '—' ? 'text-gray-500' : row.besparing.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>
                      {row.besparing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * Indicatief bij 5.000 kWh warmtevraag, stroom €0,23/kWh, gas €1,10/m³ (8,8 kWh/m³)
          </p>
        </section>

        {/* Hybride gebruik */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hybride gebruik: airco + cv-ketel</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  De slimste strategie voor de meeste Limburgse woningen: gebruik de airco als primaire
                  verwarming bij buitentemperaturen boven -5°C, en de gasketel alleen bij extreme kou.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In Limburg valt slechts 5-10% van de stoofdagen onder -5°C. Dat betekent dat u
                  <strong> 90-95% van het verwarmingsseizoen</strong> kunt profiteren van de goedkope airco-warmte.
                </p>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Verwachte besparing hybride systeem</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Gemiddeld 40–55% lager gasverbruik bij hybride gebruik. Op basis van een gemiddeld
                    Limburgs huis (1.800 m³ gas/jaar) bespaart u €600–900 per jaar.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wanneer welk systeem?</h3>
                <div className="space-y-3">
                  {[
                    { temp: 'Boven +5°C', systeem: 'Alleen airco (hoogste SCOP)', color: 'border-green-400 bg-green-50' },
                    { temp: '-5°C tot +5°C', systeem: 'Airco als primaire verwarming', color: 'border-sky-400 bg-sky-50' },
                    { temp: '-15°C tot -5°C', systeem: 'Airco + gasketel samen', color: 'border-yellow-400 bg-yellow-50' },
                    { temp: 'Onder -15°C', systeem: 'Gasketel als primaire verwarming', color: 'border-red-400 bg-red-50' },
                  ].map((item, i) => (
                    <div key={i} className={`border-l-4 rounded-r-xl px-4 py-3 ${item.color}`}>
                      <div className="font-bold text-gray-900 text-sm">{item.temp}</div>
                      <div className="text-gray-600 text-sm">{item.systeem}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Gratis besparingsadvies voor uw woning</h2>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Wij berekenen exact hoeveel u kunt besparen met een dual-function airco in uw specifieke situatie.
              Inclusief terugverdientijd en keuze voor hybride of volledige vervanging.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0462021430"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all"
              >
                <Phone className="h-5 w-5" />
                046 202 1430
              </a>
              <Link
                to="/airco-installatie-limburg"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all border border-white/20"
              >
                Meer over installatie <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Interne links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer informatie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { to: '/beste-airco-voor-verwarmen', title: 'Beste airco voor verwarmen', desc: 'SCOP vergelijking alle modellen' },
              { to: '/airco-a-plus-plus-plus-verwarmen', title: 'A+++ airco verwarmen', desc: 'Energielabels en besparingen' },
              { to: '/airco-installatie-prijs', title: 'Prijzen en kosten', desc: 'Wat kost een airco installatie?' },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-sky-300 hover:shadow-xl transition-all group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-700">{link.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{link.desc}</p>
                <span className="text-sky-600 font-medium text-sm inline-flex items-center gap-1">
                  Lees meer <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeFAQ === i ? (
                    <ChevronUp className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <SchemaMarkup
          type="FAQPage"
          data={{ questions: faqItems.map((f) => ({ question: f.question, answer: f.answer })) }}
        />
      </div>

      <ContactForm />
    </>
  );
};

export default AircoKoelenEnVerwarmen;
