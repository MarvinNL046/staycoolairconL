// Netlify Function for Facebook Conversions API
// This function receives events from the frontend and forwards them to Facebook

const crypto = require('crypto');

// Facebook Conversions API configuration
const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '179700213744131';
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN; // Set this in Netlify
const FACEBOOK_API_VERSION = 'v18.0';
const FACEBOOK_API_URL = `https://graph.facebook.com/${FACEBOOK_API_VERSION}/${FACEBOOK_PIXEL_ID}/events`;

exports.handler = async (event, context) => {
  console.log('Facebook conversion function called');
  console.log('Method:', event.httpMethod);
  console.log('Headers:', JSON.stringify(event.headers));
  
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Check for access token
  if (!FACEBOOK_ACCESS_TOKEN) {
    console.error('FACEBOOK_ACCESS_TOKEN not configured');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  try {
    console.log('Body:', event.body);
    const data = JSON.parse(event.body);
    console.log('Parsed data:', JSON.stringify(data));
    
    // Get client IP from Netlify headers
    const clientIp = event.headers['x-nf-client-connection-ip'] || 
                    event.headers['x-forwarded-for'] || 
                    event.headers['client-ip'];
    
    // Add server-side data
    if (data.user_data) {
      data.user_data.client_ip_address = clientIp;
    }
    
    // Create test event code for testing (optional)
    const testEventCode = process.env.FACEBOOK_TEST_EVENT_CODE;
    
    // Prepare the request payload
    const payload = {
      data: [data],
      access_token: FACEBOOK_ACCESS_TOKEN,
    };
    
    // Add test event code if in development
    if (testEventCode && process.env.NODE_ENV !== 'production') {
      payload.test_event_code = testEventCode;
    }
    
    // Send to Facebook Conversions API
    const response = await fetch(FACEBOOK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('Facebook API error:', result);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Facebook API error', details: result }),
      };
    }
    
    // Log success for monitoring
    console.log('Event sent successfully:', {
      event_name: data.event_name,
      event_id: result.event_id,
      events_received: result.events_received,
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        events_received: result.events_received,
        fbtrace_id: result.fbtrace_id,
      }),
    };
  } catch (error) {
    console.error('Error processing conversion event:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};