import React from 'react';
import { Snowflake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-white">
            <Snowflake className="h-6 w-6 mr-3 animate-pulse" />
            <span className="text-lg font-medium">
              Winter Aanbieding: Tot €250,- korting op een nieuwe airco!
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-2 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300"
          >
            Vraag nu aan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}