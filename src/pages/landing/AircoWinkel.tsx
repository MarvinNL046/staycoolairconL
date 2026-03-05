import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Users,
  TrendingUp,
  Wrench,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Star,
  Zap,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const usps = [
  {
    icon: TrendingUp,
    title: 'Klantencomfort = omzet',
    desc: 'Klanten verblijven langer in een aangenaam klimaat. Studies tonen 15% langere verblijftijd bij 2°C koeler in de zomer.',
  },
  {
    icon: Users,
    title: 'ARBO-conforme werkplek',
    desc: 'De ARBO-wet verplicht een redelijke temperatuur voor werknemers. Met een airco voldoet u altijd aan de norm.',
  },
  {
    icon: Wrench,
    title: 'Multi-split voor elke zone',
    desc: 'Één buitenunit met meerdere binnenunits in winkelruimte, magazijn en personeelsruimte — afzonderlijk instelbaar.',
  },
  {
    icon: Zap,
    title: 'Hoge koelcapaciteit',
    desc: 'Winkels en horeca produceren meer warmte door verlichting, apparatuur en bezoekers. Wij berekenen de juiste capaciteit.',
  },
  {
    icon: CheckCircle,
    title: 'SLA & onderhoudscontract',
    desc: 'Zakelijk klanten kunnen kiezen voor een servicecontract met prioriteitsrespons bij storingen.',
  },
  {
    icon: Clock,
    title: 'Snelle installatie',
    desc: 'Wij plannen installaties buiten openingstijden of in het weekend, zodat uw bedrijfsvoering niet wordt onderbroken.',
  },
];

const faqItems = [
  {
    question: 'Hoeveel kost een airco voor een winkel of horecagelegenheid?',
    answer:
      'De kosten hangen af van de oppervlakte, koudelast en het aantal gewenste zones. Een kleine winkelruimte (50-100 m²) met één zone kost €2.000-€4.000. Voor grotere panden of multi-split systemen maakt StayCool Airco een offerte op maat.',
  },
  {
    question: 'Welke capaciteit heeft een winkel nodig?',
    answer:
      'Commerciële ruimtes hebben een hogere koudelast dan woningen: verlichting, apparatuur en bezoekers produceren extra warmte. Een winkel van 100 m² heeft doorgaans 8-12 kW koelvermogen nodig, afhankelijk van de beglazing, bezetting en apparatuur. StayCool berekent de juiste capaciteit.',
  },
  {
    question: 'Kan ik een onderhoudscontract afsluiten voor mijn bedrijf?',
    answer:
      'Ja, StayCool Airco biedt onderhoudscontracten voor zakelijke klanten aan. Inclusief een jaarlijkse servicebeurt en prioriteitsrespons bij storingen. Neem contact op voor de mogelijkheden en tarieven.',
  },
  {
    question: 'Zijn de installatiekosten aftrekbaar van de belasting?',
    answer:
      'Ja, een airco-installatie voor een zakelijke ruimte is fiscaal aftrekbaar als bedrijfsmiddel. Afhankelijk van de situatie kunt u ook in aanmerking komen voor investeringsaftrek (KIA). Raadpleeg uw belastingadviseur voor de exacte regels.',
  },
  {
    question: 'Hoe snel kan StayCool een storing verhelpen?',
    answer:
      'Bij een onderhoudscontract reageren wij binnen één werkdag op storingen. Zonder contract is de reactietijd afhankelijk van de agenda — doorgaans 2-5 werkdagen.',
  },
  {
    question: 'Kan de installatie buiten openingstijden plaatsvinden?',
    answer:
      'Ja, wij plannen installaties graag op een moment dat het minst overlast geeft voor uw klanten en personeel — denk aan vroege ochtend, avond of weekend. Overleg dit bij het maken van de afspraak.',
  },
];

