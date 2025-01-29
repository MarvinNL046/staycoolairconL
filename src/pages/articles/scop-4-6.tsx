import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { ThermometerSun, Zap, BarChart, Info, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Scop46() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'SCOP 4.6', path: '/kennisbank/scop-4-6' }
  ];

  return (
    <>
      <Helmet>
        <title>SCOP 4.6 | Uitleg over Energie-efficiëntie van Warmtepompen</title>
        <meta 
          name="description" 
          content="Wat betekent SCOP 4.6 bij een warmtepomp of airco? Leer alles over deze energie-efficiëntie indicator en waarom deze belangrijk is voor uw energieverbruik."
        />
        <meta 
          name="keywords" 
          content="SCOP 4.6, energie-efficiëntie, warmtepomp rendement, airco efficiëntie, energiebesparing, duurzame verwarming"
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
              SCOP 4.6: Alles over Energie-efficiëntie
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Wat is SCOP 4.6?</h2>
              <p>
                SCOP (Seasonal Coefficient of Performance) is een belangrijke indicator voor de 
                energie-efficiëntie van warmtepompen en airconditioners. Een SCOP van 4.6 betekent 
                dat het systeem gemiddeld 4,6 keer zoveel warmte-energie levert als het aan 
                elektrische energie verbruikt. Dit maakt het een zeer efficiënt systeem met 
                lage energiekosten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Seizoensrendement</h3>
                </div>
                <p className="text-gray-600">
                  SCOP 4.6 geeft het gemiddelde rendement over het hele verwarmingsseizoen aan, 
                  rekening houdend met verschillende buitentemperaturen en gebruiksomstandigheden.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Energiebesparing</h3>
                </div>
                <p className="text-gray-600">
                  Met een SCOP van 4.6 bespaart u aanzienlijk op uw energierekening vergeleken 
                  met traditionele verwarmingssystemen.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Voordelen van een Hoge SCOP</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li>✓ Lager energieverbruik</li>
                  <li>✓ Lagere energiekosten</li>
                  <li>✓ Betere duurzaamheid</li>
                  <li>✓ Hoger rendement</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Minder CO2-uitstoot</li>
                  <li>✓ Betere prestaties</li>
                  <li>✓ Langere levensduur</li>
                  <li>✓ Hogere betrouwbaarheid</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">SCOP Berekening</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BarChart className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hoe wordt SCOP berekend?</h3>
                    <p className="text-gray-600">
                      SCOP wordt berekend door de totale geleverde warmte over een heel seizoen 
                      te delen door het totale elektriciteitsverbruik in dezelfde periode. Een 
                      SCOP van 4.6 betekent dat voor elke kWh elektriciteit, 4,6 kWh aan warmte 
                      wordt geproduceerd.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Praktijkvoorbeeld SCOP 4.6</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-600">
                      Bij een jaarlijks verwarmingsverbruik van 10.000 kWh aan warmte, verbruikt 
                      een systeem met SCOP 4.6 ongeveer 2.174 kWh aan elektriciteit (10.000 ÷ 4,6). 
                      Bij een elektriciteitstarief van €0,30 per kWh betekent dit een jaarlijkse 
                      energiekost van €652, terwijl een traditioneel elektrisch verwarmingssysteem 
                      €3.000 zou kosten voor dezelfde warmteproductie.
                    </p>
                  </div>
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
              <h2 className="text-2xl font-semibold mb-4">Ontdek Onze Efficiënte Systemen</h2>
              <p className="mb-6">
                Wilt u meer weten over onze energiezuinige airconditioningsystemen met hoge SCOP-waarden? 
                Vraag een vrijblijvend adviesgesprek aan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Advies Aanvragen
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
