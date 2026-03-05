import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Volume2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Phone, FileText } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Hoeveel geluid mag een airco buitenunit produceren?',
    answer:
      'Volgens het Activiteitenbesluit milieubeheer mag het langtijdgemiddeld beoordelingsniveau van een airco maximaal 50 dB(A) zijn op de gevels van naastgelegen woningen overdag en 40 dB(A) \'s nachts (22:00-07:00). Op 5 meter afstand produceert een gemiddelde buitenunit nog ca. 31-41 dB(A).',
  },
  {
    question: 'Heb ik een vergunning nodig voor een airco buitenunit?',
    answer:
      'In de meeste gevallen niet. Een airco buitenunit valt doorgaans onder vergunningsvrije bouwwerken als ze voldoen aan bepaalde afmetingen en op het achtererf worden geplaatst. Controleer altijd het bestemmingsplan van uw gemeente, want sommige gemeenten of beschermde stadsgezichten hebben aanvullende regels.',
  },
  {
    question: 'Moet ik toestemming vragen aan de buren?',
    answer:
      'Wettelijk bent u dat niet verplicht — als u voldoet aan de geluidsnormen. Wel is het verstandig de buren te informeren. Bij overlast kan burenrecht van toepassing zijn (Burgerlijk Wetboek art. 5:37). Open communicatie voorkomt conflicten.',
  },
  {
    question: 'Heb ik toestemming nodig van de VVE?',
    answer:
      'Ja, altijd. Bij een appartement of woning in een VVE dient u schriftelijke toestemming te vragen. De VVE kan de plaatsing weigeren of voorwaarden stellen aan de locatie of het type unit. Zorg dat u de goedkeuring heeft voordat StayCool langskomt.',
  },
  {
    question: 'Hoe stil zijn moderne aircounits?',
    answer:
      'De stilste moderne buitenunits produceren 43-48 dB(A) op 1 meter afstand. De Daikin Stylish scoort 45 dB(A), de LG Artcool 47 dB(A) en de Mitsubishi Heavy Industries 48 dB(A). Op 5 meter afstand is dit slechts 31-34 dB(A) — stiller dan een normale conversatie.',
  },
  {
    question: 'Wat doe ik als ik een klacht heb over een airco van mijn buurman?',
    answer:
      'Stap 1: bespreek het direct met uw buurman. Stap 2: als dat niet werkt, kunt u een meting laten uitvoeren door de gemeente. Stap 3: bij overschrijding van de normen kan de gemeente handhavend optreden. Als laatste stap staat de civiele rechter open via burenrecht.',
  },
];

