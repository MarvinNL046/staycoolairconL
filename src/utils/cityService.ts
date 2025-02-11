import { loadCSV } from './csvLoader';

export interface City {
  city: string;
  region: string;
  population: number;
  postal_codes: string;
}

interface CityRow {
  city: string;
  region: string;
  population: string;
  postal_codes: string;
}

interface RegionStats {
  totalCities: number;
  totalPopulation: number;
  cities: City[];
}

// Initialize cities array
let cities: City[] = [];

// Load cities data
export async function loadCitiesFromCSV(): Promise<City[]> {
  try {
    const citiesData = await loadCSV('/service-areas.csv') as CityRow[];
    cities = citiesData.map(row => ({
      city: row.city,
      region: row.region,
      population: parseInt(row.population),
      postal_codes: row.postal_codes
    }));
    return cities;
  } catch (error) {
    console.error('Error loading cities:', error);
    throw error;
  }
}

// Initialize function for backward compatibility
export async function initializeCities(): Promise<void> {
  await loadCitiesFromCSV();
}

// Initialize cities on module load
loadCitiesFromCSV().catch(console.error);

// Calculate region statistics
export function calculateRegionStats(cities: City[]): { [key: string]: RegionStats } {
  const stats: { [key: string]: RegionStats } = {};

  cities.forEach(city => {
    if (!stats[city.region]) {
      stats[city.region] = {
        totalCities: 0,
        totalPopulation: 0,
        cities: []
      };
    }

    stats[city.region].totalCities++;
    stats[city.region].totalPopulation += city.population;
    stats[city.region].cities.push(city);
  });

  return stats;
}

export function getCityData(cityName: string): City | undefined {
  return cities.find(
    city => city.city.toLowerCase() === cityName.toLowerCase()
  );
}

export function getAllCities(): City[] {
  return cities;
}

export function getCitiesByRegion(region: string): City[] {
  return cities.filter(
    city => city.region.toLowerCase() === region.toLowerCase()
  );
}

// Create URL-friendly slug from city name
export function createCitySlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

// Convert URL-friendly slug back to proper city name
export function formatCityName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
