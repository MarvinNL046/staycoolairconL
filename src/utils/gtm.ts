// Initialize dataLayer array
declare global {
  interface Window {
    dataLayer: any[];
  }
}

window.dataLayer = window.dataLayer || [];

// Push event to dataLayer
export const pushToDataLayer = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer.push({
      event,
      ...data
    });
  }
};

// Track page view
export const trackPageView = (path: string) => {
  pushToDataLayer('virtualPageview', {
    page: path
  });
};

// Track form submission
export const trackFormSubmission = (formName: string, formData: Record<string, any>) => {
  pushToDataLayer('formSubmission', {
    formName,
    formData
  });
};

// Track user interaction
export const trackInteraction = (category: string, action: string, label?: string) => {
  pushToDataLayer('userInteraction', {
    category,
    action,
    label
  });
};