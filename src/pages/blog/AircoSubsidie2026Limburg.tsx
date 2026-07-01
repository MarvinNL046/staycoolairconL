import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoSubsidie2026Limburg() {
  return (
    <>
      <MetaTags
        title="Airco subsidie 2026: krijg je die wel? Eerlijke uitleg + Limburg"
        description="Eerlijk: een split-airco krijgt geen ISDE-subsidie in 2026 (ISDE is voor lucht-water/hybride warmtepompen). Ook geen 9% BTW — airco is 21%. Wat wél kan in Limburg."
        keywords="airco subsidie 2026, isde airco, warmtepomp subsidie limburg, airco subsidie gemeente, isde lucht-lucht warmtepomp, btw airco"
        canonicalUrl="https://staycoolairco.nl/blog/airco-subsidie-2026-limburg"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco subsidie 2026: krijg je die wel? Eerlijke uitleg + Limburgse regelingen",
          description: "Eerlijke uitleg over airco en subsidie in 2026: een split-airco krijgt geen ISDE en geen verlaagd BTW-tarief. Wat wél kan: gemeentelijke regelingen, zakelijke BTW-aftrek en de energiebesparing zelf.",
          datePublished: "2026-04-17",
          image: "https://staycoolairco.nl/images/blog/airco-subsidie-2026-limburg.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Kun je subsidie krijgen voor een airco?",
            "answer": "Nee. Een split-airco is technisch een lucht-lucht warmtepomp en die staat niet op de ISDE-apparatenlijst van RVO. Ook een airco die kan verwarmen krijgt geen ISDE. ISDE geldt alleen voor lucht-water warmtepompen, hybride warmtepompen, bodemwarmtepompen, warmtepompboilers en zonneboilers."
            },
            {
            "question": "Krijg ik ISDE als mijn airco ook kan verwarmen?",
            "answer": "Nee, ook dan niet. Een airco met verwarmingsfunctie blijft een lucht-lucht warmtepomp en die staat niet op de RVO-meldcodelijst voor ISDE. Andere installateurs of blogs beloven dit soms ten onrechte."
            },
            {
            "question": "Betaal ik 9% of 21% BTW op een airco-installatie?",
            "answer": "21%. Op airco-installatie geldt het standaard BTW-tarief van 21%. Er is geen verlaagd 9%-tarief voor airco; dat 9%-tarief geldt voor isolatiewerk aan woningen ouder dan 2 jaar. Bent u ondernemer met zakelijk gebruik, dan kunt u de 21% BTW meestal wel als voorbelasting terugvragen."
            },
            {
            "question": "Welke postcodes komen in aanmerking voor €10.000 subsidie?",
            "answer": "Er is geen landelijke \"€10.000 airco-subsidie\" per postcode. Hoge bedragen zoals deze horen bij gemeentelijke aardgasvrij-pilots of collectieve verduurzamingsprojecten — niet bij individuele airco-installaties. Check via energiesubsidiewijzer.nl wat voor uw adres werkelijk beschikbaar is."
            },
            {
            "question": "Wat kan ik dan wél aan financieel voordeel verwachten?",
            "answer": "Drie dingen: (1) soms een gemeentelijke energieregeling — wisselt per gemeente, check uw gemeentewebsite; (2) zakelijke BTW-teruggave als u ondernemer bent; (3) vooral de energiebesparing zelf — een airco-warmtepomp bespaart op een Limburgs rijtjeshuis typisch €700–€1.200 per jaar op stookkosten, met een terugverdientijd van 4-6 jaar zonder subsidie."
            },
            {
            "question": "Een installateur belooft mij ISDE of 9% BTW op de airco. Klopt dat?",
            "answer": "Vrijwel zeker niet. Vraag om een schriftelijke onderbouwing: de specifieke ISDE-categorie of de wettelijke grond voor 9% BTW. Voor een split-airco bestaan die niet — op de factuur hoort 21% BTW te staan en er komt geen ISDE-uitkering. Dit is een reden om ook de andere posten in die offerte kritisch te bekijken."
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
              { label: 'Airco subsidie 2026 Limburg' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>17 april 2026</span>
                <span className="mx-2">•</span>
                <span>8 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Subsidie</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco subsidie 2026: krijg je die wel? Het eerlijke verhaal + Limburgse regelingen
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Kort antwoord: <strong>op een gewone split-airco krijgt u in 2026 geen ISDE-subsidie</strong> — ook niet
                als de airco kan verwarmen. Technisch is dat een <strong>lucht-lucht warmtepomp</strong>, en die staat
                niet op de ISDE-lijst van RVO. Ook een verlaagd 9% BTW-tarief geldt niet voor airco (dat is voor isolatie);
                u betaalt gewoon 21%. Andere sites beweren soms van wel — wij zijn er eerlijk over. Hieronder leest u wat
                er <em>wél</em> kan, en hoe u het voor uw adres checkt.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
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
                      <td className="py-2 pr-4">Krijg ik ISDE op een gewone airco?</td>
                      <td className="py-2">Nee — een split-airco staat niet op de ISDE-lijst</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Krijg ik ISDE op een airco die ook verwarmt?</td>
                      <td className="py-2">Ook niet — het blijft een lucht-lucht warmtepomp</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Welk BTW-tarief geldt op airco?</td>
                      <td className="py-2">21% (geen verlaagd 9%-tarief; dat is voor isolatie)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Wat krijgt wél ISDE?</td>
                      <td className="py-2">Lucht-water, hybride en bodemwarmtepompen</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Zijn er extra regelingen in Limburg?</td>
                      <td className="py-2">Soms gemeentelijk — zie hieronder</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-4 mb-0">
                  Bron: <a href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">RVO.nl — ISDE woningeigenaren (feb 2026)</a>
                </p>
              </div>

              {/* ==================== SECTION 1 ==================== */}
              <h2>1. Waarom een airco géén ISDE-subsidie krijgt</h2>

              <p>
                De Nederlandse overheid wil de energietransitie versnellen. Subsidies zoals de <strong>ISDE
                (Investeringssubsidie duurzame energie en energiebesparing)</strong> zijn er specifiek voor apparaten
                die <em>de gasketel vervangen</em> — dus systemen die water verwarmen voor uw radiatoren of vloerverwarming.
              </p>

              <p>
                Een split-airco verwarmt de <em>lucht</em> in een kamer, niet het cv-water. Technisch heet dat een
                <strong> lucht-lucht warmtepomp</strong>. Efficiënt en milieuvriendelijk — maar de ISDE-apparatenlijst
                van RVO bevat géén lucht-lucht warmtepompen. Een aanvraag voor een split-airco wordt daarom door RVO
                afgewezen, ook als het toestel kan verwarmen.
              </p>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r my-6">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>⚠️ Veelgemaakte fout:</strong> "mijn airco kan verwarmen, dus het is een warmtepomp en krijgt
                  ISDE." Dat klopt niet. Verwarmen maakt het een <strong>lucht-lucht</strong> warmtepomp, en juist die
                  categorie is uitgesloten van ISDE. ISDE is er voor <strong>lucht-water</strong>, hybride en
                  bodemwarmtepompen. Laat u niet met een verkeerde belofte een offerte in praten.
                </p>
              </div>

              {/* ==================== SECTION 2 ==================== */}
              <h2>2. En het BTW-tarief? 21%, geen 9%</h2>

              <p>
                Een tweede hardnekkig misverstand: dat u op een airco 9% BTW zou betalen in plaats van 21%. Ook dat
                klopt niet. Het verlaagde 9%-tarief geldt voor <strong>isolatiewerk</strong> aan woningen ouder dan
                2 jaar — niet voor de installatie van een airco. Op airco-installatie geldt gewoon het standaardtarief
                van <strong>21% BTW</strong>. Belooft een installateur 9% op de airco? Dan klopt de factuur niet.
              </p>

              <p>
                Eén uitzondering: bent u <strong>ondernemer</strong> en gebruikt u de airco zakelijk, dan kunt u die
                21% BTW in de meeste gevallen als voorbelasting terugvragen bij de Belastingdienst. Voor particulieren
                kan dat niet — overleg dit met uw boekhouder.
              </p>

              {/* ==================== SECTION 3 ==================== */}
              <h2>3. Wat komt wél voor ISDE in aanmerking?</h2>

              <p>
                ISDE bestaat en is actief in 2026 — alleen niet voor split-airco's. Het geldt voor systemen die uw
                gas-cv (deels) vervangen:
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Systeem</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">ISDE in 2026?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Split-airco (lucht-lucht warmtepomp)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Nee — staat niet op de RVO-lijst</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Lucht-water warmtepomp</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Ja — vervangt de gas-cv</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Hybride warmtepomp (+ behoud gas-cv)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Bodemwarmtepomp</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Ja</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Wij installeren split-airco's en multi-split — onze specialisatie. Voor een lucht-water warmtepomp
                (volledige gas-cv-vervanging) verwijzen we u naar gespecialiseerde partners. We rekenen wel eerlijk voor
                u door welk systeem in uw situatie het beste uitpakt. Vaak verdient een split-airco <em>zonder</em>
                subsidie zich sneller terug dan een lucht-water systeem <em>mét</em> ISDE. Zie onze pagina over
                {' '}<Link to="/airco-subsidie" className="text-blue-600 hover:underline">airco subsidie</Link> voor de volledige uitleg.
              </p>

              <p className="text-sm text-gray-600">
                Volledige voorwaarden en actuele bedragen: <a href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">rvo.nl/isde/woningeigenaren</a>
              </p>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Wat kost het netto — zonder verzonnen subsidies?</h3>
                <p className="mb-4">
                  Wij zetten in de offerte gewoon de nette prijs incl. 21% BTW, en rekenen eerlijk voor wat u per jaar
                  bespaart op stookkosten. Geen valse ISDE-belofte, geen "u vraagt het later zelf terug".
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag een eerlijke offerte aan
                </Link>
              </div>

              {/* ==================== SECTION 4 ==================== */}
              <h2>4. Gemeentelijke en Limburgse regelingen</h2>

              <p>
                Waar het voor uw airco wél de moeite waard is om te kijken, zijn gemeentelijke regelingen. Gemeenten en
                provincie Limburg bieden soms aanvullende energiepremies of leningen. Deze variëren sterk per
                postcode — wat voor <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link> geldt,
                geldt vaak niet voor <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link> of
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline mx-1">Sittard</Link>.
              </p>

              <p>
                Voorbeelden van wat u kunt tegenkomen:
              </p>

              <ul>
                <li>
                  <strong>Gemeentelijke verduurzamingspremies</strong> — eenmalige bedragen (vaak €500–€2.500)
                  voor specifieke wijken of woningtypes, meestal voor verduurzaming algemeen
                </li>
                <li>
                  <strong>Energiebespaarlening Limburg / Warmtefonds</strong> — lening tegen lagere rente
                </li>
                <li>
                  <strong>Aardgasvrij-wijk-regelingen</strong> — soms hogere bedragen in specifiek aangewezen postcodes,
                  maar gekoppeld aan collectieve projecten (niet aan een losse airco)
                </li>
                <li>
                  <strong>Zakelijke BTW-teruggave</strong> — voor ondernemers die de airco zakelijk gebruiken
                </li>
              </ul>

              <h3>Hoe checkt u wat in ÚW postcode geldt?</h3>

              <p>
                Er is geen landelijk overzicht per postcode omdat regelingen vaak gebonden zijn aan pilotwijken of
                specifieke verduurzamingsplannen van een gemeente. Drie plekken om te kijken:
              </p>

              <div className="not-prose bg-gray-50 border border-gray-200 p-6 rounded-lg my-6">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>
                      <a href="https://www.energiesubsidiewijzer.nl/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                        Energiesubsidiewijzer.nl
                      </a>
                    </strong>
                    {' '}— officiële overheidsaggregator, vul uw postcode in voor alle actuele regelingen
                  </li>
                  <li>
                    <strong>Website van uw gemeente</strong> — zoek op "verduurzamen" of "energiesubsidie".
                    Loketten als "Verbeterjehuis" zijn er in de meeste Limburgse gemeenten
                  </li>
                  <li>
                    <strong>Vraag StayCool</strong> — wij werken dagelijks in heel Zuid-Limburg en weten uit ervaring
                    welke regelingen voor welke wijken daadwerkelijk lopen
                  </li>
                </ol>
              </div>

              <div className="not-prose bg-red-50 border-l-4 border-red-500 p-4 rounded-r my-6">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>⚠️ Let op:</strong> circulerende berichten over "€10.000 subsidie voor elke airco" kloppen
                  bijna nooit. Dergelijke bedragen horen bij <em>aardgasvrij-regelingen</em> voor hele wijken die aan
                  stadsverwarming of warmtepomp-coöperaties worden gekoppeld — niet bij standaard airco-installaties.
                  Laat u niet verleiden door misleidende advertenties.
                </p>
              </div>

              {/* ==================== SECTION 5 ==================== */}
              <h2>5. Het echte voordeel: energiebesparing</h2>

              <p>
                Geen subsidie op de airco betekent niet dat het financieel niet uitkomt — integendeel. Het voordeel zit
                in het lage verbruik. Een goed gedimensioneerde A+++ split-airco verwarmt voor ongeveer €0,07 per kWh
                warmte, fors goedkoper dan gas. Op een Limburgs rijtjeshuis bespaart dat typisch <strong>€700–€1.200
                per jaar</strong> op stookkosten, met een terugverdientijd van <strong>4-6 jaar</strong> — helemaal
                zonder subsidie.
              </p>

              <h3>Combineert u met isolatie?</h3>

              <p>
                Laat u tegelijk <strong>spouwmuur-, vloer- of dakisolatie</strong> aanbrengen, dan heeft dat wél zijn
                eigen gunstige regels: op isolatie-arbeid geldt 9% BTW, en isolatie kan losse subsidie krijgen. Dat
                staat los van de airco, maar samen zorgen ze voor een lager verbruik en een snellere terugverdientijd.
                Onze monteurs kunnen u doorverwijzen naar betrouwbare isolatiebedrijven in de regio.
              </p>

              {/* ==================== SECTION 6 ==================== */}
              <h2>6. Werkt StayCool met subsidieaanvragen?</h2>

              <p>
                We zijn hier vooral eerlijk over. Concreet:
              </p>

              <ul>
                <li>We beloven <strong>geen ISDE</strong> op een split-airco en geen 9% BTW — dat zou u alleen een teleurstelling opleveren</li>
                <li>Op de factuur staat het correcte tarief van <strong>21% BTW</strong>; het bedrag in de offerte is wat u betaalt</li>
                <li>We adviseren u welke <strong>gemeentelijke regelingen</strong> voor uw adres kunnen gelden</li>
                <li>Bent u ondernemer? Dan wijzen we op de mogelijkheid van <strong>zakelijke BTW-teruggave</strong></li>
                <li>Kiest u tóch voor een lucht-water of hybride warmtepomp? Dan verwijzen we u naar partners die ISDE direct in de offerte verrekenen</li>
              </ul>

              {/* ==================== CTA 2 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Eerlijke rekensom voor úw woning</h3>
                <p className="mb-4">
                  We maken een vrijblijvende offerte met:
                </p>
                <ul className="list-disc list-inside mb-4 text-blue-50">
                  <li>De nette installatieprijs incl. 21% BTW</li>
                  <li>Uw verwachte jaarlijkse besparing op stookkosten</li>
                  <li>De terugverdientijd zonder subsidie</li>
                  <li>Eventuele gemeentelijke regelingen voor uw postcode</li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag een eerlijke offerte aan
                </Link>
              </div>

              {/* ==================== FAQ ==================== */}
              <h2>7. Veelgestelde vragen</h2>

              <h3>Kun je subsidie krijgen voor een airco?</h3>
              <p>
                Nee. Een split-airco is technisch een lucht-lucht warmtepomp en staat niet op de ISDE-apparatenlijst
                van RVO. Ook een airco die kan verwarmen krijgt geen ISDE. ISDE geldt alleen voor lucht-water
                warmtepompen, hybride warmtepompen, bodemwarmtepompen, warmtepompboilers en zonneboilers.
              </p>

              <h3>Krijg ik ISDE als mijn airco ook kan verwarmen?</h3>
              <p>
                Nee, ook dan niet. Een airco met verwarmingsfunctie blijft een lucht-lucht warmtepomp en die staat
                niet op de RVO-meldcodelijst voor ISDE. Andere installateurs of blogs beloven dit soms ten onrechte.
              </p>

              <h3>Betaal ik 9% of 21% BTW op een airco-installatie?</h3>
              <p>
                21%. Op airco-installatie geldt het standaard BTW-tarief van 21%. Er is geen verlaagd 9%-tarief voor
                airco; dat 9%-tarief geldt voor isolatiewerk aan woningen ouder dan 2 jaar. Bent u ondernemer met
                zakelijk gebruik, dan kunt u de 21% BTW meestal wel als voorbelasting terugvragen.
              </p>

              <h3>Welke postcodes komen in aanmerking voor €10.000 subsidie?</h3>
              <p>
                Er is geen landelijke "€10.000 airco-subsidie" per postcode. Hoge bedragen zoals deze horen bij
                gemeentelijke aardgasvrij-pilots of collectieve verduurzamingsprojecten — niet bij individuele
                airco-installaties. Check via energiesubsidiewijzer.nl wat voor uw adres werkelijk beschikbaar is.
              </p>

              <h3>Wat kan ik dan wél aan financieel voordeel verwachten?</h3>
              <p>
                Drie dingen: (1) soms een gemeentelijke energieregeling — wisselt per gemeente; (2) zakelijke
                BTW-teruggave als u ondernemer bent; (3) vooral de energiebesparing zelf — een airco-warmtepomp
                bespaart op een Limburgs rijtjeshuis typisch €700–€1.200 per jaar op stookkosten, met een
                terugverdientijd van 4-6 jaar zonder subsidie.
              </p>

              <h3>Een installateur belooft mij ISDE of 9% BTW op de airco. Klopt dat?</h3>
              <p>
                Vrijwel zeker niet. Vraag om een schriftelijke onderbouwing: de specifieke ISDE-categorie of de
                wettelijke grond voor 9% BTW. Voor een split-airco bestaan die niet — op de factuur hoort 21% BTW te
                staan en er komt geen ISDE-uitkering. Dit is een reden om ook de andere posten in die offerte kritisch
                te bekijken.
              </p>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/airco-subsidie" className="text-blue-600 hover:underline">
                    Airco subsidie: de complete, eerlijke uitleg over ISDE en BTW
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg — wat je moet weten in 2026
                  </Link>
                </li>
                <li>
                  <Link to="/airco-verwarming-kosten-besparing" className="text-blue-600 hover:underline">
                    Airco als verwarming: kosten & besparing op langetermijn
                  </Link>
                </li>
              </ul>

              <p className="text-xs text-gray-500 mt-8 italic">
                Laatst gecontroleerd op: 17 april 2026. Bronnen: RVO.nl (ISDE-regeling woningeigenaren 2026),
                Energiesubsidiewijzer.nl, Belastingdienst (BTW-tarieven). Subsidiebedragen en -voorwaarden kunnen
                wijzigen — controleer altijd de actuele regels op rvo.nl vóór u een aanvraag doet.
              </p>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
