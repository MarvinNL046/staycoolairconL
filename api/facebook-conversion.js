// Vercel Serverless Function for Facebook Conversions API
// Migrated from Netlify Function (netlify/functions/facebook-conversion.js)
// This function receives events from the frontend and forwards them to Facebook

// Facebook Conversions API configuration
const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '179700213744131';
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const FACEBOOK_API_VERSION = 'v23.0';
const FACEBOOK_API_URL = `https://graph.facebook.com/${FACEBOOK_API_VERSION}/${FACEBOOK_PIXEL_ID}/events`;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  console.log('Facebook conversion function called');
  console.log('Method:', req.method);

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Check for access token
  if (!FACEBOOK_ACCESS_TOKEN) {
    console.error('FACEBOOK_ACCESS_TOKEN not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Vercel auto-parses JSON body
    const data = req.body;
    console.log('Parsed data:', JSON.stringify(data));

    // Get client IP from Vercel headers
    const clientIp =
      req.headers['x-real-ip'] ||
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress;

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
      return res.status(response.status).json({ error: 'Facebook API error', details: result });
    }

    // Log success for monitoring
    console.log('Event sent successfully:', {
      event_name: data.event_name,
      event_id: result.event_id,
      events_received: result.events_received,
    });

    return res.status(200).json({
      success: true,
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
    });
  } catch (error) {
    console.error('Error processing conversion event:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
