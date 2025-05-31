import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../utils/email';
import { trackFormSubmission, trackInteraction } from '../utils/analytics';
import { trackPixelFormSubmission } from '../utils/facebook';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

const initialFormState: FormData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  message: ''
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Use requestIdleCallback for non-critical analytics to avoid blocking INP
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        trackInteraction('contact_form', 'field_input', name);
      }, { timeout: 2000 });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      // Track successful form submission
      trackFormSubmission('contact_form', true);
      
      // Track Facebook Pixel conversion
      trackPixelFormSubmission('contact_form', true);

      // Show success message briefly before redirecting
      toast.success('Bericht succesvol verzonden!');
      
      // Reset form
      setFormData(initialFormState);
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate('/tot-snel');
      }, 1000);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track form submission error
      trackFormSubmission('contact_form', false);
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
                <a 
                  href="tel:0462021430" 
                  className="flex items-center text-gray-600 hover:text-orange-500"
                  onClick={() => trackInteraction('contact', 'click_phone')}
                >
                  <Phone className="h-6 w-6 mr-3" />
                  <span>046 202 1430</span>
                </a>
                <a 
                  href="https://wa.me/31636481054" 
                  className="flex items-center text-gray-600 hover:text-orange-500"
                  onClick={() => trackInteraction('contact', 'click_whatsapp')}
                >
                  <MessageSquare className="h-6 w-6 mr-3" />
                  <span>WhatsApp: 06 36481054</span>
                </a>
                <a 
                  href="mailto:info@staycoolairco.nl" 
                  className="flex items-center text-gray-600 hover:text-orange-500"
                  onClick={() => trackInteraction('contact', 'click_email')}
                >
                  <Mail className="h-6 w-6 mr-3" />
                  <span>info@staycoolairco.nl</span>
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <p>Aan De Bogen 11</p>
                    <p>6118AS Nieuwstadt</p>
                    <p>Werkgebied: Limburg, Nederland</p>
                  </div>
                </div>
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
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verzenden...
                    </>
                  ) : (
                    'Verstuur Bericht'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
