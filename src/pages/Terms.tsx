import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ScrollText } from 'lucide-react';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Algemene Voorwaarden | StayCool Airco</title>
        <meta 
          name="description" 
          content="Lees onze algemene voorwaarden voor airconditioning installatie, onderhoud en service. Duidelijke afspraken voor een zorgeloze samenwerking."
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
              <ScrollText className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Algemene Voorwaarden
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Staycool Airconditioning - Duidelijke afspraken voor een zorgeloze samenwerking
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <p>
              Staycoolairco.nl biedt een uitgebreid scala aan diensten op het gebied van airconditioning, 
              inclusief installatie, onderhoud en reparatie. Of u nu een nieuwe airco wilt laten installeren 
              of uw bestaande systeem wilt laten onderhouden, onze ervaren technici staan voor u klaar.
            </p>

            <h2>1. Montage en Installatie</h2>
            <p>
              Het airconditioningssysteem wordt geïnstalleerd op de vooraf overeengekomen locatie. Deze 
              locatie wordt in overleg bepaald en bij aanvang van de montage geverifieerd. Een basiscontrole 
              wordt uitgevoerd om de goede werking van het systeem te verifiëren. Het systeem wordt aangesloten 
              op de bestaande elektrische infrastructuur, indien van toepassing. Klanten ontvangen een korte 
              uitleg over de basiswerking van het systeem. Steigerwerk wordt gebruikt tot een maximale 
              werkhoogte van 2,5 meter.
            </p>

            <h2>2. Uitzonderingen op Montage</h2>
            <ul>
              <li>Hak- en breekwerk, betonboorwerk groter dan 25mm</li>
              <li>Schilder-, bouwkundige en loodgieterswerkzaamheden</li>
              <li>Geluidswerende voorzieningen</li>
              <li>Transport anders dan over verharde weg</li>
              <li>Instellen van WiFi</li>
              <li>Klant is verantwoordelijk voor een 2.4GHz WiFi-netwerk</li>
              <li>Monteurs verplaatsen geen meubels of andere objecten</li>
            </ul>

            <h2>3. Boringen en Verticaal Transport</h2>
            <p>
              Boringen worden gemaakt tot een maximale diameter van 62mm. Schade door deze boringen valt 
              niet onder de verantwoordelijkheid van Staycool Airconditioning, tenzij door nalatigheid van 
              de monteur. Verticaal transport tot maximaal 3 meter boven het maaiveld.
            </p>

            <h2>4. WiFi-Module</h2>
            <p>Een WiFi-module kan bij de airco besteld worden tegen een meerprijs.</p>

            <h2>5. Klachten en Aansprakelijkheid</h2>
            <p>
              Klachten omtrent de montage dienen binnen 14 dagen schriftelijk te worden ingediend. Gegrond 
              bevonden klachten worden naar inzicht van Staycool Airconditioning aangepast of hersteld.
            </p>

            <h2>6. Betalingen</h2>
            <p>50% aanbetaling vereist vóór montage. Resterende betaling binnen 8 dagen na oplevering.</p>

            <h2>7. Garantie</h2>
            <p>2 jaar garantie op montage. Afhankelijke fabrieksgaranties kunnen van toepassing zijn.</p>

            <h2>8. Verantwoordelijkheid</h2>
            <p>
              Klant is verantwoordelijk voor schade door brand, water of diefstal vanaf aanvang werkzaamheden.
            </p>

            <h2>9. Acceptatie</h2>
            <p>Acceptatie van de offerte betekent akkoord met deze voorwaarden.</p>

            <h2>10. Prijzen en Offertes</h2>
            <p>
              Alle prijzen op de website zijn inclusief BTW, tenzij anders vermeld. Offertes zijn 30 dagen 
              geldig, tenzij anders aangegeven.
            </p>

            <h2>11. Annulering</h2>
            <p>
              Indien een klant een afspraak of bestelling wenst te annuleren, dient dit 7 dagen van tevoren 
              te gebeuren. Eventuele kosten of boetes voor late annulering kunnen van toepassing zijn.
            </p>

            <h2>12. Aansprakelijkheid</h2>
            <p>
              Staycool Airconditioning is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde 
              winst of gemiste besparingen.
            </p>

            <h2>13. Privacy en Gegevensbescherming</h2>
            <p>
              Alle persoonlijke gegevens die door klanten worden verstrekt, worden vertrouwelijk behandeld 
              en niet gedeeld met derden, behalve waar nodig voor de uitvoering van onze diensten of indien 
              wettelijk vereist.
            </p>

            <h2>14. Intellectuele Eigendom</h2>
            <p>
              Alle inhoud op de website, inclusief teksten, afbeeldingen en logo's, zijn eigendom van 
              Staycool Airconditioning en mogen niet worden gereproduceerd zonder voorafgaande schriftelijke 
              toestemming.
            </p>

            <h2>15. Overmacht</h2>
            <p>
              Staycool Airconditioning is niet aansprakelijk voor vertragingen of het niet nakomen van 
              verplichtingen als gevolg van situaties buiten haar controle, zoals natuurrampen, stakingen, etc.
            </p>

            <h2>16. Geschillen en Toepasselijk Recht</h2>
            <p>
              Op deze voorwaarden is Nederlands recht van toepassing. Geschillen zullen worden voorgelegd 
              aan de bevoegde rechter in Nederland.
            </p>

            <h2>17. Wijzigingen in de Voorwaarden</h2>
            <p>
              Staycool Airconditioning behoudt zich het recht voor om deze voorwaarden op elk moment te 
              wijzigen. Het is de verantwoordelijkheid van de klant om regelmatig de voorwaarden te controleren.
            </p>

            <h2>18. Late Betalingen</h2>
            <p>
              Bij late betalingen is Staycool Airconditioning gerechtigd om een standaardvergoeding voor 
              administratiekosten van €40 in rekening te brengen. Daarnaast kunnen redelijke kosten voor 
              gemaakte kosten, zoals juridische kosten of incassokosten, in rekening worden gebracht. 
              Wettelijke rente, berekend vanaf de datum waarop de betalingstermijn verstrijkt, kan ook in 
              rekening worden gebracht op het openstaande bedrag tegen het op dat moment geldende rentepercentage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}