import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostPreview {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  readingTime: string;
  category: string;
}

const blogPosts: BlogPostPreview[] = [
  {
    slug: 'airco-specialist-limburg',
    title: 'Airco specialist Limburg – Jouw gids naar koele comfort',
    description: 'In Limburg zijn diverse erkende airco installateurs actief, maar een specialist als StayCool Airconditioning combineert vakkennis met persoonlijke service, scherpe prijzen en snelle plaatsing.',
    date: '11 mei 2025',
    imageUrl: '/images/blog/Airco specialist Limburg.png',
    readingTime: '7 min',
    category: 'Advies'
  },
  {
    slug: 'airco-offerte-limburg',
    title: 'Airco offerte Limburg – Wat je moet weten in 2025',
    description: 'Een airco inclusief installatie kost gemiddeld tussen de €1.500 en €3.000. De exacte prijs hangt af van het merk, vermogen en installatiecomplexiteit. Vraag altijd meerdere offertes aan.',
    date: '10 mei 2025',
    imageUrl: '/images/blog/airco-offerte-limburg-staycool.png',
    readingTime: '6 min',
    category: 'Prijzen'
  },
  {
    slug: 'airco-onderhoud-limburg-belangrijk',
    title: 'Waarom regelmatig airco onderhoud in Limburg essentieel is – en wat het jou oplevert',
    description: 'Een goed onderhouden airco werkt zuiniger, gaat langer mee en voorkomt storingen. Vooral in Limburg, waar de seizoenswisselingen sterk zijn, is jaarlijks onderhoud cruciaal voor een betrouwbaar binnenklimaat.',
    date: '9 mei 2025',
    imageUrl: '/images/blog/onderhoud-advies-staycoolairco.png',
    readingTime: '5 min',
    category: 'Onderhoud'
  },
  {
    slug: 'airco-installateur-limburg-kiezen',
    title: 'Hoe kies je de juiste airco installateur in Limburg?',
    description: 'De juiste installateur bepaalt het verschil tussen jarenlang comfort of een hoop frustratie. In Limburg zijn veel aanbieders, maar waar let je op?',
    date: '8 mei 2025',
    imageUrl: '/images/blog/Een StayCool technicus installeert een airco buitendeel in Limburg.png',
    readingTime: '4 min',
    category: 'Installatie'
  }
];

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {blogPosts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full hover:shadow-lg group-hover:translate-y-[-4px]">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime} leestijd</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">
                {post.description}
              </p>
              <div className="mt-4 text-blue-600 font-medium inline-flex items-center">
                Lees meer
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
