import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ThermometerSun, ChevronDown, ChevronUp, Phone, Star } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const voordelen = [
  {
    title: 'Koelen én verwarmen in één systeem',
    desc: 'U betaalt één keer voor een systeem dat het hele jaar bruikbaar is: koelen in de zomer, verwarmen in voor- en najaar en als bijverwarming in de winter.',
  },
  {
    title: '3-5x energiezuiniger dan elektrische verwarming',
    desc: 'Een airco met SCOP 4.0 levert 4 kWh warmte per 1 kWh stroom. Een elektrische kachel levert maximaal 1 kWh warmte per kWh stroom.',
  },
  {
    title: 'Goedkoper dan gasverwarming bij huidige energieprijzen',
    desc: 'Kostprijs per kWh warmte: airco €0,058 vs. gas (HR-ketel) €0,142. U betaalt met een airco meer dan twee keer minder per kWh warmte.',
  },
  {
    title: 'Stille werking — ook \'s nachts',
    desc: 'Moderne binnenunits produceren slechts 19-28 dB(A) in de stille stand. Dat is stiller dan een fluistering. Ideaal voor slaapkamers en kantoren.',
  },
  {
    title: 'Luchtzuivering en ontvochtiging',
    desc: 'De meeste units hebben ingebouwde filters die stof, pollen en fijnstof opvangen. Bij koelen wordt ook vocht aan de lucht onttrokken, wat comfort verhoogt.',
  },
  {
    title: 'Snel resultaat',
    desc: 'Een ruimte van 30 m² is binnen 10-15 minuten op de gewenste temperatuur. U hoeft niet uren van tevoren voor te verwarmen.',
  },
  {
    title: 'Geen radiatoren of leidingen nodig',
    desc: 'Installatie is relatief eenvoudig en minimaal invasief. Geen sleuven in de vloer, geen vervanging van radiatoren.',
  },
  {
    title: '15-20 jaar levensduur bij goed onderhoud',
    desc: 'Met een jaarlijkse servicebeurt gaat een kwalitatieve airco van Daikin, LG of Mitsubishi Heavy moeiteloos 15-20 jaar mee.',
  },
];

const nadelen = [
  {
    title: 'Aanschaf- en installatiekosten',
    desc: 'Een mono-split inclusief installatie kost €1.500-€3.500. Dit is een serieuze initiële investering, al verdient u het over 4-6 jaar terug.',
  },
  {
    title: 'Buitenunit vereist plaatsruimte',
    desc: 'De buitenunit heeft een bevestigingspunt nodig (muur of dak) en moet ventileren. In kleine tuinen of bij VVE\'s kan dit een uitdaging zijn.',
  },
  {
    title: 'Jaarlijks onderhoud aanbevolen',
    desc: 'Voor optimale werking is een jaarlijkse servicebeurt aan te bevelen (€100-€150). Verwaarloosd onderhoud verlaagt het rendement en verkort de levensduur.',
  },
  {
    title: 'Minder effectief bij extreme vrieskou',
    desc: 'Onder -10°C daalt het verwarmingsrendement merkbaar. Bij -15°C of lager werkt niet elk model meer optimaal. Voor Limburg is dit praktisch zelden een probleem.',
  },
  {
    title: 'Toestemming VVE of verhuurder nodig',
    desc: 'Bij een appartement of huurwoning heeft u schriftelijke toestemming nodig van de VVE of verhuurder. Dit kan het proces vertragen.',
  },
  {
    title: 'Niet geschikt voor radiatoren of vloerverwarming',
    desc: 'Een split-airco verwarmt de lucht, niet het water in uw verwarmingssysteem. U kunt hem niet aansluiten op bestaande radiatoren of vloerverwarming.',
  },
];

const faqItems = [
  {
    question: 'Is een airco het waard om aan te schaffen?',
    answer:
      'Voor de meeste Limburgse huishoudens wel. U heeft koeling in de zomer, bijverwarming in de winter, en bij normaal gebruik is de terugverdientijd 4-6 jaar. Daarna bespaart u structureel op energiekosten.',
  },
  {
    question: 'Wat zijn de grootste nadelen van een airco?',
    answer:
      'De voornaamste nadelen zijn de initiële aanschafkosten (€1.500-€3.500), de noodzaak van een buitenunit en het jaarlijkse onderhoud. Verder is de airco minder effectief bij extreem lage temperaturen en niet geschikt voor radiatoren.',
  },
  {
    question: 'Hoe lang gaat een airco mee?',
    answer:
      'Bij jaarlijks onderhoud gaat een kwalitatieve airco van Daikin, Mitsubishi Heavy of LG gemiddeld 15-20 jaar mee. Merken als Tosot en Gree doen het doorgaans 10-15 jaar.',
  },
  {
    question: 'Kan een airco mijn hele woning verwarmen?',
    answer:
      'Een mono-split airco verwarmt effectief de ruimte(s) waar de binnenunit hangt. Voor een hele woning heeft u meerdere units (multi-split) of meerdere mono-splits nodig. Uw hele woning volledig via airco verwarmen is mogelijk, maar vraagt een goed ontwerp.',
  },
  {
    question: 'Is een airco goed voor de gezondheid?',
    answer:
      'Over het algemeen ja. Moderne aircos filteren stof en pollen en reguleren de luchtvochtigheid. Nadeel is dat te droge lucht kan optreden bij intensief koelen. Stel de airco niet te koud in en zorg voor periodieke filterreiniging.',
  },
  {
    question: 'Heeft een airco invloed op de waarde van mijn woning?',
    answer:
      'Een goede airco-installatie heeft een positieve invloed op de woningwaarde, met name wanneer het systeem ook verwarmingsfunctie heeft. Het verhoogt het comfort en vermindert afhankelijkheid van gas, wat kopers aanspreekt.',
  },
];

