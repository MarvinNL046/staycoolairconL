import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Star, ThermometerSun, PiggyBank, Leaf, Home, Users, Calendar, ArrowRight } from 'lucide-react';

const VerwarmenMetAircoErvaring = () => {
  const testimonials = [
    {
      quote: "Sinds we verwarmen met de airco is ons energieverbruik met 40% gedaald. De warmte verspreidt zich veel gelijkmatiger door het huis dan met onze oude cv-ketel.",
      author: "Familie de Vries, Maastricht",
      rating: 5
    },
    {
      quote: "In het begin was ik sceptisch over verwarmen met airco, maar na een winter ervaring kan ik zeggen: nooit meer anders! Het comfort is echt veel beter.",
      author: "Peter Janssen, Roermond",
      rating: 5
    },
    {
      quote: "De combinatie van zonnepanelen en verwarmen met de airco werkt perfect. In de winter gebruiken we de energie die we in de zomer opwekken.",
      author: "Linda Hermans, Sittard",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: ThermometerSun,
      title: "Constante Temperatuur",
      description: "Ervaar gelijkmatige warmte zonder koude plekken in huis"
    },
    {
      icon: PiggyBank,
      title: "Lagere Energiekosten",
      description: "Gemiddeld 40-60% besparing op verwarmingskosten"
    },
    {
      icon: Leaf,
      title: "Duurzaam Verwarmen",
      description: "Minimale CO₂-uitstoot door efficiënt energiegebruik"
    },
    {
      icon: Home,
      title: "Betere Luchtkwaliteit",
      description: "Ingebouwde luchtfiltering voor gezondere binnenlucht"
    }
  ];

  const seasonalExperiences = [
    {
      season: "Herfst",
      description: "Perfect voor de wisselvallige temperaturen. 's Ochtends even verwarmen, overdag uit."
    },
    {
      season: "Winter",
      description: "Efficiënt verwarmen, zelfs bij temperaturen onder nul. Snel op temperatuur."
    },
    {
      season: "Lente",
      description: "Flexibel inspelen op koude ochtenden en warmere middagen."
    },
    {
      season: "Zomer",
      description: "Naadloze overgang naar koeling wanneer nodig."
    }
  ];

  return (
    <ArticleLayout
      title="Verwarmen met Airco Ervaring: Comfort & Besparing in de Praktijk"
      description="Ontdek echte ervaringen met het verwarmen met airco. Van energiebesparing tot comfort - lees hier wat gebruikers zeggen en wat je kunt verwachten."
      publishDate="2024-01-17"
      modifiedDate="2024-01-17"
      author="StayCool Airconditioning"
      tags={['Verwarmen met Airco', 'Gebruikerservaringen', 'Energiebesparing', 'Duurzaam Verwarmen']}
    >
      <section className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-8">
          <h2 className="text-blue-800 mt-0">Belangrijkste Inzichten</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>Gemiddelde energiebesparing van 40-60%</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>Snellere opwarming dan traditionele systemen</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>Betere warmteverdeling door het hele huis</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>Lagere CO₂-uitstoot dan gasverwarming</span>
            </li>
          </ul>
        </div>

        <h2>Verwarmen met Airco: De Praktijkervaring</h2>
        <p>
          Steeds meer huishoudens kiezen voor verwarmen met airco als hoofdverwarming. 
          De <strong>praktijkervaring met verwarmen met airco</strong> laat zien dat het niet alleen 
          een duurzame keuze is, maar ook zorgt voor meer comfort en lagere energiekosten.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 m-0">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <h2>Ervaringen per Seizoen</h2>
        <p>
          Een van de grootste voordelen van verwarmen met airco is de flexibiliteit 
          gedurende het hele jaar. Hier zijn de ervaringen per seizoen:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {seasonalExperiences.map((season) => (
            <div 
              key={season.season}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                {season.season}
              </h3>
              <p className="text-gray-600 m-0">
                {season.description}
              </p>
            </div>
          ))}
        </div>

        <h2>Wat Gebruikers Zeggen</h2>
        <p>
          De beste manier om de effectiviteit van verwarmen met airco te beoordelen 
          is door te kijken naar echte gebruikerservaringen:
        </p>

        <div className="space-y-6 my-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>

        <h2>Veelgestelde Vragen over Verwarmen met Airco</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Is verwarmen met airco echt zuiniger dan een cv-ketel?
            </h3>
            <p className="m-0">
              Ja, uit praktijkervaring blijkt dat verwarmen met airco 40-60% zuiniger 
              kan zijn dan een traditionele cv-ketel. Dit komt door het hoge rendement 
              van de warmtepomp technologie.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Werkt verwarmen met airco ook bij lage buitentemperaturen?
            </h3>
            <p className="m-0">
              Moderne airco's kunnen effectief verwarmen tot -15°C buitentemperatuur. 
              Gebruikers ervaren zelfs bij vorst een comfortabele warmte in huis.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">
              Hoe snel warmt een ruimte op met airco verwarming?
            </h3>
            <p className="m-0">
              De ervaring leert dat ruimtes meestal binnen 15-30 minuten op temperatuur 
              zijn. Dit is vaak sneller dan met traditionele radiatoren.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h2 className="text-blue-900 mt-0">Conclusie: Verwarmen met Airco Ervaring</h2>
          <p className="mb-0">
            De praktijkervaringen met verwarmen met airco zijn overwegend zeer positief. 
            Gebruikers waarderen vooral de combinatie van comfort, energiebesparing en 
            flexibiliteit. Met de juiste installatie en gebruik blijkt het een 
            toekomstbestendige verwarmingsoplossing die zichzelf terugverdient door 
            lagere energiekosten.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Zelf Ervaren?</h2>
          <p className="text-blue-100 mb-6">
            Wilt u ook de voordelen van verwarmen met airco ervaren? Onze experts 
            helpen u graag met persoonlijk advies voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Vraag een adviesgesprek aan
            </a>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600"
            >
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default VerwarmenMetAircoErvaring;
