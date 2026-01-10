import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Euro, Phone, Mail, CreditCard, TrendingUp, Shield, Calendar, AlertCircle, PiggyBank } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const AircoFinanciering: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Kosten & Prijzen', path: '/seo/pillar-9-kosten-prijzen' },
    { label: 'Airco Financiering' }
  ];

  const usps = [
    {
      icon: <CreditCard className="h-12 w-12 text-sky-500" />,
      title: "Flexibele Betaaloplossingen",
      description: "Spreid de kosten over 12-60 maanden tegen aantrekkelijke rentetarieven."
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Vanaf €50 per Maand",
      description: "Betaalbaar airco comfort zonder grote eenmalige investering."
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Snelle Goedkeuring",
      description: "Online aanvraag met direct antwoord in de meeste gevallen."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-sky-500" />,
      title: "Besparing > Termijn",
      description: "Maandbedrag vaak lager dan uw energiebesparing."
    }
  ];

  const financieringsOpties = [
    {
      duur: "12 maanden",
      investering: "€2.000",
      maandlast: "€172",
      totaalKosten: "€2.064",
      rentePercentage: "3,8%",
      geschiktVoor: "Snelle aflossing, minimale rentekosten"
    },
    {
      duur: "24 maanden",
      investering: "€2.500",
      maandlast: "€110",
      totaalKosten: "€2.640",
      rentePercentage: "4,2%",
      geschiktVoor: "Evenwicht tussen betaalbaarheid en rentekosten"
    },
    {
      duur: "36 maanden",
      investering: "€3.000",
      maandlast: "€92",
      totaalKosten: "€3.312",
      rentePercentage: "4,5%",
      geschiktVoor: "Comfortabele maandlasten, langere spreiding"
    },
    {
      duur: "48 maanden",
      investering: "€3.500",
      maandlast: "€82",
      totaalKosten: "€3.936",
      rentePercentage: "4,8%",
      geschiktVoor: "Maximale betaalbaarheid bij hogere investering"
    },
    {
      duur: "60 maanden",
      investering: "€4.000",
      maandlast: "€75",
      totaalKosten: "€4.500",
      rentePercentage: "5,0%",
      geschiktVoor: "Laagste maandlast, multi-split systemen"
    }
  ];

  const gemeentelijkeOpties = [
    {
      gemeente: "Maastricht",
      regeling: "Energiebespaarlening",
      bedrag: "Tot €25.000",
      rente: "0% rente",
      looptijd: "Max. 15 jaar",
      bijzonderheden: "Geen inkomenstoets, wel BKR-check"
    },
    {
      gemeente: "Heerlen",
      regeling: "Duurzaamheidslening",
      bedrag: "Tot €20.000",
      rente: "1% rente",
      looptijd: "Max. 10 jaar",
      bijzonderheden: "Subsidie mogelijk voor energielabel verbetering"
    },
    {
      gemeente: "Roermond",
      regeling: "Verduurzamingslening",
      bedrag: "Tot €20.000",
      rente: "0,5% rente",
      looptijd: "Max. 12 jaar",
      bijzonderheden: "Combineerbaar met ISDE-subsidie"
    },
    {
      gemeente: "Sittard-Geleen",
      regeling: "Revolverend Fonds",
      bedrag: "Tot €15.000",
      rente: "1% rente",
      looptijd: "Max. 10 jaar",
      bijzonderheden: "Alleen voor woningeigenaren"
    },
    {
      gemeente: "Venlo",
      regeling: "Stimuleringsregeling",
      bedrag: "Tot €30.000",
      rente: "Variabel (0,5-2%)",
      looptijd: "Max. 15 jaar",
      bijzonderheden: "Afhankelijk van energiebesparing"
    }
  ];

  const vergelijkingOpties = [
    {
      methode: "Contante Betaling",
      voordelen: ["Geen rentekosten", "Directe eigendom", "Mogelijk korting"],
      nadelen: ["Hoge eenmalige uitgave", "Impact op spaargeld", "Liquiditeit verminderd"],
      geschiktVoor: "Voldoende spaargeld beschikbaar"
    },
    {
      methode: "Consumentenkrediet",
      voordelen: ["Flexibele looptijd", "Vaste maandlasten", "Snelle goedkeuring"],
      nadelen: ["Rentekosten 4-8%", "BKR-registratie", "Totaalkosten hoger"],
      geschiktVoor: "Snelle financiering zonder onderpand"
    },
    {
      methode: "Gemeentelijke Lening",
      voordelen: ["0-1% rente", "Lange looptijd", "Lage maandlasten"],
      nadelen: ["Beperkt budget", "Administratieve lasten", "Langere doorlooptijd"],
      geschiktVoor: "Maximale bespaarbaarheid, geduld voor aanvraag"
    },
    {
      methode: "Hypotheek Verhogen",
      voordelen: ["Laagste rente (3-4%)", "Fiscaal aftrekbaar", "Langste looptijd"],
      nadelen: ["Taxatiekosten", "Notariskosten", "Langere procedure"],
      geschiktVoor: "Grote investeringen, verbouwingen"
    }
  ];

  const besparingVsTermijn = {
    investering: 2495,
    financieringsDuur: 36,
    maandlast: 78,
    jaarlijkseBesparing: 650,
    maandelijkseBesparing: 54,
    nettoMaandlast: 24
  };

  const faqItems = [
    {
      question: "Wat zijn de voordelen van airco financiering?",
      answer: "Financiering stelt u in staat direct te genieten van airco comfort en energiebesparing zonder grote eenmalige investering. U spreidt de kosten over meerdere jaren terwijl u vanaf dag één bespaart op energiekosten. In veel gevallen is de maandelijkse energiebesparing hoger dan de financieringstermijn, waardoor u netto profiteert. Bovendien behoudt u uw spaargeld voor onvoorziene uitgaven of andere investeringen."
    },
    {
      question: "Welke financieringsduur is het meest voordelig?",
      answer: "Dit hangt af van uw persoonlijke situatie en prioriteiten. Een kortere looptijd (12-24 maanden) betekent minder rentekosten maar hogere maandlasten. Een langere looptijd (36-60 maanden) biedt meer ademruimte in uw maandbudget maar hogere totale rentekosten. Wij adviseren vaak 24-36 maanden als ideale balans. Bereken ook de maandelijkse energiebesparing: als deze hoger is dan uw termijn, profiteert u direct. Wij helpen graag bij het berekenen van de meest voordelige optie voor uw situatie."
    },
    {
      question: "Kan iedereen een airco financieren?",
      answer: "Voor financiering via een consumentenkrediet gelden standaard leningvoorwaarden: minimumleeftijd 21 jaar, vast inkomen of pensioen, geen negatieve BKR-registraties, en voldoende bestedingsruimte volgens de krediettoets. Gemeentelijke leningen hebben vaak soepelere voorwaarden maar beperkte beschikbaarheid. Bij hypotheekverhoging kijkt de bank naar uw leencapaciteit. We werken samen met meerdere financiers zodat we voor bijna iedereen een passende oplossing kunnen vinden. Ook voor ZZP'ers en gepensioneerden hebben we mogelijkheden."
    },
    {
      question: "Wat zijn de kosten van financiering?",
      answer: "De totale kosten bestaan uit rentekosten (3,8%-5,0% bij consumentenkrediet), eventuele afsluitkosten (€0-€150 eenmalig), en eventuele verzekeringen (optioneel, €2-€5 per maand). Bij een investering van €2.500 over 24 maanden à 4,2% rente betaalt u €140 extra aan rente. Gemeentelijke leningen hebben vaak 0-1% rente zonder afsluitkosten. Hypotheekverhoging kent de laagste rente (3-4%) maar wel notaris- en taxatiekosten (€1.000-€1.500). Wij vergelijken altijd alle opties en adviseren de meest voordelige keuze."
    },
    {
      question: "Moet ik een aanbetaling doen?",
      answer: "Dit hangt af van de gekozen financieringsvorm. Bij consumentenkrediet is vaak 0% aanbetaling mogelijk, maar een aanbetaling van 10-20% verlaagt uw maandlasten en rentekosten aanzienlijk. Bij gemeentelijke leningen is geen aanbetaling vereist. Bij hypotheekverhoging is het afhankelijk van uw overwaarde en leencapaciteit. Wij adviseren een aanbetaling als u deze comfortabel kunt doen, maar het is geen verplichting. Ook eventuele subsidies (€300-€500 ISDE) kunnen als 'achteraf aanbetaling' worden gebruikt."
    },
    {
      question: "Kan ik vervroegd aflossen?",
      answer: "Ja, bij de meeste financieringsvormen kunt u kosteloos vervroegd (extra) aflossen. Bij consumentenkrediet mag u volgens wettelijke regelgeving altijd vervroegd aflossen tegen maximaal 1% boete over het restbedrag (bij  meer dan 1 jaar restlooptijd) of 0,5% (bij  minder dan 1 jaar). Veel kredietverstrekkers hanteren helemaal geen boete. Gemeentelijke leningen kennen vaak geen boeteregeling. Hypotheekverhoging heeft soms een boete afhankelijk van rentevaststelling. Vervroegd aflossen bespaart rentekosten en is altijd verstandig bij financiële ruimte."
    },
    {
      question: "Wat gebeurt er bij verhuizing of verkoop?",
      answer: "De financiering blijft op uw naam staan en loopt gewoon door, onafhankelijk van uw woonadres. Bij verhuis neemt u de airco meestal niet mee (vastgoed). U kunt kiezen: de restschuld ineens aflossen uit verkoopopbrengst, de financiering doorlopen vanuit nieuwe woning (airco zit in verkoopprijs verrekend), of afspraken maken met koper over overname airco en financiering. Bij gemeentelijke leningen zijn soms specifieke voorwaarden verbonden aan verblijf in de gemeente. Wij adviseren hierover bij aanvraag."
    },
    {
      question: "Is financieren verstandig als ik wel contant kan betalen?",
      answer: "Dat hangt af van uw financiële situatie en het rentepercentage. Bij zeer lage rente (0-1% gemeentelijke lening) is financieren vrijwel altijd verstandiger: uw spaargeld rendeert mogelijk meer dan de lening kost, en u behoudt liquiditeit voor onvoorzien. Bij hogere rente (4-5%) is contante betaling goedkoper in totale kosten, maar financiering kan toch interessant zijn: u behoudt buffer voor noodsituaties, de maandelijkse energiebesparing compenseert de termijn, en eventueel spaargeldrendement weegt op tegen rentekosten. Wij rekenen het graag voor u door."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Financiering Limburg | Spreiden vanaf €50/maand | StayCool"
        description="Airco financieren vanaf €50 per maand ✓ Flexibele looptijd 12-60 maanden ✓ Snelle goedkeuring ✓ Besparing > termijn ✓ Gratis advies financiering!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Financiering & Betaalregelingen",
          description: "Flexibele financieringsopties voor airco installatie in Limburg. Spreid de kosten over 12-60 maanden tegen aantrekkelijke rentetarieven met snelle goedkeuring.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Financiering: Spreid de Kosten vanaf €50 per Maand
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Geniet direct van airco comfort zonder grote investering vooraf. Flexibele betaaloplossingen over 12-60 maanden met snelle goedkeuring en maandlasten vaak lager dan uw energiebesparing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Advies Financiering
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Maandlasten
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Vanaf €50 per maand
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              12-60 maanden looptijd
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Snelle online goedkeuring
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

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Waarom Airco Financiering Verstandig is
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Een airco is een waardevolle investering in comfort en energiebesparing, maar niet iedereen heeft direct €1.500-€4.000 beschikbaar. Financiering maakt airco comfort toegankelijk zonder uw spaargeld aan te spreken of andere plannen uit te stellen. U geniet vanaf dag één van alle voordelen terwijl u de kosten comfortabel spreidt over meerdere jaren.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Het bijzondere aan airco financiering is dat moderne warmtepomp airco's zoveel energiebesparing opleveren dat de maandelijkse besparing vaak hoger is dan uw financieringstermijn. Dit betekent dat u feitelijk direct profiteert: uw netto maandlasten zijn lager dan zonder airco door de energiebesparing. U bent dus vanaf maand één beter af.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PiggyBank className="h-8 w-8 text-green-600 mr-3" />
                Rekenvoorbeeld: Besparing vs. Maandlast
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Totale investering (incl. installatie):</span>
                  <span className="text-xl font-bold text-gray-900">€{besparingVsTermijn.investering}</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Financiering over {besparingVsTermijn.financieringsDuur} maanden:</span>
                  <span className="text-xl font-bold text-orange-600">€{besparingVsTermijn.maandlast}/maand</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Maandelijkse energiebesparing:</span>
                  <span className="text-xl font-bold text-green-600">€{besparingVsTermijn.maandelijkseBesparing}/maand</span>
                </div>

                <div className="flex justify-between items-center pt-4 bg-green-100 p-4 rounded-lg">
                  <span className="text-lg font-bold text-gray-900">Netto maandlast (termijn - besparing):</span>
                  <span className="text-2xl font-bold text-green-700">€{besparingVsTermijn.nettoMaandlast}/maand</span>
                </div>

                <p className="text-sm text-gray-600 italic mt-4">
                  Na aflossing blijft de energiebesparing van €{besparingVsTermijn.maandelijkseBesparing}/maand volledig in uw portemonnee! Over 10 jaar bespaart u €{besparingVsTermijn.jaarlijkseBesparing * 10 - besparingVsTermijn.investering} netto.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Financieringsopties en Maandlasten
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Wij bieden flexibele financieringsoplossingen via gerenommeerde financieringspartners met aantrekkelijke voorwaarden. Kies de looptijd die past bij uw maandbudget:
            </p>
          </div>

          {/* Financieringsopties Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Looptijd</th>
                    <th className="px-6 py-4 text-left">Investering</th>
                    <th className="px-6 py-4 text-left">Maandlast</th>
                    <th className="px-6 py-4 text-left">Totaal</th>
                    <th className="px-6 py-4 text-left">Rente</th>
                    <th className="px-6 py-4 text-left">Geschikt Voor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {financieringsOpties.map((optie, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{optie.duur}</td>
                      <td className="px-6 py-4 text-gray-700">{optie.investering}</td>
                      <td className="px-6 py-4 text-sky-600 font-bold text-lg">{optie.maandlast}</td>
                      <td className="px-6 py-4 text-gray-700">{optie.totaalKosten}</td>
                      <td className="px-6 py-4 text-orange-600 font-semibold">{optie.rentePercentage}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{optie.geschiktVoor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Indicatieve Bedragen</h4>
                <p className="text-gray-700">
                  Bovenstaande bedragen zijn indicatief bij consumentenkrediet. Exacte maandlasten en rentepercentages zijn afhankelijk van uw persoonlijke situatie, kredietwaardigheid en actuele marktrente. Wij berekenen graag een persoonlijke offerte voor u.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Gemeentelijke Leningen: Tot 0% Rente
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Veel Limburgse gemeenten bieden zeer voordelige leningen voor energiebesparende maatregelen. Deze gemeentelijke regelingen hebben vaak 0-1% rente en lange looptijden tot 15 jaar, wat resulteert in extreem lage maandlasten. Dit is veruit de voordeligste financieringsvorm indien beschikbaar in uw gemeente:
            </p>
          </div>

          {/* Gemeentelijke Leningen Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Gemeente</th>
                    <th className="px-6 py-4 text-left">Regeling</th>
                    <th className="px-6 py-4 text-left">Bedrag</th>
                    <th className="px-6 py-4 text-left">Rente</th>
                    <th className="px-6 py-4 text-left">Looptijd</th>
                    <th className="px-6 py-4 text-left">Bijzonderheden</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {gemeentelijkeOpties.map((optie, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{optie.gemeente}</td>
                      <td className="px-6 py-4 text-gray-700">{optie.regeling}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{optie.bedrag}</td>
                      <td className="px-6 py-4 text-green-700 font-bold">{optie.rente}</td>
                      <td className="px-6 py-4 text-gray-700">{optie.looptijd}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{optie.bijzonderheden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Let op:</strong> Gemeentelijke leningen hebben vaak beperkte budgetten en kunnen tussentijds uitgeput raken. Ook de voorwaarden en beschikbaarheid kunnen per jaar wijzigen. Informeer altijd naar de actuele status bij uw gemeente. Wij adviseren u graag over de meest recente regelingen en helpen met de aanvraag.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Vergelijking Financieringsmethoden
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Er zijn verschillende manieren om uw airco te financieren, elk met specifieke voor- en nadelen. Uw keuze hangt af van uw financiële situatie, beschikbaar spaargeld, en persoonlijke voorkeuren:
            </p>
          </div>

          {/* Vergelijking Methoden */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {vergelijkingOpties.map((optie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-sky-500 hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{optie.methode}</h4>

                <div className="mb-4">
                  <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Voordelen:
                  </h5>
                  <ul className="space-y-1">
                    {optie.voordelen.map((voordeel, idx) => (
                      <li key={idx} className="text-gray-700 text-sm ml-7">• {voordeel}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-orange-700 mb-2 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Nadelen:
                  </h5>
                  <ul className="space-y-1">
                    {optie.nadelen.map((nadeel, idx) => (
                      <li key={idx} className="text-gray-700 text-sm ml-7">• {nadeel}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sky-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    <strong>Geschikt voor:</strong> {optie.geschiktVoor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Aanvraagproces: Snel en Eenvoudig
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Het aanvragen van financiering voor uw airco is eenvoudig en gaat in de meeste gevallen snel. Bij consumentenkrediet ontvangt u vaak binnen enkele uren antwoord, bij gemeentelijke leningen duurt dit langer (2-6 weken). Het proces verloopt als volgt:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                  <h4 className="text-xl font-semibold text-gray-900">Offerte Aanvragen</h4>
                </div>
                <p className="text-gray-700">
                  Vraag eerst een offerte aan voor uw airco installatie. Wij berekenen de totaalkosten inclusief installatie en adviseren over de meest geschikte financieringsvorm voor uw situatie.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                  <h4 className="text-xl font-semibold text-gray-900">Financieringskeuze</h4>
                </div>
                <p className="text-gray-700">
                  Kies samen met ons de financieringsvorm die het beste bij u past: consumentenkrediet, gemeentelijke lening, of hypotheekverhoging. Wij rekenen alle opties door en vergelijken de totaalkosten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                  <h4 className="text-xl font-semibold text-gray-900">Online Aanvraag</h4>
                </div>
                <p className="text-gray-700">
                  Vul de online aanvraag in bij de gekozen financier. U heeft hiervoor nodig: geldig legitimatiebewijs, recent loonstrookje of jaaropgave, en rekeningnummer. Bij gemeentelijke leningen ook eigendomsbewijs woning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                  <h4 className="text-xl font-semibold text-gray-900">Beoordeling</h4>
                </div>
                <p className="text-gray-700">
                  De financier beoordeelt uw aanvraag op basis van inkomen, kredietwaardigheid en bestedingsruimte. Bij consumentenkrediet vaak binnen 1-4 uur antwoord, bij gemeentelijke leningen 2-6 weken.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
                  <h4 className="text-xl font-semibold text-gray-900">Goedkeuring</h4>
                </div>
                <p className="text-gray-700">
                  Bij goedkeuring ontvangt u een leningovereenkomst. Lees deze zorgvuldig door en onderteken digitaal of schriftelijk. Vanaf dit moment staat het bedrag ter beschikking voor uw airco installatie.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">6</div>
                  <h4 className="text-xl font-semibold text-gray-900">Installatie</h4>
                </div>
                <p className="text-gray-700">
                  Na goedkeuring plannen we de installatie. De financier betaalt ons direct na installatie. U betaalt vervolgens comfortabel in maandelijkse termijnen volgens de afgesproken looptijd en rente.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Tips voor Voordelige Financiering
            </h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Vergelijk altijd meerdere opties:</strong> Consumentenkrediet, gemeentelijke lening, hypotheekverhoging - elke optie heeft voor- en nadelen. Wij vergelijken gratis voor u.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Kortere looptijd = minder rentekosten:</strong> Kies de kortst mogelijke looptijd die comfortabel past binnen uw maandbudget voor minimale totaalkosten.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Aanbetaling verlaagt maandlasten:</strong> Een aanbetaling van 10-20% reduceert zowel maandtermijn als totale rentekosten aanzienlijk.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Combineer met ISDE-subsidie:</strong> Vraag €300-€500 subsidie aan en los hiermee vervroegd af om rentekosten te besparen.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Los vervroegd af bij financiële ruimte:</strong> Extra aflossingen besparen rentekosten en verkorten de looptijd zonder boete (meestal).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Check gemeentelijke regelingen eerst:</strong> 0-1% rente is altijd voordeliger dan 4-5% consumentenkrediet, ook bij langere doorlooptijd.</span>
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Waarom Financiering via StayCool Airco?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wij werken samen met gerenommeerde financieringspartners en bieden u onafhankelijk advies over de meest voordelige optie voor uw situatie. Voordelen van financiering via ons:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Onafhankelijk advies:</strong> Wij vergelijken alle opties en adviseren de meest voordelige keuze, niet wat het beste voor ons is</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Eén aanspreekpunt:</strong> Zowel voor installatie als financiering, minder gedoe en snellere afhandeling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Geen vooruitbetaling:</strong> Financier betaalt ons na installatie, u betaalt daarna in termijnen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Hulp bij aanvraag:</strong> Wij helpen met documentatie en beantwoorden al uw vragen over het proces</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Subsidie integratie:</strong> Wij adviseren over combineren van financiering met ISDE-subsidie voor maximaal voordeel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereken Uw Maandlasten
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontvang een persoonlijke berekening van maandlasten, rentekosten en energiebesparing. Gratis en vrijblijvend.
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
            Veelgestelde Vragen over Airco Financiering
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
            Start Vandaag met Comfort Morgen
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Geniet direct van airco comfort en energiebesparing met flexibele financiering die past bij uw budget.
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
              Bereken Kosten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoFinanciering;
