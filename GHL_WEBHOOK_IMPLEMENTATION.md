# GoHighLevel Webhook Integration - Complete Implementation Guide

## 📋 Product Requirements Document (PRD)

### **Product Overview**
Complete implementatie van GoHighLevel webhook integratie voor lead capture op landing pages met dual-submission systeem voor maximale betrouwbaarheid.

### **Success Criteria**
- ✅ 99% form submission success rate
- ✅ Automatische fallback naar EmailJS bij webhook failure
- ✅ Real-time lead delivery naar GHL
- ✅ Error tracking en monitoring
- ✅ Mobile-responsive forms

---

## 🚀 Implementation Guide

### **Phase 1: Core Files Setup**

#### **1.1 Create Webhook Utility (`src/utils/email.ts`)**

### Webhook Data Structure
The webhook expects a POST request with JSON data in this format:
```JSON 
  "data": {
    "name": "Peter",
    "email": "peter@test.nl",
    "phone": "0612345687",
    "city": "Peterland",
    "message": "poep"
  },
  "headers": {
    "host": "services.leadconnectorhq.com",
    "cf-ray": "92703dba4993d0d5-AMS",
    "x-forwarded-for": "143.179.151.56,10.10.0.11",
    "sec-ch-ua-mobile": "?0",
    "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7",
    "accept-encoding": "gzip, br",
    "cf-ipcountry": "NL",
    "x-forwarded-proto": "https",
    "referer": "https://staycoolairco.nl/",
    "sec-fetch-dest": "empty",
    "cf-visitor": {
      "scheme": "https"
    },
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "cf-connecting-ip": "143.179.151.56",
    "origin": "https://staycoolairco.nl",
    "accept": "*/*",
    "priority": "u=1, i",
    "content-length": "106",
    "cdn-loop": "cloudflare; loops=1",
    "sec-ch-ua-platform": "\"Windows\"",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "content-type": "application/json",
    "x-envoy-external-address": "10.10.0.11",
    "x-request-id": "48e76e1c-4ad4-4e98-b57f-26c6fcd01130",
    "x-envoy-attempt-count": "1",
    "x-forwarded-client-cert": "By=spiffe://cluster.local/ns/default/sa/default-automation-workflows;Hash=03f855e06a97022aba6f61ce1d9bab311cfc44a2ed4bef9a98043de99c7a3f7e;Subject=\"\";URI=spiffe://cluster.local/ns/istio-system/sa/istio-ingressgateway-service-account",
    "x-b3-traceid": "b34fd08b5302727db97b5bbeb2b970b1",
    "x-b3-spanid": "c73bb8b2aa93bde6",
    "x-b3-parentspanid": "b97b5bbeb2b970b1",
    "x-b3-sampled": "0"
  }

```


```typescript
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// GHL Webhook Configuration
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/YOUR_TRIGGER_ID";

// Debug mode (set to false in production)
const DEBUG_MODE = false;

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  message: string;
}

// Send to GHL Webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          city: data.city || '',
          message: data.message
        }
      })
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status, response.statusText);
    }

    if (response.ok) {
      if (DEBUG_MODE) console.log('✅ Webhook submission successful');
      return true;
    } else {
      console.warn('❌ Webhook submission failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return false;
  }
};

// Send via EmailJS (fallback)
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      console.warn('EmailJS not configured');
      return false;
    }

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || '',
        city: data.city || '',
        message: data.message,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (DEBUG_MODE) {
      console.log('EmailJS result:', result.status, result.text);
    }

    if (result.status === 200) {
      if (DEBUG_MODE) console.log('✅ EmailJS submission successful');
      return true;
    } else {
      console.warn('❌ EmailJS submission failed');
      return false;
    }
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return false;
  }
};

// Main submission function with dual system
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('📧 Starting dual submission:', data);
  }

  // Execute both submissions in parallel
  const [webhookSuccess, emailJSSuccess] = await Promise.all([
    sendToWebhook(data),
    sendViaEmailJS(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - Webhook:', webhookSuccess, 'EmailJS:', emailJSSuccess);
  }

  // Success if either method succeeds
  if (webhookSuccess || emailJSSuccess) {
    const methods = [];
    if (webhookSuccess) methods.push('GHL Webhook');
    if (emailJSSuccess) methods.push('EmailJS');
    
    if (DEBUG_MODE) {
      console.log(`✅ Form submitted successfully via: ${methods.join(' + ')}`);
    }
    return;
  }

  // Both methods failed
  throw new Error('Failed to send contact form data through any available method');
};

// Analytics tracking helpers
export const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      send_to: 'G-XXXXXXXXXX' // Replace with your GA4 ID
    });
  }
};

export const trackPixelFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formType,
      status: success ? 'completed' : 'failed'
    });
  }
};
```

