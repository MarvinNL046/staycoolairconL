import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/Contact';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Neem Contact Op
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een offerte aanvragen? Wij staan voor u klaar!
          </p>
        </m.div>

        <ContactForm />
      </div>
    </div>
  );
}