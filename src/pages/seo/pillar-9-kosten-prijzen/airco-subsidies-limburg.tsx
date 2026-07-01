import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Euro, Phone, Mail, TrendingUp, Shield, FileText, Award, AlertCircle, ExternalLink } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const AircoSubsidiesLimburg: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Kosten & Prijzen', path: '/seo/pillar-9-kosten-prijzen' },
    { label: 'Airco Subsidies Limburg' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Eerlijk over subsidie",
      description: "Een split-airco krijgt geen ISDE en geen 9% BTW. Wij vertellen u wat wél kan."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-sky-500" />,
      title: "Energiebesparing",
      description: "Het echte voordeel: tot 60% lagere stookkosten, terugverdientijd 4-6 jaar."
    },
    {
      icon: <FileText className="h-12 w-12 text-sky-500" />,
      title: "Gemeentelijke regelingen",
      description: "Soms zijn er lokale leningen of premies. Wij wijzen u de weg per gemeente."
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Zakelijk BTW terug",
      description: "Ondernemers kunnen de 21% BTW meestal als voorbelasting terugvragen."
    }
  ];

  const isdeVoorwaarden = [
    {
      criterium: "Type Systeem",
      voorwaarde: "Lucht-water, hybride of bodemwarmtepomp — géén split-airco (die staat niet op de RVO-lijst)",
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
      categorie: "Split-airco (lucht-lucht warmtepomp)",
      beschrijving: "De gewone airco met verwarmingsfunctie die wij installeren",
      bedrag: "Geen ISDE",
      voorwaarden: "Staat niet op de RVO ISDE-apparatenlijst; hierop geldt 21% BTW"
    },
    {
      categorie: "Hybride Warmtepomp",
      beschrijving: "Lucht-water warmtepomp + HR-ketel als back-up",
      bedrag: "€1.500 - €2.000",
      voorwaarden: "Minimale SCOP 4.0; via gespecialiseerde installateur"
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
      question: "Komen airco's in aanmerking voor ISDE-subsidie?",
      answer: "Nee. Een split-airco is technisch een lucht-lucht warmtepomp en die staat niet op de ISDE-apparatenlijst van RVO — ook niet als de airco kan verwarmen. ISDE geldt alleen voor lucht-water warmtepompen, hybride warmtepompen, bodemwarmtepompen, warmtepompboilers en zonneboilers. Andere installateurs beloven soms ten onrechte ISDE op een airco. Wij zijn daar eerlijk over: op een airco geldt geen ISDE en geen verlaagd BTW-tarief."
    },
    {
      question: "Wat kan ik dan wél aan voordeel krijgen op een airco?",
      answer: "Drie dingen. (1) De energiebesparing zelf is het grootste voordeel: als warmtepomp verwarmt een airco veel efficiënter dan gas, met een terugverdientijd van doorgaans 4-6 jaar. (2) Bent u ondernemer met zakelijk gebruik, dan kunt u de 21% BTW meestal als voorbelasting terugvragen. (3) Sommige Limburgse gemeenten bieden aanvullende leningen of premies voor verduurzaming — zie de tabel verderop. Een verlaagd 9% BTW-tarief geldt níét voor airco (dat is voor isolatie)."
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
        title="Airco Subsidie Limburg 2026 | Geen ISDE — wat kan wél? | StayCool"
        description="Eerlijk: een split-airco krijgt geen ISDE en geen 9% BTW (het is 21%). Wat wél kan: gemeentelijke regelingen, zakelijke BTW-teruggave en vooral energiebesparing."
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Subsidie Advies Limburg",
          description: "Eerlijk advies over airco en subsidie in Limburg: een split-airco krijgt geen ISDE. Wij leggen uit wat wél kan (gemeentelijke regelingen, zakelijke BTW-teruggave, energiebesparing).",
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
      <FAQSchema faqs={[]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Subsidie Limburg: het eerlijke verhaal
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Eerlijk: een split-airco krijgt geen ISDE-subsidie en geen verlaagd BTW-tarief. Wij vertellen u wat wél kan — gemeentelijke regelingen, zakelijke BTW-teruggave en vooral de energiebesparing die uw investering terugverdient.
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
              Eerlijk over subsidie
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Terugverdientijd 4-6 jaar
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
              Airco en ISDE-subsidie: hoe zit het echt?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De ISDE (Investeringssubsidie Duurzame Energie) is een belangrijke financiële tegemoetkoming van de overheid voor het verduurzamen van uw woning. Maar let op: een split-airco valt er niet onder. Technisch is een airco een <strong>lucht-lucht warmtepomp</strong>, en die staat niet op de ISDE-apparatenlijst van RVO — ook niet als de airco kan verwarmen. Andere sites en installateurs claimen dat soms ten onrechte.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De ISDE-regeling (beheerd door RVO) is bedoeld om de gasketel te vervangen. Daarom geldt hij alleen voor <strong>lucht-water warmtepompen, hybride warmtepompen en bodemwarmtepompen</strong> — systemen die uw cv-water verwarmen. Een airco verwarmt de kamerlucht en komt dus niet in aanmerking. Ook een verlaagd 9% BTW-tarief geldt niet voor airco (dat is voor isolatie); op airco betaalt u 21% BTW.
            </p>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-lg my-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Belangrijk: laat u niet misleiden</h4>
                  <p className="text-gray-700">
                    Belooft een installateur "ISDE-subsidie" of "9% BTW" op een split-airco? Vraag om een schriftelijke onderbouwing (de ISDE-categorie of de wettelijke grond). Voor een airco bestaan die niet — op de factuur hoort 21% BTW te staan en er komt geen ISDE-uitkering.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Welk systeem krijgt wél ISDE?
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ISDE bestaat en is actief — alleen niet voor split-airco's. Het geldt voor systemen die uw gas-cv (deels) vervangen. Wij installeren split-airco's; kiest u voor een lucht-water of hybride warmtepomp, dan verwijzen we u naar gespecialiseerde partners die de ISDE direct in de offerte verrekenen.
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
              Kiest u voor een kwalificerende warmtepomp (lucht-water, hybride of bodem — dus geen split-airco), dan gelden voor de ISDE een aantal technische en administratieve voorwaarden:
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
              Ter info, voor wie een kwalificerende warmtepomp (lucht-water/hybride/bodem) laat plaatsen — voor een split-airco is dit niet van toepassing. Het ISDE-aanvraagproces verloopt zo:
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
              Hoe Helpt StayCool Airco u Verder?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We beloven geen subsidie die er niet is. Wel nemen we u het uitzoekwerk uit handen en zorgen we voor een eerlijke, complete offerte. Onze service omvat:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <FileText className="h-6 w-6 text-sky-500 mr-2" />
                  Transparante offerte
                </h4>
                <p className="text-gray-700">
                  Alle posten op een rij, de nette prijs incl. 21% BTW, en geen verzonnen subsidie-aftrek. Het bedrag in de offerte is wat u betaalt.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-2" />
                  Gemeentelijke regelingen
                </h4>
                <p className="text-gray-700">
                  We wijzen u op lokale leningen of premies die voor uw gemeente kunnen gelden (zie de tabel hieronder) en hoe u ze checkt via energiesubsidiewijzer.nl.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="h-6 w-6 text-sky-500 mr-2" />
                  Zakelijke BTW-teruggave
                </h4>
                <p className="text-gray-700">
                  Bent u ondernemer en gebruikt u de airco zakelijk? Dan kunt u de 21% BTW meestal als voorbelasting terugvragen. We leveren een correcte factuur met het typenummer.
                </p>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Phone className="h-6 w-6 text-sky-500 mr-2" />
                  Eerlijke doorrekening
                </h4>
                <p className="text-gray-700">
                  We rekenen uw werkelijke besparing en terugverdientijd voor. Overweegt u lucht-water of hybride (mét ISDE)? Dan verwijzen we u naar de juiste partner.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Gemeentelijke Subsidies en Leningen in Limburg
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Hier wordt het voor uw airco wél interessant: veel Limburgse gemeenten bieden aanvullende financiële regelingen voor energiebesparende maatregelen. Deze zijn meestal in de vorm van leningen met zeer lage rente (0-1%) en lange looptijden — een handige manier om uw airco-investering te financieren:
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
              Het werkelijke voordeel van een airco als warmtepomp zit niet in een subsidie, maar in de structurele energiebesparing. Daardoor verdient uw investering zich sneller terug dan u denkt:
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Totaal Rendement over 10 Jaar
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-green-200 pb-3">
                  <span className="text-gray-700 font-semibold">Investering premium airco (incl. installatie, 21% BTW):</span>
                  <span className="text-xl font-bold text-gray-900">€2.495</span>
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
                  <span className="text-3xl font-bold text-green-700">+ €3.005</span>
                </div>

                <p className="text-sm text-gray-600 italic mt-4 text-center">
                  Dit rekenvoorbeeld gaat uit van gemiddeld gebruik en energieprijzen, zonder subsidie (die geldt niet voor een split-airco). Individuele resultaten variëren met woninggrootte, isolatie en gebruikspatroon.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Waarom Kiezen voor StayCool Airco?
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bij StayCool Airco krijgt u een professionele airco-installatie én een eerlijk verhaal over de kosten. We beloven geen subsidie die er niet is, maar rekenen wél helder voor wat een airco u aan energie bespaart. Zo weet u precies waar u aan toe bent.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Gratis adviesgesprek:</strong> Wij berekenen vooraf uw besparing en terugverdientijd</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Eerlijke offerte:</strong> De nette prijs incl. 21% BTW, geen verzonnen subsidieposten</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>F-gassen gecertificeerd:</strong> Vakkundige, veilige installatie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Gemeentelijke regelingen:</strong> We wijzen u op lokale leningen en premies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Zakelijk voordeel:</strong> Ondernemers kunnen de BTW meestal terugvragen</span>
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
            Vraag nu gratis, eerlijk advies aan en ontdek hoeveel u met een airco op uw stookkosten bespaart — zonder verzonnen subsidies.
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
