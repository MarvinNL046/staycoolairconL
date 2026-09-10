import { Link } from 'react-router-dom';
import MetaTags from './MetaTags';
import Breadcrumbs from './Breadcrumbs';

const rvoFaq = 'https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/veelgestelde-vragen';
const rvoHeat = 'https://www.rvo.nl/subsidies-financiering/isde/woningeigenaren/warmtepomp';

const guides = {
  airco: {
    path: '/airco-subsidie',
    title: 'Airco subsidie: krijgt een split-airco ISDE? | StayCool',
    heading: 'Airco subsidie: wat geldt voor een split-airco?',
    description: 'Een split-airco krijgt geen ISDE, ook als u ermee verwarmt. Lees het verschil met een lucht-waterwarmtepomp en bekijk installatieprijzen voor Limburg.',
    intro: 'Een split-airco is een lucht-luchtwarmtepomp. Voor dit type krijgt u als woningeigenaar geen ISDE-subsidie, ook wanneer u de airco gebruikt om te verwarmen. Neem daarom de volledige aanschaf- en installatieprijs op in uw begroting.',
    sections: [
      ['Waarom is een airco anders dan een lucht-waterwarmtepomp?', 'Een split-airco geeft warmte rechtstreeks af aan de kamerlucht. Een lucht-waterwarmtepomp verwarmt water voor een afgiftesysteem, zoals vloerverwarming. Het woord warmtepomp op een offerte is dus niet genoeg om subsidie te veronderstellen. Controleer eerst welk systeem en welke uitvoering daadwerkelijk worden aangeboden. Voor andere warmtepomptypen bepaalt RVO aan de hand van de actuele voorwaarden of subsidie mogelijk is.'],
      ['Begroot de airco zonder verwachte subsidie', 'Vergelijk offertes op dezelfde onderdelen: de gekozen binnen- en buitenunit, installatie, materialen, btw en eventuele aanvullende werkzaamheden. Onze kostengids toont gecontroleerde prijsvoorbeelden inclusief installatie, materialen en 21% btw. Een subsidiebedrag voor een ander warmtepomptype mag u daar niet van aftrekken.'],
      ['Besparing is een afzonderlijke berekening', 'Of verwarmen met een airco financieel voordeel oplevert, hangt onder meer af van isolatie, gebruiksuren, de ruimtes die u verwarmt, buitentemperatuur en energietarieven. Een vaste besparing of terugverdientijd is zonder die gegevens niet te beloven. Laat comfort, geschikt vermogen en gebruikskosten samen meewegen bij uw keuze.'],
      ['En een regeling van de gemeente?', 'Een gemeentelijke regeling heeft eigen voorwaarden. Een algemene vermelding van energiebesparing bewijst niet dat een airco wordt vergoed. Vraag vóór aankoop of het exacte systeem, uw adres en uw situatie onder de regeling vallen. In deze gids wordt geen gemeentelijk subsidiebedrag voor een airco toegezegd.'],
    ],
  },
  application: {
    path: '/isde-aanvragen-airco',
    title: 'ISDE aanvragen: controle vóór een warmtepomp | StayCool',
    heading: 'ISDE aanvragen: controleer eerst het warmtepomptype',
    description: 'ISDE aanvragen voor een airco? Een split-airco valt erbuiten. Controleer voor een andere warmtepomp de RVO-voorwaarden, meldcode en aanvraagdocumenten.',
    intro: 'Voor een split-airco kunt u geen ISDE-aanvraag doen. Deze controlelijst is bedoeld om het onderscheid te maken met een andere warmtepomp waarvoor mogelijk wel een regeling geldt. De actuele RVO-informatie bepaalt de aanvraagvoorwaarden.',
    sections: [
      ['1. Controleer systeem en aanvrager', 'Staat op uw offerte een lucht-luchtwarmtepomp of split-airco? Dan is de ISDE voor woningeigenaren niet van toepassing. Gaat het om een ander type, controleer dan ook welke regeling bij u past. Eigenaar-bewoners, verhuurders, bedrijven en verenigingen kunnen verschillende voorwaarden en aanvraagmomenten hebben. Gebruik niet zonder controle de handleiding voor een andere doelgroep.'],
      ['2. Controleer de exacte uitvoering bij RVO', 'Zoek voor een mogelijk subsidiabele warmtepomp de exacte merk- en modelcombinatie op in de meldcodelijst. Een vergelijkbaar model of dezelfde merknaam geeft nog geen uitsluitsel. Controleer het subsidiebedrag en de technische voorwaarden voor uw uitvoering rechtstreeks bij RVO. Neem een verwacht bedrag pas mee in uw afweging als de voorwaarden voor uw situatie zijn gecontroleerd.'],
      ['3. Bewaar de documenten van uw installatie', 'Bewaar offerte, factuur, betaalbewijs, toestelgegevens en de gegevens van het installatiebedrijf. Controleer bij RVO welke aanvullende documenten nodig zijn. Leg de uitvoeringsdatum vast en controleer de aanvraagtermijn op de actuele pagina voor uw doelgroep. Deze pagina doet geen toezegging over toekenning, behandelingstijd of uitbetaling.'],
      ['4. Dien een passende aanvraag zelf in bij RVO', 'Gebruik de officiële aanvraagroute en controleer de ingevulde gegevens vóór verzending. Een leverancier kan technische informatie leveren; RVO beoordeelt het recht op subsidie. U hoeft geen ISDE-aanvraag voor te bereiden wanneer u kiest voor een split-airco van StayCool. Vergelijk daarvoor de volledige installatiekosten zonder ISDE-aftrek.'],
    ],
  },
  limburg: {
    path: '/seo/pillar-9-kosten-prijzen/airco-subsidies-limburg',
    title: 'Airco en lokale energieregelingen in Limburg | StayCool',
    heading: 'Airco en energieregelingen in Limburg',
    description: 'Bekijk hoe u lokale energieregelingen in Limburg controleert. Een split-airco krijgt geen ISDE; vraag uw gemeente naar voorwaarden vóór u kosten maakt.',
    intro: 'Een woonadres in Limburg geeft niet automatisch recht op subsidie voor een airco. Een split-airco valt buiten de ISDE voor woningeigenaren. Voor lokale regelingen moet u de actuele voorwaarden van uw eigen gemeente controleren.',
    sections: [
      ['Begin bij de gemeente van uw woonadres', 'Zoek op de officiële gemeentelijke website of neem contact op met het energieloket. Controleer wie de regeling uitvoert en voor welke maatregelen zij geldt. Een bericht over woningverduurzaming of isolatie betekent niet automatisch dat de aanschaf van een airco onder dezelfde regeling valt.'],
      ['Vragen die u vóór aankoop kunt stellen', 'Vraag of een lucht-luchtwarmtepomp expliciet wordt toegelaten, welke eisen gelden voor woning en aanvrager, en of toestemming nodig is vóór u opdracht geeft. Vraag ook of de regeling nog openstaat en welk bewijs u moet bewaren. Laat een bevestiging aansluiten op het exacte apparaat en uw eigen situatie.'],
      ['Een lening is geen subsidie', 'Financiering kan kosten over tijd verdelen, maar u moet een lening terugbetalen. Vergelijk voorwaarden, rente, looptijd en totaalbedrag voordat u tekent. Een maandbedrag maakt een apparaat niet automatisch goedkoper. Neem een niet-bevestigde subsidie of vaste energiebesparing niet als zekerheid op in die berekening.'],
      ['Wat StayCool voor uw airco kan uitwerken', 'Wij kunnen de gewenste ruimtes, het benodigde vermogen en de plaatsing met u bespreken en een installatievoorstel maken. Vraag in de offerte om een duidelijke omschrijving van toestellen, materialen, werkzaamheden en btw. De gemeente of uitvoerder bepaalt vervolgens zelf of een eventuele lokale regeling op uw situatie van toepassing is.'],
    ],
  },
};

