import { useEffect } from 'react';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

// Helper to send metrics to Google Analytics
const sendToGoogleAnalytics = ({ name, delta, value, id }: { name: string, delta: number, value: number, id: string }) => {
  // Assumes the global `gtag()` function exists
  window.gtag?.('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    non_interaction: true,
    metric_id: id,
    metric_value: value,
  });
};

export default function WebVitalsReporter() {
  useEffect(() => {
    // Report Core Web Vitals
    onCLS(sendToGoogleAnalytics);
    onFID(sendToGoogleAnalytics);
    onLCP(sendToGoogleAnalytics);
    onFCP(sendToGoogleAnalytics);
    onTTFB(sendToGoogleAnalytics);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      onCLS(console.log);
      onFID(console.log);
      onLCP(console.log);
      onFCP(console.log);
      onTTFB(console.log);
    }
  }, []);

  // This component doesn't render anything
  return null;
}
