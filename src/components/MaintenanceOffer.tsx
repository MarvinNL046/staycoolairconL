import { Link } from 'react-router-dom';
import { maintenancePlans } from '../data/maintenancePlans';

export default function MaintenanceOffer() {
  return <section className="my-10 break-words rounded-2xl bg-blue-50 p-4 sm:p-8 text-gray-800" aria-label="Actuele onderhoudspakketten">
    <h2 className="text-2xl font-bold mb-4">Onderhoud voor bestaande StayCool-klanten</h2>
    <p className="mb-4">Voor airco’s die door StayCool zijn geleverd en geïnstalleerd. Een complete unit bestaat uit één buitendeel en één binnendeel. Los onderhoud kost €189 per complete unit.</p>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {maintenancePlans.map(plan => <div key={plan.id} className="rounded-xl bg-white p-5 flex flex-col">
        <h3 className="text-xl font-bold">{plan.title}</h3>
        <p className="my-3 text-2xl font-bold">€{plan.price} <span className="text-sm font-normal">per maand per complete unit</span></p>
        <p className="text-sm">€{plan.annualPrice} per jaar bij maandbetaling. Extra binnendeel: €{plan.extraIndoorPrice} per maand.</p>
        <ul className="list-disc pl-5 my-4 space-y-2">{plan.features.map(item => <li key={item}>{item}</li>)}</ul>
        <a href={`https://aanmelden.staycoolairco.nl/?pakket=${plan.id}`} className="mt-auto inline-block rounded-lg bg-blue-700 p-3 text-center font-semibold text-white hover:bg-blue-800">Kies {plan.title}</a>
      </div>)}
    </div>
    <p className="mt-5">U bevestigt uw keuze bij aanmelden. Bekijk de <Link to="/onderhoud" className="text-blue-800 underline">onderhoudspakketten</Link> en <Link to="/voorwaarden" className="text-blue-800 underline">voorwaarden</Link>. De totaalprijs hangt af van uw aantal units en betaalritme.</p>
  </section>;
}
