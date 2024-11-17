import emailjs from '@emailjs/browser';
import type { EmailData } from '../types/email';

interface EmailJSError extends Error {
  status?: number;
  text?: string;
}

// Initialize EmailJS with environment variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  BOOKING_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID
};

// Function to ensure EmailJS is initialized
const ensureInitialized = () => {
  try {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY
    });
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    throw error;
  }
};

// Initialize immediately if document is ready
if (document.readyState === 'complete') {
  ensureInitialized();
} else {
  // Otherwise wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', ensureInitialized);
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Ensure initialization before sending
    ensureInitialized();

    // Validate required configuration
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      throw new Error('Missing required EmailJS configuration');
    }

    // Log configuration (without sensitive data)
    console.log('Attempting to send email with:', {
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      hasPublicKey: !!EMAILJS_CONFIG.PUBLIC_KEY
    });

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      city: data.city,
      message: data.message,
      to_name: data.to_name || 'StayCool Airco',
      reply_to: data.email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );
    
    if (response.status !== 200) {
      console.error('Email send failed with response:', response);
      throw new Error(`Email send failed with status: ${response.status}`);
    }

    console.log('Email sent successfully:', response);
    return;
  } catch (error) {
    const emailJSError = error as EmailJSError;
    console.error('Email send failed with error:', {
      message: emailJSError.message,
      status: emailJSError.status,
      text: emailJSError.text
    });
    throw emailJSError;
  }
};

export const sendBookingConfirmation = async (data: EmailData): Promise<void> => {
  try {
    // Ensure initialization before sending
    ensureInitialized();

    // Validate required configuration
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.BOOKING_TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      throw new Error('Missing required EmailJS configuration for booking confirmation');
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      city: data.city,
      message: data.message,
      to_name: data.to_name || 'StayCool Airco',
      reply_to: data.email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      console.error('Booking confirmation failed with response:', response);
      throw new Error(`Booking confirmation failed with status: ${response.status}`);
    }

    console.log('Booking confirmation sent successfully:', response);
    return;
  } catch (error) {
    const emailJSError = error as EmailJSError;
    console.error('Booking confirmation failed with error:', {
      message: emailJSError.message,
      status: emailJSError.status,
      text: emailJSError.text
    });
    throw emailJSError;
  }
};
