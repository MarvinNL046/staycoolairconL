import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ThermometerSun, Droplets, Euro, ChevronDown, ChevronUp, Phone, CheckCircle, XCircle } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Wat is het verschil tussen een airco en een warmtepomp?',
    answer:
      'Een airco (lucht-lucht systeem) verplaatst warmte via lucht: de binnenunit blaast warme of koele lucht de ruimte in. Een warmtepomp (lucht-water systeem) verwarmt water dat via radiatoren of vloerverwarming wordt rondgepompt. Een airco kan koelen; een standaard warmtepomp doorgaans niet.',
  },
  {
    question: 'Kan een airco ook verwarmen als een warmtepomp?',
    answer:
      'Ja, alle moderne split-aircos hebben een verwarmingsmodus en werken dan als een lucht-lucht warmtepomp. Ze zijn echter niet geschikt om radiatoren of vloerverwarming te voeden — daarvoor heeft u een lucht-water warmtepomp nodig.',
  },
  {
    question: 'Welk systeem geeft subsidie?',
    answer:
      'Een lucht-water warmtepomp komt in aanmerking voor de ISDE-subsidie (tot meerdere duizenden euro\'s). Een lucht-lucht airco valt buiten de ISDE-regeling. Vraag uw adviseur of er aanvullende lokale subsidies zijn.',
  },
  {
    question: 'Wat kost een warmtepomp vergeleken met een airco?',
    answer:
      'Een lucht-lucht split-airco kost inclusief installatie €1.500-€3.500. Een volledige lucht-water warmtepomp inclusief installatie kost €8.000-€15.000. Bij de warmtepomp moet u vaak ook de radiatoren vervangen door lage-temperatuurradiatoren of vloerverwarming aanleggen.',
  },
  {
    question: 'Kan ik mijn cv-ketel volledig vervangen door een airco?',
    answer:
      'Als u radiatoren of vloerverwarming heeft, kunt u de cv-ketel niet volledig vervangen door een split-airco. Een airco verwarmt de lucht in de ruimte, niet het water in uw verwarmingssysteem. U kunt de airco wel gebruiken als aanvullende verwarming voor specifieke ruimtes.',
  },
  {
    question: 'Installeert StayCool Airco ook warmtepompen?',
    answer:
      'StayCool Airco is gespecialiseerd in lucht-lucht split-aircos. Wij installeren geen volledige lucht-water warmtepompen. Voor een hybride aanpak — waarbij u uw bestaande cv-ketel combineert met een airco — bent u bij ons aan het juiste adres.',
  },
];