export default function AircoGeluidBurenRegels() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Geluid: Regels voor Buurman & Plaatsing' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco Geluid: Regels voor Buurman & Plaatsing | StayCool</title>
        <meta
          name="description"
          content="Airco buitenunit plaatsen: wat zijn de regels? Geluidseis 40dB op 5m, burenrecht, VVE toestemming. Tips voor stille plaatsing van uw airco."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-geluid-buren-regels" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Airco Geluid: Regels voor Buurman & Plaatsing',
          description:
            'Airco buitenunit plaatsen: wat zijn de wettelijke geluidsnormen? Lees alles over burenrecht, VVE toestemming en tips voor stille plaatsing.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/airco-geluid-buren-regels',
          },
          inLanguage: 'nl-NL',
          keywords: 'airco geluid buren, airco buitenunit regels, airco dB norm, VVE toestemming airco',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Airco Geluid: Regels, Buurman en Plaatsing
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Wat zijn de wettelijke geluidsnormen voor uw airco buitenunit? Wanneer heeft u toestemming
            nodig? En hoe plaatst u hem zo stil mogelijk? Alles uitgelegd.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Een airco buitenunit maakt geluid. Dat is inherent aan het systeem: de compressor en
          ventilator draaien om warmte te transporteren. De vraag is niet of er geluid is, maar of
          dat geluid binnen de wettelijke normen blijft en uw buren niet stoort. In dit artikel
          leggen we alles uit: van decibelnormen tot VVE-toestemming.
        </p>

        {/* Wet- en regelgeving */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wet- en regelgeving: het Activiteitenbesluit
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De geluidsnormen voor airco-installaties vallen onder het{' '}
          <strong>Activiteitenbesluit milieubeheer</strong>. De relevante grenswaarden zijn:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Periode</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Maximaal geluid (gevel buren)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 text-sm">Dag (07:00-19:00)</td>
                <td className="px-6 py-4 text-right text-sm font-semibold">50 dB(A)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm">Avond (19:00-22:00)</td>
                <td className="px-6 py-4 text-right text-sm font-semibold">45 dB(A)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-blue-800">Nacht (22:00-07:00)</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-blue-800">40 dB(A)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
            <Volume2 className="h-5 w-5" /> Hoe luidt dat in de praktijk?
          </h3>
          <p className="text-gray-700 mb-3">
            De meeste buitenunits produceren <strong>45-55 dB(A) op 1 meter afstand</strong>. Door de
            natuur van geluidspropagatie daalt dat met elke verdubbeling van de afstand met ca. 6 dB.
            Op 5 meter afstand is de verwachte waarde:
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>Unit van 45 dB op 1m → <strong>~31 dB op 5m</strong> ✓ voldoet ruimschoots</li>
            <li>Unit van 50 dB op 1m → <strong>~36 dB op 5m</strong> ✓ voldoet</li>
            <li>Unit van 55 dB op 1m → <strong>~41 dB op 5m</strong> — check nachtnorm</li>
          </ul>
        </div>

        {/* Gemeente en bestemmingsplan */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Gemeente en bestemmingsplan
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Naast het Activiteitenbesluit gelden gemeentelijke regels. In de meeste Limburgse gemeenten
          is een airco buitenunit <strong>vergunningsvrij</strong> als u voldoet aan:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
          <li>Plaatsing op het achtererf of zijgevel (niet op de voorgevel of straatzijde).</li>
          <li>Maximale hoogte van 3 meter.</li>
          <li>Maximale inhoud van 2 m³ per unit.</li>
          <li>Geen beschermd stads- of dorpsgezicht.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bij twijfel raadpleegt u het Omgevingsloket of vraagt u StayCool Airco om advies. Wij kennen
          de lokale situatie in heel Limburg en weten wat vergunningsplichtig is.
        </p>

        {/* VVE & Huurwoning */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          VVE en huurwoning: altijd toestemming vragen
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5" /> VVE
            </h3>
            <p className="text-gray-700 text-sm">
              Bij een appartement of woning in een Vereniging van Eigenaren dient u altijd{' '}
              <strong>schriftelijke toestemming</strong> te vragen aan het bestuur. De VVE kan de
              plaatsing weigeren of voorwaarden stellen aan locatie, merk of uitvoering. Zorg voor
              goedkeuring voordat u een installateur inschakelt.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5" /> Huurwoning
            </h3>
            <p className="text-gray-700 text-sm">
              Als huurder heeft u altijd <strong>toestemming van de verhuurder</strong> nodig voor
              structurele aanpassingen aan de woning, waaronder het boren van een gat voor leidingen.
              Bij sociale huurwoningen vraagt u dit schriftelijk aan bij uw woningcorporatie.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Wij regelen alles voor u</p>
            <p className="text-orange-100 text-sm">StayCool controleert regelgeving en plaatst uw airco correct.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* Tips stille plaatsing */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Tips voor een stille plaatsing
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Zelfs als u wettelijk voldoet, is een goede plaatsing belangrijk voor het comfort van uzelf
          en uw buren:
        </p>
        <div className="space-y-4 mb-10">
          {[
            {
              title: 'Anti-vibratiedempets',
              desc: 'Plaats de buitenunit op rubberdempers of anti-vibratievoeten. Trillingen worden anders overgedragen via de muur of beugel en versterkt binnenin het gebouw.',
            },
            {
              title: 'Afstand tot ramen en deuren',
              desc: 'Zorg voor minimaal 1,5 meter afstand tot ramen en deuren van buren. Open ramen vergroten de geluidsoverdracht aanzienlijk.',
            },
            {
              title: 'Nooit in een nauwe gang',
              desc: 'In een smalle doorgang of nis wordt geluid gereflecteerd en versterkt. Kies een open plek waar de lucht vrij kan circuleren.',
            },
            {
              title: 'Kies een stille unit',
              desc: 'Vraag uw installateur specifiek naar de dB(A)-waarde. De Daikin Stylish (45 dB), LG Artcool (47 dB) en Mitsubishi Heavy Industries (48 dB) zijn uitstekende opties.',
            },
            {
              title: 'Nachtstand instellen',
              desc: 'Alle moderne units hebben een "silent" of "nacht"-modus die het toerental verlaagt en het geluid reduceert tot 38-42 dB(A). Stel deze automatisch in na 22:00.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stilste modellen */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          De stilste airco-modellen (buitenunit)
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Merk & Model</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Geluid op 1m</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Geluid nachtmodus</th>
                <th className="px-4 py-3 text-right text-sm font-semibold">Beoordeling</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Daikin Stylish</td>
                <td className="px-4 py-3 text-right text-sm">45 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm">40 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm text-green-700 font-semibold">Uitstekend</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">LG Artcool / Dual Inverter</td>
                <td className="px-4 py-3 text-right text-sm">47 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm">42 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm text-green-700 font-semibold">Zeer goed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Mitsubishi Heavy (SRK-serie)</td>
                <td className="px-4 py-3 text-right text-sm">48 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm">43 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm text-green-700">Goed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">Tosot / Gree</td>
                <td className="px-4 py-3 text-right text-sm">50 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm">45 dB(A)</td>
                <td className="px-4 py-3 text-right text-sm text-orange-600">Voldoende</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Klachtprocedure */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wat te doen bij een klacht?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Ontvangt u een klacht van de buren over uw airco? Volg dan deze stappen:
        </p>
        <div className="space-y-3 mb-8">
          {[
            { stap: '1', title: 'Open gesprek', desc: 'Bespreek het probleem direct en vriendelijk met de buren. Vaak is een kleine aanpassing (silent-modus na 22u, dempers) al voldoende.' },
            { stap: '2', title: 'Geluidscontrole', desc: 'Laat een meting uitvoeren door uw installateur of de gemeente. Zo weet u objectief of u within de normen valt.' },
            { stap: '3', title: 'Aanpassingen', desc: 'Pas de plaatsing aan, voeg dempers toe of stel de nachtmodus in. StayCool helpt u hierbij.' },
            { stap: '4', title: 'Gemeente inschakelen', desc: 'Als de buren blijven klagen en de meting toont dat u voldoet, kunt u de gemeente vragen te bemiddelen.' },
            { stap: '5', title: 'Civiele rechter', desc: 'Als laatste stap staat de civiele rechter open via burenrecht (BW 5:37). Dit is een uiterste maatregel.' },
          ].map((item) => (
            <div key={item.stap} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                {item.stap}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Kies de juiste airco voor uw situatie</p>
            <p className="text-orange-100 text-sm">Stille modellen, correcte plaatsing, uw buren zullen het niet horen.</p>
          </div>
          <Link
            to="/beste-airco-voor-verwarmen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Beste airco modellen
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
          <p className="text-xl font-bold mb-2">Heeft u vragen over plaatsing of regelgeving?</p>
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
