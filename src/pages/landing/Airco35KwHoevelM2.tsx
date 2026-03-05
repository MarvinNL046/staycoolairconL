import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Ruler, Home, CheckCircle, Phone, ArrowRight, Star, Shield, Award,
  ChevronDown, ChevronUp, AlertCircle, Sun, Thermometer, Calculator
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const Airco35KwHoevelM2: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [m2Input, setM2Input] = useState<number>(35);
  const [isolatie, setIsolatie] = useState<'goed' | 'matig'>('goed');

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Capaciteit per m²' },
  ];

  const schemaData = {
    name: 'Airco 3.5 kW Hoeveel m²? Capaciteitsgids',
    description:
      'Hoeveel m² koelt een airco van 3.5 kW? En 2.5 kW of 5 kW? Bereken de juiste capaciteit voor uw ruimte. Isolatie, oriëntatie, hoogte — alles uitgelegd.',
    url: 'https://staycoolairco.nl/airco-3-5kw-hoeveel-m2',
  };

  const capaciteitsData = [
    {
      kw: '2.5 kW',
      goedM2: '20–25 m²',
      matigM2: '15–20 m²',
      type: 'Slaapkamer, kleine woonkamer',
      kleur: 'bg-sky-100 border-sky-300',
    },
    {
      kw: '3.5 kW',
      goedM2: '30–40 m²',
      matigM2: '25–30 m²',
      type: 'Woonkamer, kantoor',
      kleur: 'bg-blue-100 border-blue-400',
      highlight: true,
    },
    {
      kw: '5.0 kW',
      goedM2: '45–60 m²',
      matigM2: '35–45 m²',
      type: 'Grote woonkamer, open keuken',
      kleur: 'bg-indigo-100 border-indigo-400',
    },
    {
      kw: '7.0 kW',
      goedM2: '60–80 m²',
      matigM2: '50–65 m²',
      type: 'Open plan, bedrijfspand',
      kleur: 'bg-purple-100 border-purple-400',
    },
  ];

  const berekenCapaciteit = () => {
    const basis = isolatie === 'goed' ? 100 : 130;
    const watt = m2Input * basis;
    const kw = watt / 1000;
    if (kw <= 2.5) return '2.5 kW';
    if (kw <= 3.5) return '3.5 kW';
    if (kw <= 5.0) return '5.0 kW';
    return '7.0 kW of meer';
  };

  const faqItems = [
    {
      question: 'Hoeveel m² kan een 3.5 kW airco koelen?',
      answer:
        'Een 3.5 kW airco koelt in een goed geïsoleerde ruimte 30–40 m². In een matig geïsoleerde ruimte is dat 25–30 m². Als vuistregel geldt: 100W per m² bij goede isolatie, 130W per m² bij matige isolatie.',
    },
    {
      question: 'Wat is beter: een te grote of te kleine airco?',
      answer:
        'Beide zijn slecht. Een te grote airco schakelt voortdurend in en uit (kort-cycling), waardoor hij minder efficiënt werkt en sneller slijt. Een te kleine airco draait continu op vol vermogen en haalt de gewenste temperatuur niet. Juiste dimensionering is essentieel.',
    },
    {
      question: 'Moet ik rekening houden met extra factoren bij de berekening?',
      answer:
        'Ja. Voeg 20% toe voor zolders (warmteopbouw door dak), 15% voor grote ramen op het zuiden, en 10% voor gebouwen in gebruik overdag met veel personen. Trek 10% af voor nieuwbouw met uitstekende isolatie (Rc > 3.5).',
    },
    {
      question: 'Kan StayCool een nauwkeurige capaciteitsberekening maken?',
      answer:
        'Ja. Onze technici voeren een koelastberekening uit op basis van uw specifieke situatie: oppervlakte, hoogte, isolatiewaarden, oriëntatie, ramen en gebruikspatroon. Dit garandeert de optimale keuze. De berekening is gratis en vrijblijvend.',
    },
    {
      question: 'Werkt dezelfde airco ook voor verwarmen?',
      answer:
        'Ja, alle split-airco\'s die wij installeren zijn reversibel — ze koelen én verwarmen. De capaciteit voor verwarmen (uitgedrukt in SCOP) is doorgaans iets hoger dan voor koelen. Zo heeft een 3.5 kW koelunit vaak 4.0 kW verwarmingsvermogen.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Airco 3.5 kW Hoeveel m²? Capaciteitsgids | StayCool Airco</title>
        <meta
          name="description"
          content="Hoeveel m² koelt een airco van 3.5 kW? En 2.5 kW of 5 kW? Bereken de juiste capaciteit voor uw ruimte. Isolatie, oriëntatie, hoogte — alles uitgelegd."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-3-5kw-hoeveel-m2" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Ruler className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Capaciteitsberekening</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Airco 3.5 kW: Hoeveel m²?
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              De juiste capaciteit is de sleutel tot een efficiënte airco. Te groot of te klein — beide zijn
              kostbaar. Bereken hier hoeveel kW u nodig heeft voor uw ruimte.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0462021430"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all"
              >
                <Phone className="h-5 w-5" />
                Gratis advies: 046 202 1430
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

        {/* Vuistregel */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">De vuistregel voor capaciteit</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Als basisregel hanteren wij <strong>100 Watt per m²</strong> voor goed geïsoleerde ruimtes
                (nieuwbouw of gerenoveerd na 2010). Voor matig geïsoleerde woningen (bouw voor 2000) geldt
                <strong> 130 Watt per m²</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Een 3.5 kW airco heeft dus voldoende vermogen voor een goed geïsoleerde ruimte van 35 m².
                Maar dit is een startpunt — de werkelijke capaciteit hangt ook af van:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  'Plafondhoogte (meer volume = meer koelvermogen)',
                  'Oriëntatie en bezonning van de ramen',
                  'Aantal aanwezige personen',
                  'Warmtebronnen (computers, apparaten)',
                  'Bovenverdieping of begane grond',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-sky-600" />
                Snelle capaciteitsberekening
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Oppervlakte (m²)</label>
                  <input
                    type="number"
                    min="10"
                    max="200"
                    value={m2Input}
                    onChange={(e) => setM2Input(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-gray-50 text-gray-900 font-semibold text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Isolatie</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['goed', 'matig'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setIsolatie(opt)}
                        className={`py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                          isolatie === opt
                            ? 'bg-sky-600 text-white border-sky-600'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-sky-300'
                        }`}
                      >
                        {opt === 'goed' ? 'Goed (nieuwbouw)' : 'Matig (oud)'}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-sky-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Aanbevolen capaciteit</div>
                  <div className="text-3xl font-bold text-sky-700">{berekenCapaciteit()}</div>
                  <div className="text-xs text-gray-500 mt-1">Dit is een indicatie — voor zekerheid: bel ons</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capaciteitstabel */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Capaciteitstabel: kW per m²</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-900 to-blue-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Vermogen</th>
                  <th className="text-center px-6 py-4 font-semibold">Goed geïsoleerd</th>
                  <th className="text-center px-6 py-4 font-semibold">Matig geïsoleerd</th>
                  <th className="text-left px-6 py-4 font-semibold">Typisch gebruik</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {capaciteitsData.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-sky-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4">
                      <span className={`font-bold text-lg ${row.highlight ? 'text-sky-700' : 'text-gray-900'}`}>
                        {row.kw}
                      </span>
                      {row.highlight && (
                        <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                          Meest gevraagd
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">{row.goedM2}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-700">{row.matigM2}</td>
                    <td className="px-6 py-4 text-gray-600">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Correctiefactoren */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Correctiefactoren</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sun className="h-5 w-5 text-orange-500" />
                Meer vermogen nodig (+%)
              </h3>
              <div className="space-y-3">
                {[
                  { factor: 'Zolder of bovenverdieping', pct: '+20%' },
                  { factor: 'Grote ramen op het zuiden', pct: '+15%' },
                  { factor: 'Weinig of geen schaduw', pct: '+10%' },
                  { factor: 'Kantoor met meer dan 3 personen', pct: '+10%' },
                  { factor: 'Open keuken met apparaten', pct: '+10%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-600 text-sm">{item.factor}</span>
                    <span className="font-bold text-orange-600">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Minder vermogen nodig (-%)
              </h3>
              <div className="space-y-3">
                {[
                  { factor: 'Nieuwbouw (Rc > 3.5)', pct: '-10%' },
                  { factor: 'Ramen op het noorden', pct: '-10%' },
                  { factor: 'Ruimte overdag niet gebruikt', pct: '-10%' },
                  { factor: 'Volledig in de schaduw', pct: '-15%' },
                  { factor: 'Begane grond, noordzijde', pct: '-15%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-600 text-sm">{item.factor}</span>
                    <span className="font-bold text-green-600">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gevolgen fout dimensioneren */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="h-7 w-7 text-orange-500" />
              Gevolgen van fout gedimensioneerd
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-red-600">Te groot gedimensioneerd</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    'Kort-cycling: unit schakelt elke paar minuten in/uit',
                    'Slechte ontvochtigen: ruimte voelt vochtig en koud',
                    'Hogere slijtage door veelvuldig op/afschakelen',
                    'Hogere aanschafkosten zonder voordeel',
                    'Lager comfort ondanks hogere investering',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-orange-600">Te klein gedimensioneerd</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    'Haalt de gewenste temperatuur niet op hete dagen',
                    'Draait continu op vol vermogen = hoog stroomverbruik',
                    'Snellere slijtage door overbelasting',
                    'Luidruchtig omdat compressor altijd vol draait',
                    'Teleurstelling na investering',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Gratis capaciteitsberekening door StayCool</h2>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Onze technici berekenen nauwkeurig welk vermogen u nodig heeft. Wij komen vrijblijvend langs
              voor een meting en advies op maat — inclusief offerte.
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
              { to: '/airco-slaapkamer-welke-kw', title: 'Airco voor slaapkamer', desc: 'Welk kW is ideaal voor uw slaapkamer?' },
              { to: '/airco-installatie-prijs', title: 'Wat kost een airco?', desc: 'Prijzen van installatie en aanschaf' },
              { to: '/airco-installatie-limburg', title: 'Installatie in Limburg', desc: 'Uw lokale airco specialist' },
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

export default Airco35KwHoevelM2;
