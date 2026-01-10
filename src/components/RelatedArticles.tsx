import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, HelpCircle, Calculator, Wrench, MapPin } from 'lucide-react';

interface RelatedArticle {
  title: string;
  path: string;
  description?: string;
  type?: 'guide' | 'faq' | 'calculator' | 'service' | 'location';
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
  subtitle?: string;
  pillarLink?: {
    title: string;
    path: string;
  };
  variant?: 'default' | 'compact' | 'cards';
  className?: string;
}

const iconMap = {
  guide: FileText,
  faq: HelpCircle,
  calculator: Calculator,
  service: Wrench,
  location: MapPin,
};

const colorMap = {
  guide: 'border-blue-500 bg-blue-50 hover:bg-blue-100',
  faq: 'border-purple-500 bg-purple-50 hover:bg-purple-100',
  calculator: 'border-green-500 bg-green-50 hover:bg-green-100',
  service: 'border-orange-500 bg-orange-50 hover:bg-orange-100',
  location: 'border-teal-500 bg-teal-50 hover:bg-teal-100',
};

const iconColorMap = {
  guide: 'text-blue-600',
  faq: 'text-purple-600',
  calculator: 'text-green-600',
  service: 'text-orange-600',
  location: 'text-teal-600',
};

/**
 * RelatedArticles Component
 * Displays related content links for better internal linking and SEO
 */
export default function RelatedArticles({
  articles,
  title = 'Gerelateerde Artikelen',
  subtitle,
  pillarLink,
  variant = 'default',
  className = '',
}: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-2">
          {articles.map((article, index) => {
            const Icon = iconMap[article.type || 'guide'];
            return (
              <li key={index}>
                <Link
                  to={article.path}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <Icon className={`h-4 w-4 ${iconColorMap[article.type || 'guide']}`} />
                  <span className="group-hover:underline">{article.title}</span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            );
          })}
        </ul>
        {pillarLink && (
          <Link
            to={pillarLink.path}
            className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            {pillarLink.title}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <section className={`py-12 ${className}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => {
              const Icon = iconMap[article.type || 'guide'];
              const colors = colorMap[article.type || 'guide'];
              return (
                <Link
                  key={index}
                  to={article.path}
                  className={`block p-6 rounded-xl border-l-4 transition-all hover:shadow-md ${colors}`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className={`h-6 w-6 flex-shrink-0 ${iconColorMap[article.type || 'guide']}`} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                      {article.description && (
                        <p className="text-sm text-gray-600">{article.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm font-medium text-gray-700">
                    <span>Lees meer</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
          {pillarLink && (
            <div className="text-center mt-8">
              <Link
                to={pillarLink.path}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {pillarLink.title}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

        <div className="grid md:grid-cols-2 gap-4">
          {articles.map((article, index) => {
            const Icon = iconMap[article.type || 'guide'];
            return (
              <Link
                key={index}
                to={article.path}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
              >
                <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors`}>
                  <Icon className={`h-5 w-5 ${iconColorMap[article.type || 'guide']}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-sm text-gray-500 mt-1">{article.description}</p>
                  )}
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </Link>
            );
          })}
        </div>

        {pillarLink && (
          <div className="mt-6 text-center">
            <Link
              to={pillarLink.path}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              {pillarLink.title}
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Helper function to generate related articles for airco installation pillar
 */
export function getAircoInstallatieRelatedArticles(): RelatedArticle[] {
  return [
    {
      title: 'Veelgestelde Vragen Airco Installatie',
      path: '/kennisbank/airco-installatie-limburg/faq',
      type: 'faq',
      description: 'Antwoorden op alle vragen over installatie'
    },
    {
      title: 'Airco Installatie Kosten',
      path: '/kennisbank/airco-installatie-limburg/kosten',
      type: 'calculator',
      description: 'Wat kost een airco installeren?'
    },
    {
      title: 'Stappenplan Installatie',
      path: '/kennisbank/airco-installatie-limburg/stappenplan',
      type: 'guide',
      description: 'Van advies tot oplevering'
    }
  ];
}

/**
 * Helper function to generate related articles for thuisbatterij pillar
 */
export function getThuisbatterijRelatedArticles(): RelatedArticle[] {
  return [
    {
      title: 'Thuisbatterij Veelgestelde Vragen',
      path: '/thuisbatterijen/faq',
      type: 'faq',
      description: 'Alles wat u wilt weten'
    },
    {
      title: 'Thuisbatterij Kosten & Besparing',
      path: '/kennisbank/thuisbatterij-kosten-overzicht',
      type: 'calculator',
      description: 'Prijzen en terugverdientijd'
    },
    {
      title: 'Thuisbatterij Calculator',
      path: '/thuisbatterij-calculator',
      type: 'calculator',
      description: 'Bereken uw besparing'
    }
  ];
}

/**
 * Helper function to generate related articles for airco onderhoud pillar
 */
export function getAircoOnderhoudRelatedArticles(): RelatedArticle[] {
  return [
    {
      title: 'Onderhoud Kosten',
      path: '/kennisbank/airco-onderhoud-kosten',
      type: 'calculator',
      description: 'Tarieven en contracten'
    },
    {
      title: 'Onderhoud Checklist',
      path: '/kennisbank/airco-onderhoud-checklist',
      type: 'guide',
      description: 'Wat u zelf kunt doen'
    },
    {
      title: 'Onderhoud Problemen Voorkomen',
      path: '/kennisbank/airco-onderhoud-problemen-voorkomen',
      type: 'guide',
      description: 'Preventief onderhoud tips'
    }
  ];
}
