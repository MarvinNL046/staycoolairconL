import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Thermometer, Wind, Droplets, Sun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowAircoWorks() {
  return (
    <>
      <Helmet>
        <title>Hoe werkt een airco? | StayCool Airco Kennisbank</title>
        <meta 
          name="description" 
          content="Leer hoe een airconditioner precies werkt. Ontdek het proces van warmte-uitwisseling, de rol van het koudemiddel en de verschillende componenten van een airco."
        />
        <meta 
          name="keywords" 
          content="airco werking, airconditioner uitleg, warmte-uitwisseling, koudemiddel, compressor airco, verdamper airco, condensor airco"
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
              Hoe werkt een airco?
            </h1>
            <p className="text-xl text-gray-600">
              Een duidelijke uitleg over de werking van een airconditioner
            </p>
          </m.div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Het basisprincipe</h2>
            <p>
              Een airconditioner werkt volgens hetzelfde principe als een koelkast: 
              het verplaatst warmte van binnen naar buiten. Dit proces gebeurt door 
              middel van een koudemiddel dat door verschillende componenten circuleert.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-blue-900 mt-0">
                <Thermometer className="h-6 w-6 mr-2" />
                De belangrijkste componenten
              </h3>
              <ul className="mt-4">
                <li><strong>Verdamper:</strong> Absorbeert warmte uit de binnenlucht</li>
                <li><strong>Compressor:</strong> Verhoogt de druk van het koudemiddel</li>
                <li><strong>Condensor:</strong> Geeft warmte af aan de buitenlucht</li>
                <li><strong>Expansieventiel:</strong> Regelt de druk van het koudemiddel</li>
              </ul>
            </div>

            <h2>Het proces stap voor stap</h2>
            
            <h3>1. Warmte opnemen (Verdamper)</h3>
            <p>
              Het proces begint in de verdamper, waar het vloeibare koudemiddel 
              verdampt bij lage druk. Tijdens dit proces absorbeert het koudemiddel 
              warmte uit de binnenlucht, waardoor deze afkoelt.
            </p>

            <h3>2. Compressie (Compressor)</h3>
            <p>
              Het gasvormige koudemiddel wordt vervolgens samengeperst door de 
              compressor. Hierdoor stijgt de druk en temperatuur van het gas.
            </p>

            <h3>3. Warmte afgeven (Condensor)</h3>
            <p>
              In de condensor wordt de warmte afgegeven aan de buitenlucht, 
              waardoor het koudemiddel weer vloeibaar wordt.
            </p>

            <h3>4. Drukvermindering (Expansieventiel)</h3>
            <p>
              Het expansieventiel verlaagt de druk van het vloeibare koudemiddel, 
              waarna het proces opnieuw begint.
            </p>

            <div className="bg-green-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-green-900 mt-0">
                <Zap className="h-6 w-6 mr-2" />
                Energiebesparing
              </h3>
              <p className="mb-0">
                Moderne airconditioners zijn zeer efficiënt en kunnen tot wel 4-5 keer 
                meer koeling of verwarming produceren dan de elektrische energie die 
                ze verbruiken.
              </p>
            </div>

            <h2>Split-unit vs. Mono-block</h2>
            <p>
              Er zijn twee hoofdtypen airconditioners voor thuisgebruik:
            </p>
            <ul>
              <li>
                <strong>Split-unit:</strong> Bestaat uit een binnen- en buitenunit. 
                De binnenunit bevat de verdamper, de buitenunit de compressor en 
                condensor.
              </li>
              <li>
                <strong>Mono-block:</strong> Alle componenten zitten in één unit, 
                meestal met een luchtslang naar buiten.
              </li>
            </ul>

            <div className="bg-yellow-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-yellow-900 mt-0">
                <Sun className="h-6 w-6 mr-2" />
                Verwarmen met een airco
              </h3>
              <p>
                Moderne airconditioners kunnen ook verwarmen door het proces om te 
                keren. De binnenunit werkt dan als condensor en de buitenunit als 
                verdamper. Dit maakt ze zeer geschikt voor energiezuinig verwarmen, 
                vooral in combinatie met zonnepanelen.
              </p>
            </div>

            <h2>Onderhoud en efficiëntie</h2>
            <p>
              Voor optimale werking is regelmatig onderhoud belangrijk:
            </p>
            <ul>
              <li>Filters regelmatig reinigen</li>
              <li>Condensafvoer controleren</li>
              <li>Koudemiddel op peil houden</li>
              <li>Jaarlijkse inspectie door een professional</li>
            </ul>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Meer weten over airconditioning?
            </h2>
            <p className="text-blue-700 mb-8">
              Onze experts helpen u graag bij het kiezen van de juiste airco voor uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Vraag advies aan
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
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