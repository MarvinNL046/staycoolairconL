import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, MapPin, ArrowRight, Phone, CheckCircle, Euro, Zap, Home, Building, TrendingDown, Shield, Clock } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijGidsLimburg = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Complete Gids Limburg' }
  ];

  const limburgSteden = [
    { naam: 'Maastricht', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-maastricht', inwoners: '122.000' },
    { naam: 'Heerlen', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-heerlen', inwoners: '87.000' },
    { naam: 'Venlo', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-venlo', inwoners: '102.000' },
    { naam: 'Roermond', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-roermond', inwoners: '58.000' },
    { naam: 'Sittard-Geleen', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-sittard-geleen', inwoners: '92.000' },
    { naam: 'Weert', link: '#', inwoners: '50.000' },
    { naam: 'Kerkrade', link: '#', inwoners: '45.000' }
  ];

  const voordelen = [
    {
      icon: TrendingDown,
      titel: 'Lagere energierekening',
      beschrijving: 'Bespaar tot €800 per jaar door slim gebruik van opgeslagen zonne-energie'
    },
    {
      icon: Shield,
      titel: 'Onafhankelijkheid',
      beschrijving: 'Minder afhankelijk van energieleveranciers en netbeheerders'
    },
    {
      icon: Zap,
      titel: 'Optimaal gebruik zonnepanelen',
      beschrijving: 'Gebruik je eigen opgewekte energie ook \'s avonds en \'s nachts'
    },
    {
      icon: CheckCircle,
      titel: 'Geen vergunning nodig',
      beschrijving: 'In Limburg is geen vergunning vereist voor thuisbatterij installatie'
    }
  ];

  const stappen = [
    {
      nummer: '1',
      titel: 'Energieverbruik analyseren',
      beschrijving: 'Bekijk je jaarverbruik en zonnepanelen opbrengst'
    },
    {
      nummer: '2',
      titel: 'Offerte aanvragen',
      beschrijving: 'Vraag meerdere offertes aan bij gecertificeerde installateurs in Limburg'
    },
    {
      nummer: '3',
      titel: 'Systeem laten installeren',
      beschrijving: 'Professionele installatie binnen 1 dag door erkende vakman'
    },
    {
      nummer: '4',
      titel: 'Genieten van besparing',
      beschrijving: 'Direct lagere energiekosten en optimaal gebruik van zonne-energie'
    }
  ];

  const capaciteitGids = [
    { type: 'Klein huishouden (1-2 personen)', verbruik: '2.500 kWh/jaar', batterij: '5 kWh', prijs: '€4.500 - €6.000' },
    { type: 'Gemiddeld huishouden (3-4 personen)', verbruik: '3.500 kWh/jaar', batterij: '10 kWh', prijs: '€7.500 - €9.500' },
    { type: 'Groot huishouden (5+ personen)', verbruik: '5.000+ kWh/jaar', batterij: '15 kWh', prijs: '€10.000 - €13.000' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Complete Thuisbatterij Gids Limburg 2026 | StayCool Airco"
        description="Ontdek alles over thuisbatterijen in Limburg. Van kosten tot subsidies, installatie tot besparing. Complete gids voor Limburgse huishoudens."
        canonicalUrl="https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-gids-limburg"
        noIndex={true}
        locationInfo={{ city: 'Limburg', region: 'Limburg' }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Battery className="w-8 h-8" />
            <MapPin className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Thuisbatterij Gids voor Limburg
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Alles wat je moet weten over thuisbatterijen in Limburg: van kosten en subsidies
            tot installatie en terugverdientijd. Speciaal voor Limburgse huishoudens.
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
              Gratis advies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom Thuisbatterij in Limburg */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Waarom een thuisbatterij in Limburg?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Limburg heeft veel zonnige dagen en hoge energiekosten. Een thuisbatterij helpt je maximaal
            te profiteren van je zonnepanelen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <voordeel.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {voordeel.titel}
                </h3>
                <p className="text-gray-600 text-sm">
                  {voordeel.beschrijving}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten en Capaciteit */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kosten en capaciteit kiezen
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            De prijs van een thuisbatterij hangt af van de capaciteit. Kies op basis van je huishouden:
          </p>

          <div className="space-y-4">
            {capaciteitGids.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.type}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {item.verbruik}
                      </span>
                      <span className="flex items-center gap-1">
                        <Battery className="w-4 h-4" />
                        {item.batterij} batterij
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {item.prijs}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Let op:</strong> Prijzen zijn inclusief BTW en installatie. Vraag altijd meerdere
              offertes aan bij verschillende installateurs in Limburg voor de beste prijs.
            </p>
          </div>
        </div>
      </section>

      {/* Installatie Proces */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Thuisbatterij laten installeren in 4 stappen
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Van offerte tot besparing in een paar weken tijd
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {stappen.map((stap, index) => (
              <div key={index} className="relative">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {stap.nummer}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {stap.titel}
                    </h3>
                    <p className="text-gray-600">
                      {stap.beschrijving}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidies Limburg */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Euro className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subsidies en fiscale voordelen in Limburg
            </h2>
            <p className="text-lg text-gray-600">
              Profiteer van verschillende regelingen om je investering terug te verdienen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                BTW-teruggave 21%
              </h3>
              <p className="text-gray-700 mb-4">
                Vraag de betaalde BTW terug via de Belastingdienst. Bij een batterij van €8.000
                krijg je €1.400 terug.
              </p>
              <Link to="/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                Meer over BTW-teruggave <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                ISDE subsidie 2026
              </h3>
              <p className="text-gray-700 mb-4">
                Mogelijk subsidie voor thuisbatterijen via RVO. Controleer de actuele regelingen
                en budgetten.
              </p>
              <Link to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-limburg" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                Meer over subsidies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Salderingsregeling tot 2027
              </h3>
              <p className="text-gray-700 mb-4">
                Tot 2027 kun je nog salderen. Daarna wordt een thuisbatterij nog belangrijker
                voor je besparing.
              </p>
              <Link to="/seo/pillar-5-thuisbatterijen/thuisbatterij-saldering-2027" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                Saldering uitleg <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                Terugverdientijd
              </h3>
              <p className="text-gray-700 mb-4">
                Gemiddelde terugverdientijd in Limburg is 7-10 jaar, afhankelijk van je
                energieverbruik en tarieven.
              </p>
              <Link to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                Bereken jouw terugverdientijd <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regelgeving */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Regelgeving en vergunningen in Limburg
          </h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Geen vergunning nodig!
                </h3>
                <p className="text-gray-700">
                  In heel Limburg heb je <strong>geen omgevingsvergunning</strong> nodig voor het
                  plaatsen van een thuisbatterij. De installatie moet wel voldoen aan de NEN 1010
                  norm en uitgevoerd worden door een erkend installateur.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Installatievoorwaarden
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Installatie door erkend NEN 1010 installateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Melding bij netbeheerder Enexis (in Limburg)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Voldoen aan brandveiligheidseisen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CE-markering op de thuisbatterij</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Veiligheidsvoorschriften
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ventilatie in de opstelruimte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Afstand tot brandbare materialen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Toegankelijk voor onderhoud</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geschikte temperatuurrange (5-35°C)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steden in Limburg */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Thuisbatterij per stad in Limburg
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Bekijk specifieke informatie voor jouw gemeente
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limburgSteden.map((stad, index) => (
              <Link
                key={index}
                to={stad.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {stad.naam}
                </h3>
                <p className="text-sm text-gray-500">
                  {stad.inwoners} inwoners
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Veelgestelde Vragen */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde vragen over thuisbatterijen in Limburg
          </h2>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Wat kost een thuisbatterij in Limburg?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Een thuisbatterij kost tussen €4.500 en €13.000, afhankelijk van de capaciteit.
                Een 10 kWh systeem kost gemiddeld €7.500-€9.500 inclusief installatie. Vraag altijd
                meerdere offertes aan bij installateurs in Limburg.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Hoe lang gaat een thuisbatterij mee?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Moderne thuisbatterijen gaan 10-15 jaar mee. De meeste fabrikanten geven 10 jaar
                garantie op minimaal 70% capaciteit. Na die periode werkt de batterij nog steeds,
                maar met iets minder capaciteit.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Is een thuisbatterij de moeite waard in Limburg?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Ja, zeker als je al zonnepanelen hebt. Limburg heeft veel zonnige dagen en een
                thuisbatterij helpt je die energie optimaal te benutten. Met de huidige energieprijzen
                verdien je de investering in 7-10 jaar terug.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Welke subsidies zijn er voor thuisbatterijen?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Je kunt de 21% BTW terugvragen bij de Belastingdienst. Daarnaast is er mogelijk
                ISDE subsidie beschikbaar via RVO. Gemeentelijke regelingen in Limburg verschillen
                per gemeente - check altijd de actuele mogelijkheden bij jouw gemeente.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Heb ik een vergunning nodig in Limburg?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Nee, in geen enkele gemeente in Limburg heb je een omgevingsvergunning nodig voor
                een thuisbatterij. De installatie moet wel voldoen aan de NEN 1010 norm en je moet
                het melden bij netbeheerder Enexis.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Battery className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor een thuisbatterij in Limburg?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ontvang vrijblijvend advies van StayCool Airco. Wij helpen je met het kiezen
            van de juiste thuisbatterij voor jouw situatie.
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
              Gratis offerte aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijGidsLimburg;
