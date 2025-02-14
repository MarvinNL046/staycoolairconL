import { useEffect } from 'react';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';
import { trackPerformance } from '../utils/analytics';

// Helper to determine performance rating
const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  switch (name) {
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
    default:
      return 'needs-improvement';
  }
};

// Helper to send metrics to analytics
const sendToAnalytics = ({ name, value, delta }: { name: string, value: number, delta: number }) => {
  const rating = getRating(name, value);
  trackPerformance({
    name,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    rating
  });
};

export default function WebVitalsReporter() {
  useEffect(() => {
    // Report Core Web Vitals
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      const logMetric = (metric: any) => {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: getRating(metric.name, metric.value)
        });
      };
      
      onCLS(logMetric);
      onFID(logMetric);
      onLCP(logMetric);
      onFCP(logMetric);
      onTTFB(logMetric);
    }
  }, []);

  // This component doesn't render anything
  return null;
}
