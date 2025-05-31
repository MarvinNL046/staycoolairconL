// Performance monitoring for INP optimization
export const measureINP = () => {
  if (!('PerformanceObserver' in window)) return;

  try {
    // Observe Event Timing API for INP metrics
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry: any) => {
        if (entry.duration > 200) {
          console.warn('Slow interaction detected:', {
            name: entry.name,
            duration: entry.duration,
            processingStart: entry.processingStart,
            processingEnd: entry.processingEnd,
            startTime: entry.startTime
          });
        }
      });
    });

    observer.observe({ 
      type: 'event', 
      buffered: true,
      durationThreshold: 16 // Monitor interactions longer than 16ms
    });
  } catch (e) {
    console.error('Failed to setup INP monitoring:', e);
  }
};

// Utility to wrap event handlers with performance tracking
export const trackInteraction = <T extends Function>(
  handler: T,
  name: string
): T => {
  return ((...args: any[]) => {
    const start = performance.now();
    
    try {
      const result = handler(...args);
      
      // If handler returns a promise, track async completion
      if (result instanceof Promise) {
        result.finally(() => {
          const duration = performance.now() - start;
          if (duration > 50) {
            console.warn(`Slow async interaction "${name}": ${duration.toFixed(2)}ms`);
          }
        });
      } else {
        const duration = performance.now() - start;
        if (duration > 50) {
          console.warn(`Slow interaction "${name}": ${duration.toFixed(2)}ms`);
        }
      }
      
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      console.error(`Error in interaction "${name}" after ${duration.toFixed(2)}ms:`, error);
      throw error;
    }
  }) as T;
};