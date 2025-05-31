import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, MessageSquare } from 'lucide-react';
import MetaTags from '../components/MetaTags';

const TotSnel: React.FC = () => {
  return (
    <>
      <MetaTags 
        title="Bedankt voor uw aanvraag | StayCool Airco"
        description="Bedankt voor uw aanvraag. We nemen zo spoedig mogelijk contact met u op voor uw airco installatie of onderhoud."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <div className="bg-white shadow-xl rounded-lg p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-4">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Bedankt voor uw aanvraag!
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.
              </p>
              <p className="text-gray-600">
                In de tussentijd kunt u onderstaande video bekijken voor meer informatie over onze services.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Cv8Aob-E6Ks"
                  title="StayCool Airco Services"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Wat gebeurt er nu?
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white text-sm font-medium">
                      1
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Een van onze specialisten neemt contact met u op om uw wensen te bespreken
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white text-sm font-medium">
                      2
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    We plannen een vrijblijvende afspraak in voor een technische inspectie
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white text-sm font-medium">
                      3
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    U ontvangt een offerte op maat met de beste oplossing voor uw situatie
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Link
                to="/"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
              >
                <Home className="w-5 h-5 mr-2 text-gray-700" />
                <span className="text-gray-700 font-medium">Homepage</span>
              </Link>
              <a
                href="tel:0462021430"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-lg p-4 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-white" />
                <span className="text-white font-medium">Bel ons</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-gray-700" />
                <span className="text-gray-700 font-medium">Contact</span>
              </Link>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>
                Heeft u vragen? Bel ons gerust op{' '}
                <a href="tel:0462021430" className="text-blue-600 hover:text-blue-700 font-medium">
                  046 202 1430
                </a>
              </p>
              <p className="mt-1">
                Bereikbaar van maandag t/m vrijdag van 09:00 - 17:00 uur
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotSnel;