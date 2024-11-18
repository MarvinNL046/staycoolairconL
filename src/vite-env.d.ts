/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAILJS_BOOKING_TEMPLATE_ID: string
  readonly VITE_GA_TRACKING_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_GOOGLE_ADS_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}