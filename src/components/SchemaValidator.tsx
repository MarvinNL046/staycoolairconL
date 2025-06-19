import React, { useState, useEffect } from 'react';
import { validator } from '../utils/schemaValidator';

interface SchemaValidatorProps {
  enabled?: boolean;
}

interface ValidationResult {
  element: Element;
  schema: any;
  result: any;
}

export default function SchemaValidator({ enabled = false }: SchemaValidatorProps) {
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const validatePageSchemas = () => {
      const scriptElements = document.querySelectorAll('script[type="application/ld+json"]');
      const results: ValidationResult[] = [];

      scriptElements.forEach((element) => {
        try {
          const schema = JSON.parse(element.textContent || '');
          const validationResult = validator.validateSchema(schema);
          results.push({
            element,
            schema,
            result: validationResult
          });
        } catch (error) {
          console.warn('Invalid JSON-LD found:', error);
        }
      });

      setValidationResults(results);
    };

    // Run validation after component mount
    const timer = setTimeout(validatePageSchemas, 1000);

    return () => clearTimeout(timer);
  }, [enabled]);

  if (!enabled || validationResults.length === 0) {
    return null;
  }

  const totalSchemas = validationResults.length;
  const validSchemas = validationResults.filter(r => r.result.isValid).length;
  const totalWarnings = validationResults.reduce((acc, r) => acc + r.result.warnings.length, 0);
  const totalErrors = validationResults.reduce((acc, r) => acc + r.result.errors.length, 0);

  return (
    <>
      {/* Floating validation button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`px-4 py-2 rounded-lg font-medium text-white shadow-lg transition-all ${
            totalErrors > 0 
              ? 'bg-red-500 hover:bg-red-600' 
              : totalWarnings > 0 
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          Schema: {validSchemas}/{totalSchemas}
          {totalErrors > 0 && ` (${totalErrors} errors)`}
          {totalWarnings > 0 && ` (${totalWarnings} warnings)`}
        </button>
      </div>

      {/* Validation panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-hidden shadow-xl">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Schema Validation Results</h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {totalSchemas} schemas found • {validSchemas} valid • {totalErrors} errors • {totalWarnings} warnings
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {validationResults.map((result, index) => (
                <div key={index} className="mb-6 p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">
                      {result.result.schemaType} Schema
                    </h3>
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      result.result.isValid 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {result.result.isValid ? 'Valid' : 'Invalid'}
                    </span>
                  </div>

                  {result.result.errors.length > 0 && (
                    <div className="mb-3">
                      <h4 className="font-medium text-red-600 mb-1">Errors:</h4>
                      <ul className="list-disc list-inside text-sm text-red-600">
                        {result.result.errors.map((error: string, i: number) => (
                          <li key={i}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {result.result.warnings.length > 0 && (
                    <div className="mb-3">
                      <h4 className="font-medium text-yellow-600 mb-1">Warnings:</h4>
                      <ul className="list-disc list-inside text-sm text-yellow-600">
                        {result.result.warnings.map((warning: string, i: number) => (
                          <li key={i}>{warning}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                      View Schema JSON
                    </summary>
                    <pre className="mt-2 p-3 bg-gray-50 rounded text-xs overflow-auto max-h-40">
                      {JSON.stringify(result.schema, null, 2)}
                    </pre>
                  </details>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Last validated: {new Date().toLocaleTimeString()}
                </div>
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Test in Google Rich Results
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Development-only HOC to enable schema validation
export function withSchemaValidation<P extends object>(Component: React.ComponentType<P>) {
  return function SchemaValidatedComponent(props: P) {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return (
      <>
        <Component {...props} />
        {isDevelopment && <SchemaValidator enabled={true} />}
      </>
    );
  };
}