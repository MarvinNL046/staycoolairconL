import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, MapPin, Phone, ChevronDown, ChevronUp, Home, Zap, Euro } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijVragenAntwoordenLimburg = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'FAQ Limburg' }
  ];

  const faqItems = [
    {
      category: "Lokaal & Service",
      question: "Installeert StayCool Airco thuisbatterijen in heel Limburg?",
      answer: "Ja, wij installeren thuisbatterijen in heel Limburg! Onze monteurs komen uit Sittard-Geleen en bedienen alle Limburgse gemeenten: Maastricht, Heerlen, Venlo, Roermond, Weert, Kerkrade, Brunssum, Landgraaf, Valkenburg, Meerssen en omliggende dorpen. U betaalt geen extra reiskosten binnen Limburg en wij garanderen snelle service en ondersteuning."
    },
    {
      category: "Lokaal & Service",
      question: "Hoe snel kan StayCool een thuisbatterij installeren in Limburg?",
      answer: "Onze levertijd voor thuisbatterijen in Limburg is gemiddeld 3-6 weken van offerte tot installatie. Na uw aanvraag plannen we binnen 1 week een gratis adviesgesprek bij u thuis. De fysieke installatie duurt 1 dag. Voor spoedgevallen kunnen we soms binnen 2 weken installeren, afhankelijk van materiaal beschikbaarheid en onze planning."
    },
    {
      category: "Lokaal & Service",
      question: "Welke netbeheerders zijn actief in Limburg en moet ik die informeren?",
      answer: "In Limburg zijn Enexis (grootste deel) en Stedin (kleine gebieden) de netbeheerders. Bij installatie van een thuisbatterij moet u dit melden bij uw netbeheerder - dit regelen wij voor u als onderdeel van onze service. De melding is verplicht maar eenvoudig, en zorgt ervoor dat uw installatie correct geregistreerd staat."
    },
    {
      category: "Kosten & Subsidie",
      question: "Zijn er specifieke subsidies voor thuisbatterijen in Limburg?",
      answer: "Momenteel (2025) zijn er geen provincie-brede subsidies voor thuisbatterijen in Limburg. Wel profiteert u van 0% BTW bij gecombineerde installatie met zonnepanelen. Sommige Limburgse gemeenten zoals Maastricht en Venlo bieden lokale duurzaamheidsleningen met lage rente. Check onze subsidie-pagina of bel voor actuele informatie over uw gemeente."
    },
    {
      category: "Kosten & Subsidie",
      question: "Wat kosten thuisbatterijen bij StayCool in Limburg?",
      answer: "Onze thuisbatterij pakketten inclusief installatie in Limburg: 5 kWh systeem vanaf €6.500, 10 kWh systeem vanaf €10.500, en 15 kWh systeem vanaf €14.500. Dit is alles inclusief: batterij, omvormer (indien nodig), installatie, configuratie, 2 jaar werkgarantie en volledige ondersteuning. Geen verborgen kosten of extra reiskosten in Limburg!"
    },
    {
      category: "Kosten & Subsidie",
      question: "Hoeveel kan een Limburgs huishouden besparen met een thuisbatterij?",
      answer: "Een gemiddeld Limburgs huishouden (4 personen, 3.500 kWh/jaar) bespaart €500-€700 per jaar met een thuisbatterij. Bij dynamische contracten (populair in Limburg dankzij goede digitale infrastructuur) kan dit oplopen tot €1.000 per jaar. De terugverdientijd is 9-12 jaar, waarbij stijgende energieprijzen dit versnellen."
    },
    {
      category: "Technisch",
      question: "Werken thuisbatterijen ook goed in Limburg's klimaat?",
      answer: "Absoluut! Limburg heeft een uitstekend klimaat voor zonnepanelen en thuisbatterijen. Met gemiddeld 1.500-1.600 zonuren per jaar presteert Limburg boven Nederlands gemiddelde. Zuid-Limburg's heuvelachtig landschap biedt vaak optimale paneel-oriëntatie. Moderne batterijen werken probleemloos bij Limburg's temperaturen (-10°C tot +35°C)."
    },
    {
      category: "Technisch",
      question: "Kan ik een thuisbatterij plaatsen in een Limburgse rijwoning of appartement?",
      answer: "Ja, dit is mogelijk! Veel Limburgse rijwoningen en appartementen zijn geschikt voor thuisbatterijen. We plaatsen batterijen in garages, bergingen, of tegen een buitenmuur. Gemiddelde afmetingen zijn 60x40x20 cm (koelkastformaat). Voor appartementen is VvE-toestemming nodig. Wij adviseren altijd tijdens het gratis huisbezoek over de beste locatie."
    },
    {
      category: "Technisch",
      question: "Welke merken thuisbatterijen installeert StayCool in Limburg?",
      answer: "Wij installeren enkel A-merk batterijen: Tesla Powerwall (meest populair in Limburg), Huawei Luna (beste prijs-kwaliteit), BYD Battery-Box (modulair en uitbreidbaar), en SolarEdge (perfect bij bestaande SolarEdge systemen). Alle merken hebben minimaal 10 jaar garantie en zijn volledig gecertificeerd voor Nederlandse installatie."
    },
    {
      category: "Installatie",
      question: "Hoe verloopt de installatie van een thuisbatterij in Limburg?",
      answer: "Onze Limburgse installatieprocedure: 1) Gratis adviesgesprek bij u thuis (1 uur), 2) Offerte op maat binnen 3 dagen, 3) Installatie-afspraak binnen 3-6 weken, 4) Professionele installatie in 1 dag, 5) Uitgebreide uitleg en instructie, 6) Netbeheerder-melding door ons geregeld, 7) Online monitoring ingesteld. Alles netjes achtergelaten!"
    },
    {
      category: "Installatie",
      question: "Kunnen jullie bestaande zonnepanelen in Limburg koppelen aan een batterij?",
      answer: "Ja, dat is onze specialiteit! Veel Limburgse huizen hebben al zonnepanelen (Limburg loopt voorop in duurzame energie). Wij koppelen probleemloos nieuwe batterijen aan bestaande systemen, ongeacht het merk panelen of omvormer. Eventueel upgraden we uw omvormer voor optimale prestaties. Gratis check tijdens adviesgesprek!"
    },
    {
      category: "Installatie",
      question: "Wat als ik in een monumentaal pand in Limburg woon?",
      answer: "Zuid-Limburg heeft veel monumentale panden, vooral in Maastricht, Valkenburg en Heerlen. Voor monumenten is vaak geen vergunning nodig voor thuisbatterijen (inpandige installatie). Wij adviseren discrete plaatsing en houden rekening met historische gebouwkenmerken. Bij twijfel helpen wij met vergunningsaanvraag bij uw gemeente."
    },
    {
      category: "Energie & Besparing",
      question: "Past een thuisbatterij bij Limburg's dynamische energiecontracten?",
      answer: "Uitstekend! Dynamische contracten zijn populair in Limburg dankzij goede digitale infrastructuur. Met een thuisbatterij laadt u op tijdens goedkope uren (vaak overdag en 's nachts) en gebruikt u eigen stroom tijdens piektijden. Dit kan uw besparing verdubbelen van €500 naar €1.000 per jaar. Wij adviseren de beste contracten voor batterijbezitters."
    },
    {
      category: "Energie & Besparing",
      question: "Werkt een thuisbatterij goed met een warmtepomp in Limburg?",
      answer: "Perfecte combinatie! Veel Limburgse huizen hebben warmtepompen vanwege aardgasvrij-plannen. Een thuisbatterij van 10-15 kWh kan uw warmtepomp voeden met zelf opgewekte zonne-energie, waardoor uw verwarmingskosten drastisch dalen. Wij berekenen graag uw optimale configuratie voor maximale besparing."
    },
    {
      category: "Energie & Besparing",
      question: "Kan ik mijn elektrische auto laden met een thuisbatterij?",
      answer: "Ja, maar met beperking. Een gemiddelde thuisbatterij (10 kWh) kan een elektrische auto 50-60 km rijbereik geven. Voor volledig laden is dit onpraktisch. Wel slim: batterij laadt overdag met zon, 's avonds laadt u uw auto bij met deze energie plus goedkope nachtstroom. Voor frequent EV-laden adviseren wij 15+ kWh batterijen."
    },
    {
      category: "Service & Garantie",
      question: "Wat voor garantie geeft StayCool op thuisbatterijen in Limburg?",
      answer: "Wij bieden uitgebreide garanties: 10 jaar fabrieksgarantie op batterijen (capaciteit 70-80%), 5 jaar op omvormers, 2 jaar volledige werkgarantie op installatie, en levenslange support van ons Limburgs team. Problemen worden binnen 48 uur in Limburg opgelost. Daarnaast optionele onderhoudscontracten vanaf €99/jaar."
    },
    {
      category: "Service & Garantie",
      question: "Bieden jullie onderhoud en reparaties in Limburg?",
      answer: "Ja! Wij bieden complete after-sales in heel Limburg. Onze service omvat: online monitoring (wij zien problemen vaak eerder dan u), jaarlijkse inspectie, software updates, reparaties binnen 48 uur, en 24/7 telefonische support. Vanaf €99/jaar voor compleet onderhoudspakket, of losse service op afroep."
    },
    {
      category: "Service & Garantie",
      question: "Wat als ik verhuizen binnen of buiten Limburg?",
      answer: "Bij verhuizing binnen Limburg kunnen wij uw batterij verplaatsen (kosten €400-€800 afhankelijk van afstand en installatie-complexiteit). Bij verkoop van uw huis verhoogt een thuisbatterij de waarde met €3.000-€5.000. Verhuist u buiten Limburg? Wij helpen met overdracht naar lokale installateur of demontage."
    },
    {
      category: "Toekomst",
      question: "Kan ik later uitbreiden met extra batterijcapaciteit?",
      answer: "Ja, bij modulaire systemen zoals BYD en Huawei kunt u later extra batterij-modules toevoegen. Tijdens het adviesgesprek houden wij altijd rekening met toekomstige uitbreiding. Bijvoorbeeld: start met 5 kWh, breidt later uit naar 10 kWh zonder grote aanpassingen. Slimme planning voorkomt dubbele installatiekosten!"
    },
    {
      category: "Toekomst",
      question: "Hoe zuinig zijn moderne thuisbatterijen eigenlijk?",
      answer: "Moderne batterijen hebben 90-95% efficiëntie (5-10% verlies bij laden/ontladen). Tesla Powerwall haalt 90%, Huawei Luna 95%. Dit betekent: 100 kWh opslaan kost u 105-110 kWh aan zonne-energie. Vergeleken met terugleveren aan het net (vaak lage vergoeding) is dit zeer efficiënt en rendabel."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Vragen & Antwoorden Limburg | StayCool Airco"
        description="Specifieke informatie over thuisbatterijen in Limburg: lokale installatie, service, subsidies, kosten en meer. Direct advies van Limburgse experts."
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-vragen-antwoorden-limburg"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Battery className="h-12 w-12" />
            <MapPin className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Thuisbatterij Vragen & Antwoorden voor Limburg
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Lokale informatie over thuisbatterijen in Limburg: installatie, service, subsidies en meer.
            Van Maastricht tot Venlo, van Heerlen tot Roermond.
          </p>
        </div>
      </section>

      {/* Service Area Highlight */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Home className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Wij installeren in heel Limburg
                </h2>
                <p className="text-gray-700 mb-3">
                  Maastricht • Heerlen • Venlo • Roermond • Sittard-Geleen • Weert • Kerkrade •
                  Brunssum • Landgraaf • Valkenburg • Meerssen • Gulpen • Eijsden • Margraten •
                  Simpelveld • en alle omliggende dorpen
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-green-700">
                    <Zap className="h-4 w-4" />
                    Snelle service
                  </span>
                  <span className="flex items-center gap-2 text-green-700">
                    <Euro className="h-4 w-4" />
                    Geen reiskosten
                  </span>
                  <span className="flex items-center gap-2 text-green-700">
                    <Phone className="h-4 w-4" />
                    Lokaal team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center font-semibold text-gray-900 mb-4">Kies een categorie:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section by Category */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {categories.map((category, catIndex) => (
            <div key={catIndex} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {catIndex + 1}
                </span>
                {category}
              </h2>
              <div className="space-y-4">
                {faqItems
                  .filter(item => item.category === category)
                  .map((item, index) => {
                    const globalIndex = faqItems.indexOf(item);
                    return (
                      <div
                        key={globalIndex}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-green-300 transition-colors"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {openIndex === globalIndex ? (
                            <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {openIndex === globalIndex && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limburg Highlights */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Waarom StayCool voor uw thuisbatterij in Limburg?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Lokaal & Snel</h3>
              <p className="text-gray-700 text-sm">
                Binnen 48 uur bij u voor service. Geen extra reiskosten in heel Limburg.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Battery className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Ervaring</h3>
              <p className="text-gray-700 text-sm">
                200+ thuisbatterijen geïnstalleerd in Limburg. Wij kennen lokale situaties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Phone className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Persoonlijk</h3>
              <p className="text-gray-700 text-sm">
                Direct contact met lokaal team. Geen callcenters, wel vakmanschap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links naar indexed pages */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer Informatie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/thuisbatterijen"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-600"
            >
              <Battery className="h-6 w-6 text-blue-600 mb-2" />
              <span className="font-semibold text-gray-900 block mb-1">Thuisbatterijen</span>
              <span className="text-sm text-gray-600">Algemene informatie</span>
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-green-600"
            >
              <span className="text-2xl mb-2 block">€</span>
              <span className="font-semibold text-gray-900 block mb-1">Kosten</span>
              <span className="text-sm text-gray-600">Prijzen & subsidies</span>
            </Link>
            <Link
              to="/service-areas"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-purple-600"
            >
              <MapPin className="h-6 w-6 text-purple-600 mb-2" />
              <span className="font-semibold text-gray-900 block mb-1">Service Gebied</span>
              <span className="text-sm text-gray-600">Alle plaatsen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MapPin className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Gratis Adviesgesprek bij u Thuis in Limburg</h2>
          <p className="text-xl mb-8 text-blue-100">
            Onze experts komen graag bij u langs voor persoonlijk advies.
            Geen verplichtingen, geen verborgen kosten.
          </p>
          <a
            href="tel:046-202-1430"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            <Phone className="h-6 w-6 mr-2" />
            046 - 202 1430
          </a>
          <p className="mt-6 text-blue-100">
            Bel ons voor advies over thuisbatterijen in Limburg
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijVragenAntwoordenLimburg;
