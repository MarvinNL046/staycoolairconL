import Papa from 'papaparse';

export interface City {
  city: string;
  region: string;
  population: number;
  postal_codes: string;
}

export async function loadCitiesFromCSV(): Promise<City[]> {
  try {
    const response = await fetch('/service-areas.csv');
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          const cities = results.data as City[];
          // Sort by population (largest first)
          const sortedCities = cities.sort((a, b) => b.population - a.population);
          resolve(sortedCities);
        },
        error: (error: Error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error loading cities:', error);
    throw error;
  }
}

export interface RegionStats {
  'Noord-Limburg': { gemeenten: number; inwoners: number };
  'Midden-Limburg': { gemeenten: number; inwoners: number };
  'Zuid-Limburg': { gemeenten: number; inwoners: number };
}

export const calculateRegionStats = (cities: City[]): RegionStats => {
  const stats: RegionStats = {
    'Noord-Limburg': { gemeenten: 0, inwoners: 0 },
    'Midden-Limburg': { gemeenten: 0, inwoners: 0 },
    'Zuid-Limburg': { gemeenten: 0, inwoners: 0 }
  };

  cities.forEach(city => {
    if (stats[city.region as keyof RegionStats]) {
      stats[city.region as keyof RegionStats].gemeenten += 1;
      stats[city.region as keyof RegionStats].inwoners += city.population;
    }
  });

  return stats;
};