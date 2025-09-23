import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ComparisonItem {
  feature: string;
  product1: string | boolean | number;
  product2: string | boolean | number;
  unit?: string;
  highlight?: 'product1' | 'product2' | 'both';
}

export interface ComparisonProduct {
  name: string;
  image: string;
  price: string;
  link: string;
  pros: string[];
  cons: string[];
}

interface ComparisonTableProps {
  product1: ComparisonProduct;
  product2: ComparisonProduct;
  items: ComparisonItem[];
  title?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ product1, product2, items, title }) => {
  const renderValue = (value: string | boolean | number, unit?: string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-600 mx-auto" />
      );
    }
    return (
      <span className="text-gray-900 font-medium">
        {value}{unit ? ` ${unit}` : ''}
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{title}</h2>
      )}
      
      {/* Product Headers */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div></div>
        
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src={product1.image} alt={product1.name} className="w-full h-48 object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product1.name}</h3>
          <p className="text-lg font-semibold text-gray-700 mb-4">{product1.price}</p>
          <Link 
            to={product1.link} 
            className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
          >
            Vraag offerte aan
          </Link>
        </div>
        
        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src={product2.image} alt={product2.name} className="w-full h-48 object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product2.name}</h3>
          <p className="text-lg font-semibold text-gray-700 mb-4">{product2.price}</p>
          <Link 
            to={product2.link} 
            className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
          >
            Vraag offerte aan
          </Link>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Kenmerken</th>
              <th className="text-center px-6 py-4 text-sm font-semibold text-gray-900">{product1.name}</th>
              <th className="text-center px-6 py-4 text-sm font-semibold text-gray-900">{product2.name}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{item.feature}</td>
                <td className={`px-6 py-4 text-center ${item.highlight === 'product1' || item.highlight === 'both' ? 'bg-green-50' : ''}`}>
                  {renderValue(item.product1, item.unit)}
                </td>
                <td className={`px-6 py-4 text-center ${item.highlight === 'product2' || item.highlight === 'both' ? 'bg-green-50' : ''}`}>
                  {renderValue(item.product2, item.unit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pros and Cons */}
      <div className="grid grid-cols-2 gap-8 mt-12">
        {/* Product 1 Pros/Cons */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">{product1.name} - Voor & Tegen</h4>
          
          <div className="mb-4">
            <h5 className="font-semibold text-green-600 mb-2">Voordelen</h5>
            <ul className="space-y-1">
              {product1.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-red-600 mb-2">Nadelen</h5>
            <ul className="space-y-1">
              {product1.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product 2 Pros/Cons */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">{product2.name} - Voor & Tegen</h4>
          
          <div className="mb-4">
            <h5 className="font-semibold text-green-600 mb-2">Voordelen</h5>
            <ul className="space-y-1">
              {product2.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-red-600 mb-2">Nadelen</h5>
            <ul className="space-y-1">
              {product2.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 rounded-lg p-8 mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Hulp nodig bij het kiezen?</h3>
        <p className="text-gray-700 mb-6">
          Onze experts helpen u graag bij het kiezen van de beste airco voor uw situatie.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="tel:0462021430" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Bel direct: 046 202 1430
          </a>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-blue-600 inline-flex items-center"
          >
            Gratis adviesgesprek <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;