export default function AircoVsWarmtepomp() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco vs Warmtepomp' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco vs Warmtepomp: Wat is het Verschil? | Complete Gids</title>
        <meta
          name="description"
          content="Airco of warmtepomp kiezen? Lucht-lucht vs lucht-water systemen vergeleken op kosten, gebruik en installatie. Specialist legt uit wat bij u past."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-vs-warmtepomp" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Airco vs Warmtepomp: Wat is het Verschil? Complete Gids',
          description:
            'Airco of warmtepomp kiezen? Lucht-lucht vs lucht-water systemen vergeleken op kosten, gebruik en installatie.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/airco-vs-warmtepomp',
          },
          inLanguage: 'nl-NL',
          keywords: 'airco vs warmtepomp, lucht-lucht vs lucht-water, warmtepomp vergelijking, airco installatie kosten',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Airco vs Warmtepomp: Wat is het Verschil?
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Beide systemen halen warmte uit de buitenlucht, maar ze leveren die warmte op een
            fundamenteel andere manier. Welk systeem past bij uw woning en situatie?
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          De termen "airco" en "warmtepomp" worden in de volksmond soms door elkaar gebruikt, maar ze
          verwijzen naar twee fundamenteel verschillende systemen. Beide gebruiken hetzelfde koelcircuit
          om warmte te verplaatsen, maar de manier waarop die warmte in uw woning terechtkomt,
          verschilt sterk. Dit artikel legt het uit en helpt u de juiste keuze maken.
        </p>

        {/* Definitie */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wat is een airco (lucht-lucht systeem)?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een split-airco bestaat uit een buitenunit en een of meer binnenunits. De binnenunit blaast
          direct verwarmde of gekoelde lucht de ruimte in. Er zijn geen radiatoren, leidingen of
          een verwarmingsketel voor nodig. U kiest een ruimtetemperatuur, de airco regelt die in
          minuten — zowel in de zomer (koelen) als in de winter (verwarmen).
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          In technische termen heet dit een <strong>lucht-lucht warmtepomp</strong>: de warmtebron is
          buitenlucht, en het afgiftemedium is binnenlucht. De SCOP-waarden van moderne split-aircos
          liggen op 4,0 tot 5,2 — uitstekend voor energiezuinig verwarmen.
        </p>

        {/* Definitie warmtepomp */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wat is een warmtepomp (lucht-water systeem)?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een lucht-water warmtepomp haalt warmte uit de buitenlucht, maar gebruikt die om water te
          verwarmen. Dat warme water circuleert door uw bestaande radiatoren, vloerverwarming of
          een warmtapwaterboiler. U heeft dus al een waterdistributiesysteem nodig in uw woning.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Een lucht-water warmtepomp is ontworpen om de cv-ketel volledig te vervangen. Ze werken
          het best bij lage aanvoertemperaturen (35-45°C), wat ideaal is voor vloerverwarming of
          speciale lage-temperatuurradiatoren. Ze kunnen in de standaardvariant niet koelen.
        </p>

        {/* Vergelijkingstabel */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Vergelijking: airco vs. warmtepomp
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Eigenschap</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Split-airco (L-L)</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Warmtepomp (L-W)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {[
                { prop: 'Koelen in de zomer', airco: '✓ Ja', wp: '✗ Nee (standaard)' },
                { prop: 'Verwarmen in de winter', airco: '✓ Ja (bijverwarmen)', wp: '✓ Ja (volledig)' },
                { prop: 'Radiatoren/vloerverwarming voeden', airco: '✗ Nee', wp: '✓ Ja' },
                { prop: 'CV-ketel vervangen', airco: '✗ Gedeeltelijk', wp: '✓ Volledig' },
                { prop: 'Aanschaf + installatie', airco: '€1.500-€3.500', wp: '€8.000-€15.000' },
                { prop: 'SCOP verwarmingsrendement', airco: '4,0-5,2', wp: '3,5-4,5' },
                { prop: 'ISDE-subsidie', airco: '✗ Nee', wp: '✓ Ja' },
                { prop: 'Geschikt voor huurwoning', airco: '✓ Vaak', wp: '✗ Zelden' },
                { prop: 'Installatietermijn', airco: '4-6 uur', wp: '1-3 dagen' },
                { prop: 'Levensduur', airco: '15-20 jaar', wp: '15-20 jaar' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.prop}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.airco}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{row.wp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Interesse in een split-airco voor uw woning?</p>
            <p className="text-orange-100 text-sm">Gratis advies en offerte, installatie binnen 1-3 weken.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* Wanneer airco */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wanneer kiest u voor een airco?
        </h2>
        <div className="space-y-2 mb-8">
          {[
            'U wilt zowel koelen in de zomer als bijverwarmen in de winter.',
            'Uw budget is €1.500-€3.500 inclusief installatie.',
            'U woont in een huurwoning of appartement en wilt geen ingrijpende installatie.',
            'U heeft al een cv-ketel en wilt die behouden als backup.',
            'U wilt een specifieke ruimte (woonkamer, slaapkamer, kantoor) klimatiseren.',
            'Snelle installatie is belangrijk: alles geregeld in één dag.',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>

        {/* Wanneer warmtepomp */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wanneer kiest u voor een warmtepomp?
        </h2>
        <div className="space-y-2 mb-8">
          {[
            'U wilt de cv-ketel volledig vervangen door een duurzame oplossing.',
            'U heeft vloerverwarming of wil lage-temperatuurradiatoren aanleggen.',
            'U bouwt nieuw of renoveert grondig (inclusief isolatie).',
            'U wil profiteren van de ISDE-subsidie (tot meerdere duizenden euro\'s).',
            'Koeling in de zomer is voor u minder belangrijk.',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>

        {/* StayCool specialisme */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-bold text-sky-900 mb-3">Wat doet StayCool Airco?</h3>
          <p className="text-gray-700 mb-3">
            StayCool Airco is gespecialiseerd in <strong>lucht-lucht split-aircos</strong>. Wij
            installeren geen volledige lucht-water warmtepompen, maar kunnen u wel adviseren over de
            beste hybride aanpak: een airco naast uw bestaande cv-ketel.
          </p>
          <p className="text-gray-700">
            F-gassen gecertificeerd, STEK erkend, 4.9 ⭐ beoordeling. Actief in heel Limburg.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Bekijk de beste airco's voor uw situatie</p>
            <p className="text-orange-100 text-sm">Hoge SCOP, stil, geschikt voor koelen én verwarmen.</p>
          </div>
          <Link
            to="/beste-airco-voor-verwarmen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Beste airco voor verwarmen
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">Veelgestelde vragen</h2>
        <div className="space-y-3 mb-12">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-sky-600 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 text-base leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-sky-800 rounded-xl p-6 mb-10 text-white text-center">
          <p className="text-xl font-bold mb-2">Persoonlijk advies over uw situatie?</p>
          <p className="text-sky-200 mb-4">StayCool Airco | Limburg | 4.9 ⭐ | F-gassen gecertificeerd</p>
          <a
            href="tel:0462021430"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl"
          >
            <Phone className="h-5 w-5" /> 046 202 1430
          </a>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
