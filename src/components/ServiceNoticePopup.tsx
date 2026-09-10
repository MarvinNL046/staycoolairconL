import { PhoneOff } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

// Temporary notice in normal page flow. Set false when phone availability recovers.
const ENABLED = true;
const WHATSAPP_URL = 'https://wa.me/31636481054?text=' +
  encodeURIComponent('Hoi, ik probeerde te bellen maar kreeg geen gehoor. Kunnen jullie mij helpen?');

export default function ServiceNoticePopup() {
  if (!ENABLED) return null;
  return (
    <aside aria-label="Telefonische bereikbaarheid" className="my-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-gray-700">
      <p className="flex items-start gap-2 font-semibold text-quatt-dark">
        <PhoneOff className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        Telefonisch even minder goed bereikbaar
      </p>
      <p className="mt-2">Door drukte kunnen we niet altijd opnemen. Stuur ons een appje of e-mail; we reageren zo snel mogelijk.</p>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          onClick={() => trackEvent('service_notice', { action: 'whatsapp_clicked' })}
          className="inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4">WhatsApp</a>
        <a href="mailto:info@staycoolairco.nl"
          onClick={() => trackEvent('service_notice', { action: 'email_clicked' })}
          className="inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4">E-mail</a>
      </div>
    </aside>
  );
}
