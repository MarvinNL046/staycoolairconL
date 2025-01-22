import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { ThermometerSun, Zap, Wifi, Volume2, Wind, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MitsubishiVsLgAirco = () => {
  const comparisonPoints = [
    {
      icon: ThermometerSun,
      title: "Prestaties",
      mitsubishi: {
        pros: ["Superieure SCOP/SEER waarden", "Uitstekende verwarmingsprestaties"],
        cons: ["Hogere aanschafprijs"]
      },
      lg: {
        pros: ["Goede prijs-kwaliteitverhouding", "Efficiënte koeling"],
        cons: ["Iets lagere SCOP waarden"]
      }
    },
    {
      icon: Wifi,
      title: "Smart Features",
      mitsubishi: {
        pros: ["MELCloud app integratie", "Uitgebreide programmeeropties"],
        cons: ["Complexere app interface"]
      },
      lg: {
        pros: ["ThinQ app met AI functionaliteit", "Intuïtieve bediening"],
        cons: ["Beperktere automatiseringsopties"]
      }
    },
    {
      icon: Volume2,
      title: "Geluidsniveau",
      mitsubishi: {
        pros: ["Zeer stil (19dB)", "Silent mode beschikbaar"],
        cons: ["Premium prijs voor stillere modellen"]
      },
      lg: {
        pros: ["Competitief geluidsniveau (21dB)", "Goede nachtmodus"],
        cons: ["Iets luider dan premium Mitsubishi"]
      }
    },
    {
      icon: Wind,
      title: "Luchtverdeling",
      mitsubishi: {
        pros: ["3D i-See sensor", "Geavanceerde luchtstroomregeling"],
        cons: ["Niet op alle modellen beschikbaar"]
      },
      lg: {
        pros: ["4-way swing", "Dual inverter technologie"],
        cons: ["Geen bewegingssensor op basismodellen"]
      }
    }
  ];

  const popularModels = [
    {
      brand: "Mitsubishi",
      models: [
        {
          name: "MSZ-AP",
          features: ["Betaalbaar", "Energiezuinig", "Basis smart functies"],
          price: "€1.000 - €1.500"
        },
        {
          name: "MSZ-EF",
          features: ["Design model", "Premium afwerking", "Zeer stil"],
          price: "€1.500 - €2.000"
        },
        {
          name: "MSZ-LN",
          features: ["Topmodel", "3D i-See sensor", "Plasma Quad Plus filter"],
          price: "€2.000 - €3.000"
        }
      ]
    },
    {
      brand: "LG",
      models: [
        {
          name: "Standard Plus",
          features: ["Basis model", "Dual Inverter", "WiFi Ready"],
          price: "€900 - €1.400"
        },
        {
          name: "Artcool",
          features: ["Design serie", "ThinQ app", "UV sterilisatie"],
          price: "€1.400 - €1.900"
        },
        {
          name: "Prestige Plus",
          features: ["Premium model", "Active Energy Control", "Ionizer"],
          price: "€1.800 - €2.500"
        }
      ]
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "vergelijking", title: "Directe Vergelijking" },
    { id: "modellen", title: "Populaire Modellen" },
    { id: "installatie", title: "Installatie & Onderhoud" },
    { id: "prijzen", title: "Prijsvergelijking" },
    { id: "conclusie", title: "Conclusie & Advies" }
  ];

  return (
    <ArticleLayout
      title="Mitsubishi vs LG Airco: Complete Vergelijking 2025"
      description="Uitgebreide vergelijking tussen Mitsubishi en LG airconditioners. Ontdek de verschillen in prestaties, functies en prijs om de beste keuze te maken voor jouw situatie."
      publishDate="2025-01-22"
      modifiedDate="2025-01-22"
      author="StayCool Airconditioning"
      tags={['Vergelijking', 'Mitsubishi', 'LG', 'Advies']}
    >
      <section className="prose prose-lg max-w-none">
        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Inhoudsopgave</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className="text-blue-600 hover:text-blue-800 no-underline hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <ThermometerSun className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-blue-900 mt-0 mb-2">Snelle Vergelijking</h3>
              <p className="m-0 text-blue-800">
                Mitsubishi blinkt uit in prestaties en innovatie, terwijl LG uitstekende 
                prijs-kwaliteitverhouding biedt met slimme features. Lees verder voor een 
                gedetailleerde analyse.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          Mitsubishi en LG behoren tot de meest populaire airco merken in Nederland. 
          Beide fabrikanten bieden hoogwaardige airconditioners, maar er zijn belangrijke 
          verschillen die je keuze kunnen beïnvloeden.
        </p>

        <h2 id="vergelijking">Directe Vergelijking</h2>
        <p>
          Laten we de belangrijkste aspecten van beide merken vergelijken:
        </p>

        <div className="space-y-8 my-12">
          {comparisonPoints.map((point) => (
            <div 
              key={point.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <point.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {point.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Mitsubishi</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-green-700 text-sm font-medium mb-2">Voordelen</h5>
                      <ul className="space-y-1 m-0">
                        {point.mitsubishi.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-red-700 text-sm font-medium mb-2">Nadelen</h5>
                      <ul className="space-y-1 m-0">
                        {point.mitsubishi.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">LG</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-green-700 text-sm font-medium mb-2">Voordelen</h5>
                      <ul className="space-y-1 m-0">
                        {point.lg.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-red-700 text-sm font-medium mb-2">Nadelen</h5>
                      <ul className="space-y-1 m-0">
                        {point.lg.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 id="modellen">Populaire Modellen</h2>
        <p>
          Beide merken bieden verschillende series aan, van basis tot premium modellen:
        </p>

        <div className="space-y-8 my-8">
          {popularModels.map((brand) => (
            <div key={brand.brand}>
              <h3 className="text-xl font-bold mb-4">{brand.brand} Series</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {brand.models.map((model) => (
                  <div 
                    key={model.name}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h4 className="font-semibold text-lg mb-3">{model.name}</h4>
                    <ul className="space-y-2 mb-4">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-blue-600 font-semibold m-0">
                      Vanaf {model.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 my-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-yellow-900 mt-0 mb-2">Belangrijk bij Keuze</h3>
              <p className="m-0 text-yellow-800">
                De beste keuze hangt af van je specifieke situatie. Bekijk onze 
                <Link to="/kennisbank/wat-kost-een-airco-plaatsen" className="text-yellow-800 underline"> prijzengids</Link> voor 
                meer informatie over kosten en mogelijkheden.
              </p>
            </div>
          </div>
        </div>

        <h2 id="installatie">Installatie & Onderhoud</h2>
        <p>
          Beide merken vereisen professionele installatie en regelmatig onderhoud. 
          Lees meer in onze <Link to="/kennisbank/hoe-vaak-airco-onderhoud" className="text-blue-600 hover:text-blue-800">onderhoudsgids</Link>.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-4">Onderhoudsoverwegingen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Mitsubishi</h4>
              <ul className="space-y-2 m-0">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  Langere onderhoudsintervallen
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  Uitgebreid servicenetwerk
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  5 jaar garantie
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">LG</h4>
              <ul className="space-y-2 m-0">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  Eenvoudige filterreiniging
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  Smart Diagnosis functie
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  3 jaar standaard garantie
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="prijzen">Prijsvergelijking</h2>
        <p>
          De prijzen variëren per model en capaciteit. Over het algemeen:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-blue-900 mt-0">Mitsubishi</h3>
            <ul className="mb-0">
              <li>Instapmodellen vanaf €1.000</li>
              <li>Middenklasse €1.500 - €2.000</li>
              <li>Premium modellen €2.000+</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-blue-900 mt-0">LG</h3>
            <ul className="mb-0">
              <li>Instapmodellen vanaf €900</li>
              <li>Middenklasse €1.400 - €1.900</li>
              <li>Premium modellen €1.800+</li>
            </ul>
          </div>
        </div>

        <h2 id="conclusie">Conclusie & Advies</h2>
        <p>
          <strong>Kies voor Mitsubishi als:</strong>
        </p>
        <ul>
          <li>Je maximale prestaties zoekt</li>
          <li>Budget minder belangrijk is</li>
          <li>Je geavanceerde features wilt</li>
        </ul>

        <p>
          <strong>Kies voor LG als:</strong>
        </p>
        <ul>
          <li>Je een goede prijs-kwaliteit zoekt</li>
          <li>Smart home integratie belangrijk is</li>
          <li>Je een strakker budget hebt</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Persoonlijk Advies?</h2>
          <p className="text-blue-100 mb-6">
            Wil je weten welk merk en model het beste bij jouw situatie past? 
            Onze experts helpen je graag met een persoonlijk advies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Vraag advies aan
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600"
            >
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default MitsubishiVsLgAirco;
