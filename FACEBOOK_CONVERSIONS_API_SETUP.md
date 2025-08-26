# Facebook Conversions API Setup Guide

## Waarom Conversions API?

De Facebook Conversions API lost deze problemen op:
- ✅ **Ad blockers omzeilen** - Server-side tracking wordt niet geblokkeerd
- ✅ **Betere data kwaliteit** - Geen browser crashes of connectivity issues
- ✅ **Privacy compliant** - Data hashing gebeurt server-side
- ✅ **Offline conversies** - Track ook telefonische boekingen
- ✅ **Betere matching** - Combineer met Pixel voor 95%+ match rate

## Setup Stappen

### 1. Facebook Access Token Aanmaken

1. Ga naar [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Selecteer je pixel (ID: 179700213744131)
3. Klik op "Settings" → "Generate Access Token"
4. Kopieer de token (begint met `EAAI...`)

### 2. Netlify Environment Variables

In je Netlify dashboard:
1. Ga naar Site settings → Environment variables
2. Voeg toe:
   - `FACEBOOK_ACCESS_TOKEN` = EAAOlu4btGi8BPbV1u6oYmjavgtikdC8ZCKE7EBjhA6sPDLiCaWwyClk4trmF0jkXquTMCJP9FJyaHK0NbYHuxAECaiiu67AtUTfVFzSamSJpVl2ryQ3asnlXCpRsdiEXrwjdankZBw8TljDVUfZBy8peTZBA11ZCnIMb6jwPxUTDBVUwVtfluAGqtoNVYrgZDZD
   - `FACEBOOK_PIXEL_ID` = 179700213744131
   - `FACEBOOK_TEST_EVENT_CODE` = TEST84453 (voor testing)

### 3. Update Form Submission Code

```typescript
// In src/components/Contact.tsx en ContactWebhook.tsx
import { trackAPIFormSubmission } from '../utils/conversionsAPI';

// In handleSubmit functie, NA succesvolle submission:
await trackAPIFormSubmission('contact_form', formData);
```

### 4. Test je Implementatie

1. Open Facebook Events Manager
2. Ga naar "Test Events" tab
3. Gebruik test event code: TEST84453
4. Submit een test formulier
5. Check of events binnenkomen

### 5. Productie Deployment

1. Verwijder `FACEBOOK_TEST_EVENT_CODE` uit Netlify
2. Deploy je changes
3. Monitor in Events Manager → "Overview"

## Verificatie Checklist

- [ ] Access token aangemaakt in Facebook
- [ ] Environment variables in Netlify gezet
- [ ] Netlify function gedeployed
- [ ] Form submissions updaten met API calls
- [ ] Test events komen binnen
- [ ] Productie events worden getrackt

## Voordelen van deze Setup

1. **Dual tracking**: Pixel + API voor maximale dekking
2. **Privacy-first**: Alle data wordt gehashed
3. **Geen server nodig**: Netlify Functions zijn gratis tot 125k requests
4. **Offline tracking ready**: Kan uitgebreid worden voor telefoon/winkel conversies

## Monitoring

Check regelmatig:
- Events Manager → Diagnostics (voor errors)
- Events Manager → Overview (voor volumes)
- Match rate percentage (streef naar >90%)

## Troubleshooting

**Events komen niet binnen:**
- Check access token geldigheid
- Verify pixel ID
- Check Netlify function logs

**Lage match rate:**
- Zorg voor email + telefoon in forms
- Normaliseer telefoonnummers correct
- Hash alle data volgens Facebook specs

**Test events in productie:**
- Verwijder FACEBOOK_TEST_EVENT_CODE variable
- Clear browser cache
- Re-deploy site