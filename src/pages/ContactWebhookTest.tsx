import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactWebhook from '../components/ContactWebhook';
import SchemaMarkup from '../components/SchemaMarkup';

export default function ContactWebhookTest() {
  return (
    <>
      <SchemaMarkup 
        type="LocalBusiness"
        data={{
          description: "Neem contact op met StayCool Airco voor airconditioning installatie en onderhoud in Limburg.",
          name: "StayCool Airco",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Aan De Bogen 11",
            addressLocality: "Nieuwstadt",
            postalCode: "6118AS",
            addressCountry: "NL"
          },
          telephone: "+31462021430",
          email: "info@staycoolairco.nl"
        }}
      />
      <Helmet>
        <title>Contact (Webhook Test) | StayCool Airco</title>
        <meta 
          name="description" 
          content="Neem contact op met StayCool Airco voor airconditioning installatie en onderhoud in Limburg. Webhook test pagina."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-blue-100 p-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-blue-800">Webhook Test Pagina</h1>
          <p className="text-blue-700">
            Deze pagina is alleen voor het testen van de Make.com webhook integratie.
          </p>
          <div className="mt-2 p-2 bg-green-100 rounded-md inline-block">
            <p className="text-green-800 font-medium">
              ✅ De webhook is nu actief. Formulierinzendingen worden daadwerkelijk verzonden.
            </p>
            <p className="text-green-700 text-sm mt-1">
              Inzendingen worden verwerkt via de leadconnectorhq webhook integratie.
            </p>
          </div>
        </div>
      </div>

      <ContactWebhook />
    </>
  );
}
