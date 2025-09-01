import { GA_TRACKING_ID, GA_TRACKING_ID_SECONDARY } from '../config/analytics';

// Google Analytics event tracking with error handling
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag && typeof (window as any).gtag === 'function') {
      const eventParams = {
        ...params,
        send_to: [GA_TRACKING_ID, GA_TRACKING_ID_SECONDARY]
      };
      console.log('Tracking event:', eventName, eventParams);
      (window as any).gtag('event', eventName, eventParams);
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
    // Don't throw - analytics should never break the app
  }
};

// Google Ads conversion tracking with error handling
export const trackConversion = (value?: number) => {
  try {
    if (typeof window !== 'undefined' && (window as any).gtag && typeof (window as any).gtag === 'function') {
      // Track with first conversion ID
      const conversionParams1 = {
        'send_to': 'AW-10789737434/E-FmCJ743ocYENqn-Zgo',
        'value': value || 1650.0,
        'currency': 'EUR'
      };
      console.log('Tracking conversion (ID 1):', conversionParams1);
      (window as any).gtag('event', 'conversion', conversionParams1);
      
      // Track with second conversion ID
      const conversionParams2 = {
        'send_to': 'AW-10789737434/HcGCCP3ez6AaENqn-Zgo',
        'value': value || 1650.0,
        'currency': 'EUR'
      };
      console.log('Tracking conversion (ID 2):', conversionParams2);
      (window as any).gtag('event', 'conversion', conversionParams2);
    }
  } catch (error) {
    console.warn('Conversion tracking error:', error);
  }
};

// Track page views
export const trackPageView = (path: string) => {
  trackEvent('page_view', {
    page_path: path,
    page_title: document.title
  });
};

// Track user interactions
export const trackInteraction = (category: string, action: string, label?: string, value?: number) => {
  trackEvent('user_interaction', {
    event_category: category,
    event_action: action,
    event_label: label,
    value: value
  });
};

// Track form submissions with error handling
export const trackFormSubmission = (formName: string, success: boolean) => {
  try {
    console.log('Form submission:', { formName, success });
    
    // Track form submission event
    trackEvent('form_submission', {
      form_name: formName,
      success: success
    });

    // If form submission was successful, track as conversion
    if (success && formName === 'contact_form') {
      console.log('Tracking contact form conversion');
      if (typeof window !== 'undefined' && (window as any).gtag && typeof (window as any).gtag === 'function') {
        // Track with first conversion ID
        const conversionParams1 = {
          'send_to': 'AW-10789737434/E-FmCJ743ocYENqn-Zgo',
          'value': 1650.0,
          'currency': 'EUR'
        };
        console.log('Conversion params (ID 1):', conversionParams1);
        (window as any).gtag('event', 'conversion', conversionParams1);
        
        // Track with second conversion ID
        const conversionParams2 = {
          'send_to': 'AW-10789737434/HcGCCP3ez6AaENqn-Zgo',
          'value': 1650.0,
          'currency': 'EUR'
        };
        console.log('Conversion params (ID 2):', conversionParams2);
        (window as any).gtag('event', 'conversion', conversionParams2);
      }
    }
  } catch (error) {
    console.warn('Form submission tracking error:', error);
  }
};

// Track errors
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage
  });
};

// Track product interactions
export const trackProductInteraction = (
  action: 'view' | 'click' | 'add_to_cart' | 'purchase',
  productData: {
    id: string;
    name: string;
    category?: string;
    price?: number;
  }
) => {
  trackEvent(`product_${action}`, {
    ...productData,
    currency: 'EUR'
  });
};

// Track search
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
};

// Track performance metrics
export const trackPerformance = (metric: {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
}) => {
  trackEvent('performance', {
    metric_name: metric.name,
    metric_value: metric.value,
    metric_rating: metric.rating
  });
};
