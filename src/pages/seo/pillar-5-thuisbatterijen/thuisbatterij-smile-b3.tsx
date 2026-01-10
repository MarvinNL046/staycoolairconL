import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, Shield, Euro, Zap, TrendingUp, Phone, Calculator, Award, ThermometerSun } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const ThuisbatterijSmileB3Page = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaESS SMILE-B3' }
  ];

  const usps = [
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Compact Systeem",
      description: "Slechts 2,9 kWh capaciteit - ideaal voor kleine huishoudens en starters"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "5 kW Omvormer",
      description: "Ingebouwde hybride omvormer voor optimale zonnepanelen integratie"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Laagste Investering",
      description: "Meest betaalbare AlphaESS systeem met snelle terugverdientijd"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Garantie",
      description: "Premium garantie op batterij en omvormer voor zorgeloos gebruik"
    }
  ];

  const specifications = [
    { label: "Batterijcapaciteit", value: "2,9 kWh" },
    { label: "Omvormer vermogen", value: "5 kW" },
    { label: "Type batterij", value: "LiFePO4 (lithium ijzer fosfaat)" },
    { label: "Ontlaaddiepte (DoD)", value: "90%" },
    { label: "Rendement", value: " meer dan 95%" },
    { label: "Garantie", value: "10 jaar" },
    { label: "Afmetingen", value: "440 x 120 x 600 mm" },
    { label: "Gewicht", value: "35 kg" },
    { label: "Geluidsproductie", value: " minder dan 25 dB" },
    { label: "Levensduur", value: "6000+ cycli" }
  ];

  const faqs = [
    {
      question: "Voor wie is de AlphaESS SMILE-B3 geschikt?",
      answer: "De SMILE-B3 is ideaal voor starters met zonnepanelen, kleine huishoudens (1-2 personen), en eigenaren die willen beginnen met energieopslag zonder grote investering. Perfect voor huishoudens met een jaarverbruik tot 2500 kWh."
    },
    {
      question: "Hoeveel kan ik besparen met de SMILE-B3?",
      answer: "Gemiddeld bespaart u €300-500 per jaar door uw zelf opgewekte energie op te slaan en te gebruiken in plaats van terug te leveren aan het net. Bij huidige elektriciteitsprijzen verdient de investering zich terug in 5-7 jaar."
    },
    {
      question: "Kan ik de SMILE-B3 later uitbreiden?",
      answer: "Nee, de SMILE-B3 is een stand-alone systeem dat niet uitbreidbaar is. Heeft u meer capaciteit nodig? Overweeg dan de SMILE5 (5 kWh) of SMILE-T10 (10 kWh) die wel modulair uitbreidbaar zijn."
    },
    {
      question: "Hoeveel ruimte heb ik nodig voor installatie?",
      answer: "De SMILE-B3 is zeer compact met afmetingen van slechts 44 x 12 x 60 cm. U heeft ongeveer 0,5 m² wandruimte nodig in meterkast, berging, garage of schuur. Het systeem is vrijwel geruisloos ( minder dan 25 dB)."
    },
    {
      question: "Werkt de SMILE-B3 ook bij stroomuitval?",
      answer: "Ja, met de optionele backup-functie blijft u stroom hebben bij netuitval. De batterij schakelt binnen milliseconden over naar back-up modus, zodat uw essentiële apparaten (koelkast, verlichting, internet) blijven werken."
    },
    {
      question: "Hoelang gaat een SMILE-B3 batterij mee?",
      answer: "De LiFePO4 batterij heeft een levensduur van 6000+ laadcycli bij 90% DoD. Dit komt neer op minimaal 15-20 jaar gebruik. AlphaESS geeft 10 jaar volledige garantie op batterij en omvormer."
    },
    {
      question: "Kan ik BTW terugvragen over de SMILE-B3?",
      answer: "Ja! Sinds 1 januari 2023 betaalt u 0% BTW op thuisbatterijen die gecombineerd worden met zonnepanelen. Dit scheelt u 21% op de aanschafprijs, wat de terugverdientijd aanzienlijk verkort."
    },
    {
      question: "Wat is het verschil tussen SMILE-B3 en SMILE5?",
      answer: "De SMILE-B3 heeft 2,9 kWh capaciteit en is niet uitbreidbaar, terwijl de SMILE5 start met 5 kWh en modulair uitbreidbaar is tot 30 kWh. De B3 is ideaal voor kleine huishoudens, de SMILE5 voor groeiende energiebehoeften."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaESS SMILE-B3 Thuisbatterij Limburg | Compact 2,9 kWh Systeem | StayCool Airco"
        description="AlphaESS SMILE-B3 thuisbatterij ✓ Compact 2,9 kWh systeem ✓ 5 kW omvormer ✓ 10 jaar garantie ✓ Laagste investering ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@type": "Product",
          name: "AlphaESS SMILE-B3 Thuisbatterij",
          description: "Compact energieopslagsysteem van 2,9 kWh met 5 kW hybride omvormer. Ideaal voor kleine huishoudens en starters met zonnepanelen.",
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
            ratingValue: "4.8",
            reviewCount: "127"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AlphaESS SMILE-B3 Thuisbatterij: Compact 2,9 kWh Energieopslagsysteem
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Start met energieopslag zonder grote investering. De SMILE-B3 is het meest compacte AlphaESS systeem met 2,9 kWh capaciteit en ingebouwde 5 kW hybride omvormer - perfect voor kleine huishoudens en starters.
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
              <Award className="h-5 w-5 mr-2" />
              <span>10 Jaar Garantie</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Premium Kwaliteit</span>
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
              Waarom Kiezen voor de SMILE-B3?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Het meest betaalbare AlphaESS systeem voor optimaal energiebeheer
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
              Wat is de AlphaESS SMILE-B3 Thuisbatterij?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De <strong>AlphaESS SMILE-B3</strong> is een compact energieopslagsysteem met een capaciteit van <strong>2,9 kWh</strong> en een ingebouwde <strong>5 kW hybride omvormer</strong>. Dit systeem is speciaal ontworpen voor kleine huishoudens, starters met zonnepanelen, en eigenaren die willen beginnen met energieopslag zonder grote investering.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Met de SMILE-B3 slaat u de energie op die uw zonnepanelen overdag opwekken, om deze 's avonds en 's nachts te gebruiken wanneer de zon niet schijnt. Dit maximaliseert uw eigen verbruik van duurzame energie en minimaliseert uw afhankelijkheid van het elektriciteitsnet. Het resultaat? <strong>Lagere energierekeningen</strong> en <strong>meer onafhankelijkheid</strong>.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Technische Specificaties SMILE-B3
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
              Voor Wie is de SMILE-B3 Geschikt?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De AlphaESS SMILE-B3 is de perfecte keuze voor verschillende situaties en gebruikersprofielen:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ideaal voor:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Kleine huishoudens (1-2 personen)</strong> met een jaarverbruik tot 2500 kWh</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Starters met zonnepanelen</strong> die willen beginnen met energieopslag</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Appartementen en studio's</strong> met beperkte ruimte</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Vakantiewoningen</strong> voor basis energiebeheer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Budgetbewuste eigenaren</strong> die willen besparen zonder grote investering</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Voordelen van de SMILE-B3 Thuisbatterij
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Meest Betaalbare AlphaESS Systeem</h3>
            <p className="text-lg text-gray-600 mb-6">
              De SMILE-B3 is het instapmodel in het AlphaESS assortiment en biedt de <strong>laagste investering</strong> voor hoogwaardige energieopslag. Met de huidige 0% BTW regeling voor thuisbatterijen is de aanschaf nog voordeliger geworden. De terugverdientijd ligt tussen de <strong>5 en 7 jaar</strong>, afhankelijk van uw energieverbruik en elektriciteitsprijzen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Compact en Ruimtebesparend</h3>
            <p className="text-lg text-gray-600 mb-6">
              Met afmetingen van slechts <strong>44 x 12 x 60 cm</strong> en een gewicht van <strong>35 kg</strong> is de SMILE-B3 uitermate compact. Het systeem past gemakkelijk in een meterkast, berging, garage of schuur. U heeft slechts ongeveer <strong>0,5 m² wandruimte</strong> nodig voor installatie. Bovendien is het systeem vrijwel geruisloos ( minder dan 25 dB), vergelijkbaar met het geluid van fluisteren.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. All-in-One Systeem met 5 kW Omvormer</h3>
            <p className="text-lg text-gray-600 mb-6">
              De SMILE-B3 is een <strong>all-in-one oplossing</strong> met een ingebouwde 5 kW hybride omvormer. Dit betekent dat u geen aparte omvormer hoeft aan te schaffen, wat kosten bespaart en de installatie vereenvoudigt. De omvormer beheert automatisch de energiestromen tussen zonnepanelen, batterij en elektriciteitsnet voor optimale prestaties.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Premium LiFePO4 Batterijtechnologie</h3>
            <p className="text-lg text-gray-600 mb-6">
              De SMILE-B3 maakt gebruik van <strong>LiFePO4 (lithium ijzer fosfaat)</strong> batterijtechnologie, die bekend staat om zijn veiligheid, lange levensduur en stabiliteit. Deze batterijchemie biedt:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>6000+ laadcycli</strong> bij 90% ontlaaddiepte (DoD)</li>
              <li><strong>Hoge veiligheid</strong> - geen risico op thermische runaway</li>
              <li><strong>Stabiele prestaties</strong> in verschillende temperaturen</li>
              <li><strong>Lange levensduur</strong> van 15-20 jaar</li>
              <li><strong>Hoog rendement</strong> van  meer dan 95%</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. 10 Jaar Volledige Garantie</h3>
            <p className="text-lg text-gray-600 mb-6">
              AlphaESS biedt <strong>10 jaar volledige garantie</strong> op zowel de batterij als de omvormer. Dit geeft u de zekerheid dat uw investering goed beschermd is. De garantie dekt materiaaldefecten, fabricagefouten en prestatievermindering. Na 10 jaar heeft de batterij nog minimaal 70% van zijn oorspronkelijke capaciteit.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Hoe Werkt de SMILE-B3?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Het systeem werkt volgens een intelligent energiemanagementsysteem dat automatisch de beste beslissingen neemt:
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Overdag: Laden</h4>
                    <p className="text-gray-600">
                      Uw zonnepanelen wekken energie op. Het overtollige vermogen wordt opgeslagen in de SMILE-B3 batterij. Directe verbruikers in huis krijgen voorrang.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">'s Avonds: Ontladen</h4>
                    <p className="text-gray-600">
                      Als de zon ondergaat en uw verbruik stijgt, levert de batterij automatisch energie aan uw huis. U gebruikt uw eigen opgeslagen energie in plaats van dure netstroom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Intelligente Netinteractie</h4>
                    <p className="text-gray-600">
                      Als de batterij vol is, wordt overtollige energie teruggeleverd aan het net. Is de batterij leeg en produceert u geen zonne-energie? Dan wordt automatisch stroom afgenomen van het net.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Optionele Back-up Functie</h4>
                    <p className="text-gray-600">
                      Met de back-up optie schakelt de batterij binnen milliseconden over bij stroomuitval. Uw essentiële apparaten blijven gewoon werken.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Besparingen en Terugverdientijd
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De SMILE-B3 helpt u aanzienlijk te besparen op uw energierekening. Laten we een rekenvoorbeeld bekijken voor een gemiddeld klein huishouden:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Rekenvoorbeeld Besparing:</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Jaarverbruik:</strong> 2000 kWh</li>
                <li><strong>Zonnepanelen productie:</strong> 2500 kWh/jaar</li>
                <li><strong>Zonder batterij eigen verbruik:</strong> 30% (750 kWh)</li>
                <li><strong>Met SMILE-B3 eigen verbruik:</strong> 70% (1400 kWh)</li>
                <li><strong>Extra eigen verbruik door batterij:</strong> 650 kWh</li>
                <li><strong>Vermeden netinkoop (€0,40/kWh):</strong> €260/jaar</li>
                <li><strong>Vermeden teruglevering verlies (€0,10/kWh):</strong> €65/jaar</li>
                <li><strong>Totale besparing:</strong> €325/jaar</li>
              </ul>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              Met een investering van circa €3.500-4.000 (inclusief installatie, na BTW teruggave) ligt de terugverdientijd op ongeveer <strong>5-7 jaar</strong>. Gezien de 10 jaar garantie en verwachte levensduur van 15-20 jaar, levert de SMILE-B3 gedurende zijn levensduur een aanzienlijk financieel voordeel op.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om te Starten met de SMILE-B3?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu een gratis offerte aan en ontdek hoeveel u kunt besparen met de meest betaalbare AlphaESS thuisbatterij
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Offerte Aanvragen
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
            Veelgestelde Vragen over de SMILE-B3
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

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Overweeg Ook Deze AlphaESS Modellen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE5</h3>
              <p className="text-gray-600 mb-4">
                Modulair uitbreidbaar systeem vanaf 5 kWh tot 30 kWh. Ideaal voor groeiende energiebehoeften en grotere huishoudens.
              </p>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Meer over SMILE5 →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-T10</h3>
              <p className="text-gray-600 mb-4">
                Grootschalig opslagsysteem van 10 kWh met 3-fase ondersteuning. Perfect voor grote huishoudens en zakelijk gebruik.
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
            Profiteer van 0% BTW op Thuisbatterijen
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Bespaar 21% op uw SMILE-B3 aanschaf. Onze specialisten helpen u met subsidies, BTW teruggave en optimale configuratie.
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
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Euro className="h-6 w-6 mr-2" />
              BTW Teruggave Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijSmileB3Page;
