import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Wrench,Calendar,ThermometerSun,Shield,AlertTriangle,Clock,Check,Star,Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { maintenancePlans } from '../data/maintenancePlans';

export default function MaintenanceProcedures() {
  const maintenancePackages = maintenancePlans.map(plan => ({ ...plan, icon: plan.id === 'basis' ? Star : Crown }));

  const procedures = [
    {
      title: 'Regulier Onderhoud',
      interval: 'Jaarlijks',
      steps: [
        'Reiniging van binnen- en buitenunit',
        'Controle koudemiddel en druk',
        'Inspectie van alle elektrische aansluitingen',
        'Controle condensafvoer',
        'Test van alle functies en standen',
        'Reiniging of vervanging filters',
        'Controle luchtstroom en temperatuur'
      ],
      tools: [
        'Manometerset',
        'Reinigingsmiddelen',
        'Multimeter',
        'Filtermateriaal',
        'Perslucht'
      ],
      duration: '1-2 uur'
    },
    {
      title: 'Groot Onderhoud',
      interval: 'Elke 3-4 jaar',
      steps: [
        'Complete reiniging warmtewisselaars',
        'Controle en eventueel bijvullen koudemiddel',
        'Uitgebreide lektest',
        'Controle compressor en ventilatoren',
        'Reiniging condensafvoer en -pomp',
        'Update firmware indien beschikbaar',
        'Volledige systeemtest'
      ],
      tools: [
        'Manometerset',
        'Lektester',
        'Hogedrukreiniger',
        'Koudemiddel',
        'Laptop voor firmware updates'
      ],
      duration: '2-3 uur'
    }
  ];

  const safetyGuidelines = [
    'Altijd spanning uitschakelen voor werkzaamheden',
    'Gebruik persoonlijke beschermingsmiddelen',
    'Werk volgens F-gassen regelgeving',
    'Zorg voor goede ventilatie',
    'Gebruik gekeurde klimmateriaal',
    'Houd werkplek schoon en veilig'
  ];

  return (
    <>
      <Helmet>
        <title>Airco onderhoudsabonnement: Basis of Premium | StayCool</title>
        <meta
          name="description"
          content="Onderhoud voor bestaande StayCool-klanten. Basis €13 of Premium €16 per maand per complete airco-unit. Vergelijk de pakketten en meld u online aan."
        />
        <link rel="canonical" href="https://staycoolairco.nl/onderhoud" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            {/* Breadcrumbs */}
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-white/50">/</span>
                </li>
                <li>
                  <span className="text-white">Onderhoudspakketten</span>
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 break-words">
                Onderhoudspakketten
              </h1>
              <p className="text-xl text-blue-50 mb-8">
                Jaarlijks onderhoud voor uw StayCool-airco. Kies Basis voor €13 of Premium voor €16 per maand per complete airco-unit.
              </p>
              <p className="text-blue-50 mb-6">
                Voor bestaande klanten met een airco die door StayCool is geleverd en geïnstalleerd.
              </p>
              <a href="#onderhoudspakketten" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white mb-8">
                Vergelijk de onderhoudspakketten
              </a>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Wrench className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Professioneel Onderhoud</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Garantie & Service</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Snelle Response</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Maintenance Packages */}
          <section id="onderhoudspakketten" aria-labelledby="pakketten-titel" className="max-w-4xl mx-auto mb-16 scroll-mt-28">
            <h2 id="pakketten-titel" className="text-3xl font-bold text-gray-900 mb-4">Kies het onderhoud dat bij u past</h2>
            <p className="text-gray-700 mb-3">De maandprijzen gelden per complete airco-unit: één buitendeel en één binnendeel. Extra binnendelen kosten €8 per maand bij Basis of €11 bij Premium.</p>
            <p className="text-gray-700 mb-8">Liever zonder abonnement? Een losse onderhoudsbeurt kost €189 per complete airco-unit. Bij het aanmelden ziet u de prijs voor uw aantal units en het gekozen betaalritme.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenancePackages.map((pkg, index) => (
              <m.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    €{pkg.price}
                    <span className="text-base font-normal text-gray-600"> p.m.</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">€{pkg.annualPrice} per jaar bij maandbetaling, per complete airco-unit.</p>
                  <p className="text-sm text-gray-600 mb-6">Extra binnendeel: €{pkg.extraIndoorPrice} per maand.</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-blue-800 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href={`https://aanmelden.staycoolairco.nl/?pakket=${pkg.id}`}
                      className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300"
                    >
                      Kies {pkg.title}
                    </a>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
            <p className="text-sm text-gray-600 mt-6">Op de aanmeldpagina bevestigt u uw pakketkeuze en kiest u uw betaalritme. U kunt uw pakket daar nog aanpassen. Houd uw klant-, offerte- of factuurnummer bij de hand. Bekijk ook de <Link to="/voorwaarden" className="text-blue-800 underline">algemene voorwaarden</Link> voor de afspraken over uw abonnement.</p>
          </section>

          {/* Image Gallery Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ons Professioneel Onderhoud in Beeld
              </h2>
              <p className="text-xl text-gray-600">
                Bekijk hoe onze gecertificeerde monteurs uw airco vakkundig onderhouden
              </p>
            </div>

            {/* Featured Image */}
            <div className="mb-8 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/onderhoud/onderhoudairco1.webp"
                  alt="Professioneel airco onderhoud door StayCool Airco"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco2.webp"
                  alt="Airco onderhoud werkzaamheden"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco3.webp"
                  alt="Professionele airco service"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco4.webp"
                  alt="Airco reiniging en controle"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco5.webp"
                  alt="StayCool Airco monteur aan het werk"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </m.div>

          {/* Important Notice Section - Moved to top */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-orange-50 rounded-xl p-4 sm:p-8 border-2 border-orange-200">
              <div className="flex flex-col sm:flex-row items-start">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-orange-500 mt-1" />
                </div>
                <div className="min-w-0 mt-3 sm:mt-0 sm:ml-4 break-words">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Belangrijk: Onderhoudsbeleid StayCool Airco
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Bij StayCool Airco streven we naar de hoogste kwaliteit en service voor onze klanten.
                      Om dit te kunnen garanderen, voeren wij <strong className="text-gray-900">uitsluitend onderhoud en reparaties</strong> uit
                      aan airconditioningsystemen die door ons zijn geleverd en geïnstalleerd.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Dit beleid stelt ons in staat om:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>De volledige geschiedenis van uw systeem te kennen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Garantie te bieden op onderdelen en arbeid</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Optimale service te verlenen aan onze bestaande klanten</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>De kwaliteit van onze dienstverlening te waarborgen</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 mt-4">
                      <p className="font-semibold text-gray-900 mb-2">
                        Heeft u een airco die niet door StayCool is geïnstalleerd?
                      </p>
                      <p>
                        Wij adviseren u contact op te nemen met de oorspronkelijke installateur of een algemene
                        onderhoudspartij voor airconditioningsystemen.
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 italic mt-4">
                      Wij begrijpen dat dit mogelijk ongemak veroorzaakt en bieden hiervoor onze excuses aan.
                      Deze keuze is gemaakt om de beste service aan onze klanten te kunnen blijven bieden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Safety Guidelines */}
          <div className="bg-yellow-50 rounded-xl p-6 mb-12">
            <h2 className="flex items-center text-xl font-bold text-yellow-800 mb-4">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Veiligheidsrichtlijnen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="flex items-center text-yellow-700"
                >
                  <Shield className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Procedures */}
          <div className="space-y-12">
            {procedures.map((procedure, index) => (
              <m.div
                key={procedure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {procedure.title}
                    </h2>
                    <div className="flex items-center gap-2 text-blue-800">
                      <Calendar className="h-5 w-5" />
                      <span>{procedure.interval}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <ThermometerSun className="h-5 w-5 mr-2" />
                        Werkzaamheden
                      </h3>
                      <ol className="space-y-2">
                        {procedure.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex items-start"
                          >
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Wrench className="h-5 w-5 mr-2" />
                          Benodigde Gereedschap
                        </h3>
                        <ul className="space-y-2">
                          {procedure.tools.map((tool) => (
                            <li
                              key={tool}
                              className="flex items-center text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          Geschatte Duur
                        </h3>
                        <p className="text-gray-600">{procedure.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

        </div>
      </div>
      <nav aria-label="Meer weten voor u een pakket kiest" className="mx-auto max-w-5xl px-4 py-8 flex flex-col gap-3">
        <Link to="/seo/pillar-9-kosten-prijzen/airco-onderhoud-kosten" className="text-blue-800 underline">Vergelijk de jaarprijs van los onderhoud, Basis en Premium</Link>
        <Link to="/kennisbank/hoe-vaak-airco-onderhoud" className="text-blue-800 underline">Lees hoe vaak uw airco onderhoud nodig heeft</Link>
      </nav>
    </>
  );
}