export default function AircoWinkel() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Airco installatie', path: '/airco-installatie-limburg' },
    { label: 'Airco Winkel & Horeca' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco voor Winkel & Horeca | Commerciële Installatie | StayCool</title>
        <meta
          name="description"
          content="Airco voor uw winkel of horecagelegenheid in Limburg. Klantencomfort = omzet. Zakelijke installatie ✓ Onderhoudcontract ✓ Erkend bedrijf StayCool."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-winkel" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airco Installatie Winkel & Horeca Limburg',
          serviceType: 'Commercial Airconditioning Installation',
          description:
            'Professionele airco-installatie voor winkels en horecagelegenheden in Limburg. Multi-split systemen, zakelijke factuur, onderhoudscontract mogelijk.',
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
                <ShoppingBag className="h-4 w-4" />
                Commercieel & Horeca
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Airco voor Uw Winkel of Horecagelegenheid
              </h1>
              <p className="text-lg text-sky-100 leading-relaxed mb-6">
                Een aangenaam binnenklimaat houdt klanten langer en geeft personeel betere
                werkomstandigheden. Onderzoek toont aan dat bij 1°C te warm de verblijftijd met
                15% daalt. Investeer in comfort — investeer in omzet.
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
                  Gratis offerte aanvragen
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-6">
                <p className="text-white font-semibold text-lg mb-4">Commerciële airco voordelen</p>
                <ul className="space-y-3">
                  {[
                    'Klanten verblijven langer en besteden meer',
                    'ARBO-conform — verplicht voor personeel',
                    'Multi-split: één buitenunit, meerdere zones',
                    'Zakelijke factuur met BTW-specificatie',
                    'Onderhoudcontract met SLA beschikbaar',
                    'Installatie buiten openingstijden mogelijk',
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
            Airco voor uw winkel of horeca — wat biedt StayCool?
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Klantencomfort */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Klantencomfort is directe omzet
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In de retailsector is bewezen dat de binnentemperatuur directe invloed heeft op het
          aankoopgedrag. Bij een aangenaam klimaat (20-22°C) verblijven klanten gemiddeld 15% langer
          in een winkel en besteden ze meer. Bij een te warme ruimte (27°C of hoger) verlaten klanten
          de zaak sneller — ze voelen zich niet op hun gemak en kopen minder impulsief.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Voor horecagelegenheden geldt hetzelfde: gasten die zich comfortabel voelen, eten rustiger,
          bestellen een dessert of nemen nog een drankje. Een investering in klimaatbeheersing
          verdient zich terug via hogere bonbedragen en positievere reviews.
        </p>

        {/* ARBO */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" /> ARBO-wet: uw verplichting als werkgever
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            De ARBO-wetgeving (Arbeidsomstandighedenwet) verplicht werkgevers een gezonde en veilige
            werkplek te bieden. Bij temperaturen boven 25°C gelden aanvullende maatregelen; boven
            30°C kunnen werknemers weigeren te werken zonder afdoende maatregelen.
          </p>
          <p className="text-gray-700 text-sm">
            Een professionele airco-installatie is de meest effectieve maatregel om aan de
            ARBO-normen te voldoen en tegelijkertijd het comfort van uw personeel en klanten
            te waarborgen.
          </p>
        </div>

        {/* Multi-split */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Multi-split: één systeem, meerdere zones
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Voor winkels en horecagelegenheden is een multi-split systeem doorgaans de meest efficiënte
          oplossing. Eén krachtige buitenunit voorziet meerdere binnenunits in verschillende zones:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
          <li>Winkelruimte of restaurantgedeelte</li>
          <li>Keuken of magazijn</li>
          <li>Personeelsruimte of kantoor</li>
          <li>Kleedruimte of sanitaire faciliteiten</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Elke zone heeft zijn eigen thermostaat, zodat personeel in de keuken (met hoge warmtelast)
          koeler kan stellen dan de eetzaal. Eén buitenunit is goedkoper dan meerdere losse systemen
          en vraagt minder plaatsruimte aan de buitenzijde van het pand.
        </p>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Offerte voor uw commercieel pand?</p>
            <p className="text-orange-100 text-sm">Gratis adviesgesprek ter plaatse, installatie op uw tijdstip.</p>
          </div>
          <Link
            to="/airco-installatie-limburg"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Airco installatie Limburg
          </Link>
        </div>

        {/* Capaciteit winkels */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Koudelastberekening voor commerciële ruimtes
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Commerciële ruimtes hebben een aanzienlijk hogere koudelast dan woonruimtes, door:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Verlichting', desc: 'TL-buizen en LED-spots produceren warmte — zeker in oudere installaties met hoogvermogen TL.' },
            { label: 'Bezoekers', desc: 'Elke persoon produceert ca. 80-100 W warmte. Een volle winkel of restaurant heeft daardoor een hoge personenwarmtelast.' },
            { label: 'Keukenapparatuur', desc: 'Horeca-ovens, koffiemachines en warmhoudapparatuur produceren aanzienlijke warmte die afgevoerd moet worden.' },
            { label: 'Zonnestraling', desc: 'Grote etalageramen of terrasverglazing verhogen de stralingsbelasting sterk in de zomermaanden.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          StayCool Airco voert een gratis koudelastberekening uit voor uw pand, zodat wij het
          juiste systeem adviseren — niet te klein (dat werkt de hele dag vol vermogen), niet te
          groot (dat schakelt te snel aan en uit en koelt niet effectief).
        </p>

        {/* Zakelijke voordelen */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
          Zakelijke voordelen van StayCool
        </h2>
        <div className="space-y-3 mb-10">
          {[
            { title: 'Zakelijke factuur', desc: 'U ontvangt een factuur met BTW-specificatie, geschikt voor uw boekhouding.' },
            { title: 'Onderhoudscontract', desc: 'Kies voor een jaarlijks onderhoudscontract inclusief preventieve servicebeurt en prioriteitsrespons bij storingen.' },
            { title: 'Snelle reactie bij storingen', desc: 'Een kapotte airco in de zomer is een noodsituatie voor uw bedrijf. Met een SLA reageren wij binnen één werkdag.' },
            { title: 'Installatie op uw tijdstip', desc: 'Wij plannen graag buiten uw openingstijden — vroeg in de ochtend, \'s avonds of in het weekend.' },
            { title: 'ISDE-advies', desc: 'Hoewel split-aircos doorgaans buiten de ISDE-subsidie vallen, adviseren wij u over andere relevante regelingen voor uw bedrijf.' },
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

        {/* CTA 2 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 mb-10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Multi-split voor uw commercieel pand</p>
            <p className="text-orange-100 text-sm">Meerdere zones, één buitenunit, één aanspreekpunt.</p>
          </div>
          <Link
            to="/multi-split-airco-installatie"
            className="shrink-0 bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Multi-split airco installatie
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
            "StayCool heeft een multi-split systeem geïnstalleerd in onze zaak. De monteurs
            kwamen 's ochtends vroeg, werkten professioneel en hadden alles klaar voor onze
            openingstijd om 10 uur. Onze gasten merken nu echt het verschil in comfort."
          </blockquote>
          <p className="text-gray-500 text-sm">— Sandra M., eigenaar restaurant, Roermond</p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
          Veelgestelde vragen: airco winkel & horeca
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
          <p className="text-xl font-bold mb-2">Vraag een gratis offerte aan voor uw pand</p>
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
