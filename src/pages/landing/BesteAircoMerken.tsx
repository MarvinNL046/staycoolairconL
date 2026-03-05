import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Award, CheckCircle, Phone, ArrowRight, Star, Shield,
  ChevronDown, ChevronUp, Zap, Euro, Leaf, Home
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const BesteAircoMerken: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Beste Airco Merken 2025' },
  ];

  const schemaData = {
    name: 'Beste Airco Merken 2025 | Daikin, LG, Mitsubishi Heavy',
    description:
      'Welk airco merk is het beste? Vergelijk Daikin, Mitsubishi Heavy, LG, Tosot en Toshiba op prijs, kwaliteit en garantie. Onafhankelijk advies van Limburg-expert.',
    url: 'https://staycoolairco.nl/beste-airco-merken',
  };

  const merken = [
    {
      naam: 'Daikin',
      herkomst: 'Japan',
      scop: '5.15',
      seer: '8.75',
      prijs: 'Hoog',
      geluid: '19 dB',
      garantie: '10 jr compressor',
      energielabel: 'A+++',
      badge: 'Beste energie',
      badgeColor: 'bg-yellow-400 text-yellow-900',
      kleur: 'border-blue-700',
      logo: 'D',
      logoColor: 'bg-blue-700',
      uitleg: `Daikin is het meest verkochte aircomerken ter wereld en marktleider in energiezuinigheid.
De Japanse Stylish-serie behaalt SCOP 5,15 — de hoogste waarde op de Nederlandse markt.
De Flash Streamer technologie zuivert lucht van allergenen, bacteriën en virussen.
Unieke kenmerken zijn de bewegingssensor die detecteert of er iemand in de ruimte is (energiebesparing),
het Coanda-effect voor optimale luchtverdeling, en volledige Apple HomeKit ondersteuning.
Daikin heeft een brede service- en installateursketen in Nederland.`,
      voordelen: [
        'Beste SCOP (5,15) op de markt',
        'Flash Streamer luchtzuivering (allergenen, bacteriën)',
        'Bewegingssensor aanwezigheidsdetectie',
        'Apple HomeKit + Google Home + Alexa',
        'Coanda-effect voor gelijkmatige luchtverdeling',
        'Leverbaar in wit, zilver en zwart',
        '10 jaar compressorgarantie',
      ],
      nadelen: ['Hoogste aanschafprijs', 'App updates soms instabiel'],
      bestVoor: 'Maximale energiebesparing, allergiepatiënten, Apple HomeKit gebruikers',
      url: '/daikin',
    },
    {
      naam: 'Mitsubishi Heavy Industries',
      herkomst: 'Japan',
      scop: '4.6',
      seer: '8.5',
      prijs: 'Hoog',
      geluid: '21 dB',
      garantie: '10 jr compressor',
      energielabel: 'A+++',
      badge: 'Meest betrouwbaar',
      badgeColor: 'bg-blue-600 text-white',
      kleur: 'border-red-600',
      logo: 'MH',
      logoColor: 'bg-red-600',
      uitleg: `Mitsubishi Heavy Industries (niet te verwarren met Mitsubishi Electric) staat wereldwijd
bekend om extreme betrouwbaarheid en duurzaamheid. De ZS-WF serie werkt bij buitentemperaturen
van -25°C tot +46°C — een uniek bereik op de markt. Het allergeenfilter is standaard ingebouwd
en verwijdert fijnstof, pollen en huidschilfers uit de lucht. De 3D Auto functie verdeelt
de lucht automatisch gelijkmatig door de ruimte. Bij een gemiddelde levensduur van 15–20 jaar
is MHI een investering die zich ruimschoots terugbetaalt.`,
      voordelen: [
        'Werkt bij -25°C tot +46°C buitentemperatuur',
        'Allergeenfilter standaard ingebouwd',
        'Extreem duurzaam (15–20 jaar levensduur)',
        '3D Auto luchtverdeling',
        'Jet Air voor snelle opwarming/koeling',
        'Breed capaciteitsbereik (2.5–8.0 kW)',
      ],
      nadelen: ['Hogere aanschafprijs', 'Minder designvarianten', 'Basis app-functionaliteit'],
      bestVoor: 'Maximale betrouwbaarheid, allergiepatiënten, extreme klimaatcondities',
      url: '/mitsubishi-heavy',
    },
    {
      naam: 'LG',
      herkomst: 'Zuid-Korea',
      scop: '4.6',
      seer: '8.5',
      prijs: 'Midden',
      geluid: '19 dB',
      garantie: '10 jr compressor',
      energielabel: 'A++',
      badge: 'Beste prijs/kwaliteit',
      badgeColor: 'bg-green-500 text-white',
      kleur: 'border-red-500',
      logo: 'LG',
      logoColor: 'bg-red-500',
      uitleg: `LG is wereldwijd een van de grootste elektronikaproducenten en biedt met de Artcool Mirror
een van de meest stijlvolle airco's op de markt. Het spiegelfront past in elk modern interieur.
LG ThinQ smart home integratie is gebruiksvriendelijk en werkt uitstekend met Google Home en Alexa.
De Dual Ionizer zuivert de lucht van bacteriën en virussen. Op het gebied van prijs/kwaliteit
biedt LG de beste verhouding in ons assortiment — uitstekende prestaties voor een lagere investering
dan Daikin of Mitsubishi Heavy.`,
      voordelen: [
        'Strak spiegeldesign (Artcool Mirror)',
        'LG ThinQ app: gebruiksvriendelijk',
        'Dual Ionizer luchtzuivering',
        'Uitstekende prijs/kwaliteit verhouding',
        'Breed leverbaar in diverse vermogens',
        '19 dB geluidsniveau (slaapkamer geschikt)',
      ],
      nadelen: ['Geen Apple HomeKit', 'Geen bewegingssensor', 'Iets lagere SCOP dan Daikin'],
      bestVoor: 'Prijsbewuste kopers, Google/Android gebruikers, strakke interieurs',
      url: '/lg',
    },
    {
      naam: 'Tosot (Gree)',
      herkomst: 'China',
      scop: '4.0',
      seer: '7.5',
      prijs: 'Laag',
      geluid: '22 dB',
      garantie: '5 jr',
      energielabel: 'A+',
      badge: 'Budget keuze',
      badgeColor: 'bg-gray-500 text-white',
      kleur: 'border-gray-400',
      logo: 'T',
      logoColor: 'bg-gray-600',
      uitleg: `Tosot is het premium merk van Gree, de grootste aircoproducent ter wereld (marktaandeel >20%).
Tosot biedt betrouwbare kwaliteit in het budgetsegment. De compressoren en technologie zijn
identiek aan die van duurdere Gree-producten, maar het merk is minder bekend in Nederland.
Dit vertaalt zich direct naar een lagere aanschafprijs. Voor klanten die een functionele airco
willen zonder premium merk-opslag is Tosot een uitstekende keuze. Gree technologie wordt ook
gebruikt door diverse private labels.`,
      voordelen: [
        'Laagste aanschafprijs in ons assortiment',
        'Gree compressortechnologie',
        'Betrouwbare basiscomponenten',
        'WiFi standaard ingebouwd',
        'SCOP 4,0 (A+ label)',
        '5 jaar garantie',
      ],
      nadelen: ['Lagere SCOP dan A-merken', 'Minder servicecentra in NL', 'Beperktere smart home integratie'],
      bestVoor: 'Budget kopers, vakantiewoningen, incidenteel gebruik',
      url: '/tosot',
    },
    {
      naam: 'Toshiba',
      herkomst: 'Japan (ontwerp)',
      scop: '4.2',
      seer: '7.6',
      prijs: 'Midden-laag',
      geluid: '21 dB',
      garantie: '7 jr',
      energielabel: 'A+',
      badge: 'Betrouwbaar budget',
      badgeColor: 'bg-indigo-500 text-white',
      kleur: 'border-indigo-500',
      logo: 'To',
      logoColor: 'bg-indigo-600',
      uitleg: `Toshiba heeft een lange traditie in airconditioningsystemen. Het populaire Seiya-model
biedt solide prestaties voor een scherpe prijs. Toshiba-units worden wereldwijd verkocht via
een breed netwerk van gecertificeerde installateurs. De 7-jaar garantie biedt meer zekerheid
dan veel andere merken in dit prijssegment. De Haori en Shorai Edge modellen bieden betere
energieprestaties dan het instapmodel. Toshiba is een veilige keuze voor klanten die
Japanse kwaliteit willen voor een Koreaans prijspunt.`,
      voordelen: [
        'Japans merk met goede reputatie',
        'Seiya model: uitstekende instapkeuze',
        '7 jaar garantie (beter dan gemiddeld)',
        'Breed installateursnetwerk',
        'WiFi uitbreidbaar',
        'Goede prijs/kwaliteit',
      ],
      nadelen: ['Lagere SCOP dan A-merken', 'WiFi soms externe module nodig', 'Minder designvarianten'],
      bestVoor: 'Wie Japanse betrouwbaarheid wil voor een lagere prijs',
      url: '/toshiba',
    },
  ];

  const faqItems = [
    {
      question: 'Welk airco merk is het beste in 2025?',
      answer:
        'Op het gebied van energiezuinigheid is Daikin het beste merk (SCOP 5,15). Voor betrouwbaarheid en duurzaamheid scoort Mitsubishi Heavy Industries het hoogst. LG biedt de beste prijs/kwaliteit verhouding. De beste keuze hangt af van uw prioriteiten: energie, budget of design.',
    },
    {
      question: 'Is Daikin echt beter dan andere merken?',
      answer:
        'Daikin heeft de hoogste SCOP-waarde (5,15) en de uitgebreidste smart home integratie inclusief Apple HomeKit. Voor pure energieprestatie is Daikin marktleider. Op prijs/kwaliteit biedt LG een betere verhouding. Mitsubishi Heavy is betrouwbaarder op langere termijn.',
    },
    {
      question: 'Is Tosot (Gree) een betrouwbaar merk?',
      answer:
        'Ja. Tosot is het premium sub-merk van Gree, de grootste aircoproducent ter wereld. Gree produceert OEM-units voor veel andere merken. De compressoren en technologie zijn betrouwbaar. Nadeel is het kleinere servicenatwerk in Nederland en lagere energieprestaties dan A-merken.',
    },
    {
      question: 'Welk merk heeft de langste garantie?',
      answer:
        'Daikin en Mitsubishi Heavy geven beide 10 jaar garantie op de compressor. Toshiba biedt 7 jaar garantie. LG geeft 10 jaar compressorgarantie. Tosot biedt 5 jaar garantie op het gehele systeem. Bovenop de fabrieksgarantie geeft StayCool 5 jaar installatiegarantie.',
    },
    {
      question: 'Welk merk raadt StayCool aan voor een gemiddelde woning in Limburg?',
      answer:
        'Voor de meeste Limburgse woningen adviseren wij de Daikin Stylish (budget beschikbaar) of de LG Artcool (prijs/kwaliteit). Beide zijn stil, energiezuinig en hebben WiFi. Voor zolders of extreme omstandigheden kiezen wij voor Mitsubishi Heavy. Budget klanten sturen wij richting Tosot.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Beste Airco Merken 2025 | Daikin, LG, Mitsubishi Heavy | StayCool</title>
        <meta
          name="description"
          content="Welk airco merk is het beste? Vergelijk Daikin, Mitsubishi Heavy, LG, Tosot en Toshiba op prijs, kwaliteit en garantie. Onafhankelijk advies van Limburg-expert."
        />
        <link rel="canonical" href="https://staycoolairco.nl/beste-airco-merken" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Onafhankelijk merkadvies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Beste Airco Merken 2025
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Wij installeren 5 merken en geven u eerlijk advies. Daikin, Mitsubishi Heavy, LG, Tosot en Toshiba —
              elk merk heeft zijn sterke punten. Ontdek welk merk het beste past bij uw situatie.
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

        {/* Vergelijkingstabel */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Merken overzicht vergelijking</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-900 to-blue-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Merk</th>
                  <th className="text-center px-4 py-4 font-semibold">Prijs</th>
                  <th className="text-center px-4 py-4 font-semibold">SCOP</th>
                  <th className="text-center px-4 py-4 font-semibold">Geluid</th>
                  <th className="text-center px-4 py-4 font-semibold">Garantie</th>
                  <th className="text-left px-4 py-4 font-semibold">Best voor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {merken.map((m, i) => (
                  <tr key={i} className={i === 0 ? 'bg-sky-50' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${m.logoColor} text-white font-bold text-xs flex items-center justify-center`}>
                          {m.logo}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{m.naam}</div>
                          <div className="text-xs text-gray-500">{m.herkomst}</div>
                        </div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.badgeColor}`}>
                          {m.badge}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700">{m.prijs}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`font-bold ${i === 0 ? 'text-green-600' : 'text-gray-900'}`}>{m.scop}</span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700">{m.geluid}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{m.garantie}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">{m.bestVoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per merk detail */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Per merk uitgelegd</h2>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {merken.map((m, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all border-2 ${
                  activeTab === i
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-sky-300'
                }`}
              >
                {m.naam}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {merken.map((m, i) => (
            <div key={i} className={activeTab === i ? 'block' : 'hidden'}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${m.logoColor} text-white font-bold text-lg flex items-center justify-center flex-shrink-0`}>
                    {m.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-gray-900">{m.naam}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.badgeColor}`}>{m.badge}</span>
                    </div>
                    <p className="text-gray-500">{m.herkomst} • {m.energielabel} • SCOP {m.scop} • {m.garantie}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">{m.uitleg}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Voordelen</h4>
                    <ul className="space-y-2">
                      {m.voordelen.map((v, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-500 mb-3">Nadelen</h4>
                    <ul className="space-y-2">
                      {m.nadelen.map((n, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5 text-center">−</span>
                          {n}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-sky-50 rounded-xl">
                      <span className="text-xs font-semibold text-sky-700">Best voor: </span>
                      <span className="text-xs text-sky-600">{m.bestVoor}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to={m.url}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
                >
                  Meer over {m.naam} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Aanbevelingen per situatie */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Welk merk past bij uw situatie?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                situatie: 'Beste energiebesparing',
                merk: 'Daikin Stylish',
                reden: 'SCOP 5,15 = laagste verwarmingskosten op de markt. Voor wie energie besparing prioriteit #1 is.',
                icon: <Leaf className="h-6 w-6 text-green-600" />,
                color: 'border-green-400',
              },
              {
                situatie: 'Beste prijs/kwaliteit',
                merk: 'LG Artcool of Tosot',
                reden: 'LG voor uitstekende kwaliteit en design. Tosot voor maximale besparing op aanschaf.',
                icon: <Euro className="h-6 w-6 text-blue-600" />,
                color: 'border-blue-400',
              },
              {
                situatie: 'Meest betrouwbaar, langste levensduur',
                merk: 'Mitsubishi Heavy Industries',
                reden: 'Japanse industriekwaliteit, extreme temperatuurbestendigheid, 20+ jaar levensduur.',
                icon: <Shield className="h-6 w-6 text-purple-600" />,
                color: 'border-purple-400',
              },
              {
                situatie: 'Budget bewust',
                merk: 'Tosot (Gree)',
                reden: 'Laagste aanschafprijs met betrouwbare Gree technologie. Geschikt voor incidenteel gebruik.',
                icon: <Home className="h-6 w-6 text-gray-600" />,
                color: 'border-gray-400',
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${item.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-bold text-gray-900">{item.situatie}</h3>
                </div>
                <div className="text-xl font-bold text-sky-700 mb-2">{item.merk}</div>
                <p className="text-gray-600 text-sm">{item.reden}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Welk merk is het beste voor u?</h2>
              <p className="text-sky-100 mb-6">
                Onze adviseurs bespreken uw situatie, budget en wensen — en adviseren eerlijk welk merk
                en model het beste bij u past. Inclusief gratis capaciteitsberekening.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0462021430"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  046 202 1430
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { text: 'Daikin, LG, Mitsubishi' },
                { text: 'Tosot, Toshiba' },
                { text: '5 jaar installatiegarantie' },
                { text: 'F-gassen gecertificeerd' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interne links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer vergelijkingen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { to: '/lg-vs-daikin-airco', title: 'LG vs Daikin vergelijking', desc: 'Gedetailleerde vergelijking van de twee populairste merken' },
              { to: '/beste-airco-voor-verwarmen', title: 'Beste airco voor verwarmen', desc: 'SCOP vergelijking alle merken' },
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

export default BesteAircoMerken;
