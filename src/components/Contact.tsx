import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../utils/email';
import { trackFormSubmission, trackInteraction } from '../utils/analytics';
import { trackPixelFormSubmission } from '../utils/facebook';
import { trackAPIFormSubmission } from '../utils/conversionsAPI';
import toast, { Toaster } from 'react-hot-toast';
import { requestIdleCallbackPolyfill } from '../utils/requestIdleCallback';
import Card from './ui/Card';
import Button from './ui/Button';

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

    requestIdleCallbackPolyfill(() => {
      trackInteraction('contact_form', 'field_input', name);
    }, { timeout: 2000 });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      try {
        trackFormSubmission('contact_form', true);
      } catch (trackError) {
        console.warn('Failed to track form submission:', trackError);
      }

      let eventId;
      try {
        eventId = trackPixelFormSubmission('contact_form', true);
      } catch (pixelError) {
        console.warn('Failed to track Facebook Pixel:', pixelError);
      }

      console.log('Tracking with Conversions API...');
      trackAPIFormSubmission('contact_form', formData, 1650, eventId).catch(error => {
        console.warn('Failed to track with Conversions API:', error);
      });

      toast.success('Bericht succesvol verzonden!');
      setFormData(initialFormState);

      setTimeout(() => {
        navigate('/tot-snel');
      }, 1000);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      trackFormSubmission('contact_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-quatt-warm">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-quatt-orange font-bold tracking-wide uppercase text-sm mb-2 block">Contact</span>
          <h2 className="text-4xl font-extrabold text-quatt-dark mb-6">
            Kom in contact
          </h2>
          <p className="text-xl text-gray-600">
            De airco specialisten van Limburg staan voor u klaar.
          </p>
        </div>

        {/* Calendar Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-quatt-orange to-orange-500 rounded-[2rem] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

            <div className="px-8 py-12 md:p-16 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 backdrop-blur-sm">
                <Calendar className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Direct Online een Afspraak Maken
              </h3>
              <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
                Kies zelf uw datum en tijd voor een gratis adviesgesprek aan huis. Geen wachttijden, direct zekerheid.
              </p>

              <div className="flex flex-wrap gap-6 justify-center items-center mb-10 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span>Direct bevestiging</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-white" />
                  <span>Kies uw eigen tijd</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-white" />
                  <span>Vrijblijvend advies</span>
                </div>
              </div>

              <a
                href="https://afspraken.staycoolairco.nl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInteraction('contact', 'click_appointment')}
                className="inline-flex items-center px-8 py-4 bg-white text-quatt-orange font-bold text-lg rounded-xl hover:bg-orange-50 hover:scale-105 transition-all shadow-lg"
              >
                Plan nu een afspraak
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Info Card */}
          <Card padding="lg" className="h-full">
            <h3 className="text-2xl font-bold text-quatt-dark mb-8">Direct Contact</h3>
            <div className="space-y-8">
              <a
                href="tel:0462021430"
                className="flex items-start group"
                onClick={() => trackInteraction('contact', 'click_phone')}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-quatt-orange group-hover:bg-quatt-orange group-hover:text-white transition-colors shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Telefoon</span>
                  <span className="text-xl font-bold text-quatt-dark group-hover:text-quatt-orange transition-colors">046 202 1430</span>
                  <span className="block text-sm text-gray-500 mt-1">Ma-Vr: 09:00 - 17:00</span>
                </div>
              </a>

              <a
                href="https://wa.me/31636481054"
                className="flex items-start group"
                onClick={() => trackInteraction('contact', 'click_whatsapp')}
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">WhatsApp</span>
                  <span className="text-xl font-bold text-quatt-dark group-hover:text-green-600 transition-colors">06 36481054</span>
                  <span className="block text-sm text-gray-500 mt-1">Snel antwoord</span>
                </div>
              </a>

              <a
                href="mailto:info@staycoolairco.nl"
                className="flex items-start group"
                onClick={() => trackInteraction('contact', 'click_email')}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</span>
                  <span className="text-xl font-bold text-quatt-dark group-hover:text-blue-600 transition-colors">info@staycoolairco.nl</span>
                </div>
              </a>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Locatie</span>
                  <p className="text-quatt-dark font-medium">Aan De Bogen 11</p>
                  <p className="text-quatt-dark font-medium">6118AS Nieuwstadt</p>
                  <p className="text-sm text-gray-500 mt-1">Werkgebied: Heel Limburg</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form Card */}
          <Card padding="lg" className="h-full">
            <h3 className="text-2xl font-bold text-quatt-dark mb-2">Stuur een bericht</h3>
            <p className="text-gray-600 mb-8">Vul het formulier in en wij nemen binnen 24 uur contact op.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-quatt-dark mb-1.5">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-quatt-orange focus:ring-2 focus:ring-quatt-orange/20 transition-all bg-gray-50"
                  placeholder="Uw naam"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-quatt-dark mb-1.5">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-quatt-orange focus:ring-2 focus:ring-quatt-orange/20 transition-all bg-gray-50"
                    placeholder="naam@email.nl"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-quatt-dark mb-1.5">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-quatt-orange focus:ring-2 focus:ring-quatt-orange/20 transition-all bg-gray-50"
                    placeholder="06 12345678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-quatt-dark mb-1.5">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-quatt-orange focus:ring-2 focus:ring-quatt-orange/20 transition-all bg-gray-50"
                  placeholder="Bijv. Maastricht"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-quatt-dark mb-1.5">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-quatt-orange focus:ring-2 focus:ring-quatt-orange/20 transition-all bg-gray-50 resize-none"
                  placeholder="Waar kunnen we u mee helpen?"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full py-4 text-lg"
              >
                {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
