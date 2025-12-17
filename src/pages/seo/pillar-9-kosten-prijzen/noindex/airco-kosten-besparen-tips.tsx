import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, TrendingDown, Phone, Calculator, Lightbulb, Award, CheckCircle, Euro, Sun, Thermometer } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoKostenBesparenTips = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Laten Installeren', path: '/kennisbank/airco-laten-installeren' },
    { label: 'Kosten Besparen Tips' }
  ];

  const bespaartips = [
    {
      titel: 'Kies Het Juiste Seizoen',
      icon: Sun,
      besparing: '€200 - €400',
      niveau: 'Gemakkelijk',
      uitleg: 'Koop en installeer je airco in het najaar of winter. In deze periode zijn de prijzen 15-25% lager door minder vraag. Installateurs hebben meer tijd en bieden vaak kortingen.',
      actie: ['Plan installatie in september-maart', 'Vraag naar winteracties', 'Vermijd de zomerperiode']
    },
    {
      titel: 'Vergelijk Meerdere Offertes',
      icon: Calculator,
      besparing: '€300 - €600',
      niveau: 'Gemakkelijk',
      uitleg: 'Prijzen kunnen sterk verschillen tussen installateurs. Door 3-5 offertes te vergelijken kun je gemakkelijk honderden euro\'s besparen zonder concessies te doen op kwaliteit.',
      actie: ['Vraag minimaal 3 offertes', 'Vergelijk appels met appels', 'Let ook op garantievoorwaarden']
    },
    {
      titel: 'Kies Een Energie-Efficiënt Model',
      icon: TrendingDown,
      besparing: '€150 - €300/jaar',
      niveau: 'Gemakkelijk',
      uitleg: 'Een A+++ model is weliswaar €300-500 duurder in aanschaf, maar bespaart €150-300 per jaar op energiekosten. Na 2-3 jaar heb je het verschil terugverdiend.',
      actie: ['Kies minimaal A++ label', 'Bereken terugverdientijd', 'Denk aan lange termijn']
    },
    {
      titel: 'Optimale Plaatsing en Zonwering',
      icon: Sun,
      besparing: '€80 - €150/jaar',
      niveau: 'Gemiddeld',
      uitleg: 'Door buitenunit uit direct zonlicht te plaatsen en binnenunit op juiste plek te monteren, werkt je airco efficiënter. Zonwering kan tot 30% besparen op koelkosten.',
      actie: ['Buitenunit op schaduwrijke plek', 'Zonwering voor ramen', 'Goede isolatie belangrijk']
    },
    {
      titel: 'Slim Gebruik: Juiste Temperatuur',
      icon: Thermometer,
      besparing: '€100 - €200/jaar',
      niveau: 'Gemakkelijk',
      uitleg: 'Zet airco niet kouder dan 23-25°C. Elk graad kouder verhoogt verbruik met 7-10%. Het verschil tussen 20°C en 24°C kan €200/jaar schelen.',
      actie: ['Houd 23-25°C aan', 'Gebruik timer functie', 'Niet te koud instellen']
    },
    {
      titel: 'Profiteer Van Subsidies',
      icon: Euro,
      besparing: '€150 - €500',
      niveau: 'Gemiddeld',
      uitleg: 'Verschillende gemeenten en provincies bieden subsidies voor energiezuinige airco\'s. Ook BTW-teruggave mogelijk bij renovatie ouder dan 2 jaar (21% → 9% BTW).',
      actie: ['Check gemeentelijke subsidies', 'Vraag naar BTW-verlaging', 'Combineer met andere maatregelen']
    },
    {
      titel: 'Onderhoudscontract Afsluiten',
      icon: Award,
      besparing: '€100 - €250/jaar',
      niveau: 'Gemakkelijk',
      uitleg: 'Met onderhoudscontract vanaf €11/maand voorkom je dure reparaties en blijft je airco efficiënt werken. Vermijdt storingen die tot 30% meer verbruik kunnen geven.',
      actie: ['Neem contract vanaf €11/maand', 'Jaarlijks onderhoud verplicht', 'Voorkomt dure reparaties']
    },
    {
      titel: 'Multi-Split Bij Meerdere Ruimtes',
      icon: CheckCircle,
      besparing: '€400 - €800',
      niveau: 'Gemiddeld',
      uitleg: 'Voor 2-3 kamers is multi-split goedkoper dan aparte single-splits. Bespaart op installatie (1x buitenunit), materiaal en energiekosten door efficiëntere werking.',
      actie: ['Bereken vanaf 2 ruimtes', 'Vergelijk met losse units', 'Denk aan toekomstige uitbreiding']
    },
    {
      titel: 'Koop Direct Bij Installateur',
      icon: PiggyBank,
      besparing: '€150 - €300',
      niveau: 'Gemakkelijk',
      uitleg: 'Koop niet los een airco online en zoek dan installateur. Complete pakketten van installateur zijn vaak goedkoper én je hebt alles uit één hand met volledige garantie.',
      actie: ['Vraag compleet pakket', 'Vergelijk totaalprijs', 'Eén aanspreekpunt']
    },
    {
      titel: 'Inverter Technologie',
      icon: Lightbulb,
      besparing: '€120 - €180/jaar',
      niveau: 'Gemakkelijk',
      uitleg: 'Inverter airco\'s zijn 30-40% zuiniger dan on/off modellen. Ze blijven constant op laag vermogen draaien in plaats van steeds aan en uit te gaan.',
      actie: ['Kies altijd inverter', 'Meerprijs €100-200', 'Terugverdientijd <2 jaar']
    },
    {
      titel: 'Combi-Deal Warmtepomp Functie',
      icon: Sun,
      besparing: '€200 - €400/jaar',
      niveau: 'Gemiddeld',
      uitleg: 'Gebruik je airco ook voor verwarming in voor- en najaar? Dan vervang je dure CV-verbruik door efficiënte warmtepomp. 3-4x efficiënter dan elektrische verwarming.',
      actie: ['Kies model met warmtepomp', 'Gebruik in voor/najaar', 'Bespaart op CV-gas']
    },
    {
      titel: 'Goede Isolatie Check',
      icon: CheckCircle,
      besparing: '€150 - €300/jaar',
      niveau: 'Gemiddeld',
      uitleg: 'Airco in slecht geïsoleerde ruimte kost 40-60% meer. Check eerst isolatie (spouwmuur, HR++ glas). Extra isolatie verdient zich snel terug.',
      actie: ['Check isolatiewaarde', 'Investeer eerst in isolatie', 'Kleinere airco nodig']
    }
  ];

  const subsidieRegelingen = [
    {
      naam: 'ISDE Subsidie (Rijksoverheid)',
      bedrag: '€150 - €500',
      voorwaarden: 'Warmtepomp airco met label A+++',
      link: 'Check RVO.nl voor actuele regeling'
    },
    {
      naam: 'Gemeentelijke Subsidies',
      bedrag: '€100 - €300',
      voorwaarden: 'Verschilt per gemeente',
      link: 'Informeer bij je gemeente'
    },
    {
      naam: 'BTW-Verlaging Renovatie',
      bedrag: '12% besparing',
      voorwaarden: 'Woning ouder dan 2 jaar (21% → 9%)',
      link: 'Via erkend installateur'
    },
    {
      naam: 'Energiebespaarlening',
      bedrag: 'Vanaf 0,5% rente',
      voorwaarden: 'Voor energiebesparende maatregelen',
      link: 'Via Nationaal Energiebespaarfonds'
    }
  ];

  const totaalBesparingBerekening = [
    { item: 'Installatie in laagseizoen', besparing: '€300' },
    { item: 'Meerdere offertes vergelijken', besparing: '€400' },
    { item: 'A+++ model (over 5 jaar)', besparing: '€1.250' },
    { item: 'Optimale plaatsing & zonwering', besparing: '€500' },
    { item: 'Juiste temperatuur (per jaar)', besparing: '€150' },
    { item: 'Subsidie gemeente/rijk', besparing: '€250' },
    { item: 'Multi-split i.p.v. losse units', besparing: '€600' },
    { item: 'Direct bij installateur', besparing: '€200' }
  ];

  const totaalBesparing = totaalBesparingBerekening.reduce((acc, item) => {
    return acc + parseInt(item.besparing.replace(/[^0-9]/g, ''));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="12 Tips Om Te Besparen Op Airco Kosten [2024] | StayCool Airco"
        description="Bespaar €500-€1.500 op je airco met deze praktische tips. Van slimme timing tot subsidies en energie-efficiëntie. Bewezen methoden om kosten te verlagen."
        canonicalUrl="https://staycoolairco.nl/airco-kosten/noindex/airco-kosten-besparen-tips"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <PiggyBank className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              12 Tips: Bespaar Op Airco Kosten
            </h1>
          </div>
          <p className="text-xl text-blue-50 max-w-3xl">
            Slimme tips om €500 tot €1.500 te besparen op aanschaf én gebruik
            van je airco. Van subsidies tot slim gebruik - bewezen methoden die werken.
          </p>
        </div>
      </section>

      {/* Potentiële Besparing Overzicht */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Totale Potentiële Besparing</h2>
            <div className="text-6xl font-bold mb-4">€{totaalBesparing.toLocaleString()}</div>
            <p className="text-green-100 text-lg">
              Door alle tips te combineren over een periode van 5 jaar
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                ✓ Slimme timing: €300-400
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                ✓ Energie besparing: €1.250+
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                ✓ Subsidies: €250-500
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Bespaartips */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">12 Concrete Bespaartips</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Elk van deze tips is in de praktijk getest en zorgt voor aantoonbare besparingen.
            Combineer meerdere tips voor maximaal effect.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bespaartips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {tip.niveau}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {index + 1}. {tip.titel}
                  </h3>

                  <div className="text-2xl font-bold text-green-600 mb-3">
                    {tip.besparing}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {tip.uitleg}
                  </p>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Actie:</h4>
                    <ul className="space-y-1">
                      {tip.actie.map((actie, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{actie}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subsidies en Regelingen */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Subsidies en Regelingen</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Profiteer van diverse subsidies en financiële regelingen. Let op: regelingen
            kunnen per jaar wijzigen, check altijd de actuele voorwaarden.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subsidieRegelingen.map((regeling, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{regeling.naam}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{regeling.bedrag}</div>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Voorwaarden:</strong> {regeling.voorwaarden}
                </p>
                <p className="text-sm text-gray-500">
                  ℹ️ {regeling.link}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-bold text-lg mb-2 text-blue-900">💡 Tip: Combineer Subsidies</h3>
            <p className="text-blue-800">
              Je kunt vaak meerdere regelingen combineren! Bijvoorbeeld: ISDE subsidie +
              gemeentelijke subsidie + BTW-verlaging = tot €950 besparing. Vraag je installateur
              naar de mogelijkheden.
            </p>
          </div>
        </div>
      </section>

      {/* Besparingscalculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Jouw Potentiële Besparing</h2>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-4">Bereken Wat Jij Kunt Besparen</h3>

            <div className="space-y-3">
              {totaalBesparingBerekening.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item.item}</span>
                  </div>
                  <span className="font-bold text-green-600">{item.besparing}</span>
                </div>
              ))}

              <div className="flex items-center justify-between py-4 bg-green-50 px-4 rounded-lg border-2 border-green-200">
                <span className="font-bold text-lg text-gray-900">Totaal mogelijk</span>
                <span className="font-bold text-2xl text-green-600">
                  €{totaalBesparing.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              * Bedragen zijn indicatief en gebaseerd op gemiddelden. Werkelijke besparing
              hangt af van jouw specifieke situatie en gebruik.
            </p>
          </div>
        </div>
      </section>

      {/* Praktische Voorbeelden */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Praktische Voorbeelden</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-gray-900">
                Voorbeeld 1: Gezin in Maastricht
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Situatie:</strong> 2 kamers koelen, budget €4.000</p>
                <p><strong>Besparingen:</strong></p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Multi-split gekozen i.p.v. 2 losse units: €600 bespaard</li>
                  <li>In oktober geïnstalleerd: €300 korting</li>
                  <li>3 offertes vergeleken: €400 bespaard</li>
                  <li>ISDE subsidie ontvangen: €300</li>
                  <li>A+++ model: €250/jaar minder energiekosten</li>
                </ul>
                <p className="font-bold text-green-600 mt-3">
                  Totaal bespaard: €1.600 aanschaf + €250/jaar
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-gray-900">
                Voorbeeld 2: Appartement in Sittard
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Situatie:</strong> 1 kamer koelen, budget €2.000</p>
                <p><strong>Besparingen:</strong></p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Black Friday deal: €250 korting</li>
                  <li>Zonnescherm voor raam geplaatst: €100/jaar besparing</li>
                  <li>Temperatuur op 24°C i.p.v. 20°C: €150/jaar besparing</li>
                  <li>Onderhoudscontract: €150/jaar bespaard op reparaties</li>
                </ul>
                <p className="font-bold text-blue-600 mt-3">
                  Totaal bespaard: €250 aanschaf + €400/jaar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Meer Informatie Over Airco Installatie</h2>
          <Link
            to="/kennisbank/airco-laten-installeren"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-l-4 border-green-600 block transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-green-600 mb-2">
                  → Complete Gids: Airco Laten Installeren
                </h3>
                <p className="text-gray-600 mb-3">
                  Uitgebreide informatie over airco installatie, kosten, subsidies en onderhoud.
                  Inclusief stappenplan en kostenoverzichten.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Installatie proces</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Alle kosten</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Subsidies 2024</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Onderhoudstips</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wil Je Direct Besparen?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Vraag een vrijblijvende offerte aan en ontdek welke besparingen
            voor jouw situatie mogelijk zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31850606311"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors text-lg"
            >
              <Phone className="w-6 h-6" />
              085 - 060 63 11
            </a>
            <a
              href="/offerte"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors text-lg border-2 border-white"
            >
              <Calculator className="w-6 h-6" />
              Gratis Offerte
            </a>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            ✓ Scherpe prijzen  ✓ Subsidie advies  ✓ Binnen 24 uur reactie
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoKostenBesparenTips;
