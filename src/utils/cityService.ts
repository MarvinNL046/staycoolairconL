export interface City {
  city: string;
  region: string;
  population: number;
  postal_codes: string;
}

export interface RegionStats {
  [key: string]: {
    gemeenten: number;
    inwoners: number;
  };
}

export const loadCities = async (): Promise<City[]> => {
  try {
    const response = await fetch('/src/data/service-areas.csv');
    const csvText = await response.text();
    
    const rows = csvText.split('\n').slice(1);
    const parsedCities = rows.map(row => {
      const [city, region, population, postal_codes] = row.split(',');
      return {
        city: city.trim(),
        region: region.trim(),
        population: parseInt(population.trim()),
        postal_codes: postal_codes.trim().replace(/"/g, '')
      };
    });

    // Sort cities by population in descending order
    return parsedCities.sort((a, b) => b.population - a.population);
  } catch (error) {
    console.error('Error loading cities:', error);
    return [];
  }
};

export const calculateRegionStats = (cities: City[]): RegionStats => {
  const stats: RegionStats = {
    'Noord-Limburg': { gemeenten: 0, inwoners: 0 },
    'Midden-Limburg': { gemeenten: 0, inwoners: 0 },
    'Zuid-Limburg': { gemeenten: 0, inwoners: 0 }
  };

  cities.forEach(city => {
    if (stats[city.region]) {
      stats[city.region].gemeenten += 1;
      stats[city.region].inwoners += city.population;
    }
  });

  return stats;
};