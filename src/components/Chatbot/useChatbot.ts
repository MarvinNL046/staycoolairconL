import { useState, useCallback, useEffect } from 'react';
import { sendEmail } from '../../utils/email';
import { trackEvent } from '../../utils/analytics';
import { isBusinessOpen, getNextOpeningTime, getBusinessHoursText } from '../../utils/businessHours';
import type { 
  ChatbotMessage, 
  ChatbotState, 
  ChatbotFlow, 
  SalesStep, 
  SupportStep,
  QuickReply,
  ContactData 
} from './types';

// LocalStorage key
const CHAT_STORAGE_KEY = 'staycool_chatbot_state';

// Load state from localStorage
const loadStateFromStorage = (): ChatbotState => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert timestamp strings back to Date objects
      parsed.messages = parsed.messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
      return parsed;
    }
  } catch (error) {
    console.error('Error loading chat state:', error);
  }
  
  return {
    messages: [],
    currentFlow: null,
    currentStep: null,
    contactData: {},
    isLoading: false,
  };
};

const INITIAL_STATE: ChatbotState = loadStateFromStorage();

export const useChatbot = () => {
  const [state, setState] = useState<ChatbotState>(INITIAL_STATE);
  const [isTyping, setIsTyping] = useState(false);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving chat state:', error);
    }
  }, [state]);

  const addBotMessage = (text: string, quickReplies?: QuickReply[]) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const message: ChatbotMessage = {
        id: `bot-${Date.now()}-${Math.random()}`,
        text,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies
      };
      
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
        isLoading: false
      }));
      
      setIsTyping(false);
    }, 800); // Simulate typing delay
  };

  const addUserMessage = (text: string) => {
    const message: ChatbotMessage = {
      id: `user-${Date.now()}-${Math.random()}`,
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
      isLoading: true
    }));
  };

  const handleSalesFlow = useCallback((step: SalesStep, value?: string) => {
    switch (step) {
      case 'welcome':
        if (value === 'home') {
          setState(prev => ({ 
            ...prev, 
            currentFlow: 'sales',
            currentStep: 'property_type',
            contactData: { ...prev.contactData, customerType: 'home' }
          }));
          
          setTimeout(() => {
            addBotMessage(
              "Wat voor type woning heb je?",
              [
                { text: "🏠 Vrijstaand/2-onder-1-kap", value: "detached" },
                { text: "🏘️ Rijtjeshuis", value: "terraced" },
                { text: "🏢 Appartement", value: "apartment" }
              ]
            );
          }, 500);
        } else if (value === 'business') {
          setState(prev => ({ 
            ...prev, 
            currentFlow: 'sales',
            currentStep: 'business_type',
            contactData: { ...prev.contactData, customerType: 'business' }
          }));
          
          setTimeout(() => {
            addBotMessage(
              "Wat voor type bedrijfspand heeft u?",
              [
                { text: "🏢 Kantoor", value: "office" },
                { text: "🏪 Winkel", value: "retail" },
                { text: "🏭 Werkplaats/Magazijn", value: "warehouse" },
                { text: "🏥 Zorg/Praktijk", value: "healthcare" }
              ]
            );
          }, 500);
        }
        break;

      case 'property_type':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'room_count',
          contactData: { ...prev.contactData, propertyType: value }
        }));
        
        setTimeout(() => {
          addBotMessage(
            "Hoeveel ruimtes wil je koelen?",
            [
              { text: "1️⃣ 1 ruimte", value: "1" },
              { text: "2️⃣ 2-3 ruimtes", value: "2-3" },
              { text: "4️⃣ 4+ ruimtes", value: "4+" }
            ]
          );
        }, 500);
        break;

      case 'business_type':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'room_count',
          contactData: { ...prev.contactData, businessType: value }
        }));
        
        setTimeout(() => {
          addBotMessage(
            "Hoeveel ruimtes/verdiepingen moet geklimatiseerd worden?",
            [
              { text: "1️⃣ 1 ruimte", value: "1" },
              { text: "2️⃣ 2-5 ruimtes", value: "2-5" },
              { text: "6️⃣ 6-10 ruimtes", value: "6-10" },
              { text: "🏢 10+ ruimtes", value: "10+" }
            ]
          );
        }, 500);
        break;

      case 'room_count':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'budget',
          contactData: { ...prev.contactData, roomCount: value }
        }));
        
        const isBusinessCustomer = state.contactData.customerType === 'business';
        
        setTimeout(() => {
          if (isBusinessCustomer) {
            addBotMessage(
              "Wat is het budget voor dit project?",
              [
                { text: "💰 €5.000 - €10.000", value: "5000-10000" },
                { text: "💰 €10.000 - €25.000", value: "10000-25000" },
                { text: "💰 €25.000+", value: "25000+" },
                { text: "💰 Weet ik nog niet", value: "unknown" }
              ]
            );
          } else {
            addBotMessage(
              "Heb je al een budget in gedachten?",
              [
                { text: "💰 €1.000 - €2.500", value: "1000-2500" },
                { text: "💰 €2.500 - €5.000", value: "2500-5000" },
                { text: "💰 Weet ik nog niet", value: "unknown" }
              ]
            );
          }
        }, 500);
        break;

      case 'budget':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'brand_preference',
          contactData: { ...prev.contactData, budget: value }
        }));
        
        setTimeout(() => {
          addBotMessage(
            "Heb je al een voorkeur voor een bepaald merk?",
            [
              { text: "❄️ Daikin", value: "daikin" },
              { text: "🌀 Mitsubishi", value: "mitsubishi" },
              { text: "💨 LG", value: "lg" },
              { text: "🌊 Toshiba", value: "toshiba" },
              { text: "❓ Geen voorkeur/advies nodig", value: "no_preference" }
            ]
          );
        }, 500);
        break;

      case 'brand_preference':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'timeline',
          contactData: { ...prev.contactData, brandPreference: value }
        }));
        
        setTimeout(() => {
          addBotMessage(
            "Wanneer wil je de airco laten installeren?",
            [
              { text: "⚡ Zo snel mogelijk", value: "asap" },
              { text: "📅 Binnen 1-2 maanden", value: "1-2months" },
              { text: "🔮 Later dit jaar", value: "later" }
            ]
          );
        }, 500);
        break;

      case 'timeline':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'additional_interests',
          contactData: { ...prev.contactData, timeline: value }
        }));
        
        setTimeout(() => {
          addBotMessage(
            "Waar ben je nog meer in geïnteresseerd?",
            [
              { text: "🔥 Verwarmen met airco (warmtepomp)", value: "heating" },
              { text: "🔋 Thuisbatterij voor energieopslag", value: "battery" },
              { text: "🔥🔋 Beide opties", value: "both" },
              { text: "➡️ Alleen airco", value: "none" }
            ]
          );
        }, 500);
        break;

      case 'additional_interests':
        setState(prev => ({ 
          ...prev, 
          currentStep: 'choose_contact_method',
          contactData: { ...prev.contactData, additionalInterests: value }
        }));
        
        setTimeout(() => {
          const message = isBusinessOpen() 
            ? "Top! Op basis van jouw wensen kunnen we een gratis adviesgesprek inplannen. Je kunt:"
            : `Top! Op basis van jouw wensen kunnen we een gratis adviesgesprek inplannen. Let op: we zijn nu gesloten. We zijn weer bereikbaar ${getNextOpeningTime()}. Je kunt wel alvast online een afspraak inplannen!`;
          
          addBotMessage(
            message,
            [
              { text: "📅 Direct online afspraak maken", value: "online_appointment" },
              { text: "📧 Contactgegevens achterlaten", value: "contact_form" }
            ]
          );
        }, 500);
        break;

      case 'choose_contact_method':
        // This step is handled in selectQuickReply
        break;

      case 'contact':
        // Contact form will be handled separately
        break;

      case 'confirmation':
        setState(prev => ({ ...prev, currentStep: 'confirmation' }));
        addBotMessage(
          "Bedankt! 🎉 Je aanvraag is succesvol verstuurd. Een van onze adviseurs neemt binnen 24 uur contact met je op voor het inplannen van een gratis adviesgesprek aan huis.\n\nTip: Wil je niet wachten? Je kunt ook direct online een afspraak maken via afspraken.staycoolairco.nl"
        );
        
        // Track conversion
        trackEvent('chatbot_lead_submitted', {
          flow: 'sales',
          ...state.contactData
        });
        break;
    }
  }, [state.contactData]);

  const handleSupportFlow = useCallback((step: SupportStep, value?: string) => {
    switch (step) {
      case 'problem_type':
        setState(prev => ({ 
          ...prev, 
          currentStep: value as SupportStep,
          contactData: { ...prev.contactData, problemType: value }
        }));

        setTimeout(() => {
          switch (value) {
            case 'no_cooling':
              addBotMessage(
                "Laten we een paar dingen controleren:\n\n1. Is de airco ingeschakeld op koelmodus? (❄️ symbool)\n2. Zijn de filters schoon?\n3. Is de buitenunit vrij van obstakels?",
                [
                  { text: "✅ Alles gecheckt, werkt nog niet", value: "still_not_working" },
                  { text: "💡 Het werkt weer!", value: "problem_solved" }
                ]
              );
              break;
              
            case 'leaking':
              addBotMessage(
                "Een lekkage moet snel verholpen worden. Waar lekt de airco precies?",
                [
                  { text: "💧 Binnenunit lekt", value: "indoor_leak" },
                  { text: "💧 Buitenunit lekt", value: "outdoor_leak" },
                  { text: "❓ Weet ik niet zeker", value: "unknown_leak" }
                ]
              );
              break;
              
            case 'noise':
              addBotMessage(
                "Wat voor soort geluid maakt de airco?",
                [
                  { text: "🔊 Klapperen/ratelen", value: "rattling" },
                  { text: "💨 Fluiten/piepen", value: "whistling" },
                  { text: "💥 Kloppen/bonken", value: "banging" }
                ]
              );
              break;
              
            case 'not_starting':
              addBotMessage(
                "Controleer het volgende:\n\n1. Staat de stroom aan?\n2. Werkt de afstandsbediening? (batterijen?)\n3. Staat de automaat in de meterkast aan?",
                [
                  { text: "✅ Alles gecheckt, start niet", value: "still_not_starting" },
                  { text: "💡 Het werkt weer!", value: "problem_solved" }
                ]
              );
              break;
          }
        }, 500);
        break;

      case 'contact_technician':
        const contactMessage = isBusinessOpen()
          ? "Deze storing kunnen we het beste ter plekke oplossen. Je kunt:"
          : `Deze storing kunnen we het beste ter plekke oplossen. Let op: we zijn nu gesloten. We zijn weer bereikbaar ${getNextOpeningTime()}. Voor spoedeisende storingen kun je WhatsApp gebruiken.`;
        
        addBotMessage(
          contactMessage,
          [
            { text: "📞 Direct bellen: 046-202-1430", value: "call" },
            { text: "💬 WhatsApp: 06-36481054", value: "whatsapp" },
            { text: "📧 Storing melden via formulier", value: "form" }
          ]
        );
        break;

      case 'support_form':
        setState(prev => ({ ...prev, currentStep: 'support_form' }));
        addBotMessage(
          "Vul je gegevens in, dan nemen we zo snel mogelijk contact op:"
        );
        break;
    }
  }, []);

  const sendMessage = useCallback((text: string) => {
    addUserMessage(text);
    
    // Handle contact form submission
    if (state.currentStep === 'contact' || state.currentStep === 'support_form') {
      // This will be handled by a separate contact form component
      return;
    }
    
    // Default response for free text
    setTimeout(() => {
      addBotMessage(
        "Ik begrijp je vraag, maar kan je een van de opties kiezen zodat ik je beter kan helpen?",
        []
      );
    }, 500);
  }, [state.currentStep]);

  const selectQuickReply = useCallback((value: string) => {
    // Find the selected reply text
    const lastBotMessage = [...state.messages].reverse().find(m => m.sender === 'bot');
    const selectedReply = lastBotMessage?.quickReplies?.find(r => r.value === value);
    
    if (selectedReply) {
      addUserMessage(selectedReply.text);
    }

    // Track interaction
    trackEvent('chatbot_interaction', {
      step: state.currentStep,
      value: value
    });

    // Handle special actions
    if (value === 'online_appointment') {
      window.open('https://afspraken.staycoolairco.nl', '_blank');
      setTimeout(() => {
        addBotMessage(
          "Je wordt doorgestuurd naar ons online afsprakensysteem. Hier kun je direct een geschikt moment kiezen uit onze agenda. Tot snel! 🏠❄️"
        );
      }, 500);
      return;
    } else if (value === 'contact_form' && state.currentStep === 'choose_contact_method') {
      setState(prev => ({ 
        ...prev, 
        currentStep: 'contact'
      }));
      return;
    }

    // Route to appropriate flow
    if (state.currentStep === 'welcome') {
      if (value === 'support') {
        setState(prev => ({ 
          ...prev, 
          currentFlow: 'support',
          currentStep: 'problem_type'
        }));
        
        setTimeout(() => {
          addBotMessage(
            "Vervelend dat je een storing hebt! Wat is het probleem?",
            [
              { text: "❄️ Airco koelt niet", value: "no_cooling" },
              { text: "💧 Airco lekt", value: "leaking" },
              { text: "🔊 Airco maakt geluid", value: "noise" },
              { text: "❌ Airco start niet op", value: "not_starting" }
            ]
          );
        }, 500);
      } else {
        handleSalesFlow(state.currentStep as SalesStep, value);
      }
    } else if (state.currentFlow === 'sales') {
      handleSalesFlow(state.currentStep as SalesStep, value);
    } else if (state.currentFlow === 'support') {
      // Handle support flow routing
      if (state.currentStep === 'problem_type') {
        // First step in support flow - user selected problem type
        handleSupportFlow('problem_type', value);
      } else if (value === 'still_not_working' || value === 'still_not_starting' || 
          value === 'indoor_leak' || value === 'outdoor_leak' || value === 'unknown_leak' ||
          value === 'rattling' || value === 'whistling' || value === 'banging') {
        handleSupportFlow('contact_technician', value);
      } else if (value === 'problem_solved') {
        addBotMessage(
          "Fijn dat het weer werkt! 🎉 Mocht je nog vragen hebben, neem dan gerust contact op."
        );
      } else if (value === 'call') {
        window.location.href = 'tel:046-202-1430';
      } else if (value === 'whatsapp') {
        window.open('https://wa.me/31636481054', '_blank');
      } else if (value === 'form') {
        handleSupportFlow('support_form', value);
      } else {
        handleSupportFlow(state.currentStep as SupportStep, value);
      }
    }
  }, [state, handleSalesFlow, handleSupportFlow]);

  const submitContactForm = useCallback(async (formData: ContactData) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Prepare email content
      const isBusinessCustomer = state.contactData.customerType === 'business';
      
      let salesMessage = '';
      if (state.currentFlow === 'sales') {
        const interestText = {
          'heating': 'Warmtepomp (verwarmen)',
          'battery': 'Thuisbatterij',
          'both': 'Warmtepomp + Thuisbatterij',
          'none': 'Alleen airco'
        }[state.contactData.additionalInterests || 'none'] || 'Alleen airco';

        if (isBusinessCustomer) {
          salesMessage = `Chatbot Sales Lead - ZAKELIJK:\n\nBedrijfstype: ${state.contactData.businessType}\nRuimtes: ${state.contactData.roomCount}\nBudget: ${state.contactData.budget}\nMerkvoorkeur: ${state.contactData.brandPreference || 'Geen voorkeur'}\nTimeline: ${state.contactData.timeline}\nExtra interesse: ${interestText}\n\nContactgegevens:\nNaam: ${formData.name}\nEmail: ${formData.email}\nTelefoon: ${formData.phone}\nPostcode: ${formData.postalCode || 'Niet opgegeven'}`;
        } else {
          salesMessage = `Chatbot Sales Lead - PARTICULIER:\n\nWoningtype: ${state.contactData.propertyType}\nRuimtes: ${state.contactData.roomCount}\nBudget: ${state.contactData.budget}\nMerkvoorkeur: ${state.contactData.brandPreference || 'Geen voorkeur'}\nTimeline: ${state.contactData.timeline}\nExtra interesse: ${interestText}\n\nContactgegevens:\nNaam: ${formData.name}\nEmail: ${formData.email}\nTelefoon: ${formData.phone}\nPostcode: ${formData.postalCode || 'Niet opgegeven'}`;
        }
      }
      
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.postalCode || '',
        message: state.currentFlow === 'sales' 
          ? salesMessage
          : `Chatbot Storing:\n\nProbleem: ${state.contactData.problemType}\nBeschrijving: ${formData.problemDescription || 'Geen extra beschrijving'}\n\nContactgegevens:\nNaam: ${formData.name}\nEmail: ${formData.email}\nTelefoon: ${formData.phone}`
      };

      await sendEmail(emailData);
      
      if (state.currentFlow === 'sales') {
        handleSalesFlow('confirmation');
      } else {
        addBotMessage(
          "Je storing is gemeld! 📧 We nemen zo snel mogelijk contact met je op."
        );
      }
    } catch (error) {
      addBotMessage(
        "Er ging iets mis met het versturen. Probeer het opnieuw of bel ons direct op 046-202-1430."
      );
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, [state.currentFlow, handleSalesFlow]);

  // Initialize with welcome message
  useEffect(() => {
    if (state.messages.length === 0) {
      const welcomeMessage: ChatbotMessage = {
        id: `bot-${Date.now()}-${Math.random()}`,
        text: "Hoi! 👋 Ik ben de StayCool assistent. Ik help je graag met het vinden van de perfecte airco oplossing!",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          { text: "🏠 Airco voor thuis", value: "home" },
          { text: "🏢 Airco voor bedrijf", value: "business" },
          { text: "❄️ Ik heb een storing", value: "support" }
        ]
      };
      
      setState(prev => ({ 
        ...prev, 
        messages: [welcomeMessage],
        currentStep: 'welcome' as SalesStep 
      }));
    }
  }, []);

  // Go back to previous step
  const goBack = useCallback(() => {
    if (state.messages.length < 3) return; // Need at least 3 messages to go back
    
    // Remove last bot and user messages
    const newMessages = state.messages.slice(0, -2);
    
    // Determine the previous step based on the flow
    let previousStep = state.currentStep;
    let previousContactData = { ...state.contactData };
    
    if (state.currentFlow === 'sales') {
      const stepOrder = ['welcome', 'property_type', 'business_type', 'room_count', 'budget', 'brand_preference', 'timeline', 'additional_interests', 'contact'];
      const currentIndex = stepOrder.indexOf(state.currentStep as string);
      if (currentIndex > 0) {
        // Handle conditional steps
        if (state.currentStep === 'room_count') {
          previousStep = state.contactData.customerType === 'business' ? 'business_type' : 'property_type';
        } else {
          previousStep = stepOrder[currentIndex - 1] as SalesStep;
        }
        
        // Clear the data for the current step
        const dataFieldMap: Record<string, keyof ContactData> = {
          'property_type': 'propertyType',
          'business_type': 'businessType', 
          'room_count': 'roomCount',
          'budget': 'budget',
          'brand_preference': 'brandPreference',
          'timeline': 'timeline',
          'additional_interests': 'additionalInterests'
        };
        
        const fieldToClear = dataFieldMap[state.currentStep as string];
        if (fieldToClear) {
          delete previousContactData[fieldToClear];
        }
      }
    }
    
    setState(prev => ({
      ...prev,
      messages: newMessages,
      currentStep: previousStep,
      contactData: previousContactData
    }));
  }, [state]);

  const canGoBack = state.messages.length > 2 && state.currentStep !== 'welcome' && state.currentStep !== 'confirmation';

  // Reset chat to initial state
  const resetChat = useCallback(() => {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    setState({
      messages: [],
      currentFlow: null,
      currentStep: null,
      contactData: {},
      isLoading: false,
    });
    // Add welcome message after reset
    setTimeout(() => {
      const welcomeMessage: ChatbotMessage = {
        id: `bot-${Date.now()}-${Math.random()}`,
        text: "Hoi! 👋 Ik ben de StayCool assistent. Ik help je graag met het vinden van de perfecte airco oplossing!",
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: [
          { text: "🏠 Airco voor thuis", value: "home" },
          { text: "🏢 Airco voor bedrijf", value: "business" },
          { text: "❄️ Ik heb een storing", value: "support" }
        ]
      };
      setState(prev => ({ 
        ...prev, 
        messages: [welcomeMessage],
        currentStep: 'welcome' as SalesStep 
      }));
    }, 100);
  }, []);

  // Get current quick replies
  const quickReplies = state.messages[state.messages.length - 1]?.quickReplies || [];

  return {
    messages: state.messages,
    currentStep: state.currentStep,
    currentFlow: state.currentFlow,
    contactData: state.contactData,
    sendMessage,
    selectQuickReply,
    submitContactForm,
    isLoading: state.isLoading,
    isTyping,
    quickReplies,
    resetChat,
    goBack,
    canGoBack
  };
};