import Contact from '../components/Contact';
import { formatPrice,priceIncludingVat } from '../utils/installationPricing';
import { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone,Check,Wind,Zap,Timer,X,Calendar,Shield } from 'lucide-react';
import { productData } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/SEO/Breadcrumbs';
import Button from '../components/ui/Button';
import { matchesProductBrand,productBrandSlug } from '../utils/productBrands';

export default function ProductDetail() {
  const { brand, model } = useParams();
  const [inquiry, setInquiry] = useState('');
  useEffect(() => { setInquiry(''); }, [brand, model]);
  useEffect(() => {
    if (!inquiry) return;
    const frame = requestAnimationFrame(() => document.getElementById('contact-aanvraag')?.scrollIntoView({ behavior: 'smooth' }));
    return () => cancelAnimationFrame(frame);
  }, [inquiry]);
  const brandData = productData.brands.find(b => matchesProductBrand(b.name, brand));
  const modelData = brandData?.models.find(m => m.slug === model);

  if (!brandData || !modelData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-quatt-warm text-center p-4">
        <div>
          <h1 className="text-2xl font-bold text-quatt-dark mb-4">Product niet gevonden</h1>
          <Button href="/products" variant="outline">Terug naar producten</Button>
        </div>
      </div>
    );
  }

  const productImages = modelData.images || [{ url: modelData.imageUrl, alt: `${brandData.name} ${modelData.name}` }];
  const prices = modelData.cashflowOffers?.map(p => priceIncludingVat(p.netCents,p.vatRate)/100);
  const brandPath = productBrandSlug(brandData.name);
  const canonicalUrl = `https://staycoolairco.nl/products/${brandPath}/${model}`;
  const isInstalledAirco = !/AlphaESS|Omkasting|Mobiele/i.test(brandData.name);
  const modelInquiry = `${brandData.name} ${modelData.name} — ${prices ? 'advies over de passende uitvoering' : 'prijs op aanvraag'}`;

  return (
    <div className="bg-quatt-warm min-h-screen break-words">
      {prices && <Helmet><script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Product', name: `${brandData.name} ${modelData.name}`,
        offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: Math.min(...prices).toFixed(2), highPrice: Math.max(...prices).toFixed(2), offerCount: prices.length,
          description: 'Complete single-split sets inclusief btw, installatie en materialen', url: canonicalUrl }
      })}</script></Helmet>}
      <MetaTags
        title={`${brandData.name} ${modelData.name} | StayCool Airco`}
        description={modelData.description}
        canonicalUrl={canonicalUrl}
        type="product"
        ogImage={productImages[0].url}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <Breadcrumbs
          items={[
            { name: "Producten", path: "/products" },
            { name: brandData.name, path: `/products/${brandPath}` },
            { name: modelData.name, path: `/products/${brandPath}/${model}` }
          ]}
        />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Sticky Image Gallery */}
            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <div className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden">
                <ProductCarousel images={productImages} />
              </div>

              {/* Secondary Specs Grid (Mobile/Desktop) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <SpecBadge icon={Shield} label="Op maat" sub="Advies" />
                <SpecBadge icon={Zap} label={modelData.energyLabel} sub="Energielabel" />
                <SpecBadge icon={Wind} label={modelData.capacity} sub="Capaciteit" />
                <SpecBadge icon={Timer} label="In overleg" sub="Planning" />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-quatt-dark mb-6 tracking-tight leading-tight">
                  {brandData.name} <span className="text-gray-400">{modelData.name}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {modelData.description}
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-5 sm:p-8 border border-gray-100 shadow-xl shadow-gray-100">
                <div className="mb-6">
                  <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">Prijsindicatie</p>
                  <div className="min-w-0">
                    <span className="text-2xl sm:text-3xl font-black text-quatt-dark">{modelData.price || 'Prijs op aanvraag'}</span>

                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {modelData.features.slice(0, 4).map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href={modelData.cashflowOffers ? '#cashflow-uitvoeringen' : '#contact-aanvraag'} variant="primary" size="lg" className="w-full text-base sm:text-lg py-5 rounded-2xl shadow-quatt-orange/20 shadow-lg whitespace-normal">
                  {modelData.cashflowOffers ? 'Bekijk uitvoeringen en prijzen' : 'Vraag een prijsopgave aan'}
                </Button>

                <p className="text-center text-xs text-gray-400 mt-4 font-medium italic">
                  Uw offerte vermeldt de gekozen uitvoering en wat inbegrepen is.
                </p>
              </div>

              {/* USP Section */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-5 bg-quatt-warm rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-quatt-orange">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-quatt-dark">Planning in overleg</p>
                    <p className="text-sm text-gray-500">We stemmen levering en eventuele installatie met u af.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-quatt-warm rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-quatt-orange">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-quatt-dark">Advies op locatie</p>
                    <p className="text-sm text-gray-500">Altijd een vrijblijvend voorstel op maat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-quatt-dark mb-12 text-center tracking-tight">Technische Specificaties</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 border-t border-gray-100 pt-8">
              {modelData.specifications.map((spec) => (
                <div key={spec.label} className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-4 border-b border-gray-50 min-w-0">
                  <span className="text-gray-500 font-medium">{spec.label}</span>
                  <span className="text-quatt-dark font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQ */}
      <section className="py-24 bg-quatt-warm">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-quatt-dark mb-12 text-center tracking-tight">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <FAQItem question="Hoe ontvang ik een prijs voor mijn situatie?" answer="Vraag hieronder een vrijblijvende offerte aan. Het gekozen model wordt meegestuurd. Beschrijf uw wensen, zodat we de uitvoering, levering en eventuele werkzaamheden kunnen afstemmen." />
            {prices && <FAQItem question="Wat is inbegrepen in de getoonde prijs?" answer="De prijzen bij de uitvoeringen zijn inclusief 21% btw, installatie en materialen. De offerte bevestigt de exacte plaatsing en eventuele aanvullende werkzaamheden." />}
            {isInstalledAirco && <FAQItem question="Kan ik na aanschaf ook onderhoud regelen?" answer="Voor airco’s die StayCool heeft geplaatst, kunt u onderhoud of een onderhoudsabonnement aanvragen. Bespreek dit bij uw offerte of bekijk onze onderhoudspakketten." />}
          </div>
        </div>
      </section>

      {modelData.cashflowOffers && <>
        <section id="cashflow-uitvoeringen" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-28">
          <h2 className="text-2xl font-bold">Uitvoeringen en installatieprijzen</h2>
          <p className="mt-3 text-gray-700">Prijzen per complete single-split set, inclusief 21% btw, installatie en materialen. De hieronder genoemde uitvoering en capaciteit zijn bepalend; de algemene modelspecificaties kunnen per uitvoering verschillen. Uw offerte bevestigt de plaatsing en eventuele aanvullende werkzaamheden.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {modelData.cashflowOffers.map(offer => <article key={offer.sourceSlug} className="min-w-0 rounded-xl border bg-white p-5">
              <h3 className="text-lg font-bold">{offer.name}</h3><p className="mt-2">{offer.configuration}</p>
              <p className="mt-3 text-2xl font-bold text-blue-800">{formatPrice(priceIncludingVat(offer.netCents,offer.vatRate))}</p>
              <p className="mt-1 text-sm">Inclusief btw, installatie en materialen</p>
              <a href="#contact-aanvraag" className="mt-4 inline-block rounded-lg bg-blue-700 px-4 py-3 font-bold text-white" onClick={()=>setInquiry(offer.name+' — '+offer.configuration+' — '+formatPrice(priceIncludingVat(offer.netCents,offer.vatRate))+' incl. btw, installatie en materialen')}>Offerte voor deze uitvoering</a>
            </article>)}
          </div>
          <p className="mt-4 text-sm text-gray-600">Prijspeil 10 september 2026. Kies het vermogen samen met de installateur op basis van uw woning.</p>
        </section>
      </>}
      {isInstalledAirco && <div className="mx-auto max-w-6xl px-4 pb-8"><Link to="/onderhoud" className="font-semibold text-blue-700 underline">Onderhoud en abonnementen voor uw door StayCool geplaatste airco</Link></div>}
      <Contact inquiryContext={inquiry || modelInquiry} />

    </div>
  );
}

function SpecBadge({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) {
  return (
    <div className="bg-white rounded-3xl p-3 sm:p-5 border border-gray-100 text-center shadow-sm min-w-0">
      <div className="w-10 h-10 rounded-full bg-quatt-warm flex items-center justify-center text-quatt-orange mx-auto mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <p className="font-black text-quatt-dark leading-none mb-1">{label}</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{sub}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-8 py-6 text-left flex justify-between items-center group">
        <span className="font-bold text-quatt-dark group-hover:text-quatt-orange transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-quatt-warm flex items-center justify-center text-quatt-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <X className="w-4 h-4 rotate-45" />
        </div>
      </button>
      {isOpen && (
        <div className="px-8 pb-8 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}
