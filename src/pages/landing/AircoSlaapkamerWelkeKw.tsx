import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Moon, Volume2, CheckCircle, Phone, ArrowRight, Star, Shield, Award,
  ChevronDown, ChevronUp, Thermometer, Ruler, Clock, Zap
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const AircoSlaapkamerWelkeKw: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Slaapkamer: Welk kW?' },
  ];

  const schemaData = {
    name: 'Welke kW Airco voor Slaapkamer? Capaciteitsgids',
    description:
      'Welk vermogen heeft uw slaapkamer-airco nodig? 10m²=2.5kW, 15m²=3.5kW. Stille modellen voor ongestoorde nachtrust. Advies van airco-specialist Limburg.',
    url: 'https://staycoolairco.nl/airco-slaapkamer-welke-kw',
  };

  const modellen = [
    {
      merk: 'Daikin Stylish FTXA',
      geluid: '19 dB',
      kw: '2.0 – 5.0',
      label: 'A+++',
      nachtmodus: true,
      bewegingssensor: true,
      badge: 'Stilste model',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      merk: 'LG Artcool Mirror',
      geluid: '19 dB',
      kw: '2.5 – 5.0',
      label: 'A++',
      nachtmodus: true,
      bewegingssensor: false,
      badge: 'Beste prijs/kwaliteit',
      badgeColor: 'bg-green-600 text-white',
    },
    {
      merk: 'Mitsubishi Heavy ZS-WF',
      geluid: '21 dB',
      kw: '2.5 – 7.1',
      label: 'A++',
      nachtmodus: true,
      bewegingssensor: false,
      badge: 'Meest betrouwbaar',
      badgeColor: 'bg-purple-600 text-white',
    },
  ];

  const faqItems = [
    {
      question: 'Welk kW airco heb ik nodig voor een slaapkamer van 15 m²?',
      answer:
        'Voor een slaapkamer van 15 m² met goede isolatie volstaat een 2.5 kW airco. Bij een matig geïsoleerde slaapkamer of extra ramen op het zuiden kunt u beter kiezen voor 3.5 kW. Twijfelt u? Bel ons voor een gratis adviesgesprek.',
    },
    {
      question: 'Hoeveel decibel is acceptabel in een slaapkamer?',
      answer:
        'Voor een ongestoorde nachtrust is 20–25 dB of minder ideaal. De Daikin Stylish en LG Artcool halen in stille stand slechts 19 dB — vergelijkbaar met een gefluister op 1 meter afstand. De meeste mensen horen dit nauwelijks.',
    },
    {
      question: 'Welke temperatuur is optimaal voor slaap?',
      answer:
        'Slaapexperts adviseren een slaapkamertemperatuur van 16–19°C voor optimale slaap. Een airco stelt u in staat dit precies te reguleren. De nachtmodus houdt de temperatuur stabiel en schakelt terug naar lager geluid.',
    },
    {
      question: 'Waar moet ik de airco hangen in de slaapkamer?',
      answer:
        'Hang de airco nooit recht boven uw bed. De ideale plaatsing is aan de muur tegenover het bed, of aan een zijwand, zodat de lucht niet direct op u blaast. De luchtrichting kunt u instellen zodat koele lucht langs het plafond stroomt voor een gelijkmatige verdeling.',
    },
    {
      question: 'Kan ik de airco de hele nacht laten draaien?',
      answer:
        'Ja, moderne airco\'s zijn hier volledig voor geschikt. Gebruik de nachtmodus of stel een timer in. De airco regelt automatisch de gewenste temperatuur en schaalt terug naar een lager geluidsniveau. Veel mensen slapen juist beter met een stabiele, koele temperatuur.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Welke kW Airco voor Slaapkamer? Capaciteitsgids | StayCool</title>
        <meta
          name="description"
          content="Welk vermogen heeft uw slaapkamer-airco nodig? 10m²=2.5kW, 15m²=3.5kW. Stille modellen voor ongestoorde nachtrust. Advies van airco-specialist Limburg."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-slaapkamer-welke-kw" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Moon className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Slaapkamer airco</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Welk kW Airco voor de Slaapkamer?
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Een slaapkamer-airco moet stil zijn en de juiste capaciteit hebben. Ontdek welk vermogen u nodig heeft
              en welke stille modellen het beste presteren voor een ongestoorde nachtrust.
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

        {/* Capaciteitstabel slaapkamer */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Hoeveel kW voor uw slaapkamer?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-900 to-blue-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Oppervlakte</th>
                  <th className="text-center px-6 py-4 font-semibold">Aanbevolen kW</th>
                  <th className="text-left px-6 py-4 font-semibold">Toelichting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { m2: '10 m²', kw: '2.5 kW', toelichting: 'Kleine slaapkamer, kind, goed geïsoleerd' },
                  { m2: '12–15 m²', kw: '2.5 kW', toelichting: 'Standaard slaapkamer, goede isolatie' },
                  { m2: '15–18 m²', kw: '2.5–3.5 kW', toelichting: 'Grotere slaapkamer of zijde zuidkant' },
                  { m2: '18–25 m²', kw: '3.5 kW', toelichting: 'Master bedroom, matig geïsoleerd' },
                  { m2: '25+ m²', kw: '5.0 kW', toelichting: 'Suite of open slaapkamer', },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-sky-700">{row.m2}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-sky-100 text-sky-800 font-bold px-3 py-1 rounded-full">{row.kw}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            * Bij goede isolatie (Rc ≥ 2.5). Voor zolders of matige isolatie: neem de eerstvolgende maat.
          </p>
        </section>

        {/* Geluid is cruciaal */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Volume2 className="h-7 w-7 text-sky-600" />
            Geluid is cruciaal in de slaapkamer
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In de slaapkamer geldt geluid als het belangrijkste criterium. De meeste mensen horen geluiden
                boven 25 dB bewust en worden daar's nachts wakker van. Kies daarom altijd een model met een
                <strong> stille modus of nachtmodus</strong> met een geluidsniveau onder 25 dB.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                De beste modellen halen in de stilste stand slechts 19 dB. Ter vergelijking: een rustige
                bibliotheek heeft 30 dB, vallende bladeren zijn 20 dB. Een airco op 19 dB hoort u
                nauwelijks in een normale slaapkamer.
              </p>
              <div className="bg-sky-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Geluidsniveaus ter vergelijking</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {[
                    { db: '19 dB', label: 'Daikin Stylish stille modus (slaapkamer-ideaal)' },
                    { db: '20 dB', label: 'Vallende bladeren' },
                    { db: '25 dB', label: 'Fluisteren op 1 meter' },
                    { db: '30 dB', label: 'Rustige bibliotheek' },
                    { db: '40 dB', label: 'Normale airco' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="font-bold text-sky-700 w-12">{item.db}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Top stille modellen</h3>
              {modellen.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900">{m.merk}</h4>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${m.badgeColor}`}>{m.badge}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="font-bold text-sky-700">{m.geluid}</div>
                      <div className="text-gray-500 text-xs">Geluid min.</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="font-bold text-gray-900">{m.kw} kW</div>
                      <div className="text-gray-500 text-xs">Bereik</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="font-bold text-green-600">{m.label}</div>
                      <div className="text-gray-500 text-xs">Energielabel</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-3 text-xs text-gray-600">
                    <span className={`flex items-center gap-1 ${m.nachtmodus ? 'text-green-600' : 'text-gray-400'}`}>
                      <CheckCircle className="h-3 w-3" /> Nachtmodus
                    </span>
                    <span className={`flex items-center gap-1 ${m.bewegingssensor ? 'text-green-600' : 'text-gray-400'}`}>
                      {m.bewegingssensor ? <CheckCircle className="h-3 w-3" /> : <span className="w-3 h-3 inline-block" />}
                      Bewegingssensor
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temperatuuradvies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Thermometer className="h-7 w-7 text-orange-500" />
              Optimale slaapkamertemperatuur
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Slaapexperts en de WHO adviseren een slaapkamertemperatuur van <strong>16–19°C</strong> voor optimale nachtrust.
                  Uw lichaam koelt van nature af tijdens de slaap — een koel slaapkamerklimaat ondersteunt dit.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Met een airco stelt u de exacte temperatuur in via de afstandsbediening of app. Stel een
                  nachtprogramma in zodat de airco automatisch de gewenste temperatuur aanhoudt zonder
                  handmatige interventie.
                </p>
                <div className="flex items-center gap-4 p-4 bg-sky-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-700">16–19°C</div>
                    <div className="text-xs text-gray-500">Optimaal voor slaap</div>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Stel uw airco in op uw persoonlijke voorkeur binnen dit bereik.
                    De meeste mensen slapen het best bij 18°C.
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Plaatsingstips slaapkamer</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    'NIET recht boven het bed: koude lucht niet direct op u',
                    'Voorkeur: aan muur tegenover bed of zijwand',
                    'Richt de lamellen naar het plafond voor indirecte koeling',
                    'Houd minimaal 15 cm vrij rondom de binnenunit',
                    'Installeer ver van het raam voor optimale luchtcirculatie',
                    'Zorg voor goed bereikbare leiding naar buiten (bij voorkeur via zijmuur)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-sky-600 flex-shrink-0 mt-0.5" />
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Slaapkamer airco laten installeren?</h2>
              <p className="text-sky-100 mb-6 leading-relaxed">
                Onze installateurs adviseren u over de beste plaatsing en juiste capaciteit. Installatie
                inclusief montage, leidingwerk en inbedrijfstelling — alles op één dag geregeld.
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
                  to="/airco-installatie-limburg"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all border border-white/20"
                >
                  Meer over installatie <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Clock className="h-5 w-5" />, text: 'Installatie op 1 dag' },
                { icon: <Shield className="h-5 w-5" />, text: '5 jaar garantie' },
                { icon: <CheckCircle className="h-5 w-5" />, text: 'STEK gecertificeerd' },
                { icon: <Star className="h-5 w-5" />, text: '4.9 ster beoordeeld' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer informatie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { to: '/airco-3-5kw-hoeveel-m2', title: 'Airco capaciteitsgids', desc: 'Hoeveel kW voor uw ruimte?' },
              { to: '/airco-installatie-prijs', title: 'Wat kost een airco?', desc: 'Transparante prijsinformatie' },
              { to: '/airco-installatie-limburg', title: 'Installatie Limburg', desc: 'Uw lokale specialist' },
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

export default AircoSlaapkamerWelkeKw;
