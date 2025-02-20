import { GtagEventParams, GtagFunction } from '../types/gtag';

declare global {
  interface Window {
    trustedTypes?: {
      createPolicy: (
        name: string,
        rules: {
          createHTML?: (input: string) => string;
          createScript?: (input: string) => string;
          createScriptURL?: (input: string) => string;
        },
        options?: { force?: boolean }
      ) => any;
    };
  }
}

export function initAnalytics() {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  const gtag: GtagFunction = function(...args: any[]) {
    window.dataLayer.push(arguments);
  } as GtagFunction;
  window.gtag = gtag;

  try {
    // Create a more permissive TrustedTypes policy for analytics
    if (window.trustedTypes) {
      window.trustedTypes.createPolicy('analytics-policy', {
        createHTML: (string) => string,
        createScript: (string) => string,
        createScriptURL: (url) => {
          const allowedDomains = [
            'www.googletagmanager.com',
            'www.google-analytics.com',
            'analytics.google.com'
          ];
          const urlObj = new URL(url);
          if (allowedDomains.some(domain => urlObj.hostname.endsWith(domain))) {
            return url;
          }
          throw new Error('URL not allowed by analytics-policy: ' + url);
        }
      }, { force: true });
    }

    // Load GTM
    const gtmId = import.meta.env.VITE_GTM_ID;
    const gtmUrl = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = window.trustedTypes?.createPolicy('analytics-policy', {
      createScriptURL: (url) => url
    })?.createScriptURL(gtmUrl) || gtmUrl;
    document.head.appendChild(gtmScript);

    // Load GA
    const gaId = import.meta.env.VITE_GA_TRACKING_ID;
    const gaUrl = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = window.trustedTypes?.createPolicy('analytics-policy', {
      createScriptURL: (url) => url
    })?.createScriptURL(gaUrl) || gaUrl;
    document.head.appendChild(gaScript);

    gaScript.onload = function() {
      const commonParams: GtagEventParams = {
        event_category: 'initialization',
        event_label: 'GA4',
        non_interaction: true,
        metric_id: 'init',
        metric_value: 1
      };

      window.gtag('js', new Date());
      
      // Initialize GA4
      window.gtag('config', gaId, {
        ...commonParams,
        send_to: gaId
      });

      // Initialize Google Ads
      window.gtag('config', import.meta.env.VITE_GOOGLE_ADS_ID, {
        ...commonParams,
        event_label: 'Ads',
        send_to: import.meta.env.VITE_GOOGLE_ADS_ID
      });
    };
  } catch (error) {
    console.error('Failed to initialize analytics:', error);
  }
}
