// Google Analytics configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
export const GA_TRACKING_ID_SECONDARY = import.meta.env.VITE_GA_TRACKING_ID_SECONDARY;
export const GTM_ID = import.meta.env.VITE_GTM_ID;
export const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Load Google Analytics Script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());

    // Configure primary GA4 property
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
      send_page_view: true
    });

    // Configure secondary GA4 property
    gtag('config', GA_TRACKING_ID_SECONDARY, {
      page_path: window.location.pathname,
      send_page_view: true
    });

    // Google Ads
    gtag('config', GOOGLE_ADS_ID);

    // Track route changes
    if ('navigation' in window) {
      (window.navigation as any).addEventListener('navigate', (event: any) => {
        if (event.destination.url !== window.location.href) {
          gtag('event', 'page_view', {
            page_path: new URL(event.destination.url).pathname,
            send_to: [GA_TRACKING_ID, GA_TRACKING_ID_SECONDARY]
          });
        }
      });
    }
  }
};

// Initialize Google Tag Manager
export const initGTM = () => {
  if (typeof window !== 'undefined') {
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      const f=d.getElementsByTagName(s)[0],
        j=d.createElement(s) as HTMLScriptElement,
        dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode?.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);
  }
};
