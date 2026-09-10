import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items = [], className = '' }: BreadcrumbsProps) {
  const crumbs = items.filter(item => item.path !== '/' && item.label.toLowerCase() !== 'home');
  // Create structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://staycoolairco.nl/'
      },
      ...crumbs.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 2,
        'name': item.label,
        ...(item.path && { item: new URL(item.path, 'https://staycoolairco.nl').href })
      }))
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className={`mb-8 overflow-x-auto ${className}`}>
        <ol className="flex items-center min-w-max text-sm" role="list">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
              aria-label="Ga naar homepage"
            >
              Home
            </Link>
          </li>
          {crumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight 
                className="h-4 w-4 text-gray-400 mx-2 flex-shrink-0" 
                aria-hidden="true"
              />
              {item.path ? (
                <Link 
                  to={item.path} 
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  aria-label={`Ga naar ${item.label}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className="text-gray-900 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