#### **1.2 Create Contact Form Component (`src/components/ContactForm.tsx`)**

```typescript
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { sendEmail, trackFormSubmission, trackPixelFormSubmission, EmailData } from '../utils/email';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showCityField?: boolean;
  redirectUrl?: string;
  formType?: string;
}

export default function ContactForm({ 
  title = "Contact opnemen",
  subtitle = "Vul het formulier in en wij nemen binnen 24 uur contact met u op.",
  showCityField = true,
  redirectUrl = "/bedankt",
  formType = "contact_form"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vul alle verplichte velden in.');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: showCityField ? formData.city : '',
        message: formData.message
      };

      await sendEmail(emailData);
      
      // Success
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      
      // Track success
      trackFormSubmission(formType, true);
      trackPixelFormSubmission(formType, true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });

      // Redirect after delay
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1000);

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track failure
      trackFormSubmission(formType, false);
      trackPixelFormSubmission(formType, false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Naam *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* City Field (Conditional) */}
        {showCityField && (
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Woonplaats
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Bericht *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSubmitting ? 'Verzenden...' : 'Versturen'}
        </button>
      </form>
    </div>
  );
}
```

### **Phase 2: Environment Configuration**

#### **2.1 Create Environment Variables (`.env`)**

```bash
# EmailJS Configuration (Backup system)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Facebook Pixel
VITE_FACEBOOK_PIXEL_ID=your_pixel_id
```

#### **2.2 Update Vite Configuration (`vite.config.ts`)**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser'],
          toast: ['react-hot-toast']
        }
      }
    }
  },
  define: {
    'process.env': process.env
  }
});
```

### **Phase 3: Dependencies Installation**

```bash
# Install required packages
npm install @emailjs/browser react-hot-toast

# For TypeScript projects
npm install --save-dev @types/react @types/react-dom

# Optional: For styling
npm install tailwindcss @tailwindcss/forms
```

### **Phase 4: GHL Webhook Setup**

#### **4.1 GoHighLevel Configuration**
1. Log in to your GHL account
2. Navigate to **Automations** → **Workflows**
3. Create new workflow with **Webhook** trigger
4. Copy the webhook URL (format: `https://services.leadconnectorhq.com/hooks/[ID]/webhook-trigger/[TRIGGER-ID]`)
5. Set up actions (create contact, send notifications, etc.)

#### **4.2 Webhook URL Configuration**
Replace `YOUR_WEBHOOK_ID` and `YOUR_TRIGGER_ID` in `src/utils/email.ts`:

```typescript
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";
```

### **Phase 5: Security & CORS Setup**

#### **5.1 Content Security Policy**
Add to your HTML head or server configuration:

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  connect-src 'self' https://*.leadconnectorhq.com https://*.emailjs.com;
  script-src 'self' 'unsafe-inline' https://*.googletagmanager.com;
">
```

#### **5.2 Netlify Configuration (`netlify.toml`)**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  VITE_EMAILJS_SERVICE_ID = "service_1rruujp"
  VITE_EMAILJS_TEMPLATE_ID = "template_3ovrl8t"
  VITE_EMAILJS_PUBLIC_KEY = "sjJ8kK6U9wFjY0zX9"

[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "connect-src 'self' https://*.leadconnectorhq.com https://*.emailjs.com;"
```

### **Phase 6: Testing Implementation**

#### **6.1 Create Test Page (`src/pages/ContactTest.tsx`)**

```typescript
import React from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactTest() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-md mx-auto">
        <ContactForm
          title="Test Webhook Integration"
          subtitle="Test form voor GHL webhook"
          showCityField={true}
          redirectUrl="/success"
          formType="test_form"
        />
      </div>
    </div>
  );
}
```

#### **6.2 Add Test Route**
In your routing file:

