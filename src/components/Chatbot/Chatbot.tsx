import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send, Loader2, MessageSquare, ArrowLeft, RotateCcw } from 'lucide-react';
import { useChatbot } from './useChatbot';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { QuickReplies } from './QuickReplies';
import { ContactForm } from './ContactForm';
import { ProgressIndicator } from './ProgressIndicator';
import { isBusinessOpen, getNextOpeningTime, getBusinessHoursText } from '../../utils/businessHours';
import type { ChatbotMessage } from './types';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    currentStep,
    currentFlow,
    contactData,
    sendMessage,
    selectQuickReply,
    submitContactForm,
    isLoading,
    isTyping,
    quickReplies,
    resetChat,
    goBack,
    canGoBack
  } = useChatbot();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleQuickReply = (value: string) => {
    selectQuickReply(value);
  };

  // Calculate progress
  const getProgress = () => {
    if (currentFlow === 'sales') {
      const steps = ['welcome', 'property_type', 'business_type', 'room_count', 'budget', 'brand_preference', 'timeline', 'additional_interests', 'choose_contact_method', 'contact'];
      const currentIndex = steps.indexOf(currentStep as string);
      return {
        current: currentIndex >= 0 ? currentIndex : 0,
        total: 9 // Total steps excluding welcome
      };
    } else if (currentFlow === 'support') {
      const steps = ['problem_type', 'contact_technician', 'support_form'];
      const currentIndex = steps.indexOf(currentStep as string);
      return {
        current: currentIndex >= 0 ? currentIndex + 1 : 1,
        total: 3
      };
    }
    return { current: 0, total: 1 };
  };

  const progress = getProgress();

  return (
    <>
      {/* Floating Action Button */}
      <m.button
        className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-40 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 20 : 0 }}
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        <MessageCircle size={24} />
      </m.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 md:bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[380px] max-w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-12rem)] max-h-[600px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">StayCool Assistent</h3>
                  <p className="text-xs text-blue-100">
                    {isBusinessOpen() ? 'Online' : `Offline - We zijn weer open ${getNextOpeningTime()}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {canGoBack && (
                  <button
                    onClick={goBack}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                    title="Ga terug"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <button
                  onClick={resetChat}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  title="Start opnieuw"
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  title="Sluit chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            {currentFlow && currentStep !== 'welcome' && currentStep !== 'confirmation' && (
              <ProgressIndicator 
                currentStep={progress.current} 
                totalSteps={progress.total}
                flow={currentFlow}
              />
            )}

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-md">
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Contact Form */}
            {(currentStep === 'contact' || currentStep === 'support_form') && (
              <ContactForm
                onSubmit={submitContactForm}
                isLoading={isLoading}
                flow={currentFlow as 'sales' | 'support'}
                initialData={contactData}
              />
            )}

            {/* WhatsApp button for support flow */}
            {currentFlow === 'support' && currentStep !== 'support_form' && (
              <div className="px-4 pb-2 border-t border-gray-200">
                <a 
                  href="https://wa.me/31636481054?text=Hoi,%20ik%20heb%20een%20storing%20met%20mijn%20airco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  <MessageSquare size={20} />
                  <span className="font-medium">Direct WhatsApp contact</span>
                </a>
              </div>
            )}

            {/* Quick Replies */}
            {quickReplies.length > 0 && !isLoading && currentStep !== 'contact' && currentStep !== 'support_form' && (
              <QuickReplies 
                replies={quickReplies} 
                onSelect={handleQuickReply}
              />
            )}

            {/* Input Area */}
            {currentStep !== 'contact' && currentStep !== 'support_form' && (
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSend}
                disabled={isLoading || quickReplies.length > 0}
                placeholder={quickReplies.length > 0 ? "Kies een optie hierboven" : "Type je bericht..."}
              />
            )}
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};