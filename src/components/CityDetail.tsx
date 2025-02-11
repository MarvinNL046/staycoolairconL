import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LocationContent } from '../types/location';
import { Helmet } from 'react-helmet-async';
import { getCityData, initializeCities } from '../utils/cityService';
import { formatDate } from '../utils/helpers';
import { supabase } from '../utils/supabase';
import Breadcrumbs from '../components/Breadcrumbs';
import LoadingSkeleton from './LoadingSkeleton';

interface ApiResponse {
  data?: LocationContent;
  error?: string;
}

export default function CityDetail() {
  const { city } = useParams<{ city: string }>();
  const [content, setContent] = useState<LocationContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [generationAttempt, setGenerationAttempt] = useState(0);

  useEffect(() => {
    async function fetchContent() {
      if (!city) return;
      
      try {
        // Convert URL-friendly format back to proper city name
        const formattedCity = city
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        // Wait for cities to be loaded
        await initializeCities();
        
        // Get city data from our service
        const cityData = getCityData(formattedCity);
        if (!cityData) {
          setError('Stad niet gevonden');
          setLoading(false);
          return;
        }

        try {
          const params = new URLSearchParams({
            city: cityData.city,
            region: cityData.region,
            population: cityData.population.toString(),
            postalCodes: cityData.postal_codes
          });

          // Fetch content from Supabase
          const { data: existingContent, error: fetchError } = await supabase
            .from('location_content')
            .select('*')
            .eq('city', cityData.city)
            .single();

          if (fetchError) {
            throw new Error('Failed to fetch content');
          }

          if (existingContent) {
            setContent(existingContent);
            setError(null);
          } else {
            setError('Content not found');
          }
        } catch (err) {
          console.error('Error generating content:', err);
          setError('Er is een fout opgetreden bij het genereren van de content. Probeer het opnieuw.');
        }

      } catch (err) {
        console.error('Error loading city data:', err);
        setError('Er is een fout opgetreden bij het laden van de stad. Probeer het opnieuw.');
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    fetchContent();
  }, [city, generationAttempt]);

  // Function to retry content generation
  const retryGeneration = () => {
    setGenerationAttempt(prev => prev + 1);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full mx-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-2xl font-semibold mb-2 text-red-600">Error</p>
              <p className="mb-4 text-gray-700">{error}</p>
              
              {/* Error Details */}
              <div className="mb-6 text-left bg-gray-50 p-4 rounded">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Details</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <span className="font-medium">Status:</span> {error.includes('niet gevonden') ? '404' : '500'}
                  </li>
                  <li>
                    <span className="font-medium">Type:</span> {
                      error.includes('niet gevonden') ? 'Not Found' :
                      error.includes('genereren') ? 'Generation Error' :
                      'Server Error'
                    }
                  </li>
                  <li>
                    <span className="font-medium">Tijd:</span> {new Date().toLocaleTimeString()}
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={retryGeneration}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Probeer opnieuw
                </button>
                <a
                  href="/contact"
                  className="block w-full px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  Neem contact op met support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.description} />
        <meta name="keywords" content={content.seo.keywords.join(', ')} />
      </Helmet>

      <div className="container mx-auto px-4 pt-32 pb-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Airco Installatie', path: '/airco-installatie' },
              { label: content.city }
            ]}
          />

          {/* Title and Introduction */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Airco Installatie {content.city}
            </h1>
            <div className="text-sm text-gray-600 mb-4">
              Geschreven door: {content.metadata?.written_by || 'StayCool Team'} | 
              Laatst bijgewerkt: {formatDate(content.metadata?.last_updated || content.last_updated)}
            </div>
            <p className="text-gray-600 mb-4">{content.content.intro}</p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Belangrijkste Punten</h2>
            <ul className="list-disc pl-6 space-y-2">
              {(content.content.keyTakeaways || []).map((point, index) => (
                <li key={index} className="text-gray-600">{point}</li>
              ))}
            </ul>
          </div>

          {/* Climate and Challenges */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Klimaat en Uitdagingen</h2>
            <p className="mb-4">{content.content.climate.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(content.content.climate.challenges || []).map((challenge, index) => (
                <li key={index} className="text-gray-600">{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Air Conditioning Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Airconditioning in {content.city}</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Voordelen</h3>
              <p>{content.content.aircoInfo.benefits}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Aanbevelingen</h3>
              <p>{content.content.aircoInfo.recommendations}</p>
            </div>
          </div>

          {/* Main Content Sections */}
          {(content.content.sections || []).map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{section.content}</p>

                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i} className="text-gray-600">{point}</li>
                    ))}
                  </ul>
                )}

                {/* Table */}
                {section.table && (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          {section.table.headers.map((header, i) => (
                            <th key={i} className="border border-gray-300 p-2 bg-gray-50">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} className="border border-gray-300 p-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Internal Links */}
                {section.internalLinks && section.internalLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {section.internalLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}

                {/* Images */}
                {section.images && section.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {section.images.map((image, i) => (
                      <img
                        key={i}
                        src={image.url}
                        alt={image.alt}
                        className="rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Expert Tips */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Expert Tips</h2>
            <div className="space-y-6">
              {(content.content.expertTips || []).map((tip, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600">{tip.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Veelgestelde Vragen</h2>
            <div className="space-y-6">
              {(content.content.faq || []).map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 space-y-4">
            <a
              href="https://afspraken.staycoolairco.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Direct online inplannen
            </a>
            <a
              href="/contact"
              className="block w-full text-center py-3 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
