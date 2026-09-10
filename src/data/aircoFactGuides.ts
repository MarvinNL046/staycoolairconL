import type { EvidenceGuideData } from '../components/EvidenceGuide';
const costs: [string,string]=['Actuele installatieprijzen','/kosten-airco-plaatsen'];
const buy: [string,string]=['Een airco kopen in Limburg','/airco-kopen-limburg'];
const care: [string,string]=['Onderhoud en abonnementen','/onderhoud'];
const rvo: [string,string]=['RVO: ISDE-vragen voor woningeigenaren','https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/veelgestelde-vragen'];
const mc: [string,string]=['Milieu Centraal: soorten warmtepompen','https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen-en-koelen/welke-warmtepompen-zijn-er/'];
export const aircoFactGuides: Record<string,EvidenceGuideData> = {
  maastricht:{
    path:'/blog/airco-maastricht-complete-gids-2026',title:'Airco in Maastricht: woning, plaatsing en kosten',heading:'Airco in Maastricht: van woningadvies tot installatie',
    description:'Een airco in Maastricht laten plaatsen? Lees over ruimtekeuze, buitenunit, toestemming en offertecontrole. Bekijk actuele installatieprijzen inclusief btw.',
    intro:'Een passende airco in Maastricht begint bij uw woning en gebruik. Een slaapkamer koelen vraagt een andere afweging dan een woonkamer dagelijks verwarmen of meerdere ruimtes tegelijk regelen.',
    sections:[
      ['Welke ruimtes wilt u comfortabel houden?', 'Beschrijf afmetingen, isolatie, glas en het gebruik per ruimte. Geef aan of koelen, verwarmen of beide het doel is. Bij meerdere ruimtes vergelijkt u losse systemen met een multi-split. Een gedeelde buitenunit kan praktisch zijn, maar leidingroutes, gelijktijdig gebruik en prestaties moeten bij de gekozen combinatie passen.'],
      ['Buitenunit, gevel en toestemming', 'Laat de plaatsing beoordelen op geluid, luchtstroom, bevestiging, onderhoudsruimte en bereikbaarheid. Bij huur of een appartement kunnen afspraken met verhuurder of VvE nodig zijn. Voor een beschermd pand of een gevelwijziging controleert u de regels voor het adres. Een algemeen artikel over Maastricht kan geen vergunningvrijstelling bevestigen.'],
      ['Een complete prijs vergelijken', 'Vergelijk de exacte aircoset met installatie, materialen, btw en eventuele aanvullende werkzaamheden. De kostengids toont gecontroleerde installatievoorbeelden. Bij een niet-bevestigd model staat prijs op aanvraag. Voor een split-airco geldt geen ISDE voor woningeigenaren; trek dus geen veronderstelde subsidie af van uw begroting.'],
      ['Wat regelt u vóór de montagedag?', 'Bespreek de toegang tot de werkplekken, bescherming van meubels, de leidingroute en stroomvoorziening. Laat bijzonder werk vooraf in de offerte opnemen. Bij oplevering krijgt u uitleg over bediening en de onderhoudspunten van uw uitvoering. Bewaar de modelgegevens, factuur en garantievoorwaarden.'],
      ['Onderhoud na installatie', 'Reinig toegankelijke filters volgens de handleiding en laat technisch onderhoud passend bij het systeem uitvoeren. De actuele StayCool-abonnementen zijn optioneel en bedoeld voor door StayCool geleverde en geïnstalleerde airco’s. Bekijk de pakketten voordat u een onderhoudskeuze maakt; een abonnement is geen verplicht onderdeel van iedere aanschaf.'],
    ],sources:[rvo],related:[costs,buy,care],cta:['Vraag aircoadvies voor Maastricht','/contact?onderwerp=airco-maastricht'],
  },
  hybrid:{
    path:'/hybride-warmtepomp-airco',title:'Hybride warmtepomp en airco: verschillen en combinatie',heading:'Hybride warmtepomp of airco naast de cv?',
    description:'Een hybride lucht-waterwarmtepomp is iets anders dan een airco naast de cv. Vergelijk afgifte, warm water, comfort en de toepassing in uw woning.',
    intro:'Een airco naast een cv-ketel en een hybride lucht-waterwarmtepomp zijn verschillende oplossingen. Gebruik dezelfde woonwensen als uitgangspunt wanneer u de kosten en werking vergelijkt.',
    sections:[
      ['Wat doet een hybride warmtepomp?', 'Een hybride lucht-waterwarmtepomp werkt samen met de cv-ketel en levert warmte aan een watersysteem. De regeling bepaalt wanneer de ketel wordt ingezet. Geschiktheid hangt onder meer af van warmtevraag en het afgiftesysteem. Vraag een ontwerp dat bij uw woning past in plaats van alleen een prijs voor een toestel.'],
      ['Wat doet een airco naast de cv?', 'Een airco verwarmt lucht in de ruimte van de binnenunit. Dat kan gericht comfort geven in bijvoorbeeld de woonkamer. De cv kan andere ruimtes en warm water blijven verzorgen. Deze combinatie is geen vervanging voor de beoordeling van alle warmtevraag, en maakt de airco geen subsidiabele lucht-waterwarmtepomp.'],
      ['Vergelijk dezelfde functies en totale kosten', 'Neem de verwarmde ruimtes, gewenste temperaturen en warmwatervoorziening mee. Vergelijk investering, energie, onderhoud en vaste kosten. Er is geen algemene regel dat één combinatie voor alle woningen over tien jaar voordeliger is. Gebruik uw verbruik en energietarieven met expliciete aannames.'],
      ['Controleer subsidie op het exacte type', 'Een split-airco valt buiten de ISDE voor woningeigenaren. Voor een ander warmtepomptype moet u de actuele RVO-voorwaarden, productgegevens en aanvraagroute controleren. Op deze pagina worden geen vaste subsidiebedragen of terugverdientijden beloofd. Vraag voor de lucht-wateroplossing een voorstel van een specialist in die toepassing.'],
    ],sources:[rvo,mc],related:[['Lucht-luchtwarmtepomp uitgelegd','/airco-warmtepomp'],costs,buy],
  },
  labelHome:{
    path:'/seo/pillar-10-duurzaamheid/energielabel-verbetering',title:'Energielabel woning verbeteren: de rol van een airco',heading:'Een airco en het energielabel van uw woning',
    description:'Het toestelenergielabel is iets anders dan het energielabel van uw woning. Laat de invloed van een installatie beoordelen door een energieadviseur.',
    intro:'Een A+++-airco geeft uw woning niet automatisch energielabel A. Het toestel en de woning hebben verschillende beoordelingen. Een exacte labelsprong kan niet uit alleen het gekozen aircomodel worden afgeleid.',
    sections:[
      ['Kijk naar de volledige woning', 'Isolatie, beglazing, installaties, ventilatie en woningkenmerken spelen samen een rol. Het effect van een nieuwe installatie hangt af van de bestaande situatie en de voorgeschreven rekenmethode. Vraag een bevoegde energieadviseur welke onderbouwing nodig is voor uw woning.'],
      ['Bewaar bewijs van de uitvoering', 'Bewaar productbladen, exacte typenummers, facturen en oplevergegevens. Een adviseur moet kunnen vaststellen welke installatie aanwezig is en hoe die wordt gebruikt in de beoordeling. Een verkoopbrochure van een hele merkserie is daarvoor minder specifiek dan documentatie van uw geleverde set.'],
      ['Stel comfort en energie naast elkaar', 'Een airco kan koelen en gericht verwarmen, maar extra koelgebruik kost elektriciteit. Het toestelenergielabel helpt systemen te vergelijken en is geen garantie op een lagere jaarrekening. Bespreek eerst het doel en de warmtevraag voordat u alleen vanwege een veronderstelde labelsprong investeert.'],
      ['Geen vaste waardestijging of financiële belofte', 'Een woninglabel geeft geen gegarandeerde verkoopmeerwaarde of hypotheekrente. Financieringsvoorwaarden verschillen per aanbieder en situatie. Ook subsidie moet per maatregel worden gecontroleerd: een split-airco valt buiten de ISDE voor woningeigenaren. Baseer de beslissing op een woningadvies en een volledige offerte.'],
    ],sources:[['Rijksoverheid: energielabel woningen','https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/energielabel-woningen-en-gebouwen/energielabel-woning'],rvo],related:[['Energielabel van het toestel lezen','/seo/pillar-4-energie-besparen/energielabel-airco'],costs,buy],
  },
  sustainable:{
    path:'/seo/pillar-10-duurzaamheid/duurzame-verwarming',title:'Duurzaam verwarmen: airco en warmtepompen afwegen',heading:'Duurzaam verwarmen: kies voor uw woning',
    description:'Vergelijk lucht-lucht en lucht-waterverwarming op comfort, warmtevraag en energiegebruik. Bekijk welke rol isolatie en het gebruik van ruimtes spelen.',
    intro:'Duurzamer verwarmen begint bij minder warmtevraag en een passend systeem. Een airco kan een rol spelen bij gericht verwarmen, maar de beste keuze hangt af van de woning en gewenste functies.',
    sections:[
      ['Beperk eerst onnodige warmtevraag', 'Bekijk isolatie, tocht, instellingen en welke ruimtes u daadwerkelijk gebruikt. Houd daarbij rekening met een gezond binnenklimaat en voldoende ventilatie. Een toestelkeuze lost een slechte warmteverdeling of hoge warmtevraag niet vanzelf op.'],
      ['Kies de passende warmteafgifte', 'Een lucht-luchtwarmtepomp geeft warmte af aan kamerlucht; een lucht-waterwarmtepomp aan een watersysteem. Vergelijk de benodigde ruimtes, de warmwatervoorziening en het comfort. Een gewone split-airco verzorgt geen sanitair warm water en verwarmt niet automatisch alle afgesloten kamers.'],
      ['Bekijk de praktijk en de milieu-impact', 'Werkelijk stroomverbruik hangt af van gebruik, regeling, dimensionering en omstandigheden. Ook productie en koudemiddel tellen mee bij milieu-impact. Noem daarom geen universeel CO2-besparingspercentage voor iedere woning. Laat lekkagepreventie, onderhoud en correcte afvoer deel van de praktische aanpak zijn.'],
      ['Maak de investering controleerbaar', 'Vraag een totaalprijs en een berekening met zichtbare aannames. Een split-airco krijgt geen ISDE voor woningeigenaren; controleer voor een ander warmtepomptype de actuele regeling. Een duurzaamheidsclaim of subsidie op een ander product is geen onderbouwing voor uw offerte.'],
    ],sources:[mc,rvo],related:[['Airco als warmtepomp','/airco-warmtepomp'],['Kosten van verwarmen','/airco-verwarming-kosten-besparing'],care],
  },
  payback:{
    path:'/seo/pillar-9-kosten-prijzen/noindex/airco-investering-terugverdienen',title:'Airco terugverdienen: investering en verbruik vergelijken',heading:'Kunt u een airco terugverdienen?',noindex:true,
    description:'Vergelijk de volledige airco-investering met onderbouwde besparing en extra kosten. Een vaste terugverdientijd geldt niet voor iedere woning.',
    intro:'Een airco koopt u vaak voor comfort. Of u de investering ook financieel terugverdient, hangt af van wat het systeem vervangt en van de kosten tijdens het gebruik.',
    sections:[
      ['Bepaal eerst het alternatief', 'Vergelijk dezelfde ruimtes en binnentemperatuur met uw bestaande verwarming. Extra koeling is een nieuwe comfortfunctie en kan extra verbruik geven. Het vervangen van een ventilator door een airco levert niet automatisch stroombesparing op.'],
      ['Neem de volledige investering mee', 'Gebruik de prijs inclusief installatie, materialen, btw en aanvullend werk. Een split-airco valt buiten de ISDE; tel een onbevestigd gemeentelijk voordeel niet alvast als korting. Bekijk ook onderhoud, mogelijke reparaties en financieringskosten.'],
      ['Reken met netto voordeel', 'Verminder de onderbouwde jaarlijkse besparing met extra gebruiks- en onderhoudskosten. Alleen bij een positief netto voordeel heeft delen van de investering door dat bedrag zin. De uitkomst is een eenvoudig scenario en houdt zonder verdere modellering geen rekening met prijsveranderingen of vervanging.'],
      ['Maak een beslissing op meer dan één bedrag', 'Vergelijk ook comfort, geluid, bediening en bruikbaarheid. Een zeer gunstige terugverdientijd zonder warmtevraag, tarieven en aannames is geen bewijs. Laat twijfelpunten in de offerte toelichten en gebruik voor prijsvergelijking de actuele installatievoorbeelden.'],
    ],sources:[rvo],related:[costs,['Verwarmingskosten berekenen','/airco-verwarming-kosten-besparing'],care],
  },
  energyLabel:{
    path:'/seo/pillar-4-energie-besparen/energielabel-airco',title:'Energielabel airco lezen: SEER, SCOP en verbruik',heading:'Het energielabel van een airco lezen',
    description:'Bekijk wat het aircolabel vertelt over koelen, verwarmen, verbruik en geluid. Vergelijk exacte uitvoeringen en gebruik dezelfde klimaatzone.',
    intro:'Het Europese energielabel helpt u airco’s onder dezelfde meetvoorwaarden te vergelijken. Het etiket geeft informatie over energieprestatie en geluid, maar is geen voorspelling van uw rekening.',
    sections:[
      ['Koelen en verwarmen hebben aparte waarden', 'Bij koelen kijkt u naar SEER; bij verwarmen naar SCOP. Een A+++-label voor koelen betekent niet automatisch A+++ voor verwarmen. Controleer de exacte combinatie van binnen- en buitenunit en vergelijk bij verwarmen dezelfde klimaatzone. Vraag het bijbehorende productinformatieblad op.'],
      ['Let op wat werkelijk wordt vergeleken', 'De jaarkilowatturen op een label volgen uit standaardcondities en een voorgeschreven gebruiksmodel. Een verschil in capaciteit, seizoen of toepassing beïnvloedt de vergelijking. Kies daarom niet alleen op het laagste jaarverbruik zonder te beoordelen of het toestel genoeg vermogen voor uw ruimte heeft.'],
      ['Een klasse is geen garantie op comfort', 'Luchtverdeling, plaatsing, regeling en dimensionering bepalen mede hoe de ruimte aanvoelt. Een energielabel beoordeelt ook niet hoe zorgvuldig uw installatiewerk wordt uitgevoerd. Vergelijk naast energieprestatie daarom geluid, gewenste functies, installatie en nazorg.'],
      ['Bereken de meerprijs met uw gebruik', 'Een duurder model verdient zijn meerprijs niet altijd binnen een vast aantal jaren terug. Reken het verschil in stroomverbruik door bij uw gebruik en tarieven. Neem de aanschafprijs inclusief installatie en btw mee. Een split-airco krijgt geen ISDE voor woningeigenaren; een hoog energielabel verandert dat niet.'],
    ],sources:[['EU-verordening: energielabels voor airconditioners','https://eur-lex.europa.eu/eli/reg_del/2011/626/2023-09-30/eng'],rvo],related:[['SCOP-grenzen voor A+++','/airco-a-plus-plus-plus-verwarmen'],costs,buy],
  },
  feedIn:{
    path:'/seo/pillar-4-energie-besparen/terugleverkosten-voorkomen',title:'Terugleverkosten beperken: eigen zonnestroom gebruiken',heading:'Terugleverkosten beperken met bewust stroomgebruik',
    description:'Bekijk hoe eigen gebruik van zonnestroom uw teruglevering beïnvloedt. Vergelijk de kosten in uw contract en voorkom onnodig extra aircoverbruik.',
    intro:'Meer eigen zonnestroom gebruiken kan uw teruglevering verminderen. Of u daardoor minder terugleverkosten betaalt, hangt af van het tariefmodel van uw energieleverancier.',
    sections:[
      ['Controleer eerst uw energiecontract', 'Terugleververgoeding, terugleverkosten en netbeheerkosten zijn verschillende posten. Terugleverkosten kunnen bijvoorbeeld afhangen van een schaal of hoeveelheid. Minder terugleveren levert dan niet bij elke extra zelfgebruikte kWh hetzelfde voordeel op. Gebruik de voorwaarden en bedragen uit uw eigen contract.'],
      ['Salderen stopt in 2027', 'De salderingsregeling stopt op 1 januari 2027. Er is geen tussentijdse geleidelijke afbouw in 2026. Tot het einde van 2026 en daarna werken de verrekening en kosten anders. Maak daarom een vergelijking voor het juiste jaar en neem de misgelopen terugleververgoeding mee.'],
      ['Verschuif nuttig verbruik', 'Bekijk of bestaand verbruik naar zonne-uren kan, bijvoorbeeld laden of een gepland apparaat gebruiken. Een airco extra laten koelen of verwarmen terwijl u dat comfort niet nodig heeft, bespaart niet automatisch geld. Controleer de uiteindelijke kosten en voorkom dat minder teruglevering vooral meer verbruik wordt.'],
      ['Onderzoek opslag als afzonderlijke investering', 'Een thuisbatterij kan stroomgebruik verschuiven, maar heeft een aanschafprijs, omzettingsverlies en mogelijke terugkerende kosten. Zij kan geen zomerenergie onbeperkt voor de winter bewaren. Vergelijk eerst direct eigen gebruik en beoordeel opslag met uw werkelijke tijdsprofiel en een volledige offerte.'],
    ],sources:[['Rijksoverheid: einde salderingsregeling','https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/energie-thuis/salderingsregeling']],related:[['Thuisbatterijscenario berekenen','/thuisbatterij-calculator'],['Kosten van aircoverwarming','/airco-verwarming-kosten-besparing'],costs],
  },
  label: {
    path:'/airco-a-plus-plus-plus-verwarmen', title:'A+++ airco voor verwarmen: energielabel en SCOP', heading:'A+++ airco voor verwarmen: lees het juiste energielabel',
    description:'A+++ voor verwarmen hoort bij SCOP vanaf 5,10. Lees het verschil met koelen, de klimaatzone en de invloed van uw woning op werkelijk verbruik.',
    intro:'Een airco kan verschillende energielabels hebben voor koelen en verwarmen. Kijk daarom naar de verwarmingskolom en de juiste klimaatzone van de exacte combinatie van binnen- en buitenunit.',
    sections:[
      ['Welke SCOP hoort bij A+++?', 'Voor split-airconditioners onder de Europese labelregeling hoort A+++ voor verwarmen bij een SCOP van ten minste 5,10. A++ loopt van 4,60 tot onder 5,10; A+ van 4,00 tot onder 4,60. De eerder vaak genoemde grens 4,6 hoort dus bij A++, niet bij A+++. Bij koelen wordt de klasse aan SEER gekoppeld: voor A+++ is de grens 8,50.'],
      ['Vergelijk dezelfde klimaatzone', 'De verwarmingsprestatie kan op het label voor meerdere klimaatzones staan. Vergelijk uitvoeringen binnen dezelfde zone en gebruik de gegevens die bij uw toepassing horen. De combinatie van units en de capaciteit beïnvloeden het label. Een hele merkserie heeft daarom niet automatisch één en dezelfde SCOP.'],
      ['SCOP is geen vast rendement op ieder moment', 'SCOP beschrijft een seizoensprestatie onder gestandaardiseerde omstandigheden. Het is geen belofte dat de airco op elk moment dezelfde verhouding tussen stroom en warmte haalt. Buitentemperatuur, ontdooien, instelling, dimensionering en gebruik beïnvloeden de praktijk. Het label is nuttig om producten te vergelijken, maar voorspelt niet exact uw jaarrekening.'],
      ['Van label naar kosten', 'Bij een eenvoudige raming deelt u de benodigde warmte door een passend aangenomen seizoensrendement en vermenigvuldigt u dit met uw stroomtarief. Bijvoorbeeld: 4.000 kWh warmte, aangenomen SCOP 4 en €0,30 per kWh geeft €300 variabele stroomkosten. Dit is een rekenvoorbeeld, geen modelbelofte. Aanschaf, onderhoud en eventuele andere verwarming komen er nog bij.'],
      ['Welke airco past bij uw woning?', 'Vergelijk naast het label de benodigde capaciteit, luchtverdeling, geluid en prestaties bij lage buitentemperaturen. Geef aan of u één ruimte bijverwarmt of de airco als hoofdverwarming wilt inzetten. Vraag bij de offerte om het productblad van de exacte set. Voor de aanschafprijs gebruikt u onze gecontroleerde installatievoorbeelden of een offerte voor uw uitvoering.'],
    ],sources:[['EU-verordening 626/2011: energielabels voor airconditioners','https://eur-lex.europa.eu/eli/reg_del/2011/626/2023-09-30/eng']],related:[costs,buy,care],cta:['Vergelijk airco’s voor mijn woning','/airco-kopen-limburg'],
  },
  heatingCosts:{
    path:'/airco-verwarming-kosten-besparing',title:'Verwarmen met airco: kosten en besparing berekenen',heading:'Wat kost verwarmen met een airco?',
    description:'Bereken verwarmingskosten met warmtevraag, rendement en uw stroomtarief. Vergelijk dezelfde ruimtes met gas en neem installatie en onderhoud mee.',
    intro:'De kosten van verwarmen met een airco hangen af van uw woning, gebruik en stroomtarief. Een vast besparingspercentage zonder die gegevens is geen betrouwbare voorspelling.',
    sections:[
      ['Begin bij dezelfde hoeveelheid warmte', 'Vergelijk dezelfde ruimtes, temperatuur en gebruiksuren. Als u met de airco alleen de woonkamer verwarmt en met de cv het hele huis, meet u niet alleen een verschil in rendement. Ook uw gedrag is veranderd. Geef daarom aan welke verwarming werkelijk wordt vervangen en welke blijft draaien.'],
      ['Een controleerbaar rekenvoorbeeld', 'Stel dat een ruimte in een seizoen 4.000 kWh warmte nodig heeft. Met een aangenomen seizoensrendement van 4 is daarvoor ongeveer 1.000 kWh elektriciteit nodig. Bij een voorbeeldtarief van €0,30 per kWh zijn de variabele stroomkosten €300. Deze aannames zijn gekozen om de formule te laten zien; zij zijn geen meting of tariefadvies.'],
      ['Een eerlijke vergelijking met gas', 'Bereken voor gas de kosten per nuttige kWh warmte met uw gasprijs, de energie-inhoud en een passend ketelrendement. Vaste aansluitkosten vervallen niet wanneer u nog gas gebruikt voor andere ruimtes, warm water of koken. Gebruik actuele tarieven uit uw eigen contract en neem niet aan dat één airco uw hele verwarmingssysteem kan vervangen.'],
      ['Neem meer mee dan de energierekening', 'Vergelijk de investering inclusief installatie en btw, onderhoud en de verwachte gebruiksduur. De airco kan in de zomer extra stroom gebruiken voor koelen. Een eenvoudige terugverdientijd is alleen zinvol bij een positief, onderbouwd netto jaarvoordeel. Voor een split-airco geldt geen ISDE-subsidie voor woningeigenaren.'],
      ['Laat de toepassing beoordelen', 'Bespreek isolatie, afmetingen, gewenste binnentemperatuur en het gebruik als hoofd- of bijverwarming. Laat capaciteit en prestaties voor koude omstandigheden controleren. Zo kiest u een uitvoering die past bij het comfort dat u zoekt, in plaats van alleen bij een gunstig voorbeeldbedrag.'],
    ],sources:[mc,rvo],related:[costs,buy,care],cta:['Vraag een offerte voor mijn woning','/contact?onderwerp=verwarmen'],
  },
  heatPump:{
    path:'/airco-warmtepomp',title:'Airco als warmtepomp: koelen en verwarmen per ruimte',heading:'Airco als warmtepomp: wat betekent lucht-lucht?',
    description:'Een airco met verwarmingsfunctie is een lucht-luchtwarmtepomp. Lees het verschil met lucht-water, de rol als verwarming en de aandachtspunten bij aanschaf.',
    intro:'Een airco met verwarmingsfunctie verplaatst warmte tussen buitenlucht en kamerlucht. Daarom heet dit een lucht-luchtwarmtepomp. De toepassing verschilt van een warmtepomp die water voor radiatoren of vloerverwarming verwarmt.',
    sections:[
      ['Verwarmen via de binnenunit', 'De binnenunit verspreidt verwarmde lucht in de ruimte. De gekozen plaats en luchtverdeling bepalen mede het comfort. Een unit in de woonkamer verwarmt niet automatisch alle afgesloten slaapkamers. Bekijk per ruimte welke temperatuur gewenst is en hoe de lucht die ruimte kan bereiken.'],
      ['Hoofdverwarming of bijverwarming?', 'Als bijverwarming kan een airco een veelgebruikte ruimte verwarmen terwijl een ander systeem beschikbaar blijft. Voor hoofdverwarming moet de hele warmtevraag worden beoordeeld, ook bij kou. Controleer daarvoor capaciteit, ontdooigedrag, luchtverdeling en het gewenste comfort. Er is geen universeel percentage van het stookseizoen waarvoor dit altijd voldoende is.'],
      ['Verschil met een lucht-waterwarmtepomp', 'Een lucht-waterwarmtepomp levert warmte aan water en vraagt een geschikt afgiftesysteem. Een lucht-luchtsysteem levert direct aan de lucht. De juiste keuze hangt af van de woning en de gewenste functies. Een gewone split-airco maakt geen sanitair warm water. Vergelijk complete oplossingen die dezelfde behoefte afdekken.'],
      ['Kosten, energie en subsidie', 'Het werkelijk verbruik volgt uit warmtevraag, gebruik en rendement; de besparing uit het verschil met uw alternatief en uw tarieven. Een split-airco valt buiten de ISDE voor woningeigenaren. Bij een ander warmtepomptype zijn de actuele RVO-voorwaarden bepalend. Trek een subsidie voor een lucht-waterwarmtepomp niet af van een airco-offerte.'],
      ['Bereid uw adviesaanvraag voor', 'Noteer welke ruimtes u wilt koelen en verwarmen, hun afmetingen en isolatie, uw huidige verwarming en mogelijke posities voor de buitenunit. Vraag een totaalprijs met installatie, materialen en btw. Voor een eigen, door StayCool geleverd en geplaatst systeem kunt u ook de optionele onderhoudsabonnementen bekijken.'],
    ],sources:[mc,rvo],related:[costs,buy,care],
  },
  sittard:{
    path:'/blog/airco-offerte-sittard',title:'Airco offerte Sittard: vergelijk de complete installatie',heading:'Airco offerte in Sittard: zo vergelijkt u het aanbod',
    description:'Airco-offertes voor Sittard vergelijken? Controleer de set, montage, materialen, btw en meerwerk. Bekijk actuele installatieprijzen zonder ISDE-aftrek.',
    intro:'Een goede airco-offerte beschrijft zowel het systeem als het werk in uw woning. Vergelijk in Sittard aanbiedingen op dezelfde uitvoering en werkzaamheden, zodat het laagste bedrag niet een onvolledige installatie blijkt.',
    sections:[
      ['Beschrijf uw ruimtes en gebruik', 'Geef aan welke ruimtes u wilt koelen of verwarmen en of ze tegelijk worden gebruikt. Vermeld afmetingen, isolatie, glasoppervlak en voorkeuren voor de plaatsing. Foto’s van de mogelijke binnen- en buitenunitposities helpen om de situatie te bespreken. De capaciteit wordt daarna beoordeeld; vierkante meters alleen zijn geen volledige berekening.'],
      ['Wat hoort er op de offerte?', 'Vraag de exacte typenummers van binnen- en buitenunit, montage, leidingwerk, condensafvoer, elektrische werkzaamheden en oplevering. Laat installatie en materialen samen met btw in het totaal vermelden. Controleer welke leidinglengte en bereikbaarheid zijn voorzien en welke aanvullende werkzaamheden apart worden begroot.'],
      ['Bekijk de actuele prijsvoorbeelden', 'De kostengids van StayCool toont gecontroleerde aircosets met prijzen inclusief installatie, materialen en btw. Uw offerte kan afwijken door de uitvoering of woning. Bij een model zonder bevestigde prijs staat prijs op aanvraag. Een split-airco krijgt geen ISDE voor woningeigenaren; er is daarom geen “nettoprijs na ISDE” voor deze installatie.'],
      ['Bespreek de plaatsing vóór de opdracht', 'Een buitenunit vraagt een geschikte bevestiging, ruimte en beoordeling van geluid en luchtstroom. Bij een appartement, huurwoning of beschermd pand kunnen toestemming of aanvullende regels relevant zijn. Laat vooraf onderzoeken wat op uw adres geldt. Een algemeen voorbeeld voor Sittard is geen vergunningbeoordeling.'],
      ['Controleer nazorg en garantie', 'Vraag welke uitleg u bij oplevering krijgt, waar u met een storing terechtkunt en welke garantievoorwaarden gelden. Uw wettelijke rechten blijven daarbij bestaan. Onderhoud en abonnementen zijn een afzonderlijke keuze. De actuele StayCool-abonnementen zijn bedoeld voor airco’s die door StayCool zijn geleverd én geïnstalleerd.'],
    ],sources:[rvo],related:[costs,buy,care],cta:['Vraag een airco-offerte voor Sittard','/contact?onderwerp=airco-sittard'],
  },
};
