import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Wind, ThermometerSun, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CoandaEffect() {
  return (
    <>
      <Helmet>
        <title>Het Coanda Effect | StayCool Airco Kennisbank</title>
        <meta 
          name="description" 
          content="Leer alles over het Coanda effect in airconditioners. Ontdek hoe deze technologie zorgt voor optimale luchtverdeling en maximaal comfort."
        />
        <meta 
          name="keywords" 
          content="coanda effect, airco luchtverdeling, daikin stylish, comfort airco, luchtstroming airco"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/kennisbank"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar Kennisbank
            </Link>
          </nav>

          {/* Article Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Het Coanda Effect
            </h1>
            <p className="text-xl text-gray-600">
              Hoe natuurkundige principes zorgen voor optimaal klimaatcomfort
            </p>
          </m.div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Wat is het Coanda Effect?</h2>
            <p>
              Het Coanda effect is een natuurkundig verschijnsel waarbij een luchtstroom 
              de neiging heeft om een nabijgelegen oppervlak te volgen. Bij airconditioners 
              wordt dit principe toegepast om de geconditioneerde lucht langs het plafond 
              of de muur te leiden, wat resulteert in een betere verdeling van de lucht 
              in de ruimte.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-blue-900 mt-0">
                <Wind className="h-6 w-6 mr-2" />
                Hoe werkt het?
              </h3>
              <p className="mb-4">
                1. De airconditioner blaast lucht uit onder een specifieke hoek
                <br />
                2. Deze luchtstroom hecht zich aan het plafond door het Coanda effect
                <br />
                3. De lucht verspreidt zich geleidelijk door de hele ruimte
                <br />
                4. Dit zorgt voor een gelijkmatige temperatuurverdeling zonder tocht
              </p>
            </div>

            <h2>Voordelen van het Coanda Effect</h2>
            <ul>
              <li>Voorkomt directe, onaangename luchtstromen</li>
              <li>Zorgt voor snellere opwarming of afkoeling van de ruimte</li>
              <li>Verbetert de energie-efficiëntie</li>
              <li>Vermindert temperatuurverschillen in de ruimte</li>
              <li>Verhoogt het algemene comfort</li>
            </ul>

            <h2>Toepassing in Moderne Airconditioners</h2>
            <p>
              Moderne airconditioners, zoals de Daikin Stylish, zijn specifiek ontworpen 
              om het Coanda effect optimaal te benutten. Door de speciale vormgeving 
              van de uitblaaslamellen en geavanceerde ventilatortechnologie wordt de 
              luchtstroom perfect gestuurd voor maximaal comfort.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h3 className="text-gray-900 mt-0">Praktijkvoorbeeld</h3>
              <p className="mb-4">
                In een woonkamer van 30m²:
              </p>
              <ul className="mb-0">
                <li>Traditionele airco: Ongelijkmatige temperatuurverdeling met 3-4°C verschil</li>
                <li>Met Coanda effect: Maximaal 1-2°C temperatuurverschil in de ruimte</li>
                <li>Resultaat: Meer comfort en 15-20% energiebesparing</li>
              </ul>
            </div>

            <h2>Tips voor Optimaal Gebruik</h2>
            <ol>
              <li>
                <strong>Juiste Plaatsing:</strong>
                <p>
                  Zorg voor voldoende ruimte boven de unit zodat het Coanda effect 
                  optimaal kan werken.
                </p>
              </li>
              <li>
                <strong>Ventilatorsnelheid:</strong>
                <p>
                  Start met een hogere ventilatorsnelheid voor snelle temperatuurverandering, 
                  schakel daarna terug voor optimale luchtverspreiding.
                </p>
              </li>
              <li>
                <strong>Lamellenstand:</strong>
                <p>
                  Laat de lamellen in de automatische stand staan voor de beste werking 
                  van het Coanda effect.
                </p>
              </li>
            </ol>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ervaar het Coanda Effect
            </h2>
            <p className="text-blue-100 mb-8">
              Ontdek hoe een airco met Coanda effect uw comfort kan verbeteren
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                Bekijk Modellen
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600"
              >
                Bel direct: 046 202 1430
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}