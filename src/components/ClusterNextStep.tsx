import { Link } from 'react-router-dom';

export default function ClusterNextStep({ maintenance }: { maintenance: boolean }) {
  const links = maintenance ? [
    { to: '/onderhoud', title: 'Kies uw onderhoudsabonnement', text: 'Vergelijk Basis en Premium voor een airco die door StayCool is geleverd en geïnstalleerd.' },
    { to: '/airco-onderhoud-limburg', title: 'Wat houdt onderhoud in?', text: 'Lees over de werkzaamheden en de voorwaarden voor bestaande klanten.' },
    { to: '/blog/airco-storingen-herkennen', title: 'Heeft u een storing?', text: 'Bekijk wat u veilig zelf kunt controleren en wanneer u contact opneemt.' },
  ] : [
    { to: '/airco-kopen-limburg', title: 'Kies een airco voor uw woning', text: 'Vergelijk de beschikbare systemen en vraag installatieadvies voor Limburg aan.' },
    { to: '/kosten-airco-plaatsen', title: 'Bekijk installatieprijzen', text: 'Concrete prijsvoorbeelden inclusief installatie, materialen en btw.' },
    { to: '/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split', title: 'Eén of meerdere ruimtes?', text: 'Vergelijk single-split en multi-split vóór u een uitvoering kiest.' },
  ];
  return <section className="bg-blue-50 px-4 py-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-slate-900">{maintenance ? 'Van onderhoudsvraag naar het juiste pakket' : 'Uw volgende stap bij het kiezen van een airco'}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">{links.map(link => <Link key={link.to} to={link.to} className="rounded-2xl border border-blue-100 bg-white p-6 hover:border-blue-600"><h3 className="text-xl font-bold text-blue-800">{link.title}</h3><p className="mt-3 text-slate-700">{link.text}</p></Link>)}</div>
    </div>
  </section>;
}
