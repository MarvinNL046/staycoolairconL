import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | StayCool Airco</title>
        <meta 
          name="description" 
          content="Lees ons privacybeleid. Ontdek hoe wij uw persoonlijke gegevens beschermen en verwerken volgens de AVG-richtlijnen."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Staycool Airconditioning - Laatst bijgewerkt: 25 juli 2024
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Inleiding</h2>
            <p>
              Welkom bij de Privacy Policy van Staycool Airconditioning. Wij respecteren uw privacy en 
              zetten ons in voor het beschermen van uw persoonlijke gegevens. Deze Privacy Policy informeert 
              u over hoe wij omgaan met uw persoonlijke informatie wanneer u gebruik maakt van onze diensten, 
              onze website bezoekt (ongeacht waar u deze bezoekt) en vertelt u over uw privacyrechten en 
              hoe de wet u beschermt.
            </p>

            <h2>2. Belangrijke informatie en wie we zijn</h2>
            <p>
              Staycool Airconditioning is verantwoordelijk voor uw persoonlijke gegevens (hierna ook 
              aangeduid als "wij", "ons" of "onze" in deze Privacy Policy).
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="text-blue-900 mt-0">Contactgegevens:</h3>
              <ul className="mb-0">
                <li><strong>Bedrijfsnaam:</strong> Staycool Airconditioning</li>
                <li><strong>E-mailadres:</strong> info@staycoolairco.nl</li>
                <li><strong>Telefoonnummer:</strong> 046 202 1430</li>
                <li><strong>Postadres:</strong> Paalweg 18, 6129EZ Urmond</li>
              </ul>
            </div>

            <h2>3. Onze diensten en gegevensverzameling</h2>
            <p>Staycool Airconditioning biedt airconditioningdiensten aan. Ons proces omvat:</p>
            <ul>
              <li>Ontvangen van leads/aanvragen via sociale media of onze website</li>
              <li>Opslaan van deze gegevens in ons CRM-systeem (GoHighLevel)</li>
              <li>Telefonisch contact met klanten voor het maken van afspraken</li>
              <li>Fysieke afspraken voor situatiebeoordeling en het maken van offertes</li>
              <li>Installatie van airconditioning bij akkoord</li>
            </ul>

            <h2>4. De gegevens die we verzamelen</h2>
            <p>
              We kunnen de volgende soorten persoonlijke informatie over u verzamelen, gebruiken, opslaan 
              en overdragen:
            </p>
            <ul>
              <li>Identiteitsgegevens: naam, titel</li>
              <li>Contactgegevens: adres, e-mailadres, telefoonnummers</li>
              <li>Gebruiksgegevens: informatie over hoe u onze website en diensten gebruikt</li>
              <li>Marketing- en communicatiegegevens: uw voorkeuren in het ontvangen van marketing van ons</li>
              <li>Locatiegegevens: adres waar de airconditioning geïnstalleerd moet worden</li>
            </ul>

            <h2>5. Hoe we uw persoonlijke gegevens gebruiken</h2>
            <p>We gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
            <ul>
              <li>Om uw aanvraag te verwerken en contact met u op te nemen</li>
              <li>Om een afspraak in te plannen voor een situatiebeoordeling</li>
              <li>Om een offerte op te stellen en te versturen</li>
              <li>Om onze diensten aan u te leveren (installatie van airconditioning)</li>
              <li>Om onze administratie bij te houden</li>
              <li>Om te voldoen aan wettelijke verplichtingen</li>
            </ul>

            <h2>6. Gegevensbewaring</h2>
            <p>
              We bewaren uw persoonlijke gegevens alleen zolang als nodig is om te voldoen aan de doeleinden 
              waarvoor we ze hebben verzameld, inclusief voor het voldoen aan wettelijke, boekhoudkundige 
              of rapportagevereisten. In het algemeen bewaren we klantgegevens tot 7 jaar na de laatste 
              interactie, in overeenstemming met fiscale bewaartermijnen.
            </p>

            <h2>7. Uw wettelijke rechten</h2>
            <p>
              Onder de AVG heeft u verschillende rechten met betrekking tot uw persoonlijke gegevens, 
              waaronder het recht om:
            </p>
            <ul>
              <li>Inzage te vragen in uw persoonlijke gegevens</li>
              <li>Correctie te verzoeken van uw persoonlijke gegevens</li>
              <li>Verwijdering van uw persoonlijke gegevens te verzoeken</li>
              <li>Bezwaar te maken tegen de verwerking van uw persoonlijke gegevens</li>
              <li>Beperking te verzoeken van de verwerking van uw persoonlijke gegevens</li>
              <li>Overdracht te verzoeken van uw persoonlijke gegevens</li>
              <li>Uw toestemming in te trekken voor gegevensverwerking</li>
            </ul>

            <h2>8. Gegevensbeveiliging</h2>
            <p>
              We hebben passende veiligheidsmaatregelen geïmplementeerd om te voorkomen dat uw persoonlijke 
              gegevens per ongeluk verloren gaan, gebruikt of geopend worden op een ongeautoriseerde manier, 
              gewijzigd of openbaar gemaakt worden.
            </p>

            <h2>9. Wijzigingen in de Privacy Policy</h2>
            <p>
              We kunnen onze Privacy Policy van tijd tot tijd bijwerken. We zullen u op de hoogte stellen 
              van eventuele belangrijke wijzigingen door een kennisgeving op onze website te plaatsen.
            </p>

            <h2>10. Contact</h2>
            <p>
              Als u vragen heeft over deze Privacy Policy of onze privacypraktijken, neem dan contact met 
              ons op via info@staycoolairco.nl, bel ons op 046 202 1430, of schrijf naar Paalweg 18, 
              6129EZ Urmond.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}