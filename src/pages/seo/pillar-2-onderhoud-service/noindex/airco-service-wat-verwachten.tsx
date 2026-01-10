import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Phone, CheckCircle, Wrench, FileText, AlertCircle, ThermometerSun, Droplets, Zap, Filter, Search } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import HowToSchema from '../../../../components/SEO/HowToSchema';

const AircoServiceWatVerwachtenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Service Limburg', path: '/kennisbank/airco-service-limburg' },
    { label: 'Wat Te Verwachten' }
  ];

  const servicestappen = [
    {
      titel: 'Aankomst & Inspectie',
      tijdsduur: '10 minuten',
      icon: Search,
      activiteiten: [
        'Monteur meldt zich bij u',
        'Controle werklocatie en veiligheid',
        'Visuele inspectie binnen- en buitenunit',
        'Check eerste werking systeem',
        'Bespreking eventuele klachten'
      ]
    },
    {
      titel: 'Buitenunit Onderhoud',
      tijdsduur: '20-25 minuten',
      icon: Wrench,
      activiteiten: [
        'Reiniging buitenunit en warmtewisselaar',
        'Controle bevestiging en trillingsdempers',
        'Inspectie elektrische aansluitingen',
        'Check koudemiddelleidingen op lekkage',
        'Controle condensafvoer',
        'Meting druk koudemiddel'
      ]
    },
    {
      titel: 'Binnenunit(s) Onderhoud',
      tijdsduur: '15-20 minuten per unit',
      icon: ThermometerSun,
      activiteiten: [
        'Demontage en reiniging filters',
        'Reiniging verdamper en lamellen',
        'Controle condensafvoer en leidingen',
        'Inspectie ventilator en motor',
        'Check elektrische verbindingen',
        'Reiniging behuizing binnen en buiten'
      ]
    },
    {
      titel: 'Koudemiddel Check',
      tijdsduur: '10-15 minuten',
      icon: Droplets,
      activiteiten: [
        'Meting koudemiddelvulling',
        'Controle op lekkages',
        'Check temperatuurverschil',
        'Druktest systeem',
        'Bijvullen koudemiddel indien nodig (meerprijs)'
      ]
    },
    {
      titel: 'Functionele Testen',
      tijdsduur: '15 minuten',
      icon: Zap,
      activiteiten: [
        'Test koelfunctie',
        'Test verwarmfunctie',
        'Controle automatische ontdooiing',
        'Check alle standen (fan, dry, cool, heat)',
        'Test afstandsbediening',
        'Meting stroomverbruik',
        'Geluidsniveaus controleren'
      ]
    },
    {
      titel: 'Rapportage & Advies',
      tijdsduur: '10 minuten',
      icon: FileText,
      activiteiten: [
        'Bespreking bevindingen',
        'Servicerapport met foto\'s',
        'Advies onderhoud tussentijds',
        'Aanbevelingen voor optimaal gebruik',
        'Planning volgende servicebeurt',
        'Beantwoording van uw vragen'
      ]
    }
  ];

  const watMonteurDoet = [
    {
      categorie: 'Reiniging',
      items: [
        'Filters reinigen of vervangen',
        'Verdamper en condensor schoonmaken',
        'Lamellen ontsmetten en reinigen',
        'Condensafvoer doorspoelen',
        'Behuizing binnen en buiten reinigen'
      ]
    },
    {
      categorie: 'Controle & Inspectie',
      items: [
        'Koudemiddelvulling controleren',
        'Elektrische aansluitingen inspecteren',
        'Leidingen op lekkage controleren',
        'Bevestigingen en trillingdempers checken',
        'Condensafvoer testen'
      ]
    },
    {
      categorie: 'Metingen',
      items: [
        'Koudemiddeldruk meten',
        'Temperatuurverschil bepalen',
        'Stroomverbruik meten',
        'Geluidsniveau controleren',
        'Luchtstroom testen'
      ]
    },
    {
      categorie: 'Testen',
      items: [
        'Koelfunctie testen',
        'Verwarmfunctie testen',
        'Alle standen doorlopen',
        'Afstandsbediening controleren',
        'Automatische functies verifiëren'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Wat Gebeurt Er Tijdens Airco Servicebeurt? | StayCool Airco"
        description="Wat gebeurt er tijdens een airco servicebeurt in Limburg? Van inspectie tot testen - transparant proces door StayCool."
        canonicalUrl="https://staycoolairco.nl/airco-service/noindex/wat-verwachten"
        noIndex={true}
      />
      <HowToSchema
        name="Airco Servicebeurt: Het Complete Proces in 6 Stappen"
        description="Transparant overzicht van alle stappen tijdens een professionele airco servicebeurt: van aankomst en inspectie tot rapportage en advies."
        totalTime="PT90M"
        steps={servicestappen.map(stap => ({
          name: stap.titel,
          text: stap.activiteiten.join('. ')
        }))}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500/30 rounded-full text-sm font-medium mb-4">
            Serviceproces
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wat Gebeurt Er Tijdens Een Airco Servicebeurt?
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Transparant overzicht van alle stappen tijdens uw airco onderhoud
          </p>
          <div className="flex items-center justify-center gap-6 text-lg text-blue-200">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>60-90 minuten</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Compleet onderhoud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Transparant proces</h3>
                <p className="text-gray-700">
                  Bij StayCool Airco werken we volgens een vaste checklist zodat u precies weet wat er gebeurt tijdens een servicebeurt. Onze monteurs nemen alle tijd voor een grondig onderhoud en leggen helder uit wat ze doen en waarom.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">60-90 min</div>
              <div className="text-gray-600">Totale duur servicebeurt</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">6 stappen</div>
              <div className="text-gray-600">Compleet onderhoudsproces</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">Rapport</div>
              <div className="text-gray-600">Met foto's en bevindingen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stappen */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Het Serviceproces in 6 Stappen
          </h2>

          <div className="space-y-6">
            {servicestappen.map((stap, index) => {
              const Icon = stap.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{stap.titel}</h3>
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{stap.tijdsduur}</span>
                      </div>
                      <ul className="space-y-2">
                        {stap.activiteiten.map((activiteit, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{activiteit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wat Doet De Monteur */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Wat Doet De Monteur Precies?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Compleet overzicht van alle werkzaamheden tijdens de servicebeurt
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {watMonteurDoet.map((categorie, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{categorie.categorie}</h3>
                <ul className="space-y-3">
                  {categorie.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdsduur Per Systeem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Hoelang Duurt Een Servicebeurt?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-blue-600 mb-2">60 min</div>
                <h3 className="font-bold text-gray-900">Single Split</h3>
                <p className="text-gray-600 text-sm">1 binnen + 1 buiten unit</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Basis onderhoud
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Volledige reiniging
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Testen en rapport
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-600">
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
                  Meest voorkomend
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">75 min</div>
                <h3 className="font-bold text-gray-900">Multi Split (2 units)</h3>
                <p className="text-gray-600 text-sm">2 binnen + 1 buiten unit</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Uitgebreid onderhoud
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Alle units gereinigd
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Compleet rapport
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-blue-600 mb-2">90+ min</div>
                <h3 className="font-bold text-gray-900">Multi Split (3+ units)</h3>
                <p className="text-gray-600 text-sm">3+ binnen + 1 buiten unit</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Intensief onderhoud
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Per unit extra tijd
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Uitgebreid rapport
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Planning & Voorbereiding</h3>
                <p className="text-gray-700">
                  Reken op ongeveer 15-20 minuten extra tijd per binnenunit. De monteur neemt alle tijd voor een grondig onderhoud en legt uit wat er gedaan wordt. Plan dus voldoende tijd in, zodat alles rustig en zorgvuldig kan gebeuren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat Krijgt U */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Wat Krijgt U Na De Servicebeurt?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg">
              <FileText className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Servicerapport</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Foto's van binnen- en buitenunit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Overzicht uitgevoerde werkzaamheden</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Metingen en testresultaten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Aanbevelingen voor optimaal gebruik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Planning volgende servicebeurt</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Garanties</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Servicebeurt volgens fabrieksspecificaties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Vakkundig uitgevoerd door gecertificeerd personeel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gebruik van originele onderdelen en materialen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Garantie op uitgevoerde werkzaamheden</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 storingsdienst beschikbaar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Moet ik thuis zijn tijdens de service?</h3>
              <p className="text-gray-700">
                Ja, voor toegang tot de binnen- en buitenunit moet u of een contactpersoon aanwezig zijn. De monteur heeft ook binnen toegang nodig voor de binnenunits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Maken jullie veel rommel?</h3>
              <p className="text-gray-700">
                Nee, onze monteurs werken netjes. Bij reiniging van filters en units wordt stofopvang gebruikt. Na afloop wordt alles netjes opgeruimd en wordt eventueel afval meegenomen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Kan ik direct na service de airco gebruiken?</h3>
              <p className="text-gray-700">
                Ja! Na de servicebeurt is uw airco direct weer klaar voor gebruik. De monteur test alle functies en draagt het systeem werkend aan u over.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Worden filters altijd vervangen?</h3>
              <p className="text-gray-700">
                Filters worden standaard gereinigd. Alleen bij beschadiging of extreme vervuiling worden ze vervangen (meerprijs). De monteur bespreekt dit met u.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Wat als er tijdens service een defect wordt ontdekt?</h3>
              <p className="text-gray-700">
                De monteur bespreekt dit direct met u. Voor kleine zaken kan vaak direct reparatie plaatsvinden. Bij grotere reparaties krijgt u eerst een offerte voordat er gewerkt wordt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar hoofdpagina */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer over airco service</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/kennisbank/airco-service-limburg" className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-600 mb-2">→ Airco Service Limburg</h3>
              <p className="text-gray-600">Complete informatie over airco service in Limburg door StayCool</p>
            </Link>
            <Link to="/contact" className="p-6 bg-gradient-to-br from-green-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <h3 className="font-bold text-green-600 mb-2">→ Service Aanvragen</h3>
              <p className="text-gray-600">Plan direct uw airco servicebeurt in Limburg</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Service Nodig?</h2>
          <p className="text-xl mb-8">
            Plan nu uw professionele airco servicebeurt in Limburg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:046-202-1430"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              046 - 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              <FileText className="h-5 w-5 mr-2" />
              Online Service Aanvragen
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Losse beurt €179 | Servicecontract vanaf €11/maand
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoServiceWatVerwachtenPage;
