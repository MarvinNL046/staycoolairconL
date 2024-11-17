import React from 'react';
import { Star } from 'lucide-react';

export default function GoogleReviews() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img 
              src="/google-logo.svg" 
              alt="Google" 
              className="h-8"
            />
            <h2 className="text-xl font-semibold text-gray-900">
              Beoordelingen
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">4.7</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-5 w-5 ${star <= 4.7 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <div className="text-gray-600">(159)</div>
          </div>
          <a
            href="https://www.google.com/search?q=staycool+airco&oq=staycool+airco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Beoordeel ons op Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    author: 'Rob Ruijters',
    date: '2 dagen geleden',
    rating: 5,
    text: 'Prima bedrijf. Komen hun afspraken na en goede service'
  },
  {
    author: 'Hans van den Hof',
    date: '7 dagen geleden',
    rating: 4,
    text: 'Geweldig bedrijf, perfecte voorlichting, service en montage mbt de airconditioning.'
  },
  {
    author: 'Emile Rozema',
    date: '7 dagen geleden',
    rating: 5,
    text: 'Goede prijs. Professioneel geïnstalleerd (3 airco\'s). Zeer aan te bevelen'
  }
];