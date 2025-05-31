import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ChevronRight, Phone, Mail, CheckCircle, MapPin, Euro, Users } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import SchemaMarkup from '../../components/SchemaMarkup';
import AnnouncementBar from '../../components/AnnouncementBar';

export default function AircoInstallatieZuidLimburg() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Airco Installatie in Zuid-Limburg: Van Maastricht tot Kerkrade",
    "description": "Ontdek de voordelen van professionele airco installatie in Zuid-Limburg. Van Maastricht tot Kerkrade, wij installeren airconditioners in heel Zuid-Limburg met gratis onderhoud.",
    "author": {
      "@type": "Organization",
      "name": "StayCool Airco"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StayCool Airco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://staycoolairco.nl/logo.svg"
      }
    },
    "datePublished": "2025-05-31",
    "dateModified": "2025-05-31",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://staycoolairco.nl/blog/airco-installatie-zuid-limburg"
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <MetaTags 
        title="Airco Installatie Zuid-Limburg: Maastricht, Heerlen & Meer | StayCool"
        description="Professionele airco installatie in heel Zuid-Limburg. Van Maastricht tot Kerkrade, van Heerlen tot Sittard. ✓ Gratis onderhoud ✓ Binnen 2 dagen geïnstalleerd ✓ Lokale service"
        keywords="airco installatie zuid-limburg, airco maastricht, airco heerlen, airco sittard, airco kerkrade, airconditioner installeren limburg"
        ogImage="/images/blog/airco-installatie-zuid-limburg.png"
      />
      <SchemaMarkup schema={articleSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <AnnouncementBar />
        
        {/* Breadcrumbs */}
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li><Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-900">Airco Installatie Zuid-Limburg</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Airco Installatie in Zuid-Limburg: Van Maastricht tot Kerkrade
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime="2025-05-31">31 mei 2025</time>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>8 min leestijd</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>Airco Installatie</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.figure 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images/blog/airco installatie in Zuid- Limburg.webp" 
            alt="Professionele airco installatie in een woning in Zuid-Limburg"
            className="w-full h-auto rounded-lg shadow-xl"
            loading="eager"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-4">
            StayCool Airco installeert airconditioners door heel Zuid-Limburg
          </figcaption>
        </motion.figure>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Introduction */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Bent u op zoek naar een betrouwbare partner voor <strong>airco installatie in Zuid-Limburg</strong>? 
              Of u nu in het bruisende <Link to="/werkgebied/maastricht" className="text-blue-600 hover:text-blue-700">Maastricht</Link> woont, 
              het historische <Link to="/werkgebied/valkenburg" className="text-blue-600 hover:text-blue-700">Valkenburg</Link> of 
              het gezellige <Link to="/werkgebied/heerlen" className="text-blue-600 hover:text-blue-700">Heerlen</Link> - 
              StayCool Airco is uw lokale specialist voor professionele airconditioner installatie in heel Zuid-Limburg.
            </p>

            {/* Gratis Onderhoud CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Nu met GRATIS onderhoud bij installatie!
              </h3>
              <p className="mb-4">
                Bij installatie van een nieuwe airco in Zuid-Limburg ontvangt u het eerste jaar onderhoud volledig gratis. 
                Geen verborgen kosten, gewoon de beste service!
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Vraag direct offerte aan
              </Link>
            </div>

            {/* Waarom Zuid-Limburg */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Waarom is een airco in Zuid-Limburg een slimme investering?
            </h2>
            
            <p>
              Zuid-Limburg kent een uniek klimaat binnen Nederland. Door de zuidelijke ligging en het heuvelachtige 
              landschap kunnen temperaturen hier in de zomer oplopen tot ver boven de 30°C. Vooral in steden als 
              <Link to="/werkgebied/sittard" className="text-blue-600 hover:text-blue-700 mx-1">Sittard</Link> en 
              <Link to="/werkgebied/geleen" className="text-blue-600 hover:text-blue-700 mx-1">Geleen</Link> 
              kan de hitte tussen de bebouwing blijven hangen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
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
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
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

            {/* Service Gebieden */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Ons werkgebied in Zuid-Limburg
            </h2>
            
            <p>
              StayCool Airco bedient <strong>alle gemeenten in Zuid-Limburg</strong>. 
              Van de Duitse grens bij <Link to="/werkgebied/kerkrade" className="text-blue-600">Kerkrade</Link> tot 
              aan de Belgische grens bij <Link to="/werkgebied/eijsden-margraten" className="text-blue-600 mx-1">Eijsden-Margraten</Link>. 
              Enkele van onze populairste installatie locaties:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
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

            <div className="bg-gray-50 p-6 rounded-lg my-8">
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

            <div className="bg-gray-50 p-6 rounded-lg my-8">
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

            {/* Voordelen lokale installateur */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              De voordelen van een lokale airco installateur
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
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
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Kennis van lokale regelgeving</h3>
                  <p className="text-gray-700">
                    Elke gemeente in Zuid-Limburg heeft eigen regels voor airco installatie. Wij kennen de 
                    vergunningseisen van Maastricht tot Kerkrade en zorgen dat uw installatie aan alle voorschriften voldoet.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Persoonlijk contact</h3>
                  <p className="text-gray-700">
                    Als lokaal bedrijf hechten we waarde aan persoonlijk contact. U krijgt geen callcenter maar 
                    direct contact met onze monteurs die de regio kennen.
                  </p>
                </div>
              </div>
            </div>

            {/* Prijzen tabel */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Airco installatie prijzen in Zuid-Limburg
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Type Installatie</th>
                    <th className="px-6 py-4 text-left font-semibold">Capaciteit</th>
                    <th className="px-6 py-4 text-left font-semibold">Prijs vanaf*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Single-split airco</td>
                    <td className="px-6 py-4">2.5 - 3.5 kW</td>
                    <td className="px-6 py-4 font-semibold">€ 1.399,-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Single-split airco</td>
                    <td className="px-6 py-4">5.0 - 7.0 kW</td>
                    <td className="px-6 py-4 font-semibold">€ 1.899,-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Multi-split airco (2 units)</td>
                    <td className="px-6 py-4">2x 2.5 kW</td>
                    <td className="px-6 py-4 font-semibold">€ 2.899,-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Multi-split airco (3 units)</td>
                    <td className="px-6 py-4">3x 2.5 kW</td>
                    <td className="px-6 py-4 font-semibold">€ 3.899,-</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 mt-2">
                *Prijzen zijn inclusief installatie, BTW en het eerste jaar gratis onderhoud. 
                Exacte prijs afhankelijk van situatie ter plaatse.
              </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Veelgestelde vragen over airco installatie in Zuid-Limburg
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Hoe lang duurt een airco installatie?
                </h3>
                <p className="text-gray-700">
                  Een standaard single-split installatie duurt gemiddeld 4-6 uur. We plannen installaties 
                  door heel Zuid-Limburg efficiënt in, zodat we bijvoorbeeld 's ochtends in 
                  <Link to="/werkgebied/maastricht" className="text-blue-600 mx-1">Maastricht</Link> 
                  kunnen starten en 's middags in 
                  <Link to="/werkgebied/heerlen" className="text-blue-600 mx-1">Heerlen</Link> 
                  een volgende klant kunnen helpen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Hebben jullie ervaring met monumentale panden?
                </h3>
                <p className="text-gray-700">
                  Jazeker! Zuid-Limburg kent veel historische panden, vooral in steden als Maastricht en Valkenburg. 
                  We hebben ruime ervaring met discrete installaties die het karakter van uw monumentale woning behouden.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Installeren jullie ook in appartementencomplexen?
                </h3>
                <p className="text-gray-700">
                  Ja, we installeren airconditioners in alle type woningen. Voor appartementen in bijvoorbeeld 
                  <Link to="/werkgebied/sittard" className="text-blue-600 mx-1">Sittard</Link> of 
                  <Link to="/werkgebied/kerkrade" className="text-blue-600 mx-1">Kerkrade</Link> 
                  zorgen we voor de juiste vergunningen en afstemming met de VvE.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg shadow-lg text-center">
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
                  <Phone className="h-5 w-5 mr-2" />
                  Bel direct: 046 202 1430
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Vraag offerte aan
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde artikelen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/airco-installateur-limburg-kiezen" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Hoe kies je de beste airco installateur?</h3>
                    <p className="text-gray-600 text-sm">Tips voor het selecteren van een betrouwbare installateur in Limburg</p>
                  </div>
                </Link>
                
                <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Het belang van airco onderhoud</h3>
                    <p className="text-gray-600 text-sm">Waarom regelmatig onderhoud essentieel is voor uw airconditioner</p>
                  </div>
                </Link>
                
                <Link to="/kennisbank/verwarmen-met-airco" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Verwarmen met een airco</h3>
                    <p className="text-gray-600 text-sm">Ontdek hoe efficiënt verwarmen met een airco werkt</p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </>
  );
}