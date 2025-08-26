// Facebook Conversions API implementation
// Server-side tracking to bypass ad blockers and improve conversion accuracy

interface ConversionEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  user_data: {
    em?: string; // email (hashed)
    ph?: string; // phone (hashed)
    fn?: string; // first name (hashed)
    ln?: string; // last name (hashed)
    ct?: string; // city (hashed)
    st?: string; // state/province (hashed)
    zp?: string; // zip code (hashed)
    country?: string; // country (hashed)
    external_id?: string; // external ID (hashed)
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

// Format phone number to E.164 format with + prefix
const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digits except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // If already has +, return as is
  if (cleaned.startsWith('+')) {
    return cleaned;
  }
  
  // Remove any spaces and special characters
  const digits = cleaned.replace(/\D/g, '');
  
  // Assume Netherlands if no country code
  if (digits.length === 9 && digits.startsWith('6')) {
    return '+31' + digits; // Netherlands mobile with +
  } else if (digits.length === 10 && digits.startsWith('0')) {
    return '+31' + digits.substring(1); // Remove leading 0, add +31
  } else if (digits.startsWith('31')) {
    return '+' + digits; // Add + prefix
  }
  
  return '+31' + digits; // Default to Netherlands
};

// Generate external ID for better matching
const generateExternalId = (email: string, phone: string): string => {
  // Create a consistent user ID based on email and phone
  const combined = `${email}:${phone}`.toLowerCase();
  // Use base64 encoding and make it URL safe
  return btoa(combined).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);
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
    state?: string;
    zipCode?: string;
  },
  customData?: {
    value?: number;
    currency?: string;
    contentName?: string;
    contentCategory?: string;
  },
  providedEventId?: string
) => {
  console.log('Sending conversion event:', eventName, userData, customData);
  
  try {
    const { fbc, fbp } = getFacebookCookies();
    
    // Generate external ID for better matching
    const externalId = userData.email && userData.phone 
      ? generateExternalId(userData.email, userData.phone) 
      : undefined;
    
    // Hash user data with proper normalization
    const hashedUserData: any = {
      em: userData.email ? await hashData(userData.email.toLowerCase().trim()) : undefined,
      ph: userData.phone ? await hashData(formatPhoneNumber(userData.phone)) : undefined,
      fn: userData.firstName ? await hashData(userData.firstName.toLowerCase().trim()) : undefined,
      ln: userData.lastName ? await hashData(userData.lastName.toLowerCase().trim()) : undefined,
      ct: userData.city ? await hashData(userData.city.toLowerCase().trim()) : undefined,
      st: userData.state ? await hashData(userData.state.toLowerCase().trim()) : undefined,
      zp: userData.zipCode ? await hashData(userData.zipCode.replace(/\s/g, '')) : undefined,
      country: await hashData('nl'), // Netherlands
      external_id: externalId ? await hashData(externalId) : undefined,
      client_ip_address: '', // Will be set by server
      client_user_agent: navigator.userAgent,
      fbc,
      fbp,
    };
    
    // Remove undefined values
    Object.keys(hashedUserData).forEach(key => 
      hashedUserData[key] === undefined && delete hashedUserData[key]
    );
    
    // Use provided event ID or generate unique event ID for deduplication
    const eventId = providedEventId || `${eventName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Calculate and log Event Match Quality
    calculateEventMatchQuality(userData);
    
    const event: ConversionEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      user_data: hashedUserData,
      custom_data: customData,
      action_source: 'website',
      event_source_url: window.location.href,
    };
    
    // Log event freshness
    console.log('Event freshness: Real-time (0 seconds delay)');
    
    // Send to Netlify Function endpoint with retry logic
    console.log('Sending to Netlify function:', event);
    
    let retryCount = 0;
    const maxRetries = 3;
    let lastError: any;
    
    while (retryCount < maxRetries) {
      try {
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
          lastError = new Error(`HTTP ${response.status}: ${errorText}`);
          console.error('Failed to send conversion event:', response.status, errorText);
          
          if (response.status >= 500 && retryCount < maxRetries - 1) {
            // Server error, retry with exponential backoff
            const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            retryCount++;
            continue;
          }
          throw lastError;
        } else {
          const result = await response.json();
          console.log('Conversion API response:', result);
          console.log(`✅ Event sent successfully on attempt ${retryCount + 1}`);
          return; // Success!
        }
      } catch (error) {
        lastError = error;
        console.error(`Network error on attempt ${retryCount + 1}:`, error);
        
        if (retryCount < maxRetries - 1) {
          const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          retryCount++;
        } else {
          throw lastError;
        }
      }
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
  value: number = 1650,
  eventId?: string
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
      state: 'Limburg', // Dutch province
      // We don't have zip code in the form, but could add it for better matching
    },
    {
      value,
      currency: 'EUR',
      contentName: formName,
      contentCategory: 'airco_installation',
    },
    eventId
  );
};

/**
 * Monitor Event Match Quality score
 */
export const calculateEventMatchQuality = (userData: any): number => {
  let score = 0;
  const weights = {
    email: 2,
    phone: 2,
    firstName: 1,
    lastName: 1,
    city: 0.5,
    state: 0.5,
    external_id: 1.5,
    fbp: 0.5,
    fbc: 1,
  };
  
  Object.entries(weights).forEach(([field, weight]) => {
    if (userData[field] || userData[field.toLowerCase()]) {
      score += weight as number;
    }
  });
  
  console.log('Event Match Quality Score:', score, '(Target: 6.0+)');
  return score;
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