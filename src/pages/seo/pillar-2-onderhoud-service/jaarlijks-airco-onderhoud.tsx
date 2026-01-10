import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Calendar, Wrench, ThermometerSun, Phone, Mail, Calculator, Euro, Award, TrendingUp, Wind } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const JaarlijksAircoOnderhoud: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Onderhoud & Service', path: '/onderhoud' },
    { label: 'Jaarlijks Airco Onderhoud' }
  ];

  const usps = [
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Preventief Onderhoud",
      description: "Voorkom storingen en defecten met professioneel jaarlijks onderhoud door gecertificeerde specialisten"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Tot 30% Besparing",
      description: "Goed onderhouden airco's verbruiken tot 30% minder energie en hebben langere levensduur"
    },
    {
      icon: <Calendar className="h-12 w-12 text-sky-500" />,
      title: "Vast Onderhoudscontract",
      description: "Automatische planning met vaste tarieven. Nooit meer zorgen over uw airconditioning"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-Gassen Gecertificeerd",
      description: "Onze monteurs zijn F-gassen gecertificeerd conform wettelijke vereisten en milieunormen"
    }
  ];

  const onderhoudsChecklist = [
    "Reinigen en/of vervangen van luchtfilters voor optimale luchtkwaliteit",
    "Controle en reiniging van binnen- en buitenunit",
    "Inspectie van koudemiddelniveau en eventueel bijvullen",
    "Controle van elektrische aansluitingen en veiligheidsschakelingen",
    "Testen van thermostaat en bedieningspanelen",
    "Reiniging van condensafvoer om lekkages te voorkomen",
    "Controle van ventilator en motor werking",
    "Inspectie op corrosie en slijtage",
    "Meten van koelprestaties en energieverbruik",
    "Advies over optimalisatie en mogelijke verbeteringen"
  ];

  const contractVoordelen = [
    "Jaarlijkse onderhoudsbeurt op afgesproken tijdstip",
    "Voorrang bij storingen en spoedmeldingen",
    "10% korting op reparaties en onderdelen",
    "Gratis adviesgesprekken over energie-optimalisatie",
    "Garantieverlenging op bepaalde onderdelen",
    "Vaste contactpersoon die uw systeem kent",
    "Automatische herinnering voor volgende onderhoudsbeurt",
    "Vast tarief zonder verborgen kosten"
  ];

  const faqItems = [
    {
      question: "Hoe vaak moet mijn airco onderhouden worden?",
      answer: "Voor optimale prestaties en een lange levensduur adviseren wij om uw airconditioning minimaal één keer per jaar professioneel te laten onderhouden. Bij intensief gebruik (bijvoorbeeld in commerciële ruimtes) kan tweemaal per jaar nodig zijn. Regelmatig onderhoud voorkomt storingen, verlengt de levensduur met jaren en bespaart tot 30% op energiekosten."
    },
    {
      question: "Wat kost een jaarlijks onderhoudscontract?",
      answer: "Wij bieden twee onderhoudscontracten: Standaard €11/maand (€132/jaar) en Premium €16/maand (€192/jaar). Beide inclusief jaarlijkse onderhoudsbeurt, voorrang bij storingen en geen voorrijkosten. Premium biedt ook 15% korting op reparaties en een vervangend toestel bij langdurige reparatie. Een losse onderhoudsbeurt zonder contract kost €179."
    },
    {
      question: "Wat houdt een onderhoudsbeurt precies in?",
      answer: "Een complete onderhoudsbeurt omvat reiniging van filters en units, controle van koudemiddelniveau, inspectie van elektrische aansluitingen, testen van alle functies, controle van condensafvoer, reiniging van ventilatorbladen, meten van prestaties en energieverbruik, en een volledig inspectierapport met advies. Onze monteurs nemen 1-2 uur de tijd voor een grondige controle."
    },
    {
      question: "Kan ik zelf mijn airco onderhouden?",
      answer: "U kunt zelf de luchtfilters regelmatig reinigen en de buitenunit vrij houden van bladeren en vuil. Voor grondiger onderhoud zoals controle van koudemiddel, elektrische aansluitingen en interne reiniging is een F-gassen gecertificeerde monteur wettelijk verplicht. Professioneel onderhoud garandeert veiligheid, optimaliseert prestaties en voorkomt schade aan uw dure investering."
    },
    {
      question: "Wat gebeurt er als mijn airco tijdens het contract stuk gaat?",
      answer: "Met een onderhoudscontract krijgt u voorrang bij storingen en spoedmeldingen. In veel gevallen kunnen we binnen 24-48 uur ter plaatse zijn. Onderdelen en arbeidsloon voor reparaties zijn niet standaard inbegrepen maar contracthouders ontvangen 10% korting. Bij sommige contractvormen is een beperkte reparatiedekking mogelijk. We bespreken tijdens onderhoud preventief mogelijke risico's."
    },
    {
      question: "Zijn er seizoensgebonden voordelen voor onderhoud?",
      answer: "Ja, het ideale moment voor airco-onderhoud is in het voorjaar (maart-mei) voordat het koelseizoen begint, of in het najaar (september-november) na het seizoen. Zo bent u verzekerd van optimale koeling in de zomer en verwarmingsfunctie in de winter. Bij een onderhoudscontract plannen wij automatisch het beste moment in overleg met u, rekening houdend met uw voorkeuren en ons onderhoudsschema."
    },
    {
      question: "Werkt u in heel Limburg?",
      answer: "Ja, StayCool Airco levert onderhoudscontracten in heel Limburg inclusief Maastricht, Roermond, Heerlen, Sittard-Geleen, Venlo, Weert en omliggende gemeenten. Onze servicemonteurs zijn regionaal verdeeld voor snelle responstijden. Ook voor bedrijven met meerdere locaties in Limburg bieden we centraal beheerde onderhoudscontracten met één aanspreekpunt."
    },
    {
      question: "Kan ik mijn onderhoudscontract tussentijds opzeggen?",
      answer: "Onze onderhoudscontracten hebben meestal een looptijd van één jaar en worden automatisch verlengd tenzij u drie maanden voor afloop opzegt. Bij tussentijdse beëindiging brengen we eventueel al uitgevoerde werkzaamheden in rekening tegen het standaard uurtarief. We streven naar langdurige relaties en flexibiliteit, dus bij bijzondere omstandigheden zoeken we graag naar een passende oplossing."
    }
  ];

  return (
    <>
      <MetaTags
        title="Jaarlijks Airco Onderhoud Limburg | Preventief Onderhoudscontract | StayCool Airco"
        description="Jaarlijks airco onderhoud ✓ Preventief onderhoudscontract ✓ Tot 30% besparing ✓ F-gassen gecertificeerd ✓ Gratis offerte in heel Limburg!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Jaarlijks Airco Onderhoud",
          description: "Professioneel jaarlijks onderhoud voor airconditioning met preventief onderhoudscontract. F-gassen gecertificeerde specialisten in heel Limburg.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Limburg",
              addressCountry: "NL"
            }
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          },
          serviceType: "Airconditioning Onderhoud"
        }}
      />

      <FAQSchema faqs={faqItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Jaarlijks Airco Onderhoud in Limburg
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Voorkom storingen en bespaar tot 30% op energiekosten met een preventief onderhoudscontract. F-gassen gecertificeerde specialisten in heel Limburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Plan Onderhoud In
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel: 046 202 1430
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              F-gassen gecertificeerd
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Vaste lage tarieven
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Hele Limburg
            </span>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Jaarlijks Airco Onderhoud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professioneel onderhoud verlengt de levensduur, optimaliseert prestaties en voorkomt dure reparaties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professioneel Airco Onderhoud: Investering Die Zich Terugbetaalt
              </h2>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Een airconditioning is een belangrijke investering in uw comfort en welzijn. Net als uw auto heeft uw airco regelmatig <strong>professioneel onderhoud</strong> nodig om optimaal te blijven presteren. Veel eigenaars onderschatten het belang van jaarlijks onderhoud, maar de voordelen zijn aanzienlijk: lagere energiekosten, minder storingen, betere luchtkwaliteit en een fors langere levensduur.
                </p>

                <p>
                  Bij StayCool Airco bieden wij uitgebreide <strong>onderhoudscontracten voor airconditioning</strong> in heel Limburg. Onze F-gassen gecertificeerde monteurs zorgen dat uw systeem jaar na jaar betrouwbaar blijft functioneren. Met een preventief onderhoudscontract bent u verzekerd van regelmatige service en voorkomt u onaangename verrassingen in de hete zomermaanden.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Waarom Is Jaarlijks Airco Onderhoud Essentieel?
                </h3>

                <p>
                  Veel mensen denken dat een airco weinig onderhoud nodig heeft. Niets is minder waar. Een <strong>airconditioning werkt intensief</strong> tijdens warme periodes en pompt grote hoeveelheden lucht en vocht rond. Hierdoor:
                </p>

                <ul className="space-y-2 ml-6">
                  <li><strong>Verzamelen filters stof, pollen en bacteriën</strong> - Dit vermindert luchtkwaliteit en koelprestaties</li>
                  <li><strong>Ontstaat aanslag in de units</strong> - Schimmel en vuil hechten zich aan interne componenten</li>
                  <li><strong>Kan koudemiddel langzaam weglekken</strong> - Dit verlaagt efficiëntie en verhoogt energieverbruik</li>
                  <li><strong>Slijten bewegende delen</strong> - Ventilators, motoren en lagers hebben regelmatige controle nodig</li>
                  <li><strong>Raakt de condensafvoer verstopt</strong> - Dit kan leiden tot waterschade in uw woning</li>
                </ul>

                <p>
                  Onderzoek toont aan dat een goed onderhouden airco <strong>tot 30% efficiënter</strong> werkt dan een verwaarloosd systeem. Over een seizoen bespaart dit honderden euro's aan energiekosten. Bovendien verlengt regelmatig onderhoud de levensduur van uw airco met gemiddeld 5-7 jaar.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Wat Omvat Een Professionele Onderhoudsbeurt?
                </h3>

                <p>
                  Een complete onderhoudsbeurt door StayCool Airco is veel grondiger dan simpel filters reinigen. Onze gecertificeerde monteurs voeren een uitgebreid <strong>10-punten inspectie- en onderhoudsprogramma</strong> uit:
                </p>

                <div className="bg-white rounded-lg p-6 shadow-md my-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Complete Onderhouds Checklist</h4>
                  <ul className="space-y-3">
                    {onderhoudsChecklist.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Elke onderhoudsbeurt duurt ongeveer 1 tot 2 uur, afhankelijk van de grootte en complexiteit van uw systeem. Na afloop ontvangt u een <strong>gedetailleerd inspectierapport</strong> met alle bevindingen en eventuele aanbevelingen voor optimalisatie of toekomstig onderhoud.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Voordelen Van Een Preventief Onderhoudscontract
                </h3>

                <p>
                  Met een <strong>onderhoudscontract van StayCool Airco</strong> zorgt u dat uw airconditioning altijd optimaal functioneert. U hoeft nergens meer aan te denken - wij plannen automatisch uw jaarlijkse onderhoudsbeurt op een moment dat u uitkomt.
                </p>

                <div className="bg-sky-50 border-l-4 border-sky-500 rounded-lg p-6 my-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Wat Krijgt U Met Een Onderhoudscontract?</h4>
                  <ul className="space-y-3">
                    {contractVoordelen.map((voordeel, index) => (
                      <li key={index} className="flex items-start">
                        <TrendingUp className="h-5 w-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
                        <span>{voordeel}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Vooral het aspect van <strong>voorrang bij storingen</strong> is waardevol. Stel: het is een tropische zomerdag en uw airco valt uit. Als contractklant krijgt u prioriteit en kunnen we vaak binnen 24-48 uur ter plaatse zijn. Voor niet-contractklanten kan de wachttijd in het hoogseizoen oplopen tot een week of langer.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  F-Gassen Certificering: Wettelijke Verplichting
                </h3>

                <p>
                  Sinds 2015 is het <strong>wettelijk verplicht</strong> dat enkel F-gassen gecertificeerde monteurs mogen werken aan airconditioningsystemen. Deze certificering garandeert dat:
                </p>

                <ul className="space-y-2 ml-6">
                  <li>De monteur getraind is in veilig omgaan met koudemiddel</li>
                  <li>Werkzaamheden volgens milieunormen worden uitgevoerd</li>
                  <li>Lekkages correct worden gedetecteerd en hersteld</li>
                  <li>Koudemiddel professioneel wordt teruggewonnen en hergebruikt</li>
                </ul>

                <p>
                  Alle monteurs van StayCool Airco zijn <strong>F-gassen gecertificeerd en STEK erkend</strong>. Dit betekent dat u verzekerd bent van vakkundig en wettig uitgevoerd onderhoud. Bovendien zijn wij geregistreerd bij de Nederlandse Emissieautoriteit (NEa) zoals wettelijk vereist voor bedrijven die met F-gassen werken.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Wanneer Is Het Beste Moment Voor Airco Onderhoud?
                </h3>

                <p>
                  Het <strong>ideale moment voor airco-onderhoud is het voorjaar</strong> (maart tot mei), vlak voordat het koelseizoen begint. Zo weet u zeker dat uw systeem optimaal presteert wanneer u het het hardst nodig heeft. Een tweede goed moment is het najaar (september-november), na een intensief gebruikt zomerseizoen.
                </p>

                <p>
                  Bij airconditioners met <strong>verwarmingsfunctie (heat pump)</strong> is jaarlijks onderhoud nog belangrijker, omdat het systeem het hele jaar door wordt gebruikt. Voor deze systemen adviseren wij vaak onderhoud in het voorjaar, zodat zowel de koel- als verwarmingsfunctie worden gecontroleerd.
                </p>

                <p>
                  Met een onderhoudscontract plannen wij automatisch het <strong>optimale onderhoudstijdstip</strong> voor uw specifieke situatie. We houden rekening met uw gebruikspatroon, het type systeem en natuurlijk uw eigen voorkeuren.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vraag Direct Een Onderhoudscontract Aan</h3>
                <p className="text-gray-600 mb-6">
                  Ontvang binnen 24 uur een offerte op maat voor jaarlijks onderhoud van uw airconditioning
                </p>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Gratis Offerte Aanvragen
                  </Link>

                  <a
                    href="tel:0462021430"
                    className="block w-full text-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Phone className="inline h-5 w-5 mr-2" />
                    046 202 1430
                  </a>

                  <a
                    href="https://wa.me/31636481054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp Contact
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Waarom StayCool Airco?</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      F-gassen gecertificeerd
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      15+ jaar ervaring
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Vaste lage tarieven
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Service in heel Limburg
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
                      Snelle responstijd
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Gerelateerde Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-reparatie-service" className="text-sky-600 hover:text-sky-700">
                        → Airco Reparatie Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-filter-reiniging" className="text-sky-600 hover:text-sky-700">
                        → Filter Reiniging
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen" className="text-sky-600 hover:text-sky-700">
                        → Koudemiddel Bijvullen
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo/pillar-2-onderhoud-service/airco-storing-oplossen" className="text-sky-600 hover:text-sky-700">
                        → Storing Oplossen
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen Over Airco Onderhoud
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Nu Uw Jaarlijks Airco Onderhoud
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Voorkom storingen en bespaar op energiekosten. Ontvang binnen 24 uur een offerte op maat voor een onderhoudscontract
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calendar className="h-6 w-6 mr-2" />
              Vraag Gratis Offerte Aan
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default JaarlijksAircoOnderhoud;
