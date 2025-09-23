import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Phone } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import { productData } from '../data/products';
import { serviceAreasData } from '../data/service-areas';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const results: any[] = [];
    const lowerQuery = query.toLowerCase();

    // Search products
    productData.brands.forEach(brand => {
      if (brand.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'brand',
          name: brand.name,
          link: `/products/${brand.slug}`,
          description: `Bekijk alle ${brand.name} airco's`
        });
      }
      
      brand.models.forEach(model => {
        if (model.name.toLowerCase().includes(lowerQuery) || 
            model.description.toLowerCase().includes(lowerQuery)) {
          results.push({
            type: 'product',
            name: `${brand.name} ${model.name}`,
            link: `/products/${brand.slug}/${model.slug}`,
            description: model.description.substring(0, 100) + '...'
          });
        }
      });
    });

    // Search service areas
    serviceAreasData.serviceAreas.forEach(area => {
      if (area.city.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'location',
          name: `Airco installatie ${area.city}`,
          link: `/locaties/${area.city.toLowerCase()}`,
          description: `Airco specialist in ${area.city} en omgeving`
        });
      }
    });

    // Search common pages
    const commonPages = [
      { name: 'Contact', link: '/contact', keywords: ['contact', 'offerte', 'aanvraag'] },
      { name: 'Producten', link: '/products', keywords: ['producten', 'airco', 'modellen'] },
      { name: 'Kennisbank', link: '/knowledge-base', keywords: ['kennis', 'informatie', 'vragen'] },
      { name: 'Blog', link: '/blog', keywords: ['blog', 'artikelen', 'tips'] }
    ];

    commonPages.forEach(page => {
      if (page.keywords.some(keyword => keyword.includes(lowerQuery))) {
        results.push({
          type: 'page',
          name: page.name,
          link: page.link,
          description: `Ga naar ${page.name}`
        });
      }
    });

    setSearchResults(results.slice(0, 10)); // Limit to 10 results
  };

  return (
    <>
      <MetaTags
        title="Pagina niet gevonden - 404 | StayCool Airco"
        description="De pagina die u zoekt bestaat niet. Zoek naar onze producten of neem contact met ons op."
        canonicalUrl="https://staycoolairco.nl/404"
        noindex={true}
      />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, de pagina die u zoekt bestaat niet of is verplaatst.
          </p>

          {/* Search Box */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Zoek naar producten, locaties of informatie..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-4 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">Zoekresultaten:</h3>
                <ul className="space-y-2">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      <Link
                        to={result.link}
                        className="block p-2 hover:bg-gray-50 rounded transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{result.name}</p>
                            <p className="text-sm text-gray-600">{result.description}</p>
                          </div>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {result.type === 'product' ? 'Product' : 
                             result.type === 'location' ? 'Locatie' :
                             result.type === 'brand' ? 'Merk' : 'Pagina'}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link
              to="/"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5" />
              Naar homepage
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Contact opnemen
            </Link>
          </div>

          {/* Popular Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Populaire pagina's:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/products" className="text-blue-600 hover:underline">
                Airco modellen
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/locaties/maastricht" className="text-blue-600 hover:underline">
                Airco Maastricht
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/locaties/heerlen" className="text-blue-600 hover:underline">
                Airco Heerlen
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/knowledge-base" className="text-blue-600 hover:underline">
                Kennisbank
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}