import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Wifi,
  Volume2,
  TrendingDown,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Star,
  Zap,
  Clock,
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const usps = [
  {
    icon: Volume2,
    title: 'Stille werking',
    desc: '19-28 dB(A) binnenunit. U en uw collega\'s kunnen ongestoord vergaderen of bellen.',
  },
  {
    icon: Wifi,
    title: 'Wifi-bediening',
    desc: 'Stel de temperatuur in via uw smartphone, ook op afstand. Altijd op de juiste temperatuur als u aankomt.',
  },
  {
    icon: TrendingDown,
    title: 'Zakelijk aftrekbaar',
    desc: 'Een airco in uw (thuis)kantoor is voor zelfstandigen en bedrijven fiscaal aftrekbaar als zakelijke investering.',
  },
  {
    icon: Zap,
    title: 'Energiezuinig',
    desc: 'Klimatiseer alleen de kantoorruimte in plaats van het hele huis. Bespaar significant op uw energierekening.',
  },
  {
    icon: CheckCircle,
    title: 'F-gassen gecertificeerd',
    desc: 'StayCool Airco is volledig gecertificeerd en STEK erkend. Uw garantie blijft intact.',
  },
  {
    icon: Clock,
    title: 'Snel geïnstalleerd',
    desc: 'Een thuiskantoor-installatie is in 4-6 uur gereed. Minimale overlast, maximale kwaliteit.',
  },
];

const faqItems = [
  {
    question: 'Hoeveel kost een airco voor een thuiskantoor?',
    answer:
      'Een mono-split airco inclusief installatie voor een thuiskantoor (15-25 m²) kost doorgaans €1.500-€2.500. Neem contact op met StayCool Airco voor een offerte op maat.',
  },
  {
    question: 'Is een airco voor kantoor fiscaal aftrekbaar?',
    answer:
      'Voor zelfstandigen en bedrijven is een airco die in een zakelijke ruimte wordt gebruikt fiscaal aftrekbaar als bedrijfsmiddel. Raadpleeg uw boekhouder voor de specifieke regels in uw situatie.',
  },
  {
    question: 'Welke capaciteit heeft mijn kantoorairco nodig?',
    answer:
      'Voor een kantoorruimte van 15-20 m² is een 2,5 kW unit voldoende. Voor 20-30 m² een 3,5 kW unit. Kantoorruimtes hebben vaak een hogere koellast door computers, verlichting en mensen — houd daar rekening mee. StayCool adviseert u kosteloos.',
  },
  {
    question: 'Kan ik één airco installeren voor meerdere kantoorruimtes?',
    answer:
      'Ja, via een multi-split systeem kunt u één buitenunit koppelen aan meerdere binnenunits in verschillende kamers. Dit is kostenefficiënter dan meerdere aparte systemen en ideaal voor kleine en middelgrote kantoren.',
  },
  {
    question: 'Hoe stil is een kantoorairco echt?',
    answer:
      'De binnenunit van moderne aircos produceert in de laagste stand 19-22 dB(A). Dat is stiller dan een fluistering (30 dB). U zult de unit nauwelijks horen tijdens een telefoongesprek of videovergadering.',
  },
  {
    question: 'Voldoet een airco aan de ARBO-vereisten voor kantoren?',
    answer:
      'Ja. De ARBO-wet stelt eisen aan een gezond binnenklimaat op de werkplek. Een airco die koelt én verwarmt, helpt u te voldoen aan de richtlijnen voor temperatuur en luchtkwaliteit. Kantoren met energielabel C of hoger zijn wettelijk verplicht na 2023.',
  },
];

