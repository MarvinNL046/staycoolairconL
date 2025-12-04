import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteLimburg() {
  return (
    <>
      <MetaTags
        title="Airco offerte Limburg – Wat je moet weten in 2025 | StayCool"
        description="Wat kost een airco inclusief installatie in Limburg? Alles over prijzen, advies en factoren die de offerte beïnvloeden. Vraag vrijblijvend een offerte aan."
        keywords="airco offerte, airco installatie Limburg, airco prijzen, airco kosten, airco buitenunit, airconditioning offerte, airco met montage"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-limburg"
        type="article"
      />
      
      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte Limburg – Wat je moet weten in 2025",
          description: "Een airco inclusief installatie kost gemiddeld tussen de €1.500 en €3.000. De exacte prijs hangt af van het merk, vermogen en installatiecomplexiteit. Vraag altijd meerdere offertes aan en kies voor een erkende installateur zoals StayCool Airconditioning.",
          datePublished: "2025-05-10",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-limburg-staycool.png"
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Blog', path: '/blog' },
              { label: 'Airco offerte Limburg' }
            ]}
          />
          
          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>10 mei 2025</span>
                <span className="mx-2">•</span>
                <span>6 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Prijzen</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte Limburg – Wat je moet weten in 2025
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Een airco inclusief installatie kost gemiddeld tussen de €1.500 en €3.000. De exacte prijs hangt af van het merk, vermogen en installatiecomplexiteit. Vraag altijd meerdere offertes aan en kies voor een erkende installateur zoals StayCool Airconditioning.
              </p>
            </header>
            
            <figure className="mb-8">
              <img 
                src="/images/blog/airco-offerte-limburg-staycool.png" 
                alt="Airco offerte aanvragen in Limburg" 
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Vraag een vrijblijvende airco offerte aan bij StayCool in Limburg
              </figcaption>
            </figure>
            
            <div className="prose prose-lg max-w-none">
              <h2>Waarom een airco offerte in Limburg aanvragen?</h2>
              <p>
                De zomers in Limburg worden warmer en langer. Een goed werkende airco verhoogt je comfort aanzienlijk. Het aanvragen van een offerte geeft inzicht in de kosten, installatieopties en levertijd.
              </p>
              
              <h2>Wat kost een airco met buitenunit inclusief installatie?</h2>
              <p>
                De prijs voor een split airco inclusief buitenunit en installatie varieert. Dit hangt af van het vermogen (in kW), merk en installatiewerkzaamheden. Gemiddeld kost een standaard 3,5 kW model tussen de €1.800 en €2.200.
              </p>
              
              <table className="min-w-full border-collapse border border-gray-200 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2 text-left">Type ruimte</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Vermogen (kW)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Totale prijs (incl. montage)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Slaapkamer</td>
                    <td className="border border-gray-200 px-4 py-2">2,5 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€1.650,-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Woonkamer klein</td>
                    <td className="border border-gray-200 px-4 py-2">3,5 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€2.000,-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Woonkamer groot</td>
                    <td className="border border-gray-200 px-4 py-2">5,0 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€2.400,-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Multisplit 2 ruimtes</td>
                    <td className="border border-gray-200 px-4 py-2">5,0 kW+</td>
                    <td className="border border-gray-200 px-4 py-2">€2.900,-</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 italic">
                *Prijzen zijn inclusief btw, koelleidingen (5-8 meter), gootwerk en standaard montage.
              </p>
              
              <h2>Wat is de prijs van een airco inclusief montage?</h2>
              <p>
                Montagekosten maken ongeveer 25-35% uit van het totaalbedrag. Bij StayCool Airconditioning is de montage altijd inbegrepen in de offerte. Een gemiddelde installatie duurt 1 werkdag.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <p className="font-medium">
                  Wist je dat? StayCool Airconditioning biedt altijd een all-in prijs, zonder verborgen kosten.
                  <Link to="/contact" className="text-blue-600 hover:underline ml-1">
                    Vraag direct een offerte aan &rarr;
                  </Link>
                </p>
              </div>
              
              <h2>Factoren die de offerte beïnvloeden</h2>
              
              <h3>Type woning en bereikbaarheid</h3>
              <p>
                Een installatie op een appartement of moeilijk bereikbare gevel verhoogt de kosten. Extra steigers of hoogwerkers zijn dan nodig.
              </p>
              
              <h3>Lengte koelleidingen en elektrawerk</h3>
              <p>
                Standaard is 5-6 meter koelleiding inbegrepen. Meerwerk wordt apart berekend.
              </p>
              
              <h2>Welke merken zijn populair in Limburg?</h2>
              <p>
                In Limburg zien we vooral vraag naar merken zoals:
              </p>
              <ul>
                <li>Daikin</li>
                <li>Mitsubishi Heavy</li>
                <li>LG</li>
                <li>Tosot</li>
              </ul>
              <p>
                Deze merken combineren energiezuinigheid met een stille werking en lange levensduur.
              </p>
              
              <h2>Energieverbruik en kostenbesparing</h2>
              <p>
                Een moderne airco met energielabel A++ verbruikt gemiddeld 0,8 kWh per uur. Bij een elektriciteitsprijs van €0,35/kWh betaal je dus €0,28 per uur. Verwarmen met een airco (warmtepompfunctie) is vaak goedkoper dan gas.
              </p>
              
              <div className="not-prose bg-orange-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Actie: Gratis onderhoud</h3>
                <p className="text-gray-700 mb-4">
                  Wil je exact weten wat een airco kost in jouw situatie? Plan een vrijblijvend adviesgesprek met één van onze specialisten. Nu bij aanschaf van een complete airco installatie: gratis onderhoudsbeurt t.w.v. €179,-!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Profiteer van deze actie
                </Link>
                <p className="text-xs text-gray-500 mt-2">Actie geldig t/m 30 juni 2025. Vraag naar de voorwaarden.</p>
              </div>
              
              <h2>Waarom kiezen voor StayCool Airconditioning?</h2>
              <p>
                StayCool Airconditioning is dé specialist in Limburg. Wij bieden:
              </p>
              <ul>
                <li>Persoonlijk advies aan huis</li>
                <li>Installatie door gecertificeerde monteurs</li>
                <li>5 jaar garantie op onderdelen</li>
                <li>10 jaar garantie op de compressor bij LG</li>
              </ul>
              
              <h2>Veelvoorkomende fouten bij het aanvragen van een offerte</h2>
              
              <h3>Geen appels met peren vergelijken</h3>
              <p>
                Let goed op of een offerte inclusief of exclusief installatie is. Ook garantie en onderhoud zijn belangrijk.
              </p>
              
              <h3>Te klein of te groot vermogen kiezen</h3>
              <p>
                Een te lichte airco werkt te hard en gaat sneller stuk. Een te zware airco is duurder in aanschaf en verbruik.
              </p>
              
              <h2>Veelgestelde vragen</h2>
              
              <h3>1. Is airco ook geschikt om te verwarmen?</h3>
              <p>
                Ja, de meeste airco's functioneren ook als warmtepomp. Ze zijn ideaal voor bijverwarming in voor- en najaar.
              </p>
              
              <h3>2. Hoe lang duurt de installatie?</h3>
              <p>
                Een standaard installatie duurt meestal 4 tot 6 uur. Complexere installaties kunnen tot 2 dagen duren.
              </p>
              
              <h3>3. Moet ik onderhoud laten doen?</h3>
              <p>
                Ja, jaarlijks onderhoud verlengt de levensduur en behoudt het rendement. Dit is vaak ook verplicht voor garantie.
              </p>
              
              <h3>4. Is subsidie beschikbaar?</h3>
              <p>
                In 2025 zijn er beperkte subsidies voor airco's met warmtepompfunctie. Vraag je installateur naar de voorwaarden.
              </p>
              
              <h3>5. Kan ik de offerte online aanvragen?</h3>
              <p>
                Ja, bij StayCool kun je eenvoudig via de website een offerte aanvragen, met of zonder bezoek op locatie.
              </p>
              
              <h2>Praktische tips bij het vergelijken van offertes</h2>
              <p>
                Let bij het vergelijken van airco offertes op:
              </p>
              <ul>
                <li>Inclusief of exclusief installatie</li>
                <li>Lengte van garantie</li>
                <li>Inclusief onderhoudscontract</li>
                <li>Specificaties van het binnen- en buitendeel</li>
                <li>Type koelmiddel (bijv. R32)</li>
              </ul>
              
              <h2>Wanneer is het beste moment om een airco te laten installeren?</h2>
              <p>
                De drukste maanden zijn mei t/m augustus. Vraag je offerte dus tijdig aan in het voorjaar of najaar om wachttijden te vermijden.
              </p>
              
              <h2>Conclusie: Airco offerte Limburg aanvragen?</h2>
              <p>
                Wil je deze zomer koel blijven in Limburg? Vraag dan tijdig een offerte aan. Een goede airco inclusief installatie kost gemiddeld tussen de €1.800 en €2.500 en biedt verkoeling én besparing op je energierekening. StayCool Airconditioning staat klaar om jou persoonlijk te adviseren.
              </p>
              
              <div className="not-prose bg-blue-600 text-white rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold mb-4">Klaar voor een vrijblijvende offerte?</h3>
                <p className="mb-4">
                  StayCool Airconditioning is dé airco specialist in Limburg. Vraag nu een gratis en vrijblijvende offerte aan voor jouw situatie.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                  <Link 
                    to="/products" 
                    className="inline-block border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Bekijk ons aanbod
                  </Link>
                </div>
              </div>
              
              <h3>Gerelateerde artikelen</h3>
              <ul>
                <li>
                  <Link to="/blog/airco-installateur-limburg-kiezen" className="text-blue-600 hover:underline">
                    Hoe kies je de juiste airco installateur in Limburg?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">
                    Waarom regelmatig airco onderhoud in Limburg essentieel is
                  </Link>
                </li>
                <li>
                  <Link to="/kosten-airco-plaatsen" className="text-blue-600 hover:underline">
                    Wat kost een airco laten plaatsen?
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </motion.div>
    </>
  );
}
