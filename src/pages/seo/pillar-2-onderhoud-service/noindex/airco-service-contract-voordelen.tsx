import MetaTags from '../../../../components/MetaTags';
import MaintenanceOffer from '../../../../components/MaintenanceOffer';

export default function AircoServiceContractVoordelenPage() {
  return <div className="max-w-5xl mx-auto px-4 pt-32 pb-16 break-words">
    <MetaTags title="Airco Servicecontract Voordelen | StayCool Airco" description="Vergelijk los onderhoud, Basis en Premium voor bestaande StayCool-klanten. Bekijk de kosten per complete unit en de verschillen in dekking." canonicalUrl="https://staycoolairco.nl/airco-service/noindex/contract-voordelen" noIndex={true} />
    <h1 className="text-3xl font-bold mb-6">Wat biedt een onderhoudscontract?</h1>
    <p>Een onderhoudscontract combineert jaarlijks onderhoud met voorrang bij storingen en geen voorrijkosten. Basis en Premium verschillen in dekking. Het aanbod geldt voor airco’s die door StayCool zijn geleverd en geïnstalleerd.</p>
    <MaintenanceOffer />
    <h2 className="text-2xl font-bold mb-4">Los onderhoud of een abonnement?</h2>
    <p>Voor één complete unit betaalt u €189 voor een losse beurt. Basis kost bij maandbetaling 12 × €13 = €156 per jaar: €33 minder dan één losse beurt. Premium kost 12 × €16 = €192 per jaar en biedt daarnaast alle onderdelen en een vervangend toestel bij een defect dat niet te repareren is.</p>
    <p className="mt-4">Extra binnendelen kosten €8 per maand bij Basis en €11 bij Premium. Bij meerdere complete units betaalt u de prijs per complete unit; €16 is dus geen totaalprijs voor meerdere airco’s. De aanmelding berekent uw totaal en eventuele korting voor uw configuratie en betaalritme.</p>
    <h2 className="text-2xl font-bold mt-8 mb-4">Een helder rekenvoorbeeld</h2>
    <p>Bij vijf jaarlijkse losse beurten voor één complete unit is de onderhoudsprijs 5 × €189 = €945. Vijf jaar Basis bij maandbetaling is 60 × €13 = €780. Het verschil is €165, uitsluitend als deze tarieven gelijk blijven. Energie, reparaties en extra binnendelen zijn niet in dit voorbeeld meegerekend.</p>
    <p className="mt-4">De pakketten zijn volgens het actuele aanbod per maand opzegbaar. Controleer bij uw gekozen betaalritme de voorwaarden. Voorrang bij storingen is geen belofte van een 24/7-storingsdienst of een vaste aankomsttijd.</p>
  </div>;
}
