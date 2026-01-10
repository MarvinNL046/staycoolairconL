import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, AlertTriangle, Shield, Wind, ThermometerSun, Volume2, Award, Phone, Mail, Wrench } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoBuitenunitPlaatsing = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Technische Gidsen', path: '/seo/pillar-7-technische-gidsen' },
    { label: 'Airco Buitenunit Plaatsing' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Professionele plaatsing volgens geldende normen en regelgeving"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Locatie-analyse",
      description: "Gratis locatie-inspectie voor optimale prestaties en levensduur"
    },
    {
      icon: <Volume2 className="h-12 w-12 text-sky-500" />,
      title: "Geluidsarm",
      description: "Correcte plaatsing voorkomt geluidsoverlast voor u en buren"
    },
    {
      icon: <Wrench className="h-12 w-12 text-sky-500" />,
      title: "Deskundige Installatie",
      description: "Vakkundige montage met 10 jaar garantie op premium merken"
    }
  ];

  const placementFactors = [
    {
      factor: "Luchtcirculatie",
      importance: "Kritiek",
      description: "Minimum 30cm rondom unit, geen obstructies voor ventilatie",
      icon: <Wind className="h-8 w-8 text-orange-500" />
    },
    {
      factor: "Zonlichttoetreding",
      description: "Schaduwlocatie verhoogt efficiëntie met 5-10%, vermijd direct zonlicht",
      icon: <ThermometerSun className="h-8 w-8 text-orange-500" />
    },
    {
      factor: "Geluidsoverlast",
      importance: "Belangrijk",
      description: "Afstand tot slaapkamers  meer dan 3m, naburen  meer dan 5m, gebruik trillingdempers",
      icon: <Volume2 className="h-8 w-8 text-orange-500" />
    },
    {
      factor: "Leidinglengte",
      importance: "Kritiek",
      description: "Maximaal 15-25m afhankelijk van merk, korter = efficiënter",
      icon: <MapPin className="h-8 w-8 text-orange-500" />
    }
  ];

  const idealLocations = [
    {
      location: "Zijgevel Woning",
      pros: ["Korte leidinglengte", "Uit het zicht vanaf straat", "Goede ventilatie"],
      cons: ["Let op naburen", "Mogelijk geluidsreflectie"],
      rating: "Uitstekend"
    },
    {
      location: "Achtergevel/Tuin",
      pros: ["Ver van slaapkamers", "Privacy gewaarborgd", "Minimale geluidsoverlast"],
      cons: ["Langere leidinglengte mogelijk", "Extra leidingwerk"],
      rating: "Zeer Goed"
    },
    {
      location: "Plat Dak",
      pros: ["Geen geluidsoverlast", "Optimale ventilatie", "Onzichtbaar"],
      cons: ["Dure installatie", "Moeilijk onderhoud", "Langere leidingen"],
      rating: "Goed"
    },
    {
      location: "Voorgevel",
      pros: ["Korte leidingen mogelijk", "Eenvoudige installatie"],
      cons: ["Zichtbaar vanaf straat", "Esthetisch minder fraai", "Mogelijk vergunning"],
      rating: "Matig"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Plaatsing in Zon",
      consequence: "10-15% verminderde efficiëntie en hogere energiekosten",
      solution: "Kies schaduwlocatie of plaats overkapping/zonnescherm"
    },
    {
      mistake: "Te Dicht bij Muur",
      consequence: "Beperkte luchtstroom, oververhitting, frequent defect",
      solution: "Minimaal 30cm rondom unit, ideaal 50cm aan voorzijde"
    },
    {
      mistake: "Nabij Slaapkamer",
      consequence: "Geluidsoverlast 's nachts, klachten van bewoners/buren",
      solution: "Minimum 3-5m afstand tot slaapkamers, gebruik trillingdempers"
    },
    {
      mistake: "Onveilige Bevestiging",
      consequence: "Trillingen, geluid, vallend risico bij storm",
      solution: "Professionele muurbeugels of stabiel fundament op betonplaat"
    },
    {
      mistake: "Onvoldoende Drainage",
      consequence: "Wateroverlast, vorstschade, aantasting bouwconstructie",
      solution: "Correct afschot, drainage naar riool of afvoergoot"
    },
    {
      mistake: "Te Lange Leidingen",
      consequence: "20-30% capaciteitsverlies, verhoogd energieverbruik",
      solution: "Plan locatie binnen 10m van binnenunit voor optimale prestaties"
    }
  ];

  const installationRequirements = [
    {
      requirement: "Structurele Draagkracht",
      details: "Muur moet gewicht dragen (40-80 kg), spouwmuur vergt speciale bevestiging"
    },
    {
      requirement: "Ventilatie-ruimte",
      details: "30cm aan alle zijden, 50cm voor luchtuitlaat, geen belemmeringen"
    },
    {
      requirement: "Elektrische Aansluiting",
      details: "230V of 400V binnen 5m, aardlekschakelaar verplicht, aparte groep"
    },
    {
      requirement: "Condensafvoer",
      details: "Afschot minimum 1%, afvoer naar riool of goot, frostbeveiliging"
    },
    {
      requirement: "Geluidsoverwegingen",
      details: "Afstand buren  meer dan 5m, trillingdempers, geen holle muren/resonantie"
    },
    {
      requirement: "Toegankelijkheid",
      details: "Ruimte voor onderhoud, filter toegankelijk, serviceruimte 60cm"
    }
  ];

  const faqs = [
    {
      question: "Waar moet ik de airco buitenunit plaatsen voor optimale prestaties?",
      answer: "De ideale locatie voor een airco buitenunit combineert meerdere factoren: voldoende ventilatie met minimaal 30cm vrije ruimte rondom, bij voorkeur in de schaduw om oververhitting te voorkomen, zo kort mogelijke afstand tot de binnenunit (maximaal 10-15m voor beste efficiëntie), minimale geluidsoverlast voor bewoners en buren ( meer dan 3m van slaapkamers), en een stevige ondergrond of muurbevestiging. De zijgevel of achtergevel van de woning zijn meestal de beste opties, omdat deze korte leidinglengtes combineren met privacy en goede ventilatie. Vermijd plaatsing in direct zonlicht, bij afvoerventilatieroosters, of te dicht bij openstaande ramen."
    },
    {
      question: "Hoeveel ruimte heb ik nodig rond de buitenunit?",
      answer: "Voor optimale werking en levensduur heeft de buitenunit aan alle zijden minimaal 30cm vrije ruimte nodig, met uitzondering van de voorzijde waar het ventilatierrooster zit - daar is 50cm ideaal. Dit zorgt voor voldoende luchtcirculatie en voorkomt oververhitting. Bovendien is toegang nodig voor onderhoud: aan minimaal één zijde 60cm werkruimte zodat filters bereikbaar zijn en service uitgevoerd kan worden. Bij plaatsing in een nis of tussen muren moet u extra ventilatie voorzien. Te weinig ruimte leidt tot verminderde koelcapaciteit (tot 20% minder), hogere energiekosten en kortere levensduur door oververhitting van de compressor."
    },
    {
      question: "Kan ik de buitenunit zelf plaatsen of is professionele installatie noodzakelijk?",
      answer: "Professionele installatie is wettelijk verplicht en sterk aanbevolen. Sinds 2008 mag airco-installatie alleen uitgevoerd worden door F-gassen gecertificeerde installateurs vanwege de koudemiddelen. Daarnaast vereist correcte plaatsing vakkennis over constructieve stevigheid, elektrische aansluitingen volgens NEN1010, koudemiddelenleidingen lassen en vacuüm trekken, correcte afschot voor condensafvoer, en naleving van geluidsnormen. Verkeerde plaatsing kan leiden tot garantieverlies, geluidsoverlast, waterschade, brandgevaar bij foute elektrische aansluiting, en boetes tot €18.000 voor illegale F-gassen werkzaamheden. De investering in professionele installatie (€400-800) voorkomt veel grotere problemen en kosten."
    },
    {
      question: "Hoe voorkom ik geluidsoverlast van de buitenunit?",
      answer: "Geluidsoverlast voorkomt u door strategische plaatsing en technische maatregelen. Plaats de unit minimaal 3 meter van slaapkamerramen (eigen woning én buren), bij voorkeur aan de zijgevel tegenover slaapkamers. Gebruik altijd trillingdempers tussen unit en bevestiging om geluidsoverdracht naar de constructie te voorkomen. Vermijd plaatsing bij hoeken of tussen muren die geluid reflecteren. Kies een unit met laag geluidsniveau (moderne units: 19-25 dB(A) op 3m afstand). Moderne inverter-systemen werken 's nachts op lager toerental met nog minder geluid. Voor extra demping kunt u een geluidsscherm plaatsen, maar dit mag de ventilatie niet belemmeren. Een professioneel geplaatste unit met trillingdempers is normaal onhoorbaar in slaapkamers."
    },
    {
      question: "Wat is de maximale afstand tussen binnen- en buitenunit?",
      answer: "De maximale leidinglengte varieert per merk en model: standaard systemen 15-20 meter, premium merken (Daikin, Mitsubishi) tot 25-30 meter, en speciale long-distance modellen tot 50 meter. Echter, elke meter leiding reduceert de efficiëntie met ongeveer 1-2%. Bij 15m leidinglengte verliest u dus 15-30% capaciteit en efficiëntie vergeleken met 5m. De ideale afstand is 5-10m waarbij efficiëntie minimaal wordt beïnvloed. Bij langere afstanden moet u mogelijk een grotere capaciteit kiezen om het verlies te compenseren. Ook speelt hoogteverschil een rol: standaard maximaal 10m, sommige systemen tot 20m. Plan daarom de buitenunit zo dicht mogelijk bij de binnenunit, bij voorkeur binnen 10m voor optimale prestaties en lagere installatiekosten."
    },
    {
      question: "Moet de buitenunit in de schaduw staan?",
      answer: "Plaatsing in de schaduw is sterk aanbevolen maar niet absoluut noodzakelijk. Een buitenunit in direct zonlicht kan 40-50°C warm worden, terwijl de omgevingstemperatuur 30°C is. Dit verhoogt de compressortemperatuur, vermindert de efficiëntie met 5-15%, verhoogt het energieverbruik met 10-20%, en verkort de levensduur. Oplossingen: kies een noordgevel of oostgevel (minder zon), plaats een overkapping boven de unit (minimaal 30cm ruimte), plant begroeiing voor schaduw (maar niet te dicht - minimaal 50cm), of gebruik een reflecterend zonnescherm. Als plaatsing in de zon onvermijdelijk is, compenseer dan met extra ventilatie en kies een unit met hogere temperatuurtolerantie. Fabrikanten garanderen werking tot 43-46°C buitentemperatuur, maar koeler is altijd beter voor efficiëntie."
    },
    {
      question: "Welke vergunningen heb ik nodig voor plaatsing van een buitenunit?",
      answer: "Voor de meeste situaties is plaatsing van een airco buitenunit vergunningsvrij, maar er zijn uitzonderingen. Geen vergunning nodig bij: plaatsing aan zij- of achtergevel, hoogte  minder dan 2m vanaf maaiveld, afstand  meer dan 1m vanaf erfgrens, en niet in beschermd stadsgezicht. Wel vergunning of melding nodig bij: monumentale panden, beschermde stads- of dorpsgezichten, plaatsing aan voorgevel of zichtbaar vanaf openbare weg, binnen 1m van erfgrens (toestemming buren), appartementen/VvE (vaak goedkeuring VvE-bestuur vereist), en sommige gemeenten hebben lokale welstandseisen. Controleer altijd de regels bij uw gemeente via het omgevingsloket. Ook VvE-reglementen kunnen strengere eisen stellen dan de wet. Bespreek plaatsing met buren om latere conflicten te voorkomen, vooral bij gedeelde muren."
    },
    {
      question: "Hoe wordt de buitenunit bevestigd en is mijn muur sterk genoeg?",
      answer: "Buitenunits worden op twee manieren bevestigd: muurbeugels of grondplaatsing. Voor muurbevestiging wordt de unit (40-80 kg) gemonteerd op stevige stalen beugels die in de muur verankerd zijn. Dit vereist een stevige bakstenen of betonnen muur - spouwmuren vereisen speciale ankers of een steunplaat. De beugels worden bevestigd met chemische ankers (M10-M12) die 200-400 kg kunnen dragen per anker. Voor grondplaatsing wordt een betonnen fundering gegoten (40x60x15cm) of een kunststof onderstel geplaatst, verhoogd 10-15cm voor drainage en vorstbeveiliging. Houten gevels of gipsplaten zijn ongeschikt voor directe montage. Een professionele installateur beoordeelt de draagkracht en kiest de juiste bevestigingsmethode. Trillingdempers tussen beugels en unit zijn essentieel om geluidsoverdracht te voorkomen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Buitenunit Plaatsing Limburg | Optimale Locatie Kiezen | StayCool Airco"
        description="Airco buitenunit plaatsing ✓ Optimale locatie voor prestaties ✓ Voorkom geluidsoverlast ✓ Professionele installatie ✓ F-gassen gecertificeerd. Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Buitenunit Plaatsing",
          description: "Professionele plaatsing van airco buitenunits voor optimale prestaties, minimale geluidsoverlast en maximale levensduur",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Buitenunit Plaatsing: De Optimale Locatie Kiezen
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8">
            Professioneel advies voor perfecte plaatsing - maximale prestaties, minimale geluidsoverlast en optimale levensduur gegarandeerd
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <MapPin className="h-6 w-6 mr-2" />
              Gratis Locatie-inspectie
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sky-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>10 jaar garantie</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Geluidsarm</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Main Content - Why Location Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom de Juiste Locatie Cruciaal Is voor Uw Airco
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              De plaatsing van de buitenunit is een van de belangrijkste factoren die de prestaties, efficiëntie, levensduur en gebruikscomfort van uw airconditioningsysteem bepalen. Een verkeerde locatiekeuze kan leiden tot 20-30% verminderde efficiëntie, verhoogde geluidsoverlast, frequente storingen en een levensduurverkorting van wel 50%. Bij StayCool Airco voeren onze F-gassen gecertificeerde installateurs altijd een grondige locatie-analyse uit om de optimale positie te bepalen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Impact op Efficiëntie en Prestaties
            </h3>
            <p className="text-gray-600 mb-4">
              De buitenunit moet warmte afvoeren naar de omgeving, een proces dat sterk beïnvloed wordt door omgevingsfactoren. Een unit die in direct zonlicht staat, kan in de zomer oplopen tot 40-50°C, waardoor de compressor veel harder moet werken om warmte af te voeren. Dit resulteert in 10-15% lagere efficiëntie en tot 20% hoger energieverbruik. De ideale locatie is in de schaduw met goede natuurlijke ventilatie.
            </p>
            <p className="text-gray-600 mb-4">
              Beperkte luchtcirculatie rondom de unit heeft een nog groter effect. Als de unit te dicht bij muren of andere obstakels staat, kan de warme uitlaatlucht niet efficiënt wegstromen en wordt gedeeltelijk weer aangezogen. Dit fenomeen, kortsluitwerking genoemd, kan de efficiëntie met 20-30% verminderen en in extreme gevallen leiden tot oververhitting en automatische uitschakeling. Daarom eisen fabrikanten minimaal 30cm vrije ruimte aan alle zijden en 50cm aan de voorzijde waar het ventilatierrooster zit.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Geluidsoverwegingen en Burenrelatie
            </h3>
            <p className="text-gray-600 mb-4">
              Moderne airco buitenunits produceren 19-25 dB(A) geluid op 3 meter afstand - vergelijkbaar met gefluister of een rustige bibliotheek. Ondanks deze lage waarden kan verkeerde plaatsing toch tot overlast leiden. Plaatsing naast een slaapkamerraam, bij een hoek die geluid reflecteert, of zonder trillingdempers kan het ervaren geluid verdubbelen. Bovendien varieert de geluidproductie: 's nachts bij lagere belasting is het stiller, maar op hete dagen draait de ventilator sneller met meer geluid.
            </p>
            <p className="text-gray-600 mb-4">
              De burenrelatie is evenzeer belangrijk. Hoewel 40 dB(A) aan de erfgrens wettelijk toegestaan is, adviseren wij een ruimere marge. Plaatsing binnen 5 meter van buren slaapkamers kan tot klachten leiden, zelfs als u binnen de wettelijke normen blijft. De beste praktijk is minimaal 5 meter afstand tot buren ramen, gebruik van trillingdempers, en waar mogelijk plaatsing aan de zijde tegenover buren slaapvertrekken. Een voorbespreking met buren voorkomt latere conflicten en draagt bij aan goede burenrelaties.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Leidinglengte en Installatiekosten
            </h3>
            <p className="text-gray-600 mb-4">
              De afstand tussen binnen- en buitenunit beïnvloedt zowel de prestaties als de kosten. Koudemiddelleidingen kunnen maximaal 15-25 meter lang zijn (afhankelijk van merk en model), maar elke meter resulteert in 1-2% capaciteitsverlies door drukverlies en warmteuitwisseling. Een leidinglengte van 15 meter betekent dus 15-30% verminderde efficiëntie vergeleken met een optimale 5 meter.
            </p>
            <p className="text-gray-600 mb-4">
              Installatiekosten stijgen lineair met de leidinglengte. Standaard installaties rekenen met 3-5 meter leiding; elke extra meter kost €15-25 voor materiaal en arbeid. Een 15 meter installatie kost dus €150-250 extra vergeleken met 5 meter. Daarnaast moet bij langere leidingen extra koudemiddel toegevoegd worden (€30-50 per kilo), en neemt de kans op lekkage toe bij meer verbindingen. De ideale locatie combineert daarom korte leidinglengte met optimale prestatie-omstandigheden.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Factors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cruciale Factoren bij Locatiekeuze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placementFactors.map((item, index) => (
              <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.factor}</h3>
                      {item.importance && (
                        <span className="text-xs font-semibold px-2 py-1 bg-orange-500 text-white rounded">
                          {item.importance}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Locations Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Vergelijking Plaatsingsopties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idealLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{location.location}</h3>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    location.rating === 'Uitstekend' ? 'bg-green-100 text-green-800' :
                    location.rating === 'Zeer Goed' ? 'bg-blue-100 text-blue-800' :
                    location.rating === 'Goed' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {location.rating}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Voordelen
                    </h4>
                    <ul className="space-y-1">
                      {location.pros.map((pro, idx) => (
                        <li key={idx} className="text-gray-600 text-sm ml-7">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Aandachtspunten
                    </h4>
                    <ul className="space-y-1">
                      {location.cons.map((con, idx) => (
                        <li key={idx} className="text-gray-600 text-sm ml-7">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Veelgemaakte Fouten bij Buitenunit Plaatsing
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.mistake}</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Gevolg:</span> {item.consequence}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-green-700">Oplossing:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Technische Installatievereisten
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {installationRequirements.map((req, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{req.requirement}</h3>
                  <p className="text-gray-600">{req.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professionele Installatie Verplicht</h3>
              <p className="text-gray-700 mb-4">
                Sinds 2008 is installatie van airconditioners wettelijk alleen toegestaan voor F-gassen gecertificeerde installateurs. Dit certificaat garandeert vakkennis over koudemiddelen, elektrische veiligheid, en constructieve bevestiging. Onbevoegde installatie kan leiden tot:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Boetes tot €18.000 voor illegale F-gassen werkzaamheden</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Verlies van fabrieksgarantie en verzekeringsdekking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Risico op elektrische schade, brand en waterschade</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Aansprakelijkheid bij schade aan bouwconstructie of buren</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gratis Locatie-inspectie en Advies op Maat
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze F-gassen gecertificeerde installateurs bezoeken uw woning voor een grondige analyse en adviseren de optimale plaatsingslocatie voor prestaties, comfort en levensduur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Plan Gratis Inspectie
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen over Buitenunit Plaatsing
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Professionele Installatie?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Neem contact op voor gratis advies en ontdek de beste plaatsingslocatie voor uw airco buitenunit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Gratis Offerte Aanvragen
            </Link>
            <a
              href="https://wa.me/31636481054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-700 text-white font-bold rounded-lg hover:bg-sky-800 transition-colors text-lg"
            >
              WhatsApp: 06 36481054
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoBuitenunitPlaatsing;
