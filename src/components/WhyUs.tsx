import React from 'react';
import { Award, Clock, ThumbsUp, Banknote } from 'lucide-react';
import Card from './ui/Card';

export default function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Erkend & Gecertificeerd',
      description: 'Wij zijn officieel F-gassen gecertificeerd (BRL100) en werken alleen met gediplomeerde monteurs.'
    },
    {
      icon: Clock,
      title: 'Binnen 2 weken',
      description: 'Geen lange wachttijden. Wij installeren vaak al binnen 2 weken na goedkeuring van de offerte.'
    },
    {
      icon: ThumbsUp,
      title: '5 Jaar Garantie',
      description: 'Standaard 5 jaar garantie op zowel de airco als de installatie bij jaarlijks onderhoud.'
    },
    {
      icon: Banknote,
      title: 'Eerlijke Prijzen',
      description: 'Transparante all-in prijzen zonder verrassingen achteraf. U weet precies waar u aan toe bent.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-quatt-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-quatt-orange font-bold tracking-wide uppercase text-sm mb-2 block">Waarom StayCool?</span>
            <h2 className="text-4xl font-extrabold text-quatt-dark mb-6">
              Kwaliteit zonder compromissen.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bij StayCool Airco kiezen we bewust voor kwaliteit. Geen snelle jongens, maar vakmensen die trots zijn op hun werk.
              Wij gaan pas weg als alles perfect werkt en u tevreden bent.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-quatt-orange">
                      <reason.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-quatt-dark mb-1">{reason.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <Card padding="none" className="overflow-hidden rounded-[2.5rem] rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Monteur aan het werk"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-xl">"Vakwerk is onze standaard"</p>
                  <p className="text-gray-300 text-sm">Team StayCool</p>
                </div>
              </div>
            </Card>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-float hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="font-bold text-quatt-dark">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600 italic">"Super netjes gewerkt, alles binnen een dag geregeld. Aanrader!"</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
