// Facebook Pixel tracking functions

// Define the fbq function type
declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Track a standard event to Facebook Pixel
 * @param eventName The name of the event to track
 * @param params Optional parameters to include with the event
 */
export const trackPixelEvent = (eventName: string, params?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
      console.log('Tracking Facebook Pixel event:', eventName, params);
      window.fbq('track', eventName, params);
    }
  } catch (error) {
    console.warn('Facebook Pixel tracking error:', error);
    // Don't throw - tracking should never break the app
  }
};

/**
 * Track a custom event to Facebook Pixel
 * @param eventName The name of the custom event to track
 * @param params Optional parameters to include with the event
 */
export const trackPixelCustomEvent = (eventName: string, params?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
      console.log('Tracking Facebook Pixel custom event:', eventName, params);
      window.fbq('trackCustom', eventName, params);
    }
  } catch (error) {
    console.warn('Facebook Pixel custom event tracking error:', error);
  }
};

/**
 * Track a page view event to Facebook Pixel
 */
export const trackPixelPageView = () => {
  try {
    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
      console.log('Tracking Facebook Pixel page view');
      window.fbq('track', 'PageView');
    }
  } catch (error) {
    console.warn('Facebook Pixel page view tracking error:', error);
  }
};

/**
 * Track a form submission event to Facebook Pixel
 * @param formName The name of the form that was submitted
 * @param success Whether the submission was successful
 * @param value Optional value of the conversion
 */
export const trackPixelFormSubmission = (formName: string, success: boolean, value?: number, eventId?: string) => {
  try {
    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
      if (success) {
        console.log('Tracking Facebook Pixel form submission:', formName);
        
        // Generate event ID if not provided (for deduplication with Conversions API)
        const pixelEventId = eventId || `Lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        // Track Lead event
        window.fbq('track', 'Lead', {
          content_name: formName,
          value: value || 1650.0,
          currency: 'EUR',
          eventID: pixelEventId // This is for deduplication with server events
        });
        
        // Also track a custom event for more detailed tracking
        window.fbq('trackCustom', 'FormSubmission', {
          form_name: formName,
          success: success,
          value: value || 1650.0,
          currency: 'EUR',
          eventID: pixelEventId
        });
        
        // Return the event ID for Conversions API to use
        return pixelEventId;
      }
    }
  } catch (error) {
    console.warn('Facebook Pixel form submission tracking error:', error);
    return undefined;
  }
};

/**
 * Track a purchase event to Facebook Pixel
 * @param value The value of the purchase
 * @param currency The currency of the purchase
 * @param contentIds Optional array of product IDs
 * @param contentName Optional name of the product
 */
export const trackPixelPurchase = (
  value: number,
  currency: string = 'EUR',
  contentIds?: string[],
  contentName?: string
) => {
  try {
    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
      console.log('Tracking Facebook Pixel purchase:', { value, currency, contentIds, contentName });
      window.fbq('track', 'Purchase', {
        value,
        currency,
        content_ids: contentIds,
        content_name: contentName
      });
    }
  } catch (error) {
    console.warn('Facebook Pixel purchase tracking error:', error);
  }
};

/**
 * Initialize Facebook Pixel with the API token
 * This is not typically needed as the pixel is initialized in the HTML,
 * but included here for completeness
 * @param pixelId The Facebook Pixel ID
 */
export const initFacebookPixel = (pixelId: string = '179700213744131') => {
  try {
    if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
      console.log('Initializing Facebook Pixel with ID:', pixelId);
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  } catch (error) {
    console.warn('Facebook Pixel initialization error:', error);
  }
};
