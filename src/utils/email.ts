import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  to_name?: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    await emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    await emailjs.send(
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
  } catch (error) {
    console.error('Email send failed:', error);
    throw new Error('Failed to send email');
  }
};

export const sendBookingConfirmation = async (data: EmailData): Promise<void> => {
  try {
    await emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    await emailjs.send(
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
  } catch (error) {
    console.error('Booking confirmation failed:', error);
    throw new Error('Failed to send booking confirmation');
  }
};