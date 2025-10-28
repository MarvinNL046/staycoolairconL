import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Moon, Wind, Volume2, Phone, Calculator, Award, Star, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoInstallatieSlaapkamer: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Installatie', path: '/aircos' },
    { label: 'Slaapkamer' }
  ];

  const usps = [
    {
      icon: <Moon className="h-12 w-12 text-sky-500" />,
      title: "Perfecte Nachtrust",
      description: "Optimale slaaptemperatuur van 16-18°C voor dieper en gezonder slapen"
    },
    {
      icon: <Volume2 className="h-12 w-12 text-sky-500" />,
      title: "Ultrastil vanaf 19 dB(A)",
      description: "Fluisterzacht - stiller dan een bibliotheek, geen storing van uw slaap"
    },
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Geen Tocht",
      description: "Intelligente luchtverdeling voorkomt direct op u blazen tijdens slapen"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Luchtzuivering",
      description: "Filters verwijderen allergenen, pollen en stofmijt voor gezonde slaap"
    }
  ];

  const faqs = [
    {
      question: "Is een airco in de slaapkamer gezond?",
      answer: "Ja, een airco in de slaapkamer is zeer gezond wanneer correct gebruikt. De ideale slaaptemperatuur ligt tussen 16-18°C, wat essentieel is voor diepe slaap en lichamelijk herstel. Moderne airconditioners zuiveren tevens de lucht door pollen, stofmijt en allergenen te filteren. Dit is vooral waardevol voor mensen met astma of allergieën. Let wel op: stel de airco niet te koud in en richt de luchtstroom niet direct op het bed."
    },
    {
      question: "Welke airco is het stilste voor in de slaapkamer?",
      answer: "Voor slaapkamers adviseren wij premium merken met 'silent mode' functionaliteit. Daikin Emura produceert slechts 19 dB(A) op de laagste stand - stiller dan fluisteren (30 dB). Mitsubishi Heavy Diamond heeft een ultra-quiet modus vanaf 20 dB(A). LG Artcool Mirror biedt goede prestaties vanaf 22 dB(A). Alle modellen beschikken over een speciale nachtmodus die geluid en lichtuitstraling minimaliseert."
    },
    {
      question: "Op welke temperatuur moet ik de airco 's nachts zetten?",
      answer: "De ideale slaapkamertemperatuur ligt tussen 16-18°C. Bij deze temperatuur produceert uw lichaam optimaal melatonine (het slaaphormoon) en komt u in diepere slaapfasen. Stel de airco 1-2 uur voor bedtijd in op 18°C en programmeer deze om 's nachts naar 16-17°C te gaan. Gebruik de timer functie om de airco na 6-8 uur automatisch uit te schakelen of op een hoger vermogen te zetten tegen het ontwaken."
    },
    {
      question: "Waar moet ik de airco in de slaapkamer ophangen?",
      answer: "De ideale positie is boven het voeteneinde van het bed of aan de zijwand, nooit direct boven het hoofdeinde. Dit voorkomt dat koude lucht direct op u blaast tijdens slapen. Houd minimaal 1,5 meter afstand tot het bed. Bij twee aparte bedden is plaatsing aan de lange wand tussen beide bedden optimaal. Vermijd plaatsing tegenover ramen waar direct zonlicht de temperatuursensor kan beïnvloeden."
    },
    {
      question: "Hoeveel kW airco heb ik nodig voor een slaapkamer?",
      answer: "Voor een standaard slaapkamer van 12-20m² volstaat een 2.0-2.5 kW unit. Grotere slaapkamers (20-30m²) of master bedrooms vereisen 2.5-3.5 kW. Slaapkamers hebben doorgaans minder capaciteit nodig dan woonruimtes omdat ze 's nachts gebruikt worden (koelere buitentemperatuur), vaak minder raamoppervlak hebben, en de gewenste temperatuur lager ligt. Bij twijfel kunt u onze gratis capaciteit calculator gebruiken."
    },
    {
      question: "Droogt een airco de lucht uit in de slaapkamer?",
      answer: "Oudere airconditioners konden luchtvochtigheid te sterk verlagen, maar moderne systemen reguleren dit automatisch. Premium modellen zoals de Daikin Ururu Sarara kunnen zelfs vocht toevoegen aan droge lucht. De ideale luchtvochtigheid voor slapen ligt tussen 40-60%. Te droge lucht (onder 30%) kan keelpijn en droge slijmvliezen veroorzaken. Moderne inverter systemen houden de luchtvochtigheid binnen gezonde grenzen."
    },
    {
      question: "Kan ik de airco de hele nacht aan laten staan?",
      answer: "Ja, moderne airconditioners zijn ontworpen voor continu gebruik. De inverter technologie past het vermogen automatisch aan, waardoor er geen on/off cycli zijn die geluid maken of temperatuurschommelingen veroorzaken. Gebruik de slaap/timer functie om energiezuinig te klimatiseren: airco koelt de kamer voor, draait 's nachts op minimaal vermogen (ultra stil) en schakelt automatisch uit bij ontwaken. Dit is gezonder en zuiniger dan traditionele ventilatie."
    },
    {
      question: "Wat kost een airco installatie in de slaapkamer?",
      answer: "Een complete airco installatie voor een slaapkamer kost tussen €1.600 en €3.000, afhankelijk van gekozen merk en capaciteit. Basismodellen (LG, Tosot) vanaf €1.600, middenklasse (Mitsubishi, Samsung) vanaf €1.900, premium (Daikin Emura) vanaf €2.400. Dit is inclusief professionele installatie, elektrische aansluiting, afvoer, 5-10 jaar garantie en volledige inbedrijfstelling. De terugverdientijd door energiebesparing is gemiddeld 5-7 jaar."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Installatie Slaapkamer Limburg | Ultrastil vanaf 19dB | StayCool"
        description="Airco slaapkamer ✓ Ultrastil vanaf 19dB ✓ Perfecte slaaptemperatuur ✓ 10 jaar garantie ✓ F-gas gecertificeerd. Gezonde nachtrust!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Installatie Slaapkamer",
          description: "Professionele installatie van fluisterstille split-unit airconditioning in slaapkamers voor optimale nachtrust. Ultrastille modellen vanaf 19 dB(A) met luchtzuivering.",
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
            priceRange: "€1600-€3000",
            priceCurrency: "EUR"
          }
        }}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Installatie Slaapkamer - Ultrastil vanaf 19 dB(A)
            </h1>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Geniet van perfecte nachtrust met een fluisterstille slaapkamer airco. Optimale slaaptemperatuur, luchtzuivering en geen tocht. Premium merken vanaf €1.600 inclusief installatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Gratis Advies Aanvragen
              </Link>
              <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sky-50">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Vanaf 19 dB(A)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Luchtzuivering Inbegrepen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>10 Jaar Garantie</span>
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
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

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Waarom een Airco in de Slaapkamer Essentieel is voor Gezonde Slaap
              </h2>

              <p className="text-gray-600 mb-6">
                Kwaliteit van slaap heeft directe invloed op uw gezondheid, productiviteit en algehele welzijn. Wetenschappelijk onderzoek toont aan dat de ideale slaaptemperatuur tussen 16-18°C ligt - significant lager dan de gemiddelde kamertemperatuur overdag. Bij deze temperatuur produceert uw lichaam optimaal melatonine (het slaaphormoon), komt u sneller in diepe slaapfasen en herstelt uw lichaam effectiever.
              </p>

              <p className="text-gray-600 mb-6">
                Tijdens warme zomernachten kan de slaapkamertemperatuur oplopen tot 25-28°C, wat resulteert in woelen, zweten en onderbroken slaap. Een airco in de slaapkamer is geen luxe maar een investering in uw gezondheid. Mensen die consistent slapen in een gekoelde slaapkamer rapporteren diepere slaap, minder nachtelijk ontwaken en beter humeur overdag.
              </p>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Moon className="inline h-6 w-6 text-sky-500 mr-2" />
                  Impact van Temperatuur op Slaapkwaliteit
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>16-18°C:</strong> Optimale melatonine productie, diepe slaap, volledig herstel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>19-21°C:</strong> Acceptabel maar minder diep, kan ontwaken veroorzaken</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>22-24°C:</strong> Verstoorde slaap, meer REM-fragmentatie, minder herstel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>25°C+:</strong> Significant verslechterde slaapkwaliteit, overmatig zweten</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Ultrastille Airconditioners: Geluidsniveaus Vergeleken
              </h2>

              <p className="text-gray-600 mb-6">
                Het geluidsniveau van een airco is cruciaal voor ongestoorde nachtrust. Moderne premium airconditioners zijn zo stil dat u ze letterlijk niet hoort. Om dit in perspectief te plaatsen: normale conversatie produceert 60 dB, fluisteren 30 dB, en een bibliotheek heeft een achtergrondgeluid van ongeveer 40 dB. De stilste slaapkamer airconditioners opereren op 19-22 dB(A) - zachter dan ademhaling.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-2" />
                    Premium Klasse (19-20 dB)
                  </h4>
                  <p className="text-gray-600 mb-4">
                    <strong>Daikin Emura, Mitsubishi Heavy Diamond</strong>
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>19-20 dB(A) op silent mode - volledig onhoorbaar</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Speciale nachtmodus met gedimd display</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Geen mechanisch geluid, ultrastille ventilatoren</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Perfect voor lichte slapers en baby's</span>
                    </li>
                  </ul>
                  <p className="text-sky-600 font-semibold mt-4">Vanaf €2.400 all-in</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-2" />
                    Comfort Klasse (21-24 dB)
                  </h4>
                  <p className="text-gray-600 mb-4">
                    <strong>LG Artcool, Samsung WindFree</strong>
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>21-24 dB(A) op laagste stand - zeer stil</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sleep mode met gereduceerd vermogen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Uitstekende prijs-kwaliteit voor meeste gebruikers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Geschikt voor normale tot diepe slapers</span>
                    </li>
                  </ul>
                  <p className="text-sky-600 font-semibold mt-4">Vanaf €1.800 all-in</p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <p className="text-gray-700">
                  <strong>Tip voor Maximale Stilte:</strong> Het geluidsniveau van de buitenunit is ook belangrijk voor uw nachtrust en die van buren. Plaats de buitenunit niet direct onder slaapkamerramen en gebruik trillingdempers. Hoogwaardige units zoals Daikin en Mitsubishi hebben buitenunits vanaf 45-48 dB(A) - vergelijkbaar met een rustig gesprek op 10 meter afstand.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Optimale Plaatsing Airco in Slaapkamer
              </h2>

              <p className="text-gray-600 mb-6">
                De positie van uw slaapkamer airco heeft grote invloed op comfort en slaapkwaliteit. Verkeerde plaatsing kan resulteren in tocht, ongelijkmatige temperatuurverdeling of onnodige geluidsoverlast. Onze F-gas gecertificeerde installateurs adviseren u over de optimale locatie op basis van uw specifieke slaapkamer layout.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    Ideale Plaatsing
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Boven voeteneinde:</strong> Koude lucht valt natuurlijk naar beneden, verdeelt zich gelijkmatig</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Aan lange zijwand:</strong> Bij twee bedden, centraal tussen beiden voor gelijkmatige koeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Hoogte 2,5 meter:</strong> Optimale luchtcirculatie zonder tocht op bed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>1,5-2 meter van bed:</strong> Geen directe luchtstroom op slapende personen</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-red-500 mr-2">✕</span>
                    Te Vermijden
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">✕</span>
                      <span><strong>Boven hoofdeinde:</strong> Directe luchtstroom veroorzaakt tocht, verkoudheid, stijve nek</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">✕</span>
                      <span><strong>Tegenover raam:</strong> Zonlicht beïnvloedt temperatuursensor, inefficiënte werking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">✕</span>
                      <span><strong>In hoek:</strong> Slechte luchtcirculatie, ongelijkmatige temperatuurverdeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">✕</span>
                      <span><strong>Direct boven kast:</strong> Belemmert luchtstroom, verminderde efficiëntie</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Slimme Functies voor Optimale Nachtrust
              </h2>

              <p className="text-gray-600 mb-6">
                Moderne slaapkamer airconditioners beschikken over intelligente functies specifiek ontworpen voor ongestoorde slaap. Deze technologieën zorgen ervoor dat u de hele nacht comfortabel slaapt zonder handmatige aanpassingen of ontwaken door temperatuurschommelingen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    <Moon className="inline h-6 w-6 text-sky-500 mr-2" />
                    Sleep Mode / Nachtmodus
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Automatische temperatuuraanpassing gedurende de nacht. De airco begint bij uw ingestelde temperatuur (bijv. 18°C) en verlaagt deze geleidelijk naar 16-17°C voor diepe slaap. Voor het ontwaken verhoogt het systeem de temperatuur weer naar 19-20°C voor comfortabel opstaan. Ventilatorsnelheid wordt geminimaliseerd voor ultrastil gebruik.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    <Volume2 className="inline h-6 w-6 text-sky-500 mr-2" />
                    Silent Mode
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Reduceert geluidsniveau tot absolute minimum (19-20 dB) door ventilatorsnelheid te beperken en compressor op laagste toeren te laten draaien. LED display wordt gedimd of uitgeschakeld. Piepjes bij bediening worden gedempt. Ideaal voor zeer lichte slapers, baby's en wanneer absolute stilte vereist is.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    <Wind className="inline h-6 w-6 text-sky-500 mr-2" />
                    Intelligente Luchtrichting
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Automatische horizontale en verticale lamellen sturen lucht weg van het bed. Premium modellen met 3D bewegende lamellen creëren indirecte luchtstroom via plafond en wanden. Sommige systemen (Daikin Coanda effect) gebruiken plafond als geleider voor tochtvrije verdeling. Sensoren detecteren personen en vermijden directe luchtstroom.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    <Zap className="inline h-6 w-6 text-sky-500 mr-2" />
                    Smart Timer Functies
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Programmeer de airco om 1-2 uur voor bedtijd te starten en de slaapkamer voor te koelen. 's Nachts draait het systeem op minimum vermogen. Timer schakelt de airco na 6-8 uur uit of naar hoger vermogen bij ontwaken. Wekelijkse schema's mogelijk voor verschillende bedtijden. Via WiFi app bedienbaar vanuit bed of onderweg.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Luchtkwaliteit en Gezondheid
              </h2>

              <p className="text-gray-600 mb-6">
                Naast temperatuurregeling speelt luchtkwaliteit een cruciale rol in gezonde slaap. Moderne slaapkamer airconditioners fungeren als luchtzuiveraars door schadelijke deeltjes, allergenen en microorganismen uit de lucht te filteren. Dit is vooral waardevol voor mensen met astma, allergieën, hooikoorts of andere luchtwegproblemen.
              </p>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Filtersystemen in Premium Airconditioners
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <strong className="text-gray-900">Plasma Quad Filter (Mitsubishi):</strong>
                    <p>Gebruikt elektrische lading om bacteriën, virussen en geuren te elimineren. Vermindert influenza virussen met 99% en verwijdert formaldehyde. Geen vervanging nodig - zelfreinigend systeem.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Titanium Apatite Filter (Daikin):</strong>
                    <p>Breekt organische verbindingen af en neutraliseert geuren. Effectief tegen huisstofmijt, schimmels en pollen. Filtert deeltjes tot 0.3 micron (PM2.5). Behoudt effectiviteit tot 3 jaar.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">HEPA + Carbon Filter (LG):</strong>
                    <p>Vangt 99.97% van deeltjes groter dan 0.3 micron. Actieve koolstoffilter absorbeert geuren en vluchtige organische stoffen (VOCs). Ideaal voor stadsomgevingen met luchtvervuiling.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Energiezuinig Slapen: Kosten en Besparingen
              </h2>

              <p className="text-gray-600 mb-6">
                Een veelgestelde zorg is het energieverbruik van een airco die de hele nacht draait. Dankzij moderne inverter technologie en sleep mode is het energieverbruik verrassend laag. Een typische 2.5 kW slaapkamer airco verbruikt in nachtmodus slechts 150-300 Watt - vergelijkbaar met 3-5 gloeilampen.
              </p>

              <div className="border border-gray-200 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Jaarlijkse Kosten Slaapkamer Airco (2.5 kW unit)
                </h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Zomernachten (90 nachten × 8 uur × 0.25 kW)</span>
                    <span className="font-semibold">€40-60</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Verwarmen winter (120 dagen × 6 uur × 0.8 kW)</span>
                    <span className="font-semibold">€130-180</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Lente/herfst (occasioneel gebruik)</span>
                    <span className="font-semibold">€20-30</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-lg">
                    <strong>Totaal per jaar</strong>
                    <strong className="text-sky-600">€190-270</strong>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  <em>Berekening gebaseerd op gemiddeld Nederlands elektriciteitsverbruik €0.45/kWh. Inverter technologie past vermogen continu aan - werkelijke verbruik vaak 30-40% lager dan theoretisch maximum.</em>
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-2">Tip: Maximale Efficiëntie</h4>
                <p className="text-gray-600">
                  Gebruik de timer om uw slaapkamer 1-2 uur voor bedtijd te koelen tot 18°C. Schakel dan naar sleep mode die de temperatuur handhaaft met minimaal vermogen. Programmeer de airco om 1 uur voor ontwaken uit te schakelen - de kamer blijft voldoende koel. Dit bespaart 40-50% energie vergeleken met ononderbroken gebruik op vol vermogen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor Perfecte Nachtrust?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Laat u adviseren over de stilste airco voor uw slaapkamer. Gratis adviesgesprek en offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
                <Phone className="h-6 w-6 mr-2" />
                Gratis Advies Aanvragen
              </Link>
              <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen over Slaapkamer Airco
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

        {/* Related Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gerelateerde Airco Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seo/pillar-1-installatie-services/airco-installatie-woonkamer" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Airco Woonkamer</h3>
                <p className="text-gray-600 mb-4">Optimaal comfort in uw woonruimte</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/seo/pillar-1-installatie-services/multi-split-airco-installatie" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-split Systeem</h3>
                <p className="text-gray-600 mb-4">Meerdere kamers tegelijk klimatiseren</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/aircos" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Alle Merken</h3>
                <p className="text-gray-600 mb-4">Vergelijk Daikin, Mitsubishi, LG</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoInstallatieSlaapkamer;
