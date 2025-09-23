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
    clarity?: {
      (action: string, ...args: any[]): void;
      q?: any[];
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
            'analytics.google.com',
            'www.clarity.ms'
          ];
          const urlObj = new URL(url);
          if (allowedDomains.some(domain => urlObj.hostname.endsWith(domain))) {
            return url;
          }
          throw new Error('URL not allowed by analytics-policy: ' + url);
        }
      }, { force: true });
    }

    // Load GTM only if ID is available
    const gtmId = import.meta.env.VITE_GTM_ID;
    if (gtmId && gtmId !== 'your_gtm_id') {
      const gtmUrl = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = window.trustedTypes?.createPolicy('analytics-policy', {
        createScriptURL: (url) => url
      })?.createScriptURL(gtmUrl) || gtmUrl;
      document.head.appendChild(gtmScript);
    }

    // Load GA only if ID is available
    const gaId = import.meta.env.VITE_GA_TRACKING_ID;
    if (gaId && gaId !== 'your_ga_tracking_id') {
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

        // Initialize Google Ads if ID is available
        const adsId = import.meta.env.VITE_GOOGLE_ADS_ID;
        if (adsId && adsId !== 'AW-10789737434') {
          window.gtag('config', adsId, {
            ...commonParams,
            event_label: 'Ads',
            send_to: adsId
          });
        }
      };
    }

    // Initialize Microsoft Clarity
    const clarityId = "tfbd5a2vc8"; // Your Clarity project ID
    try {
      // Create Clarity function
      (function(c: any, l: any, a: string, r: string, i: string, t: any, y: any){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", clarityId);
    } catch (error) {
      console.error('Failed to initialize Microsoft Clarity:', error);
    }
  } catch (error) {
    console.error('Failed to initialize analytics:', error);
  }
}