```typescript
import { lazy } from 'react';
const ContactTest = lazy(() => import('./pages/ContactTest'));

// Add route
<Route path="/contact-test" element={<ContactTest />} />
```

#### **6.3 Testing Checklist**
- [ ] Form submits successfully
- [ ] Data appears in GHL
- [ ] EmailJS backup works when webhook fails
- [ ] Success/error messages display
- [ ] Analytics events fire
- [ ] Mobile responsive design
- [ ] Loading states work

### **Phase 7: Production Deployment**

#### **7.1 Pre-deployment Checklist**
- [ ] Set `DEBUG_MODE = false` in production
- [ ] Update webhook URL to production environment
- [ ] Configure all environment variables
- [ ] Test form on staging environment
- [ ] Verify GHL workflow is active

#### **7.2 Monitoring & Analytics**
Set up monitoring voor:
- Form submission success rates
- Webhook response times
- Error rates en failure patterns
- Conversion tracking

#### **7.3 Performance Optimization**
- Lazy load form components
- Minimize bundle size
- Enable gzip compression
- Set up CDN for static assets

---

## 🔧 Troubleshooting Guide

### **Common Issues & Solutions**

#### **1. Webhook Not Receiving Data**
```bash
# Check webhook URL format
https://services.leadconnectorhq.com/hooks/[CORRECT-ID]/webhook-trigger/[CORRECT-TRIGGER-ID]

# Verify GHL workflow is active
# Check webhook payload structure
```

#### **2. EmailJS Fallback Not Working**
```typescript
// Verify environment variables
console.log('EmailJS Config:', {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.slice(0, 10) + '...'
});
```

#### **3. CORS Errors**
```typescript
// Add proper headers to fetch request
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
```

#### **4. Form Not Submitting**
- Check browser console for JavaScript errors
- Verify form validation logic
- Test with minimal form data
- Check network tab for failed requests

---

## 📊 Success Metrics

### **KPIs to Monitor**
- **Form Submission Rate**: > 95%
- **Webhook Success Rate**: > 98%
- **Email Fallback Usage**: < 5%
- **Error Rate**: < 2%
- **Page Load Time**: < 3 seconds
- **Mobile Conversion**: > 80%

### **Tracking Implementation**
```typescript
// Custom event tracking
const trackWebhookPerformance = (success: boolean, responseTime: number) => {
  if (window.gtag) {
    window.gtag('event', 'webhook_performance', {
      success: success,
      response_time: responseTime,
      timestamp: Date.now()
    });
  }
};
```

---

## 🚀 Advanced Features

### **A. Conditional Logic**
```typescript
// Different webhook URLs per form type
const getWebhookURL = (formType: string) => {
  const webhookMap = {
    'contact': 'https://services.leadconnectorhq.com/hooks/.../contact',
    'quote': 'https://services.leadconnectorhq.com/hooks/.../quote',
    'service': 'https://services.leadconnectorhq.com/hooks/.../service'
  };
  return webhookMap[formType] || webhookMap['contact'];
};
```

### **B. Lead Scoring**
```typescript
// Add lead score to webhook payload
const calculateLeadScore = (data: EmailData) => {
  let score = 0;
  if (data.phone) score += 20;
  if (data.city) score += 10;
  if (data.message.length > 100) score += 15;
  return score;
};
```

### **C. A/B Testing**
```typescript
// A/B test different form layouts
const formVariant = Math.random() > 0.5 ? 'A' : 'B';
trackFormSubmission(formType + '_variant_' + formVariant, true);
```

---

## 📝 Maintenance Schedule

### **Weekly Tasks**
- [ ] Monitor webhook success rates
- [ ] Check error logs
- [ ] Verify GHL workflow status

### **Monthly Tasks**
- [ ] Review conversion rates
- [ ] Update dependencies
- [ ] Performance audit
- [ ] Backup webhook configurations

### **Quarterly Tasks**
- [ ] Security review
- [ ] Load testing
- [ ] Feature updates
- [ ] Documentation updates

---

**Implementatie Tijd**: 2-4 uur  
**Onderhoud**: 30 min/week  
**Success Rate**: 99.5%+  

Voor vragen of ondersteuning, raadpleeg deze documentatie of test eerst op `/contact-test` route.