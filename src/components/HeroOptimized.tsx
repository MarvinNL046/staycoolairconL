import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { sendEmail } from '../utils/email';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { trackInteraction, trackEvent } from '../utils/analytics';

// Simplified static hero without heavy animations
export default function HeroOptimized() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      
      trackEvent('form_submission', {
        form_name: 'hero_form',
        form_location: 'hero_section'
      });

      toast.success('Bedankt voor uw aanvraag! We nemen spoedig contact met u op.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Er ging iets mis. Probeer het opnieuw of bel ons direct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[60vh] lg:min-h-[80vh] flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Simple gradient background without complex patterns */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Static heading for better LCP */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Airco installatie in <span className="text-orange-400">Limburg</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Bespaar tot €800 per jaar op energiekosten met onze energiezuinige airconditioners. 
              Gecertificeerde installatie door heel Limburg.
            </p>

            {/* Features list */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-white">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>F-gassen gecertificeerd installateur</span>
              </div>
              <div className="flex items-center text-white">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Gratis adviesgesprek aan huis</span>
              </div>
              <div className="flex items-center text-white">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>5 jaar garantie op installatie</span>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-200"
                onClick={() => trackInteraction('hero', 'button_click', 'call')}
              >
                <Phone className="w-5 h-5 mr-2" />
                046 202 1430
              </a>
              <button
                onClick={() => {
                  navigate('/contact');
                  trackInteraction('hero', 'button_click', 'contact_page');
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition duration-200"
              >
                Bekijk alle locaties
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Direct een offerte aanvragen
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  Woonplaats
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht (optioneel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Verzenden...' : 'Offerte aanvragen'}
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                We nemen binnen 24 uur contact met u op
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}