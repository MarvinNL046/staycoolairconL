import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function WatKostEenUurAircoDraaien() {
  return (
    <>
      <MetaTags
        title="Wat kost 1 uur airco draaien? Stroomkosten 2026 + Rekenvoorbeelden"
        description="Een airco van 3,5 kW kost ongeveer €0,30–€0,50 per uur bij koelen en €0,20–€0,35 bij verwarmen. Tarief 2026, met formule en rekenvoorbeelden per woningtype."
        keywords="wat kost 1 uur airco, stroomverbruik airco, airco kosten per uur, kosten verwarmen airco, airco zuinig gebruiken, airco kwh, airco verbruik per dag"
        canonicalUrl="https://staycoolairco.nl/blog/wat-kost-1-uur-airco-draaien"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Wat kost 1 uur airco draaien? Stroomkosten 2026 + Rekenvoorbeelden",
          description: "Praktische gids over de kosten van een uur airco draaien: formule, tabel per vermogen, voorbeelden per woning en vergelijking koelen vs verwarmen. Inclusief bespaartips van StayCool monteurs.",
          datePublished: "2026-04-17",
          image: "https://staycoolairco.nl/images/blog/wat-kost-1-uur-airco-draaien.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Wat kost 1 uur verwarmen met airco?",
            "answer": "Voor een gangbare 3,5 kW airco in een Nederlandse woning ligt het verbruik tussen de €0,20 en €0,35 per uur (tarief €0,34/kWh, 2026). Bij vorst stijgt dit naar €0,40–€0,50 per uur omdat de COP afneemt."
            },
            {
            "question": "Wat kost een hele dag airco aan?",
            "answer": "Een realistische winter-dag (16 uur verwarmen op 20°C, buiten 2–5°C): tussen de €3,20 en €5,50. Een zomerdag met 8 uur koelen: €1,20 tot €1,80."
            },
            {
            "question": "Is stoken met airco goedkoper dan gas?",
            "answer": "Ja, bij buitentemperaturen boven 0°C ongeveer 30–50% goedkoper per geleverde kWh warmte. Onder -5°C worden de kosten vergelijkbaar met gas. Over een heel Nederlands stookseizoen is airco-verwarming gemiddeld 25–40% goedkoper dan gas — als uw woning goed geïsoleerd is."
            },
            {
            "question": "Wat is het kantelpunt bij verwarmen met airco?",
            "answer": "Het punt waarop de COP van de airco zo laag wordt dat verwarmen even duur is als gas. Bij moderne airco's ligt dit rond -5 tot -8°C buitentemperatuur. Dat komt in Limburg gemiddeld 10–20 dagen per jaar voor. Voor die dagen houden veel klanten de gasketel achter de hand (hybride opzet)."
            },
            {
            "question": "Hoeveel euro kost een airco per uur?",
            "answer": "Tussen de €0,20 (2,5 kW inverter in deeltijd) en €0,85 (7,0 kW op vol vermogen in de winter). De meeste klanten die wij in Maastricht, Heerlen en Sittard helpen, zitten op een gemiddelde van €0,30 tot €0,45 per actieve uur."
            },
            {
            "question": "Verbruikt een airco veel stroom in standby?",
            "answer": "Minimaal. Een moderne splitunit in standby verbruikt 1–3 watt, dat is minder dan €3 per jaar. De stekker eruit halen scheelt dus niets noemenswaardigs — en is bovendien niet aan te raden omdat de vorstbeveiliging dan uitstaat."
            },
            {
            "question": "Heeft een airco een aparte groep nodig?",
            "answer": "Voor splitunits tot 3,5 kW meestal niet — die kunnen op een bestaande groep zitten mits er ruimte is. Vanaf 5,0 kW adviseren onze monteurs wél een aparte groep. Bij multisplit-systemen altijd een aparte groep. Dit wordt bij elke StayCool-installatie bij u thuis beoordeeld en indien nodig meegenomen in de offerte."
            },
            {
            "question": "Concrete kosten voor úw woning?",
            "answer": "Onze monteurs komen gratis langs, meten uw ruimte, bekijken uw isolatie en rekenen de werkelijke jaarlijkse stroomkosten uit — inclusief terugverdientijd als u van gas overstapt. Dit vrijblijvende advies kost u niets."
            }
            ]
        }}
      />


      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Blog', path: '/blog' },
              { label: 'Wat kost 1 uur airco draaien?' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>17 april 2026</span>
                <span className="mx-2">•</span>
                <span>9 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Prijzen</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Wat kost 1 uur airco draaien? Stroomkosten 2026 + Rekenvoorbeelden
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Kort antwoord: <strong>een airco van 3,5 kW kost ongeveer €0,30 tot €0,50 per uur bij koelen</strong> en
                €0,20 tot €0,35 per uur bij verwarmen (tarief 2026, gemiddeld €0,34/kWh). De precieze kosten hangen af
                van vermogen, COP-waarde, buitentemperatuur en hoe goed uw woning geïsoleerd is. Hieronder leggen onze
                monteurs het uit met echte rekenvoorbeelden — zonder marketingpraat.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS TABLE ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Het belangrijkste in één overzicht</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord (2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Kosten 1 uur koelen (3,5 kW airco)</td>
                      <td className="py-2">€0,30 – €0,50</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Kosten 1 uur verwarmen (3,5 kW airco)</td>
                      <td className="py-2">€0,20 – €0,35</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Is verwarmen met airco goedkoper dan gas?</td>
                      <td className="py-2">Ja, tot ca. 0°C buiten. Daaronder vergelijkbaar.</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Gemiddeld stroomtarief Nederland 2026</td>
                      <td className="py-2">€0,30 – €0,38 per kWh (incl. belasting)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Zuinigste instelling voor verwarmen</td>
                      <td className="py-2">Setpoint 19–20°C, continu aan in plaats van aan/uit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Advies over het juiste airco-vermogen voor uw woning?</h3>
                <p className="mb-4">
                  Een te groot systeem verbruikt onnodig veel. Een te klein systeem draait continu op vol vermogen
                  en is net zo duur. Onze monteurs berekenen gratis welk vermogen bij uw ruimte past.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag gratis vermogens-advies aan
                </Link>
              </div>

              {/* ==================== SECTION 1 ==================== */}
              <h2>1. De formule: zo reken je het zelf uit</h2>

              <p>
                De kosten van een airco per uur zijn simpel:
              </p>

              <div className="not-prose bg-gray-100 border border-gray-300 rounded-lg p-6 text-center my-6">
                <p className="text-xl font-mono font-semibold text-gray-800">
                  Kosten per uur = (vermogen in kW ÷ COP) × tarief in €/kWh
                </p>
              </div>

              <p>
                Twee termen die u moet kennen:
              </p>

              <ul>
                <li>
                  <strong>Vermogen (kW)</strong>: het <em>afgegeven</em> koel- of verwarmingsvermogen dat op het
                  typeplaatje staat. Populaire splitunits hebben 2,5 kW, 3,5 kW, 5,0 kW of 7,0 kW.
                </li>
                <li>
                  <strong>COP (Coefficient of Performance)</strong>: hoeveel energie de airco afgeeft per kW stroom die
                  hij gebruikt. Moderne A+++ airco's hebben een COP tussen 3,8 en 4,5 bij koelen en 3,5 tot 4,2 bij
                  verwarmen. <strong>Een COP van 4 betekent: voor elke 1 kWh stroom krijgt u 4 kWh warmte of koude.</strong>
                </li>
              </ul>

              <h3>Voorbeeld berekening</h3>

              <p>
                Een 3,5 kW airco met COP 4,0 bij een stroomprijs van €0,34/kWh:
              </p>

              <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-4">
                <p className="font-mono text-gray-800 mb-0">
                  (3,5 ÷ 4,0) × €0,34 = 0,875 × €0,34 = <strong>€0,30 per uur</strong>
                </p>
              </div>

              <p>
                Goed om te weten: <strong>deze COP geldt alleen bij ideale omstandigheden</strong> (buitentemperatuur
                rond 7°C bij verwarmen, rond 35°C bij koelen). In vries-omstandigheden zakt de COP naar 2,5–3,0 en
                worden de kosten dus 30–40% hoger dan deze basisberekening.
              </p>

              {/* ==================== SECTION 2: TABLE ==================== */}
              <h2>2. Kosten per uur op basis van vermogen (tabel 2026)</h2>

              <p>
                We hebben de berekening voor u uitgewerkt voor verschillende vermogens en COP-waardes.
                Stroomtarief: <strong>€0,34/kWh</strong> (gemiddeld variabel tarief Nederland, april 2026).
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Vermogen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Woningtype</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Koelen (COP ~4,0)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Verwarmen mild (COP ~3,8)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Verwarmen koud (COP ~2,8)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>2,5 kW</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Slaapkamer / klein kantoor</td>
                      <td className="border border-gray-300 px-4 py-2">€0,21 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,22 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,30 / uur</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>3,5 kW</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Woonkamer 25–35 m²</td>
                      <td className="border border-gray-300 px-4 py-2">€0,30 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,31 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,43 / uur</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>5,0 kW</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Woonkamer 40–55 m²</td>
                      <td className="border border-gray-300 px-4 py-2">€0,43 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,45 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,61 / uur</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>7,0 kW</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Open keuken-woonkamer 60–80 m²</td>
                      <td className="border border-gray-300 px-4 py-2">€0,60 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,63 / uur</td>
                      <td className="border border-gray-300 px-4 py-2">€0,85 / uur</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Let op: dit zijn kosten als de airco <strong>continu op vol vermogen</strong> zou draaien. In de praktijk
                wisselt een moderne inverter-airco zijn vermogen af en verbruikt hij gemiddeld 50–70% minder zodra de
                setpoint-temperatuur is bereikt.
              </p>

              {/* ==================== SECTION 3 ==================== */}
              <h2>3. Wat kost een hele dag airco aan?</h2>

              <p>
                Een realistisch scenario voor een Nederlandse woonkamer (3,5 kW, COP 4,0):
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">☀️ Zomerdag koelen</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Airco aan van 14:00–22:00 (8 uur), in deeltijd op vol vermogen, grotendeels in modulerende modus.
                  </p>
                  <p className="text-lg font-bold text-blue-900">
                    €1,20 – €1,80 per dag
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-5 rounded-lg">
                  <h4 className="font-bold text-amber-900 mb-2">❄️ Winterdag verwarmen</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Airco aan van 07:00–23:00 (16 uur) op 20°C, buiten 2°C. Continu modulerend, geen aan/uit.
                  </p>
                  <p className="text-lg font-bold text-amber-900">
                    €3,20 – €5,50 per dag
                  </p>
                </div>
              </div>

              <p>
                <strong>Gemiddeld per stookseizoen</strong> (oktober–april, ca. 180 dagen) kost verwarmen met een
                3,5 kW airco in een goed geïsoleerde Limburgse rijwoning tussen de <strong>€450 en €900</strong>. Ter
                vergelijking: dezelfde warmtehoeveelheid met een HR-ketel op gas (€1,60/m³) kost doorgaans
                €750 tot €1.350, afhankelijk van uw ketelefficiëntie.
              </p>

              {/* ==================== SECTION 4 ==================== */}
              <h2>4. Is verwarmen met airco echt goedkoper dan gas?</h2>

              <p>
                Ja — <strong>bij buitentemperaturen boven ongeveer 0°C</strong>. Daaronder wordt het rendement van de
                airco snel minder en komt het dichter bij de kosten van gas. Dit noemen we het <strong>kantelpunt</strong>.
              </p>

              <h3>De cijfers naast elkaar (per kWh warmte)</h3>

              <div className="not-prose overflow-x-auto my-4">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Warmtebron</th>
                      <th className="border border-gray-300 px-4 py-2">Prijs per kWh warmte</th>
                      <th className="border border-gray-300 px-4 py-2">Bij welke temperatuur optimaal?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Airco (COP 4,0 bij 7°C)</td>
                      <td className="border border-gray-300 px-4 py-2">€0,085</td>
                      <td className="border border-gray-300 px-4 py-2">Boven 5°C</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Airco (COP 2,8 bij -5°C)</td>
                      <td className="border border-gray-300 px-4 py-2">€0,122</td>
                      <td className="border border-gray-300 px-4 py-2">Break-even met gas</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">HR-ketel gas (€1,60/m³, 95% rendement)</td>
                      <td className="border border-gray-300 px-4 py-2">€0,168</td>
                      <td className="border border-gray-300 px-4 py-2">Werkt bij alle temperaturen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Elektrische verwarming (1:1)</td>
                      <td className="border border-gray-300 px-4 py-2">€0,340</td>
                      <td className="border border-gray-300 px-4 py-2">Nooit voordelig</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Conclusie voor Limburg:</strong> van maart tot en met november is airco-verwarming structureel
                goedkoper dan gas. Alleen bij echte vorstperiodes (december tot februari, vaak <strong>onder -3°C</strong>)
                komt de efficiëntie zo dicht bij gas dat het verschil marginaal is — en dan zijn gas-kwh nog steeds
                duurder per geleverde warmte.
              </p>

              {/* ==================== SECTION 5 ==================== */}
              <h2>5. Koelen of verwarmen: wat kost meer?</h2>

              <p>
                <strong>Verwarmen kost meestal ietsje meer per uur dan koelen</strong>, maar dat komt door twee dingen:
              </p>

              <ol>
                <li>
                  Bij verwarmen moet de airco vaak een <em>groter</em> temperatuurverschil overbruggen (20°C binnen vs.
                  2°C buiten = 18°C verschil) dan bij koelen (22°C binnen vs. 28°C buiten = 6°C verschil).
                </li>
                <li>
                  De COP is in de winter bij lage buitentemperaturen significant lager dan zomers bij koelen.
                </li>
              </ol>

              <p>
                In praktijk: als u in de zomer 2–3 uur per dag koelt en in de winter 12–15 uur per dag verwarmt,
                is de winter-energierekening voor de airco 6–10× hoger. Dat zegt niks over efficiëntie — het is gewoon
                meer draaiuren.
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🔥 Ook stoken met uw airco?</h3>
                <p className="text-gray-700 mb-4">
                  Niet elke airco is geschikt voor efficiënt verwarmen bij lage temperaturen. Onze monteurs adviseren
                  welke modellen in Limburg wél goede COP-waardes halen tot -10°C buiten. Dit bespaart jaarlijks
                  honderden euro's op uw stookrekening.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan gratis advies in
                </Link>
              </div>

              {/* ==================== SECTION 6 ==================== */}
              <h2>6. Hoe stook of koel je het zuinigst met airco?</h2>

              <p>
                Onze monteurs zien dezelfde misverstanden steeds terug. Vijf tips die echt schelen:
              </p>

              <div className="not-prose space-y-4 my-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">1. Laat hem aanstaan, niet continu aan/uit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Een moderne inverter-airco heeft 3–5× meer stroom nodig om een koude woning op te warmen dan om
                    een al-verwarmde woning op temperatuur te houden. Zet hem 's ochtends aan en laat hem de hele dag
                    moduleren op een vast setpoint.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">2. Setpoint iets lager dan gewenste temperatuur</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Zet bij verwarmen de thermostaat op 19–20°C in plaats van 22°C. Elke graad minder = 6–8% minder
                    energieverbruik. Bij koelen: 24–25°C is comfortabel, niet 20°C.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">3. Deuren dicht, ramen dicht</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Klinkt vanzelfsprekend maar is de grootste besparing. Een airco in een open gang met kieren is
                    tot 50% minder efficiënt dan in een afgesloten ruimte.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">4. Filters schoonhouden</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Een vies filter kost 10–15% extra stroom. Filters binnen elke 2 maanden uitspoelen. Buitenunit:
                    1× per jaar professioneel laten reinigen. Onderhoud bij StayCool is <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">gratis</Link> voor klanten die via ons installeren.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">5. Juist vermogen voor de ruimte</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Een te zware airco blaast snel koud en schakelt uit — dat is het on/off-patroon dat energie verspilt.
                    Te licht vermogen draait juist continu op vol vermogen. <Link to="/capacity-calculator" className="text-blue-600 hover:underline">Bereken het benodigde vermogen</Link>.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 7: FAQ ==================== */}
              <h2>7. Veelgestelde vragen</h2>

              <h3>Wat kost 1 uur verwarmen met airco?</h3>
              <p>
                Voor een gangbare 3,5 kW airco in een Nederlandse woning ligt het verbruik tussen de €0,20 en €0,35 per
                uur (tarief €0,34/kWh, 2026). Bij vorst stijgt dit naar €0,40–€0,50 per uur omdat de COP afneemt.
              </p>

              <h3>Wat kost een hele dag airco aan?</h3>
              <p>
                Een realistische winter-dag (16 uur verwarmen op 20°C, buiten 2–5°C): tussen de €3,20 en €5,50. Een
                zomerdag met 8 uur koelen: €1,20 tot €1,80.
              </p>

              <h3>Is stoken met airco goedkoper dan gas?</h3>
              <p>
                Ja, bij buitentemperaturen boven 0°C ongeveer 30–50% goedkoper per geleverde kWh warmte. Onder -5°C
                worden de kosten vergelijkbaar met gas. Over een heel Nederlands stookseizoen is airco-verwarming
                gemiddeld 25–40% goedkoper dan gas — als uw woning goed geïsoleerd is.
              </p>

              <h3>Wat is het kantelpunt bij verwarmen met airco?</h3>
              <p>
                Het punt waarop de COP van de airco zo laag wordt dat verwarmen even duur is als gas. Bij moderne
                airco's ligt dit rond -5 tot -8°C buitentemperatuur. Dat komt in Limburg gemiddeld 10–20 dagen per jaar
                voor. Voor die dagen houden veel klanten de gasketel achter de hand (hybride opzet).
              </p>

              <h3>Hoeveel euro kost een airco per uur?</h3>
              <p>
                Tussen de €0,20 (2,5 kW inverter in deeltijd) en €0,85 (7,0 kW op vol vermogen in de winter). De meeste
                klanten die wij in <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link>,
                <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline mx-1">Heerlen</Link> en
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline mx-1">Sittard</Link> helpen,
                zitten op een gemiddelde van €0,30 tot €0,45 per actieve uur.
              </p>

              <h3>Verbruikt een airco veel stroom in standby?</h3>
              <p>
                Minimaal. Een moderne splitunit in standby verbruikt 1–3 watt, dat is minder dan €3 per jaar.
                De stekker eruit halen scheelt dus niets noemenswaardigs — en is bovendien niet aan te raden omdat
                de vorstbeveiliging dan uitstaat.
              </p>

              <h3>Heeft een airco een aparte groep nodig?</h3>
              <p>
                Voor splitunits tot 3,5 kW meestal niet — die kunnen op een bestaande groep zitten mits er ruimte is.
                Vanaf 5,0 kW adviseren onze monteurs wél een aparte groep. Bij multisplit-systemen altijd een aparte
                groep. Dit wordt bij elke StayCool-installatie bij u thuis beoordeeld en indien nodig meegenomen in de offerte.
              </p>

              {/* ==================== CTA 3 (FINAL) ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Concrete kosten voor úw woning?</h3>
                <p className="mb-4">
                  Onze monteurs komen gratis langs, meten uw ruimte, bekijken uw isolatie en rekenen de
                  werkelijke jaarlijkse stroomkosten uit — inclusief terugverdientijd als u van gas overstapt.
                  Dit vrijblijvende advies kost u niets.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag gratis woning-analyse aan
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg — wat je moet weten in 2026
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">
                    Waarom regelmatig airco-onderhoud essentieel is voor efficiënt stroomverbruik
                  </Link>
                </li>
                <li>
                  <Link to="/airco-verwarming-kosten-besparing" className="text-blue-600 hover:underline">
                    Airco als verwarming: kosten & besparing
                  </Link>
                </li>
              </ul>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
