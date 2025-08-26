# Facebook Conversions API Test Guide

## Test Checklist

### 1. Hero Form (Most Important)
**Location**: Homepage (https://staycoolairco.nl)
- [ ] Open browser console (F12)
- [ ] Fill in the form with test data:
  - Name: Test Hero
  - Email: test@hero.com
  - Phone: 0612345678
  - City: Maastricht
  - Message: Test hero form submission
- [ ] Submit the form
- [ ] Check console for "Hero form: Tracking with Conversions API..."
- [ ] Check Netlify Functions log for the API call
- [ ] Check Facebook Events Manager for new Lead event

### 2. Contact Form
**Location**: Contact page (https://staycoolairco.nl/contact)
- [ ] Open browser console
- [ ] Fill in the form with test data:
  - Name: Test Contact
  - Email: test@contact.com
  - Phone: 0612345679
  - City: Heerlen
  - Message: Test contact form submission
- [ ] Submit the form
- [ ] Check console for "Tracking with Conversions API..."
- [ ] Check Netlify Functions log
- [ ] Check Facebook Events Manager

### 3. Product Landing Form
**Location**: Any product page (e.g., https://staycoolairco.nl/products/daikin)
- [ ] Open browser console
- [ ] Fill in the form with test data:
  - Name: Test Landing
  - Email: test@landing.com
  - Phone: 0612345680
  - City: Weert
  - Message: Test landing form submission
- [ ] Submit the form
- [ ] Check console for "Landing form: Tracking with Conversions API..."
- [ ] Check Netlify Functions log
- [ ] Check Facebook Events Manager

## What to Look For

### In Browser Console:
1. "Hero form: Tracking with Conversions API..." (or similar for other forms)
2. Any error messages related to conversions API
3. Network tab should show request to /.netlify/functions/facebook-conversion

### In Netlify Functions Log:
1. Function execution logs
2. "Sending to Facebook Conversions API..." message
3. Success response with event_id
4. Event Match Quality score

### In Facebook Events Manager:
1. New "Lead" events appearing
2. Event source showing both "Browser" and "Server"
3. Event deduplication working (no duplicate events)
4. Event Match Quality score (aim for 6.0+)

## Test Event Mode
Currently using test event code: TEST84453

To verify events are being received:
1. Go to Facebook Events Manager
2. Click on your pixel
3. Go to "Test events" tab
4. You should see events appearing with the test code

## Production Deployment
When ready for production:
1. Remove FACEBOOK_TEST_EVENT_CODE from Netlify environment variables
2. Redeploy the site
3. Events will then appear in the main Events Manager view

## Troubleshooting

### If no console logs appear:
- Hard refresh the page (Ctrl+Shift+R)
- Check if the form submission is successful
- Look for any JavaScript errors

### If Netlify function doesn't log:
- Check Netlify Functions dashboard
- Ensure the function is deployed
- Look for any deployment errors

### If Facebook doesn't receive events:
- Verify the access token is correct
- Check if test event code is active
- Ensure you're looking in the right place (Test events tab)