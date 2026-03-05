import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, CheckCircle, Star, Clock, Shield, Wrench, Award, ChevronDown, ArrowRight } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const cities = [
  { name: 'Maastricht', slug: 'maastricht' },
  { name: 'Roermond', slug: 'roermond' },
  { name: 'Heerlen', slug: 'heerlen' },
  { name: 'Sittard', slug: 'sittard' },
  { name: 'Geleen', slug: 'geleen' },
  { name: 'Kerkrade', slug: 'kerkrade' },
  { name: 'Weert', slug: 'weert' },
  { name: 'Venlo', slug: 'venlo' },
  { name: 'Brunssum', slug: 'brunssum' },
  { name: 'Meerssen', slug: 'meerssen' },
  { name: 'Valkenburg', slug: 'valkenburg' },
  { name: 'Stein', slug: 'stein' },
  { name: 'Landgraaf', slug: 'landgraaf' },
  { name: 'Venray', slug: 'venray' },
];

const faqItems = [
  {
    question: 'Wat kost een airco installatie in Limburg?',
    answer: 'De kosten voor een airco installatie in Limburg variëren afhankelijk van het type systeem. Een mono-split systeem (1 buitenunit + 1 binnenunit) kost inclusief unit en montage doorgaans tussen de €1.500 en €2.500. Een dual-zone multi-split systeem ligt tussen de €3.000 en €5.000. We maken altijd een maatwerk offerte op basis van uw situatie, het gekozen merk en de leidinglengte.',
  },
  {
    question: 'Hoe lang duurt een airco installatie?',
    answer: 'Een standaard mono-split installatie duurt gemiddeld 4 tot 6 uur. Na uw akkoord op de offerte plannen we de installatie doorgaans binnen 1 tot 3 weken in. Voor multi-split systemen (meerdere binnenunits) rekenen we 6 tot 10 uur installatietijd.',
  },
  {
    question: 'Welke airco merken installeert StayCool Airco?',
    answer: 'Wij installeren de toonaangevende merken: Daikin, Mitsubishi Heavy Industries, LG, Tosot en Toshiba. Al deze merken bieden uitstekende energieprestaties en betrouwbaarheid. Ons team adviseert u graag over het beste merk en model voor uw situatie.',
  },
  {
    question: 'Wat zit er inbegrepen in de installatieprijs?',
    answer: 'Onze installatieprijs is inclusief: de binnenunit en buitenunit, alle leidingwerk (tot 3 meter), koelleidingen, condensafvoer, elektrische bekabeling, muurdoorvoer, beugels, vacumeren, inbedrijfstelling en uitleg over de bediening. Eventuele meerkosten voor extra leidinglengte bespreken we vooraf altijd transparant met u.',
  },
  {
    question: 'Kan ik ook een onderhoudscontract afsluiten?',
    answer: 'Ja, bij StayCool Airco kunt u een onderhoudscontract afsluiten. Jaarlijks onderhoud verlengt de levensduur van uw installatie, houdt de garantie intact en zorgt voor optimaal energieverbruik. Neem contact met ons op voor de mogelijkheden en tarieven.',
  },
];

