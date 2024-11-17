import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { AlertTriangle } from 'lucide-react';

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Er is iets misgegaan
        </h1>
        <p className="text-gray-600 text-center mb-6">
          {error.message}
        </p>
        <div className="flex justify-center">
          <button
            onClick={resetErrorBoundary}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Probeer opnieuw
          </button>
        </div>
      </div>
    </div>
  );
}