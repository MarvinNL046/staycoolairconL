import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, Wrench, Award, ChevronDown, ArrowRight } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Wat is het verschil tussen mono-split en multi-split?',
    answer: 'Bij een mono-split systeem heeft u 1 buitenunit en 1 binnenunit — ideaal voor één kamer. Bij een multi-split systeem heeft u 1 buitenunit maar 2 tot 5 binnenunits in verschillende kamers. Multi-split is voordeliger dan meerdere losse mono-split systemen wanneer u meerdere ruimtes wilt koelen, en vereist slechts één buitenunit.',
  },
  {
    question: 'Voor hoeveel kamers is een multi-split geschikt?',
    answer: 'Een multi-split systeem kan worden geconfigureerd voor 2 tot 5 kamers, afhankelijk van het gekozen model en de totale benodigde capaciteit. Wij adviseren u graag over de juiste combinatie van binnenunits voor uw woning.',
  },
  {
    question: 'Hoe lang duurt de installatie van een multi-split systeem?',
    answer: 'Een dual-zone multi-split (2 binnenunits) duurt gemiddeld 6 tot 10 uur installatie. Een triple-zone systeem (3 binnenunits) kost 8 tot 14 uur. Dit is afhankelijk van de complexiteit van de leidingvoering en bereikbaarheid van de installatielocaties.',
  },
  {
    question: 'Welke merken leveren goede multi-split systemen?',
    answer: 'Daikin, Mitsubishi Heavy Industries en LG hebben uitstekende multi-split systemen. Daikin staat bekend om betrouwbaarheid en energieprestaties. Mitsubishi Heavy Industries biedt krachtige systemen met lage geluidsniveaus. LG heeft innovatieve systemen met slimme features. Wij adviseren u op basis van uw specifieke situatie.',
  },
  {
    question: 'Kan elke kamer onafhankelijk worden geregeld?',
    answer: 'Ja! Bij een multi-split systeem heeft elke binnenunit zijn eigen afstandsbediening. U kunt per kamer de temperatuur, ventilatorsnelheid en stand instellen. De kamers werken volledig onafhankelijk van elkaar.',
  },
  {
    question: 'Wat kost een multi-split installatie?',
    answer: 'Een dual-zone multi-split systeem (2 kamers) kost doorgaans tussen €3.000 en €5.000 inclusief alles. Een triple-zone systeem (3 kamers) ligt tussen €5.000 en €8.000. Dit is inclusief alle units, leidingwerk, montage, inbedrijfstelling en 5 jaar garantie. Voor een exacte prijs maakt u gratis een offerte aan.',
  },
];

