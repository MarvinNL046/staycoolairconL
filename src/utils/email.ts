import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  BOOKING_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID
};

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  to_name?: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message,
        to_name: data.to_name || 'StayCool Airco',
        reply_to: data.email
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};

export const sendBookingConfirmation = async (data: EmailData): Promise<void> => {
  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message,
        to_name: data.to_name || 'StayCool Airco',
        reply_to: data.email
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to send booking confirmation');
    }
  } catch (error) {
    console.error('Booking confirmation failed:', error);
    throw error;
  }
};