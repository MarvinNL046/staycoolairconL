import React, { useState, useCallback, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Send, CheckCircle, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { sendEmail } from '../utils/email';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { trackEvent, trackInteraction } from '../utils/analytics';
import { trackPixelFormSubmission } from '../utils/facebook';
import { trackAPIFormSubmission } from '../utils/conversionsAPI';

interface MultiStepFormProps {
  variant?: 'hero' | 'standalone';
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

const STORAGE_KEY = 'staycool_form_data';

export default function MultiStepForm({ variant = 'hero', className = '' }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const navigate = useNavigate();

  // Load saved form data from session storage
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
        // If step 1 is complete, move to step 2
        if (parsed.name && parsed.email) {
          setStep(2);
        }
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Save form data to session storage
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    // Track field interaction
    trackInteraction('multi_step_form', 'field_input', name);
  }, [errors]);

  const validateStep1 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Vul uw naam in';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vul uw e-mailadres in';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Vul een geldig e-mailadres in';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vul uw telefoonnummer in';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Vul een geldig telefoonnummer in';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      trackEvent('multi_step_form', { action: 'step_1_completed' });
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
    trackEvent('multi_step_form', { action: 'step_back' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      trackEvent('form_submission', {
        form_name: 'multi_step_form',
        form_location: variant
      });

      const eventId = trackPixelFormSubmission('multi_step_form', true);
      trackAPIFormSubmission('multi_step_form', formData, 1650, eventId).catch(console.error);

      // Clear saved form data
      sessionStorage.removeItem(STORAGE_KEY);

      toast.success('Bedankt voor uw aanvraag! We nemen spoedig contact met u op.');
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
      setStep(1);

      setTimeout(() => {
        window.location.href = 'https://staycoolairco.nl/tot-snel';
      }, 1500);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Er ging iets mis. Probeer het opnieuw of bel ons direct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isHero = variant === 'hero';
  const inputBaseClass = isHero
    ? 'w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all'
    : 'w-full h-12 px-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all';

  return (
    <div className={`relative ${className}`}>
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-medium ${isHero ? 'text-gray-300' : 'text-gray-600'}`}>
            Stap {step} van 2
          </span>
          <span className={`text-sm ${isHero ? 'text-gray-400' : 'text-gray-500'}`}>
            {step === 1 ? 'Uw gegevens' : 'Contactvoorkeuren'}
          </span>
        </div>
        <div className={`h-2 rounded-full ${isHero ? 'bg-white/20' : 'bg-gray-200'}`}>
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic info */}
        <div className={`space-y-4 ${step === 1 ? 'block' : 'hidden'}`}>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isHero ? 'text-white' : 'text-gray-700'}`}>
              <User className="inline h-4 w-4 mr-1" />
              Naam *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Uw volledige naam"
              className={`${inputBaseClass} ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${isHero ? 'text-white' : 'text-gray-700'}`}>
              <Mail className="inline h-4 w-4 mr-1" />
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="uw.email@voorbeeld.nl"
              className={`${inputBaseClass} ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleNextStep}
            className="w-full h-12 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Volgende
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className={`text-xs text-center ${isHero ? 'text-gray-400' : 'text-gray-500'}`}>
            We delen uw gegevens nooit met derden
          </p>
        </div>

        {/* Step 2: Contact preferences */}
        <div className={`space-y-4 ${step === 2 ? 'block' : 'hidden'}`}>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isHero ? 'text-white' : 'text-gray-700'}`}>
              <Phone className="inline h-4 w-4 mr-1" />
              Telefoon *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 12345678"
              className={`${inputBaseClass} ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${isHero ? 'text-white' : 'text-gray-700'}`}>
              <MapPin className="inline h-4 w-4 mr-1" />
              Woonplaats <span className="text-gray-400 font-normal">(optioneel)</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Bijv. Roermond"
              className={inputBaseClass}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${isHero ? 'text-white' : 'text-gray-700'}`}>
              <MessageSquare className="inline h-4 w-4 mr-1" />
              Bericht <span className="text-gray-400 font-normal">(optioneel)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Vertel ons over uw situatie..."
              rows={3}
              className={`${inputBaseClass} h-auto py-3 resize-none`}
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePrevStep}
              className={`flex-1 h-12 flex items-center justify-center gap-2 border rounded-lg font-medium transition-colors ${
                isHero
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              Terug
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-[2] h-12 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Verzenden...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Verstuur Aanvraag
                </>
              )}
            </button>
          </div>

          {/* Success indicators */}
          <div className={`flex items-center justify-center gap-4 text-sm ${isHero ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Gratis
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Vrijblijvend
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              24u reactie
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
