import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, CheckCircle, FileText, Phone, Gift, TrendingUp, Calendar, MapPin, ArrowRight, AlertCircle } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijSubsidieLimburgPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Subsidie Limburg' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€900-4.000 Subsidie",
      description: "Combinatie van nationale en lokale subsidies voor maximaal voordeel"
    },
    {
      icon: <Gift className="h-12 w-12 text-yellow-500" />,
      title: "0% BTW = 21% Korting",
      description: "Direct €600-2.000 besparing door BTW-vrijstelling"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Aanvraag Hulp Gratis",
      description: "Wij helpen gratis met subsidieaanvragen en benodigde documenten"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Extra Gemeentevoordelen",
      description: "Limburgse gemeenten bieden vaak aanvullende regelingen"
    }
  ];

  const subsidies = [
    {
      name: "0% BTW-tarief",
      amount: "21% korting",
      realAmount: "€600-2.000",
      provider: "Rijksoverheid (permanent)",
      eligibility: "Alle particulieren",
      applicationProcess: "Automatisch door installateur",
      deadline: "Permanent (sinds januari 2023)",
      description: "Sinds 1 januari 2023 geldt 0% BTW op thuisbatterijen voor particulieren. Dit bespaart direct 21% op de totale investering inclusief installatie.",
      requirements: [
        "Particuliere aanschaf (niet zakelijk)",
        "Systeem moet voldoen aan CE-normering",
        "Installatie door gecertificeerd bedrijf"
      ],
      benefits: [
        "€850 besparing op SMILE-B3",
        "€1.200 besparing op SMILE5",
        "€2.060 besparing op SMILE-T10",
        "Verkort terugverdientijd met 1-2 jaar"
      ],
      howTo: "Installateur verrekent automatisch 0% BTW in de offerte. Geen aparte aanvraag nodig."
    },
    {
      name: "ISDE Subsidie",
      amount: "€300-800",
      realAmount: "€300-800",
      provider: "RVO.nl (Rijksdienst voor Ondernemend Nederland)",
      eligibility: "Particulieren met systeem ≥4 kWh",
      applicationProcess: "Online aanvragen via RVO.nl",
      deadline: "Budget beschikbaar tot uitputting",
      description: "De Investeringssubsidie Duurzame Energie (ISDE) ondersteunt particulieren bij investering in energieopslag. Budget is seizoensgebonden en vaak snel uitgeput.",
      requirements: [
        "Minimaal 4 kWh opslagcapaciteit",
        "Nieuw systeem (geen tweedehands)",
        "Installatie door erkend installateur",
        "Aanvraag binnen 6 maanden na installatie",
        "Systeem moet voldoen aan technische eisen RVO"
      ],
      benefits: [
        "€300-500 voor systemen 4-8 kWh",
        "€500-800 voor systemen &gt; kWh",
        "Combineerbaar met 0% BTW",
        "Verkorting terugverdientijd met 6-12 maanden"
      ],
      howTo: "1. Installeer thuisbatterij, 2. Verzamel facturen en certificaten, 3. Vraag binnen 6 maanden aan via mijn.rvo.nl, 4. Ontvang uitbetaling binnen 8-13 weken"
    },
    {
      name: "Gemeentelijke Subsidies Limburg",
      amount: "€0-1.000",
      realAmount: "Gemeente-afhankelijk",
      provider: "Limburgse gemeenten",
      eligibility: "Inwoners specifieke gemeenten",
      applicationProcess: "Via gemeentelijke website",
      deadline: "Verschilt per gemeente",
      description: "Verschillende Limburgse gemeenten bieden aanvullende subsidies voor energieopslag. Regelingen verschillen sterk per gemeente en jaar.",
      requirements: [
        "Inwoner van betreffende gemeente",
        "Aanvraag vóór of kort na installatie",
        "Voldoen aan gemeentelijke voorwaarden",
        "Soms verplichte energiescan of advies"
      ],
      benefits: [
        "Maastricht: tot €500 extra",
        "Roermond: tot €750 extra",
        "Venlo: duurzaamheidslening met korting",
        "Sittard-Geleen: tot €400 extra"
      ],
      howTo: "Check via Verbeterjehuis.nl of uw gemeente subsidie biedt. Vraag aan via gemeentelijke website of bel met duurzaamheidsloket."
    },
    {
      name: "Energiebespaarlening",
      amount: "0-2% rente",
      realAmount: "Geen directe subsidie, maar lage rente",
      provider: "SVn (Stimuleringsfonds Volkshuisvesting)",
      eligibility: "Eigenaar-bewoners met laag inkomen",
      applicationProcess: "Via Nationaal Energiebespaarfonds",
      deadline: "Doorlopend beschikbaar",
      description: "Lening met lage rente (0-2%) voor energiebesparende maatregelen waaronder thuisbatterijen. Geen directe subsidie maar wel financieringsvoordeel.",
      requirements: [
        "Eigenaar-bewoner",
        "Maximaal inkomen €50.000 (alleenstaand) of €60.000 (gezin)",
        "Minimaal €2.500 lenen",
        "Maximaal €27.000 lenen"
      ],
      benefits: [
        "Zeer lage rente (0-2% vs. 5-8% regulier)",
        "Geen BKR-registratie",
        "Spreiding tot 10 jaar mogelijk",
        "Besparing op rentekosten: €500-2.000"
      ],
      howTo: "Aanvragen via energiebespaarfonds.nl. Offerte uploaden, inkomensgegevens verstrekken, binnen 2 weken beslissing."
    },
    {
      name: "Zakelijke Investeringsaftrek",
      amount: "25-50% aftrekbaar",
      realAmount: "€2.000-5.000 over 5 jaar",
      provider: "Belastingdienst",
      eligibility: "Zakelijke gebruikers, ZZP, thuiswerkers",
      applicationProcess: "Via zakelijke belastingaangifte",
      deadline: "Jaarlijks bij aangifte",
      description: "Zakelijke gebruikers kunnen thuisbatterij afschrijven als bedrijfsmiddel. BTW kan worden teruggevorderd bij zakelijk gebruik.",
      requirements: [
        "Zakelijk gebruik aantoonbaar",
        "Thuiskantoor of bedrijfspand",
        "Factuur op bedrijfsnaam",
        "Percentage zakelijk gebruik bepalen"
      ],
      benefits: [
        "BTW terugvorderen (21%)",
        "Afschrijving over 5 jaar",
        "Kleinschaligheidsinvesteringsaftrek mogelijk",
        "Energieinvesteringsaftrek (EIA) mogelijk"
      ],
      howTo: "Bespreek met accountant. BTW terugvragen in aangifte. Afschrijven over 5 jaar in jaarrekening."
    }
  ];

  const limburgMunicipalities = [
    {
      name: "Maastricht",
      subsidy: "Tot €500",
      conditions: "Verduurzamingslening met korting",
      link: "maastricht.nl/duurzaam",
      details: "Maastricht biedt aanvullende subsidie via het Energieloket. Combinatie van lening en subsidie mogelijk.",
      requirements: ["Inwoner Maastricht", "Energielabel D of lager", "Minimaal €2.000 investeren"]
    },
    {
      name: "Roermond",
      subsidy: "Tot €750",
      conditions: "Duurzaamheidssubsidie 2024",
      link: "roermond.nl/subsidies",
      details: "Roermond heeft actieve duurzaamheidsregelingen inclusief extra voordelen voor thuisbatterijen bij combinatie met zonnepanelen.",
      requirements: ["Inwoner Roermond", "Combinatie met andere maatregelen mogelijk", "Budget beschikbaar"]
    },
    {
      name: "Venlo",
      subsidy: "Lening met korting",
      conditions: "Duurzaamheidslening SVn",
      link: "venlo.nl/verduurzamen",
      details: "Venlo faciliteert toegang tot leningen met gunstige voorwaarden en biedt advies via het Energieloket.",
      requirements: ["Inwoner Venlo", "Energiescan verplicht", "Lening via SVn"]
    },
    {
      name: "Sittard-Geleen",
      subsidy: "Tot €400",
      conditions: "Energiebesparingsregeling",
      link: "sittard-geleen.nl/subsidies",
      details: "Subsidie voor energieopslag als onderdeel van bredere verduurzamingsaanpak.",
      requirements: ["Inwoner Sittard-Geleen", "Adviesgesprek verplicht", "Combinatie met isolatie voordelig"]
    },
    {
      name: "Heerlen",
      subsidy: "Op aanvraag",
      conditions: "Verduurzamingsfonds",
      link: "heerlen.nl/wonen",
      details: "Heerlen heeft wisselende regelingen. Check actuele mogelijkheden via gemeentelijk loket.",
      requirements: ["Inwoner Heerlen", "Check actuele voorwaarden"]
    },
    {
      name: "Weert",
      subsidy: "Lening faciliteit",
      conditions: "Energiebespaarlening SVn",
      link: "weert.nl/duurzaamheid",
      details: "Weert ondersteunt via toegang tot gunstige financiering en advies.",
      requirements: ["Inwoner Weert", "Energiescan mogelijk verplicht"]
    },
    {
      name: "Venray",
      subsidy: "Variabel",
      conditions: "Check gemeentelijke website",
      link: "venray.nl",
      details: "Venray heeft seizoensgebonden regelingen. Neem contact op met gemeentelijk energieloket.",
      requirements: ["Inwoner Venray", "Actuele voorwaarden via loket"]
    },
    {
      name: "Brunssum",
      subsidy: "Op aanvraag",
      conditions: "Energieloket",
      link: "brunssum.nl",
      details: "Brunssum verwijst naar provinciale en nationale regelingen en kan adviseren over mogelijkheden.",
      requirements: ["Inwoner Brunssum", "Adviesgesprek mogelijk"]
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Check Beschikbare Subsidies",
      description: "Controleer via Verbeterjehuis.nl welke subsidies beschikbaar zijn in uw gemeente. Let op deadlines en budgetlimieten.",
      icon: <CheckCircle className="h-8 w-8 text-yellow-500" />
    },
    {
      step: "2",
      title: "Vraag Offerte + Advies",
      description: "Vraag offerte aan bij erkend installateur. Wij helpen gratis met subsidieadvies en benodigde documenten.",
      icon: <FileText className="h-8 w-8 text-yellow-500" />
    },
    {
      step: "3",
      title: "Installeer Thuisbatterij",
      description: "Laat systeem installeren door erkend bedrijf. Bewaar alle facturen, certificaten en garantiebewijzen.",
      icon: <CheckCircle className="h-8 w-8 text-yellow-500" />
    },
    {
      step: "4",
      title: "Dien Aanvraag In",
      description: "Vraag ISDE subsidie aan via mijn.rvo.nl binnen 6 maanden. Gemeentelijke subsidies volgens lokale procedure.",
      icon: <FileText className="h-8 w-8 text-yellow-500" />
    },
    {
      step: "5",
      title: "Ontvang Uitbetaling",
      description: "ISDE: 8-13 weken. Gemeentelijk: 4-12 weken. BTW-voordeel direct bij aanschaf.",
      icon: <Euro className="h-8 w-8 text-yellow-500" />
    }
  ];

  const requiredDocuments = [
    {
      document: "Factuur Thuisbatterij",
      description: "Originele factuur van installateur met BTW-specificatie (0%) en systeemspecificaties",
      required: "Verplicht voor alle subsidies"
    },
    {
      document: "Installatiecertificaat",
      description: "Certificaat van erkend installateur dat systeem voldoet aan normen en veilig is geïnstalleerd",
      required: "Verplicht voor ISDE en gemeente"
    },
    {
      document: "Productspecificaties",
      description: "Technische specificaties van batterijsysteem (capaciteit, merk, type, serienummer)",
      required: "Verplicht voor ISDE"
    },
    {
      document: "Identiteitsbewijs",
      description: "Geldig legitimatiebewijs van aanvrager",
      required: "Verplicht voor alle subsidies"
    },
    {
      document: "Bewijs van Eigendom",
      description: "Kadastrale gegevens of koopakte woning waarop systeem geïnstalleerd is",
      required: "Vaak verplicht"
    },
    {
      document: "Bankgegevens",
      description: "IBAN voor uitbetaling subsidie",
      required: "Verplicht voor uitbetaling"
    }
  ];

  const tips = [
    {
      icon: <Calendar className="h-8 w-8 text-yellow-500" />,
      title: "Vraag Tijdig Aan",
      description: "ISDE budget raakt vaak snel op. Vraag direct aan na installatie (binnen 6 maanden verplicht). Gemeentelijke subsidies vaak first-come-first-served."
    },
    {
      icon: <FileText className="h-8 w-8 text-yellow-500" />,
      title: "Bewaar Alle Documenten",
      description: "Bewaar facturen, certificaten, foto's en correspondentie. Sommige subsidies vragen achteraf om extra bewijsstukken."
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Combineer Subsidies",
      description: "0% BTW + ISDE + gemeentelijk = maximaal voordeel. Wij helpen bij het combineren van regelingen voor optimaal financieel resultaat."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-yellow-500" />,
      title: "Let op Voorwaarden",
      description: "Elke subsidie heeft eigen voorwaarden. Check minimale capaciteit, installatiedeadlines, inkomensgrenzen en combinatiemogelijkheden."
    }
  ];

  const faqs = [
    {
      question: "Hoeveel subsidie kan ik krijgen voor een thuisbatterij in Limburg?",
      answer: "In Limburg kun je €900-4.000 totaal subsidievoordeel krijgen door combinatie van regelingen: 0% BTW bespaart €600-2.000, ISDE subsidie levert €300-800 op, en sommige Limburgse gemeenten (Maastricht, Roermond, Sittard-Geleen) bieden €200-750 extra. Zakelijke gebruikers kunnen via BTW-teruggave en afschrijving nog €2.000-5.000 extra voordeel behalen over 5 jaar."
    },
    {
      question: "Hoe vraag ik de ISDE subsidie aan?",
      answer: "ISDE aanvraag verloopt via mijn.rvo.nl. Stappen: (1) Laat thuisbatterij installeren door erkend bedrijf, (2) Verzamel factuur, installatiecertificaat en productspecificaties, (3) Log in op mijn.rvo.nl binnen 6 maanden na installatie, (4) Upload documenten en vul formulier in, (5) Ontvang bevestiging en uitbetaling binnen 8-13 weken. Wij helpen gratis met aanvraag en benodigde documenten."
    },
    {
      question: "Welke Limburgse gemeenten bieden extra subsidie?",
      answer: "Verschillende Limburgse gemeenten bieden aanvullende subsidies: Maastricht (tot €500), Roermond (tot €750), Sittard-Geleen (tot €400), Venlo (gunstige lening), Heerlen (op aanvraag). Regelingen wijzigen jaarlijks en budget raakt snel op. Check altijd actuele mogelijkheden via Verbeterjehuis.nl of bel uw gemeentelijk energieloket. Wij adviseren gratis over gemeentelijke regelingen."
    },
    {
      question: "Kan ik de 0% BTW combineren met andere subsidies?",
      answer: "Ja! De 0% BTW regeling is combineerbaar met alle andere subsidies. Dit is het basisvoordeel dat automatisch geldt. Daarbovenop kun je ISDE subsidie aanvragen, gemeentelijke regelingen benutten, en bij zakelijk gebruik ook BTW terugvorderen en afschrijven. Door slimme combinatie maximaliseer je totale subsidievoordeel naar €900-4.000."
    },
    {
      question: "Wat zijn de voorwaarden voor ISDE subsidie?",
      answer: "ISDE voorwaarden: (1) Minimaal 4 kWh opslagcapaciteit, (2) Nieuw systeem (geen tweedehands), (3) Installatie door erkend installateur met certificaat, (4) Aanvraag binnen 6 maanden na installatie, (5) Systeem moet voldoen aan CE-normering en RVO technische eisen. De SMILE5 (5,7 kWh) en SMILE-T10 (11,55 kWh) voldoen automatisch. SMILE-B3 (2,87 kWh) komt niet in aanmerking vanwege te lage capaciteit."
    },
    {
      question: "Hoe lang duurt het voordat ik subsidie ontvang?",
      answer: "0% BTW is direct bij aanschaf - installateur verrekent in offerte. ISDE subsidie: 8-13 weken na goedkeuring aanvraag. Gemeentelijke subsidies: 4-12 weken afhankelijk van gemeente en drukte. Energiebespaarlening: 2-4 weken beslissing, direct na goedkeuring beschikbaar. Zakelijke BTW-teruggave: met volgende BTW-aangifte (kwartaal of jaar). Totale proces: 2-4 maanden voor alle subsidies."
    },
    {
      question: "Kan ik subsidie krijgen als ik al een thuisbatterij heb geïnstalleerd?",
      answer: "Voor ISDE: Ja, maar aanvraag moet binnen 6 maanden na installatiedatum. Na 6 maanden vervalt aanspraak. Voor gemeentelijke subsidies: Verschilt per gemeente - sommige vereisen aanvraag vóór installatie. 0% BTW: Automatisch bij aanschaf, achteraf niet terugvorderbaar. Advies: Vraag vóór of direct na installatie subsidies aan om geen voordelen mis te lopen."
    },
    {
      question: "Welke documenten heb ik nodig voor subsidieaanvraag?",
      answer: "Verplichte documenten: (1) Factuur met BTW-specificatie en systeemdetails, (2) Installatiecertificaat van erkend installateur, (3) Productspecificaties (merk, type, capaciteit, serienummer), (4) Identiteitsbewijs, (5) Bewijs van eigendom woning (kadaster of koopakte), (6) Bankgegevens (IBAN). Sommige gemeenten vragen extra: energielabel, WOZ-beschikking, of energiescan. Wij helpen gratis met verzamelen benodigde documenten."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Subsidie Limburg 2024 | ISDE & Gemeenten | StayCool Airco"
        description="Thuisbatterij subsidie Limburg ✓ €900-4.000 voordeel ✓ 0% BTW + ISDE + gemeentelijk ✓ Aanvraag hulp gratis ✓ Alle regelingen op rij ✓ Direct aanvragen!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Subsidie Limburg: Alle Regelingen 2024",
          description: "Complete gids over beschikbare subsidies voor thuisbatterijen in Limburg. ISDE, gemeentelijke regelingen, BTW-voordeel en aanvraagproces uitgelegd.",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Subsidie Limburg: Alle Regelingen & Aanvraag 2024
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Profiteer van €900-4.000 subsidievoordeel! Combineer 0% BTW (€600-2.000), ISDE subsidie (€300-800) en gemeentelijke regelingen. Wij helpen gratis met aanvragen.
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
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Euro className="h-5 w-5 mr-2" />
              Bereken Uw Voordeel
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Gift className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">ISDE Budget Vaak Snel Op!</p>
                <p className="text-sm">
                  Vraag direct na installatie aan. Budget beschikbaar tot uitputting. Wij helpen gratis met aanvraag binnen 6 maanden deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maximaal Subsidievoordeel in Limburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combineer alle beschikbare regelingen voor optimaal financieel resultaat
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

      {/* Subsidies Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alle Beschikbare Subsidies & Regelingen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compleet overzicht van nationale en Limburgse subsidies voor thuisbatterijen
            </p>
          </div>

          <div className="space-y-8">
            {subsidies.map((subsidy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{subsidy.name}</h3>
                      <p className="text-sm mt-1 text-green-100">{subsidy.provider}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-100">Voordeel</p>
                      <p className="text-3xl font-bold">{subsidy.amount}</p>
                      <p className="text-sm text-green-100">{subsidy.realAmount}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-lg text-gray-700 mb-6">{subsidy.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Voorwaarden:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {subsidy.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Euro className="h-5 w-5 text-green-500 mr-2" />
                        Voordelen:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {subsidy.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 flex items-start">
                    <FileText className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Aanvragen:</p>
                      <p className="text-sm text-gray-700 mb-2">{subsidy.howTo}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span><strong>Deadline:</strong> {subsidy.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limburg Municipalities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gemeentelijke Subsidies Limburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Overzicht van aanvullende subsidies per Limburgse gemeente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {limburgMunicipalities.map((muni, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{muni.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-green-600">{muni.subsidy}</span>
                </div>

                <p className="text-gray-700 mb-3">{muni.details}</p>

                <div className="bg-white rounded p-3 mb-3">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Voorwaarden:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {muni.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-sm text-blue-600">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{muni.conditions}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-800">
              <strong>Let op:</strong> Gemeentelijke regelingen wijzigen regelmatig en budget raakt snel op. Check altijd actuele mogelijkheden via <a href="https://www.verbeterjehuis.nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Verbeterjehuis.nl</a> of bel uw gemeentelijk energieloket. Wij adviseren gratis over beschikbare regelingen in uw gemeente.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aanvraagproces Stap voor Stap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zo vraag je thuisbatterij subsidies aan in 5 eenvoudige stappen
            </p>
          </div>

          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white text-xl font-bold mr-6">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wij Helpen Gratis met Subsidieaanvragen
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Van offerte tot uitbetaling: wij begeleiden u bij alle subsidies en regelingen. Maximaliseer uw subsidievoordeel met onze expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <FileText className="h-6 w-6 mr-2" />
              Gratis Subsidie Advies
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benodigde Documenten voor Aanvraag
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze documenten heb je nodig voor een succesvolle subsidieaanvraag
            </p>
          </div>

          <div className="space-y-4">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                      <FileText className="h-5 w-5 text-yellow-500 mr-3" />
                      {doc.document}
                    </h3>
                    <p className="text-gray-700 mb-2">{doc.description}</p>
                  </div>
                  <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full whitespace-nowrap">
                    {doc.required}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-gray-800">
              <strong>Onze service:</strong> Wij helpen gratis bij het verzamelen en ordenen van alle benodigde documenten. Bij installatie verstrekken wij automatisch correcte facturen en certificaten voor subsidieaanvragen.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips voor Succesvolle Subsidieaanvraag
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximaliseer je kans op subsidie met deze praktische tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  {tip.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Thuisbatterij Subsidies
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
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

      {/* Related Pages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Meer Informatie over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kosten Overzicht</h3>
              <p className="text-sm text-gray-600 mb-3">Alle prijzen transparant</p>
              <p className="text-yellow-600 font-bold">€3.200-11.000</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">ROI berekenen</p>
              <p className="text-yellow-600 font-bold">5-12 jaar</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <CheckCircle className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Systemen</h3>
              <p className="text-sm text-gray-600 mb-3">AlphaESS batterijen</p>
              <p className="text-yellow-600 font-bold">Vergelijk nu</p>
            </Link>

            <Link
              to="/besparingcalculator"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Bereken voordeel</p>
              <p className="text-yellow-600 font-bold">Gratis tool</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Profiteer Nu van Alle Subsidies & Voordelen
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            ISDE budget raakt snel op! Vraag direct offerte aan inclusief gratis subsidieadvies. Wij helpen met alle aanvragen en maximaliseren uw voordeel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <FileText className="h-6 w-6 mr-2" />
              Gratis Subsidie Advies
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Euro className="h-6 w-6 mr-2" />
              Bereken Voordeel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijSubsidieLimburgPage;
