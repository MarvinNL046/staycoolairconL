/**
 * Utility to retrieve Unsplash city images for location landing pages
 */

interface UnsplashImage {
  city: string;
  url: string;
  photographer: string;
  photographerUrl: string;
}

// Collection of Unsplash images for Dutch cities with proper attribution
// Using verified working image URLs
const cityImages: UnsplashImage[] = [
  // Maastricht - Night cityscape with river
  {
    city: "maastricht",
    url: "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Dimitry Anikin",
    photographerUrl: "https://unsplash.com/@anikinearthwalker"
  },
  // Amsterdam - Canal houses (for Roermond)
  {
    city: "roermond",
    url: "https://images.unsplash.com/photo-1584003564911-a5ccc52777cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Miltiadis Fragkidis",
    photographerUrl: "https://unsplash.com/@_miltiadis_"
  },
  // Utrecht - Dutch architecture (for Heerlen)
  {
    city: "heerlen",
    url: "https://images.unsplash.com/photo-1573443498483-d22a3b6ffbe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Adam Markon",
    photographerUrl: "https://unsplash.com/@arcticclick"
  },
  // Netherlands town square (for Venlo)
  {
    city: "venlo",
    url: "https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Diederick Bakker",
    photographerUrl: "https://unsplash.com/@diederickbakker"
  },
  // Dutch street scene (for Sittard)
  {
    city: "sittard",
    url: "https://images.unsplash.com/photo-1558699418-6914ffedaf2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Rik van der Kroon",
    photographerUrl: "https://unsplash.com/@rikspets"
  },
  // Dutch countryside (for Weert)
  {
    city: "weert",
    url: "https://images.unsplash.com/photo-1612870948219-81885cb6649f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Adrien Olichon",
    photographerUrl: "https://unsplash.com/@adrienolichon"
  },
  // Dutch industrial area (for Geleen)
  {
    city: "geleen",
    url: "https://images.unsplash.com/photo-1562280963-8a5475740a10?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Bram van Wijck",
    photographerUrl: "https://unsplash.com/@bramvanwijck"
  },
  // Dutch riverside (for Stein)
  {
    city: "stein",
    url: "https://images.unsplash.com/photo-1600411839058-ccbee72b334e?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Daniel Seßler",
    photographerUrl: "https://unsplash.com/@danielsessler"
  },
  // Dutch countryside village (for Beek)
  {
    city: "beek",
    url: "https://images.unsplash.com/photo-1602425075097-2e5804e61484?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Jaap Kamphuis",
    photographerUrl: "https://unsplash.com/@jaap"
  },
  // Dutch hills (for Landgraaf)
  {
    city: "landgraaf",
    url: "https://images.unsplash.com/photo-1583743089176-12c46361e129?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Raimond Klavins",
    photographerUrl: "https://unsplash.com/@raimondklavins"
  },
  // Default Dutch cityscape
  {
    city: "default",
    url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    photographer: "Yeo Khee",
    photographerUrl: "https://unsplash.com/@yokeboy"
  }
];

/**
 * Get an Unsplash image URL for a specific city
 * @param city The city name to get an image for
 * @returns The image URL, photographer name, and photographer URL
 */
export function getUnsplashImageForCity(city: string): UnsplashImage {
  const normalizedCity = city.toLowerCase().trim();
  const image = cityImages.find(img => img.city === normalizedCity);
  
  // Return the specific city image if found, otherwise return the default
  return image || cityImages.find(img => img.city === "default")!;
}

export default cityImages;
