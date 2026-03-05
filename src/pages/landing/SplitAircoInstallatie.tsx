import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, Wrench, Award, ChevronDown, ArrowRight } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const installationSteps = [
  {
    step: 1,
    title: 'Meting & Advies',
    desc: 'Onze monteur inspecteert de ruimte en bepaalt de optimale locatie voor de binnen- en buitenunit. We adviseren over de beste positie voor maximale efficiëntie.',
  },
  {
    step: 2,
    title: 'Buitenunit Plaatsing',
    desc: 'De buitenunit wordt op een stevige beugel gemonteerd aan de gevel, in de tuin of op het balkon. We kiezen altijd voor een stabiele, veilige bevestiging.',
  },
  {
    step: 3,
    title: 'Gat Boren & Leidingwerk',
    desc: 'We boren een netjes afgewerkt gat door de muur voor de koelleidingen, condensafvoer en elektrische bekabeling. Standaard tot 3 meter leidingwerk inbegrepen.',
  },
  {
    step: 4,
    title: 'Binnenunit Monteren',
    desc: 'De binnenunit wordt op wandhoogte gemonteerd op een speciale beugel. We zorgen voor een vlakke, waterpasse montage voor optimale luchtverspreiding.',
  },
  {
    step: 5,
    title: 'Verbinden & Vacumeren',
    desc: 'De leidingen worden aangesloten en het systeem wordt gevacumeerd om vocht en lucht te verwijderen. Vervolgens voeren we een druktest uit.',
  },
  {
    step: 6,
    title: 'Inbedrijfstelling & Uitleg',
    desc: 'We starten de airco op en testen alle functies. Daarna krijgt u uitleg over de bediening, het instellen van programma\'s en onderhoudstips.',
  },
];

const faqItems = [
  {
    question: 'Wat is het verschil tussen een split airco en een mobiele airco?',
    answer: 'Een split airco bestaat uit een vaste binnen- en buitenunit die permanent gemonteerd worden. Een mobiele airco staat los op wielen en heeft een slang naar buiten. De split airco is aanzienlijk efficiënter (lager energieverbruik), stiller, krachtiger en koelt veel effectiever. De installatie is eenmalig werk dat zich in kwaliteit en comfort ruimschoots terugbetaalt.',
  },
  {
    question: 'Hoe lang duurt de installatie van een split airco?',
    answer: 'Een standaard mono-split installatie duurt gemiddeld 4 tot 6 uur. Dit is inclusief alle werkzaamheden van begin tot eind: plaatsing van beide units, leidingwerk, vacumeren en inbedrijfstelling. Na de installatie kunt u de airco direct gebruiken.',
  },
  {
    question: 'Waar mag de buitenunit geplaatst worden?',
    answer: 'De buitenunit kan worden geplaatst aan de gevel (op beugels), op het balkon, in de tuin (op een betonblok of voeten) of op het dak. Belangrijke regels: de unit moet voldoende ventilatie hebben, beschermd zijn tegen direct regenwater en bereikbaar voor onderhoud. In sommige gemeenten gelden regels voor plaatsing aan de voorgevel — wij adviseren u hierover bij de offerte.',
  },
  {
    question: 'Kan een split airco ook verwarmen?',
    answer: 'Ja, de meeste moderne split airco\'s kunnen ook verwarmen via de warmtepomp-functie. Ze zijn dan 3 tot 5 keer efficiënter dan elektrische verwarmingstoestellen. Dit maakt een airco ook in de winter een economische keuze voor bijverwarming.',
  },
  {
    question: 'Wat kost een mono-split airco installatie?',
    answer: 'Een complete mono-split installatie (inclusief unit, leidingwerk, montage en 5 jaar garantie) kost bij StayCool Airco doorgaans tussen €1.500 en €3.000 afhankelijk van het gekozen merk en model. Budget merken zoals Tosot of Toshiba starten vanaf €1.500, premium merken zoals Daikin of Mitsubishi Heavy kosten €2.000 tot €3.000.',
  },
  {
    question: 'Heb ik een vergunning nodig voor een split airco?',
    answer: 'In de meeste gevallen heeft u geen bouwvergunning nodig voor een split airco in Limburg. Er gelden wel regels: de buitenunit mag in veel gemeenten niet aan de voorgevel of voor bepaalde monumenten. Wij adviseren u tijdens de intake over de lokale regels en of een melding of vergunning vereist is.',
  },
];

