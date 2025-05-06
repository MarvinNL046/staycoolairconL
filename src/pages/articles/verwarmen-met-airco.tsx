import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, PiggyBank, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function VerwarmenMetAirco() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Verwarmen met Airco', path: '/kennisbank/verwarmen-met-airco' }
  ];

  return (
    <>
      <SchemaMarkup 
        type="Article"
        data={{
          headline: "Verwarmen met Airco: De Slimme Manier van Duurzaam Verwarmen",
          description: "Ontdek hoe u uw huis efficiënt kunt verwarmen met een airco. Bespaar tot 60% op uw energierekening met deze moderne verwarmingsoplossing. ✓ Energiezuinig ✓ Duurzaam ✓ Professionele installatie",
          image: "https://staycoolairco.nl/images/logo.svg",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://staycoolairco.nl/kennisbank/verwarmen-met-airco"
          },
          articleBody: `
            Een moderne airco is niet alleen voor koeling, maar ook een efficiënte manier van verwarmen.
            Door gebruik te maken van warmtepomp technologie kan een airco tot 60% energie besparen op verwarmingskosten.
            
            Voordelen van verwarmen met airco:
            - Zeer energiezuinig (tot 60% besparing)
            - Werkt ook bij lage temperaturen
            - Snelle opwarming
            - Eenvoudige installatie
            - Koeling in de zomer
            - Lage onderhoudskosten
            
            Onze aanpak omvat deskundig advies, professionele installatie en uitgebreide garantie.
          `,
          keywords: "verwarmen met airco, airco verwarming, warmtepomp airco, energiezuinig verwarmen, duurzame verwarming",
          articleSection: "Klimaatbeheersing",
          wordCount: 1500,
          inLanguage: "nl-NL"
        }}
      />
      <Helmet>
        <title>Verwarmen met Airco | Efficiënt & Duurzaam Verwarmen | StayCool</title>
        <meta 
          name="description" 
          content="Ontdek hoe u uw huis efficiënt kunt verwarmen met een airco. Bespaar tot 60% op uw energierekening met deze moderne verwarmingsoplossing. ✓ Energiezuinig ✓ Duurzaam ✓ Professionele installatie"
        />
        <meta 
          name="keywords" 
          content="verwarmen met airco, airco verwarming, warmtepomp airco, energiezuinig verwarmen, duurzame verwarming"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Verwarmen met Airco: De Slimme Manier van Duurzaam Verwarmen
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Moderne Verwarmingstechnologie</h2>
              <p>
                Een moderne airco is niet alleen voor koeling, maar ook een zeer efficiënte manier van verwarmen. 
                Door gebruik te maken van <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">warmtepomp technologie</Link> kan 
                een airco tot 60% energie besparen op uw verwarmingskosten. Dit maakt het een van de meest 
                <Link to="/kennisbank/energiezuinige-airco-limburg" className="text-blue-600 hover:text-blue-700"> energiezuinige verwarmingsoplossingen</Link> 
                die momenteel beschikbaar zijn.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Efficiëntie</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Tot 60% energiebesparing</li>
                  <li>✓ Snelle opwarming</li>
                  <li>✓ Werkt bij lage temperaturen</li>
                  <li>✓ Optimale temperatuurregeling</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <PiggyBank className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Kosten</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Lage energiekosten</li>
                  <li>✓ Subsidie mogelijk</li>
                  <li>✓ Minimaal onderhoud</li>
                  <li>✓ Lange levensduur</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Zekerheid</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ 5 jaar garantie</li>
                  <li>✓ Erkend installateur</li>
                  <li>✓ Priority storingsdienst</li>
                  <li>✓ Professioneel advies</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Veelgestelde Vragen over Verwarmen met Airco</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Werkt een Airco ook bij Lage Temperaturen?</h3>
                  <p>
                    Moderne aircosystemen kunnen effectief verwarmen tot buitentemperaturen van -15°C. 
                    De nieuwste modellen presteren zelfs nog beter, waardoor ze perfect geschikt zijn 
                    voor het Nederlandse klimaat.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hoe Energiezuinig is Verwarmen met een Airco?</h3>
                  <p>
                    Een airco met warmtepompfunctie kan tot 60% energie besparen vergeleken met traditionele 
                    verwarmingssystemen. Voor elke kWh elektriciteit die het systeem verbruikt, produceert 
                    het 3-4 kWh aan warmte.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is de Installatie Complex?</h3>
                  <p>
                    De <Link to="/kennisbank/airco-installatie-limburg" className="text-blue-600 hover:text-blue-700">installatie</Link> is 
                    relatief eenvoudig en kan meestal binnen een dag worden uitgevoerd door onze 
                    <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> gecertificeerde monteurs</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Voordelen van Verwarmen met Airco</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Dubbele Functionaliteit</h3>
                  <p>
                    Een airco biedt zowel verwarming in de winter als koeling in de zomer, waardoor u 
                    het hele jaar door comfort heeft met één systeem.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Energiebesparing</h3>
                  <p>
                    Door de hoge efficiëntie van warmtepomptechnologie bespaart u aanzienlijk op uw 
                    energierekening. Meer informatie over energiebesparing vindt u in onze 
                    <Link to="/kennisbank/energiezuinige-airco-limburg" className="text-blue-600 hover:text-blue-700"> energiezuinige airco gids</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Duurzame Keuze</h3>
                  <p>
                    Verwarmen met een airco is een milieuvriendelijke oplossing die bijdraagt aan een 
                    lagere CO2-uitstoot en past binnen moderne duurzaamheidseisen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Advies</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="tel:0462021430" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>046 202 1430</span>
                </a>
                <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Stuur een bericht</span>
                </Link>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Klaar om te Besparen op Uw Verwarmingskosten?</h2>
              <p className="mb-6">
                Ontdek hoe een moderne airco uw verwarmingskosten kan verlagen. Vraag een vrijblijvende 
                offerte aan of neem contact op voor persoonlijk advies. We zijn beschikbaar van maandag 
                t/m vrijdag tussen 9:00 en 17:00 uur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Offerte Aanvragen
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  Bel Direct: 046 202 1430
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}
