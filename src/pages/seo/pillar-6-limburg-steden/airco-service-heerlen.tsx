import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Mail, Calculator, TrendingUp, Star, Award, Wrench } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoServiceHeerlen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Limburg Steden', path: '/seo/pillar-6-limburg-steden' },
    { label: 'Airco Service Heerlen' }
  ];

  const usps = [
    {
      icon: <Wrench className="h-12 w-12 text-sky-500" />,
      title: "24/7 Storing Service",
      description: "Binnen 24 uur bij u voor spoedgevallen in Heerlen en Parkstad"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Erkende technici voor professioneel airco onderhoud"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Onderhoudscontracten",
      description: "Jaarlijks onderhoud voor optimale werking en lange levensduur"
    },
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Alle A-Merken",
      description: "Service voor Daikin, Mitsubishi, LG, Samsung en meer"
    }
  ];

  const districts = [
    "Centrum", "Heerlerbaan", "Heksenberg", "Hoensbroek", "Welten",
    "Schaesbergerveld", "Molenberg", "Rennemig", "Bekkerveld", "Caumerbeek",
    "Aambos", "Eikenderveld", "Meezenbroek", "Douve Weien", "Passart",
    "Heerlerbaan-Noord", "Heerlerheide", "Kerkrade-Noord", "Brunssum-Zuid"
  ];

  const serviceTypes = [
    {
      title: "Jaarlijks Onderhoud",
      description: "Preventief onderhoud voorkomt storingen en verlengt de levensduur",
      items: [
        "Reiniging filters en units",
        "Controle koudemiddel",
        "Functietest alle componenten",
        "Optimalisatie instellingen"
      ]
    },
    {
      title: "Storingen & Reparaties",
      description: "Snelle diagnose en reparatie van alle airconditioningsystemen",
      items: [
        "24/7 spoedservice",
        "Diagnose en foutcodes uitlezen",
        "Reparatie of vervanging onderdelen",
        "Garantie op alle reparaties"
      ]
    },
    {
      title: "Uitbreiding & Aanpassingen",
      description: "Uitbreiding of aanpassing van bestaande systemen",
      items: [
        "Extra binnenunits toevoegen",
        "Upgrade naar nieuwere modellen",
        "Vervangen verouderde systemen",
        "Aanpassing capaciteit"
      ]
    }
  ];

  const faqs = [
    {
      question: "Wat kost airco onderhoud in Heerlen?",
      answer: "De kosten voor airco onderhoud in Heerlen variëren tussen €75 en €150 per unit, afhankelijk van het type systeem en de omvang van het onderhoud. Een standaard onderhoudsbeurt voor een single-split systeem kost gemiddeld €95. Voor multi-split systemen berekenen we €75 per extra binnenunit. Bij een onderhoudscontract profiteert u van 20% korting op jaarlijks onderhoud en voorrang bij storingen."
    },
    {
      question: "Hoe vaak moet een airco onderhouden worden?",
      answer: "Voor woningen in Heerlen en Parkstad adviseren we jaarlijks onderhoud, bij voorkeur in het voorjaar vóór het koelseizoen. Bij intensief gebruik ( meer dan 8 uur per dag) of in stoffige omgevingen raden we twee keer per jaar aan. Regelmatig onderhoud voorkomt 90% van de storingen, verlengt de levensduur met 5-7 jaar en houdt het energieverbruik optimaal."
    },
    {
      question: "Wat houdt een onderhoudsbeurt in?",
      answer: "Een complete onderhoudsbeurt bij StayCool Airco omvat: grondige reiniging van filters en binnen- en buitenunits, controle en bijvullen koudemiddel, testen van alle functies en componenten, controle leidingen en elektrische aansluitingen, optimaliseren instellingen voor maximale efficiency, en een uitgebreid rapport met aanbevelingen. Gemiddelde duur: 1-2 uur per systeem."
    },
    {
      question: "Bieden jullie spoedservice in Heerlen?",
      answer: "Ja, StayCool Airco biedt 24/7 spoedservice voor airco storingen in Heerlen en heel Parkstad Limburg. Bij storing belt u ons op 046 202 1430. We streven ernaar binnen 24 uur bij u te zijn voor spoedgevallen. Voor klanten met een onderhoudscontract hebben we zelfs een 4-uur responstijd tijdens kantooruren. Avond-, nacht- en weekendservice is beschikbaar tegen toeslag."
    },
    {
      question: "Werken jullie ook in de kernen rondom Heerlen?",
      answer: "Absoluut! StayCool Airco biedt service in heel Parkstad Limburg inclusief Heerlen, Kerkrade, Brunssum, Hoensbroek, Landgraaf, Simpelveld, Voerendaal, Nuth en omliggende dorpen. We kennen de lokale bouwstijlen en zijn vertrouwd met zowel stadswoningen als landelijke panden in het Heuvelland. Onze servicewagens zijn dagelijks in de regio voor geplande onderhoudsbeurten."
    },
    {
      question: "Onderhouden jullie alle merken airco's?",
      answer: "Ja, onze F-gassen gecertificeerde technici onderhouden alle gangbare merken airconditioning: Daikin, Mitsubishi Heavy Industries, Mitsubishi Electric, LG, Samsung, Panasonic, Toshiba, Fujitsu, Gree/Tosot en vele anderen. We beschikken over originele onderdelen voor de meeste merken en hebben toegang tot technische documentatie en diagnostics software voor professionele service."
    },
    {
      question: "Wat zijn de voordelen van een onderhoudscontract?",
      answer: "Een onderhoudscontract bij StayCool Airco biedt vele voordelen: 20% korting op jaarlijks onderhoud, voorrang bij storingen met 4-uur responstijd, 10% korting op reparaties en onderdelen, jaarlijkse reminder voor onderhoud, gratis kleine reparaties tijdens onderhoudsbeurt, verlengde garantie op onderdelen, en prioriteit bij planning tijdens drukke perioden. U bespaart gemiddeld €150 per jaar."
    },
    {
      question: "Kan een oude airco nog gerepareerd worden?",
      answer: "In de meeste gevallen kunnen we airco systemen tot 15 jaar oud nog prima repareren. Bij systemen ouder dan 10 jaar adviseren we eerst een inspectie om te beoordelen of reparatie zinvol is of vervanging voordeliger. Factoren zijn: beschikbaarheid onderdelen, energieverbruik vergeleken met nieuwe modellen, en totale reparatiekosten. We adviseren altijd eerlijk of reparatie of vervanging de beste keuze is."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Service Heerlen | Onderhoud & Reparatie Parkstad Limburg | StayCool"
        description="Airco service Heerlen ✓ 24/7 storing service ✓ Jaarlijks onderhoud ✓ Alle merken ✓ F-gassen gecertificeerd ✓ Parkstad Limburg. Binnen 24 uur ter plaatse!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Service Heerlen",
          "description": "Professionele airco onderhoud, reparatie en service in Heerlen en Parkstad Limburg. 24/7 spoedservice, onderhoudscontracten en alle merken.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco",
            "telephone": "046-202-1430",
            "email": "info@staycoolairco.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Heerlen",
              "addressRegion": "Limburg",
              "addressCountry": "NL"
            }
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Heerlen"
            },
            {
              "@type": "Place",
              "name": "Parkstad Limburg"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Airco Service Diensten Heerlen",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Airco onderhoud en reiniging"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Storing service en reparatie"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Onderhoudscontracten"
                }
              }
            ]
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Service Heerlen
            </h1>

            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Professioneel airco onderhoud en reparatie in Parkstad Limburg. 24/7 spoedservice, onderhoudscontracten en F-gassen gecertificeerde technici voor alle merken.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Plan Onderhoud
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition-colors"
              >
                <Wrench className="h-5 w-5 mr-2" />
                Storing? Bel: 046 202 1430
              </a>
              <Link
                to="/onderhoud"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Onderhoudscontract
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                24/7 Spoedservice
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Binnen 24 uur ter plaatse
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Alle Merken
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                F-gassen Gecertificeerd
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Waarom Kiezen voor StayCool Airco Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {usp.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                  <p className="text-gray-600 text-center">{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Airco Service in Parkstad Limburg
              </h2>

              <p className="text-gray-600 mb-6">
                Heerlen en Parkstad Limburg, met haar mix van karakteristieke mijnwerkerswonin gen, moderne nieuwbouw en historische panden, vraagt om betrouwbare airco service die snel en professioneel werkt. StayCool Airco is dé specialist voor onderhoud, reparatie en service van alle merken airconditioningsystemen in de gehele Parkstad regio.
              </p>

              <p className="text-gray-600 mb-6">
                Of u nu woont in een appartement in Heerlen centrum, een rijtjeshuis in Hoensbroek, of een vrijstaande woning in het glooiende heuvelland - onze F-gassen gecertificeerde technici zorgen ervoor dat uw airco systeem optimaal blijft functioneren. Met meer dan 15 jaar ervaring in de regio kennen we de lokale omstandigheden en typische problemen die zich kunnen voordoen.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Onze Diensten in Heerlen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {serviceTypes.map((service, index) => (
                  <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Waarom Regelmatig Onderhoud Essentieel Is
              </h3>

              <p className="text-gray-600 mb-6">
                In het Limburgse klimaat met warme zomers en relatief milde winters werken airco's intensief. Zonder regelmatig onderhoud kunnen verschillende problemen ontstaan die leiden tot hogere kosten en kortere levensduur. Verstopte filters verminderen de luchtstroom en verhogen het energieverbruik met 15-30%. Vervuilde units werken minder efficiënt en kunnen leiden tot storingen. Koudemiddel lekkage vermindert de koelprestaties aanzienlijk.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <Wrench className="h-6 w-6 mr-2 text-orange-600" />
                  Problemen Voorkomen is Goedkoper dan Repareren
                </h4>
                <p className="text-gray-600">
                  Jaarlijks onderhoud kost gemiddeld €95-150, terwijl een storing door nalatig onderhoud al snel €300-800 kan kosten aan reparaties. Bovendien voorkomt regelmatig onderhoud 90% van de storingen en verlengt het de levensduur van uw systeem met 5-7 jaar. Met een onderhoudscontract bespaart u 20% en heeft u altijd voorrang bij storingen.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Service in Alle Wijken van Parkstad
              </h2>

              <p className="text-gray-600 mb-6">
                StayCool Airco biedt service in heel Heerlen en Parkstad Limburg:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {districts.map((district, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-sky-500 flex-shrink-0" />
                    <span>{district}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Service voor Alle Merken
              </h2>

              <p className="text-gray-600 mb-6">
                Onze technici zijn opgeleid en gecertificeerd voor onderhoud van alle gangbare airco merken:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Daikin</h4>
                  <p className="text-sm text-gray-600">Premium service</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Mitsubishi</h4>
                  <p className="text-sm text-gray-600">Heavy & Electric</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">LG</h4>
                  <p className="text-sm text-gray-600">Alle modellen</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Samsung</h4>
                  <p className="text-sm text-gray-600">Certified service</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Panasonic</h4>
                  <p className="text-sm text-gray-600">Expert technicus</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Toshiba</h4>
                  <p className="text-sm text-gray-600">Volledige service</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Fujitsu</h4>
                  <p className="text-sm text-gray-600">Onderdelen voorraad</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                  <h4 className="font-semibold text-gray-900">Gree/Tosot</h4>
                  <p className="text-sm text-gray-600">Specialist</p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Het Onderhoudsproces
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Planning</h4>
                    <p className="text-gray-600">
                      U plant uw onderhoudsbeurt online of telefonisch. We plannen bij voorkeur in het voorjaar (maart-mei) of najaar (september-november) voor optimale service-tijden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Reiniging</h4>
                    <p className="text-gray-600">
                      Onze technicus reinigt grondig de filters, binnen- en buitenunit, afvoer en ventilator. Dit verbetert de luchtkwaliteit en efficiency direct merkbaar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Controle</h4>
                    <p className="text-gray-600">
                      We controleren het koudemiddel niveau, testen alle functies, meten temperaturen, controleren elektrische aansluitingen en leidingen, en optimaliseren de instellingen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Rapport</h4>
                    <p className="text-gray-600">
                      U ontvangt een uitgebreid onderhoudsrapport met bevindingen, uitgevoerde werkzaamheden en eventuele aanbevelingen voor de toekomst.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-sky-600" />
                  Onderhoudscontract Voordelen
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>20% korting</strong> op jaarlijks onderhoud</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Voorrang bij storingen</strong> met 4-uur responstijd</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>10% korting</strong> op alle reparaties en onderdelen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Automatische planning</strong> - wij nemen contact op</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Gratis kleine reparaties</strong> tijdens onderhoud</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section 1 */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plan Nu Uw Airco Onderhoud in Heerlen
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Voorkom storingen en hoge reparatiekosten met professioneel onderhoud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="h-6 w-6 mr-2" />
                Plan Onderhoud
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
              >
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen over Airco Service in Heerlen
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-sky-500 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              24/7 Bereikbaar voor Storing Service
            </h2>
            <p className="text-xl mb-8 text-sky-50">
              Airco storing? Bel, mail of WhatsApp ons direct - we zijn er binnen 24 uur!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:0462021430"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 mb-2" />
                <span className="font-semibold">Bel Direct</span>
                <span className="text-sky-100">046 202 1430</span>
              </a>
              <a
                href="mailto:info@staycoolairco.nl"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="h-8 w-8 mb-2" />
                <span className="font-semibold">Mail Ons</span>
                <span className="text-sky-100">info@staycoolairco.nl</span>
              </a>
              <a
                href="https://wa.me/31636481054"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 mb-2" />
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sky-100">06 36481054</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoServiceHeerlen;
