import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoInstallatieZuidLimburg() {
  return (
    <>
      <MetaTags
        title="Airco Installatie Zuid-Limburg: Maastricht, Heerlen & Meer | StayCool"
        description="Professionele airco installatie in heel Zuid-Limburg. Van Maastricht tot Kerkrade, van Heerlen tot Sittard. ✓ Gratis onderhoud ✓ Binnen 2 dagen geïnstalleerd ✓ Lokale service"
        keywords="airco installatie zuid-limburg, airco maastricht, airco heerlen, airco sittard, airco kerkrade, airconditioner installeren limburg"
        canonicalUrl="https://staycoolairco.nl/blog/airco-installatie-zuid-limburg"
        type="article"
      />
      
      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco Installatie in Zuid-Limburg: Van Maastricht tot Kerkrade",
          description: "Ontdek de voordelen van professionele airco installatie in Zuid-Limburg. Van Maastricht tot Kerkrade, wij installeren airconditioners in heel Zuid-Limburg met gratis onderhoud.",
          datePublished: "2025-05-31",
          image: "https://staycoolairco.nl/images/blog/airco installatie in Zuid- Limburg.webp"
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
              { label: 'Airco Installatie Zuid-Limburg' }
            ]}
          />
          
          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>31 mei 2025</span>
                <span className="mx-2">•</span>
                <span>8 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Installatie</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco Installatie in Zuid-Limburg: Van Maastricht tot Kerkrade
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Bent u op zoek naar een betrouwbare partner voor <strong>airco installatie in Zuid-Limburg</strong>? 
                Of u nu in het bruisende <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link> woont, 
                het historische <Link to="/werkgebied/valkenburg" className="text-blue-600 hover:underline">Valkenburg</Link> of 
                het gezellige <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link> - 
                StayCool Airco is uw lokale specialist voor professionele airconditioner installatie in heel Zuid-Limburg.
              </p>
            </header>
            
            <figure className="mb-8">
              <img 
                src="/images/blog/airco installatie in Zuid- Limburg.webp" 
                alt="Professionele airco installatie in een woning in Zuid-Limburg" 
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                StayCool Airco installeert airconditioners door heel Zuid-Limburg
              </figcaption>
            </figure>
            
            <div className="prose prose-lg max-w-none">
              {/* Gratis Onderhoud CTA */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professionele installatie door F-gassen gecertificeerde monteurs
                </h3>
                <p className="mb-4">
                  Al onze monteurs zijn F-gassen gecertificeerd en installeren uw airco volgens de hoogste normen. 
                  Binnen 2 dagen geïnstalleerd, inclusief garantie en de beste service in heel Zuid-Limburg!
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Vraag direct offerte aan
                </Link>
              </div>

              <h2>Waarom is een airco in Zuid-Limburg een slimme investering?</h2>
              
              <p>
                Zuid-Limburg kent een uniek klimaat binnen Nederland. Door de zuidelijke ligging en het heuvelachtige 
                landschap kunnen temperaturen hier in de zomer oplopen tot ver boven de 30°C. Vooral in steden als 
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline mx-1">Sittard</Link> en 
                <Link to="/werkgebied/geleen" className="text-blue-600 hover:underline mx-1">Geleen</Link> 
                kan de hitte tussen de bebouwing blijven hangen.
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Steden in de Heuvels
                  </h3>
                  <p className="text-gray-700">
                    Plaatsen zoals <Link to="/werkgebied/gulpen-wittem" className="text-blue-600">Gulpen-Wittem</Link>, 
                    <Link to="/werkgebied/vaals" className="text-blue-600 mx-1">Vaals</Link> en 
                    <Link to="/werkgebied/simpelveld" className="text-blue-600 mx-1">Simpelveld</Link> 
                    liggen in het Heuvelland. Hier zorgt een airco voor verkoeling tijdens warme zomerdagen 
                    én efficiënte verwarming in de koude wintermaanden.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Stedelijke Gebieden
                  </h3>
                  <p className="text-gray-700">
                    In drukke steden als <Link to="/werkgebied/maastricht" className="text-blue-600">Maastricht</Link>, 
                    <Link to="/werkgebied/heerlen" className="text-blue-600 mx-1">Heerlen</Link> en 
                    <Link to="/werkgebied/kerkrade" className="text-blue-600 mx-1">Kerkrade</Link> 
                    is een airco essentieel voor een aangenaam binnenklimaat, zowel thuis als op kantoor.
                  </p>
                </div>
              </div>

              <h2>Ons werkgebied in Zuid-Limburg</h2>
              
              <p>
                StayCool Airco bedient <strong>alle gemeenten in Zuid-Limburg</strong>. 
                Van de Duitse grens bij <Link to="/werkgebied/kerkrade" className="text-blue-600">Kerkrade</Link> tot 
                aan de Belgische grens bij <Link to="/werkgebied/eijsden-margraten" className="text-blue-600 mx-1">Eijsden-Margraten</Link>. 
                Enkele van onze populairste installatie locaties:
              </p>

              <div className="not-prose bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Westelijke Mijnstreek</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <li><Link to="/werkgebied/sittard" className="text-blue-600 hover:text-blue-700">• Sittard</Link></li>
                  <li><Link to="/werkgebied/geleen" className="text-blue-600 hover:text-blue-700">• Geleen</Link></li>
                  <li><Link to="/werkgebied/beek" className="text-blue-600 hover:text-blue-700">• Beek</Link></li>
                  <li><Link to="/werkgebied/stein" className="text-blue-600 hover:text-blue-700">• Stein</Link></li>
                  <li><Link to="/werkgebied/echt" className="text-blue-600 hover:text-blue-700">• Echt-Susteren</Link></li>
                  <li><Link to="/werkgebied/maasbracht" className="text-blue-600 hover:text-blue-700">• Maasbracht</Link></li>
                </ul>
              </div>

              <div className="not-prose bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Parkstad Limburg</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <li><Link to="/werkgebied/heerlen" className="text-blue-600 hover:text-blue-700">• Heerlen</Link></li>
                  <li><Link to="/werkgebied/kerkrade" className="text-blue-600 hover:text-blue-700">• Kerkrade</Link></li>
                  <li><Link to="/werkgebied/landgraaf" className="text-blue-600 hover:text-blue-700">• Landgraaf</Link></li>
                  <li><Link to="/werkgebied/brunssum" className="text-blue-600 hover:text-blue-700">• Brunssum</Link></li>
                  <li><Link to="/werkgebied/hoensbroek" className="text-blue-600 hover:text-blue-700">• Hoensbroek</Link></li>
                  <li><Link to="/werkgebied/nuth" className="text-blue-600 hover:text-blue-700">• Nuth</Link></li>
                </ul>
              </div>

              <div className="not-prose bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Maastricht & Heuvelland</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <li><Link to="/werkgebied/maastricht" className="text-blue-600 hover:text-blue-700">• Maastricht</Link></li>
                  <li><Link to="/werkgebied/valkenburg" className="text-blue-600 hover:text-blue-700">• Valkenburg</Link></li>
                  <li><Link to="/werkgebied/meerssen" className="text-blue-600 hover:text-blue-700">• Meerssen</Link></li>
                  <li><Link to="/werkgebied/gulpen-wittem" className="text-blue-600 hover:text-blue-700">• Gulpen-Wittem</Link></li>
                  <li><Link to="/werkgebied/eijsden-margraten" className="text-blue-600 hover:text-blue-700">• Eijsden-Margraten</Link></li>
                  <li><Link to="/werkgebied/vaals" className="text-blue-600 hover:text-blue-700">• Vaals</Link></li>
                </ul>
              </div>

              <h2>De voordelen van een lokale airco installateur</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Snelle service in heel Zuid-Limburg</h3>
                    <p className="text-gray-700">
                      Vanuit onze centrale locatie kunnen we binnen 30 minuten op elke locatie in Zuid-Limburg zijn. 
                      Of u nu in <Link to="/werkgebied/voerendaal" className="text-blue-600">Voerendaal</Link> woont of in 
                      <Link to="/werkgebied/simpelveld" className="text-blue-600 mx-1">Simpelveld</Link> - wij zijn er snel!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Kennis van lokale regelgeving</h3>
                    <p className="text-gray-700">
                      Elke gemeente in Zuid-Limburg heeft eigen regels voor airco installatie. Wij kennen de 
                      vergunningseisen van Maastricht tot Kerkrade en zorgen dat uw installatie aan alle voorschriften voldoet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Persoonlijk contact</h3>
                    <p className="text-gray-700">
                      Als lokaal bedrijf hechten we waarde aan persoonlijk contact. U krijgt geen callcenter maar 
                      direct contact met onze monteurs die de regio kennen.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Airco installatie prijzen in Zuid-Limburg</h2>

              <table className="min-w-full border-collapse border border-gray-200 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2 text-left">Type Installatie</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Capaciteit</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Prijs vanaf*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Single-split airco</td>
                    <td className="border border-gray-200 px-4 py-2">2.5 - 3.5 kW</td>
                    <td className="border border-gray-200 px-4 py-2 font-semibold">€ 1.399,-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Single-split airco</td>
                    <td className="border border-gray-200 px-4 py-2">5.0 - 7.0 kW</td>
                    <td className="border border-gray-200 px-4 py-2 font-semibold">€ 1.899,-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Multi-split airco (2 units)</td>
                    <td className="border border-gray-200 px-4 py-2">2x 2.5 kW</td>
                    <td className="border border-gray-200 px-4 py-2 font-semibold">€ 2.899,-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Multi-split airco (3 units)</td>
                    <td className="border border-gray-200 px-4 py-2">3x 2.5 kW</td>
                    <td className="border border-gray-200 px-4 py-2 font-semibold">€ 3.899,-</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 italic">
                *Prijzen zijn inclusief installatie, BTW en het eerste jaar gratis onderhoud. 
                Exacte prijs afhankelijk van situatie ter plaatse.
              </p>

              <h2>Veelgestelde vragen over airco installatie in Zuid-Limburg</h2>

              <h3>Hoe lang duurt een airco installatie?</h3>
              <p>
                Een standaard single-split installatie duurt gemiddeld 4-6 uur. We plannen installaties 
                door heel Zuid-Limburg efficiënt in, zodat we bijvoorbeeld 's ochtends in 
                <Link to="/werkgebied/maastricht" className="text-blue-600 mx-1">Maastricht</Link> 
                kunnen starten en 's middags in 
                <Link to="/werkgebied/heerlen" className="text-blue-600 mx-1">Heerlen</Link> 
                een volgende klant kunnen helpen.
              </p>

              <h3>Hebben jullie ervaring met monumentale panden?</h3>
              <p>
                Jazeker! Zuid-Limburg kent veel historische panden, vooral in steden als Maastricht en Valkenburg. 
                We hebben ruime ervaring met discrete installaties die het karakter van uw monumentale woning behouden.
              </p>

              <h3>Installeren jullie ook in appartementencomplexen?</h3>
              <p>
                Ja, we installeren airconditioners in alle type woningen. Voor appartementen in bijvoorbeeld 
                <Link to="/werkgebied/sittard" className="text-blue-600 mx-1">Sittard</Link> of 
                <Link to="/werkgebied/kerkrade" className="text-blue-600 mx-1">Kerkrade</Link> 
                zorgen we voor de juiste vergunningen en afstemming met de VvE.
              </p>

              {/* CTA Section */}
              <div className="not-prose bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg shadow-lg text-center my-8">
                <h2 className="text-3xl font-bold mb-4">
                  Klaar voor een koel huis in Zuid-Limburg?
                </h2>
                <p className="text-xl mb-6">
                  Van Vaals tot Stein, van Gulpen tot Brunssum - wij installeren uw airco professioneel en snel!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:0462021430"
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Bel direct: 046 202 1430
                  </a>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Vraag offerte aan
                  </Link>
                </div>
              </div>

              <h3>Gerelateerde artikelen</h3>
              <ul>
                <li>
                  <Link to="/blog/airco-installateur-limburg-kiezen" className="text-blue-600 hover:underline">
                    Hoe kies je de beste airco installateur in Limburg?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">
                    Het belang van airco onderhoud in Limburg
                  </Link>
                </li>
                <li>
                  <Link to="/kennisbank/verwarmen-met-airco" className="text-blue-600 hover:underline">
                    Verwarmen met een airco - Hoe werkt het?
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