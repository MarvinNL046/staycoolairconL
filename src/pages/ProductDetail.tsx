import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Check, ThermometerSun, Wind, Zap, Timer, Ruler, Info, X, Star, Calendar, Shield, ArrowRight } from 'lucide-react';
import { productData } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/SEO/Breadcrumbs';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function ProductDetail() {
  const { brand, model } = useParams();
  const [showInstallationInfo, setShowInstallationInfo] = useState(false);

  const brandData = productData.brands.find(b => {
    if (!brand) return false;
    if (brand === 'lg-mobiele-airco' && b.name === 'LG Mobiele Airco') return true;
    if (brand === 'tosot-mobiele-airco' && b.name === 'Tosot Mobiele Airco') return true;
    const brandLower = brand.toLowerCase();
    const nameLower = b.name.toLowerCase();
    return nameLower === brandLower ||
      nameLower.startsWith(brandLower) ||
      nameLower.includes(brandLower) ||
      nameLower.replace(/ /g, '-') === brandLower ||
      brandLower.replace(/-/g, ' ') === nameLower;
  });
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

  return (
    <div className="bg-quatt-warm min-h-screen">
      <MetaTags
        title={`${brandData.name} ${modelData.name} | StayCool Airco`}
        description={modelData.description}
        canonicalUrl={`https://staycoolairco.nl/products/${brand}/${model}`}
        type="product"
        ogImage={productImages[0].url}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <Breadcrumbs
          items={[
            { name: "Producten", path: "/products" },
            { name: brandData.name, path: `/products/${brand}` },
            { name: modelData.name, path: `/products/${brand}/${model}` }
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
                <SpecBadge icon={Shield} label="5 Jaar" sub="Garantie" />
                <SpecBadge icon={Zap} label={modelData.energyLabel} sub="Energielabel" />
                <SpecBadge icon={Wind} label={modelData.capacity} sub="Capaciteit" />
                <SpecBadge icon={Timer} label="2 Weken" sub="Levertijd" />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-quatt-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Bestseller
                  </span>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-quatt-dark mb-6 tracking-tight leading-tight">
                  {brandData.name} <span className="text-gray-400">{modelData.name}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {modelData.description}
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-100">
                <div className="mb-6">
                  <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">Vanaf prijs (All-in)</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-quatt-dark">{modelData.price?.split(' ')[0]}</span>
                    <span className="text-gray-400 font-bold">inclusief installatie</span>
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

                <Button href="/contact" variant="primary" size="lg" className="w-full text-lg py-5 rounded-2xl shadow-quatt-orange/20 shadow-lg">
                  Plan gratis adviesgesprek
                </Button>

                <p className="text-center text-xs text-gray-400 mt-4 font-medium italic">
                  Geen aanbetaling nodig • Betaal pas na installatie
                </p>
              </div>

              {/* USP Section */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-5 bg-quatt-warm rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-quatt-orange">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-quatt-dark">Binnen 2 weken koud</p>
                    <p className="text-sm text-gray-500">Snelste installatie van Limburg</p>
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
                <div key={spec.label} className="flex justify-between py-4 border-b border-gray-50">
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
            {brand === 'alphaess' ? (
              <FAQItem question="Wat is de terugverdientijd?" answer="De gemiddelde terugverdientijd ligt tussen de 4 en 7 jaar, afhankelijk van uw verbruikspatroon." />
            ) : (
              <>
                <FAQItem question="Is de installatie echt inbegrepen?" answer="Ja, onze prijzen zijn inclusief standaard installatie door onze gecertificeerde monteurs." />
                <FAQItem question="Hoe stil is deze binnenunit?" answer={`Dankzij moderne inverter techniek produceert deze unit slechts ${modelData.specifications.find(s => s.label.includes('Geluids'))?.value || '19'} dB.`} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 lg:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Totaalprijs</p>
            <p className="text-xl font-black text-quatt-dark">{modelData.price?.split(' ')[0]}</p>
          </div>
          <Button href="/contact" variant="primary" className="px-8 shadow-xl shadow-quatt-orange/20">
            Adviesgesprek
          </Button>
        </div>
      </div>
    </div>
  );
}

function SpecBadge({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100 text-center shadow-sm">
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
