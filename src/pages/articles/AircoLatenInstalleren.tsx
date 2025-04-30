import React from 'react';
import { m } from 'framer-motion';
import MetaTags from '../../components/MetaTags';
import { ArrowLeft, Wrench, Calculator, ClipboardCheck, ShieldCheck, FileWarning, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoLatenInstalleren() {
  return (
    <>
      <MetaTags
        title="Airco laten installeren? Alles wat u moet weten | StayCool Airco"
        description="Een airco laten installeren? Ontdek de complete gids: voorbereiding, kosten, stappenplan en tips om de beste installateur te vinden in Limburg."
        keywords="airco laten installeren, airco installatie, airconditioning installeren, airco monteur, airco installateur limburg, kosten airco installatie"
        canonicalUrl="https://staycoolairco.nl/kennisbank/airco-laten-installeren"
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Airco laten installeren? Complete gids voor een zorgeloze installatie",
          "description": "Een airco laten installeren? Ontdek in deze complete gids alles over voorbereiding, kosten, het installatie-proces en tips voor het vinden van de beste installateur.",
          "author": {
            "@type": "Organization",
            "name": "StayCool Airco"
          },
          "publisher": {
            "@type": "Organization",
            "name": "StayCool Airco",
            "logo": {
              "@type": "ImageObject",
              "url": "https://staycoolairco.nl/images/logo.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://staycoolairco.nl/kennisbank/airco-laten-installeren"
          },
          "datePublished": "2025-04-30",
          "dateModified": new Date().toISOString().split('T')[0]
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/kennisbank"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar Kennisbank
            </Link>
          </nav>

          {/* Article Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Airco laten installeren
            </h1>
            <p className="text-xl text-gray-600">
              Een complete gids voor een zorgeloze airco-installatie
            </p>
          </m.div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="lead text-lg">
              Een airco installeren is een investering in comfort en woonkwaliteit. Of u nu wilt koelen in de zomer, 
              verwarmen in de winter of allergenen uit de lucht wilt filteren – een goed geïnstalleerde airconditioning 
              kan het binnenklimaat aanzienlijk verbeteren. In deze gids leest u alles over de voorbereiding, het proces, 
              de kosten en belangrijke overwegingen bij het laten installeren van een airco door een professional.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Inhoudsopgave</h2>
            <ul className="space-y-2">
              <li>
                <a href="#voorbereiding" className="text-blue-700 hover:text-blue-900">
                  1. Voorbereiding: wat moet u weten vóór de installatie
                </a>
              </li>
              <li>
                <a href="#proces" className="text-blue-700 hover:text-blue-900">
                  2. Het installatieproces stap voor stap
                </a>
              </li>
              <li>
                <a href="#kosten" className="text-blue-700 hover:text-blue-900">
                  3. Kosten van een airco-installatie
                </a>
              </li>
              <li>
                <a href="#vergunning" className="text-blue-700 hover:text-blue-900">
                  4. Vergunningen en regelgeving
                </a>
              </li>
              <li>
                <a href="#installateur" className="text-blue-700 hover:text-blue-900">
                  5. De juiste installateur kiezen
                </a>
              </li>
              <li>
                <a href="#faq" className="text-blue-700 hover:text-blue-900">
                  6. Veelgestelde vragen over airco-installatie
                </a>
              </li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 id="voorbereiding" className="flex items-center pt-6">
              <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
              Voorbereiding: wat moet u weten vóór de installatie
            </h2>
            <p>
              Een goede voorbereiding is essentieel voor een succesvolle airco-installatie. 
              Voordat u een airco laat installeren, zijn er verschillende aspecten die u moet overwegen:
            </p>

            <h3>Type airco bepalen</h3>
            <p>
              Afhankelijk van uw woning en wensen zijn er verschillende types airco's beschikbaar:
            </p>
            <ul>
              <li><strong>Single-split systeem:</strong> Eén binnenunit gekoppeld aan één buitenunit, ideaal voor één ruimte</li>
              <li><strong>Multi-split systeem:</strong> Meerdere binnenunits aangesloten op één buitenunit, geschikt voor meerdere ruimtes</li>
              <li><strong>Kanaalairco:</strong> Geïntegreerd in het plafond met luchtkanalen, nagenoeg onzichtbaar</li>
              <li><strong>Mobiele airco:</strong> Verplaatsbaar zonder vaste installatie (niet behandeld in dit artikel)</li>
            </ul>

            <h3>Juiste capaciteit berekenen</h3>
            <p>
              Om de juiste capaciteit te bepalen, moet u rekening houden met:
            </p>
            <ul>
              <li>Oppervlakte van de ruimte(s)</li>
              <li>Hoogte van het plafond</li>
              <li>Isolatiewaarde van de woning</li>
              <li>Raamoppervlak en oriëntatie (zuidzijde krijgt meer zon)</li>
              <li>Aantal personen dat normaal in de ruimte verblijft</li>
              <li>Aanwezige warmtebronnen (computers, keukenapparatuur, etc.)</li>
            </ul>
            <p>
              Een algemene vuistregel: voor een goed geïsoleerde ruimte heeft u ongeveer 100 W koelvermogen per m² nodig. 
              Een professionele installateur kan een nauwkeurige berekening maken tijdens een vooronderzoek.
            </p>

            <div className="bg-green-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-green-900 mt-0">
                <Wrench className="h-6 w-6 mr-2" />
                Gratis vooronderzoek
              </h3>
              <p className="mb-0">
                Bij StayCool Airco bieden wij een vrijblijvend vooronderzoek aan. Onze specialist bezoekt uw woning, 
                inventariseert uw wensen en adviseert over de beste oplossing voor uw situatie. 
                <a href="/contact" className="text-blue-600 hover:text-blue-800 ml-1">Plan direct een afspraak</a>.
              </p>
            </div>

            <h3>Beste locatie voor binnen- en buitenunit</h3>
            <p>
              De plaatsing van de units is cruciaal voor efficiëntie en comfort:
            </p>
            <ul>
              <li><strong>Binnenunit:</strong> Idealiter hoog aan de muur waar goede luchtcirculatie mogelijk is, niet boven zitplaatsen of bedden</li>
              <li><strong>Buitenunit:</strong> Op een stevige ondergrond, toegankelijk voor onderhoud, met voldoende ruimte voor luchtcirculatie</li>
            </ul>
            <p>
              Houd rekening met de afstand tussen binnen- en buitenunit; langere leidingen verminderen de efficiëntie en verhogen de kosten.
            </p>

            <h2 id="proces" className="flex items-center pt-6">
              <ClipboardCheck className="h-6 w-6 text-blue-600 mr-2" />
              Het installatieproces stap voor stap
            </h2>
            <p>
              Een professionele airco-installatie verloopt doorgaans volgens deze stappen:
            </p>

            <h3>1. Vooronderzoek en advies</h3>
            <p>
              De installateur bezoekt uw woning om de situatie te beoordelen en advies te geven over type, capaciteit en plaatsing.
            </p>

            <h3>2. Offerte en planning</h3>
            <p>
              Na het vooronderzoek ontvangt u een gedetailleerde offerte. Bij akkoord wordt een installatiedatum gepland.
            </p>

            <h3>3. Voorbereiding op de installatiedag</h3>
            <p>
              Zorg voor voldoende werkruimte rond de installatielocaties en vrije toegang tot elektriciteitsvoorzieningen.
            </p>

            <h3>4. Uitvoering van de installatie</h3>
            <ol>
              <li>Montage van de binnenunit aan de muur</li>
              <li>Plaatsing van de buitenunit op een geschikte locatie</li>
              <li>Boren van gaten voor leidingen en kabels</li>
              <li>Aansluiten van koelleidingen tussen binnen- en buitenunit</li>
              <li>Installeren van condenswaterafvoer</li>
              <li>Aansluiten van elektrische bedrading</li>
              <li>Vacumeren van het systeem om vocht te verwijderen</li>
              <li>Vullen met koudemiddel (indien nodig)</li>
              <li>Testen van het systeem en afstellen</li>
            </ol>
            <p>
              Een standaard installatie duurt gemiddeld 4-8 uur, afhankelijk van de complexiteit.
            </p>

            <h3>5. Instructie en oplevering</h3>
            <p>
              Na installatie krijgt u uitleg over de bediening, onderhoud en garantievoorwaarden.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-yellow-900 mt-0">
                <HelpCircle className="h-6 w-6 mr-2" />
                Goed om te weten
              </h3>
              <p className="mb-0">
                Een airco-installatie brengt altijd enige overlast met zich mee, zoals boorgeluiden en tijdelijke 
                onderbreking van elektriciteit. Een professioneel team zorgt voor minimale verstoring en laat de werkplek 
                netjes achter.
              </p>
            </div>

            <h2 id="kosten" className="flex items-center pt-6">
              <Calculator className="h-6 w-6 text-blue-600 mr-2" />
              Kosten van een airco-installatie
            </h2>
            <p>
              De totale kosten van een airco-installatie worden bepaald door verschillende factoren:
            </p>

            <h3>Aanschafkosten airco</h3>
            <p>
              De prijs van airco's varieert sterk op basis van merk, type en capaciteit:
            </p>
            <ul>
              <li><strong>Instapmodellen:</strong> €800 - €1.200</li>
              <li><strong>Middenklasse modellen:</strong> €1.200 - €2.000</li>
              <li><strong>Premium modellen:</strong> €2.000 - €3.500+</li>
              <li><strong>Multi-split systemen:</strong> €2.500 - €6.000+ (afhankelijk van aantal units)</li>
            </ul>

            <h3>Installatiekosten</h3>
            <p>
              De kosten van de installatie zelf variëren tussen €400 en €1.500, afhankelijk van:
            </p>
            <ul>
              <li>Complexiteit van de installatie</li>
              <li>Benodigde lengte van leidingen</li>
              <li>Toegankelijkheid van de installatielocatie</li>
              <li>Extra materialen (leidingkokers, ondersteuning voor buitenunit, etc.)</li>
            </ul>
            <p>
              Voor een standaard single-split installatie in een woonkamer kunt u rekenen op een totaalprijs 
              (inclusief airco en installatie) tussen €1.500 en €3.000.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-blue-900 mt-0">
                <Calculator className="h-6 w-6 mr-2" />
                Besparingen op lange termijn
              </h3>
              <p>
                Moderne airco's kunnen ook zeer efficiënt verwarmen. Door een airco te gebruiken voor verwarming 
                in plaats van een traditionele cv-ketel, kunt u tot 60% besparen op uw verwarmingskosten. Vooral 
                in combinatie met zonnepanelen is een airco een duurzame verwarmingsoptie.
              </p>
              <p className="mb-0">
                <Link to="/airco-verwarming-kosten-besparing" className="text-blue-600 hover:text-blue-800">
                  Lees meer over kostenbesparing met airco-verwarming
                </Link>
              </p>
            </div>

            <h2 id="vergunning" className="flex items-center pt-6">
              <FileWarning className="h-6 w-6 text-blue-600 mr-2" />
              Vergunningen en regelgeving
            </h2>
            <p>
              In sommige situaties moet u rekening houden met vergunningen en regels voor het installeren van een airco:
            </p>

            <h3>Omgevingsvergunning</h3>
            <p>
              In de volgende situaties kan een omgevingsvergunning nodig zijn:
            </p>
            <ul>
              <li>Bij plaatsing aan de voorkant van een woning in het zicht vanaf de openbare weg</li>
              <li>Bij installatie in of aan een monumentaal pand</li>
              <li>Wanneer de buitenunit een bepaalde afmeting overschrijdt</li>
              <li>Als de installatie het aanzicht van de wijk significant verandert</li>
            </ul>
            <p>
              De regels verschillen per gemeente. Raadpleeg uw gemeente of uw installateur voor de specifieke eisen in uw regio.
            </p>

            <h3>VvE-goedkeuring</h3>
            <p>
              Woont u in een appartementencomplex? Dan heeft u waarschijnlijk toestemming nodig van uw 
              Vereniging van Eigenaren (VvE) voor het plaatsen van een buitenunit.
            </p>

            <h3>F-gassenverordening</h3>
            <p>
              Volgens Europese regelgeving mag alleen een gecertificeerde monteur met een F-gassen certificaat werken 
              aan koelsystemen met gefluoreerde broeikasgassen (zoals het koudemiddel in een airco). Zorg dat uw 
              installateur over de juiste certificering beschikt.
            </p>

            <h2 id="installateur" className="flex items-center pt-6">
              <Wrench className="h-6 w-6 text-blue-600 mr-2" />
              De juiste installateur kiezen
            </h2>
            <p>
              De kwaliteit van de installatie is minstens zo belangrijk als de kwaliteit van de airco zelf. 
              Let op deze punten bij het kiezen van een installateur:
            </p>

            <h3>Certificeringen en erkenningen</h3>
            <ul>
              <li><strong>F-gassen certificering:</strong> Wettelijk verplicht voor werken met koudemiddelen</li>
              <li><strong>Merkdealerschap:</strong> Erkende dealers hebben specifieke training gehad</li>
              <li><strong>Kwaliteitskeurmerken:</strong> Zoals STEK-certificering</li>
            </ul>

            <h3>Ervaring en reputatie</h3>
            <p>
              Bekijk reviews en vraag naar referenties. Een ervaren installateur kan omgaan met verschillende 
              situaties en voorkomt potentiële problemen.
            </p>

            <h3>Service na installatie</h3>
            <p>
              Goede installateurs bieden:
            </p>
            <ul>
              <li>Duidelijke garantievoorwaarden</li>
              <li>Onderhoudsdiensten</li>
              <li>Snelle responsetijd bij problemen</li>
              <li>Advies over optimaal gebruik</li>
            </ul>

            <h3>Prijstransparantie</h3>
            <p>
              Een betrouwbare installateur geeft een gedetailleerde offerte zonder verborgen kosten.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-blue-900 mt-0">
                <ShieldCheck className="h-6 w-6 mr-2" />
                Waarom StayCool Airco kiezen?
              </h3>
              <ul className="mb-0">
                <li>F-gassen gecertificeerde monteurs</li>
                <li>Meer dan 10 jaar ervaring in Limburg</li>
                <li>Erkend dealer van toonaangevende merken</li>
                <li>Gratis vooronderzoek en advies</li>
                <li>5 jaar garantie op installatie</li>
                <li>Jaarlijks onderhoudsplan beschikbaar</li>
                <li>24/7 service bij storingen</li>
              </ul>
            </div>

            <h2 id="faq" className="flex items-center pt-6">
              <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
              Veelgestelde vragen over airco-installatie
            </h2>

            <div itemScope itemType="https://schema.org/FAQPage">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">Hoe lang duurt een airco-installatie?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Een standaard single-split installatie duurt ongeveer 4-8 uur. Multi-split systemen of complexere 
                      installaties kunnen 1-2 dagen in beslag nemen. De exacte duur hangt af van factoren zoals 
                      toegankelijkheid, leidinglengte en eventuele obstakels.
                    </p>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">Kan een airco in elke woning worden geïnstalleerd?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      In principe kan in bijna elke woning een airco worden geïnstalleerd. Er zijn uiteenlopende 
                      oplossingen voor verschillende woningsituaties. In sommige gevallen, zoals bij monumentale panden 
                      of appartementen zonder geschikte plaats voor een buitenunit, kunnen er beperkingen zijn. Een 
                      vooronderzoek brengt de mogelijkheden in kaart.
                    </p>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">Hoeveel onderhoud heeft een airco nodig?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Voor optimale prestaties en levensduur is jaarlijks onderhoud aanbevolen. Daarnaast dient u 
                      regelmatig (elke 2-4 weken) de filters te reinigen. Bij intensief gebruik kan vaker onderhoud 
                      nodig zijn. Een onderhoudscontract zorgt ervoor dat uw airco in topconditie blijft.
                    </p>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">Moet ik mijn huis aanpassen voor een airco-installatie?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      In de meeste gevallen zijn geen grote aanpassingen nodig. Er moeten wel gaten worden geboord voor 
                      de leidingen tussen binnen- en buitenunit, en er moet een geschikte stroomaansluiting aanwezig zijn. 
                      De installateur bespreekt dit tijdens het vooronderzoek en zorgt voor een nette afwerking.
                    </p>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">Kan ik zelf een airco installeren?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Nee, een split-airco installeren is geen doe-het-zelf project. Het werken met koudemiddelen is 
                      wettelijk voorbehouden aan gecertificeerde monteurs (F-gassen certificering). Daarnaast vereist 
                      een correcte installatie specifieke kennis en gereedschappen. Een onjuiste installatie kan leiden 
                      tot lekkage, inefficiëntie, schade aan het systeem of zelfs veiligheidsrisico's.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Klaar om uw airco te laten installeren?
              </h2>
              <p className="text-blue-700 mb-8">
                Onze experts staan klaar om u te helpen met een professionele airco-installatie op maat
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                >
                  Vraag een offerte aan
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                >
                  Bel direct: 046 202 1430
                </a>
              </div>
            </m.div>

            {/* Related articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde artikelen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/kennisbank/wat-kost-een-airco-plaatsen"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Wat kost een airco plaatsen?</h3>
                  <p className="text-gray-600 mt-2 flex-grow">Gedetailleerd overzicht van alle kosten bij het aanschaffen en installeren van airconditioning.</p>
                  <span className="text-blue-600 mt-4 inline-flex items-center">
                    Lees meer
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/kennisbank/airco-buitenunit-plaatsing"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Waar plaats je een airco buitenunit?</h3>
                  <p className="text-gray-600 mt-2 flex-grow">Tips en richtlijnen voor de optimale plaatsing van een airco buitenunit.</p>
                  <span className="text-blue-600 mt-4 inline-flex items-center">
                    Lees meer
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