export default function MultiSplitAircoInstallatie() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Multi-Split Airco Installatie | Meerdere Kamers | StayCool</title>
        <meta
          name="description"
          content="Multi-split airco: 1 buitenunit voor 2-5 kamers. Ideaal voor woningen in Limburg. ✓ Koelen én verwarmen ✓ Energiezuinig ✓ 5 jaar garantie. Offerte!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/multi-split-airco-installatie" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Multi-Split Airco Installatie Limburg',
          serviceType: 'Multi-split Airconditioning Installatie',
          description: 'Professionele installatie van multi-split airco systemen voor 2 tot 5 kamers in Limburg. 1 buitenunit, meerdere binnenunits. Koelen en verwarmen met 5 jaar garantie.',
          areaServed: {
            '@type': 'State',
            name: 'Limburg',
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '3000',
            highPrice: '8000',
            offerCount: '3',
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
              { label: 'Multi-Split Airco Installatie' },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Multi-Split Airco — 1 Buitenunit, Meerdere Kamers
            </h1>
            <p className="text-base md:text-lg text-sky-100 mb-8">
              Wilt u meerdere kamers koelen of verwarmen met één systeem? Een multi-split airco combineert 1 compacte buitenunit met 2 tot 5 binnenunits in verschillende kamers. StayCool Airco installeert multi-split systemen van Daikin, Mitsubishi Heavy Industries en LG in heel Limburg.
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
            Voordelen van een Multi-Split Systeem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <CheckCircle className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Minder Buitenunits</h3>
              <p className="text-base text-gray-600">Slechts 1 buitenunit voor meerdere kamers. Ideaal als u beperkte buitenruimte heeft of de gevel zo min mogelijk wilt belasten.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Shield className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Per Kamer Regelbaar</h3>
              <p className="text-base text-gray-600">Elke binnenunit heeft zijn eigen bediening. Stel per kamer de gewenste temperatuur in — volledig onafhankelijk van andere kamers.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Award className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kostenefficiënt</h3>
              <p className="text-base text-gray-600">Goedkoper dan meerdere losse mono-split systemen. U deelt de buitenunit-kosten over meerdere kamers.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Wrench className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Jaar Garantie</h3>
              <p className="text-base text-gray-600">Onze 5 jaar installatiegarantie geldt voor het complete systeem inclusief alle binnenunits, buitenunit en leidingwerk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is multi-split */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat is een Multi-Split Airco?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                Een multi-split systeem bestaat uit één krachtige buitenunit die verbonden is met meerdere binnenunits in verschillende kamers. Het systeem verdeelt de koeling of verwarming over alle aangesloten kamers.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">1 Buitenunit</p>
                    <p className="text-sm text-gray-600">De compressor zit buiten in één unit. Hierdoor heeft u minder lawaai en beperkte visuele impact op de gevel.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">2 tot 5 Binnenunits</p>
                    <p className="text-sm text-gray-600">In elke gewenste kamer komt een binnenunit. Woonkamer, slaapkamer, kantoor — u bepaalt zelf de verdeling.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Onafhankelijke Bediening</p>
                    <p className="text-sm text-gray-600">Elke kamer heeft zijn eigen afstandsbediening of kan via een app worden bediend. Elke ruimte is volledig onafhankelijk instelbaar.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Vergelijkingstabel */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Mono-split vs. Multi-split</h3>
              <div className="bg-sky-50 rounded-2xl border border-sky-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sky-100">
                        <th className="text-left p-4 text-gray-700 font-semibold">Kenmerk</th>
                        <th className="text-left p-4 text-gray-700 font-semibold">Mono-split</th>
                        <th className="text-left p-4 text-sky-700 font-bold">Multi-split</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sky-100">
                      {[
                        { feature: 'Aantal kamers', mono: '1 kamer', multi: '2–5 kamers' },
                        { feature: 'Buitenunits', mono: '1 per kamer', multi: '1 voor alles' },
                        { feature: 'Prijs per kamer', mono: '€1.500–€3.000', multi: 'Lager per kamer' },
                        { feature: 'Installatieltijd', mono: '4–6 uur', multi: '6–14 uur' },
                        { feature: 'Gevelbelasting', mono: 'Per kamer 1 unit', multi: 'Slechts 1 unit' },
                        { feature: 'Onafhankelijk per kamer', mono: 'Ja', multi: 'Ja' },
                        { feature: 'Beste voor', mono: 'Kleine woning / 1 kamer', multi: 'Gezinswoning / kantoor' },
                      ].map((row) => (
                        <tr key={row.feature} className="bg-white odd:bg-sky-50/30">
                          <td className="p-4 text-gray-600 font-medium">{row.feature}</td>
                          <td className="p-4 text-gray-500">{row.mono}</td>
                          <td className="p-4 text-sky-700 font-semibold">{row.multi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer multi-split */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Wanneer Kiest u voor een Multi-Split Systeem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '2 of meer kamers',
                desc: 'Als u meerdere ruimtes wilt koelen of verwarmen, is een multi-split systeem de meest kostenefficiënte oplossing. U deelt de buitenunit-kosten over alle kamers.',
              },
              {
                title: 'Beperkte buitenruimte',
                desc: 'Heeft u slechts één geschikte plek voor een buitenunit (bijv. klein balkon of beperkte gevelruimte)? Dan is multi-split de ideale keuze.',
              },
              {
                title: 'Esthetisch bewust',
                desc: 'Liever minder buitenunits zichtbaar aan de gevel? Met één multi-split unit heeft uw woning een nettere uitstraling dan met meerdere losse systemen.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <CheckCircle className="h-8 w-8 text-sky-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capaciteitsadvies */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Capaciteitsadvies: Hoeveel Vermogen Heeft u Nodig?
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Het totale vermogen van de buitenunit wordt berekend op basis van de oppervlaktes van alle kamers. Als vuistregel:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { size: '15–25 m²', power: '2.0–2.5 kW', example: 'Kleine slaapkamer, thuiskantoor' },
              { size: '25–40 m²', power: '3.5–4.0 kW', example: 'Grote slaapkamer, open keuken' },
              { size: '40–60 m²', power: '5.0–6.0 kW', example: 'Woonkamer, grote open ruimte' },
            ].map((item) => (
              <div key={item.size} className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
                <p className="text-2xl font-bold text-sky-600 mb-1">{item.size}</p>
                <p className="text-lg font-semibold text-gray-900 mb-1">{item.power} per kamer</p>
                <p className="text-sm text-gray-500">{item.example}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">
            De benodigde capaciteit hangt ook af van isolatie, zonligging en raamoppervlak. Onze adviseur berekent de exacte capaciteit voor u.
          </p>
        </div>
      </section>

      {/* Kosten */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Kosten Multi-Split Airco Installatie
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Inclusief alle units, volledig leidingwerk, montage, inbedrijfstelling en 5 jaar installatiegarantie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dual-zone (2 kamers)</h3>
              <p className="text-3xl font-bold text-sky-600 mb-3">€3.000 – €5.000</p>
              <p className="text-sm text-gray-500 mb-4">1 buitenunit + 2 binnenunits</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <span>Installatieduur: 6–10 uur</span>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Daikin, Mitsubishi, LG</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Volledig leidingwerk</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-sky-400 ring-2 ring-sky-400">
              <div className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Populair</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Triple-zone (3 kamers)</h3>
              <p className="text-3xl font-bold text-sky-600 mb-3">€5.000 – €8.000</p>
              <p className="text-sm text-gray-500 mb-4">1 buitenunit + 3 binnenunits</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <span>Installatieduur: 8–14 uur</span>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Daikin, Mitsubishi, LG</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Volledig leidingwerk</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4–5 zones (maatwerk)</h3>
              <p className="text-3xl font-bold text-sky-600 mb-3">Op aanvraag</p>
              <p className="text-sm text-gray-500 mb-4">1 buitenunit + 4–5 binnenunits</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <span>Installatieduur: 10–16 uur</span>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Maatwerk configuratie</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> Gratis adviesgesprek</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> 5 jaar garantie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Merken */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Multi-Split Merken die wij Installeren
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Wij werken exclusief met bewezen A-merken die uitstekende multi-split systemen aanbieden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                brand: 'Daikin',
                desc: 'Marktleider in airconditioningsystemen. Daikin\'s multi-split systemen staan bekend om ultra-hoge energieprestaties (tot SCOP 5.0), fluisterstille werking en uitstekende betrouwbaarheid.',
                highlight: 'Energieprestatie A+++',
              },
              {
                brand: 'Mitsubishi Heavy Industries',
                desc: 'Krachtige en duurzame multi-split systemen voor veeleisende toepassingen. MHI staat voor industriële kwaliteit in een residentieel jasje met uitstekende koudewerking tot -20°C buiten.',
                highlight: 'Werking tot -20°C',
              },
              {
                brand: 'LG',
                desc: 'Innovatieve multi-split systemen met slimme connectiviteit. LG\'s systemen zijn eenvoudig via smartphone-app te bedienen en bieden een modern design met uitstekende energieprestaties.',
                highlight: 'Smart home integratie',
              },
            ].map((item) => (
              <div key={item.brand} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">{item.highlight}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.brand}</h3>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Veelgestelde Vragen over Multi-Split Airco
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
            <Link to="/split-airco-installatie" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Mono-Split Airco Installatie
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
            Vraag Uw Gratis Multi-Split Offerte Aan
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-10">
            Vertel ons hoeveel kamers u wilt koelen. Wij berekenen de ideale configuratie en sturen u binnen 24 uur een offerte op maat.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
