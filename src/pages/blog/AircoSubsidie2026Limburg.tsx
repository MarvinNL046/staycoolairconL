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
        title="Airco subsidie 2026: Wanneer wel, wanneer niet + Limburg regelingen"
        description="Pure koel-airco krijgt geen subsidie. Een airco met verwarmingsfunctie (lucht-lucht warmtepomp) komt wél in aanmerking voor minimaal €500 ISDE in 2026. Plus gemeentelijke regelingen in Limburg."
        keywords="airco subsidie 2026, isde airco, warmtepomp subsidie limburg, airco subsidie postcode, isde lucht-lucht warmtepomp, airco subsidie gemeente"
        canonicalUrl="https://staycoolairco.nl/blog/airco-subsidie-2026-limburg"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco subsidie 2026: Wanneer wel, wanneer niet + Limburg regelingen",
          description: "Duidelijke uitleg over welke airco's wél en welke geen subsidie krijgen in 2026. Plus de ISDE-regels en gemeentelijke aanvullingen in Limburg.",
          datePublished: "2026-04-17",
          image: "https://staycoolairco.nl/images/blog/airco-subsidie-2026-limburg.webp"
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
                Airco subsidie 2026: wanneer wel, wanneer niet + Limburgse regelingen
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Kort antwoord: <strong>een airco die alleen koelt krijgt geen subsidie</strong>. Een airco met verwarmingsfunctie
                (technisch: een <strong>lucht-lucht warmtepomp</strong>) komt wél in aanmerking voor minimaal €500 ISDE-subsidie
                in 2026. Dit bedrag kan oplopen als u tegelijkertijd isolatie laat aanbrengen. Daarnaast hebben sommige
                Limburgse gemeenten aanvullende regelingen. Hieronder leggen we precies uit wat geldt en hoe u het checkt.
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
                      <td className="py-2 pr-4">Krijg ik subsidie op een gewone airco?</td>
                      <td className="py-2">Nee, alleen koelen kwalificeert niet</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Krijg ik subsidie op een airco die ook verwarmt?</td>
                      <td className="py-2">Ja, via ISDE (min. €500, vaak meer)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Moet ik eigenaar-bewoner zijn?</td>
                      <td className="py-2">Ja, voor de ISDE-regeling</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Kan ik de subsidie verdubbelen?</td>
                      <td className="py-2">Ja, bij isoleren binnen 24 maanden</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Zijn er extra regelingen in Limburg?</td>
                      <td className="py-2">Afhankelijk van uw gemeente — zie hieronder</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-4 mb-0">
                  Bron: <a href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">RVO.nl — ISDE woningeigenaren (feb 2026)</a>
                </p>
              </div>

              {/* ==================== SECTION 1 ==================== */}
              <h2>1. Waarom pure koel-airco's géén subsidie krijgen</h2>

              <p>
                De Nederlandse overheid wil de energietransitie versnellen. Subsidies zoals de <strong>ISDE
                (Investeringssubsidie duurzame energie en energiebesparing)</strong> zijn er specifiek voor apparaten
                die <em>fossiele brandstoffen vervangen</em> — dus: gasloze of gas-armere verwarming.
              </p>

              <p>
                Een airco die alleen koelt, voegt stroomverbruik toe zonder gas te besparen. Vanuit het
                overheidsperspectief is dat geen verduurzaming. Daarom: <strong>geen subsidie op koel-only airco's</strong>.
              </p>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r my-6">
                <p className="text-sm text-gray-700 mb-0">
                  <strong>💡 Wist u dat?</strong> Veel moderne splitunits kunnen standaard zowel koelen als verwarmen,
                  ook al wordt het product verkocht als "airco". Dit type heet technisch een
                  <strong> lucht-lucht warmtepomp</strong>. Als u verwarming actief gebruikt, voldoet u mogelijk aan de
                  ISDE-voorwaarden — mits het model op de RVO-meldcodelijst staat.
                </p>
              </div>

              {/* ==================== SECTION 2 ==================== */}
              <h2>2. ISDE-subsidie voor lucht-lucht warmtepompen in 2026</h2>

              <p>
                De ISDE is de belangrijkste landelijke subsidie. Bij een (hybride) warmtepomp krijgt u <strong>minimaal
                €500</strong>. Het daadwerkelijke bedrag hangt af van:
              </p>

              <ul>
                <li>Het <strong>type</strong> warmtepomp (lucht-lucht, lucht-water, water-water, etc.)</li>
                <li>De <strong>meldcode</strong> van het specifieke model (deze bepaalt of het kwalificeert)</li>
                <li>Het <strong>COP-rendement</strong> bij lage temperaturen</li>
                <li>Of u de installatie combineert met isolatie</li>
              </ul>

              <h3>Hoe werkt het combinatie-voordeel?</h3>

              <p>
                Volgens RVO geldt: <em>"Laat u meer dan één isolatiemaatregel installeren? Dan verdubbelt het
                subsidiebedrag voor isolatie. Dit geldt ook als u een isolatiemaatregel combineert met de installatie
                van een warmtepomp, zonneboiler of aansluiting op een warmtenet."</em>
              </p>

              <p>
                Concreet: als u in februari een lucht-lucht warmtepomp laat installeren <em>en</em> in november van
                hetzelfde jaar uw dak isoleert, verdubbelt het isolatie-subsidiebedrag. De 24-maanden-klok start bij
                de eerste maatregel.
              </p>

              <h3>Voorwaarden voor ISDE (2026)</h3>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Voorwaarde</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Eigenaar-bewoner</strong></td>
                      <td className="border border-gray-300 px-4 py-2">U bent eigenaar én bewoont de woning zelf</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Meldcodelijst</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Het model staat op de officiële RVO-lijst</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Installatie door erkend bedrijf</strong></td>
                      <td className="border border-gray-300 px-4 py-2">F-gassen-gecertificeerde installateur</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Aanvraag binnen 24 maanden</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Na installatiedatum</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Factuur en betaalbewijs</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Inclusief datum, bedrag en typenummer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600">
                Volledige voorwaarden en actuele bedragen: <a href="https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">rvo.nl/isde/woningeigenaren</a>
              </p>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Weten welk model subsidie oplevert?</h3>
                <p className="mb-4">
                  Wij werken alleen met airco's die op de RVO-meldcodelijst staan én goede prestaties leveren
                  bij Limburgse winters (COP boven 3,5 tot -5°C). Onze monteurs leggen u uit wat het netto kost
                  na aftrek van de subsidie.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag subsidie-check aan
                </Link>
              </div>

              {/* ==================== SECTION 3 ==================== */}
              <h2>3. Gemeentelijke en Limburgse regelingen</h2>

              <p>
                Naast ISDE kunnen gemeenten en provincie Limburg aanvullende regelingen aanbieden. Deze variëren sterk
                per postcode — wat voor <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link> geldt,
                geldt vaak niet voor <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link> of
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline mx-1">Sittard</Link>.
              </p>

              <p>
                Voorbeelden van wat u kunt tegenkomen:
              </p>

              <ul>
                <li>
                  <strong>Gemeentelijke verduurzamingspremies</strong> — eenmalige bedragen (vaak €500–€2.500)
                  voor specifieke wijken of woningtypes
                </li>
                <li>
                  <strong>Energiebespaarlening Limburg</strong> — lening tegen lagere rente, koppeling aan ISDE mogelijk
                </li>
                <li>
                  <strong>Aardgasvrij-wijk-regelingen</strong> — soms tot €10.000+ in specifiek aangewezen postcodes
                </li>
                <li>
                  <strong>Warmtefonds Nederland</strong> — rentevrije leningen voor lage inkomens
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
                    <strong>Website van uw gemeente</strong> — zoek op "verduurzamen" of "subsidie airconditioning".
                    Loketten als "Verbeterjehuis" zijn er in de meeste Limburgse gemeenten
                  </li>
                  <li>
                    <strong>Vraag StayCool</strong> — wij werken dagelijks met subsidie-aanvragen in heel Zuid-Limburg
                    en weten uit ervaring welke regelingen voor welke wijken daadwerkelijk lopen
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

              {/* ==================== SECTION 4 ==================== */}
              <h2>4. Stappenplan: hoe vraag ik de subsidie aan?</h2>

              <p>
                Het ISDE-aanvraagproces voor een lucht-lucht warmtepomp verloopt in 5 stappen:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Stap 1</div>
                  <h4 className="font-bold mb-2">Check voorwaarden</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Bent u eigenaar-bewoner? Staat het gewenste model op de meldcodelijst?
                    Beschikt u over een F-gassen-gecertificeerde installateur?
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Stap 2</div>
                  <h4 className="font-bold mb-2">Offerte & installatie</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Laat de warmtepomp installeren. Verzamel factuur, betaalbewijs en meldcode. Zorg dat de factuur
                    het typenummer van het apparaat vermeldt.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Stap 3</div>
                  <h4 className="font-bold mb-2">Aanvraag indienen</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Binnen 24 maanden na installatie via <a href="https://mijn.rvo.nl/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">mijn.rvo.nl</a>.
                    DigiD of eHerkenning nodig.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Stap 4</div>
                  <h4 className="font-bold mb-2">Bevestiging & uitbetaling</h4>
                  <p className="text-sm text-gray-700 m-0">
                    RVO beoordeelt uw aanvraag doorgaans binnen 8 weken. Bij goedkeuring wordt het bedrag op uw
                    bankrekening gestort — geen voorschotten of facturen vooraf.
                  </p>
                </div>
              </div>

              <h3>Tip: bundel met isolatie voor extra voordeel</h3>

              <p>
                Veel klanten combineren installatie met <strong>spouwmuurisolatie, vloerisolatie of dakisolatie</strong>.
                Dat levert dubbele ISDE op voor de isolatie én zorgt dat de warmtepomp efficiënter werkt — lagere stookkosten,
                snellere terugverdientijd. Onze monteurs kunnen u doorverwijzen naar betrouwbare isolatiebedrijven in
                de regio.
              </p>

              {/* ==================== SECTION 5 ==================== */}
              <h2>5. Werkt StayCool met subsidieaanvragen?</h2>

              <p>
                We nemen u het administratieve werk uit handen waar we kunnen. Concreet:
              </p>

              <ul>
                <li>We installeren alleen modellen die op de <strong>actuele ISDE-meldcodelijst</strong> staan</li>
                <li>Op de factuur zetten we het <strong>exacte typenummer en de meldcode</strong> — essentieel voor RVO-goedkeuring</li>
                <li>We adviseren u welke aanvullende gemeentelijke regelingen voor uw adres gelden</li>
                <li>Bij complexe aanvragen (combinatie met isolatie, zakelijke ISDE) helpen we mee met het opstellen</li>
              </ul>

              <p>
                De aanvraag zelf blijft formeel uw verantwoordelijkheid bij RVO — maar met de correcte documenten komt
                u zelden voor verrassingen te staan.
              </p>

              {/* ==================== CTA 2 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Subsidie-rekenvoorbeeld voor úw woning</h3>
                <p className="mb-4">
                  We maken een vrijblijvende offerte met:
                </p>
                <ul className="list-disc list-inside mb-4 text-blue-50">
                  <li>Bruto installatiekosten</li>
                  <li>Verwachte ISDE-subsidie (met meldcode)</li>
                  <li>Gemeentelijke aanvullende regelingen voor uw postcode</li>
                  <li>Netto investering na alle subsidies</li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag subsidie-offerte aan
                </Link>
              </div>

              {/* ==================== FAQ ==================== */}
              <h2>6. Veelgestelde vragen</h2>

              <h3>Kun je subsidie krijgen voor een airco?</h3>
              <p>
                Alleen als de airco ook kan verwarmen (lucht-lucht warmtepomp) én het model op de RVO-meldcodelijst
                staat. Pure koel-airco's kwalificeren niet voor ISDE.
              </p>

              <h3>Welke postcodes komen in aanmerking voor €10.000 subsidie?</h3>
              <p>
                Er is geen landelijke "€10.000 airco-subsidie" per postcode. Hoge bedragen zoals deze horen bij
                gemeentelijke aardgasvrij-pilots of collectieve verduurzamingsprojecten — niet bij individuele
                airco-installaties. Check via energiesubsidiewijzer.nl wat voor uw adres werkelijk beschikbaar is.
              </p>

              <h3>Is er nog subsidie op airco in 2026?</h3>
              <p>
                Ja: de ISDE-regeling is actief in 2026, minimaal €500 per (hybride) warmtepomp met verwarmingsfunctie.
                Voor 2e+ lucht-water warmtepompen geldt vanaf 2026 een lager bedrag — het subsidiebeleid wordt jaarlijks
                geëvalueerd.
              </p>

              <h3>Kan ik ISDE krijgen als huurder?</h3>
              <p>
                Nee, de ISDE is alleen voor eigenaar-bewoners. Huurders moeten overleggen met hun verhuurder; die kan
                de subsidie wel aanvragen voor installatie in de huurwoning onder bepaalde voorwaarden.
              </p>

              <h3>Hoe lang duurt de aanvraag?</h3>
              <p>
                Na correct indienen bij RVO krijgt u meestal binnen 8 weken uitsluitsel. Uitbetaling volgt kort daarna.
                Zorg dat alle documenten (factuur, betaalbewijs, meldcode) volledig zijn om vertraging te voorkomen.
              </p>

              <h3>Wat als mijn aanvraag wordt afgewezen?</h3>
              <p>
                Meest voorkomende redenen: apparaat niet op meldcodelijst, ontbrekende documenten, of aanvraag na
                24 maanden. U kunt bezwaar indienen bij RVO binnen 6 weken na afwijzing. In de meeste gevallen is het
                simpelweg beter de aanvraag compleet opnieuw te doen met juiste documenten.
              </p>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                    Wat kost 1 uur airco draaien? Stroomkosten 2026 + rekenvoorbeelden
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
                Energiesubsidiewijzer.nl. Subsidiebedragen en -voorwaarden kunnen wijzigen — controleer altijd de
                actuele regels op rvo.nl vóór u een aanvraag doet.
              </p>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