export default function AircoKantoor() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Airco installatie', path: '/airco-installatie-limburg' },
    { label: 'Airco Kantoor' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco Kantoor | Thuis & Zakelijk | Installatie Limburg | StayCool</title>
        <meta
          name="description"
          content="Airco voor uw (thuis)kantoor in Limburg. Betere concentratie, gezond binnenklimaat en energiezuinig verwarmen. Zakelijke installatie door erkend bedrijf."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-kantoor" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airco Kantoor Installatie Limburg',
          serviceType: 'Airconditioning Installation for Office',
          description:
            'Professionele airco-installatie voor (thuis)kantoren in Limburg. Stil, energiezuinig, wifi-gestuurd. Zakelijke factuur en snelle service.',
          areaServed: { '@type': 'State', name: 'Limburg' },
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-20 pt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-700 bg-opacity-60 px-3 py-1.5 rounded-full text-sm mb-4">
                <Briefcase className="h-4 w-4" />
                Zakelijk & Thuiskantoor
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Airco voor Uw Kantoor in Limburg
              </h1>
              <p className="text-lg text-sky-100 leading-relaxed mb-6">
                Een aangenaam kantoorklimaat verhoogt uw concentratie en productiviteit. Onderzoek
                toont aan dat bij 21°C het cognitief functioneren optimaal is — bij 27°C daalt de
                productiviteit al met 12%.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl"
                >
                  <Phone className="h-5 w-5" /> 046 202 1430
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-30 hover:bg-opacity-20 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
                >
                  Offerte aanvragen
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-6">
                <p className="text-white font-semibold text-lg mb-4">Waarom kantoor + airco?</p>
                <ul className="space-y-3">
                  {[
                    'Optimale werkomstandigheden het hele jaar',
                    'Stille werking — geen afleiding tijdens meetings',
                    'Wifi-bediening via smartphone',
                    'Fiscaal aftrekbaar als zakelijke investering',
                    'Koelen in de zomer, bijverwarmen in de winter',
                    'Installatie in één dag, minimale overlast',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sky-100 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USPs */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Waarom StayCool voor uw kantoorairco?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {usps.map((usp, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <usp.icon className="h-8 w-8 text-sky-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{usp.title}</h3>
                <p className="text-gray-600 text-sm">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Productiviteit */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Productiviteit en kantoortemperatuur
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De optimale kantoortemperatuur ligt op 20-22°C. Onderzoek van Cornell University toont aan
          dat medewerkers bij 25°C 8% minder fouten maken dan bij 20°C — maar boven 27°C keert dat
          om: bij hitte stijgt het foutenpercentage met 44% en de productiviteit daalt met 12%.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Voor thuiswerkers geldt hetzelfde. Een comfortabele werktemperatuur is niet luxe — het is
          een investering in uw output en concentratievermogen. Met een airco in uw thuiskantoor of
          bedrijfspand heeft u het hele jaar grip op de temperatuur.
        </p>

        {/* Thuiskantoor specifiek */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Airco voor uw thuiskantoor
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een thuiskantoor vraagt om specifieke eisen: stille werking zodat bel- en
          videovergaderingen niet worden verstoord, wifi-bediening zodat u de airco makkelijk aanstuurt
          via uw telefoon, en een compact ontwerp dat past bij een woonomgeving.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De Daikin Stylish en LG Artcool zijn populaire keuzes voor thuiskantoren: designvolle
          binnenunits met een geluidsproductie van 19-22 dB(A) in de laagste stand. Ze zijn bijna
          onhoorbaar tijdens een telefoongesprek.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Via de wifi-module stelt u een weekplanning in: de airco start automatisch 30 minuten voor
          u begint met werken en schakelt uit na werktijd. Zo verbruikt u geen energie als uw kantoor
          leegstaat.
        </p>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Airco bestellen voor uw kantoor in Limburg</p>
            <p className="text-orange-100 text-sm">Installatie binnen 1-3 weken, zakelijke factuur, STEK erkend.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Direct offerte aanvragen
          </Link>
        </div>

        {/* Zakelijk kantoor */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Zakelijk kantoor: multi-split en onderhoud
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Voor grotere kantoorpanden of bedrijven met meerdere ruimtes biedt een multi-split systeem
          de ideale oplossing. Eén buitenunit voorziet meerdere binnenunits in afzonderlijke kantoren,
          vergaderruimtes en recepties. Elk vertrek heeft zijn eigen temperatuurregeling.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          StayCool Airco biedt onderhoudscontracten voor zakelijke klanten. Wij plannen jaarlijks een
          preventieve servicebeurt zodat uw systeem optimaal blijft functioneren en uw garantie
          gewaarborgd is. U krijgt een zakelijke factuur met BTW-specificatie.
        </p>

        {/* Energie & aftrekbaarheid */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Energie en fiscale voordelen
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een airco voor uw zakelijke ruimte is in de meeste gevallen fiscaal aftrekbaar als
          bedrijfsmiddel. Informeer bij uw belastingadviseur naar de exacte regels voor uw situatie —
          denk aan investeringsaftrek (KIA) of willekeurige afschrijving.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bovendien geldt dat kantoorpanden per 1 januari 2023 energielabel C of hoger moeten hebben.
          Een energiezuinige airco met hoog energielabel draagt bij aan de verbeteringen die nodig
          zijn om aan die verplichting te voldoen.
        </p>

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Wifi-airco voor thuis of kantoor</p>
            <p className="text-orange-100 text-sm">Slimme bediening via app, timer en weekplanning.</p>
          </div>
          <Link
            to="/airco-met-wifi-voordelen"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco met wifi voordelen
          </Link>
        </div>

        {/* Reviews */}
        <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="font-bold text-gray-900">4.9</span>
            <span className="text-gray-500 text-sm">StayCool Airco Limburg</span>
          </div>
          <blockquote className="text-gray-700 italic mb-2">
            "Mijn thuiskantoor was in de zomer onwerkbaar warm. Na de installatie van de Daikin
            Stylish door StayCool kan ik het hele jaar comfortabel werken. De monteurs waren stipt,
            vriendelijk en hebben alles keurig netjes afgewerkt."
          </blockquote>
          <p className="text-gray-500 text-sm">— Mark V., Maastricht, thuiswerker</p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
          Veelgestelde vragen: airco kantoor
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

        {/* Contact */}
        <div id="contact" className="bg-sky-800 rounded-xl p-6 mb-10 text-white text-center">
          <p className="text-xl font-bold mb-2">Vraag vandaag uw offerte aan</p>
          <p className="text-sky-200 mb-4">
            StayCool Airco | Limburg | F-gassen gecertificeerd | STEK erkend | 4.9 ⭐
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0462021430"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl"
            >
              <Phone className="h-5 w-5" /> 046 202 1430
            </a>
            <a
              href="https://wa.me/31636481054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl"
            >
              WhatsApp: 06 36481054
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
