// Facebook Conversions API implementation
// Server-side tracking to bypass ad blockers and improve conversion accuracy

interface ConversionEvent {
  event_name: string;
  event_time: number;
  user_data: {
    email?: string;
    phone?: string;
    fn?: string; // first name
    ln?: string; // last name
    ct?: string; // city
    country?: string;
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string; // Facebook click ID from cookie
    fbp?: string; // Facebook browser ID from cookie
  };
  custom_data?: {
    currency?: string;
    value?: number;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    contents?: Array<{
      id: string;
      quantity: number;
    }>;
    num_items?: number;
    status?: string;
  };
  action_source: 'website' | 'app' | 'email' | 'phone_call' | 'chat' | 'physical_store';
  event_source_url?: string;
}

// Hash user data according to Facebook requirements
const hashData = async (data: string): Promise<string> => {
  if (!data) return '';
  
  // Normalize data (lowercase, trim, remove special characters)
  const normalized = data.toLowerCase().trim();
  
  // Use Web Crypto API for SHA-256 hashing
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
};

// Get Facebook cookies for better matching
const getFacebookCookies = () => {
  const cookies = document.cookie.split(';');
  let fbc = '';
  let fbp = '';
  
  cookies.forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbc') fbc = value;
    if (name === '_fbp') fbp = value;
  });
  
  return { fbc, fbp };
};

// Format phone number to E.164 format
const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  
  // Assume Netherlands if no country code
  if (digits.length === 9 && digits.startsWith('6')) {
    return '31' + digits; // Netherlands mobile
  } else if (digits.length === 10 && digits.startsWith('0')) {
    return '31' + digits.substring(1); // Remove leading 0
  }
  
  return digits;
};

/**
 * Send conversion event to your server endpoint
 * The server will forward this to Facebook Conversions API
 */
export const sendConversionEvent = async (
  eventName: string,
  userData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
  },
  customData?: {
    value?: number;
    currency?: string;
    contentName?: string;
    contentCategory?: string;
  }
) => {
  console.log('Sending conversion event:', eventName, userData, customData);
  
  try {
    const { fbc, fbp } = getFacebookCookies();
    
    // Hash user data
    const hashedUserData = {
      em: userData.email ? await hashData(userData.email) : undefined,
      ph: userData.phone ? await hashData(formatPhoneNumber(userData.phone)) : undefined,
      fn: userData.firstName ? await hashData(userData.firstName) : undefined,
      ln: userData.lastName ? await hashData(userData.lastName) : undefined,
      ct: userData.city ? await hashData(userData.city) : undefined,
      country: await hashData('nl'), // Netherlands
      client_ip_address: '', // Will be set by server
      client_user_agent: navigator.userAgent,
      fbc,
      fbp,
    };
    
    const event: ConversionEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      user_data: hashedUserData,
      custom_data: customData,
      action_source: 'website',
      event_source_url: window.location.href,
    };
    
    // Send to Netlify Function endpoint
    console.log('Sending to Netlify function:', event);
    
    const response = await fetch('/.netlify/functions/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to send conversion event:', response.status, errorText);
    } else {
      const result = await response.json();
      console.log('Conversion API response:', result);
    }
  } catch (error) {
    console.error('Error sending conversion event:', error);
  }
};

/**
 * Track form submission with Conversions API
 */
export const trackAPIFormSubmission = async (
  formName: string,
  formData: {
    name: string;
    email: string;
    phone: string;
    city: string;
    message?: string;
  },
  value: number = 1650
) => {
  // Split name into first and last
  const nameParts = formData.name.trim().split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');
  
  await sendConversionEvent(
    'Lead',
    {
      email: formData.email,
      phone: formData.phone,
      firstName,
      lastName,
      city: formData.city,
    },
    {
      value,
      currency: 'EUR',
      contentName: formName,
      contentCategory: 'airco_installation',
    }
  );
};

/**
 * Track page view with Conversions API
 */
export const trackAPIPageView = async (pageName?: string) => {
  await sendConversionEvent(
    'PageView',
    {}, // No user data for page views
    {
      contentName: pageName || document.title,
    }
  );
};

/**
 * Track product view with Conversions API
 */
export const trackAPIViewContent = async (
  productName: string,
  productCategory: string,
  value?: number
) => {
  await sendConversionEvent(
    'ViewContent',
    {},
    {
      contentName: productName,
      contentCategory: productCategory,
      value,
      currency: 'EUR',
    }
  );
};