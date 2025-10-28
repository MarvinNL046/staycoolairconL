import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Euro, Phone, Mail, Zap, Shield, ThermometerSun, Wind, TrendingUp, Award } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const KostenAircoPlaatsen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Kosten & Prijzen', path: '/seo/pillar-9-kosten-prijzen' },
    { label: 'Kosten Airco Plaatsen' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "All-in Prijzen",
      description: "Transparante vaste prijzen inclusief installatie, materialen en BTW. Geen verborgen kosten."
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Garantie",
      description: "Op alle premium merken Daikin en Mitsubishi Heavy. Volledige zekerheid voor jaren."
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Erkende installateurs volgens wettelijke eisen. Professionele installatie gegarandeerd."
    },
    {
      icon: <Calculator className="h-12 w-12 text-sky-500" />,
      title: "Gratis Advies op Maat",
      description: "Persoonlijke woningbezoek met capaciteitsberekening en offerte binnen 24 uur."
    }
  ];

  const prijsCategorieen = [
    {
      ruimte: "Kleine Ruimte (15-25m²)",
      vermogen: "2.0 - 2.5 kW",
      basisPrijs: "€1.295 - €1.695",
      premiumPrijs: "€1.895 - €2.495",
      voorbeelden: "Slaapkamer, studeerkamer, kantoor"
    },
    {
      ruimte: "Middelgrote Ruimte (25-40m²)",
      vermogen: "2.5 - 3.5 kW",
      basisPrijs: "€1.595 - €1.995",
      premiumPrijs: "€2.195 - €2.895",
      voorbeelden: "Woonkamer, master bedroom, kantoorruimte"
    },
    {
      ruimte: "Grote Ruimte (40-60m²)",
      vermogen: "3.5 - 5.0 kW",
      basisPrijs: "€1.895 - €2.495",
      premiumPrijs: "€2.595 - €3.495",
      voorbeelden: "Open woonkamer, bedrijfsruimte, salon"
    },
    {
      ruimte: "Extra Grote Ruimte (60-80m²)",
      vermogen: "5.0 - 7.0 kW",
      basisPrijs: "€2.295 - €2.995",
      premiumPrijs: "€3.195 - €4.295",
      voorbeelden: "Open keuken-woonkamer, showroom, praktijkruimte"
    }
  ];

  const installatieKosten = [
    {
      item: "Standaard Installatie",
      beschrijving: "Binnenunit ophangen, buitenunit plaatsen, koelleidingen tot 3 meter",
      prijs: "Inbegrepen"
    },
    {
      item: "Extra Koelleiding",
      beschrijving: "Per extra meter boven standaard 3 meter",
      prijs: "€35 - €55/m"
    },
    {
      item: "Extra Beugels/Hijswerk",
      beschrijving: "Voor plaatsing op hoogte of moeilijk bereikbare locaties",
      prijs: "€125 - €350"
    },
    {
      item: "Elektrische Aanpassing",
      beschrijving: "Nieuwe groep aanleggen in meterkast indien nodig",
      prijs: "€150 - €295"
    },
    {
      item: "Doorvoer Maken",
      beschrijving: "Extra kernboring door buitenmuur indien nodig",
      prijs: "€95 - €195"
    }
  ];

  const merkPrijzen = [
    {
      merk: "Tosot/Gree (Budget)",
      eigenschappen: "Basis functies, A++ energie-efficiency, WiFi optioneel",
      garantie: "5 jaar",
      prijsIndicatie: "€1.295 - €2.295"
    },
    {
      merk: "LG Standard (Mid-range)",
      eigenschappen: "Stille werking, A++ efficiency, WiFi standaard, moderne design",
      garantie: "7 jaar",
      prijsIndicatie: "€1.595 - €2.695"
    },
    {
      merk: "Samsung Wind-Free (Premium)",
      eigenschappen: "Wind-Free technologie, A+++ efficiency, Smart home integratie",
      garantie: "10 jaar",
      prijsIndicatie: "€1.895 - €3.195"
    },
    {
      merk: "Daikin Perfera (Premium)",
      eigenschappen: "Ultra-stil, A+++ efficiency, Flash Streamer luchtzuivering",
      garantie: "10 jaar",
      prijsIndicatie: "€2.195 - €3.695"
    },
    {
      merk: "Mitsubishi Heavy (Top-Premium)",
      eigenschappen: "Allergie enzym filter, plasma zuivering, ultra-stil, A+++",
      garantie: "10 jaar",
      prijsIndicatie: "€2.495 - €4.295"
    }
  ];

  const faqItems = [
    {
      question: "Wat is inbegrepen in de totaalprijs voor airco plaatsen?",
      answer: "Onze all-in prijzen bevatten: de airco unit zelf (binnen- en buitenunit), standaard installatiewerk (ophangen binnenunit, plaatsen buitenunit, koelleidingen tot 3 meter), elektrische aansluiting, inbedrijfstelling en instructie, garantie en BTW. Alleen meerwerk zoals extra lange koelleidingen of elektrische aanpassingen worden apart berekend."
    },
    {
      question: "Waarom verschilt de prijs tussen verschillende airco merken?",
      answer: "De prijsverschillen komen voort uit kwaliteitsverschillen in componenten, energie-efficiency klasse (A++ versus A+++), geluidsniveau, extra functies (WiFi, luchtzuivering, auto-cleaning), garantietermijn en duurzaamheid. Premium merken zoals Daikin en Mitsubishi Heavy bieden superieure prestaties, langere levensduur en betere garanties, wat de hogere aanschafprijs terugverdient door lagere gebruikskosten."
    },
    {
      question: "Zijn er extra kosten naast de offerte?",
      answer: "Alleen als er meerwerk nodig is dat tijdens het vooronderzoek niet voorzien was. Wij komen altijd eerst op locatie voor een gratis adviesgesprek. Dan inventariseren we alle benodigdheden en maken eventueel meerwerk direct duidelijk. Denk aan: extra lange koelleidingen boven 3 meter, elektrische aanpassingen in de meterkast, plaatsing op moeilijk bereikbare plekken, of extra kernboringen. Dit wordt vooraf met u besproken en geaccordeerd."
    },
    {
      question: "Hoeveel bespaar ik op energiekosten met een airco?",
      answer: "Met een moderne warmtepomp airco (A+++ klasse) bespaart u tot 60% op verwarmingskosten vergeleken met elektrische verwarming of oude CV-systemen. Een airco haalt 3-4 kW warmte uit 1 kW stroom (SCOP 3-4). Gemiddeld bespaart een huishouden €400-€800 per jaar op energiekosten. De terugverdientijd van een premium airco is 3-5 jaar, waarna u jarenlang blijft besparen."
    },
    {
      question: "Kan ik de kosten spreiden of gebruik maken van subsidie?",
      answer: "Ja, beide opties zijn beschikbaar. Voor financiering bieden wij geschikte betaalregelingen aan waarbij u de kosten kunt spreiden over 12-60 maanden. Ook kunt u in aanmerking komen voor de ISDE subsidie (Investeringssubsidie Duurzame Energie) voor warmtepompen, die kan oplopen tot €300-€500 per unit. Wij helpen u graag met de aanvraag en adviseren over de beste financieringsoptie voor uw situatie."
    },
    {
      question: "Wat bepaalt de uiteindelijke prijs voor mijn woning?",
      answer: "De totaalprijs hangt af van: de grootte van de te koelen/verwarmen ruimte (m² bepaalt benodigde capaciteit), het gekozen merk en model (budget tot premium), de afstand tussen binnen- en buitenunit (standaard 3m inbegrepen), plaatsing van buitenunit (op de grond, aan muur, op plat dak), eventuele elektrische aanpassingen, en het aantal units bij meerdere kamers. Wij maken graag een gratis persoonlijke offerte op maat na een woningbezoek."
    },
    {
      question: "Is professionele installatie belangrijk voor de prijs-kwaliteit?",
      answer: "Absoluut. Een vakkundige installatie door F-gassen gecertificeerde monteurs is cruciaal voor optimale prestaties, energie-efficiency, geluidsniveau en levensduur van uw airco. Verkeerde installatie leidt tot 20-30% hogere energiekosten, meer geluidsoverlast, kortere levensduur en vervallen garantie. Wij garanderen correcte installatie volgens fabrieksspecificaties en wettelijke eisen, wat uw investering beschermt en optimaal rendement garandeert."
    },
    {
      question: "Wat zijn de jaarlijkse kosten na installatie?",
      answer: "Na installatie heeft u: onderhoudskosten (€75-€125 per jaar voor jaarlijkse servicebeurt), elektriciteitskosten (€150-€400 per jaar afhankelijk van gebruik, sterk gereduceerd door warmtepompfunctie), en eventuele reparaties (gedekt door garantie eerste 5-10 jaar). Met een onderhoudscontract bij ons voorkomt u storingen en blijft de garantie geldig. Totale jaarlijkse kosten zijn €225-€525, ruimschoots gecompenseerd door energiebesparing van €400-€800."
    }
  ];

  return (
    <>
      <MetaTags
        title="Kosten Airco Plaatsen Limburg 2024 | All-in Prijzen | StayCool Airco"
        description="Airco plaatsen kosten vanaf €1.295 all-in ✓ Inclusief installatie & BTW ✓ 10 jaar garantie ✓ F-gassen gecertificeerd ✓ Gratis offerte binnen 24u!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Plaatsen - Installatie Service",
          description: "Professionele airco installatie in Limburg met transparante all-in prijzen inclusief materiaal, plaatsing en BTW. F-gassen gecertificeerd met 10 jaar garantie op premium merken.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Limburg",
              addressCountry: "NL"
            }
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "1295",
            highPrice: "4295",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              valueAddedTaxIncluded: true
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Kosten Airco Plaatsen in Limburg: All-in Prijzen vanaf €1.295
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Transparante vaste prijzen inclusief installatie, materialen en BTW. Professionele plaatsing door F-gassen gecertificeerde monteurs met 10 jaar garantie op premium merken.
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
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken uw Kosten
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Vanaf €1.295 all-in
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              10 jaar garantie beschikbaar
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Gratis advies op locatie
            </span>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Wat Kosten Airco Plaatsen in 2024?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De kosten voor het plaatsen van een airco in Limburg variëren sterk afhankelijk van diverse factoren zoals ruimtegrootte, gekozen merk, installatiecomplexiteit en gewenste extra's. Bij StayCool Airco hanteren wij transparante all-in prijzen zodat u precies weet waar u aan toe bent. Onze prijzen starten vanaf €1.295 voor een complete single-split airco installatie inclusief materialen, plaatsing en BTW.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Een airco installatie bestaat uit meerdere componenten en werkzaamheden die allemaal invloed hebben op de totaalprijs. Het is belangrijk om vooraf een goed beeld te hebben van alle kostenposten en te weten wat er wel en niet bij de basisprijs inbegrepen is. Wij nemen graag de tijd om tijdens een gratis adviesgesprek alle aspecten met u door te nemen en een volledig transparante offerte op te stellen.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              All-in Prijsoverzicht per Ruimtegrootte
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              De grootte van de te koelen of verwarmen ruimte is de belangrijkste factor die de prijs bepaalt. Grotere ruimtes vereisen airco's met meer vermogen (kW), wat direct invloed heeft op zowel de aanschafprijs als de installatiekosten. Hieronder vindt u een compleet overzicht van de kosten per ruimtecategorie:
            </p>
          </div>

          {/* Prijstabel per Ruimtegrootte */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Ruimte Type</th>
                    <th className="px-6 py-4 text-left">Vermogen</th>
                    <th className="px-6 py-4 text-left">Basis Merken</th>
                    <th className="px-6 py-4 text-left">Premium Merken</th>
                    <th className="px-6 py-4 text-left">Voorbeelden</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {prijsCategorieen.map((cat, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{cat.ruimte}</td>
                      <td className="px-6 py-4 text-gray-700">{cat.vermogen}</td>
                      <td className="px-6 py-4 text-sky-600 font-semibold">{cat.basisPrijs}</td>
                      <td className="px-6 py-4 text-sky-700 font-semibold">{cat.premiumPrijs}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{cat.voorbeelden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Wat is Inbegrepen in de All-in Prijs?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Onze all-in prijzen zijn transparant en bevatten alle essentiële onderdelen voor een complete airco installatie. U hoeft niet te rekenen met verrassingen of verborgen kosten. Standaard inbegrepen zijn:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Airco unit compleet:</strong> Zowel de binnenunit als buitenunit van het gekozen merk en model, inclusief afstandsbediening en eventuele WiFi-module</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Standaard installatie:</strong> Montage van binnenunit aan de muur, plaatsing van buitenunit op gewenste locatie, inclusief bevestigingsmateriaal en beugels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Koelleidingen tot 3 meter:</strong> Hoogwaardige koperen leidingen met isolatie voor koelmiddel- en condensaatafvoer, professioneel gemonteerd</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Elektrische aansluiting:</strong> Aansluiting op bestaande elektragroep, mits technisch geschikt en binnen 5 meter van de meterkast</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Doorvoer door buitenmuur:</strong> Eén kernboring voor leidingen met nette afwerking binnen en buiten</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Vacuüm trekken en vullen:</strong> Professionele inbedrijfstelling volgens fabrieksspecificaties met koudemiddelcontrole</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Instructie en documentatie:</strong> Uitgebreide uitleg over gebruik en onderhoud, inclusief alle garantiebewijzen en installatierapporten</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>BTW en garantie:</strong> Alle prijzen zijn inclusief 21% BTW en de fabrieksgarantie (5-10 jaar afhankelijk van merk)</span>
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Mogelijke Meerwerkosten
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In sommige gevallen zijn aanvullende werkzaamheden nodig die niet in de standaard installatie zijn inbegrepen. Wij inventariseren deze altijd tijdens het vooronderzoek en bespreken de meerkosten vooraf met u. Pas na uw akkoord wordt het meerwerk uitgevoerd.
            </p>
          </div>

          {/* Meerwerk Kosten Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Meerwerk Item</th>
                    <th className="px-6 py-4 text-left">Omschrijving</th>
                    <th className="px-6 py-4 text-left">Indicatieve Prijs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {installatieKosten.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.item}</td>
                      <td className="px-6 py-4 text-gray-700">{item.beschrijving}</td>
                      <td className="px-6 py-4 text-orange-600 font-semibold">{item.prijs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Prijsverschillen tussen Airco Merken
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De keuze voor een specifiek airco merk heeft significante invloed op zowel de aanschafkosten als de totale kosten over de levensduur van het systeem. Premium merken kosten meer in aanschaf, maar compenseren dit door superieure energie-efficiency, langere levensduur, betere garanties en lagere onderhoudskosten. Hieronder een overzicht van de belangrijkste merken en hun prijssegment:
            </p>
          </div>

          {/* Merk Prijzen Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Merk & Segment</th>
                    <th className="px-6 py-4 text-left">Belangrijkste Eigenschappen</th>
                    <th className="px-6 py-4 text-left">Garantie</th>
                    <th className="px-6 py-4 text-left">Prijsindicatie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {merkPrijzen.map((merk, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{merk.merk}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{merk.eigenschappen}</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">{merk.garantie}</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">{merk.prijsIndicatie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Waarom Kiezen voor Professionele Installatie?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De installatiekosten vormen een belangrijk deel van de totaalinvestering, maar zijn cruciaal voor optimale prestaties en rendement. Een professionele installatie door F-gassen gecertificeerde monteurs zorgt voor:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="h-6 w-6 text-sky-500 mr-2" />
                  Optimale Energie-efficiency
                </h4>
                <p className="text-gray-700">
                  Correcte dimensionering, leidinglength en koelmiddelvulling zorgen voor maximaal rendement en minimale energiekosten. Verkeerde installatie kan leiden tot 20-30% hogere stroomkosten.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Wind className="h-6 w-6 text-sky-500 mr-2" />
                  Minimaal Geluidsniveau
                </h4>
                <p className="text-gray-700">
                  Professionele trillingdempers, correcte bevestiging en strategische plaatsing zorgen voor fluisterstille werking. Slechte installatie veroorzaakt hinderlijk geluid en trillingen.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="h-6 w-6 text-sky-500 mr-2" />
                  Behoud van Garantie
                </h4>
                <p className="text-gray-700">
                  Fabrikanten eisen installatie door gecertificeerde installateurs. DIY of onbevoegde installatie betekent directe vervalling van alle garanties en aansprakelijkheid.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-6 w-6 text-sky-500 mr-2" />
                  Langere Levensduur
                </h4>
                <p className="text-gray-700">
                  Vakkundige installatie volgens fabrieksspecificaties verlengt de levensduur met 5-10 jaar. De airco presteert optimaal en heeft minder onderhoud en reparaties nodig.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Besparen op Energiekosten: De Investering Terugverdienen
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hoewel de initiële kosten voor het plaatsen van een airco aanzienlijk kunnen zijn, is het belangrijk om te kijken naar de totale kosten over de levensduur. Moderne warmtepomp airco's (alle airco's werken als warmtepomp) bieden enorme energiebesparingen die de investering binnen enkele jaren terugverdienen.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Euro className="h-8 w-8 text-green-600 mr-3" />
                Rekenvoorbeeld Energiebesparing
              </h4>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="font-semibold">Aanschafkosten premium airco (incl. installatie):</span>
                  <span className="text-xl font-bold text-gray-900">€2.495</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="font-semibold">Jaarlijkse besparing verwarming (vs elektrisch):</span>
                  <span className="text-xl font-bold text-green-600">€650</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="font-semibold">Jaarlijkse onderhoudskosten:</span>
                  <span className="text-xl font-bold text-orange-600">- €100</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="font-semibold">Netto jaarlijkse besparing:</span>
                  <span className="text-xl font-bold text-green-600">€550</span>
                </div>

                <div className="flex justify-between items-center pt-4 bg-green-100 p-4 rounded-lg">
                  <span className="text-lg font-bold">Terugverdientijd investering:</span>
                  <span className="text-2xl font-bold text-green-700">4,5 jaar</span>
                </div>

                <p className="text-sm text-gray-600 italic mt-4">
                  Na terugverdientijd blijft u €550 per jaar besparen gedurende de resterende levensduur (gemiddeld 10-15 jaar extra). Totale besparing over 15 jaar: €8.250 - €2.495 = <strong className="text-green-700">€5.755 netto winst</strong>.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Kosten bij Meerdere Ruimtes: Multi-split Systemen
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wilt u meerdere kamers voorzien van airconditioning? Dan is een multi-split systeem vaak kostenefficiënter dan meerdere losse single-split units. Bij een multi-split heeft u één buitenunit die verbonden is met 2 tot 5 binnenunits, wat bespaart op aanschaf- en installatiekosten van meerdere buitenunits.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>2-kamer multi-split:</strong> Vanaf €2.795 (besparing ~€400 vs twee single-splits)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>3-kamer multi-split:</strong> Vanaf €3.895 (besparing ~€700 vs drie single-splits)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>4-kamer multi-split:</strong> Vanaf €4.995 (besparing ~€1.000 vs vier single-splits)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>5-kamer multi-split:</strong> Vanaf €5.995 (besparing ~€1.300 vs vijf single-splits)</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Multi-split systemen zijn vooral voordelig bij nieuwbouw of renovatie, waar je de leidingen binnen de wanden kunt verwerken. Ook bespaart u buitenruimte doordat er slechts één compacte buitenunit nodig is. Elk binnenunit kan individueel worden ingesteld qua temperatuur en werking, wat zorgt voor optimaal comfort en energiebesparing.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Gratis Persoonlijk Advies en Offerte op Maat
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Elke woning en situatie is uniek. Daarom komen wij altijd eerst vrijblijvend langs voor een persoonlijk adviesgesprek op locatie. Tijdens dit bezoek:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Meten we uw ruimtes en berekenen de exact benodigde capaciteit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Inventariseren we de optimale locaties voor binnen- en buitenunits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Bepalen we de beste route voor koelleidingen en eventueel meerwerk</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Adviseren we over het meest geschikte merk en model voor uw situatie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Berekenen we uw verwachte energiebesparing en terugverdientijd</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Maken we een volledig transparante offerte inclusief alle kosten</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              U ontvangt binnen 24 uur een gedetailleerde schriftelijke offerte met alle specificaties, prijzen en garantievoorwaarden. Geen verplichtingen, geen verborgen kosten, geen verrassingen. Alleen transparante informatie zodat u een weloverwogen keuze kunt maken.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vraag Nu een Gratis Offerte aan
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontvang binnen 24 uur een transparante all-in offerte op maat voor uw situatie. Inclusief gratis woningbezoek en capaciteitsberekening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Neem Contact Op
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
            Veelgestelde Vragen over Airco Plaatsen Kosten
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-sky-500 mr-3 flex-shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <div className="ml-8 text-gray-700 leading-relaxed">
                  <span className="font-semibold text-sky-600">A:</span> {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Uw Nieuwe Airco?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Ervaar zelf het comfort van perfecte klimaatbeheersing met professionele installatie en transparante prijzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Offerte Aanvragen
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Capaciteit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default KostenAircoPlaatsen;
