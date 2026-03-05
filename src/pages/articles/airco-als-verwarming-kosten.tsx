import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ThermometerSun, Euro, TrendingDown, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Hoeveel kost verwarmen met een airco per maand?',
    answer:
      'Bij een airco met SCOP 4.0 en een stroomprijs van €0,23/kWh betaalt u circa €0,058 per kWh warmte. Voor een woonkamer van 30 m² die 8 uur per dag verwarmd wordt kost dat ruwweg €30-€50 per maand in de winter, afhankelijk van de buitentemperatuur en isolatiegraad.',
  },
  {
    question: 'Wat is SCOP en waarom is het belangrijk voor de kosten?',
    answer:
      'SCOP (Seasonal Coefficient of Performance) geeft aan hoeveel kWh warmte een airco produceert per kWh stroom over een heel verwarmingsseizoen. Een SCOP van 4.0 betekent: 4 kWh warmte per 1 kWh stroom. Hoe hoger de SCOP, hoe lager uw stookkosten.',
  },
  {
    question: 'Is verwarmen met airco goedkoper dan een HR-ketel?',
    answer:
      'Ja, bij de huidige energieprijzen (gas ~€1,10/m³, stroom ~€0,23/kWh) is een airco met SCOP 4.0 meer dan twee keer zo goedkoop als een HR-ketel. De kostprijs per kWh warmte is €0,058 voor airco versus €0,125 voor gas.',
  },
  {
    question: 'Wanneer verdient een airco zichzelf terug?',
    answer:
      'Bij een investering van €2.000-€3.500 en een jaarlijkse besparing van €200-€400 ten opzichte van gasverwarming, is de terugverdientijd gemiddeld 4 tot 6 jaar. Daarna profiteert u van lagere stookkosten voor de resterende levensduur van 15-20 jaar.',
  },
  {
    question: 'Werkt een airco ook bij vrieskou?',
    answer:
      'Moderne inverter-aircos functioneren tot -15°C of zelfs -25°C (afhankelijk van het model). Bij extreme vrieskou daalt het rendement (SCOP) wel, maar de unit blijft verwarmen. Voor Limburgse winters is dat ruimschoots voldoende.',
  },
  {
    question: 'Wat kost de installatie van een airco voor verwarming?',
    answer:
      'Een mono-split airco inclusief installatie door StayCool Airco kost doorgaans €1.500-€3.500, afhankelijk van het merk, vermogen en de situatie ter plaatse. Neem contact op voor een vrijblijvende offerte op maat.',
  },
];

