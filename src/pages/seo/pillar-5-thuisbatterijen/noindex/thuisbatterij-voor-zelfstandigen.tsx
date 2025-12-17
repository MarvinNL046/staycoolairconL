import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Briefcase, ArrowRight, Phone, CheckCircle, Euro, Shield, TrendingUp, Clock, Zap } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijVoorZelfstandigen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Voor ZZP\'ers & zelfstandigen' }
  ];

  const voordelen = [
    {
      icon: Euro,
      title: 'Zakelijk aftrekbaar',
      description: 'De investering in een thuisbatterij is zakelijk aftrekbaar als je thuiswerkt. Tot wel 90% aftrekbaar via KIA (Kleinschaligheidsinvesteringsaftrek).'
    },
    {
      icon: TrendingUp,
      title: 'Lagere bedrijfskosten',
      description: 'Bespaar €600-1.200 per jaar op energiekosten. Gebruik goedkope daltarief-stroom of eigen zonne-energie tijdens kantooruren.'
    },
    {
      icon: Shield,
      title: 'Betrouwbaarheid',
      description: 'Geen stroomuitval tijdens belangrijk werk. Altijd power voor je computer, servers en apparatuur. Cruciaal voor professionals.'
    },
    {
      icon: Clock,
      title: 'Optimaliseer werktijden',
      description: 'Werk op de goedkoopste momenten zonder je zorgen te maken over piektarieven. Slimme energiebesparingen tijdens intensief computergebruik.'
    }
  ];

  const zakelijkeAftrek = [
    {
      titel: 'KIA - Kleinschaligheidsinvesteringsaftrek',
      percentage: '28%',
      beschrijving: 'Extra aftrek bovenop normale afschrijving',
      voorwaarde: 'Maximaal €358.045 aan investeringen per jaar',
      voorbeeld: 'Investering €10.000 → €2.800 extra aftrek'
    },
    {
      titel: 'Normale afschrijving',
      percentage: '20% per jaar',
      beschrijving: 'Lineaire afschrijving over 5 jaar',
      voorwaarde: 'Bij zakelijk gebruik thuiskantoor',
      voorbeeld: 'Investering €10.000 → €2.000 per jaar'
    },
    {
      titel: 'BTW-teruggave',
      percentage: '21%',
      beschrijving: 'BTW direct terugvragen bij aanschaf',
      voorwaarde: 'Als je BTW-plichtig bent',
      voorbeeld: 'Investering €10.000 → €2.100 BTW terug'
    }
  ];

  const useCase = [
    {
      profiel: 'IT-Consultant / Webdesigner',
      situatie: 'Thuiskantoor, veel computergebruik, videocalls',
      voordelen: [
        'Gebruik zonne-energie voor energieslurpende renders',
        'Geen stroomuitval tijdens belangrijke meetings',
        'Lagere kosten voor airco tijdens warme werkdagen',
        'Stroom voor meerdere monitoren en servers'
      ],
      besparing: '€800-1.200/jaar'
    },
    {
      profiel: 'Coach / Therapeut / Adviseur',
      situatie: 'Thuispraktijk, regelmatig klanten over de vloer',
      voordelen: [
        'Professionele uitstraling met duurzame energie',
        'Lagere praktijkkosten door energiebesparing',
        'Comfortabele werkruimte zonder hoge kosten',
        'Onafhankelijk van energieprijzen'
      ],
      besparing: '€500-800/jaar'
    },
    {
      profiel: 'E-commerce / Online Ondernemer',
      situatie: 'Thuiskantoor met voorraad, veel pakketverwerking',
      voordelen: [
        'Constante stroom voor bestellingssystemen',
        'Efficiënte verlichting en apparatuur in opslag',
        'Geen omzetverlies door stroomuitval',
        'Lagere operationele kosten'
      ],
      besparing: '€700-1.000/jaar'
    }
  ];

  const rekenvoorbeeld = {
    profiel: 'ZZP\'er met thuiskantoor (IT/Design)',
    investering: 10000,
    subsidie: 2825,
    btw: 2100,
    kia: 2800,
    eigenBijdrage: 2275,
    jaarBesparing: 950,
    terugverdientijd: 2.4
  };

  const praktischeTips = [
    {
      titel: 'Combineer met zonnepanelen',
      beschrijving: 'Heb je al zonnepanelen? Perfect! Een thuisbatterij maximaliseert je rendement. Werk overdag met je eigen opgewekte energie.',
      icoon: '☀️'
    },
    {
      titel: 'Plan grote taken strategisch',
      beschrijving: 'Renders, backups, updates - plan deze tijdens goedkope uren of wanneer je batterij vol is. Flinke besparing op energiekosten.',
      icoon: '⚡'
    },
    {
      titel: 'Zakelijke administratie op orde',
      beschrijving: 'Houd bij hoeveel procent zakelijk gebruik je maakt van je thuiskantoor. Dit percentage mag je aftrekken van de investering.',
      icoon: '📊'
    },
    {
      titel: 'Denk aan de toekomst',
      beschrijving: 'Verwacht je meer apparatuur of een groter thuiskantoor? Kies een uitbreidbare batterij. Dit voorkomt dat je later opnieuw moet investeren.',
      icoon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij voor ZZP'ers & Zelfstandigen | Zakelijk Aftrekbaar | StayCool"
        description="Thuisbatterij voor ZZP'ers en thuiswerkers. 28% KIA-aftrek + BTW terug. Bespaar €600-1.200/jaar. Geen stroomuitval. Gratis advies!"
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-voor-zelfstandigen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Briefcase className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Speciaal voor ZZP'ers & Zelfstandigen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Thuisbatterij voor Zelfstandigen
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Zakelijk aftrekbaar, lagere bedrijfskosten en altijd power voor je werk. De slimme investering voor elke ZZP'er.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                Zakelijk Advies op Maat
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center gap-2 bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-all"
              >
                <Phone className="w-5 h-5" />
                046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom voor ZZP'ers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom een Thuisbatterij Perfect is voor ZZP'ers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als zelfstandige kun je maximaal profiteren van fiscale voordelen én lagere energiekosten
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <voordeel.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{voordeel.title}</h3>
                <p className="text-gray-600 leading-relaxed">{voordeel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zakelijke Aftrek */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zakelijke Aftrekmogelijkheden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximaal fiscaal voordeel halen uit je investering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {zakelijkeAftrek.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="text-center mb-4">
                  <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-2xl font-bold mb-3">
                    {item.percentage}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.titel}</h3>
                  <p className="text-gray-600 text-sm">{item.beschrijving}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">{item.voorwaarde}</p>
                  <p className="text-green-600 font-semibold">{item.voorbeeld}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-400">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-4 rounded-xl flex-shrink-0">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Totaal Fiscaal Voordeel
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Door slimme combinatie van KIA, afschrijving en BTW-teruggave kan je fiscale voordeel oplopen
                  tot wel <strong className="text-green-600">60-70% van de investering</strong>. Dit maakt een
                  thuisbatterij een van de meest voordelige zakelijke investeringen!
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Let op:</strong> De fiscale regels kunnen per situatie verschillen. Raadpleeg altijd
                    je accountant of belastingadviseur voor jouw specifieke situatie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases per Profiel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voor Elk Type Zelfstandige
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specifieke voordelen voor verschillende branches
            </p>
          </div>

          <div className="space-y-6">
            {useCase.map((profile, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{profile.profiel}</h3>
                    <p className="text-gray-600 text-lg mb-4">{profile.situatie}</p>
                    <div className="space-y-2">
                      {profile.voordelen.map((voordeel, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{voordeel}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-48 bg-green-600 text-white p-6 rounded-xl text-center flex-shrink-0">
                    <div className="text-sm mb-2">Besparing per jaar</div>
                    <div className="text-3xl font-bold">{profile.besparing}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekenvoorbeeld */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Compleet Rekenvoorbeeld voor ZZP'ers
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {rekenvoorbeeld.profiel}
            </h3>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center pb-4 border-b border-purple-200">
                <span className="text-gray-700">Investering (incl. BTW):</span>
                <span className="font-semibold text-gray-900">€{rekenvoorbeeld.investering.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-purple-200">
                <span className="text-gray-700">BTW teruggave (21%):</span>
                <span className="font-semibold text-green-600">-€{rekenvoorbeeld.btw.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-purple-200">
                <span className="text-gray-700">ISDE-subsidie:</span>
                <span className="font-semibold text-green-600">-€{rekenvoorbeeld.subsidie.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-purple-200">
                <span className="text-gray-700">KIA-aftrek (28%):</span>
                <span className="font-semibold text-green-600">-€{rekenvoorbeeld.kia.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 bg-purple-100 -mx-8 px-8 py-4 rounded-lg">
                <span className="text-gray-900 font-bold text-xl">Netto investering:</span>
                <span className="font-bold text-purple-600 text-2xl">€{rekenvoorbeeld.eigenBijdrage.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-purple-300">
              <div className="bg-green-100 p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-900 font-bold text-xl">Jaarlijkse energiebesparing:</span>
                  <span className="font-bold text-green-600 text-2xl">€{rekenvoorbeeld.jaarBesparing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold text-xl">Terugverdientijd:</span>
                  <span className="font-bold text-green-600 text-2xl">{rekenvoorbeeld.terugverdientijd} jaar</span>
                </div>
              </div>
              <p className="text-gray-600 mt-6 text-center">
                Na {rekenvoorbeeld.terugverdientijd} jaar volledig terugverdiend. Daarna nog 8-12 jaar lang
                <strong className="text-green-600"> €{rekenvoorbeeld.jaarBesparing} per jaar</strong> besparen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Praktische Tips voor ZZP'ers
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {praktischeTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{tip.icoon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.titel}</h3>
                    <p className="text-gray-600">{tip.beschrijving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veelgestelde Vragen ZZP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen van ZZP'ers
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kan ik de thuisbatterij 100% zakelijk aftrekken?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dat hangt af van hoeveel je de batterij zakelijk gebruikt. Als je een thuiskantoor hebt dat je
                voor 80% zakelijk gebruikt, dan mag je 80% aftrekken. Houd goed bij hoeveel vierkante meter je
                zakelijk gebruikt ten opzichte van je totale woning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Krijg ik KIA-aftrek als starter?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ja! De KIA is juist bedoeld voor kleine ondernemers en starters. Je krijgt 28% extra aftrek
                bovenop de normale afschrijving, tot een maximum van €358.045 aan investeringen per jaar.
                Voor de meeste ZZP'ers is dit ruim voldoende.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Moet ik BTW betalen als ik niet BTW-plichtig ben?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ja, maar je kunt de BTW niet terugvragen. Als je niet BTW-plichtig bent (omzet onder €20.000
                of vrijstelling), betaal je de volledige prijs inclusief BTW zonder teruggave. De KIA en
                subsidie zijn dan des te belangrijker voor je rendement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Wat als ik stop met mijn bedrijf?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Als je binnen 5 jaar stopt, moet je de KIA-aftrek terugbetalen. De thuisbatterij blijft wel van
                jou en kun je privé blijven gebruiken. De investering is dus nooit verloren, maar het fiscale
                voordeel kan deels teruggevorderd worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links naar Andere Pagina's */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meer Informatie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/thuisbatterijen"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group border-2 border-purple-100 hover:border-purple-400"
            >
              <Battery className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Alle Thuisbatterijen</h3>
              <p className="text-gray-600 mb-4">Bekijk ons complete assortiment</p>
              <span className="text-purple-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Meer info
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group border-2 border-green-100 hover:border-green-400"
            >
              <Euro className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Prijzen & ROI</h3>
              <p className="text-gray-600 mb-4">Bereken je terugverdientijd</p>
              <span className="text-purple-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Bekijk prijzen
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-limburg"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group border-2 border-blue-100 hover:border-blue-400"
            >
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Subsidies 2025</h3>
              <p className="text-gray-600 mb-4">Tot €4.500 ISDE-subsidie</p>
              <span className="text-purple-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lees meer
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Zakelijk Advies op Maat
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Onze adviseurs hebben ervaring met zakelijke klanten en helpen je graag met een
            op maat gemaakt advies inclusief fiscale doorrekening. Gratis en vrijblijvend!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              Plan Zakelijk Gesprek
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
          </div>
          <p className="text-purple-200 mt-6">
            Ook bereikbaar voor spoedvragen buiten kantooruren
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijVoorZelfstandigen;
