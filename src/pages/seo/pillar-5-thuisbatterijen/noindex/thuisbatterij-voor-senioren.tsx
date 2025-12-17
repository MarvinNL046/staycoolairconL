import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Users, ArrowRight, Phone, CheckCircle, Euro, Shield, Heart, Home, Zap } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijVoorSenioren = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Voor senioren 65+' }
  ];

  const voordelen = [
    {
      icon: Euro,
      title: 'Lagere energierekening',
      description: 'Met een AOW-inkomen zijn energiekosten een belangrijke post. Een thuisbatterij kan uw energierekening met 40-60% verlagen.'
    },
    {
      icon: Shield,
      title: 'Zekerheid bij stroomuitval',
      description: 'Vooral belangrijk voor medische apparatuur zoals zuurstofconcentrators of CPAP-apparaten. Altijd stroom wanneer u het nodig heeft.'
    },
    {
      icon: Home,
      title: 'Waardestijging woning',
      description: 'Een thuisbatterij verhoogt de waarde van uw woning, interessant voor erfenis of eventuele verkoop.'
    },
    {
      icon: Heart,
      title: 'Onafhankelijkheid',
      description: 'Minder afhankelijk van energiemaatschappijen en prijsstijgingen. Meer controle over uw eigen energievoorziening.'
    }
  ];

  const praktischeTips = [
    {
      title: 'Subsidie tot €4.500 in 2025',
      description: 'Ook senioren komen in aanmerking voor de ISDE-subsidie. Dit kan de investering aanzienlijk verlagen.',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-limburg'
    },
    {
      title: 'Combineer met zonnepanelen',
      description: 'Heeft u al zonnepanelen? Perfect! Een thuisbatterij maximaliseert uw rendement. Geen zonnepanelen? Ook dan kan een batterij voordelig zijn.',
      link: '/thuisbatterijen'
    },
    {
      title: 'Installatie zonder zorgen',
      description: 'Onze monteurs zorgen voor een nette, professionele installatie. U hoeft zich nergens zorgen over te maken.',
      link: '/contact'
    },
    {
      title: 'Makkelijk in gebruik',
      description: 'Moderne thuisbatterijen werken volledig automatisch. Via een simpele app op uw telefoon of tablet ziet u precies hoeveel energie u bespaart.'
    }
  ];

  const veelgesteldeVragen = [
    {
      vraag: 'Is een thuisbatterij ook zinvol zonder zonnepanelen?',
      antwoord: 'Ja! U kunt goedkope daluren-stroom opslaan en gebruiken tijdens dure piekuren. Dit kan €300-500 per jaar besparen.'
    },
    {
      vraag: 'Hoe lang gaat een thuisbatterij mee?',
      antwoord: 'Een goede thuisbatterij gaat 10-15 jaar mee. De investering verdient zichzelf doorgaans binnen 7-10 jaar terug.'
    },
    {
      vraag: 'Is het veilig in huis?',
      antwoord: 'Absoluut. Moderne lithium-ijzerfosfaat (LiFePO4) batterijen zijn zeer veilig en hebben uitgebreide bescherming tegen overbelasting en oververhitting.'
    },
    {
      vraag: 'Kan ik gebruik maken van de subsidie?',
      antwoord: 'Ja, de ISDE-subsidie van maximaal €4.500 is beschikbaar voor iedereen, ongeacht leeftijd. Wij helpen u graag met de aanvraag.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij voor Senioren 65+ | Bespaar op Energiekosten | StayCool"
        description="Thuisbatterij speciaal voor senioren. Lagere energierekening, zekerheid bij stroomuitval en onafhankelijkheid. Subsidie tot €4.500. Gratis advies!"
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-voor-senioren"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Speciaal voor 65-plussers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Thuisbatterij voor Senioren
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Bespaar op energiekosten, geniet van zekerheid en blijf onafhankelijk met een thuisbatterij
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                Gratis Adviesgesprek
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all"
              >
                <Phone className="w-5 h-5" />
                046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Speciaal voor Senioren */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom een Thuisbatterij Perfect is voor Senioren
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als senior heeft u specifieke wensen en behoeften. Een thuisbatterij biedt rust, zekerheid en financieel voordeel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <voordeel.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{voordeel.title}</h3>
                <p className="text-gray-600 leading-relaxed">{voordeel.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-3 rounded-xl flex-shrink-0">
                <Euro className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bespaar €500-800 per jaar op energiekosten
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Met een gemiddeld seniorenhuishouden (2 personen) kan een thuisbatterij uw jaarlijkse energiekosten
                  flink verlagen. Bij de huidige energieprijzen betekent dit een besparing van €500 tot €800 per jaar.
                  Over 10 jaar is dat €5.000 tot €8.000 aan besparingen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Praktische Informatie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles wat u moet weten over een thuisbatterij als senior
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {praktischeTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                {tip.link && (
                  <Link to={tip.link} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    Meer informatie
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speciale Situaties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Speciale Situaties voor Senioren
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Medische Apparatuur</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Gebruikt u medische apparatuur zoals een zuurstofconcentrator, CPAP-apparaat voor slaapapneu,
                    of andere elektrische medische hulpmiddelen? Een thuisbatterij met noodfunctie zorgt ervoor
                    dat deze apparaten ook bij een stroomstoring blijven werken.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Automatische omschakeling binnen milliseconden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Voldoende capaciteit voor meerdere dagen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>24/7 monitoring via app (ook voor familie)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Elektrisch Koken</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Veel senioren zijn overgestapt van gas naar elektrisch koken vanwege veiligheid. Een thuisbatterij
                    helpt de hogere stroomkosten te compenseren door goedkope stroom op te slaan.
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Tip:</strong> Kook tijdens daluren (vaak 's nachts en in het weekend) of gebruik opgeslagen
                    zonne-energie. Dit kan uw kookkosten met 50% verlagen!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mantelzorg en Familie</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Hebben uw kinderen of kleinkinderen mantelzorg? Met de app van de thuisbatterij kunnen zij
                    op afstand meekijken of alles goed functioneert. Bij problemen krijgen zij direct een melding.
                  </p>
                  <p className="text-gray-700 text-lg">
                    Dit geeft rust voor u én uw naasten. Zij weten dat u altijd stroom heeft, ook als zij er
                    even niet zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veelgestelde Vragen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen van Senioren
          </h2>

          <div className="space-y-6">
            {veelgesteldeVragen.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.vraag}</h3>
                <p className="text-gray-700 leading-relaxed">{item.antwoord}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Rekenvoorbeeld: Wat Bespaart U?
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Senior echtpaar, Sittard (met zonnepanelen)
            </h3>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                <span className="text-gray-700">Jaarverbruik:</span>
                <span className="font-semibold text-gray-900">2.800 kWh</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                <span className="text-gray-700">Opbrengst zonnepanelen:</span>
                <span className="font-semibold text-gray-900">3.200 kWh</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                <span className="text-gray-700">Zonder batterij terug aan net:</span>
                <span className="font-semibold text-red-600">1.800 kWh (€180)</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                <span className="text-gray-700">Met batterij zelf gebruikt:</span>
                <span className="font-semibold text-green-600">1.600 kWh (€640)</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-green-100 -mx-8 px-8 py-4 rounded-lg">
                <span className="text-gray-900 font-bold text-xl">Jaarlijkse besparing:</span>
                <span className="font-bold text-green-600 text-2xl">€460</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-blue-300">
              <p className="text-gray-700 text-lg mb-2">
                <strong>Investering:</strong> €7.500 (voor 10 kWh batterij)
              </p>
              <p className="text-gray-700 text-lg mb-2">
                <strong>Subsidie:</strong> -€2.825 (ISDE 2025)
              </p>
              <p className="text-gray-900 text-xl font-bold mb-4">
                Eigen bijdrage: €4.675
              </p>
              <p className="text-green-600 text-xl font-bold">
                Terugverdientijd: circa 10 jaar
              </p>
              <p className="text-gray-600 mt-4">
                Daarna 5+ jaar lang volledig gratis stroom en €460 besparing per jaar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links naar Andere Pagina's */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meer Informatie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/thuisbatterijen"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <Battery className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Alle Thuisbatterijen</h3>
              <p className="text-gray-600 mb-4">Bekijk ons complete assortiment</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Meer info
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <Euro className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Prijzen & Kosten</h3>
              <p className="text-gray-600 mb-4">Compleet overzicht van alle kosten</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Bekijk prijzen
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-limburg"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Subsidies 2025</h3>
              <p className="text-gray-600 mb-4">Tot €4.500 subsidie beschikbaar</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lees meer
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Persoonlijk Advies op Maat
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Onze adviseurs hebben uitgebreide ervaring met senioren en helpen u graag verder.
            Gratis en vrijblijvend adviesgesprek aan huis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              Plan een Afspraak
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
          </div>
          <p className="text-blue-200 mt-6">
            Ook 's avonds en in het weekend bereikbaar!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijVoorSenioren;
