// Polyfill for requestIdleCallback with fallback
export const requestIdleCallbackPolyfill = (
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number => {
  if (typeof window.requestIdleCallback === 'function') {
    return window.requestIdleCallback(callback, options);
  }
  
  // Fallback using setTimeout
  const timeout = options?.timeout || 1;
  const start = Date.now();
  
  return window.setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    } as IdleDeadline);
  }, timeout);
};

export const cancelIdleCallbackPolyfill = (handle: number): void => {
  if (typeof window.cancelIdleCallback === 'function') {
    window.cancelIdleCallback(handle);
  } else {
    window.clearTimeout(handle);
  }
};