export default function AircoAlsVerwarmingKosten() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco als Verwarming: Kosten' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco als Verwarming: Wat Zijn de Kosten? | Berekening 2025</title>
        <meta
          name="description"
          content="Wat kost verwarmen met een airco per maand? We berekenen het voor u: bij SCOP 4.0 en stroom €0,23/kWh betaalt u slechts €0,058 per kWh warmte."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-als-verwarming-kosten" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Airco als Verwarming: Wat Zijn de Kosten? Berekening 2025',
          description:
            'Wat kost verwarmen met een airco per maand? We berekenen het voor u: bij SCOP 4.0 en stroom €0,23/kWh betaalt u slechts €0,058 per kWh warmte.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/airco-als-verwarming-kosten',
          },
          inLanguage: 'nl-NL',
          keywords: 'airco verwarming kosten, verwarmen met airco prijs, SCOP berekening, airco vs gas kosten',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Airco als Verwarming: Wat Zijn de Kosten?
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Een airco is niet alleen voor de zomer. Als lucht-lucht warmtepomp verwarmt hij uw woning
            2 tot 5 keer efficiënter dan een elektrische kachel — en goedkoper dan gas. We berekenen
            het voor u.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Steeds meer huishoudens in Limburg ontdekken dat hun airco ook in de winter van pas komt.
          Een moderne split-airco met warmtepompfunctie — ook wel <em>lucht-lucht warmtepomp</em> genoemd
          — haalt warmte uit de buitenlucht en blaast die naar binnen. Bij een buitentemperatuur van
          7°C levert de unit gemiddeld 4 kWh warmte voor elke kWh stroom die hij verbruikt. Dat
          rendement wordt uitgedrukt in de <strong>SCOP-waarde</strong> (Seasonal Coefficient of
          Performance).
        </p>

        {/* Hoe werkt het */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Hoe werkt een airco als verwarming?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een airco verdampt koudemiddel in de buitenunit. Daarbij absorbeert het koudemiddel warmte
          uit de buitenlucht — zelfs bij temperaturen tot -15°C. Via een compressor wordt dat koudemiddel
          samengeperst, waardoor de temperatuur sterk stijgt. De binnenunit geeft die warmte vervolgens
          af aan de ruimte. Het resultaat: voor elke euro aan stroom krijgt u 3 tot 5 euro aan warmte
          terug, afhankelijk van het model en de buitentemperatuur.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Dit principe maakt de airco fundamenteel anders dan een elektrische kachel, die altijd maximaal
          1 kWh warmte levert per kWh stroom (rendement 100%). Een airco met SCOP 4.0 haalt een rendement
          van 400%.
        </p>

        {/* Vergelijkingstabel kosten */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Vergelijking: kosten per kWh warmte
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In de onderstaande tabel ziet u wat elke verwarmingsbron u kost per kWh nuttige warmte,
          op basis van actuele energieprijzen (2025):
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Verwarmingsbron</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Energieprijs</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Rendement</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Kosten per kWh warmte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-green-50">
                <td className="px-6 py-4 text-sm font-semibold text-green-800">Airco SCOP 4.0 (stroom €0,23)</td>
                <td className="px-6 py-4 text-right text-sm">€0,23/kWh</td>
                <td className="px-6 py-4 text-right text-sm">400%</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-green-700">€0,058</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">Airco SCOP 3.5 (stroom €0,23)</td>
                <td className="px-6 py-4 text-right text-sm">€0,23/kWh</td>
                <td className="px-6 py-4 text-right text-sm">350%</td>
                <td className="px-6 py-4 text-right text-sm">€0,066</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm">Stadsverwarming</td>
                <td className="px-6 py-4 text-right text-sm">variabel</td>
                <td className="px-6 py-4 text-right text-sm">~100%</td>
                <td className="px-6 py-4 text-right text-sm">€0,08–€0,12</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">HR-ketel (gas €1,10/m³, eff. 88%)</td>
                <td className="px-6 py-4 text-right text-sm">€1,10/m³</td>
                <td className="px-6 py-4 text-right text-sm">88%</td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-orange-700">€0,125</td>
              </tr>
              <tr className="bg-red-50">
                <td className="px-6 py-4 text-sm">Elektrische kachel</td>
                <td className="px-6 py-4 text-right text-sm">€0,23/kWh</td>
                <td className="px-6 py-4 text-right text-sm">100%</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-red-700">€0,23</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Uitleg */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          De kostenberekening voor de HR-ketel: 1 m³ aardgas bevat 8,8 kWh. Bij 88% rendement levert
          dat 7,74 kWh nuttige warmte. Prijs per kWh warmte = €1,10 / 7,74 = <strong>€0,142</strong>.
          Een airco met SCOP 4.0 levert diezelfde kWh warmte voor slechts <strong>€0,058</strong> —
          meer dan twee keer zo goedkoop.
        </p>

        {/* Voorbeeld berekening */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Rekenvoorbeeld: woonkamer van 30 m²
        </h2>
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-sky-900 mb-3 flex items-center gap-2">
                <ThermometerSun className="h-5 w-5" /> Aannames
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>Ruimte: 30 m², 2,6 m hoog</li>
                <li>Warmtebehoefte: 50 W/m² = 1,5 kW</li>
                <li>Gebruiksduur: ~1.500 uur per jaar (herfst/winter)</li>
                <li>Totaal warmtebehoefte: 4.500 kWh/jaar</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-sky-900 mb-3 flex items-center gap-2">
                <Euro className="h-5 w-5" /> Jaarkosten
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="text-green-700 font-semibold">
                  Airco SCOP 4.0: 1.125 kWh stroom = <strong>€259/jaar</strong>
                </li>
                <li className="text-orange-700">
                  HR-ketel: 511 m³ gas = <strong>€562/jaar</strong>
                </li>
                <li className="text-red-700">
                  Elektrische kachel: 4.500 kWh = <strong>€1.035/jaar</strong>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            <strong>Besparing airco vs. gas: €303/jaar.</strong> Bij een aanschafprijs van €2.000 netto
            is de terugverdientijd circa 6,5 jaar.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Welke airco is het meest geschikt voor verwarmen?</p>
            <p className="text-orange-100 text-sm">Bekijk onze aanbevolen modellen met hoge SCOP-waarden.</p>
          </div>
          <Link
            to="/beste-airco-voor-verwarmen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Beste airco's voor verwarmen
          </Link>
        </div>

        {/* Seizoen & gebruik */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Seizoensgebonden gebruik en kosten
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De kosten van verwarmen met een airco variëren per seizoen. In het voor- en najaar (10-15°C
          buiten) is het rendement het hoogst en de kosten het laagst. Bij diepvriestemperaturen
          (&lt;-5°C) daalt de SCOP naar 2,5-3,0, waardoor de kosten per kWh warmte iets stijgen.
          Zelfs dan is de airco nog altijd goedkoper dan gas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          In de zomermaanden (mei-september) gebruikt u de airco voor koeling. Het electriciteitsverbruik
          voor koelen is aanzienlijk lager dan voor verwarmen — de SEER-waarde (koelrendement) van
          moderne units ligt doorgaans op 6,0 tot 9,0.
        </p>

        {/* Aanschaf vs besparing */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Aanschafkosten versus besparing: break-even analyse
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een mono-split airco kost inclusief installatie door StayCool Airco gemiddeld €1.800-€3.000.
          Afhankelijk van uw huidige verwarmingskosten en het gebruik is de typische terugverdientijd:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
          <li>
            <strong>4-5 jaar</strong> bij een groot verbruik (vervanging van een inefficiënte
            elektrische verwarming).
          </li>
          <li>
            <strong>5-7 jaar</strong> bij vervanging van een moderne HR-ketel op de bijbehorende zone.
          </li>
          <li>
            <strong>3-4 jaar</strong> wanneer u ook de zomerkoeling meerekent (u bespaart extra op
            het niet aanschaffen van een aparte koeling).
          </li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Na de terugverdientijd bespaart u jaarlijks €200-€500, afhankelijk van het gebruik. Over
          de volledige levensduur van 15-20 jaar is de airco financieel een uitstekende investering.
        </p>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Klaar voor een airco in Limburg?</p>
            <p className="text-orange-100 text-sm">F-gassen gecertificeerd, STEK erkend. Plan een gratis adviesgesprek.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* Onderhoud & extra kosten */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Vergeet het jaarlijks onderhoud niet
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Om de SCOP-waarde op peil te houden, is jaarlijks onderhoud aanbevolen. StayCool Airco
          verzorgt een servicebeurt voor €100-€150 inclusief reiniging van filters, controle van het
          koudemiddel en inspectie van leidingen. Verwaarloosde filters verlagen het rendement met
          5-15%, wat uw stookkosten direct verhoogt.
        </p>

        {/* Conclusie */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Conclusie</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Een airco als verwarming is bij de huidige energieprijzen financieel aantrekkelijk voor het
          overgrote deel van de Limburgse huishoudens. De kostprijs per kWh warmte (€0,058 bij SCOP 4.0)
          is meer dan twee keer lager dan gas (€0,125) en bijna vier keer lager dan een elektrische
          kachel (€0,23). De investering verdient zichzelf gemiddeld in 4-6 jaar terug.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
          Veelgestelde vragen
        </h2>
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

        {/* Contact CTA */}
        <div className="bg-sky-800 rounded-xl p-6 mb-10 text-white text-center">
          <p className="text-xl font-bold mb-2">Vraag een vrijblijvende offerte aan</p>
          <p className="text-sky-200 mb-4">StayCool Airco | F-gassen gecertificeerd | STEK erkend | 4.9 ⭐</p>
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
