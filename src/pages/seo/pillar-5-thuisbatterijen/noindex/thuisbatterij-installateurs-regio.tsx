import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, MapPin, ArrowRight, Phone, CheckCircle, Users, Award, Shield, Clock, Star, TrendingUp, Wrench } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijInstallateursRegio = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Installateurs Regio' }
  ];

  const waarOpLetten = [
    {
      icon: Award,
      titel: 'Certificering',
      beschrijving: 'Erkend NEN 1010 installateur met aantoonbare certificaten en kwaliteitsmerken'
    },
    {
      icon: Users,
      titel: 'Ervaring',
      beschrijving: 'Minimaal 5 jaar ervaring met thuisbatterij installaties en zonnepanelen'
    },
    {
      icon: Shield,
      titel: 'Garantie',
      beschrijving: 'Minimaal 10 jaar productgarantie en 5 jaar installatiegarantie'
    },
    {
      icon: Star,
      titel: 'Reviews',
      beschrijving: 'Positieve beoordelingen van eerdere klanten in Limburg'
    }
  ];

  const installatieChecklist = [
    'Voorinspectie van meterkast en elektrische installatie',
    'Advies over optimale plaatsing van de thuisbatterij',
    'Professionele montage volgens NEN 1010 norm',
    'Aansluiting op meterkast en zonnepanelen',
    'Configuratie en instellingen optimaliseren',
    'Uitleg over bediening en monitoring app',
    'Melding bij netbeheerder Enexis regelen',
    'Opleverdocumentatie en garantiebewijzen'
  ];

  const vergelijkingsPunten = [
    {
      aspect: 'Prijs',
      tips: [
        'Vraag minimaal 3 offertes aan',
        'Let op wat er wel/niet inbegrepen is',
        'Vergelijk totaalprijs, niet alleen materiaalprijzen',
        'Check of BTW-teruggave mogelijk is'
      ]
    },
    {
      aspect: 'Kwaliteit',
      tips: [
        'Welke merken thuisbatterijen biedt de installateur?',
        'Zijn het A-merk producten met goede garantie?',
        'Werkt de installateur met eigen monteurs?',
        'Wat is de aftersales service?'
      ]
    },
    {
      aspect: 'Service',
      tips: [
        'Hoe snel kunnen ze starten?',
        'Bieden ze nazorg en onderhoud?',
        'Is er 24/7 storingsdienst beschikbaar?',
        'Regelen ze contact met netbeheerder?'
      ]
    }
  ];

  const merkOverzicht = [
    {
      merk: 'AlphaESS',
      capaciteit: '5-30 kWh',
      garantie: '10 jaar',
      geschikt: 'Particulier & zakelijk',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-alphaess-vs-concurrenten'
    },
    {
      merk: 'Huawei Luna',
      capaciteit: '5-15 kWh',
      garantie: '10 jaar',
      geschikt: 'Particulier',
      link: '/seo/pillar-5-thuisbatterijen/alphaess-vs-huawei-luna'
    },
    {
      merk: 'Tesla Powerwall',
      capaciteit: '13.5 kWh',
      garantie: '10 jaar',
      geschikt: 'Particulier',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-vs-tesla-powerwall'
    },
    {
      merk: 'Smile Energy',
      capaciteit: '5-20 kWh',
      garantie: '10 jaar',
      geschikt: 'Particulier',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5'
    }
  ];

  const limburgSteden = [
    { naam: 'Maastricht', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-maastricht' },
    { naam: 'Heerlen', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-heerlen' },
    { naam: 'Venlo', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-venlo' },
    { naam: 'Roermond', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-roermond' },
    { naam: 'Sittard-Geleen', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-sittard-geleen' },
    { naam: 'Weert', link: '#' },
    { naam: 'Kerkrade', link: '#' },
    { naam: 'Brunssum', link: '#' },
    { naam: 'Landgraaf', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Installateurs Limburg - Erkende Bedrijven 2026 | StayCool"
        description="Vind de beste thuisbatterij installateur in Limburg. Vergelijk gecertificeerde bedrijven, lees reviews en vraag offertes aan van erkende NEN 1010 installateurs."
        canonicalUrl="https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-installateurs-regio"
        noIndex={true}
        locationInfo={{ city: 'Limburg', region: 'Limburg' }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-8 h-8" />
            <MapPin className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thuisbatterij Installateurs in Limburg
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Vind betrouwbare en gecertificeerde installateurs voor jouw thuisbatterij in Limburg.
            Vergelijk offertes en kies de beste installateur voor jouw situatie.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0462021430"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all"
            >
              Gratis offerte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Waar op letten */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Waar let je op bij het kiezen van een installateur?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Een goede installateur maakt het verschil tussen een zorgeloze en problematische installatie
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waarOpLetten.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.titel}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.beschrijving}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificeringen */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Belangrijke certificeringen en keurmerken
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    NEN 1010 Certificering
                  </h3>
                  <p className="text-gray-700 mb-3">
                    De installateur moet beschikken over een erkende NEN 1010 certificering. Dit is
                    de Nederlandse norm voor elektrische installaties en verplicht voor alle
                    thuisbatterij installaties.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Let op:</strong> Vraag altijd om bewijs van certificering voordat je
                    een opdracht verstrekt.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Aansprakelijkheidsverzekering
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Een professionele installateur heeft een goede aansprakelijkheidsverzekering.
                    Dit beschermt jou tegen eventuele schade tijdens of na de installatie.
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Vraag naar:</strong> Verzekeringsbewijs en de hoogte van de dekking
                    (minimaal €1.000.000).
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fabrieksopleidingen
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Goede installateurs volgen regelmatig fabrieksopleidingen voor de merken die
                    ze installeren (AlphaESS, Huawei, Tesla, etc.).
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Vraag:</strong> Welke opleidingen heeft de monteur gevolgd? Heeft hij
                    certificaten van de fabrikant?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installatieproces */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wat doet een goede installateur?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Een professionele thuisbatterij installatie bestaat uit deze stappen:
          </p>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {installatieChecklist.map((item, index) => (
              <div
                key={index}
                className={`p-4 flex items-start gap-3 ${
                  index !== installatieChecklist.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tijdsduur installatie</h3>
                <p className="text-gray-700">
                  Een gemiddelde thuisbatterij installatie duurt 4-8 uur, afhankelijk van de situatie.
                  Bij complexere meterkastuitbreidingen kan dit langer duren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offertes vergelijken */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Offertes slim vergelijken
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {vergelijkingsPunten.map((punt, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {punt.aspect}
                </h3>
                <ul className="space-y-3">
                  {punt.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Minimaal 3 offertes aanvragen
            </h3>
            <p className="text-gray-700 mb-6">
              Het loont om meerdere offertes te vergelijken. Prijsverschillen kunnen oplopen tot
              €2.000 voor hetzelfde systeem. Let niet alleen op de prijs, maar ook op:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Totaalprijs</strong>
                  <p className="text-sm text-gray-600">Inclusief alle kosten, geen verrassingen achteraf</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Garantievoorwaarden</strong>
                  <p className="text-sm text-gray-600">Product- én installatiegarantie expliciet vermeld</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Service</strong>
                  <p className="text-sm text-gray-600">Nazorg, onderhoud en storingsdienst</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Wrench className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900">Inbegrepen werk</strong>
                  <p className="text-sm text-gray-600">Wat wordt er wel/niet geïnstalleerd?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merken overzicht */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Populaire thuisbatterij merken in Limburg
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Deze merken worden het meest geïnstalleerd door installateurs in de regio
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {merkOverzicht.map((merk, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {merk.merk}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Capaciteit:</span>
                    <span className="font-medium text-gray-900">{merk.capaciteit}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Garantie:</span>
                    <span className="font-medium text-gray-900">{merk.garantie}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Geschikt voor:</span>
                    <span className="font-medium text-gray-900">{merk.geschikt}</span>
                  </div>
                </div>
                <Link
                  to={merk.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  Meer over {merk.merk} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steden */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Installateurs per stad in Limburg
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Vind lokale installateurs bij jou in de buurt
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
            {limburgSteden.map((stad, index) => (
              <Link
                key={index}
                to={stad.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">{stad.naam}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde vragen over installateurs
          </h2>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Hoeveel kost de installatie van een thuisbatterij?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                De installatiekosten zijn meestal €500-€1.500, afhankelijk van de complexiteit.
                Bij de meeste offertes zijn de installatiekosten inbegrepen in de totaalprijs.
                Vraag altijd duidelijk of installatie inclusief is.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Hoe lang duurt een thuisbatterij installatie?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Een standaard installatie duurt 4-8 uur. Bij complexere situaties (meterkast uitbreiding,
                moeilijke plaatsing) kan dit oplopen tot een volledige dag. De installateur zou dit
                vooraf moeten aangeven tijdens de offerte.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Moet ik zelf iets regelen bij de netbeheerder?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Een goede installateur regelt de melding bij netbeheerder Enexis voor je. Dit hoort
                bij de service. Vraag wel expliciet na of dit inbegrepen is in de offerte.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Wat als er iets mis gaat na installatie?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Daarom is installatiegarantie belangrijk. Eis minimaal 2 jaar installatiegarantie
                bovenop de fabrieksgarantie. Bij storingen moet de installateur binnen redelijke
                termijn reageren en het probleem oplossen.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Op zoek naar een betrouwbare installateur?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            StayCool Airco is een erkend NEN 1010 installateur met jarenlange ervaring
            in thuisbatterij installaties door heel Limburg.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all"
            >
              Vraag gratis offerte aan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijInstallateursRegio;
