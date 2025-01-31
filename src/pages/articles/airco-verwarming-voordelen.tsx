import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, Euro, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function AircoVerwarmingVoordelen() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Voordelen van Airco Verwarming', path: '/kennisbank/airco-verwarming-voordelen' }
  ];

  return (
    <>
      <SchemaMarkup 
        type="Article"
        data={{
          headline: "Voordelen van Airco Verwarming: Bespaar tot 60% op Verwarmingskosten",
          description: "Overweegt u een airco voor verwarming? Ontdek alle voordelen: lagere energiekosten, snelle verwarming en jaar-rond comfort. Inclusief kostenindicatie en subsidiemogelijkheden.",
          image: "https://staycoolairco.nl/images/logo.svg",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://staycoolairco.nl/kennisbank/airco-verwarming-voordelen"
          },
          articleBody: `
            Verwarmen met een airco biedt talloze voordelen voor uw woning of bedrijfspand.
            Van energiebesparing tot jaar-rond comfort, ontdek waarom steeds meer mensen kiezen voor deze moderne verwarmingsoplossing.
            
            Belangrijkste voordelen:
            - Tot 60% lagere energiekosten
            - Zowel verwarming als koeling
            - Snelle temperatuurregeling
            - Minimaal onderhoud nodig
            - Lange levensduur
            - Milieuvriendelijk
            
            Inclusief subsidiemogelijkheden en praktische kostenindicatie.
          `,
          keywords: "airco verwarming voordelen, kosten airco verwarming, energiebesparing airco, duurzaam verwarmen, airco subsidie",
          articleSection: "Klimaatbeheersing",
          wordCount: 1500,
          inLanguage: "nl-NL"
        }}
      />
      <Helmet>
        <title>Voordelen van Airco Verwarming | Tot 60% Besparing | StayCool</title>
        <meta 
          name="description" 
          content="Overweegt u een airco voor verwarming? Ontdek alle voordelen: lagere energiekosten, snelle verwarming en jaar-rond comfort. Inclusief kostenindicatie en subsidiemogelijkheden."
        />
        <meta 
          name="keywords" 
          content="airco verwarming voordelen, kosten airco verwarming, energiebesparing airco, duurzaam verwarmen, airco subsidie"
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
              Voordelen van Airco Verwarming: Bespaar tot 60% op Verwarmingskosten
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Kiezen voor Airco Verwarming?</h2>
              <p>
                Een airco als verwarmingssysteem biedt een moderne en efficiënte oplossing voor uw verwarmingsbehoefte. 
                Met de nieuwste <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">warmtepomptechnologie</Link> bespaart 
                u niet alleen flink op uw energierekening, maar draagt u ook bij aan een duurzamere toekomst. 
                Meer weten over de werking? Bekijk onze uitgebreide uitleg over{' '}
                <Link to="/kennisbank/verwarmen-met-airco" className="text-blue-600 hover:text-blue-700">verwarmen met airco</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Euro className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Kostenbesparing</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ 60% lagere energiekosten</li>
                  <li>✓ ISDE subsidie mogelijk</li>
                  <li>✓ Snelle terugverdientijd</li>
                  <li>✓ Waardevermeerdering huis</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Comfort</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Snelle opwarming</li>
                  <li>✓ Precieze temperatuurregeling</li>
                  <li>✓ Stille werking</li>
                  <li>✓ Ook koeling in de zomer</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Praktisch</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Eenvoudige installatie</li>
                  <li>✓ Weinig onderhoud nodig</li>
                  <li>✓ Lange levensduur</li>
                  <li>✓ Direct gebruiksklaar</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Wat Kost Verwarmen met een Airco?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Aanschaf en Installatie</h3>
                  <p>
                    De initiële investering varieert tussen €1.500 en €2.500 voor een standaard installatie. 
                    Met de ISDE subsidie kunt u tot €2.000 terugkrijgen, waardoor de netto investering zeer 
                    aantrekkelijk wordt.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Maandelijkse Kosten</h3>
                  <p>
                    Door de hoge efficiëntie (COP-waarde van 4 of hoger) bespaart u tot 60% op uw 
                    verwarmingskosten. Bij een gemiddeld huishouden kan dit neerkomen op honderden 
                    euro's per jaar.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Terugverdientijd</h3>
                  <p>
                    Met de huidige energieprijzen en beschikbare subsidies verdient u de investering vaak 
                    binnen 3-5 jaar terug. Daarna profiteert u jarenlang van lagere energiekosten.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Veelgestelde Vragen over Kosten en Voordelen</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Hoe Snel Verdien Ik de Investering Terug?</h3>
                  <p>
                    Met de huidige energieprijzen en beschikbare subsidies is de gemiddelde terugverdientijd 
                    3-5 jaar. Dit hangt af van uw specifieke situatie en energieverbruik.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Welke Subsidies Zijn Er Beschikbaar?</h3>
                  <p>
                    Via de ISDE-regeling kunt u tot €2.000 subsidie krijgen. Daarnaast zijn er vaak 
                    lokale subsidieregelingen beschikbaar. Onze adviseurs helpen u graag bij het 
                    aanvragen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verhoogt Dit de Waarde van Mijn Huis?</h3>
                  <p>
                    Ja, een moderne airco met verwarmingsfunctie verhoogt de waarde van uw woning. Het 
                    verbetert het energielabel en biedt toekomstige bewoners jaar-rond comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Persoonlijk Advies</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Bereken Uw Besparing</h2>
              <p className="mb-6">
                Wilt u weten hoeveel u kunt besparen met een airco als verwarmingssysteem? 
                Vraag een vrijblijvende berekening aan of neem contact op voor persoonlijk advies. 
                We zijn beschikbaar van maandag t/m vrijdag tussen 9:00 en 17:00 uur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Bereken Uw Besparing
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
