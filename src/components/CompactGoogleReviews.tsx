import React from 'react';
import { Star } from 'lucide-react';

export default function CompactGoogleReviews() {
  return (
    <a
      href="https://www.google.com/search?q=staycool+airco&oq=staycool+airco"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-3 hover:bg-white transition-colors duration-200 h-[42px]"
    >
      <img 
        src="/google-logo.svg" 
        alt="Google" 
        width={20}
        height={20}
        className="h-5 w-5"
        loading="eager" // Load immediately since this is above the fold
      />
      <div className="flex items-center gap-2">
        <span className="font-semibold min-w-[24px]">4.7</span>
        <div className="flex w-[100px] justify-between">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              className={`h-4 w-4 flex-shrink-0 ${star <= 4.7 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 min-w-[40px]">(159)</span>
      </div>
    </a>
  );
}
