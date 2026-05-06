// Quick verification: confirm djb2 picks different variants for different cities.
// Run: node scripts/verify-djb2-variants.mjs

function djb2Hash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return hash >>> 0;
}

const cities = [
  'maastricht', 'venlo',
  'sittard', 'heerlen', 'roermond', 'weert', 'kerkrade', 'venray', 'horst', 'landgraaf', 'geleen',
  'brunssum', 'eijsden-margraten', 'stein', 'meerssen', 'hoensbroek', 'tegelen', 'gennep',
  'valkenburg', 'echt', 'beek', 'nuth', 'gulpen-wittem', 'voerendaal', 'simpelveld',
  'vaals', 'nederweert', 'maasbracht', 'panningen',
];

console.log('city                  | seed    | intro | services | practical');
console.log('----------------------|---------|-------|----------|----------');
for (const slug of cities) {
  const seed = djb2Hash(slug);
  const intro = seed % 3;
  const services = (seed + 1) % 3;
  const practical = (seed + 2) % 3;
  console.log(
    `${slug.padEnd(22)}|${String(seed).padStart(9)}|${String(intro).padStart(7)}|${String(services).padStart(10)}|${String(practical).padStart(10)}`,
  );
}

// Distribution check
const distribution = { 0: 0, 1: 0, 2: 0 };
for (const slug of cities) distribution[djb2Hash(slug) % 3]++;
console.log(`\nIntro variant distribution: variant 0 = ${distribution[0]}, variant 1 = ${distribution[1]}, variant 2 = ${distribution[2]}`);
