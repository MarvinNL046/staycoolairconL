import { Loader } from '@googlemaps/js-api-loader';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
  console.error('Google Maps API key is not set in environment variables');
}

let mapsLoader: Loader | null = null;

export const initGoogleMaps = async (): Promise<typeof google.maps> => {
  if (!mapsLoader) {
    mapsLoader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places'],
      language: 'nl', // Dutch language for the interface
      region: 'NL', // Netherlands region
    });
  }

  try {
    return await mapsLoader.load();
  } catch (error) {
    console.error('Error loading Google Maps:', error);
    throw new Error('Failed to load Google Maps');
  }
};

export const createMap = async (
  element: HTMLElement,
  options: google.maps.MapOptions = {}
): Promise<google.maps.Map> => {
  const maps = await initGoogleMaps();
  
  const defaultOptions: google.maps.MapOptions = {
    zoom: 8,
    center: { lat: 51.2194, lng: 6.1565 }, // Centered on Limburg
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
  };

  return new maps.Map(element, { ...defaultOptions, ...options });
};

export const addMarker = (
  map: google.maps.Map,
  position: google.maps.LatLngLiteral,
  options: google.maps.MarkerOptions = {}
): google.maps.Marker => {
  return new google.maps.Marker({
    map,
    position,
    ...options,
  });
};
