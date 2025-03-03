import React, { useState, lazy, Suspense } from 'react';
import { m } from 'framer-motion';
import { Phone, Mail, Send, Calendar, Shield, Clock, Thermometer } from 'lucide-react';
import { sendEmail } from '../utils/email';
import { trackFormSubmission, trackInteraction } from '../utils/analytics';
import toast, { Toaster } from 'react-hot-toast';

const CompactGoogleReviews = lazy(() => import('./CompactGoogleReviews'));

const inputClasses = "mt-1 block w-full h-12 rounded-md bg-white/10 border-gray-300 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500";

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Track field interaction after user stops typing
    const timeoutId = setTimeout(() => {
      trackInteraction('hero_form', 'field_input', name);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      
      // Track successful form submission
      trackFormSubmission('hero_form', true);
      
      toast.success('Bericht succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track form submission error
      trackFormSubmission('hero_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <Toaster position="top-center" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <div className="h-[42px]">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-100">
                ⚡ Bespaar tot 60% op verwarmingskosten
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 max-w-[20ch]">
              Verwarm Duurzaam & Bespaar op Terugleverkosten
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-[45ch]">
              Voorkom hoge terugleverkosten van uw zonnepanelen door slim te verwarmen met een airco. 
              Efficiënt verwarmen én koelen met één systeem.
            </p>

            <div className="mt-4 mb-8 min-h-[42px] sm:min-h-[100px]">
              <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-lg h-[100px]" />}>
                <CompactGoogleReviews />
              </Suspense>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://afspraken.staycoolairco.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Direct inplannen
                <span className="ml-2 text-sm text-blue-700">(coming soon: zelf eenvoudig online inplannen)</span>
              </a>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                046 202 1430
              </a>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center text-white">
                <Shield className="h-6 w-6 mr-2 text-blue-300 flex-shrink-0" />
                <span>F-gassen gecertificeerd</span>
              </div>
              <div className="flex items-center text-white">
                <Clock className="h-6 w-6 mr-2 text-blue-300 flex-shrink-0" />
                <span>Snelle service</span>
              </div>
              <div className="flex items-center text-white">
                <Thermometer className="h-6 w-6 mr-2 text-blue-300 flex-shrink-0" />
                <span>Gratis advies</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Vraag Direct Een Gratis Offerte Aan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Naam
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Telefoon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white">
                  Woonplaats
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-white placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 flex justify-center items-center px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verzenden...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 flex-shrink-0" />
                    Verstuur Aanvraag
                  </>
                )}
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
