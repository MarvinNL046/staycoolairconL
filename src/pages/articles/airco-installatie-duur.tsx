import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Wrench, CheckCircle, ChevronDown, ChevronUp, Phone, Calendar } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const installationSteps = [
  {
    stap: '1',
    title: 'Aankomst & materiaalinspectie',
    duur: '~30 min',
    desc: 'De monteur arriveert, inspecteert de geleverde units en het gereedschap, bespreekt de definitieve plaatsing en beantwoordt eventuele vragen.',
  },
  {
    stap: '2',
    title: 'Buitenunit plaatsen',
    duur: '1-2 uur',
    desc: 'De wandbeugel of vloerbeugel wordt gemonteerd, de buitenunit wordt bevestigd op de juiste hoogte en positie. Anti-vibratiedempeis worden aangebracht.',
  },
  {
    stap: '3',
    title: 'Gat boren en leidingwerk aanleggen',
    duur: '1-2 uur',
    desc: 'Er wordt een gat geboord door de muur (ca. 65 mm). Koelleiding, condensafvoer en elektrische kabel worden aangelegd en netjes weggewerkt in een leidingkanaal of isolatiemantel.',
  },
  {
    stap: '4',
    title: 'Binnenunit monteren',
    duur: '30 min per unit',
    desc: 'De wandplaat wordt waterpas bevestigd, de binnenunit wordt erop geklikt. Leidingen worden aangesloten op de unit en netjes weggewerkt.',
  },
  {
    stap: '5',
    title: 'Koelleiding verbinden en vacumeren',
    duur: '~1 uur',
    desc: 'De flare-verbindingen worden handmatig en met sleutel aangedraaid. Het systeem wordt gevacuumeerd om vochtigheid en lucht te verwijderen. Vervolgens wordt een druktest uitgevoerd (minimaal 30 minuten).',
  },
  {
    stap: '6',
    title: 'Inbedrijfstelling en testrun',
    duur: '~30 min',
    desc: 'Het afsluiter van het koudemiddel wordt geopend. De unit start op en wordt getest op koelen, verwarmen en ventilatie. Temperatuurmeting voor- en achteraf.',
  },
  {
    stap: '7',
    title: 'Uitleg bediening en opruimen',
    duur: '~15 min',
    desc: 'De monteur legt de bediening uit: remote, wifi-koppeling, timer, nachtmodus en filterschema. Alle verpakkingen worden afgevoerd en de werkplek wordt netjes achtergelaten.',
  },
];

const faqItems = [
  {
    question: 'Hoe lang duurt een standaard airco installatie?',
    answer:
      'Een mono-split installatie duurt gemiddeld 4-6 uur. Bij een dual-split rekent u op 6-8 uur en bij een triple-split op 8-12 uur. Bijzondere situaties zoals een monumentale woning, zolderinstallatie of extra lange leidingen kunnen 2-4 uur extra kosten.',
  },
  {
    question: 'Hoeveel overlast veroorzaakt de installatie?',
    answer:
      'De voornaamste overlast is het boren van het gat door de muur: dat duurt 15-30 minuten en maakt lawaai vergelijkbaar met een boor. Stofoverlast is minimaal wanneer de monteur een stofzuiger gebruikt tijdens het boren. De werkplek wordt na afloop netjes achtergelaten.',
  },
  {
    question: 'Wat moet ik voorbereiden voor de installatie?',
    answer:
      'Zorg voor: 1) Vrije toegang tot zowel de binnenkant als de buitenkant van de geplande locatie. 2) Een stopcontact (230V) in de buurt van de binnenunit. 3) Schriftelijke toestemming van uw VVE of verhuurder als dat van toepassing is. 4) Ruimte op het terrein voor materiaalstalling.',
  },
  {
    question: 'Hoe snel kan StayCool Airco langskomen?',
    answer:
      'Wij plannen installaties doorgaans binnen 1-3 weken na offerte. In de drukste periodes (mei-augustus) kan de wachttijd oplopen tot 3-4 weken. Bel ons voor een actuele planning.',
  },
  {
    question: 'Kan de installatie in één dag worden afgerond?',
    answer:
      'Ja, een standaard mono-split of dual-split installatie wordt altijd in één dag afgerond. Bij grotere multi-split systemen (4+ units) kan de installatie over twee dagen gespreid worden.',
  },
  {
    question: 'Heeft de installateur een vergunning nodig?',
    answer:
      'Nee, maar de monteur moet F-gassen gecertificeerd zijn. StayCool Airco heeft alle vereiste certificeringen (F-gassen, STEK erkend) en werkt conform de geldende normen.',
  },
];

