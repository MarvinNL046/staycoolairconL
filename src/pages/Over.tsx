import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Award, Users, MapPin, Wrench, Leaf, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

export default function Over() {
  return (
    <>
      <Helmet>
        <title>Over StayCool Airco | Specialist in Airconditioning Limburg</title>
        <meta
          name="description"
          content="Maak kennis met StayCool Airco — uw specialist in airco-installatie, onderhoud en thuisbatterijen in heel Limburg. Erkend, ervaren en altijd dichtbij."
        />
        <link rel="canonical" href="https://staycoolairco.nl/over" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Over StayCool Airco
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uw vertrouwde specialist in airconditioning, klimaatbeheersing en
              thuisbatterijen — in heel Limburg, dichtbij u in de buurt.
            </p>
          </m.div>

          <m.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ons verhaal</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                StayCool Airco is dé airco-specialist van Limburg. Vanuit onze
                regionale vestiging bedienen we particulieren en bedrijven in
                Maastricht, Heerlen, Sittard, Roermond, Venlo, Weert en alle
                gemeenten daartussen. Of u nu één split-unit voor de slaapkamer
                wilt, een complete multi-split voor uw woning, of een professioneel
                klimaatsysteem voor uw bedrijfspand — wij regelen het van
                advies tot afgifte.
              </p>
              <p>
                Naast airco's zijn we ook gespecialiseerd in thuisbatterijen.
                Met de afbouw van saldering wordt zelf opgewekte zonne-energie
                opslaan steeds belangrijker — wij helpen u de juiste keuze maken
                en installeren ze vakkundig in uw meterkast.
              </p>
            </div>
          </m.section>

          <m.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Award,
                title: 'Erkend & gecertificeerd',
                body: 'F-gassen gecertificeerde monteurs, conform alle wettelijke eisen voor het werken met koudemiddelen.',
              },
              {
                icon: Wrench,
                title: 'Premium A-merken',
                body: 'Wij installeren alleen kwaliteitsmerken zoals Daikin, Mitsubishi Heavy, LG, Samsung, Toshiba en Tosot.',
              },
              {
                icon: MapPin,
                title: 'Lokaal in Limburg',
                body: 'Korte aanrijtijden, snelle service en vertrouwde gezichten — geen anonieme landelijke partij.',
              },
              {
                icon: Users,
                title: 'Persoonlijk advies',
                body: 'Wij komen vrijblijvend langs voor opname en geven onafhankelijk advies — geen verkooppraat.',
              },
              {
                icon: ShieldCheck,
                title: 'Garantie & service',
                body: 'Volledige fabrieksgarantie plus eigen installatiegarantie. Onderhoudscontracten op maat.',
              },
              {
                icon: Leaf,
                title: 'Duurzaam',
                body: 'Verwarmen met airco bespaart tot 60% op uw stookkosten. Plus thuisbatterij voor 100% eigen energie.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <item.icon className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </m.section>

          <m.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Werkgebied</h2>
            <p className="text-gray-700 mb-4">
              We werken in heel Limburg. Bekijk{' '}
              <Link to="/werkgebied" className="text-blue-600 hover:text-blue-700 underline">
                ons volledige werkgebied
              </Link>{' '}
              of klik direct door naar uw stad:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ['Maastricht', '/airco-installatie/maastricht'],
                ['Heerlen', '/airco-installatie/heerlen'],
                ['Sittard', '/airco-installatie/sittard'],
                ['Roermond', '/airco-installatie/roermond'],
                ['Venlo', '/airco-installatie/venlo'],
                ['Weert', '/airco-installatie/weert'],
                ['Kerkrade', '/airco-installatie/kerkrade'],
                ['Brunssum', '/airco-installatie/brunssum'],
                ['Landgraaf', '/airco-installatie/landgraaf'],
                ['Valkenburg', '/airco-installatie/valkenburg'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="inline-block bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </m.section>

          <m.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Klaar om te koelen?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Vraag een vrijblijvende offerte aan of bel ons direct voor advies op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Vrijblijvende offerte
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Bel direct
              </a>
            </div>
          </m.section>
        </div>
      </div>
    </>
  );
}
