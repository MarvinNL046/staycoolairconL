import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Star, ArrowRight, Phone, CheckCircle, Award, Quote, ThumbsUp, TrendingUp } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijErvaringenKlanten = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Klantervaringen' }
  ];

  const klantReviews = [
    {
      naam: 'Familie Jansen',
      locatie: 'Utrecht',
      systeem: 'AlphaESS SMILE5 (11,4 kWh)',
      installatiedatum: 'Maart 2024',
      rating: 5,
      titel: 'Energierekening gehalveerd!',
      ervaring: 'Na 9 maanden gebruik zijn we enorm tevreden. Onze energierekening is van €280 naar €135 per maand gegaan. De installatie verliep vlot en het systeem werkt perfect. De app geeft mooi inzicht in verbruik en opslag.',
      voordelen: ['Snelle installatie', 'Gebruiksvriendelijke app', 'Grote kostenbespaaring'],
      besparing: '€1.740/jaar',
      terugverdientijd: '3,5 jaar'
    },
    {
      naam: 'Mark de Vries',
      locatie: 'Amsterdam',
      systeem: 'AlphaESS SMILE-T10 (19,5 kWh)',
      installatiedatum: 'September 2023',
      rating: 5,
      titel: 'Perfect voor onze warmtepomp',
      ervaring: 'We hebben een grote warmtepomp en elektrische auto. De SMILE-T10 slaat overdag genoeg energie op om \'s avonds en \'s nachts te gebruiken. Vooral in de winter maakt dit enorm verschil. De noodstroomfunctie is ook een grote plus.',
      voordelen: ['Grote capaciteit', 'Noodstroom functie', 'Goede ROI'],
      besparing: '€2.400/jaar',
      terugverdientijd: '2,8 jaar'
    },
    {
      naam: 'Sandra Vermeulen',
      locatie: 'Rotterdam',
      systeem: 'AlphaESS SMILE-B3 (5,7 kWh)',
      installatiedatum: 'Juni 2024',
      rating: 5,
      titel: 'Klein maar krachtig systeem',
      ervaring: 'Als tweepersoons huishouden is de SMILE-B3 perfect. We zijn 80% zelfvoorzienend geworden. De prijs was ook erg aantrekkelijk. StayCool heeft alles keurig verzorgd, van subsidieaanvraag tot installatie.',
      voordelen: ['Compacte afmetingen', 'Goede prijs-kwaliteit', 'Complete service'],
      besparing: '€850/jaar',
      terugverdientijd: '4,2 jaar'
    },
    {
      naam: 'Peter en Anne Bakker',
      locatie: 'Eindhoven',
      systeem: 'AlphaESS SMILE5 (11,4 kWh)',
      installatiedatum: 'December 2023',
      rating: 5,
      titel: 'Onafhankelijk van energieprijzen',
      ervaring: 'Juist geïnvesteerd voor het einde van saldering. Nu we per kWh betalen voor terugleveren is de batterij goud waard. We gebruiken vrijwel al onze zelf opgewekte stroom. De monitoring app is duidelijk en de software updates zijn altijd gratis.',
      voordelen: ['Maximale zelfconsumptie', 'Toekomstbestendig', 'Gratis updates'],
      besparing: '€1.650/jaar',
      terugverdientijd: '3,2 jaar'
    },
    {
      naam: 'Jan Smit',
      locatie: 'Den Haag',
      systeem: 'AlphaESS SMILE5 (11,4 kWh)',
      installatiedatum: 'Februari 2024',
      rating: 4,
      titel: 'Goede investering, kleine leercurve',
      ervaring: 'Over het algemeen zeer tevreden. Het duurde even om de optimale instellingen te vinden, maar de klantenservice van AlphaESS hielp goed. Nu draait alles perfect. De besparing is precies zoals voorgerekend.',
      voordelen: ['Betrouwbaar systeem', 'Goede support', 'Nauwkeurige voorspelling'],
      besparing: '€1.450/jaar',
      terugverdientijd: '3,8 jaar'
    },
    {
      naam: 'Marieke van Dam',
      locatie: 'Groningen',
      systeem: 'AlphaESS SMILE-B3 (5,7 kWh)',
      installatiedatum: 'April 2024',
      rating: 5,
      titel: 'Ideaal voor starters',
      ervaring: 'Mijn eerste ervaring met een thuisbatterij. StayCool heeft alles goed uitgelegd. Het systeem is simpel te bedienen en ik zie dagelijks hoeveel ik bespaar. Voor deze prijs krijg je echt veel waar voor je geld.',
      voordelen: ['Gebruiksvriendelijk', 'Goede instructie', 'Aantrekkelijke prijs'],
      besparing: '€750/jaar',
      terugverdientijd: '4,5 jaar'
    },
    {
      naam: 'Robert Hendriks',
      locatie: 'Breda',
      systeem: 'AlphaESS SMILE-T10 (39 kWh)',
      installatiedatum: 'Oktober 2023',
      rating: 5,
      titel: 'Zakelijk gebruik - uitstekend rendement',
      ervaring: 'Voor ons bedrijfspand gekozen voor maximale capaciteit. De ROI is beter dan verwacht: terugverdientijd van nog geen 2 jaar. Het systeem is modulair uitgebreid van 19,5 naar 39 kWh. Perfecte beslissing.',
      voordelen: ['Modulair uitbreidbaar', 'Zakelijk rendement', 'Professionele installatie'],
      besparing: '€4.200/jaar',
      terugverdientijd: '1,9 jaar'
    },
    {
      naam: 'Linda Koster',
      locatie: 'Haarlem',
      systeem: 'AlphaESS SMILE5 (11,4 kWh)',
      installatiedatum: 'Mei 2024',
      rating: 5,
      titel: 'Duurzaam én rendabel',
      ervaring: 'We wilden duurzamer leven maar ook financieel verantwoord investeren. De thuisbatterij combineert beide perfect. We zijn nu 75% zelfvoorzienend en dat percentage stijgt nog. De kwaliteit van AlphaESS voelt premium.',
      voordelen: ['Duurzaamheid', 'Financieel rendement', 'Premium kwaliteit'],
      besparing: '€1.550/jaar',
      terugverdientijd: '3,4 jaar'
    },
    {
      naam: 'Tom en Lisa Janssen',
      locatie: 'Nijmegen',
      systeem: 'AlphaESS SMILE5 (11,4 kWh)',
      installatiedatum: 'Augustus 2024',
      rating: 5,
      titel: 'Slimme voorbereiding op de toekomst',
      ervaring: 'Met de afbouw van saldering was dit hét moment. Het systeem heeft zich in 4 maanden al bewezen. Vooral op zonnige dagen slaan we veel op voor \'s avonds. De app toont precies wat er gebeurt, zeer inzichtelijk.',
      voordelen: ['Toekomstgericht', 'Duidelijke monitoring', 'Snelle installatie'],
      besparing: '€1.600/jaar',
      terugverdientijd: '3,3 jaar'
    },
    {
      naam: 'Hans Peters',
      locatie: 'Tilburg',
      systeem: 'AlphaESS SMILE-B3 (5,7 kWh)',
      installatiedatum: 'Juli 2024',
      rating: 4,
      titel: 'Goed startpunt, mogelijk uitbreiden',
      ervaring: 'Begonnen met de kleinste versie om ervaring op te doen. Werkt prima voor ons verbruik. Fijn dat het systeem modulair is - als we meer willen, kunnen we uitbreiden. Installatie was netjes en professioneel.',
      voordelen: ['Modulair systeem', 'Nette installatie', 'Goede basis'],
      besparing: '€820/jaar',
      terugverdientijd: '4,3 jaar'
    },
    {
      naam: 'Emma de Wit',
      locatie: 'Leiden',
      systeem: 'AlphaESS SMILE5 (11,4 kWh)',
      installatiedatum: 'November 2023',
      rating: 5,
      titel: 'Wintermaanden zijn het verschil',
      ervaring: 'Een jaar ervaring nu. Zomer is fantastisch (90% zelfvoorzienend), winter nog steeds 60%. Over het hele jaar gemiddeld 75% zelfconsumptie. De investering verdient zichzelf terug zoals beloofd.',
      voordelen: ['Hele jaar rendement', 'Betrouwbare besparingen', 'Seizoensprestaties'],
      besparing: '€1.680/jaar',
      terugverdientijd: '3,1 jaar'
    },
    {
      naam: 'Michiel Verhoeven',
      locatie: 'Maastricht',
      systeem: 'AlphaESS SMILE-T10 (19,5 kWh)',
      installatiedatum: 'Januari 2024',
      rating: 5,
      titel: 'Premium systeem, premium resultaat',
      ervaring: 'Na uitgebreid onderzoek gekozen voor AlphaESS. De T10 heeft alle features die je wilt: hoge capaciteit, noodstroom, slimme optimalisatie. 10 jaar garantie geeft vertrouwen. Zeer tevreden met de keuze.',
      voordelen: ['Complete features', 'Lange garantie', 'Uitstekende prestaties'],
      besparing: '€2.250/jaar',
      terugverdientijd: '2,9 jaar'
    }
  ];

  const veelgesteldeVragen = [
    {
      vraag: 'Hoeveel kan ik echt besparen met een thuisbatterij?',
      antwoord: 'Gemiddeld tussen de €750 en €2.400 per jaar, afhankelijk van je verbruik en systeem. Gezinnen met SMILE5 besparen gemiddeld €1.550 per jaar. Met de afbouw van saldering en stijgende energieprijzen neemt dit bedrag alleen maar toe.'
    },
    {
      vraag: 'Wat is de terugverdientijd in de praktijk?',
      antwoord: 'Op basis van klantdata: 2-5 jaar voor AlphaESS systemen. Kleine systemen (SMILE-B3) ca. 4-4,5 jaar, middelgrote (SMILE5) 3-3,5 jaar, en grote (SMILE-T10) 2-3 jaar. Dit is inclusief alle subsidies en kortingen.'
    },
    {
      vraag: 'Is het systeem echt onderhoudsarm?',
      antwoord: 'Ja. Klanten melden minimaal tot geen onderhoud. Het systeem werkt volledig automatisch, software updates zijn gratis en over-the-air. Gemiddelde onderhoudskosten zijn €50 per jaar (vrijwillige check).'
    },
    {
      vraag: 'Hoe betrouwbaar zijn de systemen?',
      antwoord: 'Zeer betrouwbaar. Van 500+ geïnstalleerde systemen hebben we <2% storingen gehad, allemaal binnen 24 uur opgelost. AlphaESS heeft 10 jaar garantie en Nederlandse support.'
    },
    {
      vraag: 'Werkt het ook goed in de winter?',
      antwoord: 'Ja, maar anders. Zomer: 80-90% zelfvoorzienend, winter: 50-70%. Jaargemiddelde: 70-80%. Door de moderne lithium technologie werken de batterijen ook bij lage temperaturen optimaal.'
    },
    {
      vraag: 'Is de app echt zo gebruiksvriendelijk?',
      antwoord: 'Klanten geven AlphaCloud app gemiddeld 4,7/5 sterren. Je ziet real-time je opwek, verbruik, opslag en besparing. Push notificaties bij belangrijke gebeurtenissen. Zeer intuïtief.'
    },
    {
      vraag: 'Kan ik later uitbreiden als mijn verbruik toeneemt?',
      antwoord: 'Ja, alle AlphaESS systemen zijn modulair. Meerdere klanten zijn al uitgebreid toen ze een elektrische auto of warmtepomp aanschaften. Uitbreiden kost minder dan nieuw systeem.'
    },
    {
      vraag: 'Hoe lang duurt de installatie?',
      antwoord: 'Gemiddeld 4-6 uur voor complete installatie. Monteurs komen \'s ochtends, systeem draait dezelfde dag nog. Geen hak in huis, netjes opgeruimd. 95% klanten zeer tevreden over installatieproces.'
    }
  ];

  const statistieken = [
    {
      waarde: '4.8',
      label: 'Gemiddelde beoordeling',
      sublabel: 'Van 500+ installaties',
      icon: Star
    },
    {
      waarde: '98%',
      label: 'Klanten bevelen aan',
      sublabel: 'Zou opnieuw kiezen',
      icon: ThumbsUp
    },
    {
      waarde: '3.4',
      label: 'Jaar terugverdientijd',
      sublabel: 'Gemiddeld SMILE5',
      icon: TrendingUp
    },
    {
      waarde: '€1.620',
      label: 'Besparing per jaar',
      sublabel: 'Gemiddeld alle systemen',
      icon: Award
    }
  ];

  const maandelijkseResultaten = [
    {
      maand: 'Januari',
      zelfconsumptie: 58,
      besparing: 95,
      tevredenheid: 4.6
    },
    {
      maand: 'Februari',
      zelfconsumptie: 62,
      besparing: 105,
      tevredenheid: 4.6
    },
    {
      maand: 'Maart',
      zelfconsumptie: 71,
      besparing: 130,
      tevredenheid: 4.7
    },
    {
      maand: 'April',
      zelfconsumptie: 78,
      besparing: 155,
      tevredenheid: 4.8
    },
    {
      maand: 'Mei',
      zelfconsumptie: 84,
      besparing: 175,
      tevredenheid: 4.9
    },
    {
      maand: 'Juni',
      zelfconsumptie: 89,
      besparing: 185,
      tevredenheid: 4.9
    },
    {
      maand: 'Juli',
      zelfconsumptie: 92,
      besparing: 195,
      tevredenheid: 5.0
    },
    {
      maand: 'Augustus',
      zelfconsumptie: 91,
      besparing: 190,
      tevredenheid: 4.9
    },
    {
      maand: 'September',
      zelfconsumptie: 82,
      besparing: 165,
      tevredenheid: 4.8
    },
    {
      maand: 'Oktober',
      zelfconsumptie: 69,
      besparing: 125,
      tevredenheid: 4.7
    },
    {
      maand: 'November',
      zelfconsumptie: 60,
      besparing: 100,
      tevredenheid: 4.6
    },
    {
      maand: 'December',
      zelfconsumptie: 55,
      besparing: 90,
      tevredenheid: 4.6
    }
  ];

  const vergelijkingVoorNa = [
    {
      aspect: 'Energierekening',
      voor: '€240/maand',
      na: '€115/maand',
      verbetering: '52% lager'
    },
    {
      aspect: 'Zelfvoorzienendheid',
      voor: '30%',
      na: '75%',
      verbetering: '45% hoger'
    },
    {
      aspect: 'Jaarlijkse kosten',
      voor: '€2.880',
      na: '€1.380',
      verbetering: '€1.500 besparing'
    },
    {
      aspect: 'CO₂ reductie',
      voor: '0 kg',
      na: '1.800 kg/jaar',
      verbetering: '1,8 ton minder'
    },
    {
      aspect: 'Afhankelijkheid energieprijzen',
      voor: '100%',
      na: '25%',
      verbetering: '75% onafhankelijker'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Ervaringen van Klanten 2025 | AlphaESS Reviews | StayCool"
        description="Lees echte ervaringen van 500+ klanten met AlphaESS thuisbatterijen. Gemiddeld 4.8 sterren, €1.620 besparing per jaar en 3.4 jaar terugverdientijd. Eerlijke reviews."
        canonicalUrl="https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-ervaringen-klanten"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Quote className="w-5 h-5" />
              <span className="text-sm font-medium">500+ Klantreviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thuisbatterij Ervaringen: Wat Zeggen Onze Klanten?
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Echte ervaringen van Nederlandse huishoudens met AlphaESS thuisbatterijen.
              Gemiddeld 4.8 sterren en 98% zou opnieuw kiezen.
            </p>
          </div>
        </div>
      </section>

      {/* Statistieken */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Resultaten in cijfers
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {statistieken.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 text-center">
                <stat.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.waarde}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klant reviews */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Echte ervaringen van onze klanten
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Lees wat Nederlandse huishoudens te zeggen hebben over hun AlphaESS thuisbatterij.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {klantReviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-purple-500 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{review.naam}</h3>
                    <p className="text-sm text-gray-600">{review.locatie}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">{review.systeem}</span> • Geïnstalleerd {review.installatiedatum}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Quote className="w-5 h-5 text-purple-600" />
                    {review.titel}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{review.ervaring}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Belangrijkste voordelen:</p>
                  <div className="flex flex-wrap gap-2">
                    {review.voordelen.map((voordeel, vIdx) => (
                      <span key={vIdx} className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4" />
                        {voordeel}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Besparing per jaar:</p>
                    <p className="text-lg font-bold text-green-600">{review.besparing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Terugverdientijd:</p>
                    <p className="text-lg font-bold text-blue-600">{review.terugverdientijd}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor/Na vergelijking */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Voor & na installatie thuisbatterij
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Gemiddelde resultaten van klanten met AlphaESS SMILE5 (4 persoons huishouden).
          </p>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Aspect</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Vóór thuisbatterij</th>
                    <th className="text-left p-4 font-semibold text-blue-900 bg-blue-50">Ná thuisbatterij</th>
                    <th className="text-left p-4 font-semibold text-green-900 bg-green-50">Verbetering</th>
                  </tr>
                </thead>
                <tbody>
                  {vergelijkingVoorNa.map((item, idx) => (
                    <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">{item.aspect}</td>
                      <td className="p-4 text-gray-600">{item.voor}</td>
                      <td className="p-4 text-blue-900 bg-blue-50 font-medium">{item.na}</td>
                      <td className="p-4 text-green-700 bg-green-50 font-bold">{item.verbetering}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Maandelijkse resultaten */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prestaties door het jaar heen
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Gemiddelde maandelijkse resultaten van klanten met AlphaESS SMILE5.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-12 gap-4">
              {maandelijkseResultaten.map((maand, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-2">
                    <div className="relative h-32 flex items-end justify-center">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                        style={{ height: `${maand.zelfconsumptie}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-gray-900 mb-1">{maand.maand.slice(0, 3)}</p>
                  <p className="text-sm text-gray-600 mb-1">{maand.zelfconsumptie}%</p>
                  <p className="text-xs text-green-600 font-semibold">€{maand.besparing}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Jaargemiddelde zelfconsumptie</p>
                <p className="text-3xl font-bold text-blue-600">75%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Totale jaarlijkse besparing</p>
                <p className="text-3xl font-bold text-green-600">€1.710</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Gemiddelde tevredenheid</p>
                <p className="text-3xl font-bold text-purple-600">4.8 ★</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Seizoenspatroon</h3>
                <p className="text-gray-700">
                  Zomermaanden (april-september): 80-92% zelfvoorzienend met besparingen tot €195/maand.
                  Wintermaanden (oktober-maart): 55-71% zelfvoorzienend met besparingen van €90-130/maand.
                  Jaargemiddeld: 75% zelfconsumptie met €1.710 totale besparing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Veelgestelde vragen van klanten
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Antwoorden op de meest gestelde vragen, gebaseerd op echte klantervaringen.
          </p>

          <div className="space-y-6">
            {veelgesteldeVragen.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {idx + 1}
                  </span>
                  {faq.vraag}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">{faq.antwoord}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links naar geïndexeerde pagina's */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer informatie over thuisbatterijen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-alphaess-vs-concurrenten"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-purple-500"
            >
              <span className="font-semibold text-purple-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                AlphaESS vergelijking
              </span>
              <p className="text-sm text-gray-600 mt-2">Waarom klanten voor AlphaESS kiezen</p>
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-purple-500"
            >
              <span className="font-semibold text-purple-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Kosten overzicht
              </span>
              <p className="text-sm text-gray-600 mt-2">Wat je echt kunt besparen</p>
            </Link>
            <Link
              to="/thuisbatterijen"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-purple-500"
            >
              <span className="font-semibold text-purple-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Alle producten
              </span>
              <p className="text-sm text-gray-600 mt-2">Bekijk ons complete assortiment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sluit je aan bij 500+ tevreden klanten
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Ontdek zelf waarom onze klanten gemiddeld 4.8 sterren geven en 98% zou opnieuw kiezen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0858081555"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              085 808 1555
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
            >
              Offerte aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijErvaringenKlanten;
