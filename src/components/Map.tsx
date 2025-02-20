import { useEffect, useRef, useState } from 'react';
import { createMap, addMarker } from '../utils/maps';

interface MapProps {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  markers?: Array<{
    position: google.maps.LatLngLiteral;
    title?: string;
  }>;
  className?: string;
}

export default function Map({ 
  center,
  zoom = 8,
  markers = [],
  className = 'w-full h-[400px]'
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = async () => {
      try {
        const map = await createMap(mapRef.current!, {
          center: center || { lat: 51.2194, lng: 6.1565 }, // Default to Limburg
          zoom,
        });

        setMapInstance(map);

        // Add markers
        markers.forEach(marker => {
          addMarker(map, marker.position, {
            title: marker.title,
          });
        });
      } catch (err) {
        console.error('Error initializing map:', err);
        setError('Er is een fout opgetreden bij het laden van de kaart.');
      }
    };

    initMap();

    // Cleanup
    return () => {
      if (mapInstance) {
        // Remove event listeners and cleanup if needed
      }
    };
  }, [center, zoom, markers]);

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef}
      className={className}
      style={{ minHeight: '300px' }}
    />
  );
}