export default function AircoVoordelenEnNadelen() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Voordelen en Nadelen' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco Voordelen en Nadelen | Eerlijk Overzicht | StayCool</title>
        <meta
          name="description"
          content="Overweeg een airco? Bekijk de eerlijke voordelen én nadelen. Koelen, verwarmen, luchtkwaliteit, kosten en onderhoud — alles op een rij."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-voordelen-en-nadelen" />
      </Helmet>

      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Airco Voordelen en Nadelen: Eerlijk Overzicht',
          description:
            'Overweeg een airco? Bekijk de eerlijke voordelen én nadelen. Koelen, verwarmen, luchtkwaliteit, kosten en onderhoud — alles op een rij.',
          image: 'https://staycoolairco.nl/images/logo.svg',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/airco-voordelen-en-nadelen',
          },
          inLanguage: 'nl-NL',
          keywords: 'airco voordelen nadelen, airco voor- en nadelen, is airco de moeite waard, airco aanschaffen',
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Airco Voordelen en Nadelen: Eerlijk Overzicht
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed max-w-2xl">
            Overweegt u een airco? Dan verdient u een eerlijk verhaal — inclusief de nadelen. Wij als
            installateur zetten alles op een rij, zodat u een weloverwogen beslissing kunt nemen.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Een airco is voor de meeste Limburgse huishoudens een slimme investering. Maar het is niet
          voor iedereen de perfecte oplossing. In dit artikel geven wij u een volledig en eerlijk
          overzicht van de voordelen én de nadelen, zodat u zelf kunt bepalen of een airco bij uw
          situatie past.
        </p>

        {/* Voordelen */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
          Voordelen van een airco
        </h2>
        <div className="space-y-4 mb-12">
          {voordelen.map((item, i) => (
            <div key={i} className="flex gap-4 bg-green-50 border border-green-100 rounded-xl p-5">
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">{item.title}</p>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Klaar om te investeren? Bekijk de beste modellen</p>
            <p className="text-orange-100 text-sm">Hoge SCOP, stil, energielabel A++ of hoger.</p>
          </div>
          <Link
            to="/beste-airco-voor-verwarmen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Beste airco voor verwarmen
          </Link>
        </div>

        {/* Nadelen */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
          Nadelen van een airco
        </h2>
        <div className="space-y-4 mb-12">
          {nadelen.map((item, i) => (
            <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
              <XCircle className="h-6 w-6 text-red-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">{item.title}</p>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusie */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Is een airco de juiste keuze voor u?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Voor het overgrote deel van de Limburgse huishoudens weegt de positieve balans door:
        </p>
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-sky-900 mb-2">Airco is sterk geschikt als u...</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Zowel koelt als verwarmt wil</li>
                <li>✓ Budget heeft van €1.500-€3.500</li>
                <li>✓ Geen bestaande cv-installatie wil vervangen</li>
                <li>✓ Snel resultaat wil (installatie in één dag)</li>
                <li>✓ Energie wil besparen t.o.v. elektrisch of gas</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-800 mb-2">Overweeg alternatieven als u...</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✗ Uw CV-ketel volledig wil vervangen</li>
                <li>✗ Vloerverwarming wil voeden</li>
                <li>✗ In een VVE zit die installatie weigert</li>
                <li>✗ Geen buitenunit kwijt kunt</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Twijfelt u? Bel StayCool Airco voor gratis advies. Wij kijken eerlijk naar uw situatie en
          adviseren u alleen een airco als het ook echt bij u past.
        </p>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Vraag een gratis adviesgesprek aan</p>
            <p className="text-orange-100 text-sm">F-gassen gecertificeerd, STEK erkend, 4.9 ⭐ beoordeling.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
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
          <p className="text-xl font-bold mb-2">Stel uw vraag aan onze specialist</p>
          <p className="text-sky-200 mb-4">StayCool Airco | Limburg | 4.9 ⭐ | WhatsApp: 06 36481054</p>
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
