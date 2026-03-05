import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Thermometer, Zap, TrendingUp, CheckCircle, Phone, ArrowRight,
  Star, Shield, Award, Leaf, Euro, ChevronDown, ChevronUp, Snowflake
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const BesteAircoVoorVerwarmen: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Beste Airco voor Verwarmen' },
  ];

  const schemaData = {
    name: 'Beste Airco voor Verwarmen 2025 | SCOP Vergelijking',
    description:
      'Welke airco is het beste voor verwarmen? Vergelijk SCOP waarden, energielabels en kosten. Daikin, Mitsubishi, LG. Advies van Limburg-specialist StayCool.',
    url: 'https://staycoolairco.nl/beste-airco-voor-verwarmen',
  };

  const faqItems = [
    {
      question: 'Wat is SCOP en waarom is het belangrijk?',
      answer:
        'SCOP staat voor Seasonal Coefficient of Performance en geeft aan hoeveel warmte een airco produceert per kWh elektriciteit over een heel seizoen gemeten. Een SCOP van 4.0 betekent dat u voor elke kWh stroom 4 kWh warmte krijgt. Hoe hoger de SCOP, hoe zuiniger en goedkoper het verwarmen.',
    },
    {
      question: 'Tot welke buitentemperatuur werkt een airco voor verwarmen?',
      answer:
        'Moderne airco\'s werken tot -15°C buitentemperatuur voor verwarmen. De meeste modellen presteren optimaal boven -10°C. Bij extreme vorst daalt de efficiëntie, maar ze blijven functioneren. De Mitsubishi Heavy ZS-WF werkt zelfs tot -25°C buitentemperatuur.',
    },
    {
      question: 'Is een airco goedkoper dan een gasketel voor verwarmen?',
      answer:
        'Ja, bij een SCOP van 4.0 en een stroomprijs van €0,23/kWh kost aircowarmen circa €0,058 per kWh warmte. Een HR-ketel met gas (€1,10/m³ bij 8,8 kWh/m³) kost circa €0,125 per kWh warmte. U bespaart dus meer dan 50% op stookkosten.',
    },
    {
      question: 'Welk merk heeft de beste SCOP waarde?',
      answer:
        'Daikin heeft met de Stylish-serie een SCOP van 5,15 en is daarmee marktleider op energie-efficiëntie. Mitsubishi Heavy en LG volgen met een SCOP van respectievelijk 4,6 voor hun beste modellen. Tosot biedt goede prestaties (SCOP 4,0) in het budgetsegment.',
    },
    {
      question: 'Kan ik mijn gasketel vervangen door een airco?',
      answer:
        'Een airco is een uitstekende aanvulling op uw cv-ketel voor tussenseizoenen en milde winters. Voor volledige vervanging is een goed geïsoleerde woning nodig. Een hybride systeem (airco + cv-ketel) is voor de meeste Limburgse woningen de meest efficiënte combinatie.',
    },
  ];

  const models = [
    {
      rank: 1,
      name: 'Daikin Stylish FTXA',
      scop: 5.15,
      seer: 8.75,
      geluid: '19 dB',
      label: 'A+++',
      prijs: 'Hoog',
      badge: 'Beste energie',
      badgeColor: 'bg-yellow-400 text-yellow-900',
      pros: ['Hoogste SCOP op de markt', 'Flash Streamer luchtzuivering', 'Coanda-effect luchtverdeling', 'Stijlvol design (3 kleuren)'],
      highlight: true,
    },
    {
      rank: 2,
      name: 'Mitsubishi Heavy ZS-WF',
      scop: 4.6,
      seer: 8.5,
      geluid: '21 dB',
      label: 'A++',
      prijs: 'Hoog',
      badge: 'Meest betrouwbaar',
      badgeColor: 'bg-blue-500 text-white',
      pros: ['Werkt tot -25°C buitentemp', 'Allergeenfilter standaard', 'Extreem duurzaam', '3D Auto luchtverdeling'],
      highlight: false,
    },
    {
      rank: 3,
      name: 'LG Artcool Mirror',
      scop: 4.6,
      seer: 8.5,
      geluid: '19 dB',
      label: 'A++',
      prijs: 'Midden',
      badge: 'Beste prijs/kwaliteit',
      badgeColor: 'bg-green-500 text-white',
      pros: ['Strak spiegelontwerp', 'ThinQ smart home', 'Dual Ionizer luchtzuivering', 'Ingebouwde WiFi'],
      highlight: false,
    },
    {
      rank: 4,
      name: 'Tosot (Gree) serie',
      scop: 4.0,
      seer: 7.5,
      geluid: '22 dB',
      label: 'A+',
      prijs: 'Laag',
      badge: 'Budget keuze',
      badgeColor: 'bg-gray-400 text-white',
      pros: ['Beste prijs in segment', 'Gree technologie', 'Betrouwbare componenten', '5 jaar garantie'],
      highlight: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Beste Airco voor Verwarmen 2025 | SCOP Vergelijking | StayCool</title>
        <meta
          name="description"
          content="Welke airco is het beste voor verwarmen? Vergelijk SCOP waarden, energielabels en kosten. Daikin, Mitsubishi, LG. Advies van Limburg-specialist StayCool."
        />
        <link rel="canonical" href="https://staycoolairco.nl/beste-airco-voor-verwarmen" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Thermometer className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Verwarmen met airco</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Beste Airco voor Verwarmen 2025
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Moderne airco's zijn de meest energiezuinige manier om uw woning te verwarmen. Vergelijk SCOP-waarden,
              besparingen en de beste modellen voor Limburgse woningen.
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

        {/* Wat is SCOP */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat is SCOP?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                SCOP staat voor <strong>Seasonal Coefficient of Performance</strong> — de seizoensprestatiefactor voor verwarmen.
                Het getal geeft aan hoeveel kWh warmte een airco produceert per kWh elektriciteit, gemeten over het gehele verwarmingsseizoen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bij een SCOP van 4,0 ontvangt u voor iedere kWh stroom <strong>4 kWh warmte</strong>. Een traditionele
                elektrische kachel levert slechts 1 kWh warmte per kWh stroom — airco is dus tot 5x zuiniger.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoe hoger de SCOP, hoe lager uw verwarmingskosten. Een verschil van 1 SCOP-punt kan over een
                verwarmingsseizoen honderden euro's schelen.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Euro className="h-5 w-5 text-green-600" />
                Kostenvergelijking per kWh warmte
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Airco SCOP 5,15 (Daikin A+++)', cost: '€ 0,045', color: 'bg-green-500', width: '36%' },
                  { label: 'Airco SCOP 4,6 (A++)', cost: '€ 0,050', color: 'bg-green-400', width: '40%' },
                  { label: 'Airco SCOP 4,0 (A+)', cost: '€ 0,058', color: 'bg-yellow-400', width: '46%' },
                  { label: 'HR-ketel gas', cost: '€ 0,125', color: 'bg-red-400', width: '100%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-bold text-gray-900">{item.cost}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">* Bij stroomprijs €0,23/kWh en gas €1,10/m³ (8,8 kWh/m³)</p>
            </div>
          </div>
        </section>

        {/* SCOP Vergelijkingstabel */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">SCOP Vergelijking 2025</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-900 to-blue-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Model</th>
                  <th className="text-center px-6 py-4 font-semibold">SCOP</th>
                  <th className="text-center px-6 py-4 font-semibold">SEER</th>
                  <th className="text-center px-6 py-4 font-semibold">Label</th>
                  <th className="text-center px-6 py-4 font-semibold">Geluid</th>
                  <th className="text-center px-6 py-4 font-semibold">Prijs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {models.map((m) => (
                  <tr key={m.rank} className={m.highlight ? 'bg-sky-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                          {m.rank}
                        </span>
                        <div>
                          <span className="font-semibold text-gray-900">{m.name}</span>
                          <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full ${m.badgeColor}`}>
                            {m.badge}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-bold text-lg ${m.highlight ? 'text-green-600' : 'text-gray-900'}`}>
                        {m.scop}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-gray-700">{m.seer}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm">
                        {m.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">{m.geluid}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{m.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top 3 aanbevelingen */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Top 3 Aanbevelingen voor Verwarmen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {models.slice(0, 3).map((m) => (
              <div
                key={m.rank}
                className={`bg-white rounded-2xl shadow-lg p-6 border ${m.highlight ? 'border-sky-400 ring-2 ring-sky-200' : 'border-gray-100'}`}
              >
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${m.badgeColor}`}>
                  #{m.rank} {m.badge}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>SCOP {m.scop}</span>
                  <span>•</span>
                  <span>{m.label}</span>
                  <span>•</span>
                  <span>{m.geluid}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {m.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/airco-installatie-limburg"
                  className="block text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
                >
                  Vraag offerte aan
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Temperatuurbereik */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Snowflake className="h-8 w-8 text-sky-500" />
              Werking bij lage buitentemperaturen
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Moderne warmtepompen werken tot <strong>-15°C buitentemperatuur</strong>. Hiermee kunt u zelfs bij strenge
              Limburgse winters efficiënt verwarmen. Bij temperaturen onder -10°C daalt de SCOP geleidelijk, maar de
              airco blijft warmte produceren.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { temp: '-15°C', eff: '~70%', label: 'Werkt, verminderd' },
                { temp: '-10°C', eff: '~85%', label: 'Goed' },
                { temp: '0°C', eff: '~95%', label: 'Zeer goed' },
                { temp: '+7°C', eff: '100%', label: 'Optimaal' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-sky-50 rounded-xl">
                  <div className="text-2xl font-bold text-sky-700">{item.temp}</div>
                  <div className="text-lg font-semibold text-gray-900 mt-1">{item.eff}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA sectie */}
        <section className="mb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Gratis advies op maat</h2>
              <p className="text-sky-100 mb-6 leading-relaxed">
                Wij berekenen voor uw situatie welk model de beste energiebesparing oplevert. Onze F-gassen gecertificeerde
                monteurs installeren in heel Limburg.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0462021430"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Bel nu: 046 202 1430
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Leaf className="h-5 w-5" />, text: 'Tot 63% goedkoper dan gas' },
                { icon: <TrendingUp className="h-5 w-5" />, text: 'Stijgende huiswaarde' },
                { icon: <Shield className="h-5 w-5" />, text: '5 jaar garantie' },
                { icon: <CheckCircle className="h-5 w-5" />, text: 'STEK erkend installateur' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-orange-400">{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interne links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde artikelen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { to: '/lg-vs-daikin-airco', title: 'LG vs Daikin Vergelijking', desc: 'Welk A-merk past het beste bij u?' },
              { to: '/airco-a-plus-plus-plus-verwarmen', title: 'Airco A+++ Verwarmen', desc: 'Energielabels en SCOP uitgelegd' },
              { to: '/airco-installatie-limburg', title: 'Airco Installatie Limburg', desc: 'Professionele installatie in uw regio' },
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

export default BesteAircoVoorVerwarmen;
