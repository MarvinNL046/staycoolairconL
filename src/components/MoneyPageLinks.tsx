import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { primaryMoneyPageLinks, type MoneyPageLink } from '../data/moneyPageLinks';

interface MoneyPageLinksProps {
  title?: string;
  subtitle?: string;
  links?: MoneyPageLink[];
}

export default function MoneyPageLinks({
  title = 'Populaire airco diensten in Limburg',
  subtitle = 'Snel naar de belangrijkste aanvraagpagina’s voor installatie, aankoop en offerte.',
  links = primaryMoneyPageLinks,
}: MoneyPageLinksProps) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-quatt-orange">
            Direct aanvragen
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-quatt-dark sm:text-5xl">
            {title}
          </h2>
          <p className="text-lg leading-8 text-gray-600">{subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group rounded-3xl border border-gray-100 bg-[#f7f3ec] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-quatt-orange/30 hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-black text-quatt-dark">{link.title}</h3>
              <p className="mb-6 text-sm leading-6 text-gray-600">{link.description}</p>
              <span className="inline-flex items-center text-sm font-black text-quatt-orange">
                Bekijk pagina
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