export default function SubsidyGuide({ variant }: { variant: keyof typeof guides }) {
  const guide = guides[variant];
  return <>
    <MetaTags title={guide.title} description={guide.description} canonicalUrl={`https://staycoolairco.nl${guide.path}`} type="article" />
    <article className="bg-slate-50 px-4 pb-20 pt-28 text-slate-800">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Kosten airco plaatsen', path: '/kosten-airco-plaatsen' }, { label: guide.heading }]} />
        <h1 className="mt-8 text-3xl font-bold sm:text-5xl">{guide.heading}</h1>
        <p className="mt-6 text-xl leading-relaxed">{guide.intro}</p>
        <p className="mt-4 text-sm text-slate-600">Bronnen gecontroleerd op <time dateTime="2026-09-10">10 september 2026</time>.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/kosten-airco-plaatsen" className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white">Bekijk aircoprijzen inclusief installatie</Link>
          <Link to="/airco-kopen-limburg" className="rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-800">Vergelijk airco’s voor uw woning</Link>
        </div>
        {guide.sections.map(([heading, body]) => <section key={heading} className="mt-10"><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-4 text-lg leading-relaxed">{body}</p></section>)}
        <section className="mt-10 rounded-xl bg-white p-6">
          <h2 className="text-2xl font-bold">Controleer de officiële informatie</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6">
            <li><a className="text-blue-700 underline" href={rvoFaq}>RVO: ISDE-vragen voor woningeigenaren, waaronder lucht-luchtwarmtepompen</a></li>
            <li><a className="text-blue-700 underline" href={rvoHeat}>RVO: actuele voorwaarden en aanvraagroute voor een warmtepomp</a></li>
          </ul>
          <p className="mt-5">{variant !== 'airco' && <Link className="mr-4 text-blue-700 underline" to="/airco-subsidie">Uitleg: airco en ISDE</Link>}{variant !== 'limburg' && <Link className="mr-4 text-blue-700 underline" to={guides.limburg.path}>Lokale regelingen controleren</Link>}{variant !== 'application' && <Link className="text-blue-700 underline" to={guides.application.path}>Controlelijst ISDE-aanvraag</Link>}</p>
        </section>
        <section className="mt-10"><h2 className="text-2xl font-bold">Bespreek uw airco met StayCool</h2><p className="mt-4">Wilt u koelen of gericht verwarmen in Limburg? Bel <a href="tel:+31462021430" className="font-semibold text-blue-700 underline">046 202 1430</a> of <Link to="/contact" className="font-semibold text-blue-700 underline">vraag installatieadvies aan</Link>. Heeft u al een door StayCool geplaatste airco, bekijk dan onze <Link to="/onderhoud" className="text-blue-700 underline">onderhoudsabonnementen</Link>.</p></section>
      </div>
    </article>
  </>;
}