export default function SplitAircoInstallatie() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Split Airco Installatie | Mono-Split Systeem | StayCool Limburg</title>
        <meta
          name="description"
          content="Split airco installatie door gecertificeerde monteurs in Limburg. Mono-split systeem: 1 buitenunit + 1 binnenunit. Koelen én verwarmen. Gratis offerte!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/split-airco-installatie" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Split Airco Installatie Limburg',
          serviceType: 'Mono-split Airconditioning Installatie',
          description: 'Professionele installatie van mono-split airco systemen in Limburg door F-gassen gecertificeerde monteurs. 1 buitenunit + 1 binnenunit voor koelen en verwarmen.',
          areaServed: {
            '@type': 'State',
            name: 'Limburg',
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '1500',
            highPrice: '3000',
            offerCount: '2',
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
              { label: 'Split Airco Installatie' },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Split Airco Installatie — Mono-Split Systeem
            </h1>
            <p className="text-base md:text-lg text-sky-100 mb-8">
              Een split airco is de meest populaire en efficiënte keuze voor het koelen en verwarmen van één ruimte. StayCool Airco installeert mono-split systemen van topmerken in heel Limburg. Snel, vakkundig en met 5 jaar garantie.
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
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Waarom een Split Airco?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Award className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficiënter dan Mobiel</h3>
              <p className="text-base text-gray-600">Een split airco verbruikt tot 40% minder energie dan een vergelijkbare mobiele unit door het gebruik van een efficiënt compressorsysteem.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Shield className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aanzienlijk Stiller</h3>
              <p className="text-base text-gray-600">De compressor zit in de buitenunit, dus het lawaai blijft buiten. Binnenunits produceren slechts 20-25 dB(A) — fluisterstil.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Wrench className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Permanent Geïnstalleerd</h3>
              <p className="text-base text-gray-600">Eenmaal geïnstalleerd, staat een split airco er altijd klaar. Geen gedoe met slangen of verplaatsen — altijd direct klaar voor gebruik.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <CheckCircle className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Koelen én Verwarmen</h3>
              <p className="text-base text-gray-600">Moderne split airco's werken als warmtepomp en zijn ook in de winter bruikbaar voor bijverwarming met uitstekend energierendement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Uitleg wat is split airco */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat is een Split Airco?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                Een split airco (ook wel mono-split systeem genoemd) bestaat uit twee units die samenwerken:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Binnenunit (indoor unit)</p>
                    <p className="text-sm text-gray-600">Gemonteerd aan de binnenmuur van de te koelen of verwarmen ruimte. Blaast gekoelde of verwarmde lucht de kamer in via een ventilator.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Buitenunit (outdoor unit)</p>
                    <p className="text-sm text-gray-600">Bevat de compressor en condensor. Plaatst warmte buiten bij koelmodus, of onttrekt warmte aan de buitenlucht bij verwarmingsmodus.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Leidingwerk</p>
                    <p className="text-sm text-gray-600">Verbindt de twee units via geïsoleerde koelleidingen, condensafvoer en elektrische bekabeling door een kleine opening in de muur.</p>
                  </div>
                </li>
              </ul>
              <p className="text-base text-gray-600">
                Dit systeem is ideaal voor het koelen of verwarmen van één specifieke ruimte, zoals een woonkamer, slaapkamer, thuiskantoor of bedrijfsruimte.
              </p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Split vs. Mobiele Airco</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sky-200">
                      <th className="text-left py-2 pr-4 text-gray-700">Kenmerk</th>
                      <th className="text-left py-2 pr-4 text-sky-700 font-bold">Split Airco</th>
                      <th className="text-left py-2 text-gray-500">Mobiel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-100">
                    {[
                      { feature: 'Energieklasse', split: 'A++ / A+++', mobile: 'A / A+' },
                      { feature: 'Geluidsniveau', split: '20-25 dB(A)', mobile: '55-65 dB(A)' },
                      { feature: 'Koelcapaciteit', split: 'Hoog', mobile: 'Beperkt' },
                      { feature: 'Verwarmen', split: 'Ja (warmtepomp)', mobile: 'Beperkt' },
                      { feature: 'Installatie', split: 'Vereist monteur', mobile: 'Geen installatie' },
                      { feature: 'Kosten gebruik/jaar', split: 'Laag', mobile: 'Hoog' },
                    ].map((row) => (
                      <tr key={row.feature}>
                        <td className="py-2 pr-4 text-gray-600">{row.feature}</td>
                        <td className="py-2 pr-4 text-sky-700 font-semibold">{row.split}</td>
                        <td className="py-2 text-gray-400">{row.mobile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installatie stappen */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Het Installatieproces Stap voor Stap
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Onze monteurs doorlopen altijd hetzelfde professionele proces. Van begin tot eind duurt een mono-split installatie gemiddeld 4 tot 6 uur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="bg-sky-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-base text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-6 py-3 text-sky-700 font-semibold">
              <Clock className="h-5 w-5" />
              Gemiddelde installatieduur: 4–6 uur
            </div>
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Kosten Split Airco Installatie
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Volledig inclusief: unit, leidingwerk (tot 3 meter), montage, inbedrijfstelling en 5 jaar garantie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Budget Mono-split</h3>
              <p className="text-gray-500 text-sm mb-3">Tosot, Toshiba — 2.5 tot 3.5 kW</p>
              <p className="text-3xl font-bold text-sky-600 mb-4">€1.500 – €2.000</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Uitstekende kwaliteit</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> A++ energieklasse</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-400 ring-2 ring-sky-400">
              <div className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Premium</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Mono-split</h3>
              <p className="text-gray-500 text-sm mb-3">Daikin, Mitsubishi Heavy — 2.5 tot 5 kW</p>
              <p className="text-3xl font-bold text-sky-600 mb-4">€2.000 – €3.000</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> A+++ energieklasse</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Laagste energiekosten</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">Meerkosten voor extra leidinglengte worden vooraf transparant besproken.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Veelgestelde Vragen over Split Airco Installatie
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
            <Link to="/airco-installatie-prijs" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Airco Installatie Prijs
            </Link>
            <Link to="/multi-split-airco-installatie" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Multi-Split Airco Installatie
            </Link>
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
            Vraag Uw Gratis Split Airco Offerte Aan
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-10">
            Ontvang een complete prijsopgave voor uw mono-split installatie. Binnen 24 uur reactie, geen verplichtingen.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
