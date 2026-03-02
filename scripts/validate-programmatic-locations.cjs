const fs = require('fs');
const path = require('path');

function readLocationArray() {
  const sourcePath = path.join(process.cwd(), 'src/data/programmaticLocations.ts');
  const source = fs.readFileSync(sourcePath, 'utf8');

  const match = source.match(/export const programmaticLocations:[\s\S]*?=\s*(\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error('Kon programmaticLocations array niet vinden.');
  }

  // eslint-disable-next-line no-new-func
  return Function(`return ${match[1]};`)();
}

function tokenize(input) {
  return new Set(
    input
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 4)
  );
}

function jaccardSimilarity(a, b) {
  const intersection = new Set([...a].filter((item) => b.has(item)));
  const union = new Set([...a, ...b]);
  return union.size === 0 ? 0 : intersection.size / union.size;
}

function wordCount(input) {
  return input.trim().split(/\s+/).filter(Boolean).length;
}

function buildCorpus(location) {
  const fields = [
    location.city,
    location.region,
    location.housingMix,
    location.localConstraint,
    ...location.neighborhoods,
    ...location.landmarks,
  ];
  return fields.join(' ');
}

function validate() {
  const locations = readLocationArray();
  const issues = [];

  for (const location of locations) {
    const required = [
      'slug',
      'city',
      'region',
      'postalCodes',
      'populationCount',
      'installationCount',
      'neighborhoods',
      'landmarks',
      'housingMix',
      'localConstraint',
    ];

    for (const key of required) {
      if (location[key] === undefined || location[key] === null || location[key] === '') {
        issues.push(`[${location.slug || 'unknown'}] Ontbrekend veld: ${key}`);
      }
    }

    const corpus = buildCorpus(location);
    if (wordCount(corpus) < 12) {
      issues.push(`[${location.slug}] Te weinig lokale inhoud (<12 woorden basiscontext).`);
    }

    if (!Array.isArray(location.neighborhoods) || location.neighborhoods.length < 2) {
      issues.push(`[${location.slug}] Minimaal 2 neighborhoods vereist.`);
    }

    if (!Array.isArray(location.landmarks) || location.landmarks.length < 2) {
      issues.push(`[${location.slug}] Minimaal 2 landmarks vereist.`);
    }
  }

  const corpora = locations.map((location) => ({
    slug: location.slug,
    tokenSet: tokenize(buildCorpus(location)),
  }));

  for (let i = 0; i < corpora.length; i += 1) {
    for (let j = i + 1; j < corpora.length; j += 1) {
      const similarity = jaccardSimilarity(corpora[i].tokenSet, corpora[j].tokenSet);
      if (similarity > 0.82) {
        issues.push(
          `[${corpora[i].slug} <> ${corpora[j].slug}] Te hoge overlap in lokale context (${similarity.toFixed(2)}).`
        );
      }
    }
  }

  if (issues.length > 0) {
    console.error('Programmatic location quality check failed:');
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exit(1);
  }

  console.log(`Programmatic location quality check passed for ${locations.length} locaties.`);
}

validate();
