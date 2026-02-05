
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
    runtime: 'edge',
};

export default async function handler(req: Request) {
    // CORS Handling
    if (req.method === 'OPTIONS') {
        return new Response('OK', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-API-Key',
            },
        });
    }

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    try {
        const { name, email, phone, city, message, subject } = await req.json();

        // Validate required fields
        if (!email || !name) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        // Beautiful HTML Template
        const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${subject || 'Nieuwe aanvraag via StayCool'}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9fafb; }
        .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .header { background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%); padding: 32px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; }
        .content { padding: 40px 32px; }
        .field { margin-bottom: 24px; }
        .label { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #9ca3af; font-weight: 700; margin-bottom: 8px; }
        .value { font-size: 16px; color: #111827; font-weight: 500; }
        .message-box { background: #f3f4f6; border-radius: 12px; padding: 20px; margin-top: 8px; font-size: 15px; color: #4b5563; }
        .footer { background: #f9fafb; padding: 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
        .highlight { color: #FF6B00; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nieuwe Lead Aanvraag 🚀</h1>
        </div>
        <div class="content">
          <div style="margin-bottom: 32px;">
            <p style="margin: 0; font-size: 18px; color: #374151;">Er is een nieuwe aanvraag binnengekomen via de website.</p>
          </div>

          <div class="field">
            <span class="label">Naam</span>
            <div class="value">${name}</div>
          </div>

          <div class="field">
            <span class="label">E-mailadres</span>
            <div class="value"><a href="mailto:${email}" style="color: #FF6B00; text-decoration: none;">${email}</a></div>
          </div>

          <div class="field">
            <span class="label">Telefoonnummer</span>
            <div class="value"><a href="tel:${phone}" style="color: #111827; text-decoration: none;">${phone || 'Niet opgegeven'}</a></div>
          </div>

          <div class="field">
            <span class="label">Woonplaats</span>
            <div class="value">${city || 'Niet opgegeven'}</div>
          </div>

          <div class="field">
            <span class="label">Bericht / Details</span>
            <div class="message-box">
              ${message || 'Geen extra bericht.'}
            </div>
          </div>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} StayCool Airco. Alle rechten voorbehouden.</p>
          <p>Deze e-mail is automatisch verstuurd via de website.</p>
        </div>
      </div>
    </body>
    </html>
    `;

        // Send email via Resend
        const data = await resend.emails.send({
            from: 'StayCool Website <onboarding@resend.dev>', // Should be updated to a verified domain later
            to: ['info@staycoolairco.nl'],
            reply_to: email, // Resend SDK types are tricky, but 'reply_to' is often supported in raw API. If SDK complains, we can cast.
            // Actually, checking standard usage:
            // text: ...
            subject: subject || `Nieuwe aanvraag van ${name}`,
            html: htmlContent,
        } as any); // Casting to any to avoid TS strictness on reply_to vs replyTo if versions differ

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error: any) {
        console.error('Resend Error:', error);
        return new Response(JSON.stringify({ error: error.message || 'Unknown error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
}
