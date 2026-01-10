import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Phone, ArrowRight, CheckCircle, Clock, Euro, Wrench, Shield } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import FAQSchema from '../../../../components/SEO/FAQSchema';

const AircoInstallatieLimburgFAQPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Installatie Limburg', path: '/kennisbank/airco-installatie-limburg' },
    { label: 'Veelgestelde Vragen' }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Voor de installatie",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      color: "blue",
      questions: [
        {
          q: "Hoe lang duurt een airco installatie in Limburg?",
          a: "Een standaard single-split airco installatie duurt gemiddeld 4-6 uur. Dit omvat het boren van gaten, het leggen van leidingwerk, het ophangen van binnen- en buitenunit en het testen van het systeem. Voor multi-split systemen (meerdere binnenunits) rekenen we 6-8 uur. Complexere installaties met langer leidingwerk of extra units kunnen een volledige werkdag in beslag nemen. We plannen altijd ruim om kwaliteit te garanderen."
        },
        {
          q: "Wat moet ik voorbereiden voor de installatie?",
          a: "Zorg dat de locaties voor binnen- en buitenunit vrij toegankelijk zijn. Ruim meubels indien nodig op voor vrije werkruimte. Zorg voor een stopcontact in de buurt van de binnenunit (wij kunnen anders een groep aanleggen). Huisdieren adviseren we tijdens de installatie in een andere ruimte te houden. Parkeerruimte voor onze bus nabij de woning is handig. Verder hoeft u niets te regelen - wij brengen alle materialen mee."
        },
        {
          q: "Kan ik zelf bepalen waar de airco komt te hangen?",
          a: "Ja, maar we adviseren u graag over de optimale plaatsing. De binnenunit moet vrije luchtcirculatie hebben (niet achter gordijnen of meubels), niet in direct zonlicht hangen, en bij voorkeur centraal in de ruimte geplaatst worden. De buitenunit moet voldoende ventilatie hebben en aan wettelijke afstandseisen voldoen. Tijdens het adviesgesprek bepalen we samen de beste locaties voor optimale prestaties en comfort."
        },
        {
          q: "Moet ik toestemming vragen voor een airco in Limburg?",
          a: "Voor de meeste woningen is geen vergunning nodig. Wel gelden regels: de buitenunit mag maximaal 50cm van de gevel staan, moet minimaal 50cm van de perceelsgrens geplaatst worden, en mag niet aan de straatzijde in beschermde stads- of dorpsgezichten. Bij huurwoningen is toestemming van de verhuurder verplicht. Bij monumentale panden of in beschermde gebieden kan een vergunning nodig zijn. Wij checken dit altijd tijdens het adviesgesprek."
        },
        {
          q: "Wanneer is het beste moment voor airco installatie?",
          a: "Het voorjaar (maart-mei) is ideaal: geen extreme temperaturen, meer beschikbare installatiemomenten en tijd om vertrouwd te raken met het systeem voor de zomer. In de winter (november-februari) profiteren veel klanten van acties en kortere levertijden. Zomermaanden zijn het drukst met langere wachttijden. Tip: plan minimaal 3-4 weken van tevoren, vooral in het hoogseizoen."
        }
      ]
    },
    {
      title: "Tijdens de installatie",
      icon: <Wrench className="w-6 h-6 text-green-600" />,
      color: "green",
      questions: [
        {
          q: "Hoeveel overlast heb ik tijdens de installatie?",
          a: "De overlast is beperkt en tijdelijk. Het boren van kernboring voor leidingwerk duurt 15-30 minuten en maakt lawaai. Gebruik van slijptol voor eventuele aanpassingen is kort. We werken netjes met stofafzuiging en leggen beschermfolie neer. Er is geen stroom nodig tijdens de meeste werkzaamheden. U kunt gewoon thuis blijven, maar een werkruimte voor onze monteurs is fijn. De meeste klanten ervaren de installatie als soepel verlopen."
        },
        {
          q: "Maken jullie alles weer netjes schoon na installatie?",
          a: "Absoluut. We werken met stofafzuiging bij boringen, leggen beschermfolie neer op vloeren en meubels, ruimen al ons afval direct op, en zuigen en dweilen de werkplek na afloop. Gaten in muren worden netjes afgewerkt en waar nodig geschilderd. Buitenunit wordt stevig gemonteerd met afgewerkte bevestigingen. We nemen alle verpakkingsmaterialen mee. U hoeft alleen nog te genieten van uw nieuwe airco."
        },
        {
          q: "Wat gebeurt er allemaal tijdens de installatie?",
          a: "De installatie verloopt in fases: 1) Opstartgesprek en controle locaties, 2) Ophangen binnenunit met template, 3) Boren van kernboring voor leidingwerk, 4) Plaatsen en bevestigen buitenunit, 5) Leggen en isoleren van koelleidingen, 6) Aansluiten elektrische bedrading, 7) Vacuümtrekken van het systeem, 8) Vullen met koudemiddel, 9) Testen en instellen, 10) Uitleg over bediening en onderhoud. Alles wordt conform STEK-normen uitgevoerd."
        },
        {
          q: "Moet ik zelf aanwezig zijn bij de installatie?",
          a: "Bij aanvang en afronding graag wel. Bij aanvang bespreken we de exacte plaatsing en werkwijze. Bij afronding krijgt u uitleg over bediening, onderhoud en garantievoorwaarden, en tekent u de opleverdocumenten. Tijdens de installatie zelf hoeft u niet continue aanwezig te zijn - onze monteurs werken zelfstandig. Wel fijn als u bereikbaar bent voor eventuele vragen. Bij huurwoningen is aanwezigheid van verhuurder of schriftelijke toestemming vereist."
        },
        {
          q: "Wat als er problemen zijn tijdens installatie?",
          a: "Onze ervaren monteurs lossen de meeste zaken direct op. Bij onverwachte situaties (verborgen leidingen, afwijkende muurdikte, onverwachte elektra-situatie) stoppen we, bespreken de opties en kosten, en vragen uw toestemming voor de oplossing. Grote afwijkingen worden niet zonder overleg uitgevoerd. In het uiterste geval plannen we een vervolgafspraak. Dit komt zelden voor dankzij ons grondige adviesgesprek vooraf."
        }
      ]
    },
    {
      title: "Na de installatie",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      color: "purple",
      questions: [
        {
          q: "Hoe onderhoud ik mijn airco na installatie?",
          a: "Basisonderhoud doet u zelf: reinig de filters om de 2 weken (uitnemen, afzuigen of uitwassen, drogen en terugplaatsen), veeg de binnenunit af met vochtige doek, houd de buitenunit vrij van bladeren en vuil. Professioneel onderhoud adviseren we 1x per jaar: reiniging verdamper en condensor, controle koudemiddel, check van elektrische aansluitingen en meten van prestaties. Dit verlengt de levensduur en bespaart energie. Wij bieden onderhoudscontracten vanaf €11/maand."
        },
        {
          q: "Welke garantie krijg ik op de installatie?",
          a: "U krijgt uitgebreide garantie: 2 jaar installatiegarantie op ons werk (leidingwerk, bevestigingen, elektrische aansluitingen), fabrieksgarantie op de units (meestal 2-5 jaar afhankelijk van merk en type), mogelijkheid tot uitgebreide garantie tot 10 jaar, en 100% klanttevredenheidsgarantie. Bij problemen binnen garantieperiode komen we kosteloos langs. Voorwaarde is wel jaarlijks professioneel onderhoud - dit is verplicht voor garantiebehoud."
        },
        {
          q: "Kan ik mijn airco direct gebruiken na installatie?",
          a: "Ja, het systeem is direct operationeel. We testen uitgebreid voor oplevering: koelprestaties, warming-up (bij warmtepompen), luchtstroompatroon, geluidsniveau, en bediening van afstandsbediening. U krijgt volledige uitleg over alle functies, standen en instellingen. De eerste dagen kan het systeem 'inspelen' - dit is normaal. Verwarmen werkt mogelijk pas na eerste gebruik volledig effectief. Bij vragen staan we altijd klaar."
        },
        {
          q: "Wat als mijn airco na installatie niet goed werkt?",
          a: "Neem direct contact op via 0462021430. Veel 'problemen' zijn instellingskwesties die telefonisch op te lossen zijn. Bij echte storingen plannen we binnen 48 uur een servicemonteur (binnen garantie kosteloos). We lossen 90% van de problemen tijdens het eerste bezoek op. Frequent voorkomende oorzaken: verkeerde stand geselecteerd, filters verstopt, buitenunit heeft geen stroom, of afstandsbediening batterijen leeg. Onze service is gerenommeerd in heel Limburg."
        },
        {
          q: "Hoe vaak moet ik professioneel onderhoud laten doen?",
          a: "Wij adviseren 1x per jaar groot onderhoud, bij voorkeur in het voorjaar (voor het koelseizoen). Bij intensief gebruik (horeca, serverruimtes) of in stoffige omgevingen 2x per jaar. Minimum is 1x per 2 jaar, maar dit verkort de levensduur en verhoogt energieverbruik. Professioneel onderhoud kost €89 los, of vanaf €11/maand bij een onderhoudscontract. Het voorkomt 80% van de storingen en bespaart tot 25% energiekosten. Onderhoudscontract is bovendien garantievoorwaarde."
        }
      ]
    },
    {
      title: "Kosten & Financieel",
      icon: <Euro className="w-6 h-6 text-orange-600" />,
      color: "orange",
      questions: [
        {
          q: "Wat zijn de totale kosten voor airco installatie in Limburg?",
          a: "Een complete single-split installatie (incl. unit, installatie, leidingwerk tot 7 meter, elektrische aansluiting en STEK-keuring) kost vanaf €1.295. Multi-split systemen (2 binnenunits) vanaf €2.495, en 3-kamer systemen vanaf €3.295. Inverter airco's zijn duurder maar energiezuiniger. Extra kosten kunnen zijn: langer leidingwerk (€45/meter), extra elektrische groep (€175), inbouwunit (duurder dan wandunit), of complexe installatie. Exacte prijs bepalen we na adviesgesprek op locatie."
        },
        {
          q: "Zijn er subsidiemogelijkheden voor airco in Limburg?",
          a: "Voor lucht-lucht warmtepompen (airco's met verwarmingsfunctie) zijn regelmatig subsidies beschikbaar via ISDE-regeling, gemeentelijke regelingen, of energieleningen. Bedragen variëren van €300-€1.500 afhankelijk van vermogen en situatie. Let op: niet alle airco's komen in aanmerking - het moet een volwaardige warmtepomp zijn met hoog rendement. Wij helpen graag bij aanvragen. Check altijd vooraf de actuele regelingen op www.rvo.nl of bij uw gemeente. Vraag ons om de laatste stand van zaken."
        },
        {
          q: "Wat is de terugverdientijd van een airco?",
          a: "Bij vervanging van elektrische verwarming: 3-5 jaar door energiebesparing tot 50%. Bij vervanging van gaskachels: 5-8 jaar afhankelijk van gasprijzen. Bij alleen koelen: 8-12 jaar vooral door comfort en waardestijging woning. Moderne inverter airco's gebruiken 50-70% minder energie dan oude systemen. Gemiddeld gezin bespaart €200-€400/jaar op energiekosten bij verwarmen met airco vs elektrische verwarming. Koelfunctie kost ongeveer €30-€60 per zomer bij normaal gebruik."
        },
        {
          q: "Kan ik de airco financieren of in termijnen betalen?",
          a: "Ja, wij bieden meerdere betaalopties: volledige betaling vooraf met korting, betaling bij oplevering (standaard), betaling in 3 termijnen (aanbetaling, bij installatie, na oplevering) zonder extra kosten, of financiering via onze partner in 12-60 maanden met lage rente. Bij financiering zijn de maandlasten vaak lager dan de energiebesparing, dus het betaalt zichzelf terug. Minimaal bedrag voor financiering is €1.000. Vraag naar de mogelijkheden bij uw offerte-aanvraag."
        },
        {
          q: "Wat kost het onderhoud van mijn airco per jaar?",
          a: "Professioneel onderhoud kost €89 per systeem per beurt (bij los onderhoud). Met een onderhoudscontract betaalt u €11/maand voor 1 systeem (€132/jaar) of €16/maand voor 2-3 systemen (€192/jaar) en krijgt u voorrang bij storing, 10% korting op reparaties, gratis spoedservice, en jaarlijkse controle. Filters reinigt u zelf (gratis). Stroomkosten koelen: €30-€60/zomer. Stroomkosten verwarmen: €200-€400/winter (maar besparing op gas is groter). Totale jaarkosten: €150-€250 inclusief onderhoud."
        }
      ]
    },
    {
      title: "Technisch & Capaciteit",
      icon: <Clock className="w-6 h-6 text-red-600" />,
      color: "red",
      questions: [
        {
          q: "Welke capaciteit airco heb ik nodig voor mijn ruimte?",
          a: "Vuistregel: 100 watt koelvermogen per m² bij standaard isolatie. Voor een woonkamer van 30m² heb je dus 3.000 watt (3,0 kW) nodig. Maar: Zuid-gerichte kamers +20%, veel ramen +25%, dakverdiepingen +30%, slechte isolatie +40%, open keuken met kookplaten +500W, en kantoorruimtes met veel apparatuur +50%. Wij berekenen de exacte capaciteit volgens STEK-normen tijdens het adviesgesprek. Te klein = niet koel genoeg. Te groot = oncomfortabele temperatuurschommelingen en hoger verbruik."
        },
        {
          q: "Hoeveel meter leidingwerk is mogelijk bij airco installatie?",
          a: "Standaard installeren we tot 7 meter leidingwerk (tussen binnen- en buitenunit). Tot 15 meter is probleemloos mogelijk met kleine capaciteitsaanpassing. Tot 25 meter is mogelijk maar vraagt grotere unit voor prestatieverlies. Boven 25 meter adviseren we een andere configuratie of tussensysteem. Verticaal hoogteverschil mag maximaal 10-15 meter zijn afhankelijk van model. Langere afstanden verhogen installatiekosten (€45/meter extra) en iets hogere energiekosten door leidingverliezen."
        },
        {
          q: "Kan een airco meerdere kamers koelen?",
          a: "Eén binnenunit koelt effectief één open ruimte tot circa 60m². Voor meerdere gesloten kamers adviseren we een multi-split systeem: één buitenunit met 2-5 binnenunits. Elke kamer heeft eigen temperatuurregeling. Alternatief: meerdere single-split systemen (meer buitenunits). Doorstroom tussen kamers werkt beperkt - je verliest 50% capaciteit per deuropening. Voor nieuwe bouw zijn er ook kanaalunits die via ventilatiekanalen meerdere kamers kunnen bedienen. Wij adviseren de beste oplossing voor uw situatie."
        },
        {
          q: "Hoeveel stroom gebruikt een airco in Limburg?",
          a: "Moderne inverter airco's zijn zeer zuinig: gemiddeld 0,3-0,8 kW bij koelen en 0,8-1,5 kW bij verwarmen per 3,5 kW unit. Bij koelen (500 uur/zomer) ongeveer 200 kWh = €60/jaar. Bij verwarmen als hoofdverwarming (1.000 uur/winter) ongeveer 1.000 kWh = €300/jaar, maar bespaart 2.500 m³ gas = €2.500 (besparing €2.200). COP (rendement) bij verwarmen is 3-5, dus 1 kW stroom levert 3-5 kW warmte. SEER bij koelen 6-8. Oudere on/off airco's gebruiken 2-3x meer stroom."
        },
        {
          q: "Werkt mijn airco ook als het vriest in Limburg?",
          a: "Ja, moderne inverter warmtepompen werken tot -15°C buitentemperatuur. Bij -7°C (normale Limburgse winter) leveren ze nog 80% capaciteit. Bij strenge vorst (-10°C of kouder, 5-10 dagen per jaar) daalt capaciteit naar 60% en neemt stroomverbruik toe. Systeem schakelt automatisch ontdooimodus in wanneer nodig. Voor die koude dagen adviseren we een aanvullende warmtebron (gaskachel, elektrische verwarming). Premium modellen met enhanced-heating werken beter bij kou. Dit bespreken we bij de systeemkeuze."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, catIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.title,
      color: category.color,
      index: catIndex * 100 + qIndex
    }))
  );

  const quickLinks = [
    { title: "Complete Installatie Gids", href: "/kennisbank/airco-installatie-limburg", desc: "Alles over airco installatie in Limburg", color: "blue" },
    { title: "Offerte Aanvragen", href: "/contact", desc: "Vrijblijvende offerte op maat", color: "green" },
    { title: "Onderhoud Tarieven", href: "/onderhoud", desc: "Bekijk onze onderhoudscontracten", color: "orange" },
    { title: "Showroom Bezoeken", href: "/contact", desc: "Maak een afspraak in Maastricht", color: "purple" }
  ];

  // Extract all FAQs for schema
  const schemaFAQs = faqCategories.flatMap(category =>
    category.questions.map(q => ({
      question: q.q,
      answer: q.a
    }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Veelgestelde Vragen Airco Installatie Limburg | FAQ StayCool"
        description="Antwoorden op alle vragen over airco installatie in Limburg. Van voorbereiding tot onderhoud, kosten tot technische specificaties - compleet overzicht voor installatie."
        canonicalUrl="https://staycoolairco.nl/airco-installatie/noindex/faq-limburg"
        noIndex={true}
      />
      <FAQSchema faqs={schemaFAQs} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Veelgestelde Vragen over<br />
            <span className="text-yellow-300">Airco Installatie in Limburg</span>
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto mb-8">
            Antwoorden op alle vragen over airco installatie door StayCool. Van voorbereiding tot onderhoud,
            kosten tot technische specificaties - hier vindt u alles wat u moet weten.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/kennisbank/airco-installatie-limburg"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Volledige Installatie Gids
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="mr-2 w-5 h-5" />
              Stel uw Vraag
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Veelgestelde Vragen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Categorieën</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Praktische Antwoorden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Jaar Ervaring</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Veelgestelde Vragen per Categorie
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Klik op een vraag om het volledige antwoord te lezen
          </p>

          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                {/* Category Header */}
                <div className={`bg-gradient-to-r from-${category.color}-50 to-${category.color}-100 p-6 border-b-2 border-${category.color}-200`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-white rounded-lg shadow-md`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold text-${category.color}-900`}>
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {category.questions.length} veelgestelde vragen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div key={qIndex} className="transition-colors hover:bg-gray-50">
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2 pr-8">
                                {faq.q}
                              </h4>
                              {isOpen && (
                                <p className="text-gray-700 leading-relaxed mt-4">
                                  {faq.a}
                                </p>
                              )}
                            </div>
                            <div className={`flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                              {isOpen ? (
                                <ChevronUp className="w-6 h-6 text-blue-600" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meer Informatie Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Meer Informatie over Airco Installatie
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Uitgebreide bronnen en hulp voor uw airco installatie in Limburg
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const colorClasses = {
                blue: 'border-blue-600 hover:border-blue-700 hover:shadow-blue-100',
                green: 'border-green-600 hover:border-green-700 hover:shadow-green-100',
                orange: 'border-orange-600 hover:border-orange-700 hover:shadow-orange-100',
                purple: 'border-purple-600 hover:border-purple-700 hover:shadow-purple-100'
              };

              const textColorClasses = {
                blue: 'text-blue-600',
                green: 'text-green-600',
                orange: 'text-orange-600',
                purple: 'text-purple-600'
              };

              return (
                <Link
                  key={index}
                  to={link.href}
                  className={`group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 ${colorClasses[link.color as keyof typeof colorClasses]} transform hover:-translate-y-1`}
                >
                  <h3 className={`font-bold text-lg mb-2 group-hover:underline ${textColorClasses[link.color as keyof typeof textColorClasses]}`}>
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {link.desc}
                  </p>
                  <div className="mt-4 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Belangrijke Link naar Pillar Page */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-700 p-8 flex items-center justify-center">
                <HelpCircle className="w-24 h-24 text-white" />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Gids: Airco Installatie Limburg
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lees onze uitgebreide gids over airco installatie in Limburg met informatie over types,
                  werkwijze, kosten, planning en veel meer. Alles wat u moet weten voor een succesvolle installatie.
                </p>
                <Link
                  to="/kennisbank/airco-installatie-limburg"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Lees de Complete Gids
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vraag niet beantwoord CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Staat Uw Vraag er Niet Bij?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Neem contact op met onze specialisten. We helpen u graag verder met al uw vragen
            over airco installatie in Limburg.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="mr-2 w-5 h-5" />
              Bel 046 202 1430
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center px-8 py-4 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Direct Bellen
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <p className="mt-6 text-green-200">
            Bereikbaar ma-vr 08:00-17:30 | Of stuur een e-mail naar info@staycoolairco.nl
          </p>
        </div>
      </section>

      {/* Tips voor Installatie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Handige Tips voor Uw Airco Installatie
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="font-bold text-lg text-blue-600 mb-3">✓ Plan Op Tijd</h3>
              <p className="text-gray-700">
                Plan uw installatie minimaal 3-4 weken van tevoren, vooral in het hoogseizoen (mei-augustus).
                Voorjaar is ideaal voor acties en kortere wachttijden.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
              <h3 className="font-bold text-lg text-green-600 mb-3">✓ Vraag Advies</h3>
              <p className="text-gray-700">
                Laat een specialist altijd ter plaatse advies geven. De juiste plaatsing en capaciteit
                zijn cruciaal voor optimale prestaties en comfort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
              <h3 className="font-bold text-lg text-purple-600 mb-3">✓ Check Subsidies</h3>
              <p className="text-gray-700">
                Voor warmtepompen zijn vaak subsidies beschikbaar. Check voor installatie de actuele
                regelingen bij ISDE of uw gemeente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
              <h3 className="font-bold text-lg text-orange-600 mb-3">✓ Jaarlijks Onderhoud</h3>
              <p className="text-gray-700">
                Investeer in een onderhoudscontract. Dit verlengt de levensduur, voorkomt 80% van storingen
                en is vaak garantievoorwaarde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AircoInstallatieLimburgFAQPage;
