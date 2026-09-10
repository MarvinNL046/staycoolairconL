import MaintenanceOffer from '../../../components/MaintenanceOffer';
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator,CheckCircle,Euro,Phone,Mail,Wrench,Shield,Calendar,AlertCircle,TrendingDown,Clock } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const AircoOnderhoudKosten: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Kosten & Prijzen', path: '/seo/pillar-9-kosten-prijzen' },
    { label: 'Airco Onderhoud Kosten' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Vanaf €13 per Maand",
      description: "Onderhoudscontract inclusief jaarlijkse beurt, reiniging, controle en voorrang bij storingen."
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Voorkomt Storingen",
      description: "Preventief onderhoud helpt vervuiling en beginnende problemen tijdig op te merken."
    },
    {
      icon: <Calendar className="h-12 w-12 text-sky-500" />,
      title: "Onderhoudscontract",
      description: "Jaarlijks onderhoud, geen voorrijkosten en voorrang bij storingen."
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-sky-500" />,
      title: "Rendement op peil",
      description: "Goed onderhoud houdt efficiency op peil en bespaart jaarlijks op energie."
    }
  ];

  const onderhoudsPrijzen = [
    { service: "Losse onderhoudsbeurt", omschrijving: "Onderhoud voor een door StayCool geleverde en geïnstalleerde airco, per complete unit (één buitendeel en één binnendeel).", frequentie: "Op afspraak", prijs: "€189", duur: "Afhankelijk van installatie" },
    { service: "Storingsbezoek zonder contract", omschrijving: "Eerste uur inclusief voorrijkosten. Eventueel vervolgwerk en onderdelen worden apart besproken.", frequentie: "Bij storing", prijs: "€149 eerste uur", duur: "Eerste uur inbegrepen" }
  ];

  const veelvoorkomendeProblemen = [
    {
      probleem: "Vuile Filters",
      symptomen: "Verminderde luchtstroom, hoger stroomverbruik, geluidsoverlast",
      gevolgen: "15-25% hoger energieverbruik, slechte luchtkwaliteit, schade aan ventilator",
      preventie: "Filters reinigen elke 2-4 weken, vervangen 1-2x per jaar",
      kosten: "Kosten en eventuele pakketdekking worden vooraf besproken."
    },
    {
      probleem: "Koudemiddel Lekken",
      symptomen: "Verminderde koeling, lange aanlooptijden, ijsvorming op leidingen",
      gevolgen: "50% capaciteitsverlies, 30% hoger stroomverbruik, compressor schade",
      preventie: "Jaarlijkse drukcontrole, professionele installatie, no-DIY",
      kosten: "Kosten en eventuele pakketdekking worden vooraf besproken."
    },
    {
      probleem: "Verstopte Condensafvoer",
      symptomen: "Waterlekkage binnenunit, druppels, vochtplekken aan muur",
      gevolgen: "Waterschade interieur, schimmelvorming, elektronicabeschadiging",
      preventie: "Jaarlijks doorspuiten afvoer, afvoerpomp controleren",
      kosten: "Kosten en eventuele pakketdekking worden vooraf besproken."
    },
    {
      probleem: "Vieze Lucht / Geur",
      symptomen: "Muf of zure geur bij opstarten, allergische reacties",
      gevolgen: "Schimmel in unit, bacteriën in lucht, gezondheidsklachten",
      preventie: "Auto-clean functie gebruiken, jaarlijkse desinfectie",
      kosten: "Kosten en eventuele pakketdekking worden vooraf besproken."
    },
    {
      probleem: "Defecte Ventilator",
      symptomen: "Vreemde geluiden (klikken, ratelen), geen luchtstroom",
      gevolgen: "Totale uitval systeem, oververhitting compressor, brandgevaar",
      preventie: "Jaarlijks smeren lagers, vroegtijdig storingen laten repareren",
      kosten: "Kosten en eventuele pakketdekking worden vooraf besproken."
    },
    {
      probleem: "Elektrische Problemen",
      symptomen: "Unit start niet, foutcodes op display, thermische beveiliging slaat aan",
      gevolgen: "Geen koeling/verwarming mogelijk, brandgevaar bij kortsluiting",
      preventie: "Jaarlijkse controle connecties, geen DIY aan elektronica",
      kosten: "Kosten en eventuele pakketdekking worden vooraf besproken."
    }
  ];

  const faqItems = [
    {
      question: "Hoe vaak moet een airco onderhouden worden?",
      answer: "Wij adviseren jaarlijks professioneel onderhoud. Stem de frequentie af op het gebruik, de omgeving en de handleiding van uw airco. Reinig tussendoor de filters volgens de instructies van de fabrikant."
    },
    {
      question: "Wat kost een jaarlijkse airco onderhoudsbeurt?",
      answer: "Een losse onderhoudsbeurt kost €189 per complete unit: één buitendeel en één binnendeel. Basis kost €13 per maand (€156 per jaar bij maandbetaling); Premium €16 per maand (€192 per jaar bij maandbetaling). Deze pakketten zijn voor airco’s die StayCool heeft geleverd en geïnstalleerd."
    },
    {
      question: "Kan ik mijn airco zelf onderhouden of is professioneel onderhoud nodig?",
      answer: "U kunt filters reinigen en zichtbare vervuiling verwijderen volgens de handleiding. Laat technische controles, storingen en werk aan het koudemiddelcircuit door een daarvoor bevoegde professional uitvoeren."
    },
    {
      question: "Wat gebeurt er als ik geen onderhoud laat uitvoeren?",
      answer: "Vervuiling kan de luchtstroom en werking verminderen en een verstopte condensafvoer kan lekkage veroorzaken. Met regelmatig onderhoud kunnen zulke problemen tijdig worden opgemerkt. De precieze gevolgen hangen af van de installatie en het gebruik."
    },
    {
      question: "Is een onderhoudscontract voordeliger dan losse beurten?",
      answer: "Basis kost bij twaalf maandbetalingen €156 per complete unit: €33 minder dan één losse beurt van €189. Premium kost €192 per jaar bij maandbetaling en biedt extra dekking: alle onderdelen en een vervangend toestel bij een defect dat niet te repareren is. Extra binnendelen kosten €8 per maand bij Basis en €11 bij Premium. De aanmeldpagina berekent de totaalprijs voor uw configuratie en betaalritme."
    },
    {
      question: "Welke onderdelen slijten het snelst en moeten vervangen worden?",
      answer: "Welke onderdelen slijten hangt af van het toestel, gebruik en onderhoud. Basis omvat arbeidsloon en onderhoudsmaterialen. Premium voegt alle onderdelen toe en een vervangend toestel bij een defect dat niet te repareren is. Bekijk de voorwaarden bij uw pakket."
    },
    {
      question: "Wat zijn de totale jaarlijkse kosten van een airco?",
      answer: "Onderhoud kost per complete unit €156 per jaar met Basis of €192 met Premium bij maandbetaling. Tel daar uw werkelijke stroomverbruik en eventuele kosten buiten uw pakket bij op. Een vaste netto besparing is niet voor iedere woning of installatie te beloven."
    },
    {
      question: "Waarom is onderhoud belangrijk voor de garantie?",
      answer: "De onderhoudsvoorwaarden verschillen per fabrikant en garantie. Volg de handleiding en bewaar uw onderhoudsbewijzen. Een onderhoudscontract is geen onbeperkte garantie op iedere mogelijke reparatie; bekijk de voorwaarden van uw toestel en gekozen pakket."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Onderhoud Kosten Limburg | Vanaf €13/maand | StayCool Airco"
        description="Airco onderhoud vanaf €13/maand ✓ Voorkomt storingen 80% ✓ Bespaart 15% energie ✓ Onderhoudscontract beschikbaar ✓ Gratis advies onderhoud!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Onderhoud & Service",
          description: "Professioneel airco onderhoud in Limburg voor bestaande StayCool-klanten met jaarlijkse beurten en onderhoudscontracten.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          },
          offers: {
            "@type": "Offer",
            price: "13",
            priceCurrency: "EUR",
            unitText: "per maand"
          }
        }}
      />
      <FAQSchema faqs={[]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Onderhoud Kosten: Vanaf €13/maand voor Optimale Prestaties
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Jaarlijks onderhoud voor airco’s die door StayCool zijn geleverd en geïnstalleerd. Basis vanaf €13 per maand per complete unit, Premium vanaf €16.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/onderhoud"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bekijk onderhoudspakketten
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Kosten
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Vanaf €13 per maand
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Voorkomt storingen 80%
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Bespaart 15% energie
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
                <h2 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h2>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Waarom is Airco Onderhoud Essentieel?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Regelmatig professioneel onderhoud aan uw airco is geen luxe maar noodzaak. Net als uw auto heeft een airco periodieke service nodig om optimaal te blijven functioneren. Zonder onderhoud verslechtert de prestatie geleidelijk, stijgen de energiekosten, neemt de storingskans toe en verkort de levensduur aanzienlijk. Bovendien vervalt de garantie bij gebrek aan onderhoud.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Onderhoud helpt vervuiling en beginnende problemen tijdig op te merken. Met Basis betaalt u €13 per maand per complete unit (€156 bij twaalf maandbetalingen). Wat u bespaart op energie of reparaties hangt af van uw toestel, gebruik en situatie.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg my-8">
              <div className="flex flex-col sm:flex-row items-start break-words">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                <div className="min-w-0 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Garantie Vervalt Zonder Onderhoud</h3>
                  <p className="text-gray-700">
                    Alle fabrikanten eisen jaarlijks professioneel onderhoud als voorwaarde voor garantie (5-10 jaar). Zonder onderhoudsbewijzen bent u zelf verantwoordelijk voor alle reparatiekosten, zelfs bij fabricagefouten. Een nieuwe compressor kost €800-1500!
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Overzicht Onderhoudsprijzen
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Dit zijn de tarieven voor losse bezoeken aan door StayCool geleverde en geïnstalleerde airco’s. Bekijk hieronder ook de abonnementen en hun dekking:
            </p>
          </div>

          {/* Onderhoudsprijzen Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Omschrijving</th>
                    <th className="px-6 py-4 text-left">Frequentie</th>
                    <th className="px-6 py-4 text-left">Prijs</th>
                    <th className="px-6 py-4 text-left">Duur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {onderhoudsPrijzen.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.service}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{item.omschrijving}</td>
                      <td className="px-6 py-4 text-gray-600">{item.frequentie}</td>
                      <td className="px-6 py-4 text-sky-600 font-bold">{item.prijs}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.duur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Onderhoudscontracten: Zorgeloos en Voordelig
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Vergelijk Basis en Premium voor uw StayCool-installatie. Beide pakketten bevatten jaarlijkse onderhoudsservice, voorrang bij storingen en geen voorrijkosten. De dekking verschilt per pakket:
            </p>
          </div>

          <MaintenanceOffer />
          <p className="my-6 text-gray-700">Bij één complete unit kost Basis €156 per jaar bij maandbetaling. Dat is €33 minder dan één losse beurt van €189. Deze vergelijking omvat geen energieverbruik of eventuele reparaties. Premium kost €192 per jaar en biedt uitgebreidere dekking; het is niet goedkoper dan één losse beurt.</p>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Veelvoorkomende Problemen en Preventie
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              De meeste airco problemen zijn te voorkomen met regelmatig onderhoud. Hieronder de zes meest voorkomende problemen, hun symptomen, gevolgen en hoe u ze kunt voorkomen:
            </p>
          </div>

          {/* Veelvoorkomende Problemen */}
          <div className="space-y-6 mb-12">
            {veelvoorkomendeProblemen.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Wrench className="h-6 w-6 text-orange-500 mr-2" />
                  {item.probleem}
                </h4>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Symptomen:</h5>
                    <p className="text-gray-700 text-sm">{item.symptomen}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Gevolgen:</h5>
                    <p className="text-gray-700 text-sm">{item.gevolgen}</p>
                  </div>
                </div>

                <div className="bg-sky-50 p-4 rounded-lg mb-3">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Shield className="h-5 w-5 text-sky-500 mr-2" />
                    Preventie:
                  </h5>
                  <p className="text-gray-700 text-sm">{item.preventie}</p>
                </div>

                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm font-semibold text-gray-900">Kosten bij optreden:</span>
                  <span className="text-orange-600 font-bold">{item.kosten}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Wat Gebeurt er Tijdens een Onderhoudsbeurt?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Een professionele onderhoudsbeurt is grondig en systematisch. Onze monteurs volgen een vaste checklist om niets over het hoofd te zien. Dit is wat er gebeurt tijdens een standaard jaarlijkse beurt:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-sky-500 mr-2" />
                  Binnenunit (30 min)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Filters verwijderen, reinigen of vervangen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Warmtewisselaar reinigen met perslucht/water</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ventilator en turbine reinigen en controleren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Condensafvoer doorspuiten en controleren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Temperatuursensoren controleren en kalibreren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Display, afstandsbediening en bediening testen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Behuizing en lamellen reinigen en desinfecteren</span>
                  </li>
                </ul>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-sky-500 mr-2" />
                  Buitenunit (30 min)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compressor visueel inspecteren op lekken/schade</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Condensor (warmtewisselaar) reinigen met perslucht</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ventilator controleren op schade en slijtage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Elektrische connecties controleren en aandraaien</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Koudemiddeldruk meten (bij uitgebreide beurt)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bevestiging en trillingdempers controleren</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Testrun in koelen en verwarmen modus</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Na afloop ontvangt u een digitaal onderhoudsbewijs met alle uitgevoerde werkzaamheden, gevonden aandachtspunten en aanbevelingen voor de toekomst. Dit bewijs is essentieel voor garantiebehoud en overdraagbaar bij verhuizing of verkoop.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              DIY Onderhoud: Wat Kunt u Zelf Doen?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Tussen de professionele beurten door kunt u zelf eenvoudig basisonderhoud uitvoeren om uw airco in optimale staat te houden. Dit verlengt de levensduur en voorkomt veel problemen:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Filters reinigen (elke 2-4 weken):</strong> Verwijder de filters, stofzuig ze of was ze met lauw water en mild zeepsop, laat goed drogen (24u) en plaats terug</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Buitenunit vrijhouden (maandelijks):</strong> Verwijder bladeren, takjes en vuil rondom de unit, houd minimaal 30cm vrije ruimte aan alle kanten</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Visuele inspectie (maandelijks):</strong> Controleer op waterlekkage, vreemde geluiden, ongewone geuren en ijsvorming - meld dit direct bij ons</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Auto-clean functie gebruiken (wekelijks):</strong> Moderne units hebben een zelf-reinigingsfunctie die schimmelgroei voorkomt - gebruik deze regelmatig</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Afstandsbediening batterijen (jaarlijks):</strong> Vervang batterijen tijdig om storingen te voorkomen, reinig contactpunten met droge doek</span>
              </li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg my-8">
              <div className="flex flex-col sm:flex-row items-start break-words">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                <div className="min-w-0 w-full">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Waarschuwing: Niet Zelf Doen</h4>
                  <p className="text-gray-700 mb-3">
                    Doe nooit zelf aan technische reparaties of koudemiddelwerkzaamheden. Dit vereist F-gassen certificering, gespecialiseerde apparatuur en kennis. DIY reparaties leiden tot:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Onmiddellijke vervalling van alle garanties</li>
                    <li>• Risico op elektrische schokken (230V + hoge spanning compressor)</li>
                    <li>• Milieuschade door koudemiddellekken (illegaal en beboetbaar)</li>
                    <li>• Verdere schade aan dure componenten (compressor €800-1500)</li>
                    <li>• Brandgevaar bij verkeerde elektrische aanpassingen</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Bij twijfel of problemen: bel ons direct op 046 202 1430 voor professioneel advies.
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
            Plan Nu Uw Onderhoudsbeurt
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Voorkom storingen, bespaar energie en behoud uw garantie met een onderhoudscontract vanaf €13 per maand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onderhoud"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Onderhoud Inplannen
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
            Veelgestelde Vragen over Airco Onderhoud
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investeer in Betrouwbaar Comfort
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Professioneel onderhoud houdt uw airco optimaal presteren en bespaart u geld op de lange termijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onderhoud"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Neem Contact Op
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Kosten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoOnderhoudKosten;
