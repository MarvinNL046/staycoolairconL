import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Zap, TrendingUp, Euro, CheckCircle, Phone, ArrowRight, Star, Shield, Award,
  ChevronDown, ChevronUp, Leaf, Calculator, BarChart3
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const AircoAPlusPlusVerwarmen: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [jaarlijkseKwh, setJaarlijkseKwh] = useState<number>(5000);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco A+++ Verwarmen' },
  ];

  const schemaData = {
    name: 'Airco A+++ Verwarmen | Energielabel & SCOP Uitgelegd',
    description:
      'Wat betekent energielabel A+++ bij een airco? SCOP > 4.6 = enorm voordelig verwarmen. Vergelijk kosten vs gas en HR-ketel. StayCool Airco Limburg.',
    url: 'https://staycoolairco.nl/airco-a-plus-plus-plus-verwarmen',
  };

  const berekenBesparing = () => {
    const kostenAplusplus = (jaarlijkseKwh / 5.15) * 0.23;
    const kostenGas = (jaarlijkseKwh / 8.8) * 1.10;
    const besparing = kostenGas - kostenAplusplus;
    return {
      airco: kostenAplusplus.toFixed(0),
      gas: kostenGas.toFixed(0),
      besparing: besparing.toFixed(0),
      procent: Math.round((besparing / kostenGas) * 100),
    };
  };

  const resultaat = berekenBesparing();

  const labels = [
    {
      label: 'A+++',
      scop: '≥ 4.6',
      kwhKost: '€ 0,045–0,050',
      kleur: 'bg-green-600',
      breedte: '100%',
      highlight: true,
      note: 'Daikin Stylish (SCOP 5,15), Mitsubishi Heavy premium',
    },
    {
      label: 'A++',
      scop: '3.8 – 4.6',
      kwhKost: '€ 0,050–0,061',
      kleur: 'bg-green-500',
      breedte: '80%',
      highlight: false,
      note: 'LG Artcool, Mitsubishi Heavy ZS-W',
    },
    {
      label: 'A+',
      scop: '3.0 – 3.8',
      kwhKost: '€ 0,061–0,077',
      kleur: 'bg-lime-500',
      breedte: '60%',
      highlight: false,
      note: 'Tosot, instapmodellen',
    },
    {
      label: 'A',
      scop: '2.5 – 3.0',
      kwhKost: '€ 0,077–0,092',
      kleur: 'bg-yellow-500',
      breedte: '45%',
      highlight: false,
      note: 'Oudere of goedkopere modellen',
    },
    {
      label: 'HR-ketel gas',
      scop: '—',
      kwhKost: '€ 0,125',
      kleur: 'bg-red-500',
      breedte: '30%',
      highlight: false,
      note: 'Gas €1,10/m³, HR-ketel 107% rendement',
    },
  ];

  const faqItems = [
    {
      question: 'Wat betekent energielabel A+++ bij een airco?',
      answer:
        'Energielabel A+++ is het hoogste energielabel voor airconditioners. Voor verwarming geldt A+++ bij een SCOP van 4,6 of hoger. Dit betekent dat de airco voor elke kWh elektriciteit minimaal 4,6 kWh warmte produceert. Het label garandeert extreem zuinig verwarmen.',
    },
    {
      question: 'Welke modellen hebben het energielabel A+++ voor verwarmen?',
      answer:
        'De Daikin Stylish FTXA-serie behaalt SCOP 5,15 (ruim A+++). De Mitsubishi Heavy Industries ZS-WF serie zit op SCOP 4,6 (A+++). LG Artcool en andere modellen halen A++. Vraag onze adviseurs welke modellen momenteel A+++ gecertificeerd zijn.',
    },
    {
      question: 'Hoe lang duurt het voor een A+++ airco zichzelf terugverdient?',
      answer:
        'Bij een Limburgse gemiddelde woning (1.800 m³ gas/jaar) en volledige vervanging door een A+++ airco is de terugverdientijd 3-5 jaar. Bij hybride gebruik (airco naast gasketel) is de terugverdientijd 2-4 jaar doordat de meerinvestering vs. A++ kleiner is.',
    },
    {
      question: 'Is het verschil tussen A++ en A+++ de moeite waard?',
      answer:
        'Ja, bij intensief verwarmingsgebruik. Het SCOP-verschil tussen A++ (4,6) en A+++ (5,15) is 12%. Op een jaarlijkse verwarmingsrekening van €300 bespaart A+++ circa €36 extra per jaar versus A++. Over 15 jaar is dat €540 extra besparing.',
    },
    {
      question: 'Geldt subsidie voor A+++ airco\'s?',
      answer:
        'Via de ISDE-subsidie (Investeringssubsidie Duurzame Energie) kunt u subsidie aanvragen voor lucht-lucht warmtepompen met een SCOP van minimaal 3,5. A+++ modellen kwalificeren altijd. De subsidie bedraagt momenteel €400-1.800 afhankelijk van het model. Vraag ons naar de actuele regelingen.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Airco A+++ Verwarmen | Energielabel & SCOP Uitgelegd | StayCool</title>
        <meta
          name="description"
          content="Wat betekent energielabel A+++ bij een airco? SCOP > 4.6 = enorm voordelig verwarmen. Vergelijk kosten vs gas en HR-ketel. StayCool Airco Limburg."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-a-plus-plus-plus-verwarmen" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Energielabels uitgelegd</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Airco A+++ Verwarmen: Wat Betekent Het?
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Een A+++ airco bespaart tot 63% op uw verwarmingskosten vergeleken met een gasketel.
              Leer hoe energielabels en SCOP-waarden werken — en welke modellen de hoogste besparing leveren.
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

        {/* Labels uitleg */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Energielabels voor verwarmen: A tot A+++
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Airco-energielabels voor verwarmen worden bepaald door de <strong>SCOP-waarde</strong>
                (Seasonal Coefficient of Performance). Hoe hoger de SCOP, hoe efficiënter en zuiniger
                de airco verwarmt over het gehele seizoen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Het label geeft direct inzicht in verwachte stookkosten. Een A+++ airco verwarmt voor
                slechts <strong>€0,045 per kWh warmte</strong> — een HR-gasketel kost €0,125/kWh.
                Dat is bijna 3x goedkoper.
              </p>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">A+++ vs. gasketel: tot 64% besparing</span>
                </div>
                <p className="text-green-700 text-sm">
                  Bij een jaarlijkse warmtevraag van 5.000 kWh en stroom à €0,23/kWh bespaart een A+++ airco
                  circa €400 per jaar ten opzichte van een gasketel.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {labels.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl ${item.highlight ? 'bg-green-50 border-2 border-green-200' : 'bg-white border border-gray-100 shadow-sm'}`}
                >
                  <div className={`${item.kleur} text-white font-bold text-sm px-3 py-2 rounded-lg min-w-[56px] text-center`}>
                    {item.label}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-full h-3 mb-1">
                      <div className={`${item.kleur} h-3 rounded-full`} style={{ width: item.breedte }} />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>SCOP {item.scop}</span>
                      <span>{item.kwhKost}/kWh warmte</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Besparingsberekening */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="h-7 w-7 text-sky-600" />
              Bereken uw jaarlijkse besparing
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jaarlijkse warmtevraag (kWh)
                </label>
                <input
                  type="range"
                  min="2000"
                  max="15000"
                  step="500"
                  value={jaarlijkseKwh}
                  onChange={(e) => setJaarlijkseKwh(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full accent-sky-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>2.000 kWh</span>
                  <span className="font-bold text-sky-700">{jaarlijkseKwh.toLocaleString()} kWh</span>
                  <span>15.000 kWh</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Gemiddelde Limburgse woning: ~5.000–8.000 kWh/jaar
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1">A+++ airco</div>
                    <div className="text-xl font-bold text-green-700">€ {resultaat.airco}</div>
                    <div className="text-xs text-gray-500">per jaar</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1">HR-ketel gas</div>
                    <div className="text-xl font-bold text-red-600">€ {resultaat.gas}</div>
                    <div className="text-xs text-gray-500">per jaar</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-xl">
                    <div className="text-xs text-gray-500 mb-1">Besparing</div>
                    <div className="text-xl font-bold text-sky-700">€ {resultaat.besparing}</div>
                    <div className="text-xs text-gray-500">{resultaat.procent}%/jaar</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Terugverdientijd (€500 meerinvestering)</span>
                    <span className="font-bold text-gray-900">
                      {Math.ceil(500 / Number(resultaat.besparing))} jaar
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Besparing over 15 jaar</span>
                    <span className="font-bold text-green-700">€ {(Number(resultaat.besparing) * 15).toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Indicatief bij stroom €0,23/kWh, gas €1,10/m³. Werkelijke waarden kunnen afwijken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beste A+++ modellen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Beste A+++ modellen voor verwarmen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                model: 'Daikin Stylish FTXA',
                scop: '5.15',
                label: 'A+++',
                badge: '#1 Beste SCOP',
                badgeColor: 'bg-yellow-400 text-yellow-900',
                features: [
                  'SCOP 5,15 — hoogste op de markt',
                  'Flash Streamer luchtzuivering',
                  'Coanda-effect voor gelijkmatige warmteverdeling',
                  'Bewegingssensor voor energiebesparing',
                  'Verkrijgbaar in wit, zilver en zwart',
                  '10 jaar compressorgarantie',
                ],
              },
              {
                model: 'Mitsubishi Heavy ZS-WF',
                scop: '4.6',
                label: 'A+++',
                badge: '#2 Meest betrouwbaar',
                badgeColor: 'bg-blue-600 text-white',
                features: [
                  'SCOP 4,6 — grens A+++',
                  'Werkt bij buitentemperatuur tot -25°C',
                  'Allergeenfilter standaard ingebouwd',
                  '3D Auto voor gelijkmatige luchtdistributie',
                  'Extreem duurzaam en langlevend',
                  'Jet Air voor snelle opwarming',
                ],
              },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{m.model}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-sky-700">SCOP {m.scop}</span>
                      <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full text-sm">
                        {m.label}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.badgeColor}`}>{m.badge}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {m.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
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

        {/* Interne links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer informatie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { to: '/beste-airco-voor-verwarmen', title: 'Beste airco voor verwarmen', desc: 'SCOP vergelijking alle merken' },
              { to: '/airco-koelen-en-verwarmen', title: 'Koelen én verwarmen', desc: 'Dual function airco uitgelegd' },
              { to: '/airco-installatie-prijs', title: 'Prijzen', desc: 'Wat kost een A+++ airco installatie?' },
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

export default AircoAPlusPlusVerwarmen;
