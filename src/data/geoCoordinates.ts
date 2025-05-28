// Geo-coördinaten database voor Limburgse steden
// Voor betere lokale SEO en Google Maps integratie

export interface GeoCoordinate {
  city: string;
  latitude: number;
  longitude: number;
  region: string;
}

export const limburgGeoCoordinates: GeoCoordinate[] = [
  // Zuid-Limburg
  { city: "Maastricht", latitude: 50.8514, longitude: 5.6910, region: "Zuid-Limburg" },
  { city: "Heerlen", latitude: 50.8884, longitude: 5.9795, region: "Zuid-Limburg" },
  { city: "Sittard", latitude: 51.0017, longitude: 5.8697, region: "Zuid-Limburg" },
  { city: "Kerkrade", latitude: 50.8660, longitude: 6.0706, region: "Zuid-Limburg" },
  { city: "Brunssum", latitude: 50.9467, longitude: 5.9706, region: "Zuid-Limburg" },
  { city: "Landgraaf", latitude: 50.8942, longitude: 6.0244, region: "Zuid-Limburg" },
  { city: "Geleen", latitude: 50.9742, longitude: 5.8294, region: "Zuid-Limburg" },
  { city: "Beek", latitude: 50.9406, longitude: 5.7975, region: "Zuid-Limburg" },
  { city: "Stein", latitude: 50.9692, longitude: 5.7661, region: "Zuid-Limburg" },
  { city: "Valkenburg", latitude: 50.8650, longitude: 5.8319, region: "Zuid-Limburg" },
  { city: "Meerssen", latitude: 50.8844, longitude: 5.7519, region: "Zuid-Limburg" },
  { city: "Hoensbroek", latitude: 50.9236, longitude: 5.9236, region: "Zuid-Limburg" },
  { city: "Vaals", latitude: 50.7708, longitude: 6.0178, region: "Zuid-Limburg" },
  { city: "Eijsden-Margraten", latitude: 50.7789, longitude: 5.7083, region: "Zuid-Limburg" },
  { city: "Eijsden", latitude: 50.7789, longitude: 5.7083, region: "Zuid-Limburg" },
  { city: "Margraten", latitude: 50.8208, longitude: 5.8208, region: "Zuid-Limburg" },
  { city: "Gulpen-Wittem", latitude: 50.8139, longitude: 5.8889, region: "Zuid-Limburg" },
  { city: "Gulpen", latitude: 50.8139, longitude: 5.8889, region: "Zuid-Limburg" },
  { city: "Wittem", latitude: 50.8083, longitude: 5.9194, region: "Zuid-Limburg" },
  { city: "Voerendaal", latitude: 50.8781, longitude: 5.9308, region: "Zuid-Limburg" },
  { city: "Simpelveld", latitude: 50.8344, longitude: 5.9822, region: "Zuid-Limburg" },
  { city: "Nuth", latitude: 50.9119, longitude: 5.8883, region: "Zuid-Limburg" },
  { city: "Schinnen", latitude: 50.9431, longitude: 5.8889, region: "Zuid-Limburg" },
  { city: "Onderbanken", latitude: 50.9672, longitude: 5.9597, region: "Zuid-Limburg" },
  
  // Noord-Limburg
  { city: "Venlo", latitude: 51.3704, longitude: 6.1724, region: "Noord-Limburg" },
  { city: "Venray", latitude: 51.5253, longitude: 5.9747, region: "Noord-Limburg" },
  { city: "Gennep", latitude: 51.6989, longitude: 5.9722, region: "Noord-Limburg" },
  { city: "Bergen", latitude: 51.6008, longitude: 6.0392, region: "Noord-Limburg" },
  { city: "Horst", latitude: 51.4544, longitude: 6.0517, region: "Noord-Limburg" },
  { city: "Peel en Maas", latitude: 51.3567, longitude: 6.0000, region: "Noord-Limburg" },
  { city: "Beesel", latitude: 51.2681, longitude: 6.0394, region: "Noord-Limburg" },
  { city: "Mook en Middelaar", latitude: 51.7528, longitude: 5.8808, region: "Noord-Limburg" },
  
  // Midden-Limburg
  { city: "Roermond", latitude: 51.1942, longitude: 5.9869, region: "Midden-Limburg" },
  { city: "Weert", latitude: 51.2517, longitude: 5.7067, region: "Midden-Limburg" },
  { city: "Echt", latitude: 51.1033, longitude: 5.8764, region: "Midden-Limburg" },
  { city: "Nederweert", latitude: 51.2856, longitude: 5.7497, region: "Midden-Limburg" },
  { city: "Maasbracht", latitude: 51.1447, longitude: 5.8892, region: "Midden-Limburg" },
  { city: "Panningen", latitude: 51.3267, longitude: 5.9783, region: "Midden-Limburg" },
  { city: "Leudal", latitude: 51.2506, longitude: 5.9008, region: "Midden-Limburg" },
  { city: "Maasgouw", latitude: 51.1672, longitude: 5.8833, region: "Midden-Limburg" },
  { city: "Roerdalen", latitude: 51.1458, longitude: 6.0008, region: "Midden-Limburg" },
  { city: "Echt-Susteren", latitude: 51.1033, longitude: 5.8764, region: "Midden-Limburg" }
];

// Functie om coördinaten op te halen voor een specifieke stad
export function getCoordinatesForCity(cityName: string): GeoCoordinate | undefined {
  return limburgGeoCoordinates.find(
    coord => coord.city.toLowerCase() === cityName.toLowerCase()
  );
}

// Functie om nabijgelegen steden te vinden binnen een bepaalde radius
export function getNearbyLocations(
  cityName: string, 
  maxDistanceKm: number = 15
): Array<{ city: string; distance: number; region: string }> {
  const sourceCity = getCoordinatesForCity(cityName);
  if (!sourceCity) return [];

  const nearbyLocations = limburgGeoCoordinates
    .filter(coord => coord.city.toLowerCase() !== cityName.toLowerCase())
    .map(coord => {
      const distance = calculateDistance(
        sourceCity.latitude,
        sourceCity.longitude,
        coord.latitude,
        coord.longitude
      );
      return {
        city: coord.city,
        distance: Math.round(distance),
        region: coord.region
      };
    })
    .filter(location => location.distance <= maxDistanceKm)
    .sort((a, b) => a.distance - b.distance);

  return nearbyLocations;
}

// Haversine formule voor het berekenen van afstand tussen twee coördinaten
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius van de aarde in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Export default voor gemakkelijke import
export default limburgGeoCoordinates;