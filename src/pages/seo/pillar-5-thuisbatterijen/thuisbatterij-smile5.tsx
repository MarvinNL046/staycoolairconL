import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, Shield, Euro, Zap, TrendingUp, Phone, Calculator, Award, Layers } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const ThuisbatterijSmile5Page = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaESS SMILE5' }
  ];

  const usps = [
    {
      icon: <Layers className="h-12 w-12 text-yellow-500" />,
      title: "Modulair Uitbreidbaar",
      description: "Start met 5 kWh en breid uit tot 30 kWh naarmate uw behoefte groeit"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "8,2 kW Omvormer",
      description: "Krachtige hybride omvormer voor optimale zonnepanelen integratie"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Toekomstbestendig",
      description: "Groeit mee met uw energiebehoefte - toevoegen batterijmodules zonder vervanging"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Garantie",
      description: "Premium garantie op alle componenten voor zorgeloos gebruik"
    }
  ];

  const specifications = [
    { label: "Basis capaciteit", value: "5 kWh" },
    { label: "Uitbreidbaar tot", value: "30 kWh (6 modules)" },
    { label: "Omvormer vermogen", value: "8,2 kW" },
    { label: "Type batterij", value: "LiFePO4 (lithium ijzer fosfaat)" },
    { label: "Ontlaaddiepte (DoD)", value: "95%" },
    { label: "Rendement", value: " meer dan 97%" },
    { label: "Garantie", value: "10 jaar" },
    { label: "Afmetingen per module", value: "520 x 470 x 135 mm" },
    { label: "Gewicht per module", value: "47 kg" },
    { label: "Geluidsproductie", value: " minder dan 30 dB" },
    { label: "Levensduur", value: "6000+ cycli" },
    { label: "Parallel koppelbaar", value: "Ja, tot 3 systemen" }
  ];

  const expansionOptions = [
    {
      modules: "1 module",
      capacity: "5 kWh",
      suitable: "Kleine huishoudens, starters",
      dailyUsage: "Tot 15 kWh/dag"
    },
    {
      modules: "2 modules",
      capacity: "10 kWh",
      suitable: "Gemiddelde huishoudens (2-3 personen)",
      dailyUsage: "15-30 kWh/dag"
    },
    {
      modules: "3 modules",
      capacity: "15 kWh",
      suitable: "Grote huishoudens (4+ personen)",
      dailyUsage: "30-45 kWh/dag"
    },
    {
      modules: "4-6 modules",
      capacity: "20-30 kWh",
      suitable: "Zeer grote huishoudens, elektrisch rijden",
      dailyUsage: "45+ kWh/dag"
    }
  ];

  const faqs = [
    {
      question: "Voor wie is de AlphaESS SMILE5 geschikt?",
      answer: "De SMILE5 is ideaal voor huishoudens die willen starten met energieopslag én de mogelijkheid willen behouden om later uit te breiden. Perfect voor gemiddelde tot grote huishoudens, gezinnen die elektrisch gaan rijden, of eigenaren die hun energieonafhankelijkheid willen maximaliseren zonder direct een groot systeem aan te schaffen."
    },
    {
      question: "Hoe werkt de modulaire uitbreiding?",
      answer: "De SMILE5 werkt met stapelbare 5 kWh batterijmodules. U start met 1 module (5 kWh) en kunt later eenvoudig extra modules toevoegen tot maximaal 6 modules (30 kWh). De modules worden fysiek op elkaar gestapeld en elektrisch met elkaar verbonden. De uitbreiding kan op elk moment gebeuren zonder het bestaande systeem te vervangen."
    },
    {
      question: "Wat zijn de kosten van uitbreiding?",
      answer: "Een extra 5 kWh batterijmodule kost circa €1.800-2.200 (na BTW teruggave). De installatie van een extra module is relatief eenvoudig en kost ongeveer €200-400. Dit maakt uitbreiden veel voordeliger dan een volledig nieuw systeem aanschaffen."
    },
    {
      question: "Hoeveel kan ik besparen met de SMILE5?",
      answer: "Met een basis 5 kWh systeem bespaart u gemiddeld €400-600 per jaar. Bij volledige uitbreiding naar 30 kWh kan de besparing oplopen tot €1.500-2.000 per jaar, vooral als u elektrisch rijdt of warmtepompen gebruikt. De terugverdientijd ligt tussen 6-9 jaar."
    },
    {
      question: "Kan ik de SMILE5 combineren met een elektrische auto?",
      answer: "Absoluut! De SMILE5 is bij uitstek geschikt voor huishoudens met een elektrische auto. Met 10-15 kWh capaciteit kunt u dagelijks uw auto opladen met zelf opgewekte zonne-energie. Voor optimale resultaten raden we aan minimaal 2 modules (10 kWh) te installeren bij gebruik van een EV."
    },
    {
      question: "Hoe lang duurt de installatie van een SMILE5?",
      answer: "De installatie van het basissysteem duurt ongeveer 4-6 uur. Dit omvat montage van batterijmodule(s), aansluiting van de omvormer, configuratie van het systeem en uitleg over de bediening. Bij latere uitbreiding met extra modules duurt de installatie slechts 1-2 uur."
    },
    {
      question: "Werkt de SMILE5 ook tijdens stroomuitval?",
      answer: "Ja, met de standaard geleverde backup-functie blijft u automatisch stroom hebben bij netuitval. De SMILE5 schakelt binnen 20 milliseconden over naar back-up modus. Met 5 kWh kunt u circa 4-6 uur uw essentiële apparaten gebruiken, met 10 kWh ongeveer 8-12 uur."
    },
    {
      question: "Wat is het verschil tussen SMILE5 en SMILE-B3?",
      answer: "De SMILE-B3 (2,9 kWh) is een compact, niet-uitbreidbaar instapsysteem met 5 kW omvormer. De SMILE5 (5-30 kWh) is modulair uitbreidbaar met een krachtigere 8,2 kW omvormer. Kies de B3 voor kleine huishoudens met vast verbruik, en de SMILE5 als u flexibiliteit en toekomstige groei wilt."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaESS SMILE5 Modulaire Thuisbatterij Limburg | 5-30 kWh Uitbreidbaar | StayCool Airco"
        description="AlphaESS SMILE5 thuisbatterij ✓ Modulair 5-30 kWh ✓ 8,2 kW omvormer ✓ Toekomstbestendig ✓ 10 jaar garantie ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@type": "Product",
          name: "AlphaESS SMILE5 Modulaire Thuisbatterij",
          description: "Modulair uitbreidbaar energieopslagsysteem van 5 tot 30 kWh met 8,2 kW hybride omvormer. Groeit mee met uw energiebehoefte.",
          brand: {
            "@type": "Brand",
            name: "AlphaESS"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "EUR",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "213"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AlphaESS SMILE5: Modulaire Thuisbatterij 5-30 kWh
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Toekomstbestendig energieopslagsysteem dat meegroeien met uw behoefte. Start met 5 kWh en breid eenvoudig uit tot 30 kWh zonder uw bestaande systeem te vervangen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Offerte Aanvragen
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw Besparing
            </Link>
          </div>

          <div className="flex items-center gap-4 text-yellow-900">
            <div className="flex items-center">
              <Layers className="h-5 w-5 mr-2" />
              <span>Modulair Uitbreidbaar</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>10 Jaar Garantie</span>
            </div>
            <div className="flex items-center">
              <Euro className="h-5 w-5 mr-2" />
              <span>0% BTW Tarief</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Kiezen voor de SMILE5?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Het meest flexibele AlphaESS systeem dat meegroeit met uw leven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat is de AlphaESS SMILE5 Thuisbatterij?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De <strong>AlphaESS SMILE5</strong> is een innovatief modulair energieopslagsysteem dat u de <strong>ultieme flexibiliteit</strong> biedt. U start met een capaciteit van <strong>5 kWh</strong> en kunt later eenvoudig uitbreiden tot <strong>30 kWh</strong> door extra batterijmodules toe te voegen. Elk systeem is uitgerust met een krachtige <strong>8,2 kW hybride omvormer</strong> die uw zonnepanelen, batterij en elektriciteitsnet intelligent beheert.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Dit "pay-as-you-grow" concept maakt de SMILE5 perfect voor huishoudens waarvan de energiebehoefte in de toekomst kan veranderen - bijvoorbeeld door gezinsuitbreiding, aanschaf van een elektrische auto, of installatie van een warmtepomp. In plaats van nu al te investeren in overcapaciteit, <strong>groeit uw systeem mee met uw leven</strong>.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Technische Specificaties SMILE5
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-semibold text-gray-900">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Modulaire Uitbreiding: Hoe Werkt Het?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Het unieke aan de SMILE5 is het <strong>modulaire stapelsysteem</strong>. Elke batterijmodule levert 5 kWh opslagcapaciteit en kan eenvoudig worden toegevoegd zonder uw bestaande installatie te vervangen:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uitbreidingsopties:</h3>
              <div className="space-y-4">
                {expansionOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{option.modules}</h4>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {option.capacity}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">
                      <strong>Geschikt voor:</strong> {option.suitable}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Dagelijks verbruik:</strong> {option.dailyUsage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Voordelen van de SMILE5
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Toekomstbestendig: Groeit Mee met Uw Behoefte</h3>
            <p className="text-lg text-gray-600 mb-6">
              Het grootste voordeel van de SMILE5 is dat u <strong>niet hoeft te raden</strong> hoeveel capaciteit u over 5 of 10 jaar nodig heeft. Start met wat u nu nodig heeft en breid later uit wanneer:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>U een <strong>elektrische auto</strong> aanschaft</li>
              <li>Uw huishouden groeit met extra <strong>gezinsleden</strong></li>
              <li>U een <strong>warmtepomp</strong> of airco installeert</li>
              <li>U meer <strong>zonnepanelen</strong> plaatst</li>
              <li>U uw <strong>energieonafhankelijkheid</strong> wilt maximaliseren</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Lagere Initiële Investering</h3>
            <p className="text-lg text-gray-600 mb-6">
              In plaats van direct €12.000-15.000 te investeren in een 30 kWh systeem, start u met de SMILE5 voor ongeveer <strong>€5.500-6.500</strong> (na BTW teruggave). Dit maakt hoogwaardige energieopslag toegankelijker en verlaagt de financiële drempel. De terugverdientijd van het basissysteem ligt rond de <strong>7-9 jaar</strong>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Krachtige 8,2 kW Omvormer</h3>
            <p className="text-lg text-gray-600 mb-6">
              De ingebouwde 8,2 kW hybride omvormer is aanzienlijk krachtiger dan de 5 kW omvormer in de SMILE-B3. Dit biedt verschillende voordelen:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Meer gelijktijdig vermogen:</strong> Meerdere apparaten tegelijk gebruiken</li>
              <li><strong>Sneller laden:</strong> Batterij sneller volladen bij zonnige dagen</li>
              <li><strong>Sneller ontladen:</strong> Hogere piekbelasting mogelijk (inductie koken, EV laden)</li>
              <li><strong>Groter PV-systeem:</strong> Tot 12 kWp zonnepanelen aansluiten</li>
              <li><strong>Toekomstbestendig:</strong> Voldoende vermogen voor uitgebreid systeem</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Premium LiFePO4 Batterijtechnologie</h3>
            <p className="text-lg text-gray-600 mb-6">
              Net als de andere AlphaESS modellen gebruikt de SMILE5 <strong>LiFePO4 (lithium ijzer fosfaat)</strong> batterijtechnologie met de volgende kenmerken:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>6000+ laadcycli</strong> bij 95% ontlaaddiepte (DoD) - hoger dan B3</li>
              <li><strong>Hoog rendement:</strong>  meer dan 97% omzettingsefficiëntie</li>
              <li><strong>Veilig:</strong> Thermisch stabiel, geen ontploffingsgevaar</li>
              <li><strong>Lange levensduur:</strong> 15-20 jaar</li>
              <li><strong>Milieuvriendelijk:</strong> Recycleerbaar en giftvrij</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Standaard Backup-Functie</h3>
            <p className="text-lg text-gray-600 mb-6">
              Anders dan bij veel concurrenten is de <strong>backup-functie standaard</strong> inbegrepen bij de SMILE5. Bij stroomuitval schakelt het systeem binnen 20 milliseconden over naar autonome modus. Met 5 kWh kunt u uw essentiële apparaten ongeveer <strong>4-6 uur</strong> gebruiken, met 10 kWh ongeveer <strong>8-12 uur</strong>, en met 15+ kWh kunt u zelfs meerdere dagen overbruggen.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Toepassingen en Gebruiksscenario's
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario 1: Start Klein, Groei Later</h3>
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <p className="text-gray-600 mb-3">
                <strong>Situatie:</strong> U heeft net zonnepanelen laten installeren en wilt beginnen met energieopslag, maar weet niet zeker hoeveel capaciteit u nodig heeft.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Oplossing:</strong> Start met 1 module (5 kWh) voor ongeveer €5.500. Monitor uw verbruik en opslag gedurende 6-12 maanden. Voeg vervolgens modules toe op basis van werkelijk gebruik.
              </p>
              <p className="text-gray-600">
                <strong>Resultaat:</strong> Geen overcapaciteit, optimale terugverdientijd, flexibiliteit voor de toekomst.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario 2: Elektrisch Rijden</h3>
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <p className="text-gray-600 mb-3">
                <strong>Situatie:</strong> U heeft nu geen EV maar overweegt er binnenkort één aan te schaffen.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Oplossing:</strong> Start met 2 modules (10 kWh) voor dagelijks huishoudelijk gebruik. Wanneer u uw EV koopt, breidt u uit naar 3-4 modules (15-20 kWh) om ook uw auto met zonne-energie te laden.
              </p>
              <p className="text-gray-600">
                <strong>Resultaat:</strong> Rijd volledig op zonne-energie voor slechts €0,05-0,08/kWh in plaats van €0,40+ aan de laadpaal.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenario 3: Maximale Zelfvoorziening</h3>
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <p className="text-gray-600 mb-3">
                <strong>Situatie:</strong> U wilt zo onafhankelijk mogelijk worden van het elektriciteitsnet.
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Oplossing:</strong> Start met 3 modules (15 kWh) en breid geleidelijk uit naar 5-6 modules (25-30 kWh). Combineer met een ruim PV-systeem (8-12 kWp).
              </p>
              <p className="text-gray-600">
                <strong>Resultaat:</strong> 80-95% zelfvoorzienend, minimale netwerkkosten, beschermd tegen prijsstijgingen.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Besparingen en Return on Investment
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De besparingen met een SMILE5 systeem zijn afhankelijk van uw configuratie en energieverbruik:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Rekenvoorbeelden Besparing:</h4>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">5 kWh (1 module) - Klein huishouden</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Jaarverbruik: 3000 kWh</li>
                    <li>Extra eigen verbruik: 900 kWh/jaar</li>
                    <li>Besparing: €450/jaar</li>
                    <li>Investering: €5.500 (na BTW)</li>
                    <li>Terugverdientijd: 12 jaar</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">10 kWh (2 modules) - Gemiddeld huishouden</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Jaarverbruik: 4500 kWh</li>
                    <li>Extra eigen verbruik: 1600 kWh/jaar</li>
                    <li>Besparing: €750/jaar</li>
                    <li>Investering: €7.500 (na BTW)</li>
                    <li>Terugverdientijd: 10 jaar</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">20 kWh (4 modules) - Groot huishouden + EV</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Jaarverbruik: 8000 kWh (incl. EV)</li>
                    <li>Extra eigen verbruik: 3500 kWh/jaar</li>
                    <li>Besparing: €1.600/jaar</li>
                    <li>Investering: €11.500 (na BTW)</li>
                    <li>Terugverdientijd: 7 jaar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ontdek Welke SMILE5 Configuratie Bij U Past
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag een gratis adviesgesprek aan en ontvang een persoonlijk configuratievoorstel op basis van uw energiebehoefte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over de SMILE5
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Vergelijk AlphaESS Modellen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-B3</h3>
              <p className="text-gray-600 mb-4">
                Compact 2,9 kWh systeem met 5 kW omvormer. Niet uitbreidbaar, laagste investering.
              </p>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-b3"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Meer over SMILE-B3 →
              </Link>
            </div>

            <div className="bg-yellow-50 rounded-lg p-8 shadow-lg border-2 border-yellow-400">
              <div className="flex items-center justify-between mb-4">
                <Battery className="h-12 w-12 text-yellow-500" />
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  POPULAIR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE5</h3>
              <p className="text-gray-600 mb-4">
                Modulair 5-30 kWh systeem met 8,2 kW omvormer. Uitbreidbaar, toekomstbestendig.
              </p>
              <span className="text-yellow-600 font-semibold">
                U bekijkt deze pagina
              </span>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-T10</h3>
              <p className="text-gray-600 mb-4">
                Grootschalig 10 kWh systeem met 3-fase. Voor grote huishoudens en zakelijk gebruik.
              </p>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Meer over SMILE-T10 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Vandaag met de SMILE5 - Groei Morgen
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Profiteer van 0% BTW en modulaire flexibiliteit. Onze specialisten adviseren u over de optimale startconfiguratie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Uw Besparing
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <TrendingUp className="h-6 w-6 mr-2" />
              Terugverdientijd Berekenen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijSmile5Page;
