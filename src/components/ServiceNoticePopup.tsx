import React, { useState, useEffect, useCallback } from 'react';
import { PhoneOff, MessageCircle, Mail, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

/**
 * Tijdelijke service-melding: telefoon is door drukte minder goed bereikbaar.
 * Subtiele, sluitbare kaart (rechtsonder desktop / onderin mobiel).
 *
 * Zet uit zodra de telefonische bereikbaarheid weer normaal is:
 *   verander ENABLED naar `false` (of verwijder de render in App.tsx).
 */
const ENABLED = true;

// Contactgegevens (identiek aan de rest van de site)
const WHATSAPP_URL =
  'https://wa.me/31636481054?text=' +
  encodeURIComponent('Hoi, ik probeerde te bellen maar kreeg geen gehoor. Kunnen jullie mij helpen?');
const EMAIL = 'info@staycoolairco.nl';

const DISMISS_KEY = 'serviceNoticeDismissed';

export default function ServiceNoticePopup() {
  const [isMounted, setIsMounted] = useState(false); // in DOM
  const [isShown, setIsShown] = useState(false); // animatie-state (ingeschoven)

  const handleClose = useCallback(() => {
    setIsShown(false);
    sessionStorage.setItem(DISMISS_KEY, 'true');
    trackEvent('service_notice', { action: 'dismissed' });
    // Verwijder uit DOM na de uitschuif-animatie
    window.setTimeout(() => setIsMounted(false), 300);
  }, []);

  // Korte vertraging zodat de pagina eerst rustig laadt, daarna in DOM plaatsen
  useEffect(() => {
    if (!ENABLED) return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const showTimer = window.setTimeout(() => setIsMounted(true), 1200);
    return () => window.clearTimeout(showTimer);
  }, []);

  // Zodra in DOM: één tik later de inschuif-animatie starten.
  // (setTimeout i.p.v. requestAnimationFrame: rAF vuurt niet in een
  //  achtergrond-tab, waardoor de kaart onzichtbaar zou blijven.)
  useEffect(() => {
    if (!isMounted) return;
    trackEvent('service_notice', { action: 'shown' });
    const animTimer = window.setTimeout(() => setIsShown(true), 30);
    return () => window.clearTimeout(animTimer);
  }, [isMounted]);

  // Escape sluit de melding
  useEffect(() => {
    if (!isMounted) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMounted, handleClose]);

  if (!ENABLED || !isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed z-[60] left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-full sm:max-w-sm transition-all duration-300 ease-out ${
        isShown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="relative rounded-2xl bg-white p-5 shadow-elevation-lg ring-1 ring-black/5">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="Melding sluiten"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-quatt-orange">
            <PhoneOff className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-bold text-quatt-dark">
              Telefonisch even minder goed bereikbaar
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Door de grote drukte lukt het ons nu niet altijd om de telefoon op te nemen.
              Stuur ons gerust een appje of mail — we reageren zo snel mogelijk. Onze excuses
              voor het ongemak.
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('service_notice', { action: 'whatsapp_clicked' })}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1ebe5b]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => trackEvent('service_notice', { action: 'email_clicked' })}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-quatt-dark transition-colors hover:bg-gray-50"
          >
            <Mail className="h-4 w-4" />
            E-mail
          </a>
        </div>
      </div>
    </div>
  );
}
