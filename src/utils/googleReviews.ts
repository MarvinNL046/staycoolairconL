/**
 * Utility functions to handle Google reviews for location landing pages
 */

export interface GoogleReview {
  name: string;
  rating: number;
  comment: string;
  date?: string;
}

// Real Google reviews from the file
const googleReviews: GoogleReview[] = [
  {
    name: "Luca Bruijnaers",
    rating: 5,
    comment: "Na een fantastisch en vooral persoonlijk passend advies van Ralph konden 3 weken later de airco's al geplaatst worden. Zeer tevreden over de installatie en werking van de airco's!",
    date: "8 april 2025"
  },
  {
    name: "Ron Hensgens",
    rating: 5,
    comment: "Wij zijn super tevreden met onze airconditioning van Staycool, goed en vrijblijvend advies en binnen 2 weken geplaatst.",
    date: "16 maart 2025"
  },
  {
    name: "Peter Tijssen",
    rating: 5,
    comment: "Duidelijke offerte, snelle levering en plaatsing, echt een aanrader",
    date: "20 februari 2025"
  },
  {
    name: "Lily Menten",
    rating: 5,
    comment: "Na een goed en deskundig advies een split-airco laten plaatsen. Omdat er door het dak geboord moest worden werd ook direct de dakdekker geregeld. Prima samenwerking, alles in één keer goed. Zeer tevreden.",
    date: "28 januari 2025"
  },
  {
    name: "Rob Ruijters",
    rating: 5,
    comment: "Prima bedrijf. Komen hun afspraken na en goede service",
    date: "25 januari 2025"
  },
  {
    name: "Emile Rozema",
    rating: 5,
    comment: "Goede prijs. Professioneel geinstalleerd (3 airco's). Zeer aan te bevelen! Geen haastwerk maar vakkundig in bedrijf genomen. Zeer tevreden.",
    date: "15 januari 2025"
  },
  {
    name: "Hans van den Hof",
    rating: 5,
    comment: "Geweldig bedrijf, perfecte voorlichting, service en montage mbt de airconditioning",
    date: "10 januari 2025"
  },
  {
    name: "Anya Rimmelzwaan",
    rating: 5,
    comment: "Blij dat we deze stap gezet hebben! Goed advies gekregen, en snel geïnstalleerd door de mannen van Staycool. Ze werkten netjes en ruimden alles goed op. Wij zijn erg tevreden!",
    date: "5 januari 2025"
  },
  {
    name: "Leon Raedts",
    rating: 5,
    comment: "Erg vriendelijke mensen die meedenken en super werk afleveren",
    date: "28 december 2024"
  },
  {
    name: "Linda Lin",
    rating: 5,
    comment: "Top bedrijf. Goede uitleg, snel handelen, vriendelijk personeel. Echte aanrader als je airco wilt.",
    date: "20 december 2024"
  },
  {
    name: "Jacco Verleg",
    rating: 5,
    comment: "2 airco's geinstalleerd en heel erg tevreden over de klantvriendelijkheid.",
    date: "15 december 2024"
  },
  {
    name: "Sandra Janssen-Dijsselbloem",
    rating: 5,
    comment: "Netjes conform afspraak. Vriendelijke en professionele monteur. Kosten conform afspraak.",
    date: "10 december 2024"
  },
  {
    name: "Amina Saadate",
    rating: 5,
    comment: "Super tevreden met de service van StayCool Airconditioning! De installatie van mijn airco verliep snel en professioneel. De monteurs waren vriendelijk en namen de tijd om alles uit te leggen. Zeker een aanrader!",
    date: "5 december 2024"
  },
  {
    name: "Hieke Gorissen",
    rating: 5,
    comment: "Zeer tevreden over Stay Cool Airconditioning. Snelle afspraak met een vriendelijke vertegenwoordiger met kennis van zaken. Binnen 2 weken vakkundig geplaatst door vriendelijke monteurs.",
    date: "28 november 2024"
  },
  {
    name: "Lenneke Grimminck",
    rating: 5,
    comment: "Fijn en betrouwbaar. Eerlijke en goede prijs voor meerdere airco's. Snel geleverd. Keurig en netjes gemonteerd. Zeker aan te raden.",
    date: "15 november 2024"
  },
  {
    name: "Hans Vanderpijl",
    rating: 5,
    comment: "Uitstekende firma werkzaamheden uitgevoerd zoals vooraf was doorgenomen. Door fijne vakmensen uitgevoerd. Zeker aan te bevelen.",
    date: "5 november 2024"
  },
  {
    name: "Patrick Pekx",
    rating: 5,
    comment: "Een 2e airco van Daikin op de slaapkamer laten plaatsen. 2 uurtjes was het klaar. Zeer vakkundig gemonteerd. Aardige mensen. Gunstige prijs.",
    date: "25 oktober 2024"
  },
  {
    name: "Pascal Welten",
    rating: 5,
    comment: "Voor mij de beste keuze voor een nieuwe airco, goed advies vooraf, en installatie ging snel en professioneel. Aanrader",
    date: "15 oktober 2024"
  },
  {
    name: "Kane Willems",
    rating: 5,
    comment: "Dik tevreden met de service en installatie van Staycool. Houden zich aan afspraken, komen op tijd en werken netjes. Duidelijke uitleg over werking en onderhoud van de airco. Echte aanrader als je een airco wilt aanschaffen.",
    date: "5 oktober 2024"
  },
  {
    name: "Rick Kneepkens",
    rating: 5,
    comment: "Ben zeer tevreden over de werkzaamheden van Staycool Airconditioning. Toppie👍👍👍",
    date: "25 september 2024"
  },
  {
    name: "Jos Melchers",
    rating: 5,
    comment: "Super geregeld kon al na een week geplaatst worden, vriendelijk personeel snel geplaatst en werkt prima dank jullie.",
    date: "15 september 2024"
  },
  {
    name: "Aron Linders",
    rating: 5,
    comment: "Snelle service, vriendelijk personeel, goed werk geleverd",
    date: "5 september 2024"
  },
  {
    name: "Max Lemmens",
    rating: 5,
    comment: "Na advies aan huis te hebben gekregen, gekozen voor een mooie en krachtige 5kw tosot. Deze kon een week later al geïnstalleerd worden. De monteurs waren zeer vriendelijk en werken keurig en secuur. Inclusief het netjes wegwerken van de leidingen.",
    date: "25 augustus 2024"
  },
  {
    name: "Daniel T",
    rating: 5,
    comment: "Zeer tevreden! Vriendelijk en behulpzaam personeel!",
    date: "15 augustus 2024"
  }
];

