import React, { useEffect } from 'react';

type TrustooWidgetProps = {
  className?: string;
};

const TRUSTOO_SCRIPT_SRC = 'https://static.trustoo.nl/widget/widget_v2.js';
const TRUSTOO_SCRIPT_ID = 'trustoo-widget-v2-script';

export default function TrustooWidget({ className = '' }: TrustooWidgetProps) {
  useEffect(() => {
    if (document.getElementById(TRUSTOO_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = TRUSTOO_SCRIPT_ID;
    script.async = true;
    script.src = TRUSTOO_SCRIPT_SRC;
    document.head.appendChild(script);
  }, []);

  return (
    <div className={className}>
      <div
        className="trustoo-widget"
        data-id="Z5j_vUUvYES3M_AZ3ozQdDngvZYp2xSCuBzjMpe8c3Q3kQ"
        data-language-code="nl"
        data-country-code="NL"
        data-badge="default"
        data-quote="hidden"
        data-size="large"
        data-type="landscape"
        data-border="shadow"
        data-theme="light"
        data-background="transparent"
        data-google="hidden"
      />
    </div>
  );
}
