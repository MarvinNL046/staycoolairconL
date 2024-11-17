// Google Analytics configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
export const GTM_ID = import.meta.env.VITE_GTM_ID;
export const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);

    // Google Ads
    gtag('config', GOOGLE_ADS_ID);
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