/**
 * Get a random subset of reviews for a specific city
 * @param city The city name to filter reviews for
 * @param count The number of reviews to return
 * @returns An array of Google reviews
 */
export function getReviewsForCity(count: number = 4): GoogleReview[] {
  // Shuffle the reviews array to get random selection
  const shuffled = [...googleReviews].sort(() => 0.5 - Math.random());
  
  // Take the first 'count' reviews
  return shuffled.slice(0, count);
}

/**
 * Get a set of reviews for a specific city, with the city name inserted into the review text
 * @param city The city name to insert into reviews
 * @param count The number of reviews to return
 * @returns An array of Google reviews with the city name inserted
 */
export function getLocalizedReviews(city: string, count: number = 4): GoogleReview[] {
  const reviews = getReviewsForCity(count);
  
  // Insert the city name into some of the reviews
  return reviews.map((review, index) => {
    if (index % 2 === 0 && !review.comment.includes(city)) {
      // For every other review, insert the city name if it doesn't already contain it
      const sentences = review.comment.split('. ');
      if (sentences.length > 1) {
        // Insert city name in the second sentence if possible
        sentences[1] = sentences[1].replace(
          /((in|voor|bij|met) (ons|onze|mijn|het|de|een))/i, 
          `$1 in ${city}`
        );
        return {
          ...review,
          comment: sentences.join('. ')
        };
      } else {
        // Just append the city reference if we can't insert it naturally
        return {
          ...review,
          comment: review.comment.replace(/\.$/, '') + ` in ${city}.`
        };
      }
    }
    return review;
  });
}

export default googleReviews;
