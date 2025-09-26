import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, TrendingUp, Shield, Clock } from 'lucide-react';
import LazyImage from './LazyImage';

export default function HomeBattery() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Battery className="h-4 w-4 mr-2" />
            NIEUW: Thuisbatterijen
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Bespaar met AlphaESS Thuisbatterijen
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Optimaal profiteren van dynamische energiecontracten met slimme energieopslag
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <LazyImage
              src="/images/products/thuisbatterij/alphaess/alpha-ess-thuisbatterij-3580x3580.webp"
              alt="AlphaESS SMILE G3-T10 thuisbatterij"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
              4-7 jaar terugverdientijd
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AlphaESS SMILE G3-T10 (3-fase)
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Slim Stroom Handelen</h4>
                  <p className="text-gray-600">
                    Beste handelsresultaten in meerdere markten (EPEX, onbalans, congestie)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">10 Jaar Garantie</h4>
                  <p className="text-gray-600">
                    10 jaar garantie of 10.000 cycli met 24/7 monitoring via AlphaCloud
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Snel Geïnstalleerd</h4>
                  <p className="text-gray-600">
                    Binnen 4 weken geïnstalleerd, inclusief hulp met BTW-teruggave
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Capaciteit:</span>
                  <p className="font-semibold">11,55 kWh</p>
                </div>
                <div>
                  <span className="text-gray-600">Laadvermogen:</span>
                  <p className="font-semibold">10 kW</p>
                </div>
                <div>
                  <span className="text-gray-600">Afmetingen:</span>
                  <p className="font-semibold">172 x 61 x 21 cm</p>
                </div>
                <div>
                  <span className="text-gray-600">Type:</span>
                  <p className="font-semibold">3-fase systeem</p>
                </div>
              </div>
              <div className="mt-4 bg-green-50 p-4 rounded-md">
                <p className="text-sm font-semibold text-green-800">
                  Binnenkort beschikbaar! Plan nu alvast uw vrijblijvende adviesgesprek
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Wees er als eerste bij • AlphaESS helpt met 21% BTW teruggave
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
              >
                Plan vrijblijvend adviesgesprek
              </Link>
              <Link
                to="/products/alphaess/smile-g3-t10"
                className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 rounded-md shadow-sm text-base font-medium text-orange-600 bg-white hover:bg-orange-50"
              >
                Bekijk specificaties
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Waarom AlphaESS bij StayCool Airco?
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Totaaloplossing</h5>
              <p className="text-gray-600">
                Combineer uw airco installatie met een thuisbatterij voor maximale energiebesparing
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Expertise</h5>
              <p className="text-gray-600">
                Onze installateurs zijn gespecialiseerd in zowel klimaatsystemen als energieopslag
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Service</h5>
              <p className="text-gray-600">
                Complete ontzorging van advies tot installatie en onderhoud
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}