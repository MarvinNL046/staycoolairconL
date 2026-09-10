import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Package,CheckCircle,ArrowRight } from 'lucide-react';
import Contact from '../../components/Contact';
import { installationOffers,priceIncludingVat,formatPrice } from '../../data/installationOffers';

export default function AircoKopenLimburg() {
  const [brand, setBrand] = useState('all');
  const [type, setType] = useState('all');
  const [selection, setSelection] = useState('');
  const minPrice = Math.min(...installationOffers.map(p => priceIncludingVat(p.netCents, p.vatRate)));
  const shown = installationOffers.filter(p => (brand === 'all' || p.brand === brand) && (type === 'all' || p.type === type));
  const description = 'Airco kopen in Limburg? Vergelijk complete sets inclusief btw, installatie en materialen. Ontvang een offerte voor uw woning en gekozen model.';
  const choose = (id: string) => {
    const product = installationOffers.find(p => p.id === id);
    if (product) setSelection(product.name + ' — ' + product.configuration + ' — ' + formatPrice(priceIncludingVat(product.netCents, product.vatRate)) + ' incl. btw, installatie en materialen');
  };
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    itemListElement: installationOffers.map((p, i) => ({ '@type': 'ListItem', position: i + 1,
      item: { '@type': 'Product', name: p.name + ' — ' + p.configuration,
        offers: { '@type': 'Offer', price: (priceIncludingVat(p.netCents, p.vatRate) / 100).toFixed(2), priceCurrency: 'EUR',
          url: 'https://staycoolairco.nl/airco-kopen-limburg#' + p.id, description: 'Inclusief btw, installatie en materialen; configuratie en eventuele aanvullende werkzaamheden worden in de offerte bevestigd.' }
      }
    }))
  };
  return <div className="break-words">
    <Helmet>
      <title>Airco kopen Limburg | Inclusief installatie | StayCool</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://staycoolairco.nl/airco-kopen-limburg" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <section className="bg-blue-900 text-white px-4 pt-32 pb-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-blue-200">Airco kopen in Limburg</p>
        <h1 className="mt-4 mb-6 max-w-3xl text-3xl sm:text-5xl font-bold">Kies een airco met installatie inbegrepen</h1>
        <p className="max-w-3xl text-lg text-blue-100">Vergelijk complete aircosets voor uw woning. De getoonde prijzen zijn inclusief btw, installatie en materialen. We controleren samen welk vermogen en welke opstelling bij uw ruimtes passen.</p>
        <p className="mt-6 text-2xl font-bold">Deze selectie vanaf {formatPrice(minPrice)}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href="#modellen" className="rounded-lg bg-white px-6 py-4 font-bold text-blue-900 text-center">Vergelijk modellen en prijzen</a>
          <a href="#contact-aanvraag" className="rounded-lg border border-white px-6 py-4 font-bold text-center">Help mij kiezen</a>
        </div>
      </div>
    </section>
    <section id="modellen" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-28">
      <h2 className="text-2xl sm:text-3xl font-bold">Welke airco past bij u?</h2>
      <p className="mt-3 text-gray-700">Een single-split set heeft één binnen- en één buitendeel. Met een multi-split bedient u meerdere ruimtes. Vermogen kiezen doet u op basis van onder meer ruimte, isolatie en zoninstraling.</p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="font-semibold">Merk<select aria-label="Merk" value={brand} onChange={e=>setBrand(e.target.value)} className="mt-2 block w-full rounded-lg border p-3"><option value="all">Alle merken in deze selectie</option><option>Tosot</option><option>LG</option><option>Daikin</option></select></label>
        <label className="font-semibold">Opstelling<select aria-label="Opstelling" value={type} onChange={e=>setType(e.target.value)} className="mt-2 block w-full rounded-lg border p-3"><option value="all">Alle opstellingen</option><option value="single">Single-split</option><option value="multi">Multi-split</option></select></label>
      </div>
      <p className="mb-4 text-gray-600" aria-live="polite">{shown.length} modellen in deze selectie</p>
      {shown.length === 0 && <div className="rounded-lg bg-blue-50 p-5"><p>Geen model in deze selectie past bij beide filters.</p><button onClick={()=>{setBrand('all');setType('all');}} className="mt-3 font-bold text-blue-800 underline">Toon alle modellen</button></div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map(p=><article id={p.id} key={p.id} className="scroll-mt-28 min-w-0 rounded-xl border bg-white p-5 flex flex-col">
          {p.image ? <img src={p.image} alt={p.name + ' — voorbeeld van de binnenunit'} className="h-36 w-full object-contain" loading="lazy" /> : <div className="h-36 rounded-lg bg-blue-50 flex flex-col items-center justify-center text-blue-800"><Package aria-hidden="true" className="h-10 w-10" /><span className="mt-2 text-sm">Complete aircoset</span></div>}
          <h3 className="mt-5 text-xl font-bold">{p.name}</h3><p className="mt-2 text-gray-700">{p.configuration}</p>
          <p className="mt-5 text-2xl font-bold text-blue-800">{formatPrice(priceIncludingVat(p.netCents,p.vatRate))}</p>
          <p className="mt-1 mb-5 text-sm text-gray-700">Inclusief {p.vatRate}% btw, installatie en materialen</p>
          <a href="#contact-aanvraag" onClick={()=>choose(p.id)} className="mt-auto rounded-lg bg-blue-700 px-4 py-3 text-white font-bold text-center">Offerte voor deze set <ArrowRight aria-hidden="true" className="inline h-4 w-4" /></a>
        </article>)}
      </div>
      <p className="mt-6 text-sm text-gray-600">Prijspeil 10 september 2026. De offerte bevestigt de gekozen uitvoering, plaatsing en eventuele aanvullende werkzaamheden voordat u beslist.</p>
    </section>
    <section className="bg-blue-50 px-4 py-12"><div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div><h2 className="text-2xl font-bold">Wat zit er in de prijs?</h2><ul className="mt-5 space-y-3">{['De getoonde complete aircoset','Installatie en materialen','Btw voor de getoonde configuratie'].map(t=><li key={t} className="flex gap-3"><CheckCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-700" />{t}</li>)}</ul></div>
      <div><h2 className="text-2xl font-bold">Eerst uw situatie bekijken</h2><p className="mt-4">De locatie van binnen- en buitendeel, het leidingtraject en de elektrische aansluiting bepalen wat er nodig is. We leggen eventuele aanvullende werkzaamheden en kosten vast in uw offerte.</p><Link to="/airco-installatie-limburg" className="mt-4 inline-block text-blue-800 underline">Lees hoe de installatie in Limburg verloopt</Link></div>
    </div></section>
    <section className="mx-auto max-w-6xl px-4 py-12"><h2 className="text-2xl font-bold">Van keuze naar offerte</h2><ol className="mt-5 list-decimal pl-5 space-y-3"><li>Kies een set of vraag hulp bij uw keuze.</li><li>Vertel ons welke ruimtes u wilt koelen of verwarmen en waar u woont.</li><li>U ontvangt een voorstel voor uw installatie. U beslist na controle van de uitvoering en totaalprijs.</li></ol>
      <div className="mt-8 rounded-xl bg-gray-50 p-5"><h3 className="text-xl font-bold">Onderhoud na de installatie</h3><p className="mt-3">Bij een door StayCool geleverde en geïnstalleerde airco kunt u later kiezen voor los onderhoud of een Basis- of Premium-abonnement. Een abonnement is optioneel en zit niet automatisch in deze aanschafprijs.</p><Link to="/onderhoud" className="mt-3 inline-block text-blue-800 underline">Vergelijk de onderhoudsabonnementen</Link></div>
      <nav aria-label="Hulp bij uw aircokeuze" className="mt-8 flex flex-col gap-3"><Link className="text-blue-800 underline" to="/kosten-airco-plaatsen">Wat kost een airco inclusief installatie? Bekijk voorbeelden voor één, twee en drie ruimtes</Link><Link className="text-blue-800 underline" to="/capaciteit-calculator">Bereken een eerste indicatie van het benodigde vermogen</Link><Link className="text-blue-800 underline" to="/blog/beste-airco-merken-2026">Lees de vergelijking van aircomerken</Link></nav>
    </section>
    <Contact inquiryContext={selection} />
  </div>;
}
