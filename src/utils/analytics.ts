// Google Analytics event tracking
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

// Google Ads conversion tracking
export const trackConversion = (conversionId: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `AW-10789737434/${conversionId}`,
      'value': value,
      'currency': 'EUR',
      'transaction_id': ''
    });
  }
};