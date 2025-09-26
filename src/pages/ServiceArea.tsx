import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Clock, Star } from 'lucide-react';

export default function ServiceArea() {
  const breadcrumbItems = [
    { label: 'Werkgebied', path: '/werkgebied' }
  ];

  const voordelen = [
    {
      icon: <MapPin className="h-8 w-8 text-sky-500" />,
      titel: "Lokale kennis",
      beschrijving: "Specifieke expertise per gemeente in Limburg"
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      titel: "F-gassen gecertificeerd",
      beschrijving: "Officieel gecertificeerde installateurs"
    },
    {
      icon: <Clock className="h-8 w-8 text-sky-500" />,
      titel: "Snelle service",
      beschrijving: "Korte reistijden binnen Limburg"
    },
    {
      icon: <Star className="h-8 w-8 text-sky-500" />,
      titel: "200+ reviews",
      beschrijving: "Beoordeeld met 4.7/5 door onze klanten"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Werkgebied | StayCool Airco - Limburg</title>
        <meta 
          name="description" 
          content="StayCool Airco biedt professionele airco installatie en onderhoud in heel Limburg. Ontdek onze specialistische diensten per stad met lokale expertise."
        />
        <meta name="keywords" content="airco limburg, werkgebied staycool, airco installateur limburg, airconditioning limburg" />
        <link rel="canonical" href="https://staycoolairco.nl/werkgebied" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <Breadcrumbs items={breadcrumbItems} className="text-white/70 mb-4" />
            
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Werkgebied Limburg
              </h1>
              <p className="text-xl text-blue-50 mb-8">
                Uw specialist voor airconditioning in heel Limburg met lokale kennis en expertise
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {voordelen.map((voordeel, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-center mb-2">
                      {voordeel.icon}
                    </div>
                    <p className="font-semibold text-sm">{voordeel.titel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Voordelen Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Waarom kiezen voor StayCool Airco in Limburg?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {voordelen.map((voordeel, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {voordeel.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{voordeel.titel}</h3>
                  <p className="text-gray-600">{voordeel.beschrijving}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-center mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                StayCool Airco is uw specialist voor airconditioning in heel Limburg. Met jarenlange ervaring en lokale kennis 
                bieden wij maatwerkoplossingen voor elke stad en gemeente in onze provincie.
              </p>
              <p className="text-gray-600 mb-6">
                Onze gecertificeerde F-gassen installateurs kennen de specifieke uitdagingen van elke locatie - van historische 
                panden in Maastricht tot moderne woningen in Venlo. Ontdek hieronder onze gespecialiseerde diensten per stad.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Locations with Enhanced Content */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">Onze Specialistische Diensten per Stad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                to="/airco-installatie/roermond"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Roermond</h3>
                <p className="text-gray-600">Specialist in airconditioning voor Roermond en omgeving. Bekijk onze lokale diensten.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/maastricht"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Maastricht</h3>
                <p className="text-gray-600">Ervaren airco installateurs in Maastricht. Ontdek onze oplossingen voor historische panden.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/heerlen"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Heerlen</h3>
                <p className="text-gray-600">Airconditioning in Heerlen en omgeving. Bekijk onze specifieke diensten voor de voormalige mijnstreek.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/venlo"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Venlo</h3>
                <p className="text-gray-600">Deskundige airconditioning diensten in Venlo. Bekijk onze oplossingen voor woningen en bedrijven.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/sittard"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Sittard</h3>
                <p className="text-gray-600">Professionele airco installatie in Sittard. Ontdek onze aanpak voor karakteristieke panden.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/weert"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Weert</h3>
                <p className="text-gray-600">Specialist in airconditioning voor de warmste stad van Nederland. Ontdek onze koeloplossingen.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/geleen"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Geleen</h3>
                <p className="text-gray-600">Airco oplossingen voor Geleen met extra aandacht voor de omgeving van Chemelot. Ontdek onze diensten.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/stein"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Stein</h3>
                <p className="text-gray-600">Professionele airconditioning voor woningen in Stein. Met speciale oplossingen voor het Maasdal.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
              
              <Link 
                to="/airco-installatie/landgraaf"
                className="block p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-medium text-blue-800 mb-2">Airco Installatie Landgraaf</h3>
                <p className="text-gray-600">Deskundige airco installatie in Landgraaf. Bekijk onze speciale aanpak voor de unieke ligging.</p>
                <p className="text-sm text-blue-600 mt-2">200+ positieve reviews (4.7/5)</p>
              </Link>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Uw stad niet gevonden?</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              StayCool Airco bedient heel Limburg en omliggende gemeenten. Staat uw locatie er niet bij? 
              Neem contact met ons op voor een persoonlijk adviesgesprek.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Neem Contact Op
              </Link>
              <a 
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600 transition-colors"
              >
                Bel Direct: 046 202 1430
              </a>
            </div>
          </div>
          
          {/* Local Expertise Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokale Kennis</h3>
              <p className="text-gray-600">Onze monteurs kennen de specifieke uitdagingen van elke Limburgse gemeente.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">F-gassen Gecertificeerd</h3>
              <p className="text-gray-600">Al onze installateurs zijn officieel gecertificeerd voor F-gassen werkzaamheden.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Snelle Service</h3>
              <p className="text-gray-600">Korte reistijden binnen Limburg betekenen snelle service en lagere kosten.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
