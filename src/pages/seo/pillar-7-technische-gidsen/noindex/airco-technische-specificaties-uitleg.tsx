import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoTechnischeSpecificatiesUitleg() {
  return (
    <>
      <MetaTags
        title="Airco Technische Specificaties Uitgelegd | BTU, SEER, SCOP"
        description="Begrijp airco technische specificaties: BTU, kW, SEER, SCOP, R32 koelmiddel. Professionele uitleg van alle technische termen voor uw airconditioning."
        noIndex={true}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs />

          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Airco Technische Specificaties Uitgelegd
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Alle technische termen en specificaties van airconditioners helder uitgelegd.
                Van BTU en kilowatt tot SEER-waarden en koelmiddeltypes.
              </p>
            </header>

            {/* BTU Capaciteit */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                BTU en Koelvermogen
              </h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Wat is BTU?
                </h3>
                <p className="text-gray-700 mb-4">
                  BTU (British Thermal Unit) is de standaard maat voor koelvermogen van airconditioners.
                  Eén BTU is de energie die nodig is om 1 pond water met 1 graad Fahrenheit te verwarmen
                  of af te koelen.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">BTU naar kW omrekenen:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>2.5 kW</strong> = circa 9.000 BTU (kleine ruimtes)</li>
                    <li><strong>3.5 kW</strong> = circa 12.000 BTU (standaard slaapkamers)</li>
                    <li><strong>5.0 kW</strong> = circa 18.000 BTU (grote woonkamers)</li>
                    <li><strong>7.0 kW</strong> = circa 24.000 BTU (zeer grote ruimtes)</li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-6">
                  Voor precieze berekeningen van het benodigde vermogen voor uw ruimte, zie onze{' '}
                  <Link to="/kennisbank/airco-capaciteit-berekenen" className="text-blue-600 hover:text-blue-800 underline">
                    complete gids voor capaciteitsberekening
                  </Link>.
                </p>
              </div>
            </section>

            {/* Energie-efficiency */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Energie-efficiency: SEER en SCOP
              </h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  SEER (Seasonal Energy Efficiency Ratio)
                </h3>
                <p className="text-gray-700 mb-4">
                  SEER meet de koelefficiëntie over een volledig seizoen. Hoe hoger de SEER-waarde,
                  hoe zuiniger de airco in gebruik.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">SEER Classificatie:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>A+++ (SEER &gt; 8.5)</strong> - Zeer hoge efficiency</li>
                    <li><strong>A++ (SEER 6.1-8.5)</strong> - Hoge efficiency</li>
                    <li><strong>A+ (SEER 5.6-6.1)</strong> - Goede efficiency</li>
                    <li><strong>A (SEER 5.1-5.6)</strong> - Standaard efficiency</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  SCOP (Seasonal Coefficient of Performance)
                </h3>
                <p className="text-gray-700 mb-4">
                  SCOP meet de verwarmingsefficiëntie. Een SCOP van 4.0 betekent dat de airco
                  4 kW warmte produceert per 1 kW elektriciteit.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">SCOP Classificatie:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>A+++ (SCOP &gt; 5.1)</strong> - Uitstekende verwarmingsefficiency</li>
                    <li><strong>A++ (SCOP 4.6-5.1)</strong> - Zeer goede efficiency</li>
                    <li><strong>A+ (SCOP 4.0-4.6)</strong> - Goede efficiency</li>
                    <li><strong>A (SCOP 3.4-4.0)</strong> - Standaard efficiency</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Koelmiddel */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Koelmiddel: R32 en Andere Types
              </h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  R32 Koelmiddel - De Nieuwe Standaard
                </h3>
                <p className="text-gray-700 mb-4">
                  R32 is het moderne koelmiddel dat R410A vervangt vanwege de lagere impact op
                  het milieu. R32 heeft een Global Warming Potential (GWP) van 675, vergeleken
                  met 2088 voor R410A.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Voordelen R32:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>68% lagere GWP dan R410A</li>
                    <li>Betere energie-efficiency</li>
                    <li>Gemakkelijker te recyclen</li>
                    <li>Lager koelmiddelvulgewicht nodig</li>
                    <li>Toekomstbestendig volgens F-gas regelgeving</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Andere Koelmiddeltypes
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">GWP</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="px-4 py-3">R32</td>
                        <td className="px-4 py-3">675</td>
                        <td className="px-4 py-3 text-green-600 font-medium">Actueel</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">R410A</td>
                        <td className="px-4 py-3">2088</td>
                        <td className="px-4 py-3 text-orange-600">Wordt uitgefaseerd</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">R290 (Propaan)</td>
                        <td className="px-4 py-3">3</td>
                        <td className="px-4 py-3 text-blue-600">Toekomst</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">R22</td>
                        <td className="px-4 py-3">1810</td>
                        <td className="px-4 py-3 text-red-600">Verboden</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Geluidsniveau */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Geluidsniveau (dB)
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Het geluidsniveau van een airco wordt gemeten in decibel (dB). Moderne airconditioners
                  zijn steeds stiller geworden dankzij inverter technologie en verbeterde ventilatorbladen.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Geluidsniveau Referenties:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>19-25 dB</strong> - Fluistering, zeer stil (premium units)</li>
                    <li><strong>25-35 dB</strong> - Stil kantoor, comfortabel (standaard indoor units)</li>
                    <li><strong>35-45 dB</strong> - Normaal gesprek (buitenunits op afstand)</li>
                    <li><strong>45-55 dB</strong> - Hoorbaar maar acceptabel (oudere systemen)</li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Let op:</strong> Binnenunits zijn meestal stiller dan buitenunits. Bij de
                  installatie wordt rekening gehouden met de plaatsing van de buitenunit om geluidsoverlast
                  voor u en uw buren te minimaliseren.
                </p>
              </div>
            </section>

            {/* Inverter Technologie */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Inverter Technologie
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Inverter technologie is de moderne standaard voor airconditioners. In plaats van
                  aan/uit schakelen, regelt een inverter airco het toerental van de compressor continu
                  voor optimaal comfort en efficiëntie.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Voordelen Inverter:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>30-50% energiebesparing</li>
                      <li>Constante temperatuur</li>
                      <li>Stiller in gebruik</li>
                      <li>Sneller koelen/verwarmen</li>
                      <li>Langere levensduur</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">On/Off Systeem:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>Hogere energiekosten</li>
                      <li>Temperatuurschommelingen</li>
                      <li>Meer geluid bij opstarten</li>
                      <li>Langzamer reageren</li>
                      <li>Kortere levensduur</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700">
                  Alle moderne airconditioners van StayCool zijn uitgerust met inverter technologie
                  voor maximaal comfort en minimaal energieverbruik.
                </p>
              </div>
            </section>

            {/* Smart Features */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Features en Bediening
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Moderne airconditioners bieden uitgebreide smart functies voor optimaal gebruiksgemak.
                  Lees meer in onze{' '}
                  <Link to="/kennisbank/airco-wifi-bediening" className="text-blue-600 hover:text-blue-800 underline">
                    complete gids over WiFi bediening
                  </Link>.
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Populaire Smart Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>WiFi Module</strong> - Bediening via smartphone app</li>
                    <li><strong>Voice Control</strong> - Google Assistant / Amazon Alexa</li>
                    <li><strong>Timer Functies</strong> - Geprogrammeerd aan/uit</li>
                    <li><strong>Auto Mode</strong> - Automatische temperatuurregeling</li>
                    <li><strong>Sleep Mode</strong> - Nachtstand voor optimaal slaapcomfort</li>
                    <li><strong>I Feel Sensor</strong> - Temperatuurmeting op afstandsbediening</li>
                    <li><strong>Air Quality Sensor</strong> - Automatische luchtkwaliteitsregeling</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Luchtfiltratie */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Luchtfiltratie Technologieën
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Hoogwaardige airconditioners zijn uitgerust met geavanceerde filtratiesystemen voor
                  gezonde binnenlucht.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">HEPA Filter</h4>
                    <p className="text-gray-700">
                      Filtert 99.97% van stofdeeltjes, pollen en allergenen van 0.3 micron of groter.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Plasma/Ionisatie</h4>
                    <p className="text-gray-700">
                      Neutraliseert bacteriën, virussen en geuren door negatieve ionen te produceren.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">UV-C Lamp</h4>
                    <p className="text-gray-700">
                      Doodt micro-organismen en voorkomt schimmelgroei in het systeem.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Actieve Koolstoffilter</h4>
                    <p className="text-gray-700">
                      Absorbeert geuren, rook en vluchtige organische stoffen (VOC's).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Garantie en Certificering */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Garantie en Certificeringen
              </h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Fabrieksgarantie
                </h3>
                <p className="text-gray-700 mb-4">
                  Standaard fabrieksgarantie voor kwalitatieve airconditioners:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li><strong>2-3 jaar</strong> - Standaard fabrieksgarantie op alle onderdelen</li>
                  <li><strong>5-7 jaar</strong> - Uitgebreide garantie op compressor (bij premium merken)</li>
                  <li><strong>10+ jaar</strong> - Optionele verlengde garantie beschikbaar</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Belangrijke Certificeringen
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">CE Markering</h4>
                    <p className="text-gray-700 text-sm">Europese veiligheidsnorm</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Energy Label</h4>
                    <p className="text-gray-700 text-sm">A++ tot A+++ classificatie</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">F-gas Gecertificeerd</h4>
                    <p className="text-gray-700 text-sm">Koelmiddel certificering vereist</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Stille Werking</h4>
                    <p className="text-gray-700 text-sm">Geluidsemissie certificaat</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gerelateerde Kennisbank Links */}
            <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gerelateerde Kennisbank Artikelen
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/kennisbank/airco-capaciteit-berekenen"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Airco Capaciteit Berekenen
                  </h3>
                  <p className="text-gray-700">
                    Complete gids voor het bepalen van het juiste koelvermogen voor uw ruimte
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-wifi-bediening"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    WiFi Bediening en Smart Features
                  </h3>
                  <p className="text-gray-700">
                    Alles over slimme bediening, apps en voice control voor uw airco
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-energieverbruik"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Energieverbruik en Kosten
                  </h3>
                  <p className="text-gray-700">
                    Bereken de energiekosten en bespaar met efficiënte airconditioning
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-onderhoud"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Onderhoud en Levensduur
                  </h3>
                  <p className="text-gray-700">
                    Verleng de levensduur van uw airco met goed onderhoud
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Hulp Nodig bij het Kiezen van de Juiste Airco?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Onze experts helpen u graag met persoonlijk advies op basis van uw specifieke situatie
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Vraag Gratis Advies Aan
                </Link>
                <Link
                  to="/offerte"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-block border-2 border-white"
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
