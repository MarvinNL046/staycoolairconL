import type { CityTier,FaqItem } from '../types/programmatic-locations';

export function renderTemplate(template: string, tokens: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => tokens[key] ?? `{{${key}}}`);
}

// Variants describe the service, never invented local projects, savings or response times.
export const CITY_INTRO_VARIANTS: Record<CityTier, string[]> = {
  groot: ['Een airco laten installeren in {{city}}? StayCool bespreekt met u welke ruimtes u wilt koelen of verwarmen. Bij een appartement kijken we ook naar de beschikbare buitenruimte, bereikbaarheid en eventuele afspraken met de VvE. U ontvangt een voorstel voor de gekozen uitvoering en werkzaamheden.'],
  middel: ['StayCool verzorgt airco-installatie in {{city}} en omgeving. We beoordelen uw ruimtes, isolatie en gewenste gebruik voordat we een vermogen adviseren. De positie van de binnenunit, de buitenunit en de leidingroute stemmen we af op uw woning.'],
  klein: ['Voor een airco in {{city}} kunt u bij StayCool terecht voor advies en installatie. We werken vanuit Nieuwstadt en bespreken de mogelijkheden voor uw woning in {{region}}. Geef aan welke kamers u wilt gebruiken en of het vooral om koelen, verwarmen of beide gaat.'],
};
const services = 'In {{city}} installeren we single-split en multi-split airco’s. Vergelijk de beschikbare modellen op onze aankoop- en productpagina’s. De kostengids toont gecontroleerde prijzen inclusief installatie, materialen en btw; eventuele aanvullende werkzaamheden worden in uw offerte benoemd. Onderhoudsabonnementen zijn bedoeld voor systemen die door StayCool zijn geleverd en geïnstalleerd.';
export const CITY_SERVICES_VARIANTS: Record<CityTier, string[]> = { groot: [services], middel: [services], klein: [services] };
const practical = 'Vraag advies via de website, bel 046 202 1430 of mail info@staycoolairco.nl. Vermeld uw woonplaats, de gewenste ruimtes en uw belangrijkste vragen. Foto’s van de mogelijke unitposities kunnen helpen bij de voorbereiding. We bespreken opname, werkzaamheden, afwerking en planning met u voordat de installatie wordt ingepland.';
export const CITY_PRACTICAL_VARIANTS: Record<CityTier, string[]> = { groot: [practical], middel: [practical], klein: [practical] };
const faqs: FaqItem[] = [
  { question: 'Wat kost een airco-installatie in {{city}}?', answer: 'De prijs hangt af van de exacte uitvoering, het aantal binnenunits en de werkzaamheden. Bekijk de kostengids voor gecontroleerde voorbeelden inclusief installatie, materialen en btw. Uw offerte vermeldt ook eventuele aanvullende werkzaamheden.' },
  { question: 'Wanneer kan mijn airco in {{city}} geplaatst worden?', answer: 'We stemmen de installatiedatum met u af na beoordeling van het werk en de beschikbaarheid van toestellen en monteurs. Er geldt op deze pagina geen vaste levertijd of belofte van spoedplaatsing.' },
  { question: 'Welke airco past bij mijn woning in {{city}}?', answer: 'Dat beoordelen we op basis van afmetingen, isolatie, glasoppervlak, zonbelasting en het gewenste gebruik. Alleen het aantal vierkante meters is onvoldoende voor een definitief vermogensadvies. Voor meerdere kamers vergelijken we ook single-split en multi-split.' },
  { question: 'Bieden jullie onderhoud voor airco’s in {{city}}?', answer: 'Ja, voor systemen die door StayCool zijn geleverd en geïnstalleerd. Op de onderhoudspagina vergelijkt u het Basis- en Premiumpakket en ziet u de actuele maandprijs en voorwaarden. Een abonnement is optioneel.' },
  { question: 'Kan ik met een airco in {{city}} ook verwarmen?', answer: 'Veel split-airco’s kunnen koelen en verwarmen. Controleer het verwarmingsvermogen en de bedrijfsgrenzen van de exacte uitvoering. Comfort en verbruik hangen af van uw woning, gebruik en buitentemperatuur; een vaste energiebesparing is vooraf niet te beloven.' },
  { question: 'Welke garantie geldt voor mijn airco-installatie?', answer: 'Vraag naar de garantievoorwaarden voor het specifieke toestel en het installatiewerk. Laat termijn, dekking, eventuele onderhoudsvoorwaarden en de procedure bij een defect in uw offerte vastleggen.' },
  { question: 'Welke merken kan ik in {{city}} laten installeren?', answer: 'Bekijk het actuele assortiment op onze productpagina’s. We bespreken welke uitvoering past bij uw woning. Bij modellen zonder bevestigde prijs of beschikbaarheid vraagt u eerst een voorstel aan.' },
  { question: 'Waar letten jullie op bij een buitenunit in {{city}}?', answer: 'We beoordelen onder meer geluid, trillingen, luchtcirculatie, condensafvoer en bereikbaarheid voor onderhoud. Controleer waar nodig ook toestemming van verhuurder of VvE en de regels voor uw adres. Een stille binnenunit zegt op zichzelf niets over het geluid buiten.' },
];
export const FAQ_QUESTION_VARIANTS: Record<CityTier, FaqItem[]> = { groot: faqs, middel: faqs, klein: faqs };
