import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Euro, Clock, Shield, ChevronDown, ArrowRight } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const priceRows = [
  {
    type: 'Mono-split (budget)',
    price: '€1.500 – €2.000',
    details: 'Tosot / Toshiba, 2.5–3.5 kW, A++ energie',
    included: ['Binnenunit + buitenunit', 'Standaard leidingwerk', 'Montage & inbedrijfstelling', '5 jaar garantie'],
  },
  {
    type: 'Mono-split (premium)',
    price: '€2.000 – €3.000',
    details: 'Daikin / Mitsubishi Heavy, A+++ energie',
    included: ['Binnenunit + buitenunit', 'Standaard leidingwerk', 'Montage & inbedrijfstelling', '5 jaar garantie'],
  },
  {
    type: 'Dual-zone multi-split',
    price: '€3.500 – €5.500',
    details: '1 buitenunit + 2 binnenunits, 2 kamers',
    included: ['1 buitenunit + 2 binnenunits', 'Volledig leidingwerk', 'Montage & inbedrijfstelling', '5 jaar garantie'],
  },
  {
    type: 'Triple-zone multi-split',
    price: '€5.500 – €8.000+',
    details: '1 buitenunit + 3 binnenunits, 3 kamers',
    included: ['1 buitenunit + 3 binnenunits', 'Volledig leidingwerk', 'Montage & inbedrijfstelling', '5 jaar garantie'],
  },
];

const faqItems = [
  {
    question: 'Zijn meerkosten bij de installatie mogelijk?',
    answer: 'Ja, in sommige gevallen kunnen er meerkosten zijn. Denk hierbij aan extra leidinglengte boven 3 meter, moeilijke bereikbaarheid van de installatieplek, een extra condenspomp of speciale muurconstructies. Wij bespreken eventuele meerkosten altijd vooraf, zodat u nooit voor verrassingen staat.',
  },
  {
    question: 'Is een duurdere airco beter dan een goedkopere?',
    answer: 'Niet altijd. Duurdere premium merken zoals Daikin en Mitsubishi Heavy Industries bieden doorgaans een hogere energieklasse (A+++), lagere energiekosten en een langere levensduur. Budget merken zoals Tosot en Toshiba zijn uitstekende keuzes voor kleinere ruimtes of als initieel budget bepalend is. Wij adviseren u eerlijk over de beste keuze voor uw situatie.',
  },
  {
    question: 'Welke garantie krijg ik op mijn airco?',
    answer: 'U ontvangt twee soorten garantie: 1) De fabrieksgarantie op het apparaat (afhankelijk van merk en model, doorgaans 2-5 jaar). 2) Onze eigen 5 jaar installatiegarantie op de uitgevoerde werkzaamheden. Samen bent u dus uitstekend gedekt.',
  },
  {
    question: 'Kan ik ISDE subsidie krijgen voor een airco?',
    answer: 'Voor lucht-lucht warmtepompen (airco\'s die ook verwarmen) is onder bepaalde voorwaarden ISDE subsidie mogelijk. De subsidie is afhankelijk van het type systeem, energieprestatie en de situatie. Wij informeren u graag over de actuele subsidiemogelijkheden tijdens de offerte.',
  },
  {
    question: 'Hoe snel verdient een airco zichzelf terug?',
    answer: 'Een airco met SCOP-waarde van 4.0 of hoger is als warmtepomp 4x efficiënter dan een elektrische verwarming. Bij gemiddeld gebruik als verwarming in de winter is de terugverdientijd gemiddeld 4 tot 6 jaar. Als u ook koel gebruikt in de zomer, versnelt dit aanzienlijk. Moderne A+++ airco\'s zijn buitengewoon energiezuinig.',
  },
];

