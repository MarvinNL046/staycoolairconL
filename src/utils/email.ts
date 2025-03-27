import emailjs from '@emailjs/browser';

// Set to true to enable debug logging
const DEBUG_MODE = false;

// Helper function for conditional logging
const debugLog = (...args: any[]) => {
  if (DEBUG_MODE) {
    console.log(...args);
  }
};

// Helper function for conditional error logging
const debugError = (...args: any[]) => {
  if (DEBUG_MODE) {
    console.error(...args);
  }
};

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Webhook configuration
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  to_name?: string;
  subject?: string;
}

/**
 * Send data to the webhook
 */
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    // Create a simplified payload for the webhook
    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message
      }
    };

    // console.log('Sending data to webhook:', webhookData);
    debugLog('Sending data to webhook:', webhookData);

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      // console.error(`Webhook error (${response.status}):`, errorText);
      debugError(`Webhook error (${response.status}):`, errorText);
      return false;
    }
    
    // console.log('Webhook submission successful');
    debugLog('Webhook submission successful');
    return true;
  } catch (error) {
    // console.error('Webhook submission failed:', error);
    debugError('Webhook submission failed:', error);
    return false;
  }
};

/**
 * Send email via EmailJS
 */
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    // Check if PUBLIC_KEY is available
    if (!EMAILJS_CONFIG.PUBLIC_KEY) {
      // console.error('EmailJS PUBLIC_KEY is missing');
      debugError('EmailJS PUBLIC_KEY is missing');
      return false;
    }
    
    // Initialize EmailJS safely
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    } catch (initError) {
      // console.error('EmailJS initialization failed:', initError);
      debugError('EmailJS initialization failed:', initError);
      return false;
    }
    
    // Check if other required config is available
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      // console.error('EmailJS SERVICE_ID or TEMPLATE_ID is missing');
      debugError('EmailJS SERVICE_ID or TEMPLATE_ID is missing');
      return false;
    }
    
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
        reply_to: data.email,
        subject: data.subject || 'Nieuwe aanvraag via website'
      }
    );

    if (response.status !== 200) {
      // console.error('EmailJS responded with non-200 status:', response);
      debugError('EmailJS responded with non-200 status:', response);
      return false;
    }
    
    // console.log('EmailJS submission successful');
    debugLog('EmailJS submission successful');
    return true;
  } catch (error) {
    // console.error('EmailJS submission failed:', error);
    debugError('EmailJS submission failed:', error);
    return false;
  }
};

/**
 * Send contact form data using both EmailJS and webhook as backup for each other
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  // Try both methods and track success
  const emailJSSuccess = await sendViaEmailJS(data);
  const webhookSuccess = await sendToWebhook(data);
  
  // Only throw an error if both methods fail
  if (!emailJSSuccess && !webhookSuccess) {
    // console.error('Both email and webhook submission failed');
    debugError('Both email and webhook submission failed');
    throw new Error('Failed to send contact form data through any available method');
  }
  
  // Log which methods succeeded
  if (emailJSSuccess && webhookSuccess) {
    // console.log('Contact form submitted successfully via both EmailJS and webhook');
    debugLog('Contact form submitted successfully via both EmailJS and webhook');
  } else if (emailJSSuccess) {
    // console.log('Contact form submitted via EmailJS only (webhook failed)');
    debugLog('Contact form submitted via EmailJS only (webhook failed)');
  } else {
    // console.log('Contact form submitted via webhook only (EmailJS failed)');
    debugLog('Contact form submitted via webhook only (EmailJS failed)');
  }
};
