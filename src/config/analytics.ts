// Google Analytics configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
export const GA_TRACKING_ID_SECONDARY = import.meta.env.VITE_GA_TRACKING_ID_SECONDARY;
export const GTM_ID = import.meta.env.VITE_GTM_ID;
export const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;

// Initialize Google Analytics and Google Ads
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Load Google tag (gtag.js)
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    function gtag(...args: any[]) {
      w.dataLayer.push(args);
    }
    gtag('js', new Date());

    // Configure GA4 properties
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
      send_page_view: true
    });
    gtag('config', GA_TRACKING_ID_SECONDARY, {
      page_path: window.location.pathname,
      send_page_view: true
    });

    // Configure Google Ads
    gtag('config', GOOGLE_ADS_ID);

    // Add conversion tracking events for both conversion IDs
    const conversionScript = document.createElement('script');
    conversionScript.innerHTML = `
      // Track with first conversion ID
      gtag('event', 'conversion', {
        'send_to': 'AW-10789737434/E-FmCJ743ocYENqn-Zgo',
        'value': 1650.0,
        'currency': 'EUR'
      });
      
      // Track with second conversion ID
      gtag('event', 'conversion', {
        'send_to': 'AW-10789737434/HcGCCP3ez6AaENqn-Zgo',
        'value': 1650.0,
        'currency': 'EUR'
      });
    `;
    document.head.appendChild(conversionScript);

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
    })((window as any),document,'script','dataLayer',GTM_ID);
  }
};
