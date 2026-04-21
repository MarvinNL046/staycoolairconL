const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

const requiredLinksByFile = {
  'src/components/Navbar.tsx': [
    '/airco-laten-plaatsen-limburg',
    '/airco-installatie-limburg',
    '/airco-offerte-aanvragen-limburg',
    '/airco-buitenunit-plaatsen-regels-limburg',
    '/stille-airco-buitenunit-limburg',
  ],
  'src/data/moneyPageLinks.ts': [
    '/airco-laten-plaatsen-limburg',
    '/airco-installatie-limburg',
    '/airco-kopen-en-laten-installeren-limburg',
    '/airco-offerte-aanvragen-limburg',
    '/airco-installatie-prijs-limburg',
    '/airco-onderhoud-limburg',
    '/airco-reparatie-limburg',
    '/airco-buitenunit-plaatsen-regels-limburg',
    '/stille-airco-buitenunit-limburg',
    '/airco-vergunning-nodig-limburg',
  ],
  'src/components/Footer.tsx': [
    'footerMoneyPageLinks.map',
  ],
  'src/pages/Home.tsx': [
    'MoneyPageLinks',
    'primaryMoneyPageLinks',
  ],
  'src/components/ServicesOptimized.tsx': [
    '/airco-installatie-limburg',
    '/airco-onderhoud-limburg',
    '/airco-kopen-en-laten-installeren-limburg',
  ],
  'src/pages/landing/AircoInstallatiePrijs.tsx': [
    '/airco-installatie-limburg',
    '/airco-laten-installeren-kosten-limburg',
    '/airco-offerte-aanvragen-limburg',
  ],
  'src/pages/landing/AircoOfferte.tsx': [
    '/airco-installatie-limburg',
    '/airco-installatie-prijs-limburg',
    '/airco-laten-plaatsen-limburg',
  ],
  'src/pages/landing/SplitAircoInstallatie.tsx': [
    '/airco-installatie-prijs-limburg',
    '/multi-split-airco-installatie-limburg',
    '/single-split-airco-installatie-limburg',
  ],
  'src/pages/landing/MultiSplitAircoInstallatie.tsx': [
    '/airco-installatie-prijs-limburg',
    '/single-split-airco-installatie-limburg',
    '/multi-split-airco-installatie-limburg',
  ],
};

let failures = 0;

for (const [relativePath, requiredLinks] of Object.entries(requiredLinksByFile)) {
  const absolutePath = path.join(root, relativePath);
  const source = fs.readFileSync(absolutePath, 'utf8');

  for (const requiredLink of requiredLinks) {
    if (!source.includes(requiredLink)) {
      console.error(`${relativePath} missing ${requiredLink}`);
      failures += 1;
    }
  }
}

if (failures > 0) {
  process.exit(1);
}

console.log('Validated money page internal links.');
