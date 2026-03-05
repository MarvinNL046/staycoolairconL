import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, Wrench, ChevronDown, ArrowRight } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const faqItems = [
  {
    question: 'Hoe snel krijg ik een airco offerte?',
    answer: 'Na het invullen van het contactformulier of uw telefonische aanvraag neemt een van onze adviseurs binnen 24 uur contact met u op. Bij eenvoudige situaties kunnen we direct telefonisch een indicatie geven. Voor een complete offerte op maat plannen we indien nodig een gratis thuisbezoek.',
  },
  {
    question: 'Wat kost de intake of thuisbezoek?',
    answer: 'Het thuisbezoek voor de intake en offerte is volledig gratis en vrijblijvend. Wij komen bij u langs om de situatie in te schatten, advies te geven over het beste systeem en een scherpe prijs op te stellen. U zit nergens aan vast.',
  },
  {
    question: 'Is de offerte bindend?',
    answer: 'Nee, onze offerte is volledig vrijblijvend. U heeft na ontvangst alle tijd om de offerte te bekijken, te vergelijken en eventueel vragen te stellen. Pas na uw uitdrukkelijke akkoord plannen wij de installatie in.',
  },
  {
    question: 'Welke informatie heb ik nodig voor de offerte?',
    answer: 'Voor een nauwkeurige offerte is het handig om te weten: het type woning (appartement, tussenwoning, hoekwoning, vrijstaand), de ruimte(s) die u wilt koelen of verwarmen (inclusief oppervlakte in m²), de situatie voor de buitenunit (tuin, balkon, gevel) en of u specifieke wensen heeft qua merk of model.',
  },
  {
    question: 'Kan ik ook een offerte aanvragen voor meerdere ruimtes?',
    answer: 'Zeker! Wij maken offertes voor zowel mono-split systemen (1 kamer) als multi-split systemen (meerdere kamers). Vertel ons hoeveel ruimtes u wilt koelen of verwarmen en wij brengen de beste en meest kosteneffectieve oplossing in kaart.',
  },
];

export default function AircoOfferte() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Gratis Airco Offerte Aanvragen | Binnen 24 uur | StayCool Airco</title>
        <meta
          name="description"
          content="Vraag gratis een airco offerte aan bij StayCool Airco Limburg. Binnen 24 uur reactie ✓ Geen verplichtingen ✓ Transparante prijzen ✓ Erkend installateur"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-offerte" />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Gratis Airco Offerte Aanvragen Limburg',
          serviceType: 'Airconditioning Advies & Offerte',
          description: 'Vraag gratis en vrijblijvend een airco offerte aan bij StayCool Airco in Limburg. Binnen 24 uur reactie, geen verplichtingen.',
          areaServed: {
            '@type': 'State',
            name: 'Limburg',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: '0',
            description: 'Gratis en vrijblijvende offerte',
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
              { label: 'Gratis Offerte Aanvragen' },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Gratis Airco Offerte Aanvragen
            </h1>
            <p className="text-base md:text-lg text-sky-100 mb-8">
              Vraag eenvoudig een gratis en vrijblijvende airco offerte aan bij StayCool Airco. Binnen 24 uur ontvangt u een reactie van ons. Geen verplichtingen, geen verborgen kosten — gewoon een eerlijke prijs op maat voor uw situatie in Limburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#offerte-formulier"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-200 shadow-lg"
              >
                Direct Offerte Aanvragen
              </a>
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

      {/* 3 Stappen */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Zo Werkt het Offerteproces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sky-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Offerte Aanvragen</h3>
              <p className="text-base md:text-lg text-gray-600">
                Vul het formulier hieronder in of bel ons direct op 046 202 1430. U kunt ook via WhatsApp contact opnemen via 06 36481054.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Gratis Intake</h3>
              <p className="text-base md:text-lg text-gray-600">
                Wij plannen een gratis thuisbezoek of intake via de telefoon. Wij beoordelen uw situatie en adviseren het beste systeem voor uw woning.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Offerte Binnen 24 uur</h3>
              <p className="text-base md:text-lg text-gray-600">
                U ontvangt een heldere, gespecificeerde offerte inclusief alles. Geen verborgen kosten. U beslist zelf of u akkoord gaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prominente ContactForm */}
      <section id="offerte-formulier" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Vraag Nu Uw Gratis Offerte Aan
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-10">
            Vul het formulier in — wij nemen binnen 24 uur contact met u op. Vrijblijvend!
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Waarom gratis offerte */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Waarom een Gratis Offerte bij StayCool Airco?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geen Verplichtingen</h3>
              <p className="text-base text-gray-600">
                Onze offerte is volledig vrijblijvend. U zit nergens aan vast en betaalt niets voor het adviesgesprek of de offerte. Pas na uw akkoord starten we.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Shield className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eerlijke en Scherpe Prijs</h3>
              <p className="text-base text-gray-600">
                Onze prijs is altijd inclusief unit, montage, materialen en garantie. We zijn transparant over eventuele meerkosten en surprises zijn er niet.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <Wrench className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gratis Expertise Advies</h3>
              <p className="text-base text-gray-600">
                Met onze offerte ontvangt u ook professioneel advies over het juiste systeem, de optimale plaatsing en energiebesparing. Volledig gratis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat we nodig hebben */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wat Hebben Wij Nodig voor de Offerte?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Om een nauwkeurige offerte te maken, is het handig als u de volgende informatie bij de hand heeft. Maar maakt u zich geen zorgen — wij helpen u graag verder als u het niet precies weet!
              </p>
              <ul className="space-y-4">
                {[
                  { label: 'Type woning', desc: 'Appartement, tussenwoning, hoekwoning of vrijstaande woning?' },
                  { label: 'Te koelen ruimte(s)', desc: 'Welke ruimtes wilt u koelen of verwarmen? Woonkamer, slaapkamer, kantoor?' },
                  { label: 'Oppervlakte in m²', desc: 'Hoe groot zijn de ruimtes? Dit bepaalt het benodigde vermogen.' },
                  { label: 'Situatie buitenunit', desc: 'Is er buitenruimte (tuin, balkon, gevel) voor de plaatsing van de buitenunit?' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Direct Contact</h3>
              <p className="text-base text-gray-600 mb-6">
                Heeft u een vraag of wilt u direct een afspraak plannen? Neem dan contact met ons op via:
              </p>
              <div className="space-y-4">
                <a
                  href="tel:0462021430"
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-sky-200 hover:bg-sky-50 transition-colors font-semibold text-gray-800"
                >
                  <Phone className="h-6 w-6 text-sky-500" />
                  046 202 1430
                </a>
                <a
                  href="https://wa.me/31636481054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-sky-200 hover:bg-sky-50 transition-colors font-semibold text-gray-800"
                >
                  <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  06 36481054 (WhatsApp)
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Bereikbaar ma–vr 09:00–17:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-sky-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '15+', label: 'Jaar Ervaring' },
              { value: '4.9★', label: '127 Beoordelingen' },
              { value: 'STEK', label: 'Erkend Bedrijf' },
              { value: '5 jaar', label: 'Installatiegarantie' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-sky-600">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Veelgestelde Vragen over de Offerte
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
      <section className="bg-sky-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/airco-installatie-limburg" className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Airco Installatie Limburg
            </Link>
            <Link to="/airco-installatie-prijs" className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Airco Installatie Prijs
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-xl px-5 py-3 text-sky-700 font-semibold hover:bg-sky-100 transition-colors">
              <ArrowRight className="h-4 w-4" /> Contact Opnemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
