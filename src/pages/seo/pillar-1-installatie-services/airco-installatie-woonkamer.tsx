import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Calculator, Award, Star, TrendingUp } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoInstallatieWoonkamer: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Installatie', path: '/aircos' },
    { label: 'Woonkamer' }
  ];

  const usps = [
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Optimaal Comfort",
      description: "Perfecte temperatuur in uw woonkamer, zomer én winter dankzij warmtepomp technologie"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "60% Energiebesparing",
      description: "Bespaar tot 60% op uw energiekosten met efficiënte split-unit airconditioning"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Garantie",
      description: "Premium merken met tot 10 jaar fabrieksgarantie voor zorgeloos comfort"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gas Gecertificeerd",
      description: "Professionele installatie door erkende en gecertificeerde installateurs"
    }
  ];

  const faqs = [
    {
      question: "Welke airco is geschikt voor mijn woonkamer?",
      answer: "De juiste airco capaciteit hangt af van de grootte van uw woonkamer, isolatie, raamoppervlak en zonligging. Voor een standaard woonkamer van 25-35m² adviseren wij een 2.5-3.5 kW unit. Voor grotere ruimtes of open keukens is een 5.0 kW systeem geschikter. Gebruik onze gratis capaciteit calculator voor een nauwkeurige berekening."
    },
    {
      question: "Wat kost een airco installatie in de woonkamer?",
      answer: "De totaalprijs voor een complete airco installatie in de woonkamer ligt tussen €1.800 en €3.500, afhankelijk van het gekozen merk, capaciteit en installatiecomplexiteit. Dit is inclusief professionele installatie, koudemiddel, elektrische aansluiting en garantie. Premium merken zoals Daikin en Mitsubishi Heavy zijn duurder maar bieden langere garantie en hogere efficiëntie."
    },
    {
      question: "Hoe lang duurt de installatie van een split-unit airco?",
      answer: "Een standaard split-unit installatie in de woonkamer duurt gemiddeld 4-6 uur. Dit omvat plaatsing van binnen- en buitenunit, doorvoeren maken, koelleidingen aanleggen, elektrische aansluiting en inbedrijfstelling. Bij complexere situaties zoals doorvoer door meerdere muren of extra leidingwerk kan de installatie langer duren."
    },
    {
      question: "Kan een airco ook verwarmen in de winter?",
      answer: "Ja, moderne split-unit airconditioners zijn warmtepompen die zowel kunnen koelen als verwarmen. Ze zijn zeer efficiënt in verwarmen en halen tot 60% besparing ten opzichte van elektrische verwarming. De warmtepomp functie werkt optimaal bij buitentemperaturen tot -15°C, ideaal voor Nederlandse winters."
    },
    {
      question: "Is een airco in de woonkamer geluidsarm?",
      answer: "Moderne split-units zijn zeer stil, met geluidsniveaus vanaf 19 dB(A) op de laagste stand - zachter dan fluisteren. Premium merken zoals Daikin Emura en Mitsubishi Heavy hebben speciale 'silent mode' functies voor ultrastil gebruik 's nachts of tijdens werken vanuit huis."
    },
    {
      question: "Welk merk airco is het beste voor een woonkamer?",
      answer: "Wij adviseren Daikin, Mitsubishi Heavy of LG voor woonkamers. Daikin biedt uitstekende efficiëntie en design, Mitsubishi Heavy staat bekend om betrouwbaarheid en stilte, en LG biedt goede prijs-kwaliteit verhouding. Alle merken hebben minimaal 5 jaar garantie, premium modellen tot 10 jaar."
    },
    {
      question: "Moet ik vergunning aanvragen voor airco installatie?",
      answer: "Voor de meeste woonkamerinstallaties is geen vergunning nodig. Wel moet u rekening houden met welstandseisen voor de buitenunit. In beschermde stadsgezichten of bij monumentenpanden kan een vergunning vereist zijn. Wij adviseren u hierover tijdens het adviesgesprek en regelen eventuele vergunningen."
    },
    {
      question: "Hoe onderhoud ik mijn woonkamer airco?",
      answer: "Simpel onderhoud doet u zelf: reinig de filters elke 2-4 weken door ze te stofzuigen of uit te wassen. Professioneel onderhoud adviseren wij jaarlijks: reiniging binnen- en buitenunit, controle koudemiddel, elektrische verbindingen en algehele werking. Dit verlengt de levensduur en voorkomt storingen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Installatie Woonkamer Limburg | Split-unit vanaf €1.800 | StayCool"
        description="Airco installatie woonkamer ✓ 60% besparing ✓ 10 jaar garantie ✓ F-gas gecertificeerd ✓ Daikin, Mitsubishi, LG. Gratis advies & offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Installatie Woonkamer",
          description: "Professionele installatie van split-unit airconditioning in woonkamers. Complete service inclusief advies, installatie en garantie door F-gas gecertificeerde installateurs.",
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
            priceRange: "€1800-€3500",
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
              Airco Installatie Woonkamer Limburg
            </h1>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Geniet van optimaal comfort in uw woonkamer met een professioneel geïnstalleerde split-unit airco. Koelen én verwarmen met 60% energiebesparing. Premium A-merken vanaf €1.800 inclusief installatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Gratis Offerte Aanvragen
              </Link>
              <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sky-50">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>F-gas Gecertificeerd</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>10 Jaar Garantie</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Binnen 24 Uur Reactie</span>
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
                Waarom een Airco in uw Woonkamer?
              </h2>

              <p className="text-gray-600 mb-6">
                De woonkamer is het hart van uw huis - de plek waar u ontspant, gasten ontvangt en quality time doorbrengt met uw gezin. Een optimaal binnenklimaat is daarom essentieel voor uw comfort en welzijn. Een moderne split-unit airconditioning zorgt het hele jaar door voor de perfecte temperatuur, of het nu gaat om verkoeling op warme zomerdagen of behaaglijke warmte in de winter.
              </p>

              <p className="text-gray-600 mb-6">
                Met de toenemende frequentie van hittegolven en stijgende energieprijzen is een energiezuinige airconditioner geen luxe meer, maar een slimme investering in comfort én besparing. Moderne systemen werken als warmtepomp en zijn tot 60% efficiënter dan traditionele verwarmingsmethoden, waardoor u niet alleen koelt maar ook duurzaam verwarmt.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Voordelen van een Split-unit Airco in de Woonkamer
              </h2>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Zap className="inline h-6 w-6 text-sky-500 mr-2" />
                  Energiebesparing en Duurzaamheid
                </h3>
                <p className="text-gray-600 mb-4">
                  Een split-unit airco met warmtepomp functionaliteit haalt warmte uit de buitenlucht en brengt deze binnen, waarbij er per verbruikte kWh elektriciteit 3-5 kWh warmte wordt geproduceerd. Dit resulteert in een energiebesparing tot 60% vergeleken met elektrische verwarming of oude CV-systemen. Voor een gemiddelde woonkamer van 30m² betekent dit een besparing van €300-500 per jaar op uw energierekening.
                </p>
                <p className="text-gray-600">
                  Bovendien draagt u bij aan CO2-reductie en duurzaamheid. In combinatie met zonnepanelen kunt u zelfs klimaatneutraal verwarmen en koelen. Moderne inverter technologie past het vermogen continu aan, waardoor er geen pieken in stroomverbruik zijn en uw zonnepanelen optimaal benut worden.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Wind className="inline h-6 w-6 text-sky-500 mr-2" />
                  Comfort en Gezondheid
                </h3>
                <p className="text-gray-600 mb-4">
                  Een airco doet veel meer dan alleen koelen. Moderne split-units reguleren ook luchtvochtigheid, filteren stof, pollen en allergenen uit de lucht, en zorgen voor continue luchtstroom zonder tocht. Dit is vooral waardevol voor mensen met astma, allergieën of andere luchtwegklachten.
                </p>
                <p className="text-gray-600">
                  De ideale kamertemperatuur voor een woonkamer ligt tussen 20-22°C in de winter en 23-25°C in de zomer. Een airco houdt deze temperatuur exact op peil, zonder temperatuurschommelingen. Met een afstandsbediening of smartphone app regelt u eenvoudig de gewenste temperatuur, ventilatorsnelheid en luchtrichting.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Welke Airco Capaciteit voor uw Woonkamer?
              </h2>

              <p className="text-gray-600 mb-6">
                De juiste capaciteit is cruciaal voor optimaal comfort en efficiëntie. Te klein en de airco draait constant op vol vermogen zonder de gewenste temperatuur te bereiken. Te groot en u krijgt te maken met temperatuurschommelingen en onnodig hoog energieverbruik. De benodigde capaciteit hangt af van verschillende factoren:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Kleine Woonkamer (15-25m²)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capaciteit: 2.0 - 2.5 kW</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Geschikt voor: Appartement, studio, kleine rijtjeswoning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Investering: €1.800 - €2.400 all-in</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Energiekosten: €80-120 per jaar</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Standaard Woonkamer (25-35m²)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capaciteit: 2.5 - 3.5 kW</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Geschikt voor: Gemiddelde eengezinswoning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Investering: €2.200 - €2.800 all-in</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Energiekosten: €120-180 per jaar</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Grote Woonkamer (35-50m²)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capaciteit: 4.0 - 5.0 kW</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Geschikt voor: Grote eengezinswoning, open keuken</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Investering: €2.600 - €3.500 all-in</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Energiekosten: €180-250 per jaar</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Extra Grote Ruimte (50m²+)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Capaciteit: 6.0 kW of multi-split</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Geschikt voor: Villa, open living, bedrijfsruimte</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Investering: €3.200 - €4.500 all-in</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Energiekosten: €250-350 per jaar</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <p className="text-gray-700">
                  <strong>Let op:</strong> Deze richtwaarden gelden voor standaard geïsoleerde woningen. Factoren zoals slechte isolatie, grote raampartijen op het zuiden, hoge plafonds of open verbindingen naar andere ruimtes vereisen een hogere capaciteit. Gebruik onze <Link to="/capaciteit-calculator" className="text-sky-600 hover:text-sky-700 underline">gratis capaciteit calculator</Link> voor een nauwkeurige berekening specifiek voor uw situatie.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Premium A-Merken voor uw Woonkamer
              </h2>

              <p className="text-gray-600 mb-6">
                Bij StayCool Airco werken wij uitsluitend met toonaangevende A-merken die bekend staan om hun kwaliteit, betrouwbaarheid en efficiëntie. Elk merk heeft zijn eigen sterke punten en wij helpen u de juiste keuze maken op basis van uw wensen en budget.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">Daikin</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Daikin is marktleider in airconditioning en staat garant voor Japanse topkwaliteit. Hun Emura-serie combineert uitstekende prestaties met strak design. De Ururu Sarara technologie zorgt voor optimale luchtvochtigheid zonder externe waterafvoer. Perfect voor design-bewuste woningeigenaren die geen concessies doen aan kwaliteit.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>A+++ energielabel - hoogste efficiëntie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tot 10 jaar fabrieksgarantie beschikbaar</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ultrastil: vanaf 19 dB(A)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>WiFi bediening via app standaard</span>
                    </li>
                  </ul>
                  <p className="text-sky-600 font-semibold mt-4">Vanaf €2.400 inclusief installatie</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">Mitsubishi Heavy Industries</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Mitsubishi Heavy Industries combineert decennia ervaring met cutting-edge technologie. Hun Diamond-serie staat bekend om betrouwbaarheid en fluisterstille werking. De 3D i-see sensor detecteert personen in de ruimte en past de luchtstroom automatisch aan voor optimaal comfort.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Premium kwaliteit - gebouwd voor langdurig gebruik</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>7 jaar garantie standaard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>3D i-see sensor voor slim comfort</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plasma Quad Plus luchtzuivering</span>
                    </li>
                  </ul>
                  <p className="text-sky-600 font-semibold mt-4">Vanaf €2.200 inclusief installatie</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">LG</h4>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-5 w-5 text-gray-300" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    LG biedt uitstekende prijs-kwaliteit verhouding met bewezen technologie. Hun Artcool-serie combineert modern design met efficiënte prestaties. Met Active Energy Control technologie past de airco automatisch het energieverbruik aan op basis van werkelijke behoefte.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Beste prijs-kwaliteit verhouding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>5 jaar fabrieksgarantie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Active Energy Control - slim energiebeheer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>WiFi module optioneel verkrijgbaar</span>
                    </li>
                  </ul>
                  <p className="text-sky-600 font-semibold mt-4">Vanaf €1.800 inclusief installatie</p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Het Installatieproces Stap voor Stap
              </h2>

              <p className="text-gray-600 mb-6">
                Een professionele installatie is cruciaal voor de prestaties, efficiëntie en levensduur van uw airco. Bij StayCool Airco werken uitsluitend F-gas gecertificeerde installateurs volgens strikte kwaliteitsnormen. Zo verloopt het installatieproces:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Gratis Adviesgesprek & Offerte</h4>
                    <p className="text-gray-600">
                      Tijdens het adviesgesprek bespreken we uw wensen en situatie. We meten de ruimte op, beoordelen isolatie en raamoppervlak, en bepalen de optimale plaatsing van binnen- en buitenunit. U ontvangt een gedetailleerde offerte inclusief specificaties, garanties en verwachte installatietermijn.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Plaatsing Binnenunit</h4>
                    <p className="text-gray-600">
                      De binnenunit wordt op circa 2,5 meter hoogte aan de muur gemonteerd voor optimale luchtverdeling. We zorgen voor strakke afwerking met muurplaat en niveauwaterpas. Bij het boren houden we rekening met elektrische leidingen en waterleidingen in de muur. De ideale locatie is tegenover zit- en slaapplekken, uit direct zonlicht.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Doorvoer & Leidingwerk</h4>
                    <p className="text-gray-600">
                      We maken een kernboring (65-75mm) door de gevel voor koelleidingen, elektrische bekabeling en condensafvoer. Bij spouwmuren boren we schuin naar beneden voor natuurlijke waterafvoer. Leidingen worden geïsoleerd en beschermd tegen weersinvloeden. Zichtbaar leidingwerk buiten wordt netjes weggewerkt in kunststof goten of tegen de kleur van de gevel gespoten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Plaatsing Buitenunit</h4>
                    <p className="text-gray-600">
                      De buitenunit plaatsen we op een stabiel betonnen pad, wandconsoles of op het platte dak. We houden minimaal 30cm vrije ruimte rondom voor luchtcirculatie. Anti-vibratiedempers voorkomen geluidoverdracht. De unit wordt waterpas geplaatst voor goede condensafvoer. We zorgen dat de unit niet direct zichtbaar is vanaf de openbare weg indien mogelijk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Elektrische Aansluiting</h4>
                    <p className="text-gray-600">
                      De airco wordt aangesloten op een aparte groep in de meterkast met aardlekschakelaar. Voor kleinere units (tot 3.5kW) volstaat vaak een bestaande groep, grotere units vereisen een nieuwe 16A groep. Alle elektrische verbindingen worden professioneel geklemd en geïsoleerd volgens NEN-normen. We testen de elektrische installatie grondig voor ingebruikname.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Vacuümeren & Vullen</h4>
                    <p className="text-gray-600">
                      Het koelsysteem wordt gevacumeerd om vocht en lucht te verwijderen - cruciaal voor optimale werking en levensduur. Vervolgens vullen we het systeem met de juiste hoeveelheid koudemiddel (R32 of R410A) volgens fabrieksspecificaties. We controleren alle lasverbindingen op lekdichtheid met elektronische lekdetectie en zeepwater.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    7
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Inbedrijfstelling & Instructie</h4>
                    <p className="text-gray-600">
                      We starten de airco en testen alle functies: koelen, verwarmen, verschillende standen, timer en temperatuurregeling. Alle metingen worden geregistreerd. U krijgt uitgebreide uitleg over de bediening, onderhoud en optimale instellingen. We demonstreren de afstandsbediening of app en beantwoorden al uw vragen. U ontvangt handleidingen, garantiebewijzen en onderhoudsadvies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    8
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Oplevering & Nazorg</h4>
                    <p className="text-gray-600">
                      We ruimen netjes op en voeren al het afval professioneel af. U tekent het opleveringsformulier en ontvangt alle documenten. We registreren de installatie bij de fabrikant voor garantieactivatie. Na 2 weken bellen we voor een tevredenheidsmeting en beantwoording van eventuele vragen. U heeft daarna direct contact met ons voor eventuele service of onderhoud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor een Airco in uw Woonkamer?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Vraag nu een gratis offerte aan en ontdek wat een professionele airco installatie voor uw wooncomfort kan betekenen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
                <Phone className="h-6 w-6 mr-2" />
                Gratis Offerte Aanvragen
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
              Veelgestelde Vragen over Airco Installatie Woonkamer
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
              Gerelateerde Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seo/pillar-1-installatie-services/airco-installatie-slaapkamer" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Airco Installatie Slaapkamer</h3>
                <p className="text-gray-600 mb-4">Fluisterstille airco voor optimale nachtrust</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/seo/pillar-1-installatie-services/multi-split-airco-installatie" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-split Airco</h3>
                <p className="text-gray-600 mb-4">Meerdere ruimtes koelen met één buitenunit</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/aircos" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Alle Airco Merken</h3>
                <p className="text-gray-600 mb-4">Vergelijk Daikin, Mitsubishi, LG en meer</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoInstallatieWoonkamer;
