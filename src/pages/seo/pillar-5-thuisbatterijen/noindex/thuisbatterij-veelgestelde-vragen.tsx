import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, HelpCircle, Phone, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import FAQSchema from '../../../../components/SEO/FAQSchema';

const ThuisbatterijVeelgesteldeVragen = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Veelgestelde Vragen' }
  ];

  const faqItems = [
    {
      question: "Wat is een thuisbatterij en hoe werkt het?",
      answer: "Een thuisbatterij is een energieopslagsysteem dat overtollige elektriciteit van uw zonnepanelen opslaat voor later gebruik. Overdag wanneer de zon schijnt, laden zonnepanelen de batterij op. 's Avonds en 's nachts kunt u deze opgeslagen energie gebruiken in plaats van dure stroom van het net af te nemen. Dit maximaliseert uw zelfvoorzienendheid en bespaart op energiekosten."
    },
    {
      question: "Wat kost een thuisbatterij inclusief installatie?",
      answer: "De totale kosten voor een thuisbatterij systeem liggen tussen €6.000 en €15.000, afhankelijk van capaciteit en merk. Een 5 kWh systeem kost gemiddeld €6.000-€8.000, terwijl een 10 kWh systeem €10.000-€12.000 kost. Dit is inclusief professionele installatie, configuratie en garantie. StayCool Airco biedt altijd een gratis adviesgesprek en offerte op maat."
    },
    {
      question: "Hoeveel kan ik besparen met een thuisbatterij?",
      answer: "De gemiddelde besparing ligt tussen €400 en €800 per jaar, afhankelijk van uw energieverbruik en stroomtarief. Met dynamische energiecontracten kan de besparing oplopen tot €1.200 per jaar. De terugverdientijd is doorgaans 8-12 jaar. Bij stijgende energieprijzen verdient uw investering sneller terug."
    },
    {
      question: "Welke capaciteit thuisbatterij heb ik nodig?",
      answer: "Dit hangt af van uw dagelijks energieverbruik. Een gemiddeld huishouden (4 personen) heeft 10-15 kWh per dag nodig. Voor optimale zelfvoorziening adviseren wij een batterij van 8-12 kWh. Heeft u een warmtepomp of elektrische auto? Dan is 10-15 kWh aangeraden. Wij berekenen graag uw ideale capaciteit op basis van uw verbruiksprofiel."
    },
    {
      question: "Kan ik een thuisbatterij combineren met mijn bestaande zonnepanelen?",
      answer: "Ja, in de meeste gevallen is dit perfect mogelijk! Onze experts controleren eerst uw bestaande installatie en omvormer. Afhankelijk van uw systeem kunnen we een DC-gekoppelde of AC-gekoppelde batterij installeren. Bij oudere installaties kan soms een omvormer upgrade nodig zijn voor optimale prestaties."
    },
    {
      question: "Hoelang gaat een thuisbatterij mee?",
      answer: "Moderne lithium-ion thuisbatterijen gaan 10-15 jaar mee, met een garantie van minimaal 10 jaar op capaciteit (meestal 70-80% restcapaciteit). De levensduur wordt uitgedrukt in laadcycli: hoogwaardige batterijen garanderen 6.000-10.000 cycli. Bij dagelijks gebruik betekent dit 15-25 jaar theoretische levensduur, waarbij de capaciteit geleidelijk afneemt."
    },
    {
      question: "Welke merken thuisbatterijen zijn het beste?",
      answer: "StayCool Airco werkt met A-merken zoals Tesla Powerwall, Huawei Luna, BYD Battery-Box en SolarEdge. Tesla staat bekend om betrouwbaarheid en software, Huawei biedt uitstekende prijs-kwaliteit, BYD heeft modulaire uitbreidbaarheid, en SolarEdge integreert perfect met hun omvormers. Wij adviseren het beste merk voor uw specifieke situatie."
    },
    {
      question: "Is een thuisbatterij veilig in huis?",
      answer: "Ja, moderne thuisbatterijen zijn zeer veilig. Ze hebben meerdere veiligheidssystemen: temperatuurbeveiliging, branddetectie, automatische uitschakeling bij problemen, en brandwerende behuizing. Lithium-ijzerfosfaat (LiFePO4) batterijen zijn extra veilig en stabiel. Onze installateurs plaatsen batterijen volgens NEN-normen met voldoende ventilatie en brandblusser in de buurt."
    },
    {
      question: "Krijg ik subsidie voor een thuisbatterij?",
      answer: "Momenteel (2025) is er geen directe subsidie voor thuisbatterijen, maar u profiteert wel van 0% BTW bij gecombineerde installatie met zonnepanelen. Sommige gemeenten en provincies bieden lokale subsidieregelingen. De ISDE-subsidie voor warmtepompen kan indirect helpen door thuisbatterijen rendabeler te maken. Check onze actuele subsidiepagina voor de laatste updates."
    },
    {
      question: "Kan ik met een thuisbatterij off-grid gaan?",
      answer: "Volledig off-grid (los van het elektriciteitsnet) is in Nederland complex en kostbaar vanwege wintermaanden met weinig zon. Wel kunt u 70-90% zelfvoorzienend worden met een goed gedimensioneerd systeem (grote batterij + voldoende zonnepanelen). Voor noodstroom bij blackouts zijn thuisbatterijen met backup-functie ideaal - deze leveren automatisch stroom bij stroomuitval."
    },
    {
      question: "Hoeveel onderhoud heeft een thuisbatterij nodig?",
      answer: "Thuisbatterijen zijn vrijwel onderhoudsvrij. Moderne systemen hebben online monitoring waarmee wij op afstand prestaties kunnen controleren. Wij adviseren een jaarlijkse inspectie waarbij we verbindingen controleren, software updaten en prestaties analyseren. Dit is vaak onderdeel van onze onderhoudscontracten vanaf €99 per jaar."
    },
    {
      question: "Wat gebeurt er bij een stroomstoring?",
      answer: "Dit hangt af van uw systeem. Thuisbatterijen met backup-functie (zoals Tesla Powerwall 3) schakelen automatisch over en blijven uw huis voorzien van stroom. Systemen zonder backup functie schakelen uit voor veiligheid van monteurs op het net. Bij StayCool adviseren wij altijd welke functionaliteit voor uw situatie essentieel is."
    },
    {
      question: "Kan ik mijn thuisbatterij later uitbreiden?",
      answer: "Veel systemen zijn modulair uitbreidbaar. Merken zoals BYD, Huawei en Enphase bieden stapelbare batterijen die u later kunt uitbreiden met extra modules. Wel belangrijk: houd bij aanschaf rekening met toekomstige uitbreiding door een geschikte omvormer en voldoende fysieke ruimte te plannen. Wij ontwerpen systemen altijd met toekomst in gedachten."
    },
    {
      question: "Hoe lang duurt de installatie van een thuisbatterij?",
      answer: "De fysieke installatie duurt 4-8 uur, afhankelijk van de complexiteit. Daarna volgt configuratie en koppeling met uw systeem (1-2 uur). In totaal bent u één werkdag kwijt. Bij complexere installaties of complete nieuwe systemen kan dit 2 dagen duren. Onze monteurs werken netjes, ruimen alles op en nemen uitgebreid de werking met u door."
    },
    {
      question: "Wat is het verschil tussen AC en DC gekoppelde batterijen?",
      answer: "DC-gekoppelde batterijen worden direct op de zonnepanelen aangesloten (voor omvormer), wat efficiënter is (minder conversieverlies). AC-gekoppelde batterijen worden na de omvormer aangesloten, wat flexibeler is voor bestaande systemen. Voor nieuwe installaties adviseren wij DC-koppeling (2-5% hoger rendement). Voor bestaande systemen is AC-koppeling vaak praktischer en kosteneffectiever."
    },
    {
      question: "Moet ik mijn energieleverancier informeren?",
      answer: "Ja, u moet uw netbeheerder informeren bij installatie van een thuisbatterij (meldingsplicht). Dit gaat via ons als installateur. Ook is het verstandig uw energieleverancier te informeren, vooral bij dynamische contracten waar u optimaal van de batterij profiteert. Sommige leveranciers bieden speciale tarieven voor batterijbezitters."
    },
    {
      question: "Welke garantie krijg ik op een thuisbatterij?",
      answer: "Standaard krijgt u 10 jaar productgarantie op de batterij en 2-5 jaar installatiegarantie. Tesla biedt 10 jaar garantie met 70% capaciteitsbehoud, Huawei 10 jaar met 60-70%, en BYD 10-15 jaar afhankelijk van het model. StayCool Airco biedt daarnaast 2 jaar volledige werkgarantie en levenslange ondersteuning."
    },
    {
      question: "Is een thuisbatterij geschikt voor een appartement?",
      answer: "Dit hangt af van de locatie. Voor installatie heeft u een geschikte ruimte nodig (garage, berging, meterkast) met voldoende ventilatie en toegang. Veel thuisbatterijen zijn compact (koelkastformaat) en kunnen binnenshuis geplaatst worden. Voor appartementen met gezamenlijke elektra is toestemming van de VvE nodig. Wij adviseren graag over de mogelijkheden voor uw specifieke situatie."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Veelgestelde Vragen | StayCool Airco"
        description="Alle antwoorden op uw vragen over thuisbatterijen: kosten, capaciteit, merken, subsidie, veiligheid en meer. Onafhankelijk advies van StayCool Airco experts."
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-veelgestelde-vragen"
        noIndex={true}
      />
      <FAQSchema faqs={faqItems} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Veelgestelde Vragen over Thuisbatterijen
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Alle antwoorden op uw vragen over energieopslag, kosten, merken en installatie.
            Onafhankelijk advies van onze experts.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="text-gray-600 font-semibold">Snel naar:</span>
            <a href="#kosten" className="text-blue-600 hover:underline">Kosten</a>
            <span className="text-gray-300">|</span>
            <a href="#techniek" className="text-blue-600 hover:underline">Techniek</a>
            <span className="text-gray-300">|</span>
            <a href="#subsidie" className="text-blue-600 hover:underline">Subsidie</a>
            <span className="text-gray-300">|</span>
            <a href="#veiligheid" className="text-blue-600 hover:underline">Veiligheid</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <Battery className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alle Antwoorden op Uw Vragen
            </h2>
            <p className="text-lg text-gray-600">
              Klik op een vraag om het antwoord te bekijken
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Handige Tips bij Aanschaf
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Let op bij keuze</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Controleer garantievoorwaarden</li>
                <li>✓ Vraag naar uitbreidmogelijkheden</li>
                <li>✓ Check certificering en keurmerken</li>
                <li>✓ Vergelijk capaciteit én vermogen</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <AlertCircle className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Veel gemaakte fouten</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✗ Te kleine capaciteit kiezen</li>
                <li>✗ Alleen op prijs focussen</li>
                <li>✗ Geen professionele installatie</li>
                <li>✗ Toekomst niet meenemen</li>
              </ul>
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
              <span className="text-sm text-gray-600">Complete overzicht en informatie</span>
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-green-600"
            >
              <span className="text-2xl mb-2 block">€</span>
              <span className="font-semibold text-gray-900 block mb-1">Kosten Overzicht</span>
              <span className="text-sm text-gray-600">Prijzen en besparingen</span>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-purple-600"
            >
              <Phone className="h-6 w-6 text-purple-600 mb-2" />
              <span className="font-semibold text-gray-900 block mb-1">Contact</span>
              <span className="text-sm text-gray-600">Persoonlijk advies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Staat uw vraag er niet bij?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Onze thuisbatterij-experts beantwoorden graag al uw vragen.
            Bel voor vrijblijvend advies!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:046-202-1430"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              046 - 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Stel uw vraag online
            </Link>
          </div>
          <p className="mt-6 text-blue-100">
            <CheckCircle className="h-5 w-5 inline mr-2" />
            Gratis adviesgesprek • Geen verplichtingen • Direct antwoord
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijVeelgesteldeVragen;
