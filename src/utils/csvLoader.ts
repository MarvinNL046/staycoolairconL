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

export function calculateRegionStats(cities: City[]) {
  const stats = {
    'Noord-Limburg': { count: 0, totalPopulation: 0 },
    'Midden-Limburg': { count: 0, totalPopulation: 0 },
    'Zuid-Limburg': { count: 0, totalPopulation: 0 }
  };

  cities.forEach(city => {
    if (stats[city.region as keyof typeof stats]) {
      stats[city.region as keyof typeof stats].count++;
      stats[city.region as keyof typeof stats].totalPopulation += city.population;
    }
  });

  return stats;
}
