import React from 'react';
import { m } from 'framer-motion';
import { Fan, Wrench, ThermometerSun, Banknote } from 'lucide-react';

export default function Services() {
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
      description: 'Bespaar op teruglevering van zonne-energie door te verwarmen met uw airco in de winter.',
      features: ['Voorkom terugleverkosten', 'Energiezuinig verwarmen', 'Optimaal gebruik zonnepanelen']
    },
    {
      icon: Wrench,
      title: 'Onderhoud & Service',
      description: 'Regelmatig onderhoud voor optimale werking en langere levensduur van uw airconditioning.',
      features: ['Preventief onderhoud', 'Snelle reparatie', '24/7 storingsdienst']
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
          <div className="aspect-video w-full max-w-4xl mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9m-jkGgfLog?mute=1"
              title="StayCool Airco Promotional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-600 rounded-full p-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Vraag Offerte Aan
                </a>
              </m.div>
            ))}
          </div>
        </div>

        <m.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-900">
                Bespaar op Terugleverkosten
              </h3>
              <p className="mt-4 text-blue-800">
                Heeft u zonnepanelen? Voorkom hoge terugleverkosten door uw airco te gebruiken voor verwarming in de winter. 
                Zo benut u uw eigen opgewekte energie optimaal en bespaart u op energiekosten.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Banknote className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Bereken uw Besparing
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}