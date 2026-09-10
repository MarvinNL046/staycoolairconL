import { Link } from 'react-router-dom';

export default function MaintenanceNextStep({ serviceFirst = false }: { serviceFirst?: boolean }) {
  return <aside aria-label="Onderhoud voor uw StayCool-airco" className="not-prose my-8 rounded-xl border border-blue-100 bg-blue-50 p-4 sm:p-6 break-words">
    <h2 className="text-xl font-bold text-gray-900">{serviceFirst ? 'Een storing aan uw StayCool-airco?' : 'Onderhoud voor uw StayCool-airco'}</h2>
    <p className="mt-3 text-gray-700">{serviceFirst
      ? 'Is uw airco door StayCool geleverd en geïnstalleerd? Neem bij een bestaand defect eerst contact op met onze klantenservice. Een nieuw onderhoudsabonnement is geen toezegging dat dit defect wordt vergoed.'
      : 'Heeft StayCool uw airco geleverd en geïnstalleerd? Vergelijk los onderhoud met Basis en Premium. Bekijk de prijs per complete unit en welke dekking bij u past.'}</p>
    <div className="mt-4 flex flex-col items-start gap-3">
      {serviceFirst && <Link to="/contact" className="font-semibold text-blue-800 underline">Neem contact op over uw storing</Link>}
      <Link to="/onderhoud" className="font-semibold text-blue-800 underline">Vergelijk Basis en Premium voor uw StayCool-airco</Link>
      {!serviceFirst && <Link to="/seo/pillar-9-kosten-prijzen/airco-onderhoud-kosten" className="text-blue-800 underline">Wat kost los onderhoud tegenover een abonnement?</Link>}
    </div>
  </aside>;
}
