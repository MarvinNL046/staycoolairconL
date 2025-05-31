import React, { useState, lazy, Suspense, useEffect } from 'react';
import { m } from 'framer-motion';
import { Phone, Mail, Send, Calendar, Shield, Clock, Thermometer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../utils/email';
import { trackFormSubmission, trackInteraction } from '../utils/analytics';
import toast, { Toaster } from 'react-hot-toast';

import CompactGoogleReviews from './CompactGoogleReviews';
import { ArrowRight, Timer, ShieldCheck } from 'lucide-react';

const inputClasses = "mt-1 block w-full h-12 rounded-md bg-white/10 border-gray-300 text-white placeholder-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500";

// Text carousel component for rotating headlines with typewriter effect
function TextCarousel() {
  const headlines = [
    { static: "Verwarm ", keyword: "Duurzaam", rest: " & Bespaar op Terugleverkosten" },
    { static: "Versla de Zomerhitte met ", keyword: "Efficiënt", rest: " Koelen" },
    { static: "Blijf ", keyword: "Koel & Comfortabel", rest: " Tijdens Hittegolven" },
    { static: "Comfortabel de Winter Door met ", keyword: "Duurzame", rest: " Warmte" },
    { static: "Zeg Vaarwel Tegen Kou met ", keyword: "Efficiënte", rest: " Verwarming" }
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedKeyword, setDisplayedKeyword] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect for keyword
  useEffect(() => {
    const currentHeadline = headlines[currentTextIndex];
    let charIndex = 0;
    setDisplayedKeyword("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < currentHeadline.keyword.length) {
        setDisplayedKeyword(currentHeadline.keyword.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 100); // Type one character every 100ms

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  // Auto-rotate text carousel
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(rotationInterval);
  }, []);

  const currentHeadline = headlines[currentTextIndex];

  return (
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 max-w-[20ch]">
      <span>{currentHeadline.static}</span>
      <span className="text-orange-400 relative">
        {displayedKeyword}
        {isTyping && (
          <span className="absolute -right-1 top-0 h-full w-0.5 bg-orange-400 animate-pulse" />
        )}
      </span>
      <span>{currentHeadline.rest}</span>
    </h1>
  );
}

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const navigate = useNavigate();

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
      
      // Show success message briefly before redirecting
      toast.success('Bericht succesvol verzonden!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate('/tot-snel');
      }, 1000);
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
            {/* Urgency element */}
            <div className="mb-4">
              <div className="flex items-center px-4 py-2 rounded-lg bg-orange-500/20 text-orange-100 animate-pulse">
                <Timer className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="font-medium">Direct duidelijkheid: Wij maken de offerte direct ter plekke bij u thuis</span>
              </div>
            </div>
            
            <div className="h-[42px]">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-100">
                ⚡ Bespaar tot 60% op verwarmingskosten
              </span>
            </div>
            {/* Headline Text Carousel */}
            <TextCarousel />
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-[45ch]">
              Voorkom hoge terugleverkosten van uw zonnepanelen door slim te verwarmen met een airco. 
              Efficiënt verwarmen én koelen met één systeem.
            </p>

            {/* Direct reviews display - not lazy loaded for better visibility */}
            <div className="mt-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-white font-bold">4.9/5</span>
                  <span className="ml-2 text-gray-200">uit 231 beoordelingen</span>
                </div>
                <p className="text-white italic text-sm">"Fantastische service en binnen 2 dagen geïnstalleerd. De airco werkt perfect en we besparen enorm op onze energiekosten!" - Peter uit Maastricht</p>
              </div>
            </div>

            {/* Enhanced CTA section with dual buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0462021430"
                onClick={() => trackInteraction('hero', 'click', 'call_button')}
                className="group inline-flex flex-col items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center">
                  <Phone className="h-5 w-5 mr-3 animate-pulse" />
                  <span className="text-lg sm:text-xl font-bold">Gratis Advies aan Huis</span>
                </div>
                <span className="relative z-10 text-sm mt-1">Bel direct: 046 202 1430</span>
              </a>
              
              <a
                href="/products"
                onClick={() => trackInteraction('hero', 'click', 'products_button')} 
                className="inline-flex items-center justify-center px-8 sm:px-10 py-5 sm:py-6 border-2 border-blue-400 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                <span className="mr-2">Bekijk Producten</span>
                <ArrowRight className="h-5 w-5" />
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
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            {/* Corner ribbon - positioned lower */}
            <div className="absolute top-6 -right-12 w-40 bg-orange-500 text-white text-center transform rotate-45 py-1 z-10 shadow-md">
              <span className="text-sm font-medium">Binnen 24u reactie</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">
              Ontvang <span className="text-orange-400">Gratis</span> Een Offerte Op Maat
            </h2>
            <p className="text-gray-200 mb-6">Én een persoonlijk besparingsadvies van onze experts</p>
            
            {/* Trust badges above form */}
            <div className="flex justify-between items-center mb-6 px-2 py-1 bg-white/5 rounded-lg">
              <div className="flex items-center text-xs text-white">
                <ShieldCheck className="h-4 w-4 mr-1 text-green-400" />
                <span>Veilig & Vertrouwd</span>
              </div>
              <div className="flex items-center text-xs text-white">
                <Clock className="h-4 w-4 mr-1 text-green-400" />
                <span>Snelle Respons</span>
              </div>
              <div className="flex items-center text-xs text-white">
                <Shield className="h-4 w-4 mr-1 text-green-400" />
                <span>Privacy Gewaarborgd</span>
              </div>
            </div>
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
                  className="mt-1 block w-full rounded-md bg-white/10 border-gray-300 text-white placeholder-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500 min-h-[120px]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => !isSubmitting && trackInteraction('hero_form', 'submit', 'form_button')}
                className="w-full h-14 flex justify-center items-center px-4 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
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
                  <>
                    <Send className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="font-bold">Vraag Nu Vrijblijvend Offerte Aan</span>
                  </>
                )}
              </button>
              
              {/* Form incentives and reassurance */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-300">
                  ✓ Direct <span className="text-orange-300 font-medium">persoonlijk advies en offerte</span> bij u thuis
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Wij nemen binnen 24 uur contact met u op. Geen verplichtingen.
                </p>
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
