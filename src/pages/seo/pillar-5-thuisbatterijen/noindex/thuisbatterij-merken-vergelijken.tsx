import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Star, ArrowRight, Phone, CheckCircle, Award, Zap, Shield } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijMerkenVergelijken = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Merken vergelijken' }
  ];

  const merkenVergelijking = [
    {
      merk: 'AlphaESS',
      modellen: 'SMILE-B3, SMILE5, SMILE-T10',
      capaciteit: '5,7 - 39 kWh',
      garantie: '10 jaar',
      efficiency: '95-97%',
      levensduur: '6000+ cycli',
      prijs: '€4.545 - €7.750',
      score: 9.2,
      voordelen: ['Modulair uitbreidbaar', 'Nederlandse support', 'Premium kwaliteit', 'Smart monitoring'],
      nadelen: ['Hogere aanschafprijs']
    },
    {
      merk: 'Tesla Powerwall',
      modellen: 'Powerwall 2, Powerwall+',
      capaciteit: '13,5 - 27 kWh',
      garantie: '10 jaar',
      efficiency: '90%',
      levensduur: '3700 cycli',
      prijs: '€8.500 - €15.000',
      score: 8.8,
      voordelen: ['Bekende merknaam', 'Geïntegreerde omvormer', 'Strak design'],
      nadelen: ['Beperkte beschikbaarheid', 'Lange levertijd', 'Duur']
    },
    {
      merk: 'LG Chem RESU',
      modellen: 'RESU 10H, RESU 16H',
      capaciteit: '9,8 - 16 kWh',
      garantie: '10 jaar',
      efficiency: '95%',
      levensduur: '6000 cycli',
      prijs: '€6.500 - €9.500',
      score: 8.5,
      voordelen: ['Betrouwbaar merk', 'Compacte afmetingen', 'Goede garantie'],
      nadelen: ['Minder flexibel uitbreidbaar', 'Hogere prijs per kWh']
    },
    {
      merk: 'Huawei LUNA',
      modellen: 'LUNA2000-5-S0, LUNA2000-15-S0',
      capaciteit: '5 - 15 kWh',
      garantie: '10 jaar',
      efficiency: '97%',
      levensduur: '6000+ cycli',
      prijs: '€4.200 - €8.900',
      score: 8.3,
      voordelen: ['Hoge efficiency', 'Smart Energy management', 'Modulair'],
      nadelen: ['Relatief nieuw in NL', 'Beperkt dealernetwerk']
    },
    {
      merk: 'BYD Battery-Box',
      modellen: 'Premium HVM, Premium HVS',
      capaciteit: '5,1 - 22,1 kWh',
      garantie: '10 jaar',
      efficiency: '96%',
      levensduur: '6000 cycli',
      prijs: '€5.800 - €11.500',
      score: 8.1,
      voordelen: ['Modulair systeem', 'Veel ervaring', 'Goede prijs-kwaliteit'],
      nadelen: ['Minder bekende merknaam', 'Grotere afmetingen']
    },
    {
      merk: 'Sonnen Batterie',
      modellen: 'sonnenBatterie 10',
      capaciteit: '5,5 - 55 kWh',
      garantie: '10 jaar',
      efficiency: '93%',
      levensduur: '10.000 cycli',
      prijs: '€8.000 - €18.000',
      score: 7.9,
      voordelen: ['Zeer lange levensduur', 'Premium Duitse kwaliteit', 'Virtual Power Plant'],
      nadelen: ['Hoge prijs', 'Lage efficiency', 'Beperkte dealers']
    }
  ];

  const specificatiesVergelijking = [
    {
      categorie: 'Capaciteit & Flexibiliteit',
      items: [
        { spec: 'Minimale capaciteit', alphaess: '5,7 kWh (SMILE-B3)', tesla: '13,5 kWh', lg: '9,8 kWh', huawei: '5 kWh', byd: '5,1 kWh', sonnen: '5,5 kWh' },
        { spec: 'Maximale capaciteit', alphaess: '39 kWh (SMILE-T10)', tesla: '27 kWh', lg: '16 kWh', huawei: '15 kWh', byd: '22,1 kWh', sonnen: '55 kWh' },
        { spec: 'Modulair uitbreidbaar', alphaess: '✓ Zeer flexibel', tesla: '✓ Beperkt', lg: '✗ Vaste modules', huawei: '✓ Modulair', byd: '✓ Modulair', sonnen: '✓ Modulair' }
      ]
    },
    {
      categorie: 'Prestaties',
      items: [
        { spec: 'Roundtrip efficiency', alphaess: '95-97%', tesla: '90%', lg: '95%', huawei: '97%', byd: '96%', sonnen: '93%' },
        { spec: 'Ontlaaddiepte (DoD)', alphaess: '100%', tesla: '100%', lg: '90%', huawei: '100%', byd: '95%', sonnen: '100%' },
        { spec: 'Laadvermogen', alphaess: '3-10 kW', tesla: '5 kW', lg: '5 kW', huawei: '5 kW', byd: '3,5-11 kW', sonnen: '3,3 kW' }
      ]
    },
    {
      categorie: 'Levensduur & Garantie',
      items: [
        { spec: 'Cyclus levensduur', alphaess: '6000+', tesla: '3700', lg: '6000', huawei: '6000+', byd: '6000', sonnen: '10.000' },
        { spec: 'Productgarantie', alphaess: '10 jaar', tesla: '10 jaar', lg: '10 jaar', huawei: '10 jaar', byd: '10 jaar', sonnen: '10 jaar' },
        { spec: 'Capaciteitsgarantie', alphaess: '80% na 10 jaar', tesla: '70% na 10 jaar', lg: '70% na 10 jaar', huawei: '80% na 10 jaar', byd: '80% na 10 jaar', sonnen: '80% na 10 jaar' }
      ]
    },
    {
      categorie: 'Smart Features',
      items: [
        { spec: 'Monitoring app', alphaess: '✓ AlphaCloud', tesla: '✓ Tesla app', lg: '✗ Via omvormer', huawei: '✓ FusionSolar', byd: '✓ Be Connect', sonnen: '✓ sonnen app' },
        { spec: 'AI optimalisatie', alphaess: '✓ Smart dispatch', tesla: '✓ Storm Watch', lg: '✗', huawei: '✓ Smart control', byd: '✗', sonnen: '✓ flatrate' },
        { spec: 'Noodstroom functie', alphaess: '✓ EPS modus', tesla: '✓ Backup Gateway', lg: '✗ Optioneel', huawei: '✓ UPS modus', byd: '✗ Optioneel', sonnen: '✗ Optioneel' }
      ]
    },
    {
      categorie: 'Installatie',
      items: [
        { spec: 'Gewicht', alphaess: '78-540 kg', tesla: '114 kg', lg: '119-147 kg', huawei: '105 kg', byd: '125-500 kg', sonnen: '130-550 kg' },
        { spec: 'Afmetingen (HxBxD)', alphaess: 'Compact', tesla: '1150x753x147mm', lg: '760x485x184mm', huawei: '670x600x180mm', byd: 'Modulair', sonnen: 'Modulair' },
        { spec: 'Installatie locatie', alphaess: 'Binnen/Buiten', tesla: 'Binnen/Buiten', lg: 'Binnen', huawei: 'Binnen', byd: 'Binnen', sonnen: 'Binnen' }
      ]
    }
  ];

  const gebruiksscenarios = [
    {
      scenario: 'Nieuwbouw woning (4 personen)',
      beste: 'AlphaESS SMILE5',
      waarom: 'Perfect voor starters: 11,4 kWh capaciteit is ideaal voor gemiddeld verbruik, modulair uitbreidbaar bij groeiende behoeften, en uitstekende prijs-kwaliteit verhouding (€5.785).',
      alternatieven: ['Huawei LUNA2000-10 (goedkoper)', 'LG RESU 10H (compacter)']
    },
    {
      scenario: 'Bestaande woning met hoog verbruik',
      beste: 'AlphaESS SMILE-T10',
      waarom: 'Grote capaciteit (tot 39 kWh uitbreidbaar), hoge efficiency (97%), en krachtig laadvermogen (10 kW). Perfect voor warmtepomp en elektrisch koken.',
      alternatieven: ['Tesla Powerwall+ (als design prioriteit)', 'BYD Premium HVM (goedkoper)']
    },
    {
      scenario: 'Off-grid woning',
      beste: 'Sonnen Batterie',
      waarom: 'Hoogste cyclus levensduur (10.000), zeer grote capaciteit mogelijk (55 kWh), en robuuste constructie. Langetermijn betrouwbaarheid essentieel.',
      alternatieven: ['AlphaESS SMILE-T10 (betere efficiency)', 'BYD Premium HVS (prijs-kwaliteit)']
    },
    {
      scenario: 'Budget bewust met zonnepanelen',
      beste: 'AlphaESS SMILE-B3',
      waarom: 'Laagste instapprijs (€4.545) met volledige functionaliteit, uitbreidbaar, en Nederlandse support. Geen concessies aan kwaliteit.',
      alternatieven: ['Huawei LUNA2000-5 (iets goedkoper)', 'BYD Battery-Box (meer capaciteit)']
    },
    {
      scenario: 'Zakelijke toepassing / kantoor',
      beste: 'AlphaESS SMILE-T10',
      waarom: 'Hoogste efficiency (97%) = maximale ROI, modulair schaalbaar, professionele monitoring, en uitstekende garantie. Betrouwbaar voor business-critical gebruik.',
      alternatieven: ['Huawei LUNA2000-15 (goed alternatief)', 'Tesla Powerwall+ (prestigieus)']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Merken Vergelijken 2025 | AlphaESS vs Tesla vs LG | StayCool"
        description="Vergelijk alle thuisbatterij merken: AlphaESS, Tesla Powerwall, LG Chem, Huawei, BYD en Sonnen. Objectieve specificaties, prijzen en advies voor de beste keuze."
        canonicalUrl="https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-merken-vergelijken"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Battery className="w-5 h-5" />
              <span className="text-sm font-medium">Complete merkenvergelijking 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thuisbatterij Merken Vergelijken: AlphaESS vs Concurrenten
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Objectieve vergelijking van alle thuisbatterij merken in Nederland. Specificaties, prestaties, prijzen en advies voor jouw situatie.
            </p>
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Totaalscore per merk</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {merkenVergelijking.map((merk) => (
              <div key={merk.merk} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                <Award className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{merk.merk}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold text-blue-600">{merk.score}</span>
                  <span className="text-gray-500">/10</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(merk.score / 2) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{merk.prijs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uitgebreide merkenvergelijking */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Uitgebreide merkenvergelijking</h2>

          <div className="space-y-6">
            {merkenVergelijking.map((merk) => (
              <div key={merk.merk} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-blue-500 transition-all">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{merk.merk}</h3>
                    <p className="text-gray-600 mb-4">{merk.modellen}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-blue-600">{merk.score}</span>
                      <span className="text-gray-500">/10</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.round(merk.score / 2) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Capaciteit:</span>
                      <p className="font-semibold text-gray-900">{merk.capaciteit}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Efficiency:</span>
                      <p className="font-semibold text-gray-900">{merk.efficiency}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Levensduur:</span>
                      <p className="font-semibold text-gray-900">{merk.levensduur}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Garantie:</span>
                      <p className="font-semibold text-gray-900">{merk.garantie}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Prijsrange:</span>
                      <p className="font-semibold text-blue-600">{merk.prijs}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Voordelen
                      </h4>
                      <ul className="space-y-1">
                        {merk.voordelen.map((voordeel, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">+</span>
                            {voordeel}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        Let op
                      </h4>
                      <ul className="space-y-1">
                        {merk.nadelen.map((nadeel, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5">-</span>
                            {nadeel}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specificaties vergelijking */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technische specificaties vergelijken</h2>

          <div className="space-y-8">
            {specificatiesVergelijking.map((categorie, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  {categorie.categorie}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 font-semibold text-gray-900 border">Specificatie</th>
                        <th className="text-left p-3 font-semibold text-blue-600 border bg-blue-50">AlphaESS</th>
                        <th className="text-left p-3 font-semibold text-gray-700 border">Tesla</th>
                        <th className="text-left p-3 font-semibold text-gray-700 border">LG Chem</th>
                        <th className="text-left p-3 font-semibold text-gray-700 border">Huawei</th>
                        <th className="text-left p-3 font-semibold text-gray-700 border">BYD</th>
                        <th className="text-left p-3 font-semibold text-gray-700 border">Sonnen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categorie.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-gray-50">
                          <td className="p-3 font-medium text-gray-700 border">{item.spec}</td>
                          <td className="p-3 text-gray-900 border bg-blue-50 font-medium">{item.alphaess}</td>
                          <td className="p-3 text-gray-600 border">{item.tesla}</td>
                          <td className="p-3 text-gray-600 border">{item.lg}</td>
                          <td className="p-3 text-gray-600 border">{item.huawei}</td>
                          <td className="p-3 text-gray-600 border">{item.byd}</td>
                          <td className="p-3 text-gray-600 border">{item.sonnen}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gebruiksscenarios */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welk merk past bij jouw situatie?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Op basis van jouw specifieke woning en energiebehoefte adviseren we het beste merk en model.
          </p>

          <div className="space-y-6">
            {gebruiksscenarios.map((scenario, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.scenario}</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                      <p className="font-semibold text-blue-900 mb-2">
                        ✓ Beste keuze: {scenario.beste}
                      </p>
                      <p className="text-gray-700">{scenario.waarom}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Alternatieven:</p>
                      <ul className="space-y-1">
                        {scenario.alternatieven.map((alt, altIdx) => (
                          <li key={altIdx} className="text-sm text-gray-600 flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            {alt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links naar geïndexeerde pagina's */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer informatie over thuisbatterijen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-alphaess-vs-concurrenten"
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                AlphaESS vergelijking
              </span>
              <p className="text-sm text-gray-600 mt-2">Waarom AlphaESS de beste keuze is</p>
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Kosten overzicht
              </span>
              <p className="text-sm text-gray-600 mt-2">Complete kostencalculatie en ROI</p>
            </Link>
            <Link
              to="/thuisbatterijen"
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Alle producten
              </span>
              <p className="text-sm text-gray-600 mt-2">Bekijk ons complete assortiment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Persoonlijk advies over de beste thuisbatterij voor jouw situatie?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Onze specialisten helpen je graag bij het kiezen van het juiste merk en model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0858081555"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              085 808 1555
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Offerte aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijMerkenVergelijken;
