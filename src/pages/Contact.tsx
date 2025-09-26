import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';
import ContactForm from '../components/Contact';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Contact() {
  const breadcrumbItems = [
    { label: 'Contact', path: '/contact' }
  ];

  const voordelen = [
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      titel: "Direct contact",
      beschrijving: "Binnen 24 uur reactie op uw aanvraag"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      titel: "Vrijblijvend advies",
      beschrijving: "Gratis offerte en persoonlijk advies aan huis"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      titel: "Snelle service",
      beschrijving: "Vaak installatie binnen 2 weken mogelijk"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-500" />,
      titel: "5 sterren service",
      beschrijving: "Beoordeeld met 4.9/5 door onze klanten"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | StayCool Airco</title>
        <meta 
          name="description" 
          content="Neem contact op met StayCool Airco voor al uw vragen over airconditioning of voor een vrijblijvende offerte."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 py-16">
            <Breadcrumbs items={breadcrumbItems} className="text-white/70 mb-4" />
            
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Neem Contact Op
              </h1>
              <p className="text-xl text-blue-50 mb-8">
                Heeft u vragen of wilt u een offerte aanvragen? Wij staan voor u klaar!
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
              Waarom kiezen voor StayCool Airco?
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
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
