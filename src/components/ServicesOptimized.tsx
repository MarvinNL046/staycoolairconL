import React, { useState } from 'react';
import { Fan, Wrench, ThermometerSun, ShoppingCart, Calendar, Play, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import Button from './ui/Button';

export default function ServicesOptimized() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const services = [
    {
      icon: Fan,
      title: 'Airco Installatie',
      description: 'Professionele installatie van A-merk airconditioners. Wij zorgen voor een perfecte montage en afwerking.',
      features: ['Gratis opname aan huis', 'Installatie binnen 2 weken', 'Stofvrije montage'],
      link: '/airco-installatie',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: ThermometerSun,
      title: 'Bespaar op Gas',
      description: 'Verwarm uw woning efficiënt met een airco en bespaar tot 60% op uw huidige gasrekening.',
      features: ['Hoge SCOP/SEER waarden', 'Rendement tot 500%', 'Geschikt voor elke ruimte'],
      link: '/kennisbank/verwarmen-met-airco',
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      icon: Wrench,
      title: 'Onderhoud & Service',
      description: 'Verleng de levensduur van uw systeem met ons vakkundige onderhoudsplan.',
      features: ['Jaarlijkse controle', 'Reinigen filters', 'Storingsdienst'],
      link: '/airco-service-limburg',
      color: 'text-green-500',
      bg: 'bg-green-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-quatt-orange font-bold tracking-wide uppercase text-sm mb-2 block">Onze Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-quatt-dark mb-6">
            Meer dan alleen koelen
          </h2>
          <p className="text-xl text-gray-600">
            Wij bieden een totaaloplossing voor uw binnenklimaat. Van advies tot installatie en nazorg.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-5xl mx-auto mb-24 rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200" style={{ paddingBottom: '56.25%' }}>
          {!videoLoaded ? (
            <div
              onClick={() => setVideoLoaded(true)}
              className="absolute inset-0 cursor-pointer group bg-gray-900"
            >
              <img
                src="https://img.youtube.com/vi/9m-jkGgfLog/maxresdefault.jpg"
                alt="StayCool Airco Promotional Video"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-quatt-orange rounded-full flex items-center justify-center shadow-lg">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white font-medium text-lg drop-shadow-md">Bekijk hoe wij werken</p>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?autoplay=1&mute=0"
              title="StayCool Promo"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <Card key={idx} padding="none" className="h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-quatt-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start text-sm text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href={service.link} variant="outline" className="w-full mt-auto group-hover:bg-quatt-dark group-hover:text-white group-hover:border-quatt-dark">
                  Lees meer
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Links CTA */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Link to="/airco-kopen-limburg" className="group relative overflow-hidden rounded-3xl bg-quatt-dark text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-quatt-orange transition-colors">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">Direct een airco kopen?</h3>
              <p className="text-gray-400 mb-4 sm:mb-0">Bekijk onze scherpe all-in prijzen.</p>
            </div>
            <div className="sm:ml-auto">
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-quatt-dark transition-all">
                →
              </span>
            </div>
          </Link>

          <a href="https://afspraken.staycoolairco.nl" target="_blank" rel="noopener" className="group relative overflow-hidden rounded-3xl bg-quatt-orange text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">Gratis Adviesgesprek</h3>
              <p className="text-orange-100 mb-4 sm:mb-0">Plan direct in onze agenda.</p>
            </div>
            <div className="sm:ml-auto">
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-quatt-orange transition-all">
                →
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}