export default function AircoInstallatieDuur() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Hoe Lang Duurt een Airco Installatie?' },
  ];

  return (
    <>
      <Helmet>
        <title>Hoe Lang Duurt een Airco Installatie? | Tijdsduur & Planning</title>
        <meta
          name="description"
          content="Mono-split installatie: 4-6 uur. Multi-split: 6-12 uur. Wat moet u voorbereiden? Planning, vergunningen en werkwijze van StayCool Airco uitgelegd."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-installatie-duur" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Hoe Lang Duurt een Airco Installatie? Tijdsduur & Planning',
          description:
            'Mono-split installatie: 4-6 uur. Multi-split: 6-12 uur. Wat moet u voorbereiden? Planning, vergunningen en werkwijze uitgelegd.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/airco-installatie-duur',
          },
          inLanguage: 'nl-NL',
          keywords:
            'airco installatie hoe lang, airco installatie tijdsduur, airco monteren tijd, airco plaatsen duur',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hoe Lang Duurt een Airco Installatie?
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Een mono-split installatie is in 4-6 uur gereed. Lees wat er stap voor stap gebeurt,
            hoe u zich voorbereidt en wanneer de monteur bij u kan zijn.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Een van de meest gestelde vragen is: "Hoe lang bent u bezig?" Het antwoord hangt af van het
          type systeem, de bouwtechnische situatie en de afstand van buiten- naar binnenunit. In de
          meeste gevallen is alles in één werkdag gereed, zonder dat u dagenlang overlast heeft.
        </p>

        {/* Tijdsduur tabel */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Tijdsduur per type installatie
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-sky-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Type installatie</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Aantal units</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Geschatte duur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Mono-split (standaard)</td>
                <td className="px-6 py-4 text-right text-sm">1 binnenu. + 1 buitenu.</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-green-700">4-6 uur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">Dual-split</td>
                <td className="px-6 py-4 text-right text-sm">2 binnenunits + 1 buitenu.</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-green-700">6-8 uur</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Triple-split</td>
                <td className="px-6 py-4 text-right text-sm">3 binnenunits + 1 buitenu.</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-orange-600">8-12 uur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">Multi-split (4+ units)</td>
                <td className="px-6 py-4 text-right text-sm">4+ binnenunits</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-orange-600">1-2 dagen</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Complexe situatie (zolder, monument, lange leiding)</td>
                <td className="px-6 py-4 text-right text-sm">variabel</td>
                <td className="px-6 py-4 text-right text-sm text-gray-600">+ 2-4 uur extra</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Stap voor stap */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
          De installatiedag stap voor stap
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Zo verloopt een standaard mono-split installatie door StayCool Airco:
        </p>
        <div className="space-y-4 mb-10">
          {installationSteps.map((step) => (
            <div key={step.stap} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.stap}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="font-semibold text-gray-900 text-base">{step.title}</p>
                  <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {step.duur}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Plan uw installatie in Limburg</p>
            <p className="text-orange-100 text-sm">Doorgaans binnen 1-3 weken ingepland. F-gassen gecertificeerd.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* Voorbereiding klant */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Wat moet u als klant voorbereiden?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De meeste klanten hoeven weinig te doen. Toch zijn er een paar punten die de installatie
          soepeler laten verlopen:
        </p>
        <div className="space-y-3 mb-8">
          {[
            {
              title: 'Vrije toegang bieden',
              desc: 'Zorg dat de monteur zowel de binnenkant als de buitenkant (tuin, balkon of straatzijde) vrij kan bereiken. Verplaats tuinmeubilair of fietsen indien nodig.',
            },
            {
              title: 'Stopcontact in de buurt',
              desc: 'De binnenunit heeft een geaard stopcontact (230V) nodig op maximaal 1,5 meter van de plaatsingslocatie. Heeft u dat niet, bespreek dit dan vooraf met ons.',
            },
            {
              title: 'VVE of verhuurder toestemming',
              desc: 'Als u in een appartement woont of huurt, zorg dan voor schriftelijke toestemming voordat de monteur arriveert. Zonder toestemming kan de installatie niet doorgaan.',
            },
            {
              title: 'Ruimte voor materiaal',
              desc: 'Wij hebben een kleine plek nodig om dozen en gereedschap neer te leggen — doorgaans volstaat een hal of garage.',
            },
            {
              title: 'De locaties bespreken',
              desc: 'Geef vooraf aan waar u de binnenunit en buitenunit geplaatst wil hebben. Twijfelt u? Onze monteur adviseert u graag ter plaatse.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlast */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Hoeveel overlast heeft u tijdens de installatie?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De overlast is minimaal, maar u moet rekening houden met:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
          <li>
            <strong>Geluid boren:</strong> 15-30 minuten boorgeluid voor het muuranker en de
            doorvoer. Vergelijkbaar met een gewone boor.
          </li>
          <li>
            <strong>Stof:</strong> Bij het boren kan enig stof vrijkomen. Onze monteurs beschermen
            uw vloer en gebruiken een stofzuiger direct bij de boor.
          </li>
          <li>
            <strong>Temperatuur:</strong> Tijdens de installatie staat een raam of deur open voor
            leidingwerk. Reken op ca. 30-60 minuten tocht.
          </li>
          <li>
            <strong>Nette oplevering:</strong> Wij ruimen al het verpakkingsmateriaal op en
            reinigen de werkplek voor vertrek.
          </li>
        </ul>

        {/* Planning */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Hoe snel kan StayCool bij u langskomen?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Wij plannen installaties doorgaans <strong>binnen 1-3 weken</strong> na een akkoord op de
          offerte. In de zomermaanden (mei-augustus) kan het iets drukker zijn. De stappen zijn:
        </p>
        <div className="space-y-3 mb-10">
          {[
            { stap: '1', title: 'Vrijblijvende offerte aanvragen', desc: 'Via onze website of telefonisch — u ontvangt een offerte op maat.' },
            { stap: '2', title: 'Akkoord en planning', desc: 'Na akkoord wordt een installatiedatum ingepland die u uitkomt.' },
            { stap: '3', title: 'Installatiedag', desc: 'Onze monteur staat op de afgesproken tijd op de stoep.' },
            { stap: '4', title: 'Oplevering', desc: 'U ontvangt uitleg over bediening en een certificaat van installatie.' },
          ].map((item) => (
            <div key={item.stap} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
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
            <p className="font-bold text-lg">Welke airco past bij uw ruimte?</p>
            <p className="text-orange-100 text-sm">Bekijk onze aanbevolen modellen voor verwarmen én koelen.</p>
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
          <p className="text-xl font-bold mb-2">Plan uw installatie vandaag nog</p>
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
