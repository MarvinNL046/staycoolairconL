// App recovery utilities for handling loading failures

export class AppRecovery {
  private static retryCount = 0;
  private static maxRetries = 3;
  private static isRecovering = false;

  static initializeRecovery() {
    // Listen for unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // Check if it's a chunk loading error
      if (event.reason?.message?.includes('Loading chunk') || 
          event.reason?.message?.includes('Failed to fetch dynamically imported module')) {
        event.preventDefault();
        this.handleLoadingError();
      }
    });

    // Listen for general errors
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
      
      // Check for chunk loading errors
      if (event.message?.includes('Loading chunk') || 
          event.message?.includes('Failed to fetch dynamically imported module')) {
        event.preventDefault();
        this.handleLoadingError();
      }
    });

    // Check if app failed to start after timeout
    setTimeout(() => {
      const root = document.getElementById('root');
      if (root && root.children.length === 0) {
        console.warn('App failed to render, attempting recovery');
        this.handleLoadingError();
      }
    }, 10000); // 10 second timeout
  }

  static async handleLoadingError() {
    if (this.isRecovering) return;
    
    this.isRecovering = true;
    this.retryCount++;

    console.log(`Recovery attempt ${this.retryCount}/${this.maxRetries}`);

    try {
      // Clear all caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        console.log('Cleared all caches');
      }

      // Clear sessionStorage and localStorage
      try {
        sessionStorage.clear();
        localStorage.clear();
        console.log('Cleared storage');
      } catch (e) {
        console.error('Failed to clear storage:', e);
      }

      // Unregister service workers
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(reg => reg.unregister()));
        console.log('Unregistered service workers');
      }

      // Show user-friendly message
      this.showRecoveryMessage();

      // Reload after a short delay
      setTimeout(() => {
        if (this.retryCount < this.maxRetries) {
          window.location.reload();
        } else {
          // After max retries, offer manual reload
          this.showManualRecoveryOptions();
        }
      }, 2000);

    } catch (error) {
      console.error('Recovery failed:', error);
      this.showManualRecoveryOptions();
    }
  }

  static showRecoveryMessage() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
      <div style="
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div style="text-align: center; max-width: 400px; padding: 20px;">
          <div style="
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            border: 3px solid #3b82f6;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
          
          <h2 style="
            font-size: 24px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 10px;
          ">Even geduld...</h2>
          
          <p style="
            color: #6b7280;
            margin-bottom: 20px;
            line-height: 1.5;
          ">We optimaliseren de website voor een betere ervaring.</p>
          
          <p style="
            color: #9ca3af;
            font-size: 14px;
          ">Dit duurt enkele seconden...</p>
        </div>
      </div>
      
      <style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  static showManualRecoveryOptions() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
      <div style="
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div style="text-align: center; max-width: 500px; padding: 20px;">
          <svg style="
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            color: #f59e0b;
          " fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          
          <h2 style="
            font-size: 24px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 10px;
          ">Technisch probleem</h2>
          
          <p style="
            color: #6b7280;
            margin-bottom: 30px;
            line-height: 1.5;
          ">
            Er is een tijdelijk probleem met het laden van de website. 
            Dit kan gebeuren bij de eerste keer bezoeken.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="window.location.reload(true)" style="
              padding: 12px 24px;
              background: #3b82f6;
              color: white;
              border: none;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 500;
              cursor: pointer;
              transition: background 0.2s;
            " onmouseover="this.style.background='#2563eb'" 
               onmouseout="this.style.background='#3b82f6'">
              Probeer opnieuw
            </button>
            
            <button onclick="
              if(confirm('Dit zal alle lokale data wissen. Weet u het zeker?')) {
                localStorage.clear();
                sessionStorage.clear();
                if('caches' in window) {
                  caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                  }).then(() => window.location.reload(true));
                } else {
                  window.location.reload(true);
                }
              }
            " style="
              padding: 12px 24px;
              background: #e5e7eb;
              color: #374151;
              border: none;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 500;
              cursor: pointer;
              transition: background 0.2s;
            " onmouseover="this.style.background='#d1d5db'" 
               onmouseout="this.style.background='#e5e7eb'">
              Reset en herlaad
            </button>
          </div>
          
          <p style="
            color: #9ca3af;
            font-size: 14px;
            margin-top: 20px;
          ">
            Als het probleem aanhoudt, probeer een andere browser of 
            <a href="mailto:info@staycoolairco.nl" style="color: #3b82f6;">neem contact op</a>.
          </p>
        </div>
      </div>
    `;
  }

  static resetRetryCount() {
    this.retryCount = 0;
    this.isRecovering = false;
  }
}