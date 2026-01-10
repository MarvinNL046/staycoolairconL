import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Building2, Wind, Zap, Phone, Calculator, Award, Users, Settings } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const AircoInstallatieBedrijfspand: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Zakelijk', path: '/zakelijk' },
    { label: 'Bedrijfspand' }
  ];

  const usps = [
    {
      icon: <Building2 className="h-12 w-12 text-sky-500" />,
      title: "Commerciële Systemen",
      description: "VRV/VRF systemen voor grote bedrijfspanden tot 2000m²"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Zakelijke Financiering",
      description: "Lease, huur-koop, of directe aftrek. Flexibele financiering op maat"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "All-in Contracten",
      description: "Installatie, onderhoud, storing en vervanging in één contract"
    },
    {
      icon: <Settings className="h-12 w-12 text-sky-500" />,
      title: "24/7 Service",
      description: "Storingsdienst en preventief onderhoud voor bedrijfscontinuïteit"
    }
  ];

  const faqs = [
    {
      question: "Wat is het verschil tussen een reguliere airco en VRV/VRF systeem?",
      answer: "VRV (Variable Refrigerant Volume) of VRF (Variable Refrigerant Flow) systemen zijn commerciële klimaatsystemen ontworpen voor grote gebouwen. Het verschil: reguliere split-units hebben max 8 binnenunits per buitenunit, VRV/VRF kan 50+ units aansturen. VRV past het koudemiddel continu aan per zone, is veel energiezuiniger (40-50% besparing), heeft warmteterugwinning (simultaan koelen en verwarmen mogelijk), en centrale besturing. Kosten: €15.000-80.000 afhankelijk van gebouwgrootte. Geschikt voor kantoorpanden, winkels, hotels, zorgcentra vanaf 200m²."
    },
    {
      question: "Hoeveel kost een airco installatie voor een bedrijfspand?",
      answer: "Kosten variëren sterk per gebouwtype en -grootte. Klein bedrijfspand (100-200m²): €8.000-15.000 met multi-split systemen. Middelgroot pand (200-500m²): €18.000-35.000 met VRV-systeem. Groot pand (500-2000m²): €40.000-150.000+ met volledig VRF-systeem inclusief BMS integratie. Prijs omvat: units, installatie, leidingwerk, elektrische aansluiting, inbedrijfstelling, training. Financiering via lease vanaf €500/maand mogelijk. Wij maken gratis maatwerk offerte na locatiebezoek en capaciteitsberekening."
    },
    {
      question: "Hoe lang duurt installatie in een bedrijfspand?",
      answer: "Installatieduur hangt af van systeemgrootte en gebouwcomplexiteit. Klein multi-split (tot 8 units): 2-4 werkdagen. Middelgroot VRV-systeem (8-20 units): 1-2 weken. Groot VRF-project (20+ units): 2-6 weken. Wij plannen installatie buiten bedrijfsuren indien gewenst (avonden/weekenden) om operationele onderbreking te minimaliseren. Bij nieuwbouw of renovatie integreren wij met bouwplanning. Gefaseerde oplevering mogelijk: kritische ruimtes eerst, overige geleidelijk."
    },
    {
      question: "Welke garanties en service zijn er voor bedrijfspanden?",
      answer: "Standaard fabrieksgarantie: 3-5 jaar op units, 10 jaar op compressor. Wij bieden uitgebreide garantie tot 10 jaar bij onderhoudscontract. Onderhoudscontracten: Basis (€450/jaar): 1x servicebeurt, prioriteit storingen. Premium (€890/jaar): 2x service, 24/7 storingsdienst binnen 24u, gratis kleine reparaties. Enterprise (op maat): dedicated servicemanager, preventief monitoring, vervangende capaciteit bij storing, SLA garanties. Alle onderhoud fiscaal aftrekbaar als bedrijfskosten."
    },
    {
      question: "Kan ik zones apart regelen in mijn bedrijfspand?",
      answer: "Ja, dat is een kernvoordeel van commerciële systemen. Multi-split: elke binnenunit apart regelbaar (perfect voor verschillende kantoorruimtes). VRV/VRF: individuele zone-controle per ruimte of werkplek, centraal te beheren via BMS (Building Management System). Medewerkers kunnen binnen bepaalde range zelf temperatuur aanpassen. Voordelen: energiebesparing (ongebruikte ruimtes uit), comfort (persoonlijke voorkeuren), planning (nachtmodus automatisch). Integratie met aanwezigheidssensoren en tijdklokken mogelijk voor maximale efficiëntie."
    },
    {
      question: "Is airco verplicht in bedrijfspanden volgens arbo-wetgeving?",
      answer: "Arbowetgeving schrijft gezonde werkomgeving voor maar specificeert geen airco-plicht. Wel geldt: temperatuur 18-24°C voor kantoorwerk,  meer dan 26°C vereist maatregelen (ventilatie, zonwering, koeling),  meer dan 32°C is werken zonder klimaatbeheersing niet toegestaan. Bij klachten kan arbeidsinspectie handhaving eisen. Voor specifieke sectoren (horeca keukens, serverruimtes, zorgcentra) zijn strengere eisen. Werkgevers zijn aansprakelijk voor hitte-gerelateerde gezondheidsklachten. Een airco is juridisch vaak geen vereiste maar praktisch noodzaak om arbo-normen te halen en claims te voorkomen."
    },
    {
      question: "Hoe energiezuinig zijn commerciële aircosystemen?",
      answer: "Moderne VRV/VRF systemen zijn zeer energiezuinig dankzij inverter technologie en warmteterugwinning. Energielabel A+++ bereikbaar met SEER-waarden  meer dan 6 (€1 stroom = meer dan €6 koeling). Besparingen: 40-50% t.o.v. oude systemen, 60-70% t.o.v. elektrische verwarming. Warmteterugwinning: koelwarmte van serverruimte gebruiken om kantoren te verwarmen (gratis verwarming). Slimme functies: aanwezigheidsdetectie, zonering, nachtmodus. Typisch energieverbruik: €15-25 per m² per jaar voor koelen én verwarmen. ROI: 3-7 jaar door energiebesparing en productiviteitswinst."
    },
    {
      question: "Welke merken zijn geschikt voor bedrijfspanden?",
      answer: "Voor commerciële toepassingen adviseren wij premium A-merken met bewezen betrouwbaarheid. Daikin VRV: marktleider, meest uitgebreid gamma, uitstekende service netwerk, vanaf €18.000. Mitsubishi Electric City Multi: zeer betrouwbaar, geschikt voor extreme omstandigheden, vanaf €16.000. LG Multi V: goede prijs-kwaliteit, snelle installatie, vanaf €14.000. Samsung DVM: innovatief, goede app-bediening, vanaf €15.000. Alle merken 3-5 jaar garantie, 10 jaar op compressor. Wij adviseren op basis van specifieke eisen (gebouwtype, budget, gewenste functies)."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Installatie Bedrijfspand Limburg | VRV/VRF Systemen | StayCool"
        description="Bedrijfspand airco ✓ VRV/VRF systemen tot 2000m² ✓ 24/7 service ✓ Zakelijke financiering ✓ All-in contracten. Gratis offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Installatie Bedrijfspand",
          description: "Professionele installatie van commerciële VRV/VRF klimaatsystemen voor bedrijfspanden. All-in service met installatie, onderhoud en 24/7 storingsdienst.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "+31462021430",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          offers: {
            "@type": "Offer",
            priceRange: "€8000-€150000",
            priceCurrency: "EUR"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Installatie Bedrijfspand - VRV/VRF Commerciële Systemen
            </h1>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Professionele klimaatbeheersing voor bedrijfspanden tot 2000m². VRV/VRF systemen met warmteterugwinning, 40% energiebesparing en 24/7 service. All-in contracten vanaf €8.000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Plan Locatiebezoek
              </Link>
              <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sky-50">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>VRV/VRF Systemen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Warmteterugwinning</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>24/7 Storingsdienst</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                VRV/VRF Systemen: De Standaard voor Professionele Klimaatbeheersing
              </h2>

              <p className="text-gray-600 mb-6">
                Voor bedrijfspanden vanaf 200m² is een VRV (Variable Refrigerant Volume) of VRF (Variable Refrigerant Flow) systeem de professionele standaard. Deze commerciële systemen zijn specifiek ontworpen voor grote gebouwen waar traditionele split-units tekort schieten in capaciteit, efficiëntie of flexibiliteit.
              </p>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wat maakt VRV/VRF Superior?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technische Voordelen</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Tot 64 binnenunits op één buitenunit</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Leidinglengtes tot 1000 meter mogelijk</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Hoogteverschillen tot 90 meter overbrugbaar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Simultaan koelen én verwarmen in verschillende zones</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Modulaire opbouw - gefaseerd uitbreiden</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Business Voordelen</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>40-50% energiebesparing vs. traditioneel</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Centrale besturing via BMS/app</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Real-time energiemonitoring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Warmteterugwinning (gratis verwarming)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Minimale onderhoudskosten door betrouwbaarheid</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Capaciteitsberekening voor Bedrijfspanden
              </h2>

              <p className="text-gray-600 mb-6">
                Voor commerciële ruimtes is nauwkeurige capaciteitsberekening essentieel. Te klein dimensioneren leidt tot onvoldoende klimaat tijdens piekuren, te groot resulteert in onnodig hoge investering en energiekosten. Onze F-gas gecertificeerde adviseurs berekenen exact de benodigde capaciteit op basis van:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Klein Bedrijfspand</h4>
                  <p className="text-gray-600 mb-3">100-200m² (winkel, klein kantoor)</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Capaciteit: 15-25 kW totaal</li>
                    <li>• Systeem: Multi-split 4-8 units</li>
                    <li>• Buitenunits: 1-2 stuks</li>
                    <li>• Investering: €8.000-15.000</li>
                    <li>• Installatie: 2-4 werkdagen</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Middelgroot Pand</h4>
                  <p className="text-gray-600 mb-3">200-500m² (kantoor, showroom)</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Capaciteit: 25-60 kW totaal</li>
                    <li>• Systeem: VRV entry level</li>
                    <li>• Binnenunits: 8-20 stuks</li>
                    <li>• Investering: €18.000-35.000</li>
                    <li>• Installatie: 1-2 weken</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-sky-50">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Groot Pand</h4>
                  <p className="text-gray-600 mb-3">500-2000m² (fabriek, hotel)</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Capaciteit: 60-200+ kW</li>
                    <li>• Systeem: VRF met warmteterugwinning</li>
                    <li>• Binnenunits: 20-64 stuks</li>
                    <li>• Investering: €40.000-150.000+</li>
                    <li>• Installatie: 2-6 weken</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                24/7 Service en Onderhoud voor Bedrijfscontinuïteit
              </h2>

              <p className="text-gray-600 mb-6">
                Voor bedrijven is betrouwbaarheid cruciaal. Een storing tijdens bedrijfsuren heeft directe financiële impact. Onze Enterprise onderhoudscontracten garanderen maximale uptime met preventief onderhoud, real-time monitoring en 24/7 storingsdienst.
              </p>

              <div className="border-2 border-sky-500 rounded-lg p-6 mb-8 bg-sky-50">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Onderhoudscontract</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Preventief Onderhoud</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Kwartaal service (4x per jaar)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Real-time monitoring via IoT sensoren</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Predictive maintenance alerts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Volledige rapportage en trendanalyse</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Storingsdienst SLA</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>24/7 bereikbaar, ook feestdagen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>4 uur response tijd kritische storingen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Vervangende capaciteit binnen 12 uur</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dedicated servicemanager</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 font-semibold">
                  Prijs: vanaf €1.200/jaar voor systemen tot 50kW, schaalbaar per capaciteit. ROI: gemiddeld 15% besparing door preventief onderhoud vs. reactief.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plan een Gratis Locatiebezoek voor uw Bedrijfspand
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Onze adviseurs maken een gratis capaciteitsberekening, ROI-analyse en offerte op maat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
                <Phone className="h-6 w-6 mr-2" />
                Plan Locatiebezoek
              </Link>
              <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen Bedrijfspand Airco
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gerelateerde Zakelijke Oplossingen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seo/pillar-1-installatie-services/airco-installatie-kantoor" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kantoor Airco</h3>
                <p className="text-gray-600 mb-4">Optimaal klimaat voor productiviteit</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/seo/pillar-1-installatie-services/multi-split-airco-installatie" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-split Systemen</h3>
                <p className="text-gray-600 mb-4">Flexibele klimaatoplossingen</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/zakelijk" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zakelijk Overzicht</h3>
                <p className="text-gray-600 mb-4">Alle zakelijke diensten</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoInstallatieBedrijfspand;
