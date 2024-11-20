import React from 'react';

interface StripeBuyButtonProps {
  url: string;
}

export default function StripeBuyButton({ url }: StripeBuyButtonProps) {
  return (
    <div className="space-y-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Koop nu
      </a>
      <div className="flex justify-center items-center gap-2">
        <img src="/images/ideal-logo.svg" alt="iDEAL" className="h-6" />
        <img src="/images/mastercard-logo.svg" alt="Mastercard" className="h-6" />
        <img src="/images/visa-logo.svg" alt="Visa" className="h-6" />
        <img src="/images/paypal-logo.svg" alt="PayPal" className="h-6" />
      </div>
      <p className="text-sm text-gray-500 text-center">
        Veilig betalen met iDEAL, Mastercard, Visa of PayPal
      </p>
    </div>
  );
}
