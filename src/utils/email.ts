
// Set to true to enable debug logging
const DEBUG_MODE = true;

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


// Leadflow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_1wYS_sm_h375UmWm5TuvN7zHFLHltLHE";

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
 * Send data to Leadflow CRM
 */
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    // Split name into first and last name
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city,
        woonplaats: data.city
      }
    };

    debugLog('Sending data to Leadflow CRM:', leadflowData);

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      debugError(`Leadflow error (${response.status}):`, errorText);
      return false;
    }

    debugLog('Leadflow submission successful');
    return true;
  } catch (error) {
    debugError('Leadflow submission failed:', error);
    return false;
  }
};

/**
 * Send data to the webhook
 */

/**
 * Send email via Resend (Vercel API Route)
 */
const sendViaResend = async (data: EmailData): Promise<boolean> => {
  try {
    debugLog('Sending email via Resend API route...');

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      debugError('Resend API error:', errorData);
      return false;
    }

    debugLog('Resend submission successful');
    return true;
  } catch (error) {
    debugError('Resend submission failed:', error);
    return false;
  }
};

/**
 * Send contact form data using Resend and Leadflow CRM
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  // Try all methods in parallel
  const [resendSuccess, leadflowSuccess] = await Promise.all([
    sendViaResend(data),
    sendToLeadflow(data)
  ]);

  // Only throw an error if all methods fail
  if (!resendSuccess && !leadflowSuccess) {
    debugError('All submission methods failed (Resend, Leadflow)');
    throw new Error('Failed to send contact form data through any available method');
  }

  // Log which methods succeeded
  const successMethods = [];
  if (resendSuccess) successMethods.push('Resend');
  if (leadflowSuccess) successMethods.push('Leadflow');

  debugLog(`Contact form submitted successfully via: ${successMethods.join(', ')}`);
};
