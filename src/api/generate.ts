import type { LocationContent } from '../types/location';

export async function generateLocationContent(
  city: string,
  region: string,
  population: number,
  postalCodes: string
): Promise<LocationContent> {
  try {
    const response = await fetch('/api/location-content/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city,
        region,
        population,
        postalCodes,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}
