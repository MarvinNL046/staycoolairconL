import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Home, AlertCircle, FileText, Calculator, Phone, TrendingUp, Award, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijVerzekeringPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Verzekeren' }
  ];

  const usps = [
    {
      icon: <Home className="h-12 w-12 text-yellow-500" />,
      title: "Inboedelverzekering",
      description: "Meestal automatisch gedekt onder inboedel als opstalonderdeel"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Opstalverzekering",
      description: "Dekking brand, bliksem, storm, water en technische schade"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Aansprakelijkheid",
      description: "AVP dekt schade aan derden door batterijsysteem"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Premie €2-8/Maand",
      description: "Beperkte extra kosten voor uitgebreide dekking"
    }
  ];

  const insuranceTypes = [
    {
      type: "Opstalverzekering (Primair)",
      coverage: "Brand, bliksem, storm, water, technische gebreken",
      included: [
        "Brand en rookschade aan thuisbatterij en omgeving",
        "Blikseminslag met overspanning en schade aan elektronica",
        "Stormschade (windkracht 7+) aan batterijbehuizing",
        "Waterschade door lekkage of overstroming",
        "Technische gebreken zoals kortsluiting of thermisch incident",
        "Kosten vervanging batterij indien total loss",
        "Bergings- en opruimingskosten bij calamiteit"
      ],
      premium: "€2-5/maand",
      deductible: "€250-€500 eigen risico",
      notes: "Thuisbatterij valt meestal automatisch onder opstalverzekering als onderdeel van de woning. Geen aparte melding nodig als waarde <€5.000. Bij waarde >€5.000 vooraf melden voor adequate dekking."
    },
    {
      type: "Inboedelverzekering (Aanvullend)",
      coverage: "Diefstal, vandalisme, waterschade inboedel",
      included: [
        "Diefstal batterij na inbraak of braak",
        "Vandalismeschade aan batterij en omgeving",
        "Waterschade aan elektronica door lekkage binnenin woning",
        "Schade na poging tot diefstal",
        "Vervanging gestolen onderdelen (kabels, inverter)"
      ],
      premium: "€1-3/maand",
      deductible: "€150-€350 eigen risico",
      notes: "Thuisbatterij kan ook als inboedel worden verzekerd, vooral als systeem in garage of schuur staat (niet vast aan opstal). Let op: diefstal buiten woning vaak niet gedekt."
    },
    {
      type: "AVP - Aansprakelijkheidsverzekering",
      coverage: "Schade aan derden",
      included: [
        "Brand overslaan naar buurwoning door batterijdefect",
        "Waterschade bij buren door lekkage batterijsysteem",
        "Persoonlijk letsel door technisch defect",
        "Schade aan derden tijdens installatie of onderhoud",
        "Rechtsbijstand bij aansprakelijkstelling"
      ],
      premium: "€0 (standaard gedekt)",
      deductible: "Geen eigen risico",
      notes: "AVP dekt schade die u als eigenaar veroorzaakt aan derden. Thuisbatterij valt hier automatisch onder, geen extra kosten. Let op: opzet en grove schuld uitgesloten."
    },
    {
      type: "All-Risk Verzekering (Premium)",
      coverage: "Alle risico's, ook eigen schuld",
      included: [
        "Alle risico's van opstal, inboedel en AVP gecombineerd",
        "Eigen schuld en onvoorziene gebeurtenissen",
        "Accidentele beschadiging (bijvoorbeeld tijdens verbouwing)",
        "Schade door verkeerd gebruik of onderhoud",
        "Wereldwijde dekking (ook bij tijdelijke verhuizing)",
        "Geen uitsluitingen voor specifieke oorzaken",
        "Versnelde claimafhandeling (vaak binnen 5 werkdagen)"
      ],
      premium: "€5-10/maand",
      deductible: "€100-€250 eigen risico",
      notes: "All-risk verzekering biedt maximale bescherming zonder uitsluitingen. Geschikt voor dure systemen (>€8.000) of bij zorgen over onderhoud/gebruik. Niet altijd nodig gezien betrouwbaarheid AlphaESS systemen en 10 jaar garantie."
    }
  ];

  const claimExamples = [
    {
      scenario: "Brand door Kortsluiting",
      description: "Thuisbatterij krijgt kortsluiting, veroorzaakt brand in meterkast en schade aan elektrische installatie.",
      coveredBy: "Opstalverzekering",
      coverage: "Volledig gedekt",
      reimbursement: "€4.500 (batterij) + €2.000 (elektrische schade) + €500 (meterkast) = €7.000",
      deductible: "€500 eigen risico",
      netPayout: "€6.500",
      notes: "Verzekeraar vergoedt nieuwwaarde batterij (€5.500 incl. BTW) minus afschrijving 1 jaar (20%) = €4.500. Elektrische schade volledig vergoed."
    },
    {
      scenario: "Blikseminslag met Overspanning",
      description: "Bliksem slaat in nabij woning, overspanning beschadigt batterij-inverter en elektronica.",
      coveredBy: "Opstalverzekering",
      coverage: "Volledig gedekt",
      reimbursement: "€2.800 (inverter) + €800 (elektronica) = €3.600",
      deductible: "€250 eigen risico",
      netPayout: "€3.350",
      notes: "Overspanningsschade door bliksem standaard gedekt onder opstal. Batterijcellen meestal niet beschadigd, alleen elektronica. Vervanging binnen 2 weken."
    },
    {
      scenario: "Waterschade door Overstroming",
      description: "Wateroverlast zorgt voor binnendringing water in garage waar batterij staat, batterij total loss.",
      coveredBy: "Opstalverzekering",
      coverage: "Afhankelijk van oorzaak",
      reimbursement: "€5.500 (nieuwwaarde) - 15% afschrijving = €4.675",
      deductible: "€500 eigen risico",
      netPayout: "€4.175",
      notes: "Waterschade door zware regenval of riooloverstort gedekt. Schade door grondwater of overstroming mogelijk uitgesloten (check polisvoorwaarden). Batterij moet vervangen, niet te herstellen."
    },
    {
      scenario: "Diefstal na Inbraak",
      description: "Inbrekers stelen thuisbatterij inclusief inverter en bekabeling uit garage.",
      coveredBy: "Inboedelverzekering",
      coverage: "Gedekt bij braakschade",
      reimbursement: "€5.500 (batterij) + €1.500 (inverter) + €500 (bekabeling) = €7.500",
      deductible: "€350 eigen risico",
      netPayout: "€7.150",
      notes: "Diefstal gedekt als er sprake is van braak (inbraaksporen). Zonder braakschade: niet gedekt. Let op: diefstal buitenom woning vaak uitgesloten."
    },
    {
      scenario: "Brand Overslaan naar Buurwoning",
      description: "Batterijdefect veroorzaakt brand die overslaat naar buurwoning, schade €25.000.",
      coveredBy: "AVP Aansprakelijkheidsverzekering",
      coverage: "Volledig gedekt",
      reimbursement: "€25.000 schade buren + €5.000 rechtsbijstand = €30.000",
      deductible: "€0 eigen risico",
      netPayout: "Volledige dekking",
      notes: "AVP dekt schade aan derden tot maximaal €1.250.000. Verzekeraar regelt directe afhandeling met buren. U hoeft niets te betalen."
    }
  ];

  const checklist = [
    {
      category: "Voor Installatie",
      items: [
        "Check uw huidige opstal- en inboedelverzekering (voorwaarden lezen)",
        "Meld thuisbatterij aan indien waarde >€5.000 (vooraf, schriftelijk)",
        "Vraag bevestiging dat batterij gedekt is (e-mail of brief)",
        "Check eigen risico en eventuele extra premie",
        "Vraag naar uitsluitingen specifiek voor batterijsystemen",
        "Controleer maximum vergoeding per gebeurtenis"
      ]
    },
    {
      category: "Bij Installatie",
      items: [
        "Bewaar factuur en installatiedocumentatie (claim bewijs)",
        "Maak foto's van batterij voor en na installatie",
        "Vraag installatiecertificaat van StayCool (verplicht)",
        "Registreer serienummer en garantiegegevens AlphaESS",
        "Stuur kopie factuur en certificaat naar verzekeraar",
        "Vraag schriftelijke bevestiging dekking van verzekeraar"
      ]
    },
    {
      category: "Na Installatie",
      items: [
        "Controleer jaarlijks of dekking nog adequaat is",
        "Meld waardestijging woning bij verzekeraar (indien relevant)",
        "Bewaar onderhoudsdocumentatie (bewijslast bij claim)",
        "Update verzekering bij uitbreiding batterijcapaciteit",
        "Check verzekeringsvoorwaarden bij verhuizing",
        "Herzie verzekering na 5 jaar (afschrijving en waardedaling)"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is een thuisbatterij automatisch verzekerd via mijn opstalverzekering?",
      answer: "Ja, in de meeste gevallen valt een thuisbatterij automatisch onder uw opstalverzekering als 'vast verbonden installatie' of 'gebouwgebonden voorziening'. Dit geldt voor schade door brand, bliksem, storm en water. Let op: bij waarde boven €5.000 moet u de batterij vaak vooraf melden bij uw verzekeraar voor adequate dekking. Bij waarde onder €5.000 is melding meestal niet nodig, maar wel aan te raden voor zekerheid. Check uw polisvoorwaarden of bel uw verzekeraar."
    },
    {
      question: "Hoeveel extra premie betaal ik voor verzekering van een thuisbatterij?",
      answer: "De extra premie is beperkt: €2-5/maand via opstalverzekering (brand, technische schade), €1-3/maand via inboedel (diefstal, vandalisme), €0 extra voor AVP (standaard gedekt). Totaal: €2-8/maand voor volledige dekking. Bij all-risk verzekering: €5-10/maand. De exacte premie hangt af van uw verzekeraar, waarde batterij en gekozen dekkingen. Veel verzekeraars rekenen geen of nauwelijks extra premie voor batterijen <€7.000."
    },
    {
      question: "Wat wordt vergoed als mijn thuisbatterij total loss is door brand?",
      answer: "Bij total loss vergoedt uw opstalverzekering de nieuwwaarde minus afschrijving. Voorbeeld: SMILE5 (10 kWh) gekocht voor €9.000 (incl. BTW), na 2 jaar brand. Nieuwwaarde: €9.000. Afschrijving 2 jaar à 10%/jaar = 20%. Vergoeding: €7.200 minus eigen risico €500 = €6.700 uitbetaald. Daarnaast worden kosten voor opruiming, elektrische herstelwerkzaamheden en eventuele noodvoorzieningen vergoed. Let op: check of uw verzekering nieuwwaarde of dagwaarde vergoedt (groot verschil!)."
    },
    {
      question: "Dekt mijn verzekering ook schade door verkeerd gebruik of onderhoud?",
      answer: "Standaard opstal- en inboedelverzekeringen dekken geen schade door opzet, grove schuld of ernstig onzorgvuldig gebruik. Voorbeelden niet gedekt: batterij niet onderhouden volgens voorschriften, zelf geknutseld aan elektrische bedrading, bewust te hoog belast. Wel gedekt: onvoorziene technische gebreken, normale slijtage die tot defect leidt, kleine gebruikersfouten. Voor maximale zekerheid: kies all-risk verzekering (€5-10/maand extra) die ook eigen schuld en verkeerd gebruik dekt."
    },
    {
      question: "Wat moet ik doen bij schade aan mijn thuisbatterij?",
      answer: "Stappen bij schade: 1) Direct verzekeraar bellen en schade melden (binnen 2 werkdagen verplicht). 2) Maak foto's van schade en omgeving (bewijsmateriaal). 3) Laat batterij uitschakelen door StayCool of installateur (veiligheid). 4) Bewaar beschadigde onderdelen (expert moet schade inspecteren). 5) Vul schadeformulier in met details (oorzaak, tijdstip, omstandigheden). 6) Lever factuur, installatiecertificaat en garantiebewijs aan. 7) Verzekeraar stuurt expert langs (meestal binnen 5 werkdagen). 8) Uitbetaling na goedkeuring claim (2-4 weken)."
    },
    {
      question: "Dekt mijn AVP schade aan buren door mijn thuisbatterij?",
      answer: "Ja, uw AVP (Aansprakelijkheidsverzekering Particulieren) dekt schade die uw thuisbatterij veroorzaakt aan derden. Voorbeelden: brand overslaan naar buurwoning door batterijdefect, waterschade bij buren door lekkage, letsel door technisch defect. Dekking tot €1.250.000, geen eigen risico. Voorwaarde: geen opzet of grove schuld. Batterij moet correct geïnstalleerd en onderhouden zijn volgens voorschriften. Verzekeraar regelt directe afhandeling met buren, u hoeft niet zelf te betalen."
    },
    {
      question: "Moet ik mijn thuisbatterij apart verzekeren voor diefstal?",
      answer: "Diefstal van thuisbatterij is meestal gedekt via inboedelverzekering als er sprake is van braak (inbraaksporen). Geen aparte verzekering nodig. Let op: diefstal zonder braak (bijvoorbeeld batterij buiten woning op onbewaakte plek) is vaak niet gedekt. Ook diefstal buitenom woning (tuin, balkon) kan uitgesloten zijn. Bij batterij in garage of schuur: zorg dat deze afsluitbaar is en voorzien van slot. Extra premie voor diefstalrisico: €1-3/maand. Batterijen in woning zijn minder diefstalgevoelig dan zonnepanelen op dak."
    },
    {
      question: "Wat gebeurt er met verzekering als ik verhuizen?",
      answer: "Bij verhuizing: 1) Meld verhuizing aan verzekeraar (binnen 1 maand verplicht). 2) Als batterij meegaat naar nieuwe woning: verzekering loopt door, update adres. 3) Als batterij achterblijft: meld afvoer batterij, stop verzekering voor dat onderdeel. 4) Nieuwe bewoner moet batterij zelf verzekeren (overdracht niet automatisch). 5) Check of nieuwe woning andere verzekeringseisen heeft (bijvoorbeeld andere eigen risico's of premies). 6) Bewaar verhuisdocumentatie en overdrachtsakte voor verzekeraar. Tip: plan verzekering tijdig, voorkom gat in dekking."
    }
  ];

  const tips = [
    {
      title: "Tip 1: Meld Vooraf bij Verzekeraar",
      description: "Meld uw thuisbatterij altijd vooraf bij uw verzekeraar, ook als de waarde onder €5.000 ligt. Dit voorkomt discussies bij schade en zorgt voor snellere claimafhandeling. Vraag schriftelijke bevestiging."
    },
    {
      title: "Tip 2: Bewaar Alle Documentatie",
      description: "Bewaar factuur, installatiecertificaat, garantiebewijs en onderhoudsdocumentatie digitaal en fysiek. Dit is cruciaal bij claim en bewijst dat batterij correct geïnstalleerd en onderhouden is."
    },
    {
      title: "Tip 3: Check Jaarlijks Uw Dekking",
      description: "Controleer jaarlijks of uw verzekeringsdekking nog adequaat is. Batterijwaarde daalt door afschrijving, maar technologische ontwikkelingen kunnen ook waarde beïnvloeden. Pas verzekering aan indien nodig."
    },
    {
      title: "Tip 4: Kies voor Nieuwwaarde-Dekking",
      description: "Zorg dat uw verzekering nieuwwaarde vergoedt, niet dagwaarde. Bij dagwaarde krijgt u veel minder uitgekeerd door afschrijving. Nieuwwaarde-dekking kost weinig extra maar biedt veel betere bescherming."
    },
    {
      title: "Tip 5: Combineer Verzekeringen",
      description: "Vaak kunt u opstal en inboedel combineren bij één verzekeraar voor korting (5-15%). Check ook combideals met AVP en rechtsbijstand. Bij financiering via energielening is verzekering soms verplicht."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Verzekeren Limburg | Opstal, Inboedel, AVP | StayCool Airco"
        description="Thuisbatterij verzekeren ✓ Opstal €2-5/maand ✓ Inboedel €1-3/maand ✓ AVP gratis ✓ Alle risico's gedekt ✓ Expert advies ✓ Claim voorbeelden!"
      />

      <SchemaMarkup
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Verzekeren: Bescherm Uw Investering
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Verzeker uw thuisbatterij via opstal (€2-5/maand), inboedel (€1-3/maand) of AVP (gratis). Dekking voor brand, diefstal, schade aan derden en technische problemen. Wij adviseren!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Verzekeringsadvies
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Shield className="h-5 w-5 mr-2" />
              Bekijk Batterijen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Belangrijk: Meld Vooraf bij Verzekeraar</p>
                <p className="text-sm">
                  Bij batterijwaarde boven €5.000 vooraf melden voor adequate dekking. Wij helpen u met documentatie.
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
              Verzekeringen voor Thuisbatterijen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bescherm uw investering tegen alle risico's met beperkte extra kosten
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

      {/* Insurance Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            4 Verzekeringtypen voor Thuisbatterijen
          </h2>

          <div className="space-y-8">
            {insuranceTypes.map((insurance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{insurance.type}</h3>
                  <p className="text-lg text-gray-800 mb-4"><strong>Dekking:</strong> {insurance.coverage}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-800">Extra Premie</p>
                      <p className="font-bold text-gray-900">{insurance.premium}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">Eigen Risico</p>
                      <p className="font-bold text-gray-900">{insurance.deductible}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    Wat is Gedekt?
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {insurance.included.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Let op:</strong> {insurance.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Examples Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Praktijkvoorbeelden: Wat Wordt Vergoed?
          </h2>

          <div className="space-y-6">
            {claimExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{example.scenario}</h3>
                <p className="text-gray-700 mb-6">{example.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Verzekering:</span>
                      <span className="font-bold text-gray-900">{example.coveredBy}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Dekking:</span>
                      <span className="font-bold text-green-600">{example.coverage}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Vergoeding:</span>
                      <span className="font-bold text-gray-900">{example.reimbursement}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Eigen risico:</span>
                      <span className="font-bold text-orange-600">{example.deductible}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-400">
                      <span className="text-gray-900 font-bold">Netto uitbetaling:</span>
                      <span className="font-bold text-green-600 text-xl">{example.netPayout}</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 text-yellow-500 mr-2" />
                      Toelichting
                    </h4>
                    <p className="text-sm text-gray-700">{example.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Checklist: Verzeker Uw Thuisbatterij Correct
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {checklist.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-yellow-500 mr-3" />
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            5 Gouden Tips voor Verzekeren
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.slice(0, 3).map((tip, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {tips.slice(3).map((tip, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gratis Verzekeringsadvies bij Aanschaf
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij helpen u met verzekeringsdocumentatie en adviseren over optimale dekking. Geheel vrijblijvend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Advies Aan
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
            Veelgestelde Vragen Verzekering
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Meer Financiële Informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-financieren"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Financieren</h3>
              <p className="text-gray-600 mb-4">
                Betaal vanaf €50/maand met energielening of consumptief krediet.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-2026"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Subsidie 2026</h3>
              <p className="text-gray-600 mb-4">
                ISDE €1.740 + gemeente tot €2.000. Wij regelen aanvraag.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <FileText className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BTW Teruggave</h3>
              <p className="text-gray-600 mb-4">
                0% BTW-tarief: direct 21% korting op aanschafprijs.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bescherm Uw Investering Optimaal
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Wij zorgen voor correcte verzekeringsdocumentatie en helpen u met melding bij uw verzekeraar. Inclusief service!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Uw Besparing
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Shield className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijVerzekeringPage;
