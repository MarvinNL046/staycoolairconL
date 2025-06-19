import React from 'react';
import { Fan, Wrench, ThermometerSun } from 'lucide-react';

export default function ServicesOptimized() {
  const services = [
    {
      icon: Fan,
      title: 'Airco Installatie',
      description: 'Professionele installatie van verschillende typen airconditioners, perfect afgestemd op uw ruimte.',
      features: ['Gratis vooronderzoek', 'Vakkundige montage', 'Netjes afgewerkt']
    },
    {
      icon: ThermometerSun,
      title: 'Duurzaam Verwarmen',
      description: 'Bespaar op teruglevering van zonne-energie door efficiënt koelen in de zomer en verwarmen in de winter.',
      features: ['Voorkom terugleverkosten', 'Energiezuinig verwarmen', 'Optimaal gebruik zonnepanelen']
    },
    {
      icon: Wrench,
      title: 'Onderhoud & Service',
      description: 'Regelmatig onderhoud voor optimale werking en langere levensduur van uw airconditioning.',
      features: ['Preventief onderhoud', 'Snelle reparatie']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Onze Diensten
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compleet aanbod van airconditioning services in Limburg
          </p>
        </div>

        <div className="mt-20">
          {/* Video container with aspect ratio */}
          <div className="relative w-full max-w-4xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?mute=1"
              title="StayCool Airco Promotional Video"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-800 rounded-full p-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}