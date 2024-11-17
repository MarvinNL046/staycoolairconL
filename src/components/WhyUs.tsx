import React from 'react';
import { Award, Clock, ThumbsUp, Banknote } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Gecertificeerd',
      description: 'F-gassen gecertificeerd en erkend installateur'
    },
    {
      icon: Clock,
      title: 'Snelle Service',
      description: 'Binnen 24 uur reactie op uw aanvraag'
    },
    {
      icon: ThumbsUp,
      title: 'Kwaliteit',
      description: 'Gebruik van A-merk producten en materialen'
    },
    {
      icon: Banknote,
      title: 'Beste Prijs',
      description: 'Scherpe prijzen en transparante offertes'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Waarom StayCool Airco?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Al jaren de betrouwbare partner voor airconditioning in Limburg
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                    <reason.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{reason.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Neem Contact Op
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}