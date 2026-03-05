import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Home, Wind, CheckCircle, Phone, ArrowRight, Star, Shield, Award,
  ChevronDown, ChevronUp, AlertCircle, Zap, Euro, Volume2, Check, X
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const AircoMetBuitenunitOfZonder: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Vergelijkingen', path: '/vergelijkingen' },
    { label: 'Airco Met of Zonder Buitenunit?' },
  ];

  const schemaData = {
    name: 'Airco Met of Zonder Buitenunit? Vergelijking',
    description:
      'Split airco (met buitenunit) vs. monoblock/mobiel (zonder). Wat is beter? Eerlijke vergelijking op efficiëntie, kosten en gebruiksgemak.',
    url: 'https://staycoolairco.nl/airco-met-buitenunit-of-zonder',
  };

  type HighlightType = 'split' | 'mobiel' | 'monoblock' | 'gelijk' | null;

  const vergelijking: Array<{
    kenmerk: string;
    split: string | boolean;
    mobiel: string | boolean;
    monoblock: string | boolean;
    beste: HighlightType;
  }> = [
    { kenmerk: 'Installatie vereist', split: true, mobiel: false, monoblock: true, beste: 'mobiel' },
    { kenmerk: 'Energiezuinigheid', split: 'A++ / A+++', mobiel: 'B / C', monoblock: 'A+ / A++', beste: 'split' },
    { kenmerk: 'SEER typisch', split: '≥ 8.5', mobiel: '2.5 – 3.5', monoblock: '4.0 – 6.0', beste: 'split' },
    { kenmerk: 'Geluid binnen (min)', split: '19 dB', mobiel: '42–50 dB', monoblock: '35–42 dB', beste: 'split' },
    { kenmerk: 'Verplaatsbaar', split: false, mobiel: true, monoblock: false, beste: 'mobiel' },
    { kenmerk: 'Verwarmen (reversibel)', split: true, mobiel: false, monoblock: 'Enkele modellen', beste: 'split' },
    { kenmerk: 'Permanent gebruik', split: true, mobiel: false, monoblock: true, beste: 'split' },
    { kenmerk: 'Condenswater afvoer', split: 'Automatisch', mobiel: 'Handmatig legen', monoblock: 'Via slang', beste: 'split' },
    { kenmerk: 'Aanschafprijs (unit)', split: '€ 800–2500', mobiel: '€ 300–800', monoblock: '€ 500–1200', beste: 'mobiel' },
    { kenmerk: 'Installatiekosten', split: '€ 400–800', mobiel: '€ 0', monoblock: '€ 200–400', beste: 'mobiel' },
    { kenmerk: 'Jaarlijkse stroomkosten', split: '~€ 60', mobiel: '~€ 130–180', monoblock: '~€ 90–120', beste: 'split' },
    { kenmerk: 'Vergunning huurwoning', split: 'Vaak nodig', mobiel: 'Niet nodig', monoblock: 'Soms nodig', beste: 'mobiel' },
  ];

  const faqItems = [
    {
      question: 'Wat is het verschil tussen een split airco en een mobiele airco?',
      answer:
        'Een split airco heeft een binnenunit en een buitenunit die via een koudemiddelleidingdoor de muur verbonden zijn. Een mobiele airco heeft alles in één behuizing en voert warmte af via een slang door een raam of deur. Split is permanent, efficiënter en stiller. Mobiel is flexibel maar minder zuinig.',
    },
    {
      question: 'Is een mobiele airco echt zo inefficiënt?',
      answer:
        'Ja. Een mobiele airco heeft een SEER van gemiddeld 2.5–3.5, terwijl een split airco 8.5 of hoger haalt. Dat betekent dat een mobiele airco voor hetzelfde koeleffect 2.5 tot 3x meer stroom verbruikt. Op jaarbasis kost een mobiele airco al snel €70–120 meer aan elektriciteit dan een vergelijkbare split unit.',
    },
    {
      question: 'Wanneer is een mobiele airco wél een goede keuze?',
      answer:
        'Een mobiele airco is geschikt als tijdelijke oplossing (maximaal 1–2 seizoenen), als u in een huurwoning woont zonder toestemming voor een permanente installatie, of als u zeer incidenteel koeling nodig heeft. Voor structureel gebruik is een split airco altijd voordeliger.',
    },
    {
      question: 'Wat is een monoblock airco?',
      answer:
        'Een monoblock (ook portaalunit of through-the-wall) is een unit die volledig door de muur geplaatst wordt. Er is geen aparte buitenunit, maar de unit hangt wel permanent in de muur en kan niet verplaatst worden. Efficiënter dan mobiel, maar minder dan split. Vereist een gat van circa 60x60 cm in de muur.',
    },
    {
      question: 'Kan ik een split airco installeren als huurder?',
      answer:
        'Dit hangt af van uw verhuurder en huurovereenkomst. In de meeste gevallen is toestemming van de verhuurder vereist voor het plaatsen van een split airco (vanwege de gaten in de muur). Veel verhuurders geven toestemming als de installatie netjes uitgevoerd wordt en bij vertrek hersteld wordt. Vraag ons om advies.',
    },
  ];

  const renderValue = (val: string | boolean, highlight: boolean, isGood: boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className={`h-5 w-5 mx-auto ${highlight ? 'text-green-600' : 'text-green-400'}`} />
      ) : (
        <X className="h-5 w-5 mx-auto text-red-400" />
      );
    }
    return <span className={`text-sm font-medium ${highlight ? 'text-green-700 font-bold' : 'text-gray-700'}`}>{val}</span>;
  };

  return (
    <>
      <Helmet>
        <title>Airco Met of Zonder Buitenunit? Vergelijking | StayCool Limburg</title>
        <meta
          name="description"
          content="Split airco (met buitenunit) vs. monoblock/mobiel (zonder). Wat is beter? Eerlijke vergelijking op efficiëntie, kosten en gebruiksgemak."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-met-buitenunit-of-zonder" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Airco vergelijking</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Airco Met of Zonder Buitenunit?
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Split airco (met buitenunit), monoblock of mobiele airco — elk type heeft zijn voor- en nadelen.
              Onze eerlijke vergelijking helpt u de juiste keuze te maken voor uw situatie.
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

        {/* Type uitleg */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">De drie typen airco's</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Home className="h-8 w-8 text-blue-700" />,
                type: 'Split Airco',
                subtitle: 'Met buitenunit',
                badge: 'Aanbevolen',
                badgeColor: 'bg-green-500 text-white',
                desc: 'De meest efficiënte en stille oplossing. Een binnenunit in de woonruimte en een buitenunit aan de gevel. Verbonden via een leiding door de muur.',
                pros: ['Hoogste energie-efficiëntie (A++ / A+++)', 'Stilste werking (19–25 dB)', 'Kan ook verwarmen', 'Geen waterreservoir legen', 'Permanent, professionele installatie'],
                cons: ['Installatiekosten', 'Gat in de muur vereist', 'Toestemming verhuurder nodig'],
              },
              {
                icon: <Wind className="h-8 w-8 text-gray-500" />,
                type: 'Mobiele Airco',
                subtitle: 'Zonder buitenunit',
                badge: 'Alleen tijdelijk',
                badgeColor: 'bg-yellow-400 text-yellow-900',
                desc: 'Vrij staande unit die warmte afvoert via een slang door een raam of deur. Geen installatie, maar aanzienlijk minder efficiënt en veel lawaaiiger.',
                pros: ['Geen installatie nodig', 'Verplaatsbaar', 'Lagere aanschafkosten', 'Geschikt voor huurwoning'],
                cons: ['2–3x meer stroomverbruik', 'Erg luid (42–50 dB)', 'Waterreservoir regelmatig legen', 'Kan niet verwarmen'],
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                type: 'Monoblock',
                subtitle: 'Portaalunit',
                badge: 'Specifieke gevallen',
                badgeColor: 'bg-purple-500 text-white',
                desc: 'Vaste installatie door de muur maar zonder aparte buitenunit. Alles in één behuizing. Efficiënter dan mobiel, minder dan split. Vereist een gat van 60x60 cm.',
                pros: ['Efficiënter dan mobiel', 'Geen aparte buitenunit zichtbaar', 'Vaste installatie', 'Lagere installatiekosten dan split'],
                cons: ['Groot gat in de muur nodig', 'Lawaaiiger dan split (35–42 dB)', 'Beperkt verkrijgbaar', 'Zelden reversibel'],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.type}</h3>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="space-y-1 mb-3">
                  <h4 className="text-xs font-semibold text-green-600 uppercase">Voordelen</h4>
                  {item.pros.map((pro, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                      {pro}
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-red-500 uppercase">Nadelen</h4>
                  {item.cons.map((con, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <AlertCircle className="h-3 w-3 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Uitgebreide vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-900 to-blue-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Kenmerk</th>
                  <th className="text-center px-6 py-4 font-semibold">Split (met buitenunit)</th>
                  <th className="text-center px-6 py-4 font-semibold">Mobiel (zonder)</th>
                  <th className="text-center px-6 py-4 font-semibold">Monoblock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {vergelijking.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.kenmerk}</td>
                    <td className={`px-6 py-4 text-center ${row.beste === 'split' ? 'bg-green-50' : ''}`}>
                      {renderValue(row.split, row.beste === 'split', true)}
                    </td>
                    <td className={`px-6 py-4 text-center ${row.beste === 'mobiel' ? 'bg-green-50' : ''}`}>
                      {renderValue(row.mobiel, row.beste === 'mobiel', false)}
                    </td>
                    <td className={`px-6 py-4 text-center ${row.beste === 'monoblock' ? 'bg-green-50' : ''}`}>
                      {renderValue(row.monoblock, row.beste === 'monoblock', false)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusie */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusie: welk type past bij u?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  scenario: 'Koop- of huurwoning met toestemming',
                  advies: 'Split airco',
                  reden: 'Efficiënst, stilste, kan ook verwarmen. Terugverdientijd installatie: 2–4 jaar via energiebesparing.',
                  color: 'border-green-400 bg-green-50',
                },
                {
                  scenario: 'Huurwoning zonder toestemming, tijdelijk',
                  advies: 'Mobiele airco',
                  reden: 'Enige optie zonder installatie. Accepteer het hogere stroomverbruik. Maximaal 1–2 seizoenen gebruiken.',
                  color: 'border-yellow-400 bg-yellow-50',
                },
                {
                  scenario: 'Specifieke bouwsituatie, aparte unit ongewenst',
                  advies: 'Monoblock',
                  reden: 'Compromis: vaste installatie zonder externe unit. Hogere plaatsingskosten maar efficiënter dan mobiel.',
                  color: 'border-purple-400 bg-purple-50',
                },
              ].map((item, i) => (
                <div key={i} className={`border-2 rounded-2xl p-5 ${item.color}`}>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.scenario}</h3>
                  <div className="text-xl font-bold text-gray-900 mb-2">→ {item.advies}</div>
                  <p className="text-gray-600 text-sm">{item.reden}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Wij installeren split airco's door heel Limburg</h2>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Voor de beste koeling en verwarming adviseren wij altijd een split airco. Vraag gratis een offerte
              aan — inclusief plaatsingsadvies en capaciteitsberekening.
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
              { to: '/airco-3-5kw-hoeveel-m2', title: 'Juiste capaciteit kiezen', desc: 'Hoeveel kW heeft u nodig?' },
              { to: '/airco-installatie-prijs', title: 'Kosten split airco', desc: 'Transparante prijsinformatie' },
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

export default AircoMetBuitenunitOfZonder;