export default function AircoInstallatiePrijs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Airco Installatie Prijs 2025 | Wat Kost Een Airco? | StayCool</title>
        <meta
          name="description"
          content="Airco installatie prijs in 2025: mono-split €1.500-€2.500, multi-split €3.000-€5.000. Inclusief montage, materialen & garantie. Gratis offerte!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-installatie-prijs" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airco Installatie Prijzen Limburg',
          serviceType: 'Airconditioning Installatie',
          description: 'Transparante airco installatie prijzen in Limburg. Mono-split, multi-split en maatwerk systemen inclusief montage, materialen en 5 jaar garantie.',
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
          <Breadcrumbs
            items={[
              { label: 'Airco Installatie Limburg', path: '/airco-installatie-limburg' },
              { label: 'Airco Installatie Prijs' },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Airco Installatie Prijs 2025 — Transparant &amp; Eerlijk
            </h1>
            <p className="text-base md:text-lg text-sky-100 mb-8">
              Wat kost een airco installatie? Wij geven u een helder overzicht van de prijzen voor mono-split en multi-split systemen in Limburg. Inclusief unit, montage, leidingwerk en 5 jaar garantie. Geen verborgen kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/airco-offerte"
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
      <section className="bg-sky-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex items-start gap-4">
            <Euro className="h-10 w-10 text-sky-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Vaste Transparante Prijs</h3>
              <p className="text-base text-gray-600">Inclusief unit, montage, leidingwerk en inbedrijfstelling. Wat u ziet is wat u betaalt.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex items-start gap-4">
            <Shield className="h-10 w-10 text-sky-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">5 Jaar Garantie Inbegrepen</h3>
              <p className="text-base text-gray-600">Onze installatiegarantie is altijd inbegrepen in de prijs. U hoeft niets extra af te sluiten.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex items-start gap-4">
            <Clock className="h-10 w-10 text-sky-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Gratis Offerte Binnen 24u</h3>
              <p className="text-base text-gray-600">U ontvangt een vrijblijvende offerte op maat binnen 24 uur na uw aanvraag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prijstabel */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Airco Prijzen Overzicht 2025
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Alle prijzen zijn inclusief BTW, unit, montage, standaard leidingwerk (tot 3 meter) en 5 jaar installatiegarantie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {priceRows.map((row, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{row.type}</h3>
                    <p className="text-sm text-gray-500 mt-1">{row.details}</p>
                  </div>
                  <span className="text-2xl font-bold text-sky-600 whitespace-nowrap ml-4">{row.price}</span>
                </div>
                <ul className="space-y-2">
                  {row.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">
            * Prijzen zijn indicatief. Exacte prijs afhankelijk van merk, model, leidinglengte en situatie ter plaatse.
          </p>
        </div>
      </section>

      {/* Wat zit in de prijs */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat Zit er in de Prijs?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Bij StayCool Airco betaalt u een vaste all-in prijs. Hierin is altijd inbegrepen:
              </p>
              <ul className="space-y-3">
                {[
                  'De binnenunit en buitenunit van uw gekozen merk',
                  'Leidingwerk (koelleiding, condensafvoer, bekabeling) tot 3 meter',
                  'Boren van de muurdoorvoer',
                  'Monteren van binnen- en buitenunit op beugels',
                  'Vacumeren en druktest van het systeem',
                  'Inbedrijfstelling en controle',
                  'Uitleg over de bediening en apps',
                  '5 jaar installatiegarantie',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Factoren die de Prijs Beïnvloeden
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                De exacte prijs varieert op basis van:
              </p>
              <ul className="space-y-4">
                {[
                  { label: 'Leidinglengte', desc: 'Standaard tot 3 meter inbegrepen. Extra meters worden per strekkende meter berekend.' },
                  { label: 'Verdieping', desc: 'Montage op hogere verdiepingen of moeilijk bereikbare plekken kan een toeslag met zich meebrengen.' },
                  { label: 'Bereikbaarheid buitenunit', desc: 'Indien een steiger of speciale opstelling nodig is, worden de kosten vooraf besproken.' },
                  { label: 'Merk en model', desc: 'Premium merken als Daikin en Mitsubishi Heavy Industries hebben een hogere aanschafwaarde maar lagere energiekosten.' },
                ].map((factor) => (
                  <li key={factor.label} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-gray-900 mb-1">{factor.label}</p>
                    <p className="text-sm text-gray-600">{factor.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energiebesparing */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Terugverdientijd &amp; Energiebesparing
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Een moderne airco is niet alleen voor koelen — als warmtepomp verwarmt hij ook uiterst efficiënt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
              <p className="text-4xl font-bold text-sky-600 mb-2">SCOP 4.0+</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Energierendement</p>
              <p className="text-base text-gray-600">Voor elke euro elektriciteit produceert de airco 4 euro aan warmte. 4x efficiënter dan een elektrische verwarming.</p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
              <p className="text-4xl font-bold text-sky-600 mb-2">4–6 jaar</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Terugverdientijd</p>
              <p className="text-base text-gray-600">Bij gebruik als verwarming in de winter is de gemiddelde terugverdientijd 4 tot 6 jaar voor een complete installatie.</p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
              <p className="text-4xl font-bold text-sky-600 mb-2">ISDE</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Subsidie Mogelijk</p>
              <p className="text-base text-gray-600">Voor kwalificerende lucht-lucht warmtepompen kunt u ISDE subsidie aanvragen. Vraag ons naar de actuele mogelijkheden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Veelgestelde Vragen over Airco Prijzen
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
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/airco-installatie-limburg" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Airco Installatie Limburg
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Contact Opnemen
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Ontvang een Exacte Prijs Op Maat
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-10">
            Vul het formulier in voor een gratis, vrijblijvende offerte. Binnen 24 uur reactie.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
