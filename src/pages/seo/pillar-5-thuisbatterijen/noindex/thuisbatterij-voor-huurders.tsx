import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Home, ArrowRight, Phone, CheckCircle, Euro, Shield, Key, AlertCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijVoorHuurders = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Voor huurders' }
  ];

  const mogelijkheden = [
    {
      icon: Home,
      title: 'Mobiele thuisbatterijen',
      description: 'Deze batterijen zijn niet vast gemonteerd en kunnen bij verhuizing gewoon mee naar je nieuwe woning. Ideaal voor huurders!'
    },
    {
      icon: Key,
      title: 'Toestemming verhuurder',
      description: 'Voor een vaste installatie heb je toestemming nodig. Wij helpen je met een brief aan je verhuurder met alle voordelen op een rijtje.'
    },
    {
      icon: Euro,
      title: 'Lagere maandlasten',
      description: 'Met €40-70 lagere energiekosten per maand verdien je de batterij snel terug. Ook zonder zonnepanelen interessant!'
    },
    {
      icon: Shield,
      title: 'Waardeverhoging woning',
      description: 'Een thuisbatterij verhoogt de waarde van de woning. Dit kan een extra argument zijn richting je verhuurder.'
    }
  ];

  const typesVoorHuurders = [
    {
      type: 'Plug & Play Thuisbatterij',
      geschikt: 'Perfecte oplossing voor huurders',
      voordelen: [
        'Geen installatie nodig - gewoon in stopcontact',
        'Bij verhuizing meenemen naar nieuwe woning',
        'Geen toestemming verhuurder nodig',
        'Vanaf €2.500 voor 5 kWh',
        'Ideaal voor kleine huishoudens'
      ],
      nadelen: [
        'Kleinere capaciteit (meestal 3-7 kWh)',
        'Minder efficiënt dan vaste installatie',
        'Neemt ruimte in beslag'
      ]
    },
    {
      type: 'Vaste Installatie (met verhuurdertoestemming)',
      geschikt: 'Voor langdurige huur',
      voordelen: [
        'Grotere capaciteit mogelijk (10-15 kWh)',
        'Professionele installatie en garantie',
        'Hoogste efficiëntie en rendement',
        'Verhoogt waarde van de woning',
        'Subsidie tot €4.500 mogelijk'
      ],
      nadelen: [
        'Toestemming verhuurder vereist',
        'Bij verhuizing achterlaten of demontage',
        'Hogere investering (vanaf €7.000)'
      ]
    }
  ];

  const verhuurderOvertuigen = [
    {
      argument: 'Waardeverhoging',
      uitleg: 'Een thuisbatterij verhoogt de energielabel score en daarmee de WOZ-waarde van de woning. Dit is direct voordelig voor de verhuurder.'
    },
    {
      argument: 'Duurzaamheidsdoelstellingen',
      uitleg: 'Veel woningcorporaties hebben duurzaamheidsdoelen. Een thuisbatterij helpt hen om deze te halen zonder zelf te investeren.'
    },
    {
      argument: 'Aantrekkelijker voor toekomstige huurders',
      uitleg: 'Een woning met thuisbatterij en lage energiekosten is veel aantrekkelijker op de huurmarkt. Kortere leegstand voor de verhuurder.'
    },
    {
      argument: 'Geen kosten voor verhuurder',
      uitleg: 'De investering wordt door jou gedaan, het onderhoud ook. De verhuurder heeft alleen voordelen en geen kosten.'
    },
    {
      argument: 'Veilige, gecertificeerde installatie',
      uitleg: 'Wij zijn een erkend installatiebedrijf. De installatie voldoet aan alle veiligheidseisen en wordt gekeurd.'
    }
  ];

  const praktischeTips = [
    {
      title: 'Begin met een gesprek',
      beschrijving: 'Neem contact op met je verhuurder of woningcorporatie. Veel verhuurders staan positief tegenover duurzame verbeteringen.',
      actie: 'Wij kunnen een professionele brief opstellen met alle argumenten.'
    },
    {
      title: 'Overweeg een mobiele oplossing',
      beschrijving: 'Als je verhuurder niet akkoord gaat, is een plug & play batterij een goed alternatief. Deze kun je bij verhuizing meenemen.',
      actie: 'Bekijk onze mobiele thuisbatterijen vanaf €2.500.'
    },
    {
      title: 'Subsidie is ook voor huurders',
      beschrijving: 'De ISDE-subsidie van maximaal €4.500 is ook beschikbaar voor huurders. Je hoeft geen eigenaar te zijn.',
      actie: 'Wij helpen je met de subsidieaanvraag.'
    },
    {
      title: 'Denk aan terugkoopregeling',
      beschrijving: 'Bij vaste installatie kun je afspreken dat je de batterij bij verhuizing verkoopt aan de verhuurder of nieuwe huurder.',
      actie: 'Dit nemen we op in de overeenkomst met je verhuurder.'
    }
  ];

  const rekenvoorbeeld = {
    situatie: 'Huurappartement, 80m², 2 personen, zonder zonnepanelen',
    verbruik: '2.400 kWh per jaar',
    kosten: {
      zonder: {
        label: 'Zonder thuisbatterij',
        items: [
          { beschrijving: 'Jaarverbruik op duur tarief', bedrag: 960 },
          { beschrijving: 'Vastrecht', bedrag: 240 },
          { beschrijving: 'Totaal per jaar', bedrag: 1200, totaal: true }
        ]
      },
      met: {
        label: 'Met plug & play thuisbatterij (5 kWh)',
        items: [
          { beschrijving: 'Goedkope daluren-stroom', bedrag: 480 },
          { beschrijving: 'Restverbruik piektarief', bedrag: 240 },
          { beschrijving: 'Vastrecht', bedrag: 240 },
          { beschrijving: 'Totaal per jaar', bedrag: 960, totaal: true }
        ]
      }
    },
    besparing: 240,
    investering: 3200,
    subsidie: 1413,
    eigenBijdrage: 1787,
    terugverdientijd: 7.4
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij voor Huurders | Ook Zonder Eigen Woning Mogelijk | StayCool"
        description="Ook als huurder kun je besparen met een thuisbatterij. Mobiele oplossingen of met verhuurdertoestemming. Subsidie tot €4.500. Gratis advies!"
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-voor-huurders"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Home className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Speciaal voor huurders</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Thuisbatterij voor Huurders
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Ook zonder eigen woning kun je besparen op energiekosten met een thuisbatterij. Mobiel óf met verhuurdertoestemming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                Gratis Advies voor Huurders
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-all"
              >
                <Phone className="w-5 h-5" />
                046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mogelijkheden */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mogelijkheden voor Huurders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ja, ook als huurder kun je profiteren van een thuisbatterij! We leggen uit hoe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mogelijkheden.map((mogelijkheid, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <mogelijkheid.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{mogelijkheid.title}</h3>
                <p className="text-gray-600 leading-relaxed">{mogelijkheid.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types voor Huurders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welke Thuisbatterij Past bij Jou?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Twee hoofdopties: mobiel of vast. Beide hebben voor- en nadelen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {typesVoorHuurders.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`p-6 ${index === 0 ? 'bg-gradient-to-br from-green-600 to-emerald-600' : 'bg-gradient-to-br from-blue-600 to-indigo-600'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{type.type}</h3>
                  <p className="text-green-100">{type.geschikt}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Voordelen
                    </h4>
                    <ul className="space-y-2">
                      {type.voordelen.map((voordeel, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{voordeel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      Aandachtspunten
                    </h4>
                    <ul className="space-y-2">
                      {type.nadelen.map((nadeel, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{nadeel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verhuurder Overtuigen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hoe Overtuig je je Verhuurder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veel verhuurders staan positief tegenover duurzame verbeteringen. Dit zijn de sterkste argumenten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verhuurderOvertuigen.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
                <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.argument}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.uitleg}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-3 rounded-xl flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wij Helpen je met een Professionele Brief
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Als erkend installatiebedrijf kunnen wij een brief opstellen voor je verhuurder met alle technische
                  details, argumenten en garanties. Dit verhoogt je kans op toestemming aanzienlijk.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
                >
                  Vraag de brief aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Praktische Tips voor Huurders
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {praktischeTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 mb-3">{tip.beschrijving}</p>
                    <p className="text-green-600 font-semibold text-sm">{tip.actie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Rekenvoorbeeld: Wat Bespaar Je als Huurder?
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {rekenvoorbeeld.situatie}
            </h3>
            <p className="text-gray-600 mb-6">Jaarverbruik: {rekenvoorbeeld.verbruik}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Zonder batterij */}
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4 pb-3 border-b-2 border-red-200">
                  {rekenvoorbeeld.kosten.zonder.label}
                </h4>
                <div className="space-y-3">
                  {rekenvoorbeeld.kosten.zonder.items.map((item, idx) => (
                    <div key={idx} className={`flex justify-between items-center ${item.totaal ? 'pt-3 border-t-2 border-gray-200 font-bold text-lg' : ''}`}>
                      <span className={item.totaal ? 'text-gray-900' : 'text-gray-600'}>{item.beschrijving}</span>
                      <span className={item.totaal ? 'text-red-600' : 'text-gray-900'}>€{item.bedrag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Met batterij */}
              <div className="bg-white p-6 rounded-xl border-2 border-green-500">
                <h4 className="font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-200">
                  {rekenvoorbeeld.kosten.met.label}
                </h4>
                <div className="space-y-3">
                  {rekenvoorbeeld.kosten.met.items.map((item, idx) => (
                    <div key={idx} className={`flex justify-between items-center ${item.totaal ? 'pt-3 border-t-2 border-gray-200 font-bold text-lg' : ''}`}>
                      <span className={item.totaal ? 'text-gray-900' : 'text-gray-600'}>{item.beschrijving}</span>
                      <span className={item.totaal ? 'text-green-600' : 'text-gray-900'}>€{item.bedrag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-xl mb-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-gray-900">Jaarlijkse besparing:</span>
                <span className="text-green-600 text-2xl">€{rekenvoorbeeld.besparing}</span>
              </div>
            </div>

            <div className="space-y-2 text-lg">
              <div className="flex justify-between items-center pb-2 border-b border-green-200">
                <span className="text-gray-700">Investering (plug & play 5 kWh):</span>
                <span className="font-semibold text-gray-900">€{rekenvoorbeeld.investering}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-green-200">
                <span className="text-gray-700">ISDE-subsidie 2025:</span>
                <span className="font-semibold text-green-600">-€{rekenvoorbeeld.subsidie}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-900 font-bold">Eigen bijdrage:</span>
                <span className="font-bold text-gray-900 text-xl">€{rekenvoorbeeld.eigenBijdrage}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-green-300">
              <p className="text-green-600 text-xl font-bold text-center">
                Terugverdientijd: circa {rekenvoorbeeld.terugverdientijd} jaar
              </p>
              <p className="text-gray-600 text-center mt-2">
                Bij verhuizing neem je de batterij gewoon mee naar je nieuwe woning!
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
              <Battery className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Alle Thuisbatterijen</h3>
              <p className="text-gray-600 mb-4">Mobiel en vast - alle opties</p>
              <span className="text-green-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Bekijk assortiment
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <Euro className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Prijzen & Kosten</h3>
              <p className="text-gray-600 mb-4">Wat kost een thuisbatterij?</p>
              <span className="text-green-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
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
              <p className="text-gray-600 mb-4">Ook voor huurders beschikbaar!</p>
              <span className="text-green-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lees meer
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Gratis Advies voor Huurders
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Bel ons of vraag online advies aan. We helpen je met de beste oplossing voor jouw huursituatie,
            inclusief brief voor je verhuurder indien nodig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              Vraag Advies Aan
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijVoorHuurders;
