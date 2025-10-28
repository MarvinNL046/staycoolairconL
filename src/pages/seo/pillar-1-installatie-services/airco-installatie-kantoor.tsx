import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Briefcase, Wind, Users, Phone, Calculator, Award, TrendingUp, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoInstallatieKantoor: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Zakelijk', path: '/zakelijk' },
    { label: 'Kantoor Airco' }
  ];

  const usps = [
    {
      icon: <Users className="h-12 w-12 text-sky-500" />,
      title: "Productiviteit +20%",
      description: "Optimaal klimaat verhoogt concentratie en werkprestaties significant"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Zakelijke Aftrek",
      description: "Volledige investering aftrekbaar als bedrijfsmiddel, aantrekkelijke lease opties"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Onderhoudscontract",
      description: "Zorgeloos onderhoud en 24/7 storing service voor bedrijfscontinuïteit"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-sky-500" />,
      title: "Professionele Installatie",
      description: "Buiten kantooruren installatie mogelijk, minimale bedrijfsonderbreking"
    }
  ];

  const faqs = [
    {
      question: "Waarom is een airco belangrijk voor kantoren?",
      answer: "Wetenschappelijk onderzoek toont aan dat werknemers bij temperaturen boven 25°C tot 20% minder productief zijn. Bij temperaturen rond 21-23°C presteren medewerkers optimaal: betere concentratie, minder fouten, hogere werktevredenheid. Een airco is geen luxe maar een investering in productiviteit. Voor een kantoor met 10 medewerkers (gemiddeld loon €40.000) betekent 10% productiviteitsverlies door hitte €40.000 verlies per jaar. Een airco installatie van €5.000 verdient zich in 1-2 maanden terug tijdens hittegolven."
    },
    {
      question: "Welke airco capaciteit heb ik nodig voor mijn kantoorruimte?",
      answer: "Voor kantoren rekent u 100-150 Watt koelvermogen per m² (hoger dan woonruimtes door computers, verlichting en meerdere personen). Een standaard kantoor van 40m² met 4-6 werkplekken vereist 5.0-6.0 kW. Grote open kantoren (100m²+) hebben multi-split systemen nodig of meerdere units. Factoren: aantal personen (100W warmte per persoon), IT-apparatuur (15-20% extra), raamoppervlak op zuiden (20% extra), vergaderruimtes (25% extra capaciteit). Ons adviesgesprek bepaalt exact de benodigde capaciteit."
    },
    {
      question: "Kan ik de airco installatie zakelijk aftrekken?",
      answer: "Ja, als ondernemer of BV is de volledige airco installatie aftrekbaar als bedrijfsmiddel. U trekt de investering direct af in het jaar van aanschaf (kleinschaligheidsinvestering tot €450.000) of schrijft af over 5 jaar. Ook BTW is volledig verrekenbaar. Bij lease/huur zijn de maandelijkse kosten operationele kosten die direct aftrekbaar zijn. Dit maakt de netto investering 30-50% lager afhankelijk van uw belastingschijf. Wij leveren complete factuur en documentatie voor uw administratie."
    },
    {
      question: "Hoe lang duurt een kantoor airco installatie?",
      answer: "Een standaard split-unit kantoor installatie duurt 4-8 uur, afhankelijk van leidinglengte en complexiteit. Multi-split systemen voor grotere kantoren kunnen 1-2 werkdagen duren. Wij installeren bij voorkeur buiten kantooruren (avond/weekend) om bedrijfsonderbreking te minimaliseren. Planning in overleg: installatie tijdens rustige periode, vakanties of renovatie. Bij urgentie (hittegolf) kunnen wij binnen 48 uur installeren mits materiaal beschikbaar."
    },
    {
      question: "Wat is het verschil tussen single-split en multi-split voor kantoren?",
      answer: "Single-split: één binnenunit + één buitenunit. Geschikt voor kleine kantoren tot 50m² of enkelvoudige ruimtes. Voordeel: lagere kosten, eenvoudigere installatie. Multi-split: meerdere binnenunits (2-8 stuks) op één buitenunit. Geschikt voor grotere kantoren of meerdere afzonderlijke ruimtes. Voordelen: elke ruimte apart regelbaar, één buitenunit (minder gevelbelasting), efficiënter, netter. Voor kantoren  meer dan 50m² of meerdere kamers adviseren wij multi-split."
    },
    {
      question: "Welk onderhoud heeft een kantoor airco nodig?",
      answer: "Professioneel onderhoud jaarlijks aanbevolen, bij intensief gebruik ( meer dan 2000 uur/jaar) halfjaarlijks. Onderhoud omvat: reiniging filters en units, controle koudemiddel, elektrische verbindingen, condensafvoer, algemene werking. Eigen onderhoud: filters maandelijks reinigen (belangrijk bij kantoren met veel stof/papier). Wij bieden onderhoudscontracten vanaf €120/jaar inclusief jaarlijkse servicebeurt, prioriteit bij storingen, 10% korting op reparaties en vervangingsonderdelen."
    },
    {
      question: "Is een airco in kantoor verplicht volgens arbowetgeving?",
      answer: "De Arbowet schrijft voor dat werkgevers zorgen voor een gezonde werkomgeving. Bij kantoorwerk ligt de ideale temperatuur tussen 18-24°C. Boven 26°C moet de werkgever maatregelen nemen (ventilatie, zonwering, airco). Boven 32°C is werken zonder koeling niet toegestaan. Werknemers mogen werk staken bij ongezonde omstandigheden. Een airco is juridisch niet verplicht maar praktisch noodzakelijk om aan arbo-eisen te voldoen tijdens warme periodes en claims te voorkomen."
    },
    {
      question: "Wat zijn de energiekosten van een kantoor airco?",
      answer: "Een 5.0 kW kantoor airco (geschikt voor 40-50m²) kost bij volledig gebruik ongeveer €1,20-1,50 per uur aan elektriciteit. Bij gemiddeld kantoorgebruik (6 uur per dag, 100 dagen per jaar) bedragen de jaarkosten €700-900. Moderne inverter systemen reduceren dit met 40% door slim vermogensbeheer. Verwarmen in winter is 60% goedkoper dan elektrische verwarming. Totale jaarkosten koelen + verwarmen: €900-1.200. Dit is minimaal vergeleken met productiviteitswinst van gekoeld werken."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Installatie Kantoor Limburg | Zakelijk +20% Productiviteit | StayCool"
        description="Kantoor airco ✓ 20% meer productiviteit ✓ Zakelijke aftrek ✓ Buiten kantooruren installeren ✓ Onderhoud contract. Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Installatie Kantoor",
          description: "Professionele installatie van zakelijke airconditioning voor kantoren. Verhoog productiviteit met optimaal klimaat. Installatie buiten kantooruren mogelijk.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "+31462021430",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          offers: {
            "@type": "Offer",
            priceRange: "€2400-€8000",
            priceCurrency: "EUR"
          }
        }}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Installatie Kantoor - Verhoog Productiviteit met 20%
            </h1>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Optimaal werkklimaat voor maximale prestaties. Professionele kantoor airconditioning vanaf €2.400, volledig aftrekbaar. Installatie buiten kantooruren, minimale bedrijfsonderbreking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Zakelijk Advies Aanvragen
              </Link>
              <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sky-50">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>100% Aftrekbaar</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Lease Mogelijk</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>24/7 Service</span>
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                De Business Case: Waarom een Kantoor Airco een Investering is, Geen Kostpost
              </h2>

              <p className="text-gray-600 mb-6">
                Een airco in kantoorruimtes wordt vaak gezien als luxe of extraatje, maar cijfers tonen een ander verhaal. Wetenschappelijk onderzoek van universiteiten en bedrijfskundige studies bewijzen consistent dat werknemers bij optimale temperaturen (21-23°C) significant beter presteren. Bij temperaturen boven 25°C daalt de productiviteit meetbaar, fouten nemen toe, en ziekteverzuim stijgt tijdens hittegolven.
              </p>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <TrendingUp className="inline h-6 w-6 text-sky-500 mr-2" />
                  ROI Berekening: Productiviteitswinst vs. Investering
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="border-l-4 border-sky-500 pl-4">
                    <p className="font-semibold text-gray-900 mb-2">Klein Kantoor (5 medewerkers)</p>
                    <ul className="space-y-1">
                      <li>• Gemiddeld jaarloon per medewerker: €40.000</li>
                      <li>• Totale personeelskosten: €200.000</li>
                      <li>• Productiviteitsverlies 10% tijdens hitte (15 dagen): €8.200</li>
                      <li>• Airco investering: €3.500 - €5.000</li>
                      <li>• <strong className="text-sky-600">Terugverdientijd: 6-9 maanden</strong></li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-sky-500 pl-4">
                    <p className="font-semibold text-gray-900 mb-2">Middelgroot Kantoor (15 medewerkers)</p>
                    <ul className="space-y-1">
                      <li>• Totale personeelskosten: €600.000</li>
                      <li>• Productiviteitsverlies 10% tijdens hitte: €24.600</li>
                      <li>• Multi-split airco investering: €8.000 - €12.000</li>
                      <li>• <strong className="text-sky-600">Terugverdientijd: 4-6 maanden</strong></li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-sky-500 pl-4">
                    <p className="font-semibold text-gray-900 mb-2">Groot Kantoor (50 medewerkers)</p>
                    <ul className="space-y-1">
                      <li>• Totale personeelskosten: €2.000.000</li>
                      <li>• Productiviteitsverlies 10% tijdens hitte: €82.000</li>
                      <li>• Volledig klimaatsysteem: €25.000 - €40.000</li>
                      <li>• <strong className="text-sky-600">Terugverdientijd: 3-6 maanden</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Deze berekeningen gaan uit van conservatieve 10% productiviteitsverlies, maar studies tonen dat dit tijdens extreme hitte kan oplopen tot 20-30%. Daarnaast zijn er indirecte voordelen: hogere werknemerstevredenheid, minder ziekteverzuim, betere focus tijdens belangrijke deadlines, en aantrekkelijkere werkplek voor talent werving.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Zakelijke Voordelen en Fiscale Aftrek
              </h2>

              <p className="text-gray-600 mb-6">
                Voor ondernemers en bedrijven is een airco installatie fiscaal aantrekkelijk. Als zakelijke investering profiteert u van verschillende voordelen die de netto investering significant reduceren.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Euro className="h-6 w-6 text-green-500 mr-2" />
                    Directe Investering
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Kleinschaligheidsinvestering:</strong> Volledige aftrek in jaar van aanschaf (tot €450.000 per jaar)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>BTW terugvordering:</strong> 21% BTW direct verrekenbaar bij btw-plichtige ondernemers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Afschrijving:</strong> Alternatief lineair afschrijven over 5 jaar (20% per jaar)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Energiebelasting:</strong> Mogelijk recht op EIA (Energie-Investerings-Aftrek)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-green-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Voorbeeld:</strong> Airco €5.000 excl. BTW<br/>
                      BTW terugvordering: €1.050<br/>
                      Aftrek bij 25% belasting: €1.250<br/>
                      <strong className="text-green-600">Netto kosten: €2.700 (46% korting)</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Briefcase className="h-6 w-6 text-sky-500 mr-2" />
                    Operational Lease
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Geen directe investering:</strong> Spreidt kosten over 3-5 jaar met vaste maandtermijnen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>100% aftrekbaar:</strong> Maandelijkse kosten direct aftrekbaar als operationele kosten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Inclusief onderhoud:</strong> All-in lease met jaarlijks onderhoud en storingsdienst</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Flexibiliteit:</strong> Upgraden naar nieuwere modellen na 3-5 jaar</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-sky-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Voorbeeld:</strong> Airco €5.000 excl. BTW<br/>
                      Lease 60 maanden: €100/maand<br/>
                      Inclusief onderhoud: €120/maand<br/>
                      <strong className="text-sky-600">Netto: €75-90/maand na aftrek</strong>
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Klimaat en Productiviteit: Wetenschappelijke Onderbouwing
              </h2>

              <p className="text-gray-600 mb-6">
                De relatie tussen kantoortemperatuur en werkprestaties is uitvoerig onderzocht. Studies van universiteiten en bedrijfskundige instituten tonen consistente patronen: er is een duidelijke optimale temperatuurrange waarin mensen maximaal presteren.
              </p>

              <div className="border border-gray-200 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Impact Temperatuur op Werkprestaties</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 font-semibold rounded">18-20°C</span>
                    </div>
                    <div className="text-gray-600">
                      <strong className="text-gray-900">Licht Koel:</strong> Optimaal voor fysiek werk, kan mentale taken vertragen. Hogere alertheid maar vingers kunnen koud worden bij lang typen.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-900 font-semibold rounded">21-23°C</span>
                    </div>
                    <div className="text-gray-600">
                      <strong className="text-green-600">OPTIMAAL:</strong> Hoogste productiviteit voor mentaal werk. Beste concentratie, minste fouten, hoogste tevredenheid. Aanbevolen voor kantoorwerk, vergaderingen en focustaken.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 font-semibold rounded">24-25°C</span>
                    </div>
                    <div className="text-gray-600">
                      <strong className="text-gray-900">Warm:</strong> 5-10% productiviteitsverlies. Meer fouten, verminderde concentratie, verhoogde vermoeidheid. Arbo-grens voor maatregelen.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-900 font-semibold rounded">26-29°C</span>
                    </div>
                    <div className="text-gray-600">
                      <strong className="text-gray-900">Heet:</strong> 10-20% productiviteitsverlies. Significant meer fouten, sloomheid, geïrriteerdheid. Ziekteverzuim neemt toe.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-900 font-semibold rounded">30°C+</span>
                    </div>
                    <div className="text-gray-600">
                      <strong className="text-red-600">Onverantwoord:</strong> 20-30% productiviteitsverlies. Gezondheidsrisico's, hittestress. Werk staken juridisch verdedigbaar.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Casestudy: Middelgroot Adviesbureau</h4>
                <p className="text-gray-600 mb-4">
                  Een adviesbureau in Maastricht met 12 medewerkers investeerde €7.500 in een multi-split systeem. Metingen voor en na installatie toonden:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>18% hogere facturable uren tijdens hittegolven (juli-augustus)</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>32% minder fouten in deliverables tijdens warme periodes</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>65% minder ziekteverzuim in zomermaanden</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Medewerkers tevredenheid +42% (werkklimaat vraag exit interviews)</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Financieel resultaat: €18.000 extra omzet in eerste zomer, investering terugverdiend in 5 maanden.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Systeemkeuze voor Kantoren: Single-split vs. Multi-split
              </h2>

              <p className="text-gray-600 mb-6">
                De keuze tussen single-split en multi-split hangt af van uw kantoorindeling, aantal ruimtes en toekomstige uitbreidingsplannen. Beide systemen hebben specifieke voor- en nadelen voor zakelijk gebruik.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Single-split Systeem</h4>
                  <p className="text-gray-600 mb-4">
                    Eén binnenunit verbonden met één buitenunit. Geschikt voor kleine kantoren, enkelvoudige ruimtes of gefaseerde uitbreiding.
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold text-green-600 mb-2">✓ Voordelen</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Lagere initiële investering (€2.400-3.500)</li>
                      <li>• Eenvoudigere installatie, sneller klaar</li>
                      <li>• Gefaseerd uitbreiden mogelijk</li>
                      <li>• Bij storing andere ruimtes niet geraakt</li>
                      <li>• Flexibel per ruimte aan/uit</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600 mb-2">✗ Nadelen</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Meerdere buitenunits bij meerdere ruimtes</li>
                      <li>• Hogere totaalkosten bij 3+ units</li>
                      <li>• Minder energie-efficiënt totaal</li>
                      <li>• Meer gevelruimte nodig</li>
                    </ul>
                  </div>
                  <p className="text-sky-600 font-semibold mt-4">Geschikt voor: Kantoren tot 50m², enkelvoudige ruimtes</p>
                </div>

                <div className="border-2 border-sky-500 rounded-lg p-6 bg-sky-50">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Multi-split Systeem</h4>
                  <p className="text-gray-600 mb-4">
                    Meerdere binnenunits (2-8) aangesloten op één krachtige buitenunit. Ideaal voor grotere kantoren met meerdere ruimtes.
                  </p>
                  <div className="mb-4">
                    <p className="font-semibold text-green-600 mb-2">✓ Voordelen</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Eén buitenunit - netter, minder gevelbelasting</li>
                      <li>• Elke ruimte apart regelbaar</li>
                      <li>• Energiezuiniger bij 3+ units (gedeelde compressor)</li>
                      <li>• Kostenefficiënter voor grote kantoren</li>
                      <li>• Professionele uitstraling</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600 mb-2">✗ Nadelen</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Hogere initiële investering (€6.000-12.000)</li>
                      <li>• Complexere installatie</li>
                      <li>• Bij storing buitenunit alles uit</li>
                      <li>• Leidingnetwerk complexer</li>
                    </ul>
                  </div>
                  <p className="text-sky-600 font-semibold mt-4">Aanbevolen voor: Kantoren 50m²+, meerdere ruimtes</p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Onderhoud en Service: Zorgeloos Klimaat met Onderhoudscontract
              </h2>

              <p className="text-gray-600 mb-6">
                Voor bedrijven is betrouwbaarheid cruciaal. Een storing tijdens hittegolven kan direct impact hebben op productiviteit en deadlines. Professioneel onderhoud voorkomt 90% van storingen en verlengt de levensduur van uw systeem met 30-50%.
              </p>

              <div className="bg-white border-2 border-sky-500 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  <Shield className="inline h-6 w-6 text-sky-500 mr-2" />
                  Zakelijk Onderhoudscontract
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Basis Pakket (€180/jaar)</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Jaarlijkse servicebeurt (voorjaar)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Reiniging binnen- en buitenunit</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Controle koudemiddel en elektronica</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>10% korting op reparaties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Prioriteit bij storingen (binnen 48 uur)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Premium Pakket (€320/jaar)</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Alles van Basis +</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Twee servicebeurten per jaar (voor/najaar)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>24/7 storingsdienst (binnen 24 uur)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Gratis kleine reparaties (tot €200)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Vervangende unit bij storing langer dan 48 uur</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 mt-6 text-sm">
                  <em>Onderhoudskosten zijn volledig aftrekbaar als bedrijfskosten. Voor multi-split systemen vragen wij een aangepaste offerte op basis van aantal units.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Verhoog uw Bedrijfsproductiviteit met Professionele Klimaatbeheersing
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Vraag een vrijblijvende zakelijke offerte aan inclusief ROI-berekening en fiscale voordelen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
                <Phone className="h-6 w-6 mr-2" />
                Zakelijk Advies Aanvragen
              </Link>
              <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen over Kantoor Airco
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Meer Zakelijke Oplossingen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seo/pillar-1-installatie-services/airco-installatie-bedrijfspand" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bedrijfspand Airco</h3>
                <p className="text-gray-600 mb-4">Grote commerciële klimaatsystemen</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/seo/pillar-1-installatie-services/multi-split-airco-installatie" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-split Systemen</h3>
                <p className="text-gray-600 mb-4">Meerdere ruimtes op één buitenunit</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/zakelijk" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zakelijke Services</h3>
                <p className="text-gray-600 mb-4">Onderhoud, service en garanties</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoInstallatieKantoor;
