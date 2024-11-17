import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Calendar } from 'lucide-react';
import { sendEmail } from '../utils/email';
import { trackEvent, trackConversion } from '../utils/analytics';
import { trackFormSubmission } from '../utils/gtm';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      // Track form submission in GA4
      trackEvent('form_submission', {
        form_name: 'contact_form',
        form_type: 'contact'
      });

      // Track conversion in Google Ads
      trackConversion('CONTACT_FORM_SUBMIT', 'contact_submit');

      // Track in GTM
      trackFormSubmission('contact_form', formData);

      toast.success('Bericht succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
    } catch (error) {
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track error in GA4
      trackEvent('form_error', {
        form_name: 'contact_form',
        error_type: 'submission_failed'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Neem contact op voor een vrijblijvende offerte
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900">Direct Contact</h3>
              <div className="mt-8 space-y-6">
                <a href="tel:0462021430" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>046 202 1430</span>
                </a>
                <a href="https://wa.me/31636481054" className="flex items-center text-gray-600 hover:text-blue-600">
                  <MessageSquare className="h-6 w-6 mr-3" />
                  <span>WhatsApp: 06 36481054</span>
                </a>
                <a href="mailto:info@staycoolairco.nl" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Mail className="h-6 w-6 mr-3" />
                  <span>info@staycoolairco.nl</span>
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-6 w-6 mr-3" />
                  <span>Werkgebied: Limburg, Nederland</span>
                </div>
                <a 
                  href="https://afspraken.staycoolairco.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Direct online inplannen
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="px-6 py-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Naam
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Woonplaats
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}