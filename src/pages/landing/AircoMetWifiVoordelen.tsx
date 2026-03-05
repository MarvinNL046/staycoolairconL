import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Wifi, Smartphone, CheckCircle, Phone, ArrowRight, Star, Shield, Award,
  ChevronDown, ChevronUp, Zap, Clock, Home, BarChart3, Settings, Leaf
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const AircoMetWifiVoordelen: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco met WiFi Voordelen' },
  ];

  const schemaData = {
    name: 'Airco met WiFi | Smart Home Integratie | Voordelen',
    description:
      'Airco met WiFi bedienen via app. Thuis warm voor je thuiskomt, energiebesparing met slimme planning. Alle voordelen van smart airco uitgelegd.',
    url: 'https://staycoolairco.nl/airco-met-wifi-voordelen',
  };

  const apps = [
    {
      merk: 'Daikin',
      app: 'Daikin Online Controller',
      platforms: ['Google Home', 'Amazon Alexa', 'Apple HomeKit'],
      features: ['Geofencing', 'Energiemonitoring', 'Weekplanning', 'Tijdschakelaar', 'Temperatuurschema'],
      color: 'border-blue-700',
      badge: 'Meest compleet',
    },
    {
      merk: 'LG',
      app: 'LG ThinQ',
      platforms: ['Google Home', 'Amazon Alexa'],
      features: ['Energiemonitoring', 'Weekplanning', 'Tijdschakelaar', 'LG ecosysteem integratie', 'Diagnose op afstand'],
      color: 'border-red-500',
      badge: 'Gebruiksvriendelijkst',
    },
    {
      merk: 'Mitsubishi Heavy',
      app: 'MELCloud',
      platforms: ['Beperkte integratie'],
      features: ['Volledige afstandsbediening', 'Temperatuurmonitoring', 'Tijdschakelaar', 'Meerdere units beheer'],
      color: 'border-purple-600',
      badge: 'Meerdere units',
    },
  ];

  const faqItems = [
    {
      question: 'Hebben alle nieuwe airco\'s WiFi ingebouwd?',
      answer:
        'Alle nieuwe airco\'s die wij installeren hebben WiFi standaard ingebouwd. U heeft alleen een thuisnetwerk (2.4 GHz) nodig om de airco te verbinden. De setup duurt circa 5 minuten via de bijbehorende app.',
    },
    {
      question: 'Hoeveel kan ik besparen met een WiFi-airco?',
      answer:
        'Gemiddeld 15–20% energiebesparing is haalbaar door slim gebruik van wifi-functies: standby modus als niemand thuis is, timer zodat de airco net voor aankomst start, en geofencing die automatisch in/uitschakelt. Bij een gemiddelde airco-rekening van €300/jaar is dat €45–60 besparing.',
    },
    {
      question: 'Werkt een wifi-airco ook als ik geen internet heb?',
      answer:
        'Ja, de airco werkt altijd normaal via de afstandsbediening en de knoppen op de unit zelf, ook zonder internet. WiFi is alleen nodig voor bediening via de app. De app-functies zijn niet beschikbaar zonder internetverbinding.',
    },
    {
      question: 'Kan ik mijn airco koppelen aan Google Home of Alexa?',
      answer:
        'Ja. Daikin ondersteunt Google Home, Alexa en Apple HomeKit. LG ThinQ werkt met Google Home en Alexa. U kunt dan spraakcommando\'s gebruiken zoals "Hey Google, zet de airco op 21 graden" of de airco opnemen in automatiseringen.',
    },
    {
      question: 'Is mijn wifi-airco beveiligd?',
      answer:
        'Moderne wifi-airco\'s gebruiken versleutelde verbindingen (WPA2/WPA3) en communiceren via de beveiligde servers van de fabrikant. Zorg wel dat uw thuisnetwerk goed beveiligd is met een sterk wachtwoord. De fabrikant-apps worden regelmatig bijgewerkt met beveiligingspatches.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Airco met WiFi | Smart Home Integratie | Voordelen | StayCool</title>
        <meta
          name="description"
          content="Airco met WiFi bedienen via app. Thuis warm voor je thuiskomt, energiebesparing met slimme planning. Alle voordelen van smart airco uitgelegd."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-met-wifi-voordelen" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Smart airco</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Airco met WiFi: Alle Voordelen
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Bedien uw airco overal ter wereld via uw smartphone. Plan, monitor en bespaar automatisch —
              thuis warm voor u arriveert, nooit energie verspillen als u weg bent.
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

        {/* Voordelen overzicht */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Wat kunt u met een WiFi airco?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Smartphone className="h-8 w-8 text-blue-600" />,
                title: 'Bediening via app',
                desc: 'Zet aan, pas temperatuur aan, verander stand of schakel uit — alles via uw smartphone. Overal ter wereld, op elk moment.',
                color: 'border-blue-200',
              },
              {
                icon: <Clock className="h-8 w-8 text-green-600" />,
                title: 'Timer & planning',
                desc: 'Stel in dat de airco 30 minuten voor uw thuiskomst start. Of schakel automatisch uit wanneer u op uw werk aankomt. Nooit vergeten.',
                color: 'border-green-200',
              },
              {
                icon: <Home className="h-8 w-8 text-purple-600" />,
                title: 'Geofencing',
                desc: 'De airco start automatisch als uw telefoon uw thuiszone nadert. Stopt automatisch bij vertrek. Volledig automatisch, maximale besparing.',
                color: 'border-purple-200',
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
                title: 'Energiemonitoring',
                desc: 'Bekijk uw stroomverbruik in realtime en historisch. Ontdek wanneer uw airco het meest verbruikt en optimaliseer uw gebruik.',
                color: 'border-orange-200',
              },
              {
                icon: <Settings className="h-8 w-8 text-sky-600" />,
                title: 'Meerdere units',
                desc: 'Beheert u meerdere airco\'s in uw woning of pand? Via één app alle units tegelijk of afzonderlijk bedienen. Ideaal voor gezinnen.',
                color: 'border-sky-200',
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: 'Spraakbediening',
                desc: 'Koppel aan Google Home, Alexa of HomeKit. "Hey Google, zet de woonkamer op 20 graden" — en het gebeurt. Handen vrij, maximaal gemak.',
                color: 'border-yellow-200',
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${item.color}`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Energiebesparing met wifi */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Leaf className="h-7 w-7 text-green-600" />
              Energiebesparing: 15–20% minder verbruik
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Het grootste voordeel van een wifi-airco is energiebesparing door slim gebruik. Zonder wifi
                  laten mensen hun airco vaak draaien als ze vertrekken — "dan is het tenminste koel als ik thuiskom."
                  Met wifi hoeft dat niet meer.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Typische besparingsscenario's bij wifi-gebruik:
                </p>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Airco uitschakelen bij vertrek: -30 min/dag onnodig verbruik',
                    'Timer: start 20 min voor thuiskomst i.p.v. 8 uur',
                    'Geofencing: automatisch nooit meer vergeten uit te zetten',
                    'Energierapport: inzicht in pieken en optimalisatie',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Besparing per jaar (voorbeeld)</h3>
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  {[
                    { scenario: 'Geen wifi: airco draait 10 uur onnodig/week', kosten: '€ 345/jr', color: 'bg-red-400' },
                    { scenario: 'Met wifi: airco draait alleen als nodig', kosten: '€ 276/jr', color: 'bg-green-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <div className="flex-1 text-sm text-gray-600">{item.scenario}</div>
                      <div className="font-bold text-gray-900">{item.kosten}</div>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Jaarlijkse besparing</span>
                    <span className="text-2xl font-bold text-green-600">€ 69/jr</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Indicatief bij 10 uur/week onnodig verbruik, 2.5 kW airco, €0,23/kWh</p>
              </div>
            </div>
          </div>
        </section>

        {/* App vergelijking */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Apps per merk vergeleken</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {apps.map((app, i) => (
              <div key={i} className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 ${app.color}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{app.merk}</h3>
                    <p className="text-sm text-gray-500">{app.app}</p>
                  </div>
                  <span className="text-xs bg-sky-100 text-sky-700 font-semibold px-2 py-1 rounded-full">
                    {app.badge}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Smart home platforms</h4>
                  <div className="flex flex-wrap gap-1">
                    {app.platforms.map((p, j) => (
                      <span key={j} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Functies</h4>
                <ul className="space-y-1">
                  {app.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Setup uitleg */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hoe werkt de wifi-setup?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Alle nieuwe airco's die wij installeren hebben wifi ingebouwd. Na installatie verbinden
                  wij de airco standaard met uw thuisnetwerk. Dit gaat in 4 eenvoudige stappen:
                </p>
                <div className="space-y-4">
                  {[
                    { stap: 1, titel: 'Download de app', desc: 'Daikin Online Controller, LG ThinQ of MELCloud — gratis in App Store en Play Store' },
                    { stap: 2, titel: 'Maak een account', desc: 'Registreer gratis met uw e-mailadres' },
                    { stap: 3, titel: 'Scan de QR-code', desc: 'Elk nieuw apparaat heeft een unieke QR-code op de unit' },
                    { stap: 4, titel: 'Verbind met uw wifi', desc: 'Voer uw wifi-wachtwoord in en de airco is verbonden' },
                  ].map((item) => (
                    <div key={item.stap} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {item.stap}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.titel}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technische vereisten</h3>
                <div className="space-y-3">
                  {[
                    { req: 'WiFi frequentie', val: '2.4 GHz (ook 5 GHz bij sommige modellen)' },
                    { req: 'Internettoegang', val: 'Nodig voor remote bediening' },
                    { req: 'Smartphone', val: 'iOS 13+ of Android 8.0+' },
                    { req: 'Router afstand', val: 'Binnen 15 meter of repeater gebruiken' },
                    { req: 'Firmware updates', val: 'Automatisch via de app' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-start py-2 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{item.req}</span>
                      <span className="font-medium text-gray-900 text-sm text-right ml-4">{item.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-sky-50 rounded-xl p-4">
                  <p className="text-sky-700 text-sm font-medium">
                    Onze installateurs verbinden uw airco standaard met uw wifi bij installatie. Geen extra kosten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Smart airco laten installeren in Limburg</h2>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Alle airco's die wij installeren hebben WiFi ingebouwd. Wij verbinden de airco met uw thuisnetwerk
              en leggen uit hoe u de app gebruikt. Op één dag geïnstalleerd en verbonden.
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
              { to: '/beste-airco-merken', title: 'Beste airco merken', desc: 'Daikin, LG, Mitsubishi vergeleken' },
              { to: '/airco-installatie-prijs', title: 'Prijzen airco installatie', desc: 'Transparante kosteninformatie' },
              { to: '/airco-installatie-limburg', title: 'Installatie Limburg', desc: 'Uw lokale airco specialist' },
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

export default AircoMetWifiVoordelen;
