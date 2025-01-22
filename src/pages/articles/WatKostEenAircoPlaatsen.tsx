import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Euro, PiggyBank, Wrench, ThermometerSun, Home, Package, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WatKostEenAircoPlaatsen = () => {
  const costFactors = [
    {
      icon: Package,
      title: "Type Airco",
      description: "De keuze tussen verschillende modellen en merken",
      impact: "€500 - €2.000 verschil"
    },
    {
      icon: Home,
      title: "Ruimte & Locatie",
      description: "Grootte van de ruimte en montagelocatie",
      impact: "€200 - €500 verschil"
    },
    {
      icon: Wrench,
      title: "Installatie Complexiteit",
      description: "Extra werkzaamheden en materialen",
      impact: "€100 - €400 verschil"
    },
    {
      icon: Clock,
      title: "Installatietijd",
      description: "Benodigde arbeidstijd en aantal monteurs",
      impact: "€150 - €300 verschil"
    }
  ];

  const priceRanges = [
    {
      category: "Budget Airco",
      price: "€1.000 - €1.500",
      includes: [
        "Basis split-unit systeem",
        "Standaard installatie",
        "2-3 kW koelvermogen",
        "Geschikt voor kleine ruimtes"
      ],
      recommended: "Kleine slaapkamer of studeerkamer"
    },
    {
      category: "Middensegment Airco",
      price: "€1.500 - €2.500",
      includes: [
        "Kwaliteits split-unit",
        "Complete installatie",
        "3-5 kW koelvermogen",
        "WiFi-besturing"
      ],
      recommended: "Woonkamer of grote slaapkamer"
    },
    {
      category: "Premium Airco",
      price: "€2.500 - €4.000",
      includes: [
        "High-end merk en model",
        "Uitgebreide installatie",
        "5-7 kW koelvermogen",
        "Smart features & design"
      ],
      recommended: "Grote woonruimtes of luxe toepassingen"
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "kosten-overzicht", title: "Kosten Overzicht" },
    { id: "prijsbepalende-factoren", title: "Prijsbepalende Factoren" },
    { id: "installatiekosten", title: "Installatiekosten" },
    { id: "besparingstips", title: "Tips om te Besparen" },
    { id: "subsidies", title: "Subsidies en Regelingen" },
    { id: "conclusie", title: "Conclusie" }
  ];

  return (
    <ArticleLayout
      title="Wat Kost een Airco Plaatsen? Complete Prijsgids 2025"
      description="Ontdek wat een airco plaatsen kost in 2025. Van budget tot premium oplossingen - alle kosten en mogelijkheden op een rij."
      publishDate="2025-01-22"
      modifiedDate="2025-01-22"
      author="StayCool Airconditioning"
      tags={['Kosten', 'Installatie', 'Prijzen', 'Advies']}
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
            <Euro className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-blue-900 mt-0 mb-2">Snelle Prijsindicatie 2025</h3>
              <p className="m-0 text-blue-800">
                Een complete airco-installatie kost gemiddeld tussen de €1.000 en €4.000, 
                afhankelijk van type, merk en installatiewerk. Bekijk hieronder de 
                gedetailleerde prijsopbouw.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          De kosten voor het plaatsen van een airco zijn afhankelijk van verschillende 
          factoren. In dit artikel geven we je een compleet overzicht van alle kosten 
          die komen kijken bij het aanschaffen en installeren van een airconditioning.
        </p>

        <h2 id="kosten-overzicht">Kosten Overzicht</h2>
        <p>
          De totale kosten voor een airco kunnen worden onderverdeeld in verschillende 
          categorieën. Hieronder vind je een overzicht per prijsklasse:
        </p>

        <div className="space-y-6 my-8">
          {priceRanges.map((range) => (
            <div 
              key={range.category}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Euro className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold mt-0">
                  {range.category}
                </h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-600">{range.price}</span>
                <span className="text-gray-600 ml-2">inclusief installatie</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Inclusief:</h4>
                  <ul className="space-y-1">
                    {range.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aanbevolen voor:</h4>
                  <p className="text-gray-600 m-0">{range.recommended}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 id="prijsbepalende-factoren">Prijsbepalende Factoren</h2>
        <p>
          De uiteindelijke kosten worden bepaald door verschillende factoren. Hier zijn 
          de belangrijkste aspecten die de prijs beïnvloeden:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {costFactors.map((factor) => (
            <div 
              key={factor.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <factor.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {factor.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-2">
                {factor.description}
              </p>
              <p className="text-blue-600 font-semibold m-0">
                Prijsimpact: {factor.impact}
              </p>
            </div>
          ))}
        </div>

        <h2 id="installatiekosten">Installatiekosten</h2>
        <p>
          De installatiekosten zijn een belangrijk onderdeel van de totale investering. 
          Deze kosten omvatten:
        </p>

        <div className="bg-gray-50 rounded-lg p-6 my-8">
          <ul className="space-y-4 m-0">
            <li className="flex items-start">
              <Wrench className="h-5 w-5 text-gray-600 mr-3 mt-1" />
              <div>
                <strong>Arbeidsloon:</strong> €45-75 per uur per monteur
              </div>
            </li>
            <li className="flex items-start">
              <Wrench className="h-5 w-5 text-gray-600 mr-3 mt-1" />
              <div>
                <strong>Materialen:</strong> €100-300 voor leidingen, beugels, etc.
              </div>
            </li>
            <li className="flex items-start">
              <Wrench className="h-5 w-5 text-gray-600 mr-3 mt-1" />
              <div>
                <strong>Extra werkzaamheden:</strong> €50-200 voor specifieke aanpassingen
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 my-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-yellow-900 mt-0 mb-2">Belangrijk bij Installatie</h3>
              <p className="m-0 text-yellow-800">
                Kies altijd voor een erkend installateur. Dit voorkomt problemen en 
                zorgt ervoor dat je garantie geldig blijft. Bekijk onze 
                <Link to="/kennisbank/onderhoudstips" className="text-yellow-800 underline"> onderhoudstips</Link> voor 
                meer informatie.
              </p>
            </div>
          </div>
        </div>

        <h2 id="besparingstips">Tips om te Besparen</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-green-900 mt-0 flex items-center">
              <PiggyBank className="h-5 w-5 mr-2" />
              Seizoensvoordeel
            </h3>
            <p className="mb-0">
              Plan de installatie in het laagseizoen (winter). Veel installateurs 
              bieden dan aantrekkelijke kortingen.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-green-900 mt-0 flex items-center">
              <ThermometerSun className="h-5 w-5 mr-2" />
              Juiste Capaciteit
            </h3>
            <p className="mb-0">
              Kies een airco met de juiste capaciteit voor je ruimte. Te groot of 
              te klein betekent onnodig hoge kosten. Bekijk onze 
              <Link to="/products" className="text-green-900"> productpagina</Link> voor 
              advies.
            </p>
          </div>
        </div>

        <h2 id="subsidies">Subsidies en Regelingen</h2>
        <p>
          Er zijn verschillende subsidies en regelingen beschikbaar voor de aanschaf 
          van een airco, vooral als deze ook kan verwarmen:
        </p>

        <div className="bg-blue-50 rounded-lg p-6 my-8">
          <ul className="space-y-4 mb-0">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
              <div>
                <strong>ISDE-subsidie:</strong> Tot €2.000 voor warmtepompen
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
              <div>
                <strong>BTW-teruggave:</strong> Mogelijk bij zonnepanelen combinatie
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
              <div>
                <strong>Gemeentelijke regelingen:</strong> Afhankelijk van je woonplaats
              </div>
            </li>
          </ul>
        </div>

        <h2 id="conclusie">Conclusie</h2>
        <p>
          De kosten voor het plaatsen van een airco variëren sterk, maar met de juiste 
          keuzes en timing kun je aanzienlijk besparen. Belangrijkste tips:
        </p>
        <ul>
          <li>Kies de juiste capaciteit voor je ruimte</li>
          <li>Vergelijk verschillende aanbieders</li>
          <li>Plan de installatie in het laagseizoen</li>
          <li>Onderzoek beschikbare subsidies</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Persoonlijk Advies?</h2>
          <p className="text-blue-100 mb-6">
            Wil je weten wat een airco in jouw situatie precies kost? Onze experts 
            maken graag een vrijblijvende offerte op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <Euro className="h-5 w-5 mr-2" />
              Vraag een offerte aan
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

export default WatKostEenAircoPlaatsen;
