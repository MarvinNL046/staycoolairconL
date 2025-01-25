import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CapacityCalculatorComponent from '../components/CapacityCalculator';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CapacityCalculator() {
  const breadcrumbItems = [
    { label: 'Capaciteit Calculator', path: '/capaciteit-calculator' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Capaciteit Calculator | StayCool Airco</title>
        <meta 
          name="description" 
          content="Bereken de benodigde capaciteit van uw airco op basis van uw ruimte. Onze calculator helpt u bij het kiezen van de juiste airco voor uw situatie."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          
          <h1 className="text-4xl font-bold mb-4">Airco Capaciteit Calculator</h1>
          <p className="text-gray-600 mb-8">
            Bereken eenvoudig welke capaciteit airco u nodig heeft voor uw ruimte. 
            Vul de gegevens in en ontvang direct een advies op maat.
          </p>
          
          <CapacityCalculatorComponent />

          <div className="mt-12 prose max-w-none">
            <h2>Hoe werkt de calculator?</h2>
            <p>
              Onze calculator houdt rekening met verschillende factoren die van invloed zijn op de benodigde capaciteit van uw airco:
            </p>
            <ul>
              <li><strong>Kamergrootte:</strong> De basis voor de berekening is het vloeroppervlak van uw ruimte.</li>
              <li><strong>Zonlicht:</strong> Meer zonlicht betekent meer warmte, dus een hogere capaciteit is nodig.</li>
              <li><strong>Isolatie:</strong> Goede isolatie vermindert de benodigde capaciteit.</li>
              <li><strong>Aantal personen:</strong> Meer mensen in de ruimte betekent meer warmteproductie.</li>
              <li><strong>Warmtebronnen:</strong> Apparatuur zoals computers en andere elektronische apparaten produceren extra warmte.</li>
            </ul>

            <h2>Waarom is de juiste capaciteit belangrijk?</h2>
            <p>
              Het kiezen van de juiste capaciteit is essentieel voor een efficiënte en comfortabele airconditioning:
            </p>
            <ul>
              <li>Te lage capaciteit: de ruimte wordt niet voldoende gekoeld</li>
              <li>Te hoge capaciteit: onnodig hoog energieverbruik en mogelijk oncomfortabele temperatuurschommelingen</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3>Professioneel advies</h3>
              <p>
                Deze calculator geeft een goede indicatie, maar voor een exacte berekening en professioneel advies 
                kunt u altijd contact met ons opnemen. Wij komen graag bij u langs voor een persoonlijk advies 
                op maat.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
