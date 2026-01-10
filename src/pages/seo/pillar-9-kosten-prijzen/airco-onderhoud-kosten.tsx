import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Euro, Phone, Mail, Wrench, Shield, Calendar, AlertCircle, TrendingDown, Clock } from 'lucide-react';
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
      title: "Vanaf €11 per Maand",
      description: "Onderhoudscontract inclusief jaarlijkse beurt, reiniging, controle en voorrang bij storingen."
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Voorkomt Storingen",
      description: "Preventief onderhoud vermindert kans op dure reparaties met 80%."
    },
    {
      icon: <Calendar className="h-12 w-12 text-sky-500" />,
      title: "Onderhoudscontract",
      description: "Vaste afspraak, korting, voorrang bij storing en garantiebehoud."
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-sky-500" />,
      title: "15% Energiebesparing",
      description: "Goed onderhoud houdt efficiency op peil en bespaart jaarlijks op energie."
    }
  ];

  const onderhoudsPrijzen = [
    {
      service: "Onderhoudsbeurt (zonder contract)",
      omschrijving: "Complete onderhoudsbeurt: filters reinigen/vervangen, binnen- en buitenunit reinigen, condensafvoer, koudemiddeldruk en elektrische connecties controleren",
      frequentie: "1x per jaar",
      prijs: "€179",
      duur: "60-90 min"
    },
    {
      service: "Deep Cleaning Service",
      omschrijving: "Volledige demontage en reiniging binnenunit, desinfectie, anti-bacteriële behandeling",
      frequentie: "1x per 2-3 jaar",
      prijs: "€195 - €245",
      duur: "2-3 uur"
    },
    {
      service: "Filtervervanging (standaard)",
      omschrijving: "Vervangen van standaard luchtfilters (set voor binnen- en buitenunit)",
      frequentie: "1-2x per jaar",
      prijs: "€25 - €45",
      duur: "15 min"
    },
    {
      service: "Premium Filtervervanging",
      omschrijving: "HEPA/PM2.5/actieve koolstoffilters voor luchtzuivering",
      frequentie: "1x per jaar",
      prijs: "€65 - €95",
      duur: "20 min"
    },
    {
      service: "Koudemiddel Bijvullen",
      omschrijving: "Bijvullen koudemiddel bij lekverliezen (excl. lekdetectie)",
      frequentie: "Bij tekort",
      prijs: "€95 + €15-30/kg",
      duur: "30-45 min"
    },
    {
      service: "Storing Diagnose",
      omschrijving: "Uitgebreide diagnose bij storingen, foutcode-uitlezing, probleemanalyse",
      frequentie: "Bij storing",
      prijs: "€65 - €85",
      duur: "30-45 min"
    },
    {
      service: "Spoedservice (buiten kantooruren)",
      omschrijving: "Avond/weekend/feestdag service bij urgente storingen",
      frequentie: "Bij nood",
      prijs: "€125 + reparatie",
      duur: "Variabel"
    }
  ];

  const onderhoudsContracten = [
    {
      pakket: "Standaard Onderhoudscontract",
      prijs: "€11/maand",
      prijsJaar: "(€132/jaar)",
      inclusief: [
        "1x jaarlijkse complete onderhoudsbeurt",
        "Filters reinigen en controle alle onderdelen",
        "Geen voorrijkosten bij storingen",
        "Voorrang bij storingen",
        "Garantiebehoud gewaarborgd",
        "Vaste jaarlijkse afspraak automatisch ingepland"
      ],
      geschiktVoor: "Particulieren, normale gebruiksintensiteit"
    },
    {
      pakket: "Premium Onderhoudscontract",
      prijs: "€16/maand",
      prijsJaar: "(€192/jaar)",
      inclusief: [
        "1x jaarlijkse uitgebreide onderhoudsbeurt",
        "Alle standaardonderdelen + koudemiddelcheck",
        "15% korting op reparaties en onderdelen",
        "Voorrang bij storingen binnen 24 uur",
        "Geen voorrijkosten bij storingen",
        "Vervangend toestel bij langdurige reparatie",
        "Garantiebehoud en -verlenging mogelijk"
      ],
      geschiktVoor: "Intensief gebruik, zakelijk, oudere systemen"
    }
  ];

  const totaleJaarKosten = [
    {
      scenario: "Zelf Onderhouden",
      onderhoud: "€0",
      filters: "€30",
      energie: "€280",
      reparaties: "€150 (gemiddeld)",
      totaal: "€460/jaar",
      risico: "Hoog - geen garantie, storingskans 25%"
    },
    {
      scenario: "Losse Onderhoudsbeurt",
      onderhoud: "€179",
      filters: "Inbegrepen",
      energie: "€240 (-15%)",
      reparaties: "€50 (gemiddeld)",
      totaal: "€469/jaar",
      risico: "Gemiddeld - garantiebehoud, storingskans 8%"
    },
    {
      scenario: "Standaard Contract (€11/mnd)",
      onderhoud: "€132",
      filters: "Inbegrepen",
      energie: "€240 (-15%)",
      reparaties: "€25 (gedekt)",
      totaal: "€397/jaar",
      risico: "Laag - voorrang service, storingskans 5%"
    },
    {
      scenario: "Premium Contract (€16/mnd)",
      onderhoud: "€192",
      filters: "Inbegrepen",
      energie: "€240 (-15%)",
      reparaties: "€0 (korting 15%)",
      totaal: "€432/jaar",
      risico: "Minimaal - vervangend toestel, storingskans 3%"
    }
  ];

  const veelvoorkomendeProblemen = [
    {
      probleem: "Vuile Filters",
      symptomen: "Verminderde luchtstroom, hoger stroomverbruik, geluidsoverlast",
      gevolgen: "15-25% hoger energieverbruik, slechte luchtkwaliteit, schade aan ventilator",
      preventie: "Filters reinigen elke 2-4 weken, vervangen 1-2x per jaar",
      kosten: "Reiniging: gratis DIY | Vervanging: €25-95"
    },
    {
      probleem: "Koudemiddel Lekken",
      symptomen: "Verminderde koeling, lange aanlooptijden, ijsvorming op leidingen",
      gevolgen: "50% capaciteitsverlies, 30% hoger stroomverbruik, compressor schade",
      preventie: "Jaarlijkse drukcontrole, professionele installatie, no-DIY",
      kosten: "Detectie + reparatie: €150-450 | Bijvullen: €15-30/kg"
    },
    {
      probleem: "Verstopte Condensafvoer",
      symptomen: "Waterlekkage binnenunit, druppels, vochtplekken aan muur",
      gevolgen: "Waterschade interieur, schimmelvorming, elektronicabeschadiging",
      preventie: "Jaarlijks doorspuiten afvoer, afvoerpomp controleren",
      kosten: "Reiniging: €45-75 | Vervanging afvoerpomp: €95-175"
    },
    {
      probleem: "Vieze Lucht / Geur",
      symptomen: "Muf of zure geur bij opstarten, allergische reacties",
      gevolgen: "Schimmel in unit, bacteriën in lucht, gezondheidsklachten",
      preventie: "Auto-clean functie gebruiken, jaarlijkse desinfectie",
      kosten: "Deep cleaning: €195-245 | Anti-bacteriële behandeling: inbegrepen"
    },
    {
      probleem: "Defecte Ventilator",
      symptomen: "Vreemde geluiden (klikken, ratelen), geen luchtstroom",
      gevolgen: "Totale uitval systeem, oververhitting compressor, brandgevaar",
      preventie: "Jaarlijks smeren lagers, vroegtijdig storingen laten repareren",
      kosten: "Reparatie: €125-195 | Vervanging: €250-450"
    },
    {
      probleem: "Elektrische Problemen",
      symptomen: "Unit start niet, foutcodes op display, thermische beveiliging slaat aan",
      gevolgen: "Geen koeling/verwarming mogelijk, brandgevaar bij kortsluiting",
      preventie: "Jaarlijkse controle connecties, geen DIY aan elektronica",
      kosten: "Diagnose: €65-85 | Reparatie: €95-350 afhankelijk van onderdeel"
    }
  ];

  const faqItems = [
    {
      question: "Hoe vaak moet een airco onderhouden worden?",
      answer: "Voor optimale prestaties adviseren we minimaal 1x per jaar professioneel onderhoud, bij voorkeur voor het begin van het koelseizoen (april-mei). Bij intensief gebruik (dagelijks  meer dan 6 uur), zakelijke toepassingen, of in stoffige omgevingen is 2x per jaar aan te raden. Tussen de professionele beurten door kunt u zelf maandelijks de filters reinigen en de units visueel controleren. Dit voorkomt 80% van alle storingen en houdt de efficiency optimaal."
    },
    {
      question: "Wat kost een jaarlijkse airco onderhoudsbeurt?",
      answer: "Een losse onderhoudsbeurt kost €179 voor één single-split systeem. Dit omvat reiniging van filters en units, controle van alle onderdelen inclusief koudemiddeldruk en elektrische connecties. Voordeliger is een onderhoudscontract: Standaard €11/maand (€132/jaar) of Premium €16/maand (€192/jaar). Met een contract krijgt u extra voordelen zoals voorrang bij storingen, geen voorrijkosten en garantiebehoud."
    },
    {
      question: "Kan ik mijn airco zelf onderhouden of is professioneel onderhoud nodig?",
      answer: "Basisonderhoud zoals filters reinigen en units afstoffen kunt u zelf doen - dit adviseren wij zelfs maandelijks te doen. Professioneel onderhoud is echter essentieel voor: koudemiddeldruk controleren (vereist F-gassen certificaat), elektrische connecties controleren (elektrische veiligheid), deep cleaning binnenunit (demontage vereist), garantiebehoud (fabrikanten eisen professioneel onderhoud), en storingdiagnose (gespecialiseerde apparatuur). Jaarlijks professioneel onderhoud voorkomt 80% van storingen en bespaart op lange termijn kosten."
    },
    {
      question: "Wat gebeurt er als ik geen onderhoud laat uitvoeren?",
      answer: "Zonder regelmatig onderhoud verslechtert de airco geleidelijk: efficiency daalt met 15-25% wat leidt tot hogere energiekosten (€50-100/jaar extra), filters verstopppen waardoor luchtkwaliteit vermindert en ventilator overbelast raakt, condensafvoer verstopt met risico op waterlekkage en schade, koudemiddel lekt langzaam weg waardoor capaciteit afneemt, schimmel en bacteriën groeien in de unit met gezondheidsrisico's, en de levensduur verkort van 15 naar 7-10 jaar. Belangrijkste risico: garantie vervalt bij gebrek aan onderhoud, dus reparaties zijn volledig voor eigen rekening."
    },
    {
      question: "Is een onderhoudscontract voordeliger dan losse beurten?",
      answer: "Absoluut! Een Standaard contract (€11/maand = €132/jaar) is €47 goedkoper dan een losse beurt (€179) én u krijgt extra voordelen: vaste jaarlijkse afspraak, geen voorrijkosten bij storingen, voorrang bij service en garantiebehoud. Het Premium contract (€16/maand = €192/jaar) biedt nog meer: voorrang binnen 24u, 15% korting op reparaties en onderdelen, en een vervangend toestel bij langdurige reparatie. Voor intensief gebruik of zakelijke toepassingen is Premium de beste keuze."
    },
    {
      question: "Welke onderdelen slijten het snelst en moeten vervangen worden?",
      answer: "De meest voorkomende slijtageonderdelen zijn: luchtfilters (vervangen 1-2x per jaar, €25-95), condensafvoerpomp (gemiddeld na 5-7 jaar, €95-175), ventilatormotoren (na 8-12 jaar bij normaal onderhoud, €250-450), printplaten/elektronica (na 10-15 jaar, €150-350), en thermostaatsensoren (na 7-10 jaar, €75-125). Bij goed preventief onderhoud gaat de compressor (duurste onderdeel €800-1500) gemakkelijk 15-20 jaar mee. Met onderhoudscontract zijn veel kleine onderdelen gedekt, wat onverwachte kosten voorkomt."
    },
    {
      question: "Wat zijn de totale jaarlijkse kosten van een airco?",
      answer: "De totale jaarkosten bestaan uit: onderhoudscontract €132-192/jaar (Standaard €11/mnd of Premium €16/mnd), elektriciteitskosten €180-400/jaar (afhankelijk van gebruik en efficiency), en eventuele reparaties (bij contract krijgt u korting en voorrang). Totaal: €312-592/jaar, gemiddeld €400/jaar. Dit is ruimschoots gecompenseerd door de energiebesparing van €400-800/jaar bij gebruik als verwarming. Netto profiteert u dus €50-400/jaar, terwijl u geniet van optimaal comfort."
    },
    {
      question: "Waarom is onderhoud belangrijk voor de garantie?",
      answer: "Alle airco fabrikanten eisen jaarlijks professioneel onderhoud als voorwaarde voor garantie. Zonder onderhoudsbewijzen vervalt uw garantie (5-10 jaar afhankelijk van merk) en bent u zelf verantwoordelijk voor alle reparatiekosten. Een nieuwe compressor kost €800-1500, printplaat €150-350, volledige unit €1200-3000. Een onderhoudscontract vanaf €11/maand is dus een fractie van deze kosten en beschermt uw investering volledig. Wij leveren na elke beurt digitale onderhoudsbewijzen die uw garantie waarborgen en overdraagbaar zijn bij verhuizing/verkoop."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Onderhoud Kosten Limburg | Vanaf €11/maand | StayCool Airco"
        description="Airco onderhoud vanaf €11/maand ✓ Voorkomt storingen 80% ✓ Bespaart 15% energie ✓ Onderhoudscontract beschikbaar ✓ Gratis advies onderhoud!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Onderhoud & Service",
          description: "Professioneel airco onderhoud in Limburg met jaarlijkse beurten, onderhoudscontracten en spoedservice. Voorkomt storingen en verlengt levensduur.",
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
            price: "11",
            priceCurrency: "EUR",
            unitText: "per maand"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Onderhoud Kosten: Vanaf €11/maand voor Optimale Prestaties
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Professioneel airco onderhoud voorkomt 80% van storingen, bespaart 15% energie en verlengt de levensduur. Met onderhoudscontract vanaf €11/maand zorgeloos genieten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Onderhoud Inplannen
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
              Vanaf €11 per maand
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
              Waarom is Airco Onderhoud Essentieel?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Regelmatig professioneel onderhoud aan uw airco is geen luxe maar noodzaak. Net als uw auto heeft een airco periodieke service nodig om optimaal te blijven functioneren. Zonder onderhoud verslechtert de prestatie geleidelijk, stijgen de energiekosten, neemt de storingskans toe en verkort de levensduur aanzienlijk. Bovendien vervalt de garantie bij gebrek aan onderhoud.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Goed onderhouden airco's presteren 15-25% efficiënter, hebben 80% minder storingen, gaan 5-8 jaar langer mee en behouden hun volledige capaciteit. Met een onderhoudscontract vanaf €11/maand (€132/jaar) verdienen de kosten zich ruimschoots terug door lagere energiekosten, minder reparaties en langere levensduur. U bespaart netto honderden euro's per jaar en geniet van betrouwbaar comfort.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg my-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Garantie Vervalt Zonder Onderhoud</h4>
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
              Onze onderhoudsprijzen zijn transparant en all-in. Hieronder vindt u een compleet overzicht van alle onderhoudsdiensten met prijzen en wat erbij inbegrepen is:
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
              Met een onderhoudscontract bent u verzekerd van tijdig onderhoud, voorrang bij storingen, korting op reparaties en behoud van garantie. U heeft één vast contactpersoon en hoeft niet zelf bij te houden wanneer onderhoud nodig is - wij plannen dit automatisch in:
            </p>
          </div>

          {/* Onderhoudscontracten */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {onderhoudsContracten.map((contract, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-sky-500 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{contract.pakket}</h4>
                  <div className="text-4xl font-bold text-sky-600 mb-1">{contract.prijs}</div>
                  <p className="text-gray-600 text-sm font-medium">{contract.prijsJaar}</p>
                  <p className="text-gray-500 text-xs mt-1">per systeem</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Inclusief:</h5>
                  <ul className="space-y-2">
                    {contract.inclusief.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sky-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">
                    <strong>Geschikt voor:</strong><br/>
                    {contract.geschiktVoor}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                >
                  Aanvragen
                </Link>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Totale Jaarkosten: Vergelijking Scenario's
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Om een compleet beeld te geven van de werkelijke kosten, vergelijken we vier scenario's met alle jaarlijkse kosten (onderhoud, energie, reparaties). U ziet direct waarom investeren in onderhoud netto geld bespaart:
            </p>
          </div>

          {/* Totale Jaarkosten Vergelijking */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Scenario</th>
                    <th className="px-6 py-4 text-left">Onderhoud</th>
                    <th className="px-6 py-4 text-left">Filters</th>
                    <th className="px-6 py-4 text-left">Energie</th>
                    <th className="px-6 py-4 text-left">Reparaties</th>
                    <th className="px-6 py-4 text-left">Totaal/jaar</th>
                    <th className="px-6 py-4 text-left">Risico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {totaleJaarKosten.map((item, index) => (
                    <tr key={index} className={`hover:bg-gray-50 transition-colors ${index === 1 ? 'bg-green-50' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.scenario}</td>
                      <td className="px-6 py-4 text-gray-700">{item.onderhoud}</td>
                      <td className="px-6 py-4 text-gray-700">{item.filters}</td>
                      <td className="px-6 py-4 text-gray-700">{item.energie}</td>
                      <td className="px-6 py-4 text-gray-700">{item.reparaties}</td>
                      <td className="px-6 py-4 text-lg font-bold text-gray-900">{item.totaal}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.risico}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <TrendingDown className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Conclusie: Onderhoudscontract Bespaart Geld</h4>
                <p className="text-gray-700 mb-3">
                  Het Standaard Contract (€11/maand) is met €397/jaar het voordeligst én het meest betrouwbaar. Vergeleken met een losse onderhoudsbeurt (€179) bespaart u €47/jaar en krijgt u extra voordelen zoals voorrang bij storingen en geen voorrijkosten. Over 10 jaar bespaart u €470 netto, terwijl uw airco optimaal blijft presteren.
                </p>
                <p className="text-gray-700">
                  Het Premium contract (€16/maand) biedt extra zorgeloosheid met 15% korting op reparaties en een vervangend toestel bij langdurige reparatie, ideaal voor zakelijk gebruik of intensieve toepassingen.
                </p>
              </div>
            </div>
          </div>

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
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                <div>
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
            Voorkom storingen, bespaar energie en behoud uw garantie met een onderhoudscontract vanaf €11 per maand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
              to="/contact"
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
