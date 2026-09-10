import { Link } from 'react-router-dom';
import { Battery,Calculator,Shield,TrendingUp,Sun,Zap,Euro,Phone,BookOpen } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import LazyImage from '../components/LazyImage';

export default function Thuisbatterijen() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen' }
  ];

  const voordelen = [
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      titel: "situatieafhankelijke besparing",
      beschrijving: "Bespaar op uw energierekening door slim energie op te slaan en te gebruiken"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      titel: "garantie volgens offerte",
      beschrijving: "AlphaESS biedt garantie volgens offerte op hun thuisbatterijen"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      titel: "Inzicht in de kosten",
      beschrijving: "Vergelijk uw investering met een scenario op basis van uw eigen verbruik"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      titel: "Onafhankelijk",
      beschrijving: "Wordt minder afhankelijk van het energienet en prijsschommelingen"
    }
  ];

  const modellen = [
    {
      naam: "SMILE-B3",
      capaciteit: "Afhankelijk van de configuratie",
      vermogen: "Zie de aangeboden uitvoering",
      ideaalVoor: "Passend advies op basis van uw verbruik",
      afbeelding: "/images/products/thuisbatterij/alphaess/alpha-ess-thuisbatterij-klein-groot1000x1000.webp"
    },
    {
      naam: "SMILE5",
      capaciteit: "Afhankelijk van de configuratie",
      vermogen: "Zie de aangeboden uitvoering",
      ideaalVoor: "Passend advies op basis van uw verbruik",
      afbeelding: "/images/products/thuisbatterij/alphaess/alpha-ess-thuisbatterij-3580x3580.webp"
    },
    {
      naam: "SMILE-T10",
      capaciteit: "Afhankelijk van de configuratie",
      vermogen: "Zie de aangeboden uitvoering",
      ideaalVoor: "Passend advies op basis van uw verbruik",
      afbeelding: "/images/products/thuisbatterij/alphaess/alpha-ess-thuisbatterij-klein-groot1000x1000.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="AlphaESS Thuisbatterijen Limburg | Energieopslag | StayCool Airco"
        description="Bekijk AlphaESS thuisbatterijen voor uw woning in Limburg. Vergelijk de uitvoering, installatie en kosten en reken uw eigen scenario door."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="text-gray-900/70 mb-4" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AlphaESS Thuisbatterijen
              </h1>
              <p className="text-xl mb-6 text-gray-800">

                Sla uw eigen energie op en Bekijk de mogelijke besparing op energierekening
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/thuisbatterij-calculator"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Bereken uw besparing
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Gratis advies
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold">Uw scenario</p>
                  <p className="text-sm">Terugverdientijd</p>
                </div>
                <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold">Per uitvoering</p>
                  <p className="text-sm">Garantie</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <LazyImage
                src="/images/products/thuisbatterij/alphaess/alpha-ess-thuisbatterij-3580x3580.webp"
                alt="AlphaESS thuisbatterij kopen - Energieopslag met garantie volgens offerte StayCool Airco Limburg"
                className="rounded-2xl shadow-2xl w-full"
                width="100%"
                height="100%"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <Battery className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="font-bold">Officieel dealer</p>
                <p className="text-sm text-gray-600">AlphaESS Limburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Waarom een AlphaESS Thuisbatterij?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {voordeel.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{voordeel.titel}</h3>
                <p className="text-gray-600">{voordeel.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modellen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            AlphaESS Modellen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {modellen.map((model, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                  <img
                    src={model.afbeelding}
                    alt={`${model.naam} AlphaESS thuisbatterij ${model.capaciteit} - ${model.ideaalVoor} energieopslag`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{model.naam}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Capaciteit:</span>
                      <span className="font-semibold">{model.capaciteit}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Vermogen:</span>
                      <span className="font-semibold">{model.vermogen}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    <span className="font-medium">Ideaal voor:</span><br />
                    {model.ideaalVoor}
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products/alphaess"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Bekijk alle AlphaESS modellen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hoe werkt het Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hoe werkt een thuisbatterij?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sun className="h-6 w-6 text-yellow-500" />
                  Met zonnepanelen
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Overdag slaat u overtollige zonne-energie op</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>'s Avonds gebruikt u uw eigen opgeslagen energie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Minder teruglevering tegen lage vergoeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Gebruik een deel van uw zonneoverschot op een later moment</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  Zonder zonnepanelen
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Laden tijdens daluren (lage tarieven)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Gebruiken tijdens piekuren (hoge tarieven)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Profiteer van dynamische energiecontracten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Backup bij stroomuitval mogelijk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTW Teruggave Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">21% BTW Terugvragen</h2>
              <p className="text-gray-600 mb-6">
                Als u zonnepanelen heeft of gaat plaatsen, kunt u de BTW over uw
                thuisbatterij terugvragen. AlphaESS helpt u kosteloos met de complete
                BTW-teruggave procedure.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  Bespaar tot €3.780 BTW
                </p>
                <p className="text-sm text-gray-600">
                  Op een €18.000 thuisbatterij systeem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klaar om te besparen met een thuisbatterij?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Onze experts helpen u graag bij het kiezen van de juiste thuisbatterij
            voor uw situatie. Vraag vandaag nog gratis advies aan!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/thuisbatterij-calculator"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken uw besparing
            </Link>
            <Link
              to="/kennisbank/thuisbatterijen"
              className="inline-flex items-center px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Kennisbank Thuisbatterijen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Veelgestelde vragen
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Hoeveel kost een thuisbatterij?
                </summary>
                <p className="mt-4 text-gray-600">
                  De prijs hangt af van de exacte configuratie en installatie. Vraag een totaalprijs inclusief btw aan. Btw-teruggave is alleen onder voorwaarden mogelijk. Bereken eventueel voordeel met uw eigen verbruik; er is geen vaste terugverdientijd.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Werkt een thuisbatterij ook zonder zonnepanelen?
                </summary>
                <p className="mt-4 text-gray-600">
                  Ja, een thuisbatterij werkt uitstekend zonder zonnepanelen.
                  U laadt de batterij op tijdens daluren (lage tarieven) en
                  gebruikt de energie tijdens piekuren (hoge tarieven). Dit is
                  vooral interessant met een dynamisch energiecontract.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Hoe lang gaat een AlphaESS thuisbatterij mee?
                </summary>
                <p className="mt-4 text-gray-600">

                  AlphaESS geeft garantie volgens offerte op hun batterijen.
                  Controleer de kalenderduur, cycli en resterende capaciteit in de voorwaarden van uw exacte uitvoering. De gebruiksduur hangt ook af van belasting en omstandigheden.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Kan ik subsidie krijgen voor een thuisbatterij?
                </summary>
                <p className="mt-4 text-gray-600">
                  Er is momenteel geen landelijke subsidie voor thuisbatterijen.
                  Een losse particuliere batterij valt buiten de ISDE. Zonnepanelen bezitten is geen voldoende voorwaarde voor btw-teruggave. Controleer daarvoor de Belastingdienst en voor een eventuele lokale regeling uw eigen gemeente.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}