// SEO Navigation Structure - 10 Pillars with 5 Subpillars Each
export interface SubpillarItem {
  name: string;
  slug: string;
  path: string;
}

export interface PillarItem {
  name: string;
  slug: string;
  subpillars: SubpillarItem[];
}

export const seoNavigation: PillarItem[] = [
  {
    name: "Installatie Services",
    slug: "pillar-1-installatie-services",
    subpillars: [
      { name: "Airco Installatie Woonkamer", slug: "airco-installatie-woonkamer", path: "/seo/pillar-1-installatie-services/airco-installatie-woonkamer" },
      { name: "Airco Installatie Slaapkamer", slug: "airco-installatie-slaapkamer", path: "/seo/pillar-1-installatie-services/airco-installatie-slaapkamer" },
      { name: "Airco Installatie Kantoor", slug: "airco-installatie-kantoor", path: "/seo/pillar-1-installatie-services/airco-installatie-kantoor" },
      { name: "Airco Installatie Bedrijfspand", slug: "airco-installatie-bedrijfspand", path: "/seo/pillar-1-installatie-services/airco-installatie-bedrijfspand" },
      { name: "Multi-split Airco Installatie", slug: "multi-split-airco-installatie", path: "/seo/pillar-1-installatie-services/multi-split-airco-installatie" }
    ]
  },
  {
    name: "Onderhoud & Service",
    slug: "pillar-2-onderhoud-service",
    subpillars: [
      { name: "Jaarlijks Airco Onderhoud", slug: "jaarlijks-airco-onderhoud", path: "/seo/pillar-2-onderhoud-service/jaarlijks-airco-onderhoud" },
      { name: "Airco Reparatie Service", slug: "airco-reparatie-service", path: "/seo/pillar-2-onderhoud-service/airco-reparatie-service" },
      { name: "Airco Filter Reiniging", slug: "airco-filter-reiniging", path: "/seo/pillar-2-onderhoud-service/airco-filter-reiniging" },
      { name: "Airco Koudemiddel Bijvullen", slug: "airco-koudemiddel-bijvullen", path: "/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen" },
      { name: "Airco Storing Oplossen", slug: "airco-storing-oplossen", path: "/seo/pillar-2-onderhoud-service/airco-storing-oplossen" }
    ]
  },
  {
    name: "Merken & Modellen",
    slug: "pillar-3-merken-modellen",
    subpillars: [
      { name: "Daikin Airco Modellen", slug: "daikin-airco-modellen", path: "/seo/pillar-3-merken-modellen/daikin-airco-modellen" },
      { name: "Mitsubishi Heavy Airco", slug: "mitsubishi-heavy-airco", path: "/seo/pillar-3-merken-modellen/mitsubishi-heavy-airco" },
      { name: "LG Airco Systemen", slug: "lg-airco-systemen", path: "/seo/pillar-3-merken-modellen/lg-airco-systemen" },
      { name: "Tosot/Gree Airco", slug: "tosot-gree-airco", path: "/seo/pillar-3-merken-modellen/tosot-gree-airco" },
      { name: "Samsung Airco", slug: "samsung-airco", path: "/seo/pillar-3-merken-modellen/samsung-airco" }
    ]
  },
  {
    name: "Energie Besparen",
    slug: "pillar-4-energie-besparen",
    subpillars: [
      { name: "Verwarmen met Airco", slug: "verwarmen-met-airco", path: "/seo/pillar-4-energie-besparen/verwarmen-met-airco" },
      { name: "Terugleverkosten Voorkomen", slug: "terugleverkosten-voorkomen", path: "/seo/pillar-4-energie-besparen/terugleverkosten-voorkomen" },
      { name: "SCOP Waarde Uitgelegd", slug: "scop-waarde-uitgelegd", path: "/seo/pillar-4-energie-besparen/scop-waarde-uitgelegd" },
      { name: "Energielabel Airco", slug: "energielabel-airco", path: "/seo/pillar-4-energie-besparen/energielabel-airco" },
      { name: "Stroomverbruik Airco", slug: "stroomverbruik-airco", path: "/seo/pillar-4-energie-besparen/stroomverbruik-airco" }
    ]
  },
  {
    name: "AlphaESS Thuisbatterijen",
    slug: "pillar-5-thuisbatterijen",
    subpillars: [
      { name: "Thuisbatterij SMILE-B3", slug: "thuisbatterij-smile-b3", path: "/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-b3" },
      { name: "Thuisbatterij SMILE5", slug: "thuisbatterij-smile5", path: "/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5" },
      { name: "Thuisbatterij SMILE-T10", slug: "thuisbatterij-smile-t10", path: "/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10" },
      { name: "Thuisbatterij BTW Teruggave", slug: "thuisbatterij-btw-teruggave", path: "/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave" },
      { name: "Thuisbatterij Terugverdientijd", slug: "thuisbatterij-terugverdientijd", path: "/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd" }
    ]
  },
  {
    name: "Limburg Steden",
    slug: "pillar-6-limburg-steden",
    subpillars: [
      { name: "Airco Installatie Maastricht", slug: "airco-installatie-maastricht", path: "/seo/pillar-6-limburg-steden/airco-installatie-maastricht" },
      { name: "Airco Installatie Roermond", slug: "airco-installatie-roermond", path: "/seo/pillar-6-limburg-steden/airco-installatie-roermond" },
      { name: "Airco Service Heerlen", slug: "airco-service-heerlen", path: "/seo/pillar-6-limburg-steden/airco-service-heerlen" },
      { name: "Airco Monteur Sittard-Geleen", slug: "airco-monteur-sittard-geleen", path: "/seo/pillar-6-limburg-steden/airco-monteur-sittard-geleen" },
      { name: "Airco Plaatsen Venlo", slug: "airco-plaatsen-venlo", path: "/seo/pillar-6-limburg-steden/airco-plaatsen-venlo" }
    ]
  },
  {
    name: "Technische Gidsen",
    slug: "pillar-7-technische-gidsen",
    subpillars: [
      { name: "Airco Capaciteit Berekenen", slug: "airco-capaciteit-berekenen", path: "/seo/pillar-7-technische-gidsen/airco-capaciteit-berekenen" },
      { name: "Airco Buitenunit Plaatsing", slug: "airco-buitenunit-plaatsing", path: "/seo/pillar-7-technische-gidsen/airco-buitenunit-plaatsing" },
      { name: "Airco Binnenunit Positie", slug: "airco-binnenunit-positie", path: "/seo/pillar-7-technische-gidsen/airco-binnenunit-positie" },
      { name: "Airco Leidingwerk", slug: "airco-leidingwerk", path: "/seo/pillar-7-technische-gidsen/airco-leidingwerk" },
      { name: "Airco WiFi Bediening", slug: "airco-wifi-bediening", path: "/seo/pillar-7-technische-gidsen/airco-wifi-bediening" }
    ]
  },
  {
    name: "Vergelijkingen",
    slug: "pillar-8-vergelijkingen",
    subpillars: [
      { name: "Split-unit vs Mobiele Airco", slug: "split-unit-vs-mobiele-airco", path: "/seo/pillar-8-vergelijkingen/split-unit-vs-mobiele-airco" },
      { name: "Mono-split vs Multi-split", slug: "mono-split-vs-multi-split", path: "/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split" },
      { name: "Inverter vs On-off Airco", slug: "inverter-vs-on-off-airco", path: "/seo/pillar-8-vergelijkingen/inverter-vs-on-off-airco" },
      { name: "Daikin vs Mitsubishi", slug: "daikin-vs-mitsubishi", path: "/seo/pillar-8-vergelijkingen/daikin-vs-mitsubishi" },
      { name: "Airco vs Ventilator", slug: "airco-vs-ventilator", path: "/seo/pillar-8-vergelijkingen/airco-vs-ventilator" }
    ]
  },
  {
    name: "Kosten & Prijzen",
    slug: "pillar-9-kosten-prijzen",
    subpillars: [
      { name: "Kosten Airco Plaatsen", slug: "kosten-airco-plaatsen", path: "/seo/pillar-9-kosten-prijzen/kosten-airco-plaatsen" },
      { name: "Airco Subsidies Limburg", slug: "airco-subsidies-limburg", path: "/seo/pillar-9-kosten-prijzen/airco-subsidies-limburg" },
      { name: "Airco Financiering", slug: "airco-financiering", path: "/seo/pillar-9-kosten-prijzen/airco-financiering" },
      { name: "Airco Onderhoud Kosten", slug: "airco-onderhoud-kosten", path: "/seo/pillar-9-kosten-prijzen/airco-onderhoud-kosten" },
      { name: "Airco Verbruikskosten", slug: "airco-verbruikskosten", path: "/seo/pillar-9-kosten-prijzen/airco-verbruikskosten" }
    ]
  },
  {
    name: "Duurzaamheid & Milieu",
    slug: "pillar-10-duurzaamheid",
    subpillars: [
      { name: "Koudemiddel R32", slug: "koudemiddel-r32", path: "/seo/pillar-10-duurzaamheid/koudemiddel-r32" },
      { name: "CO2 Reductie Warmtepomp", slug: "co2-reductie-warmtepomp", path: "/seo/pillar-10-duurzaamheid/co2-reductie-warmtepomp" },
      { name: "Duurzame Verwarming", slug: "duurzame-verwarming", path: "/seo/pillar-10-duurzaamheid/duurzame-verwarming" },
      { name: "Energielabel Verbetering", slug: "energielabel-verbetering", path: "/seo/pillar-10-duurzaamheid/energielabel-verbetering" },
      { name: "Circulaire Airco", slug: "circulaire-airco", path: "/seo/pillar-10-duurzaamheid/circulaire-airco" }
    ]
  }
];
