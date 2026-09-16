import { Phone } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function ServiceNoticePopup() {
  return (
    <aside aria-label="Bellen of mailen" className="my-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-gray-700">
      <p className="flex items-start gap-2 font-semibold text-quatt-dark">
        <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        Bel of mail ons
      </p>
      <p className="mt-2">Heeft u een vraag? Bel ons of stuur een e-mail. Krijgt u ons niet te pakken? Mail uw vraag en telefoonnummer, dan kunnen we u terugbellen.</p>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        <a href="tel:+31462021430"
          onClick={() => trackEvent('service_notice', { action: 'phone_clicked' })}
          className="inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4">Bel 046 202 1430</a>
        <a href="mailto:info@staycoolairco.nl"
          onClick={() => trackEvent('service_notice', { action: 'email_clicked' })}
          className="inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4">E-mail</a>
      </div>
    </aside>
  );
}
