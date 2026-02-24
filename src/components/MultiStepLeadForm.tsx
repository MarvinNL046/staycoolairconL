import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, User, Mail, Phone, Check } from 'lucide-react';
import { sendEmail } from '../utils/email';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { cn } from '../utils/cn';
import { trackFormSubmission } from '../utils/analytics';
import { trackPixelFormSubmission } from '../utils/facebook';
import { trackAPIFormSubmission } from '../utils/conversionsAPI';

interface FormData {
    intent: 'heating' | 'cooling' | 'both' | 'service';
    city: string;
    name: string;
    email: string;
    phone: string;
}

export default function MultiStepLeadForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        intent: 'heating',
        city: '',
        name: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateStep1 = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.city.trim()) newErrors.city = 'Vul uw woonplaats in';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name.trim()) newErrors.name = 'Vul uw naam in';
        if (!formData.email.trim()) newErrors.email = 'Vul uw e-mailadres in';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Ongeldig e-mailadres';
        if (!formData.phone.trim()) newErrors.phone = 'Vul uw telefoonnummer in';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (step === 1 && validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep2()) return;

        setIsSubmitting(true);
        try {
            // Format message for CRM based on intent
            const intentMap = {
                heating: 'Verwarmen met airco',
                cooling: 'Koelen met airco',
                both: 'Verwarmen & Koelen',
                service: 'Onderhoud/Service'
            };

            const emailData = {
                ...formData,
                message: `Klant is geïnteresseerd in: ${intentMap[formData.intent]}. Woonplaats: ${formData.city}`,
                subject: `Nieuwe Lead (${intentMap[formData.intent]}) - ${formData.city}`
            };

            await sendEmail(emailData);

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

            trackAPIFormSubmission('contact_form', formData, 1650, eventId).catch(error => {
                console.warn('Failed to track with Conversions API:', error);
            });

            toast.success('Bedankt! We nemen spoedig contact op.');

            // Redirect to thank you page after a short delay
            setTimeout(() => {
                window.location.href = 'https://staycoolairco.nl/tot-snel';
            }, 1500);
        } catch (error) {
            console.error(error);
            toast.error('Er ging iets mis. Probeer het opnieuw.');
            trackFormSubmission('contact_form', false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-50">
                <m.div
                    className="h-full bg-quatt-orange"
                    initial={{ width: '50%' }}
                    animate={{ width: step === 1 ? '50%' : '100%' }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <div className="mb-8 text-center relative z-10">
                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 mb-6 mx-auto">
                    <div className="flex -space-x-0.5">
                        {[1, 2, 3, 4, 5].map(i => (
                            <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 flex items-center gap-1">
                        <span className="font-black text-gray-900">4,7</span> (174 reviews)
                    </span>
                </div>

                <h3 className="text-3xl font-black text-quatt-dark mb-2 tracking-tighter">
                    {step === 1 ? 'Gratis Adviesgesprek' : 'Uw Contactgegevens'}
                </h3>
                <p className="text-gray-500 font-medium text-sm">
                    Aannemer airconditioning in Nieuwstadt
                </p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10">
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <m.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                        >
                            {/* Intent Selection */}
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Ik ben geïnteresseerd in</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, intent: 'heating' })}
                                        className={cn(
                                            "px-3 py-3 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col items-center justify-center gap-2",
                                            formData.intent === 'heating'
                                                ? "border-quatt-orange bg-orange-50 text-quatt-dark"
                                                : "border-gray-100 text-gray-500 hover:border-gray-200"
                                        )}
                                    >
                                        <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", formData.intent === 'heating' ? "border-quatt-orange bg-quatt-orange text-white" : "border-gray-300 bg-white")}>
                                            {formData.intent === 'heating' && <Check className="w-3 h-3" />}
                                        </div>
                                        <span className="font-bold text-xs">Verwarmen</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, intent: 'cooling' })}
                                        className={cn(
                                            "px-3 py-3 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col items-center justify-center gap-2",
                                            formData.intent === 'cooling'
                                                ? "border-quatt-orange bg-orange-50 text-quatt-dark"
                                                : "border-gray-100 text-gray-500 hover:border-gray-200"
                                        )}
                                    >
                                        <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", formData.intent === 'cooling' ? "border-quatt-orange bg-quatt-orange text-white" : "border-gray-300 bg-white")}>
                                            {formData.intent === 'cooling' && <Check className="w-3 h-3" />}
                                        </div>
                                        <span className="font-bold text-xs">Koelen</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, intent: 'both' })}
                                        className={cn(
                                            "px-3 py-3 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col items-center justify-center gap-2",
                                            formData.intent === 'both'
                                                ? "border-quatt-orange bg-orange-50 text-quatt-dark"
                                                : "border-gray-100 text-gray-500 hover:border-gray-200"
                                        )}
                                    >
                                        <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", formData.intent === 'both' ? "border-quatt-orange bg-quatt-orange text-white" : "border-gray-300 bg-white")}>
                                            {formData.intent === 'both' && <Check className="w-3 h-3" />}
                                        </div>
                                        <span className="font-bold text-xs">Beide</span>
                                    </button>
                                </div>
                            </div>

                            {/* City Input */}
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Uw Woonplaats</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-quatt-orange w-5 h-5" />
                                    <input
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => {
                                            setFormData({ ...formData, city: e.target.value });
                                            if (errors.city) setErrors({ ...errors, city: '' });
                                        }}
                                        placeholder="Bijv. Maastricht"
                                        className={cn(
                                            "w-full h-14 pl-12 pr-4 rounded-2xl border-2 bg-gray-50 font-bold text-quatt-dark placeholder:text-gray-400 focus:outline-none focus:border-quatt-orange focus:bg-white transition-all",
                                            errors.city ? "border-red-400 bg-red-50" : "border-transparent"
                                        )}
                                    />
                                </div>
                                {errors.city && <p className="text-red-500 text-xs font-bold ml-2">{errors.city}</p>}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="w-full h-14 bg-quatt-orange hover:bg-orange-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-quatt-orange/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                                >
                                    Volgende Stap
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />
                                        ))}
                                    </div>
                                    <p className="text-xs font-bold text-gray-400">Al 500+ aanvragen in Limburg</p>
                                </div>
                            </div>
                        </m.div>
                    ) : (
                        <m.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-5"
                        >
                            <div className="space-y-2">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Uw Naam"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={cn("w-full h-12 pl-12 pr-4 rounded-xl border-2 bg-gray-50 font-bold text-quatt-dark placeholder:text-gray-400 focus:outline-none focus:border-quatt-orange focus:bg-white transition-all", errors.name && "border-red-400")}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        placeholder="E-mailadres"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={cn("w-full h-12 pl-12 pr-4 rounded-xl border-2 bg-gray-50 font-bold text-quatt-dark placeholder:text-gray-400 focus:outline-none focus:border-quatt-orange focus:bg-white transition-all", errors.email && "border-red-400")}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        placeholder="Telefoonnummer"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={cn("w-full h-12 pl-12 pr-4 rounded-xl border-2 bg-gray-50 font-bold text-quatt-dark placeholder:text-gray-400 focus:outline-none focus:border-quatt-orange focus:bg-white transition-all", errors.phone && "border-red-400")}
                                    />
                                </div>
                            </div>

                            <div className="pt-2 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-gray-100 text-gray-400 hover:text-quatt-dark hover:border-gray-200 transition-colors"
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 h-14 bg-quatt-orange hover:bg-orange-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-quatt-orange/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                                    ) : (
                                        <>
                                            Gratis Aanvragen
                                            <CheckCircle className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>

                            <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-4">
                                100% Vrijblijvend • Privacy Gewaarborgd
                            </p>
                        </m.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}

