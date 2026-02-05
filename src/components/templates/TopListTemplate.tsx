import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import { Check, Star, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AircoProduct } from '../../data/aircoProducts';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface TopListTemplateProps {
    title: string;
    description: string;
    products: AircoProduct[];
    category: string;
    updateDate?: string;
    introText: React.ReactNode;
    rankingCriteria: string[];
    slug: string;
}

export default function TopListTemplate({
    title,
    description,
    products,
    category,
    updateDate = new Date().toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' }),
    introText,
    rankingCriteria,
    slug
}: TopListTemplateProps) {
    return (
        <>
            <Helmet>
                <title>{title} | StayCool Airco</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={`https://staycoolairco.nl/advies/${slug}`} />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-warm-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-quatt-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-500 mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Geüpdatet: {updateDate}
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black text-quatt-dark mb-6 tracking-tight leading-tight">
                        {title}
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-8">
                        {/* Intro Text */}
                        <div className="prose prose-lg prose-blue max-w-none bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-12">
                            {introText}

                            <h3 className="text-xl font-bold text-quatt-dark mt-8 mb-4">Hoe we deze lijst hebben samengesteld:</h3>
                            <ul className="grid sm:grid-cols-2 gap-3 not-prose">
                                {rankingCriteria.map((criteria, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100/50">
                                        <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                                            <Check className="w-4 h-4 text-green-700" />
                                        </div>
                                        <span className="text-sm font-medium">{criteria}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Product List */}
                        <div className="space-y-8">
                            {products.map((product, index) => (
                                <m.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card radius="3xl" padding="none" className="bg-white border-transparent hover:border-quatt-orange/20 hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                                        {/* Rank Badge */}
                                        <div className="absolute top-0 left-0 bg-quatt-dark text-white px-5 py-3 rounded-br-3xl z-20 font-black text-xl shadow-lg">
                                            #{index + 1}
                                        </div>

                                        <div className="flex flex-col md:flex-row">
                                            {/* Image */}
                                            <div className="md:w-2/5 relative bg-gray-50 p-6 flex items-center justify-center min-h-[280px]">
                                                <Link to={`/products/airco/${product.id}`} className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                                    {product.image ? (
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="max-h-52 w-auto object-contain drop-shadow-lg"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="flex flex-col items-center text-gray-300">
                                                            <Star className="w-16 h-16 mb-2" />
                                                            <span className="text-sm font-medium">Afbeelding laden...</span>
                                                        </div>
                                                    )}
                                                </Link>

                                                {/* Energy Label Overlay */}
                                                {product.energyLabel && (
                                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-100 text-green-700">
                                                        Energielabel {product.energyLabel}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                                                <div className="mb-4">
                                                    <Link to={`/products/airco/${product.id}`}>
                                                        <h2 className="text-2xl font-bold text-quatt-dark group-hover:text-quatt-orange transition-colors mb-2">
                                                            {product.name}
                                                        </h2>
                                                    </Link>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                            {product.brand}
                                                        </span>
                                                        {product.capacity && (
                                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold">
                                                                {product.capacity} kW
                                                            </span>
                                                        )}
                                                        {product.soundLevel && (
                                                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                                                {product.soundLevel}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Key Features / Summary */}
                                                <div className="mb-6 flex-grow">
                                                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed mb-4">
                                                        {product.description?.split('\n')[0] || `De ${product.name} is een uitstekende keuze binnen de categorie ${category}.`}
                                                    </p>

                                                    {/* Quick Specs Grid */}
                                                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mt-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                                                        {product.scop && <div className="flex justify-between border-b border-gray-200 pb-1"><span>SCOP:</span> <span className="font-semibold text-quatt-dark">{product.scop}</span></div>}
                                                        {product.seer && <div className="flex justify-between border-b border-gray-200 pb-1"><span>SEER:</span> <span className="font-semibold text-quatt-dark">{product.seer}</span></div>}
                                                        {product.heatingCapacity && <div className="flex justify-between"><span>Verwarmen:</span> <span className="font-semibold text-quatt-dark">{product.heatingCapacity} kW</span></div>}
                                                        {product.coolingCapacity && <div className="flex justify-between"><span>Koelen:</span> <span className="font-semibold text-quatt-dark">{product.coolingCapacity} kW</span></div>}
                                                    </div>
                                                </div>

                                                <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between gap-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                                                            <Check className="w-4 h-4" /> Op voorraad
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            Incl. standaard montage
                                                        </span>
                                                    </div>
                                                    <Button href="/contact" variant="primary" className="bg-quatt-orange hover:bg-orange-600 shadow-lg shadow-orange-500/20 rounded-xl px-6">
                                                        Vraag Offerte Aan <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </m.div>
                            ))}
                        </div>

                        {/* CTA at bottom of list */}
                        <div className="mt-16 bg-quatt-dark rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.svg')] opacity-10" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4">Nog niet zeker welke airco het beste bij u past?</h3>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Onze adviseurs helpen u graag met een persoonlijk advies en een exacte berekening voor uw woning. Gratis en vrijblijvend.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button href="/contact" variant="primary" className="!bg-white !text-quatt-dark hover:!bg-gray-100 font-bold px-8 py-4 h-auto text-lg rounded-xl shadow-none border border-transparent hover:border-gray-200">
                                        Gratis Adviesgesprek
                                    </Button>
                                    <Button href="tel:0462021430" variant="outline" className="border-gray-600 text-white hover:border-white hover:bg-transparent px-8 py-4 h-auto text-lg rounded-xl">
                                        <Phone className="w-5 h-5 mr-2" /> 046 202 1430
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Sticky Container */}
                        <div className="sticky top-32 space-y-8">

                            {/* Categories */}
                            <Card radius="2xl" padding="md" className="bg-white border-gray-100 shadow-sm">
                                <h4 className="font-bold text-lg mb-4 text-quatt-dark">Andere categorieën</h4>
                                <ul className="space-y-2">
                                    {[
                                        { name: 'Energiezuinige Airco\'s', href: '/advies/top-5-energiezuinige-aircos', active: slug.includes('energie') },
                                        { name: 'Stille Airco\'s (Slaapkamer)', href: '/advies/top-10-stille-aircos', active: slug.includes('stil') },
                                        { name: 'Multi-Split Systemen', href: '/advies/beste-multi-split-aircos', active: slug.includes('multi') },
                                        { name: 'Beste voor Slaapkamer', href: '/advies/beste-airco-slaapkamer', active: slug.includes('slaapkamer') }
                                    ].map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className={`flex items-center justify-between p-3 rounded-xl transition-all ${link.active ? 'bg-orange-50 text-quatt-orange font-bold border border-orange-100' : 'hover:bg-gray-50 text-gray-600'}`}
                                            >
                                                {link.name}
                                                <ChevronRight className={`w-4 h-4 ${link.active ? 'text-quatt-orange' : 'text-gray-400'}`} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            {/* Help Widget */}
                            <Card radius="2xl" padding="lg" className="bg-blue-50 border-blue-100">
                                <h4 className="font-bold text-lg mb-2 text-blue-900">Hulp nodig?</h4>
                                <p className="text-sm text-blue-700/80 mb-6">
                                    Twijfelt u tussen twee modellen? Wij geven u eerlijk advies op maat.
                                </p>
                                <Button href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl font-bold">
                                    Contact opnemen
                                </Button>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
