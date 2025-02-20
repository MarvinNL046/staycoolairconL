import { GA_TRACKING_ID, GA_TRACKING_ID_SECONDARY } from '../config/analytics';

// Google Analytics event tracking
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const eventParams = {
      ...params,
      send_to: [GA_TRACKING_ID, GA_TRACKING_ID_SECONDARY]
    };
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Google Ads conversion tracking
export const trackConversion = (value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-10789737434/HcGCCP3ez6AaENqn-Zgo',
      'value': value || 1.0,
      'currency': 'EUR'
    });
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

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  // Track form submission event
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });

  // If form submission was successful, track as conversion
  if (success && formName === 'contact_form') {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-10789737434/HcGCCP3ez6AaENqn-Zgo',
        'value': 1.0,
        'currency': 'EUR'
      });
    }
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
