import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Euro, Phone, Mail, TrendingUp, Shield, FileText, Award, AlertCircle, ExternalLink } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const AircoSubsidiesLimburg: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Kosten & Prijzen', path: '/seo/pillar-9-kosten-prijzen' },
    { label: 'Airco Subsidies Limburg' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Tot €500 ISDE Subsidie",
      description: "Voor hybride warmtepompen en lucht-lucht warmtepompen (airco's met verwarmingsfunctie)."
    },
    {
      icon: <FileText className="h-12 w-12 text-sky-500" />,
      title: "Hulp bij Aanvraag",
      description: "Wij helpen u met het aanvragen van subsidies en leveren alle benodigde documentatie."
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Gecertificeerde Installatie",
      description: "F-gassen certificaat verplicht voor subsidie. Wij zijn volledig gecertificeerd."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-sky-500" />,
      title: "Extra Voordeel",
      description: "Combineer subsidie met energiebesparing van 60% voor maximaal rendement."
    }
  ];

  const isdeVoorwaarden = [
    {
      criterium: "Type Systeem",
      voorwaarde: "Lucht-lucht warmtepomp (airco met verwarmingsfunctie) of hybride warmtepomp",
      voldoet: true
    },
    {
      criterium: "SCOP Waarde",
      voorwaarde: "Seizoensgebonden prestatiecoëfficiënt (SCOP) ≥ 4.0 bij gemiddeld klimaat",
      voldoet: true
    },
    {
      criterium: "Installateur",
      voorwaarde: "Installatie door erkend F-gassen gecertificeerd bedrijf",
      voldoet: true
    },
    {
      criterium: "Type Woning",
      voorwaarde: "Bestaande koopwoning of huurwoning (met toestemming verhuurder)",
      voldoet: true
    },
    {
      criterium: "Eerdere Subsidie",
      voorwaarde: "Geen eerdere ISDE-subsidie ontvangen voor hetzelfde systeem op dit adres",
      voldoet: true
    },
    {
      criterium: "Aanvraag Moment",
      voorwaarde: "Aanvraag binnen 4 maanden na installatie met alle bewijsstukken",
      voldoet: true
    }
  ];

  const subsidieBedragen = [
    {
      categorie: "Lucht-lucht Warmtepomp (Airco)",
      beschrijving: "Volwaardige airco met verwarmingsfunctie, SCOP ≥ 4.0",
      bedrag: "€300 - €500",
      voorwaarden: "Capaciteit afhankelijk, min. 2.5 kW verwarmingsvermogen"
    },
    {
      categorie: "Hybride Warmtepomp",
      beschrijving: "Combinatie warmtepomp + HR-ketel als back-up",
      bedrag: "€1.500 - €2.000",
      voorwaarden: "Minimale SCOP 4.0, modulerende capaciteit vereist"
    },
    {
      categorie: "Volledig Elektrische Warmtepomp",
      beschrijving: "All-electric lucht-water of bodem-water warmtepomp",
      bedrag: "€2.000 - €3.000",
      voorwaarden: "COP ≥ 4.0, voor volledige verwarming woning"
    }
  ];

  const aanvraagStappen = [
    {
      stap: "1. Vooronderzoek",
      beschrijving: "Controleer of uw woning en gewenste systeem in aanmerking komt voor subsidie. Wij adviseren u graag tijdens een gratis adviesgesprek.",
      actie: "Gratis adviesgesprek boeken"
    },
    {
      stap: "2. Offertes Vergelijken",
      beschrijving: "Vraag minimaal twee offertes aan bij erkende installateurs. Wij leveren een volledige offerte inclusief alle benodigde specificaties voor de subsidieaanvraag.",
      actie: "Offerte aanvragen"
    },
    {
      stap: "3. Keuze en Installatie",
      beschrijving: "Kies een installateur en laat het systeem installeren door F-gassen gecertificeerde monteurs. Bewaar alle facturen en documenten zorgvuldig.",
      actie: "Installatie plannen"
    },
    {
      stap: "4. Documentatie Verzamelen",
      beschrijving: "Verzamel: factuur met BTW, installatiebewijzen, productspecificaties met SCOP-waarde, F-gassen certificaat installateur, foto's van binnen- en buitenunit.",
      actie: "Checklist downloaden"
    },
    {
      stap: "5. Online Aanvraag",
      beschrijving: "Dien binnen 4 maanden na installatie de aanvraag digitaal in via het RVO-portaal met alle bewijsstukken. Wij helpen u graag met het invullen.",
      actie: "RVO-portaal bezoeken"
    },
    {
      stap: "6. Beoordeling RVO",
      beschrijving: "RVO beoordeelt uw aanvraag binnen 8-13 weken. Bij goedkeuring ontvangt u een toekenningsbesluit met betalingstermijn.",
      actie: "Status controleren"
    },
    {
      stap: "7. Uitbetaling",
      beschrijving: "Na goedkeuring wordt het subsidiebedrag overgemaakt op uw rekening. Dit kan 4-8 weken duren na toekenning.",
      actie: "Ontvangst bevestigen"
    }
  ];

  const gemeentelijkRegelingen = [
    {
      gemeente: "Maastricht",
      regeling: "Energiebespaarlening",
      bedrag: "Lening tot €25.000",
      voorwaarden: "0% rente, looptijd tot 15 jaar voor energiebesparende maatregelen"
    },
    {
      gemeente: "Heerlen",
      regeling: "Duurzaamheidslening",
      bedrag: "Lening tot €20.000",
      voorwaarden: "1% rente, looptijd tot 10 jaar voor verduurzaming woning"
    },
    {
      gemeente: "Roermond",
      regeling: "Verduurzamingslening",
      bedrag: "Lening tot €20.000",
      voorwaarden: "0,5% rente, looptijd tot 12 jaar voor energiebesparende investeringen"
    },
    {
      gemeente: "Sittard-Geleen",
      regeling: "Revolverend Fonds",
      bedrag: "Lening tot €15.000",
      voorwaarden: "1% rente, looptijd tot 10 jaar voor duurzame installaties"
    },
    {
      gemeente: "Venlo",
      regeling: "Stimuleringsregeling",
      bedrag: "Lening tot €30.000",
      voorwaarden: "Variabele rente, looptijd tot 15 jaar voor energietransitie"
    }
  ];

  const faqItems = [
    {
      question: "Komen alle airco's in aanmerking voor ISDE-subsidie?",
      answer: "Nee, alleen airco's die als volwaardige warmtepomp functioneren komen in aanmerking. Het systeem moet een minimale SCOP-waarde van 4.0 hebben en geschikt zijn voor verwarming van de woning. Gewone koeling-only airco's komen niet in aanmerking. Alle door ons geleverde premium merken (Daikin, Mitsubishi Heavy, Samsung, LG) voldoen aan deze eisen wanneer geïnstalleerd als verwarming systeem. Wij adviseren u graag over de meest geschikte optie voor uw situatie."
    },
    {
      question: "Hoeveel ISDE-subsidie kan ik krijgen voor een airco?",
      answer: "Voor een lucht-lucht warmtepomp (airco met verwarmingsfunctie) kunt u in 2024 een subsidie ontvangen van €300 tot €500, afhankelijk van het verwarmingsvermogen van het systeem. Voor een hybride warmtepomp (airco gecombineerd met HR-ketel) kan de subsidie oplopen tot €1.500-€2.000. Het exacte bedrag wordt bepaald door de RVO op basis van uw aanvraag en de specificaties van het geïnstalleerde systeem. Wij berekenen vooraf het te verwachten subsidiebedrag voor uw situatie."
    },
    {
      question: "Moet ik de subsidie aanvragen vóór of na installatie?",
      answer: "De ISDE-subsidie moet worden aangevraagd na installatie van het systeem, binnen 4 maanden na de installatiedatum. U kunt dus niet vooraf reserveren. Het is belangrijk om alle documenten (facturen, installatiebewijzen, productspecificaties, foto's) direct bij installatie zorgvuldig te bewaren. Wij zorgen ervoor dat alle benodigde documenten compleet zijn en helpen u met het tijdig indienen van de aanvraag. Te late aanvraag betekent helaas verlies van recht op subsidie."
    },
    {
      question: "Welke documenten heb ik nodig voor de subsidieaanvraag?",
      answer: "Voor een complete ISDE-aanvraag heeft u nodig: een gedetailleerde factuur inclusief BTW met omschrijving van het systeem, installatiebewijzen inclusief F-gassen certificaat van de installateur, productspecificaties waaruit de SCOP-waarde blijkt, foto's van zowel binnen- als buitenunit na installatie, en kopie legitimatiebewijs. Wij leveren standaard alle benodigde documenten vanuit onze installatie, inclusief een vooringevuld aanvraagformulier. U hoeft alleen nog uw persoonlijke gegevens toe te voegen en digitaal in te dienen."
    },
    {
      question: "Zijn er ook gemeentelijke subsidies beschikbaar in Limburg?",
      answer: "Naast de nationale ISDE-subsidie bieden verschillende Limburgse gemeenten aanvullende regelingen, meestal in de vorm van leningen met zeer lage rente (0-1%) voor energiebesparende maatregelen. Gemeenten zoals Maastricht, Heerlen, Roermond, Sittard-Geleen en Venlo hebben actieve regelingen met bedragen tot €25.000. Deze leningen zijn vaak combineerbaar met de ISDE-subsidie, waardoor u de investering volledig kunt financieren tegen minimale kosten. Wij informeren u graag over de actuele regelingen in uw gemeente."
    },
    {
      question: "Wat gebeurt er als mijn subsidieaanvraag wordt afgewezen?",
      answer: "Afwijzing gebeurt meestal door incomplete documentatie, te late aanvraag, of niet-voldoen aan technische eisen (SCOP < 4.0, geen F-gassen certificaat). U krijgt dan de mogelijkheid om binnen een bepaalde termijn aanvullende informatie in te dienen. Daarom is het cruciaal om vanaf het begin alles correct te regelen. Wij zorgen voor complete documentatie conform RVO-eisen, waardoor afwijzing vrijwel uitgesloten is. In het zeldzame geval van afwijzing helpen wij u gratis met bezwaar indienen of hernieuwde aanvraag."
    },
    {
      question: "Kan ik de subsidie combineren met de BTW-verlaging?",
      answer: "Nee, de BTW-verlaging van 21% naar 9% voor arbeidskosten bij woningverbetering is per 1 januari 2019 beëindigd. U betaalt dus het volledige 21% BTW-tarief op zowel materiaal als arbeidskosten. De ISDE-subsidie is de belangrijkste financiële tegemoetkoming voor warmtepompen. U kunt de subsidie echter wel combineren met eventuele gemeentelijke leningen, energiebespaarleningen van banken, of fiscale aftrekposten voor energiebesparende investeringen. Wij adviseren u over alle beschikbare financieringsopties."
    },
    {
      question: "Hoe lang duurt het voordat ik de subsidie ontvang?",
      answer: "Na indiening van een complete aanvraag beoordeelt de RVO (Rijksdienst voor Ondernemend Nederland) binnen 8-13 weken. Bij goedkeuring ontvangt u een toekenningsbesluit. De daadwerkelijke uitbetaling volgt 4-8 weken na toekenning, dus reken totaal op 3-5 maanden vanaf indiening tot ontvangst. Het is daarom verstandig om de investering niet afhankelijk te maken van de subsidie, maar deze te beschouwen als welkome terugbetaling. Wij kunnen u indien gewenst helpen met tijdelijke financiering via onze betaalregelingen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Subsidies Limburg 2024 | ISDE Regeling Tot €500 | StayCool"
        description="ISDE subsidie airco tot €500 ✓ Hulp bij aanvraag ✓ Gecertificeerde installatie verplicht ✓ Gemeentelijke regelingen ✓ Gratis advies subsidies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Subsidie Advies & Aanvraag Hulp",
          description: "Professionele begeleiding bij ISDE subsidieaanvragen voor warmtepomp airco's in Limburg. Inclusief installatie door gecertificeerde monteurs en complete documentatie.",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Subsidies Limburg: ISDE Tot €500 + Gemeentelijke Regelingen
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Profiteer van ISDE-subsidie tot €500 voor uw warmtepomp airco. Wij helpen u met de aanvraag en zorgen voor alle benodigde documentatie en certificering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Subsidie Advies
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken uw Besparing
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Tot €500 ISDE subsidie
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Hulp bij aanvraag
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              F-gassen gecertificeerd
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
              ISDE Subsidie voor Airco's: Alles wat u Moet Weten
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De ISDE (Investeringssubsidie Duurzame Energie) is een belangrijke financiële tegemoetkoming van de overheid voor het verduurzamen van uw woning. Als u een warmtepomp airco laat installeren, kunt u in aanmerking komen voor een subsidie tot €500. Dit helpt de aanschafkosten te verlagen en maakt de investering in duurzame klimaatbeheersing aantrekkelijker.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De ISDE-regeling wordt beheerd door de RVO (Rijksdienst voor Ondernemend Nederland) en is bedoeld om huiseigenaren te stimuleren over te stappen op duurzame energiebronnen. Airco's met verwarmingsfunctie (lucht-lucht warmtepompen) vallen onder deze regeling omdat ze significant bijdragen aan CO2-reductie en energiebesparing vergeleken met traditionele verwarmingssystemen.
            </p>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-lg my-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Belangrijk: Aanvraag na Installatie</h4>
                  <p className="text-gray-700">
                    De ISDE-subsidie moet worden aangevraagd na installatie van het systeem, binnen 4 maanden na de installatiedatum. Vooraf reserveren is niet mogelijk. Bewaar alle documenten zorgvuldig vanaf dag één van de installatie.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Subsidiebedragen per Type Systeem
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Het subsidiebedrag hangt af van het type warmtepompsysteem dat u laat installeren. De overheid maakt onderscheid tussen verschillende categorieën op basis van capaciteit en functionaliteit:
            </p>
          </div>

          {/* Subsidiebedragen Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Systeem Type</th>
                    <th className="px-6 py-4 text-left">Beschrijving</th>
                    <th className="px-6 py-4 text-left">Subsidie</th>
                    <th className="px-6 py-4 text-left">Voorwaarden</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subsidieBedragen.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.categorie}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{item.beschrijving}</td>
                      <td className="px-6 py-4 text-green-600 font-bold text-lg">{item.bedrag}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.voorwaarden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Voorwaarden voor ISDE Subsidie
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Om in aanmerking te komen voor de ISDE-subsidie voor uw airco, moet aan een aantal technische en administratieve voorwaarden worden voldaan. Wij zorgen ervoor dat alle voorwaarden worden nageleefd:
            </p>
          </div>

          {/* ISDE Voorwaarden Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Criterium</th>
                    <th className="px-6 py-4 text-left">Voorwaarde</th>
                    <th className="px-6 py-4 text-center w-32">StayCool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {isdeVoorwaarden.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.criterium}</td>
                      <td className="px-6 py-4 text-gray-700">{item.voorwaarde}</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Stappenplan: Subsidie Aanvragen in 7 Stappen
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Het aanvragen van ISDE-subsidie vergt enige administratie, maar met de juiste voorbereiding en documentatie is het goed te doen. Wij begeleiden u door het hele proces:
            </p>
          </div>

          {/* Aanvraag Stappen */}
          <div className="space-y-6 mb-12">
            {aanvraagStappen.map((stap, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-sky-500">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{stap.stap}</h4>
                    <p className="text-gray-700 mb-3 leading-relaxed">{stap.beschrijving}</p>
                    <button className="text-sky-600 font-semibold hover:text-sky-700 flex items-center">
                      {stap.actie}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Hoe Helpt StayCool Airco bij uw Subsidieaanvraag?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Subsidies aanvragen kan complex en tijdrovend zijn. Daarom bieden wij uitgebreide ondersteuning tijdens het hele proces, van advies tot aanvraag en zelfs eventuele bezwaarprocedures. Onze service omvat:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <FileText className="h-6 w-6 text-sky-500 mr-2" />
                  Complete Documentatie
                </h4>
                <p className="text-gray-700">
                  Wij leveren alle benodigde documenten: gedetailleerde factuur met BTW, installatiebewijzen, productspecificaties met SCOP-waarde, F-gassen certificaat, en foto's van de installatie. Alles wat de RVO vereist krijgt u automatisch van ons.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-2" />
                  Vooringevuld Formulier
                </h4>
                <p className="text-gray-700">
                  Wij vullen het aanvraagformulier voor u in met alle technische specificaties en installatiegegevens. U hoeft alleen nog uw persoonlijke gegevens toe te voegen en digitaal in te dienen. Maximale gemak en minimale tijdsinvestering.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="h-6 w-6 text-sky-500 mr-2" />
                  Garantie op Voorwaarden
                </h4>
                <p className="text-gray-700">
                  Als F-gassen gecertificeerde installateurs garanderen wij dat uw systeem voldoet aan alle ISDE-voorwaarden. Verkeerde installatie of documentatie die tot afwijzing leidt, komt nooit voor bij onze klanten.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Phone className="h-6 w-6 text-sky-500 mr-2" />
                  Persoonlijke Begeleiding
                </h4>
                <p className="text-gray-700">
                  Vragen over de aanvraag? Onduidelijkheden in het proces? Wij staan u bij met persoonlijke telefonische begeleiding. Ook helpen wij gratis bij eventuele vragen van de RVO of bezwaarprocedures indien nodig.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Gemeentelijke Subsidies en Leningen in Limburg
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Naast de nationale ISDE-subsidie bieden veel Limburgse gemeenten aanvullende financiële regelingen voor energiebesparende maatregelen. Deze zijn meestal in de vorm van leningen met zeer lage rente (0-1%) en lange looptijden. U kunt deze combineren met de ISDE-subsidie voor optimale financiering:
            </p>
          </div>

          {/* Gemeentelijke Regelingen Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Gemeente</th>
                    <th className="px-6 py-4 text-left">Regeling</th>
                    <th className="px-6 py-4 text-left">Bedrag</th>
                    <th className="px-6 py-4 text-left">Voorwaarden</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {gemeentelijkRegelingen.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.gemeente}</td>
                      <td className="px-6 py-4 text-gray-700">{item.regeling}</td>
                      <td className="px-6 py-4 text-orange-600 font-semibold">{item.bedrag}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.voorwaarden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Let op:</strong> Gemeentelijke regelingen veranderen regelmatig en hebben vaak beperkte budgetten. Controleer altijd de actuele status bij uw gemeente. Wij informeren u graag over de meest recente regelingen in uw woonplaats en helpen u bij het aanvragen ervan.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Totaal Financieel Voordeel: Subsidie + Energiebesparing
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Het werkelijke voordeel van een warmtepomp airco gaat ver voorbij de eenmalige subsidie. Door de combinatie van subsidie en structurele energiebesparing verdient uw investering zich sneller terug dan u denkt:
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Totaal Rendement over 10 Jaar
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Investering premium airco (incl. installatie):</span>
                  <span className="text-xl font-bold text-gray-900">€2.495</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">ISDE subsidie terug:</span>
                  <span className="text-xl font-bold text-green-600">- €500</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Netto investering:</span>
                  <span className="text-xl font-bold text-gray-900">€1.995</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Jaarlijkse energiebesparing (10 jaar):</span>
                  <span className="text-xl font-bold text-green-600">+ €6.500</span>
                </div>

                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Onderhoudskosten (10 jaar):</span>
                  <span className="text-xl font-bold text-orange-600">- €1.000</span>
                </div>

                <div className="flex justify-between items-center pt-4 bg-green-100 p-4 rounded-lg mt-4">
                  <span className="text-lg font-bold text-gray-900">TOTAAL NETTO VOORDEEL (10 jaar):</span>
                  <span className="text-3xl font-bold text-green-700">+ €5.005</span>
                </div>

                <p className="text-sm text-gray-600 italic mt-4 text-center">
                  Dit rekenvoorbeeld gaat uit van gemiddeld gebruik en energieprijzen 2024. Individuele resultaten kunnen variëren afhankelijk van woninggrootte, isolatie en gebruikspatroon.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Waarom Kiezen voor StayCool Airco?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bij StayCool Airco krijgt u niet alleen een professionele airco installatie, maar ook complete begeleiding bij uw subsidieaanvraag. Onze klanten hebben een succesr success rate van vrijwel 100% bij ISDE-aanvragen dankzij onze expertise en zorgvuldige documentatie. Wij nemen u alle zorgen uit handen, van advies tot uitbetaling.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Gratis subsidie adviesgesprek:</strong> Wij berekenen vooraf uw te verwachten subsidie en besparing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Complete documentatie:</strong> Alle benodigde stukken automatisch geleverd na installatie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>F-gassen gecertificeerd:</strong> Voldoet aan wettelijke eis voor subsidie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Persoonlijke begeleiding:</strong> Hulp bij invullen en indienen aanvraag</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Garantie op goedkeuring:</strong> Bij afwijzing door onze fout, gratis hulp bij bezwaar</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Profiteer van Subsidie en Energiebesparing
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu gratis advies aan over uw subsidiemogelijkheden en ontdek hoeveel u kunt besparen met een warmtepomp airco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Subsidie Advies
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
            Veelgestelde Vragen over Airco Subsidies
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
            Start Vandaag met Besparen
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Combineer subsidie met energiebesparing en geniet van duurzaam comfort in uw woning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Vraag Offerte Aan
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Besparing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoSubsidiesLimburg;
