import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import HeroRedesign from '../components/HeroRedesign';
import Services from '../components/ServicesOptimized';
import ProductGrid from '../components/ProductGrid';
import WhyUs from '../components/WhyUs';
import BrandLogos from '../components/BrandLogos';
import HomeBattery from '../components/HomeBattery';
import Contact from '../components/Contact';
import SchemaMarkup from '../components/SchemaMarkup';
import MoneyPageLinks from '../components/MoneyPageLinks';
import { primaryMoneyPageLinks } from '../data/moneyPageLinks';

export default function Home() {
  const services = [
    {
      "@type": "Service",
      name: "Airco Installatie",
      description: "Professionele installatie van airconditioningsystemen in heel Limburg",
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      },
      areaServed: {
        "@type": "State",
        name: "Limburg"
      }
    },
    {
      "@type": "Service",
      name: "Airco Onderhoud",
      description: "Vakkundig onderhoud van uw airconditioning systeem",
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      },
      areaServed: {
        "@type": "State",
        name: "Limburg"
      }
    },
    {
      "@type": "Service",
      name: "Airco Reparatie",
      description: "Snelle en betrouwbare reparatie van airconditioningsystemen",
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      },
      areaServed: {
        "@type": "State",
        name: "Limburg"
      }
    }
  ];

  const homepageFAQs = [
    {
      question: "Wat kost een airco laten installeren in Limburg?",
      answer: "Een airco laten installeren in Limburg kost vanaf €1.600 inclusief montage en BTW. De exacte prijs hangt af van het merk, het vermogen en de complexiteit van de installatie. Voor een single-split systeem rekent u op €1.600-€2.500, voor een multi-split systeem €2.800-€5.000. Vraag een vrijblijvende offerte aan voor een prijs op maat."
    },
    {
      question: "Hoe lang duurt een airco-installatie?",
      answer: "Een standaard single-split airco-installatie duurt 4-6 uur op één werkdag. Een multi-split systeem met meerdere binnenunits neemt 1-2 dagen in beslag. Wij plannen u doorgaans binnen 2 weken na akkoord op de offerte."
    },
    {
      question: "Hoeveel bespaar ik door te verwarmen met een airco?",
      answer: "Door te verwarmen met een moderne A+++ airco bespaart u tot 60% op uw stookkosten ten opzichte van gas. Een airco werkt als warmtepomp met een SCOP-waarde van 4-5: voor elke kWh stroom levert de airco 4-5 kWh warmte. Concreet: een gemiddeld huishouden bespaart €800-€1.500 per jaar."
    },
    {
      question: "Wat is het verschil tussen single-split en multi-split airco?",
      answer: "Een single-split airco bestaat uit één buitenunit gekoppeld aan één binnenunit en koelt/verwarmt één ruimte. Een multi-split heeft één buitenunit die 2 tot 5 binnenunits aanstuurt — ideaal voor meerdere kamers of een hele woning. Multi-split is duurder bij aanschaf maar zuiniger als je meer dan één unit nodig hebt."
    },
    {
      question: "Hoe vaak moet airco-onderhoud gebeuren?",
      answer: "Een airco moet jaarlijks onderhouden worden voor optimale prestaties en een lange levensduur. Onderhoud bestaat uit filterreiniging, koudemiddel-controle, lekcontrole en algehele inspectie. Met regelmatig onderhoud gaat een airco 15-20 jaar mee."
    },
    {
      question: "Wat is de levensduur van een airco?",
      answer: "Een goed onderhouden airco gaat gemiddeld 15-20 jaar mee. Premium A-merken zoals Daikin en Mitsubishi Heavy halen vaak 20+ jaar. De levensduur hangt sterk af van jaarlijks onderhoud, gebruiksintensiteit en plaatsing van de buitenunit (beschut, niet in directe zon)."
    },
    {
      question: "Mag een airco-buitenunit overal geplaatst worden?",
      answer: "Voor de meeste plaatsen heeft u geen vergunning nodig, maar er zijn wel regels: minimaal 2 meter van de erfgrens, geluidsnorm max 40 dB op de erfgrens van de buren, en in monumentale panden of beschermd stadsgezicht is een omgevingsvergunning nodig. Wij beoordelen tijdens onze gratis opname of uw situatie vergunningvrij is."
    },
    {
      question: "Welk merk airco is het beste? Daikin, Mitsubishi, LG of Toshiba?",
      answer: "Alle vier zijn premium A-merken met hun eigen sterke punten: Daikin staat bekend om betrouwbaarheid en stille werking, Mitsubishi Heavy om robuuste prestaties bij extreme temperaturen, LG om scherpe prijs-kwaliteit en design (ARTCOOL), Toshiba (Haori) om innovatief design. Wij geven onafhankelijk advies op basis van uw situatie."
    }
  ];

  return (
    <>
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          description: "Specialist in airco installatie en onderhoud in Limburg. Bespaar op terugleverkosten van zonnepanelen door slim te verwarmen met airco.",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Airconditioning Services",
            itemListElement: services
          },
          sameAs: [
            "https://www.facebook.com/staycoolairco",
            "https://www.instagram.com/staycoolairco",
            "https://www.linkedin.com/company/staycoolairco"
          ]
        }}
      />
      <SchemaMarkup type="Organization" data={{}} />
      <SchemaMarkup type="WebSite" data={{}} />
      <SchemaMarkup
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Home", url: "https://staycoolairco.nl/" }
          ]
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{ questions: homepageFAQs }}
      />
      <Helmet>
        <title>Airco Installateur Limburg | Vanaf €1.600 Incl. Montage</title>
        <meta
          name="description"
          content="Erkend airco installateur in Limburg. F-gassen gecertificeerd ✓ 5 jaar garantie ✓ Vanaf €1.600 incl. montage ✓ Gratis offerte binnen 24u. ★ 4.8/5"
        />
        <link rel="canonical" href="https://staycoolairco.nl" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staycoolairco.nl" />
        <meta property="og:title" content="Airco Installateur Limburg | Vanaf €1.600 Incl. Montage" />
        <meta property="og:description" content="Erkend airco installateur in Limburg. F-gassen gecertificeerd ✓ 5 jaar garantie ✓ Vanaf €1.600 incl. montage ✓ Gratis offerte binnen 24u. ★ 4.8/5" />
        <meta property="og:image" content="https://staycoolairco.nl/og-image.jpg" />
        <meta property="og:locale" content="nl_NL" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airco Installateur Limburg | Vanaf €1.600 Incl. Montage" />
        <meta name="twitter:description" content="Erkend airco installateur in Limburg. F-gassen gecertificeerd ✓ 5 jaar garantie ✓ Vanaf €1.600 incl. montage ✓ Gratis offerte binnen 24u. ★ 4.8/5" />
        <meta name="twitter:image" content="https://staycoolairco.nl/og-image.jpg" />
      </Helmet>

      <HeroRedesign />

      {/* Product Grid - Direct onder hero voor maximale conversie */}
      <ProductGrid
        maxProducts={8}
        title="Populaire Airco Systemen"
        subtitle="Bekijk onze bestsellers - complete sets inclusief binnen- en buitenunit"
      />

      {/* Static H1 Section - Critical for SEO */}
      <section className="py-32 bg-quatt-warm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-quatt-orange font-black tracking-[0.2em] uppercase text-xs mb-8 block">StayCool Airco Installateur</span>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-quatt-dark mb-10 leading-[0.85] tracking-tighter italic">
            Airco Installateur <br />
            <span className="text-quatt-orange">Limburg</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 max-w-4xl mx-auto mb-16 leading-relaxed">
            Erkende <strong>airco installateur in Limburg</strong> voor installatie, onderhoud en reparatie.
            F-gassen gecertificeerde monteurs in Maastricht, Heerlen, Sittard, Geleen, Roermond, Venlo en Weert.
            Bespaar direct tot <span className="text-quatt-dark font-black">60% op uw gasrekening</span> door slim te verwarmen.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-quatt-dark/40 font-black uppercase text-xs tracking-widest">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full text-quatt-orange shadow-sm border border-gray-100">
                <Check className="h-4 w-4" />
              </div>
              <span>F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full text-quatt-orange shadow-sm border border-gray-100">
                <Check className="h-4 w-4" />
              </div>
              <span>500+ Tevreden klanten</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full text-quatt-orange shadow-sm border border-gray-100">
                <Check className="h-4 w-4" />
              </div>
              <span>Gratis advies aan huis</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Keyword Rich */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-quatt-dark mb-12 tracking-tighter italic">
              Airco Installatie in de buurt
            </h2>
            <div className="prose prose-xl prose-slate max-w-none text-gray-500 space-y-8 leading-relaxed">
              <p>
                Zoekt u een betrouwbare <strong>airco installateur in Limburg</strong>? StayCool Airco is uw lokale specialist voor professionele
                klimaatbeheersing in heel Limburg. Met meer dan 500+ tevreden klanten zijn wij dé erkende airco monteur voor installatie,
                onderhoud en reparatie van airconditioningsystemen.
              </p>

              <div className="grid md:grid-cols-2 gap-12 my-20 not-prose">
                <div className="bg-quatt-warm p-12 rounded-[3.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <h3 className="text-2xl font-black text-quatt-dark mb-6 tracking-tight flex items-center">
                    Installatie
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    Als F-gassen gecertificeerd airco bedrijf verzorgen wij vakkundige installatie van split-units, multi-split systemen en
                    vloer airconditioners. Wij bedienen heel <strong>Limburg</strong>.
                  </p>
                </div>

                <div className="bg-quatt-warm p-12 rounded-[3.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-quatt-dark/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <h3 className="text-2xl font-black text-quatt-dark mb-6 tracking-tight flex items-center">
                    Waarom StayCool?
                  </h3>
                  <ul className="text-gray-500 space-y-4 font-black uppercase text-[10px] tracking-widest">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Binnen 2 weken koud</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Gratis adviesgesprek</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Dealer van A-Merken</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Transparant & Lokaal</li>
                  </ul>
                </div>
              </div>

              <div className="bg-quatt-dark text-white p-12 sm:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-gray-200 mt-20 not-prose">
                <div className="absolute top-0 right-0 w-96 h-96 bg-quatt-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-3xl sm:text-4xl font-black mb-8 tracking-tighter italic relative z-10">
                  Service in heel Limburg
                </h3>
                <p className="text-white/60 text-xl leading-relaxed relative z-10 max-w-2xl">
                  Wij zijn uw lokale <strong>airco specialist dichtbij</strong> met snelle service in alle Limburgse steden.
                  Van Roermond tot Maastricht en van Venlo tot Weert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoneyPageLinks links={primaryMoneyPageLinks} />
      <Services />
      <HomeBattery />
      <WhyUs />
      <BrandLogos />

      {/* FAQ section — answers Google's most asked questions, with internal links to deep-dive pages */}
      <section className="py-24 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-quatt-orange font-black tracking-[0.2em] uppercase text-xs mb-4 block">
              Veelgestelde vragen
            </span>
            <h2 id="faq-heading" className="text-4xl sm:text-5xl font-black text-quatt-dark tracking-tighter italic">
              Antwoorden op uw vragen
            </h2>
          </div>

          <div className="space-y-4">
            {homepageFAQs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-quatt-warm rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-bold text-quatt-dark m-0 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-quatt-orange text-2xl font-black leading-none mt-1 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Internal links to deep-dive pages — distributes link equity to top Lost-cluster pages */}
          <div className="mt-12 p-8 bg-quatt-warm rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-quatt-dark mb-4">Meer lezen</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              <li>→ <a href="/kosten-airco-plaatsen" className="hover:text-quatt-orange underline">Wat kost een airco laten plaatsen</a></li>
              <li>→ <a href="/kennisbank/hoe-vaak-airco-onderhoud" className="hover:text-quatt-orange underline">Airco onderhoud frequentie</a></li>
              <li>→ <a href="/seo/pillar-4-energie-besparen/stroomverbruik-airco" className="hover:text-quatt-orange underline">Stroomverbruik airco</a></li>
              <li>→ <a href="/seo/pillar-8-vergelijkingen/split-unit-vs-mobiele-airco" className="hover:text-quatt-orange underline">Split-unit vs mobiele airco</a></li>
              <li>→ <a href="/seo/pillar-8-vergelijkingen/daikin-vs-mitsubishi" className="hover:text-quatt-orange underline">Daikin vs Mitsubishi vergelijken</a></li>
              <li>→ <a href="/kennisbank/airco-buitenunit-plaatsing" className="hover:text-quatt-orange underline">Buitenunit plaatsingsregels</a></li>
              <li>→ <a href="/seo/pillar-4-energie-besparen/verwarmen-met-airco" className="hover:text-quatt-orange underline">Verwarmen met airco</a></li>
              <li>→ <a href="/kennisbank/airco-laten-installeren" className="hover:text-quatt-orange underline">Airco laten installeren</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