export default function AircoInstallatieLimburg() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Airco Installatie Limburg | Erkend Installateur | StayCool Airco</title>
        <meta
          name="description"
          content="Airco installatie in Limburg door erkend installateur. ✓ F-gassen gecertificeerd ✓ Binnen 1-3 weken geïnstalleerd ✓ 5 jaar garantie. Gratis offerte aanvragen!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-installatie-limburg" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airco Installatie Limburg',
          serviceType: 'Airconditioning Installatie',
          description: 'Professionele airco installatie in heel Limburg door F-gassen gecertificeerde monteurs. Erkend STEK bedrijf met 5 jaar installatiegarantie.',
          areaServed: {
            '@type': 'State',
            name: 'Limburg',
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '1500',
            highPrice: '8000',
            offerCount: '4',
            availability: 'https://schema.org/InStock',
          },
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: 'Airco Installatie Limburg' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Airco Installatie in Limburg — Erkend &amp; Betrouwbaar
            </h1>
            <p className="text-base md:text-lg text-sky-100 mb-8">
              StayCool Airco is uw erkende airco installateur in heel Limburg. F-gassen gecertificeerd, STEK erkend en met meer dan 15 jaar ervaring. Wij installeren split airco's van topmerken als Daikin, Mitsubishi Heavy Industries en LG — inclusief 5 jaar garantie op de installatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-200 shadow-lg"
              >
                Gratis Offerte Aanvragen
              </Link>
              <a
                href="tel:0462021430"
                className="bg-white text-blue-800 font-bold py-4 px-8 rounded-xl text-center hover:bg-sky-50 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Bel Nu: 046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Waarom kiezen voor StayCool Airco?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Shield className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">F-gassen Gecertificeerd</h3>
              <p className="text-base md:text-lg text-gray-600">STEK erkend bedrijf. Wij mogen legaal koelmiddel verwerken en zijn volledig gecertificeerd voor airco installaties.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Clock className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Snel Gepland (1-3 weken)</h3>
              <p className="text-base md:text-lg text-gray-600">Na uw offerte akkoord plannen we de installatie binnen 1 tot 3 weken in. Snel comfort zonder lange wachttijden.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Award className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">5 Jaar Garantie</h3>
              <p className="text-base md:text-lg text-gray-600">Naast de fabrieksgarantie bieden wij 5 jaar installatiegarantie. U bent volledig gedekt na onze werkzaamheden.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <CheckCircle className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Vaste Transparante Prijzen</h3>
              <p className="text-base md:text-lg text-gray-600">Geen verborgen kosten. Wij werken met duidelijke offertes zodat u precies weet waar u aan toe bent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steden */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Airco Installatie in uw Gemeente
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Wij installeren airco's in heel Limburg. Kies hieronder uw gemeente voor specifieke informatie over airco installatie in uw regio.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/${city.slug}`}
                className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-center hover:bg-sky-100 hover:border-sky-400 transition-all duration-200 group"
              >
                <MapPin className="h-5 w-5 text-sky-500 mx-auto mb-1 group-hover:text-sky-700" />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-sky-800">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prijsindicatie */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Prijsindicatie Airco Installatie
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Onderstaande prijzen zijn indicatief inclusief unit, leidingwerk, montage en inbedrijfstelling. Voor een exacte prijs maakt u gratis een offerte aan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Mono-split Installatie</h3>
              <p className="text-3xl font-bold text-sky-600 mb-4">€1.500 – €2.500</p>
              <p className="text-base text-gray-600 mb-4">1 buitenunit + 1 binnenunit. Ideaal voor één kamer of ruimte. Inclusief alle materialen en montage.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Binnenunit + buitenunit</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Leidingwerk inbegrepen</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-sky-400 ring-2 ring-sky-400">
              <div className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Populair</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Dual-zone Multi-split</h3>
              <p className="text-3xl font-bold text-sky-600 mb-4">€3.000 – €5.000</p>
              <p className="text-base text-gray-600 mb-4">1 buitenunit + 2 binnenunits. Perfect voor 2 kamers of woonhuis. Efficiënt en stijlvol.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 2 binnenunits</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Alle leidingwerk</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Maatwerk Advies</h3>
              <p className="text-3xl font-bold text-sky-600 mb-4">Altijd op maat</p>
              <p className="text-base text-gray-600 mb-4">Elke woning is anders. Wij bezoeken u gratis voor een uitgebreide inventarisatie en scherpe offerte op maat.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Gratis thuisbezoek</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Multi-zone systemen</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Geen verborgen kosten</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/airco-installatie-prijs"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-800 transition-colors"
            >
              Bekijk volledige prijsoverzicht <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Hoe Werkt Het?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, icon: Phone, title: 'Contact Opnemen', desc: 'Bel ons, stuur een WhatsApp of vul het contactformulier in. Wij reageren binnen 24 uur.' },
              { step: 2, icon: CheckCircle, title: 'Gratis Offerte', desc: 'We bellen voor een intake of plannen een gratis thuisbezoek. U ontvangt een heldere offerte.' },
              { step: 3, icon: Wrench, title: 'Professionele Installatie', desc: 'Onze gecertificeerde monteurs installeren uw airco vakkundig en net binnen de afgesproken tijd.' },
              { step: 4, icon: Star, title: 'Klaar & Genieten', desc: 'Na de installatie krijgt u uitleg over de bediening. Direct genieten van koel comfort!' },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="text-center">
                <div className="bg-sky-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step}
                </div>
                <Icon className="h-8 w-8 text-sky-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-base text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat Zeggen Onze Klanten?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9</span>
            <span className="text-gray-500 ml-1">(127 beoordelingen)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Jan de Vries', location: 'Maastricht', text: 'Uitstekende service! Monteurs kwamen op tijd, werkten netjes en legden alles goed uit. Heel blij met de installatie.' },
              { name: 'Petra Smeets', location: 'Heerlen', text: 'Goede prijs-kwaliteitverhouding. Binnen 2 weken na aanvraag was de airco al geïnstalleerd. Zeker aan te raden!' },
              { name: 'Mark Janssen', location: 'Venlo', text: 'Professioneel bedrijf. Duidelijke offerte, geen verborgen kosten en een prachtige installatie. 5 sterren verdiend.' },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-left">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merken */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Airco Merken die wij Installeren
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10">
            Wij installeren uitsluitend A-merk airco's met bewezen kwaliteit en uitstekende energieprestaties.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Daikin', 'Mitsubishi Heavy Industries', 'LG', 'Tosot', 'Toshiba'].map((brand) => (
              <div key={brand} className="bg-sky-50 border border-sky-200 rounded-xl px-6 py-3 font-semibold text-gray-700">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-xl font-semibold text-gray-900 pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-sky-500 flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-base md:text-lg text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-sky-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meer Informatie</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/airco-installatie-prijs" className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Airco Installatie Prijs
            </Link>
            <Link to="/airco-offerte" className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Gratis Offerte Aanvragen
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Contact Opnemen
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Vraag Nu Uw Gratis Offerte Aan
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-10">
            Vul het formulier in en ontvang binnen 24 uur een offerte op maat. Geen verplichtingen.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
