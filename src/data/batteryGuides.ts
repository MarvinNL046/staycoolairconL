import type { EvidenceGuideData } from '../components/EvidenceGuide';
const rvo: [string,string] = ['RVO: maatregelen binnen de ISDE voor woningeigenaren', 'https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren'];
const tax: [string,string] = ['Belastingdienst: thuisbatterij en btw', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/voor_wie_geldt_de_btw/thuisbatterij-en-btw/'];
const solar: [string,string] = ['Rijksoverheid: einde saldering op 1 januari 2027', 'https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/energie-thuis/salderingsregeling'];
const warranty: [string,string] = ['ACM ConsuWijzer: uw rechten bij garantie', 'https://consument.acm.nl/garantie-reparatie-geld-terug/garantie'];
const base='/seo/pillar-5-thuisbatterijen/';
type Draft = Omit<EvidenceGuideData, 'path'|'related'>;
const drafts: Record<string, Draft> = {
  'thuisbatterij-subsidie-2026': {
    title: 'Thuisbatterij subsidie 2026: welke regels gelden?', heading: 'Thuisbatterij subsidie in 2026: controleer de regeling',
    description: 'Een particuliere thuisbatterij valt buiten de ISDE. Bekijk wat subsidie, een lening en btw-teruggave betekenen voor uw begroting in 2026.',
    intro: 'Reken voor een losse particuliere thuisbatterij niet op ISDE-subsidie. In de actuele maatregelenlijst voor woningeigenaren staat geen thuisbatterij. Trek daarom geen verondersteld ISDE-bedrag af van een offerte.',
    sections: [
      ['ISDE is geen algemene subsidie op energieproducten', 'De naam van een regeling is onvoldoende om recht op subsidie vast te stellen. U moet zowel de maatregel als de doelgroep en voorwaarden controleren. Dat er zonnepanelen of een warmtepomp in de woning staan, maakt een losse batterij niet automatisch subsidiabel. Laat een aanbieder die subsidie belooft de exacte officiële regeling aanwijzen.'],
      ['Maak onderscheid tussen subsidie, lening en btw', 'Een subsidie hoeft u onder de voorwaarden doorgaans niet terug te betalen. Een lening moet u terugbetalen en kan rente en andere verplichtingen hebben. Btw-teruggave is een fiscale regeling met eigen voorwaarden. Het zijn dus verschillende posten. Tel ze niet zonder controle als kortingen bij elkaar op. Voor thuisbatterijen geldt geen algemeen 0%-btw-tarief zoals voor bepaalde zonnepanelen.'],
      ['Begroot eerst de volledige investering', 'Vergelijk de batterij, omvormer, installatie, eventuele aanpassingen aan de meterkast, sturing en abonnementskosten. Vraag een totaalprijs inclusief btw. Neem pas een voordeel op nadat u kunt onderbouwen dat het op uw adres, product en aanvraagmoment van toepassing is. Een te lage netto-aanname kan een terugverdienberekening sterk vertekenen.'],
      ['Controle vóór ondertekenen', 'Bewaar de voorwaarden en de datum waarop u ze heeft gecontroleerd. Vraag bij een lokale regeling of een aanvraag vóór de opdracht nodig is, welk budget beschikbaar is en welke bewijsstukken worden gevraagd. Een commerciële offerte is geen subsidiebeschikking. Bespreek de btw-gevolgen zo nodig met een belastingadviseur.'],
    ], sources: [rvo,tax],
  },
  'thuisbatterij-subsidie-limburg': {
    title: 'Thuisbatterij subsidie Limburg: lokale regels controleren', heading: 'Thuisbatterij subsidie in Limburg: wat moet u controleren?',
    description: 'Controleer per Limburgse gemeente of een regeling voor uw thuisbatterij geldt. Onderscheid subsidie, financiering en voorwaardelijke btw-teruggave.',
    intro: 'Een woonadres in Limburg geeft geen automatisch recht op subsidie voor een thuisbatterij. Lokale regelingen verschillen. Op deze pagina beloven we daarom geen gemeentelijke bedragen die niet voor uw adres zijn bevestigd.',
    sections: [
      ['Begin bij uw eigen gemeente', 'Zoek op de officiële website van uw gemeente naar energieopslag, verduurzaming en financiering. Controleer of een thuisbatterij letterlijk tot de toegestane maatregelen behoort. Een regeling voor isolatie, zonnepanelen of een warmtepomp hoeft geen batterij te dekken. De voorwaarden van een buurgemeente gelden niet automatisch op uw adres.'],
      ['Leg zes punten naast uw offerte', 'Controleer de doelgroep, de toegestane maatregel, de aanvraagperiode, het beschikbare budget, het aanvraagmoment en de vereiste facturen of technische documenten. Kijk ook of de uitvoerder aan specifieke eisen moet voldoen. Vraag bij onduidelijkheid schriftelijke uitleg aan het loket dat de regeling uitvoert voordat u de opdracht definitief maakt.'],
      ['Een duurzaamheidslening is geen korting', 'Bij financiering betaalt u de investering later terug. Vergelijk het totale terug te betalen bedrag, de looptijd en eventuele kosten. Vermeld een lening daarom niet als subsidie in uw begroting. Een lage maandlast zegt ook niet hoeveel een batterij werkelijk op uw stroomrekening bespaart.'],
      ['Landelijke regels blijven apart gelden', 'Een losse particuliere thuisbatterij valt buiten de huidige ISDE voor woningeigenaren. Btw-teruggave kan alleen als aan de fiscale voorwaarden wordt voldaan; zij is geen algemene btw-vrijstelling. Reken in de eerste begroting met de volledige installatieprijs en laat mogelijke voordelen afzonderlijk beoordelen.'],
    ], sources:[rvo,tax],
  },
  'thuisbatterij-btw-teruggave': {
    title:'Thuisbatterij btw terugvragen: voorwaarden en gevolgen', heading:'Btw op een thuisbatterij terugvragen: eerst de voorwaarden',
    description:'Btw terugvragen voor een thuisbatterij is niet automatisch. Lees over energiehandel, KOR, facturen en btw-verplichtingen bij privégebruik.',
    intro:'Voor een thuisbatterij geldt geen algemene 0%-btw-regeling. Onder voorwaarden kunt u betaalde btw op aanschaf en installatie terugvragen. Dat kan ook aangifte- en betalingsverplichtingen opleveren.',
    sections:[
      ['Controleer het gebruik van de batterij', 'De Belastingdienst stelt voorwaarden aan onder meer de handel in elektriciteit, het energiecontract en de aansturing van de batterij. Alleen zonnestroom voor uw eigen huishouden opslaan is geen voldoende reden om btw terug te vragen. Controleer de voorwaarden vóór de aankoop en bespreek hoe het beoogde gebruik wordt aangetoond.'],
      ['Let op de kleineondernemersregeling', 'De KOR heeft gevolgen voor het recht op aftrek. Als u meedoet, kunt u niet zonder meer de btw over de batterij terugvragen. Afmelden en het moment daarvan vragen aandacht, zeker als u al zonnepanelen heeft of ondernemer bent. Gebruik de stappen van de Belastingdienst voor uw eigen situatie; een standaard verkoopvoorbeeld volstaat niet.'],
      ['Teruggave kan latere verplichtingen geven', 'Btw terugontvangen is niet hetzelfde als belastingvrij bezit. Het privégebruik en de inkomsten uit elektriciteit kunnen gevolgen hebben voor aangiften en verschuldigde btw. Neem deze verplichtingen mee in uw vergelijking. Vraag uw adviseur ook wat wijzigingen in het gebruik of uw ondernemerschap betekenen.'],
      ['Controleer de rekensom op de offerte', 'De btw in een bedrag inclusief 21% btw is 21/121 van dat bedrag. Bij een rekenvoorbeeld van €6.050 inclusief btw is dat €1.050. Dat rekenkundige bedrag is nog geen toezegging dat u het mag terugvragen. Vergelijk offertes eerst inclusief btw en vermeld een mogelijke teruggaaf daarna als afzonderlijke, voorwaardelijke post.'],
    ],sources:[tax],
  },
  'thuisbatterij-terugverdientijd': {
    title:'Thuisbatterij terugverdientijd: kosten en aannames', heading:'Terugverdientijd van een thuisbatterij eerlijk berekenen',
    description:'Bereken terugverdientijd met investering, netto voordeel en kosten. Bekijk waarom een vast aantal jaren zonder uw verbruiksprofiel geen betrouwbare uitkomst is.',
    intro:'Een thuisbatterij heeft geen vaste terugverdientijd. De aanschafprijs, uw stroomprofiel, tarieven en kosten bepalen of de investering binnen de gebruiksduur wordt terugverdiend.',
    sections:[
      ['Deel de investering door het netto jaarvoordeel', 'Dit is een eenvoudige eerste berekening. Neem in de investering de volledige installatie en btw op, tenzij een fiscaal voordeel voor uw situatie is vastgesteld. Trek van het jaarlijkse voordeel de terugkerende kosten af. Als er geen positief netto voordeel is, kunt u met deze formule geen terugverdientijd berekenen.'],
      ['Tel dezelfde stroom niet twee keer mee', 'Stroom die u uit een batterij gebruikt, hoeft u mogelijk niet in te kopen. Maar u heeft voor de geladen zonnestroom een terugleververgoeding gemist en er gaat energie verloren bij laden en ontladen. Inkomsten uit handel en voordeel door eigen gebruik kunnen niet onbeperkt bij elkaar worden opgeteld: ze gebruiken dezelfde capaciteit en laadmomenten.'],
      ['Reken meerdere scenario’s door', 'Maak een voorzichtige, een middelste en een gunstige variant met expliciete tarieven. Neem degradatie, onderhoud, eventuele vervanging, sturingsabonnementen en financiering mee. Een batterij met een langere theoretische terugverdientijd dan de verwachte gebruiksduur verdient zich in dat scenario niet terug. Een garantieperiode bewijst geen rendement.'],
      ['Gebruik uurgegevens voor een investeringsbesluit', 'Jaarverbruik alleen laat niet zien wanneer uw woning stroom nodig heeft. Zomeroverschot en wintervraag sluiten niet vanzelf op elkaar aan. Vraag daarom een berekening met uw tijdsprofiel en de gekozen batterij. Onze calculator is een transparant jaarvoorbeeld; zij vervangt geen uurmodellering of offerte.'],
    ],sources:[solar],cta:['Reken mijn scenario door','/thuisbatterij-calculator'],
  },
  'thuisbatterij-besparing-berekenen': {
    title:'Thuisbatterij besparing berekenen: invoer en formule', heading:'Hoe berekent u de besparing van een thuisbatterij?',
    description:'Bekijk welke verbruiksgegevens, tarieven en verliezen nodig zijn om een thuisbatterijscenario door te rekenen. Met een calculator met zichtbare aannames.',
    intro:'Begin met uw eigen stroomgegevens. Een percentage of jaarbedrag uit een verkoopvoorbeeld zegt weinig zonder te weten welke tarieven, gebruiksmomenten en batterijeigenschappen zijn gebruikt.',
    sections:[
      ['Verzamel verbruik én teruglevering', 'Gebruik de jaarafrekening en, waar mogelijk, uur- of kwartierwaarden. Noteer hoeveel zonnestroom u direct gebruikt, hoeveel u teruglevert en op welke momenten u stroom inkoopt. Kijk ook naar toekomstige veranderingen, zoals een elektrische auto of een warmtepomp. Die veranderen niet alleen de hoeveelheid, maar ook de timing van de vraag.'],
      ['Reken met het verschil tussen kopen en terugleveren', 'In een eenvoudige berekening na salderen telt de vermeden inkoopprijs voor de bruikbare batterijstroom. Daar gaan de misgelopen terugleververgoeding en de verliezen vanaf. Bereken de invloed van terugleverkosten volgens uw eigen contract: die kunnen getrapt, vast of variabel zijn. Een batterij laat vaste netbeheerkosten niet automatisch verdwijnen.'],
      ['Controleer de grenzen van het model', 'De capaciteit in kWh is opslagruimte; vermogen in kW bepaalt hoe snel laden en ontladen mogelijk is. Ook de instellingen, minimale laadstatus en beschikbare zonneopbrengst begrenzen het gebruik. Een jaarlijks totaal zonder tijdsprofiel kan het voordeel overschatten. Benoem daarom of het om een eenvoudig voorbeeld of een simulatie met werkelijk verbruik gaat.'],
      ['Maak de uitkomst controleerbaar', 'Vraag een overzicht van de formule, tarieven, verliezen, kosten en aannames over de levensduur. Vergelijk de uitkomst ook met maatregelen zonder batterij, zoals stroom direct gebruiken wanneer de zonnepanelen opwekken. In onze calculator kunt u de aannames zelf aanpassen; de getoonde investering is een voorbeeld en geen verkoopprijs.'],
    ],sources:[solar],cta:['Open de thuisbatterijcalculator','/thuisbatterij-calculator'],
  },
  'thuisbatterij-saldering-2027': {
    title:'Thuisbatterij na salderen: wat verandert in 2027?', heading:'Thuisbatterij en het einde van salderen in 2027',
    description:'Salderen stopt op 1 januari 2027. Lees wat verandert bij terugleveren en hoe u een thuisbatterij vergelijkt met direct eigen gebruik van zonnestroom.',
    intro:'De salderingsregeling stopt op 1 januari 2027. Dat is geen geleidelijke afbouw tot 2031. Een thuisbatterij kan zonnestroom verschuiven naar een later moment, maar het einde van salderen garandeert geen rendabele investering.',
    sections:[
      ['Maak een aparte vergelijking voor 2027', 'Tot en met 2026 werkt de jaarlijkse verrekening anders dan daarna. Een berekening die alle opgeslagen stroom al als vermeden inkoop tegen het volle tarief telt, kan daardoor een verkeerd beeld geven voor 2026. Vergelijk uw situatie onder beide regimes met het contract dat in de betreffende periode geldt.'],
      ['Terugleveren blijft mogelijk', 'Het stoppen van salderen betekent niet dat teruggeleverde elektriciteit automatisch waardeloos wordt. Er blijft een vergoeding. Het contract en de toepasselijke regels bepalen hoe de vergoeding en terugleverkosten worden berekend. Trek daarom de misgelopen vergoeding af als u het voordeel van opslag berekent.'],
      ['Bekijk eerst direct eigen gebruik', 'Stroom direct gebruiken vermijdt opslagverlies en vraagt geen batterijcapaciteit. Kijk welke verbruikers u praktisch naar zonnige uren kunt verschuiven, zonder onnodig extra te verbruiken. Een batterij kan vervolgens het resterende verschil tussen opwek en vraag deels overbruggen. De zinvolle capaciteit volgt uit uw tijdsprofiel, niet alleen uit het aantal zonnepanelen.'],
      ['Kies op basis van kosten en doel', 'Wilt u vooral meer eigen stroom gebruiken, energiekosten verminderen of noodstroom? Dat zijn verschillende eisen. Noodstroom vraagt een daarvoor geschikte installatie en ontstaat niet automatisch met iedere batterij. Laat de gekozen functies, investering en verwachte inzet apart beschrijven voordat u systemen vergelijkt.'],
    ],sources:[solar],
  },
  'thuisbatterij-onderhoud': {
    title:'Thuisbatterij onderhoud: controle en service', heading:'Onderhoud van een thuisbatterij: wat vraagt uw systeem?',
    description:'Lees welke controles u veilig zelf uitvoert en wanneer een installateur nodig is. Onderhoud, updates en kosten hangen af van het batterijsysteem.',
    intro:'Een thuisbatterij vraagt aandacht voor de plaatsing, statusmeldingen en instructies van de fabrikant. De uitspraak “onderhoudsvrij” betekent niet dat controle, storingen of vervanging nooit nodig zijn.',
    sections:[
      ['Gebruik de handleiding van de exacte uitvoering', 'Onderhoudsintervallen en toegestane omstandigheden verschillen per model en installatie. Bewaar de handleiding, oplevergegevens en garantievoorwaarden. Houd de voorgeschreven ventilatieruimte vrij en voorkom opslag van spullen tegen de batterij. Neem geen vaste vrije afstand over uit een algemeen internetartikel; volg de instructie van uw uitvoering.'],
      ['Wat kunt u zelf controleren?', 'Controleer zonder de behuizing te openen of er zichtbare schade is en of de app of statusindicator een melding geeft. Houd de omgeving schoon en droog volgens de handleiding. Noteer de foutcode en het tijdstip bij een storing. Bij rook, brand of direct gevaar neemt u afstand en belt u 112; probeer het systeem niet zelf te repareren.'],
      ['Laat technisch werk door een deskundige doen', 'Werk aan aansluitingen, beveiligingen en de batterij zelf hoort bij een bevoegde vakpersoon. Vraag vooraf welke controles bij een servicebeurt horen en welke kosten gelden. Firmware, monitoring en toegang op afstand hebben eigen voorwaarden; ga er niet automatisch van uit dat updates of alle service inbegrepen zijn.'],
      ['Onderhoud en garantie zijn verschillende afspraken', 'Een commerciële garantie kan eisen stellen aan gebruik of onderhoud. Vraag naar de voorwaarden voor batterij, omvormer en installatiewerk afzonderlijk. Controleer ook arbeidsloon, transport en eventuele uitsluitingen. Een fabrikantgarantie verandert uw wettelijke rechten tegenover de verkoper niet. De airco-onderhoudsabonnementen van StayCool zijn geen automatisch servicecontract voor een thuisbatterij.'],
    ],sources:[warranty],
  },
  'thuisbatterij-levensduur-garantie': {
    title:'Thuisbatterij levensduur en garantie vergelijken', heading:'Levensduur en garantie van een thuisbatterij',
    description:'Vergelijk kalenderjaren, cycli, resterende capaciteit en garantievoorwaarden. Een garantie is geen belofte over terugverdientijd of onderhoudskosten.',
    intro:'Levensduur, prestatiegarantie en terugverdientijd zijn verschillende begrippen. Controleer de voorwaarden van de exacte batterij en omvormer in uw offerte voordat u een aantal jaren als zekerheid gebruikt.',
    sections:[
      ['Wat betekent een capaciteitsgarantie?', 'Een batterij kan na verloop van tijd minder energie opslaan. Sommige garanties beschrijven een minimale resterende capaciteit onder vastgelegde omstandigheden. Controleer hoe die wordt gemeten en welke gebruiksgrenzen gelden. Een percentage zonder model, meetmethode en voorwaarden is niet genoeg om producten eerlijk te vergelijken.'],
      ['Jaren, cycli en doorvoer kunnen samen gelden', 'Een garantie kan begrensd zijn door kalenderduur, aantal cycli of de totale verwerkte energie. Kijk of de eerst bereikte grens bepalend is. Intensief handelen kan een andere belasting opleveren dan één dagelijkse cyclus voor eigen zonnestroom. Laat uitleggen welk gebruik bij uw garantie past.'],
      ['Bekijk alle onderdelen van de installatie', 'De batterijcellen, omvormer, communicatieapparatuur en het installatiewerk hoeven niet dezelfde dekking te hebben. Controleer of diagnose, werkuren, voorrijkosten en transport zijn inbegrepen. Vraag ook wat bij een defect gebeurt: reparatie, vervanging of een andere oplossing volgens de toepasselijke voorwaarden.'],
      ['Garantie staat los van rendement', 'Een systeem kan technisch functioneren zonder zichzelf terug te verdienen. Neem daarom mogelijke vervanging en onderhoud mee in de financiële vergelijking. Een fabrieksgarantie beperkt uw wettelijke rechten niet. Bewaar de offerte, factuur en opleverdocumenten, zodat duidelijk is welk product met welke afspraken is geleverd.'],
    ],sources:[warranty],
  },
};
export const batteryGuides: Record<string, EvidenceGuideData> = Object.fromEntries(Object.entries(drafts).map(([slug, guide]) => [slug, {
  ...guide, path:base+slug,
  related: [['Thuisbatterijen vergelijken','/thuisbatterijen'], ['Rekenvoorbeeld met eigen invoer','/thuisbatterij-calculator'], ...(slug !== 'thuisbatterij-btw-teruggave' ? [['Btw-voorwaarden controleren',base+'thuisbatterij-btw-teruggave'] as [string,string]] : [])],
}]));
