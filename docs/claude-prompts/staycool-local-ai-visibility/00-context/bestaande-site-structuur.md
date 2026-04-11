# Bestaande Site-Structuur

## Hoofdstructuur
- Home
- Contact en conversiepagina's
- Productpagina's, merkpagina's en modelpagina's
- Kennisbank en artikelcontent
- Blogcontent
- Vergelijkingspagina's
- Handleidingen
- Adviespagina's
- Locatie- en werkgebiedpagina's
- Landingspagina's
- SEO pillar-pagina's
- Thuisbatterij-content
- Calculators
- Juridische pagina's

## Geïndexeerde contentfamilies
- `/` als hoofdhomepage met airco en Limburg-focus
- `/contact`, `/tot-snel`, `/werkgebied`, `/voorwaarden`, `/privacy`
- `/products`, `/products/airco-covers`, `/products/:brand`, `/products/:brand/:model`
- `/products/daikin/ururu-sarara`, `/products/daikin/stylish`, `/products/mitsubishi/daiseikai-10`, `/products/lg-mobiele-airco`, `/products/tosot-mobiele-airco`
- `/aircos`, `/aircos/:productId`
- `/thuisbatterijen`, `/thuisbatterij-calculator`, `/kennisbank/thuisbatterijen`
- `/capaciteit-calculator`
- `/kennisbank/*` voor algemene kennisbankartikelen zoals werking, onderhoud, verwarmen, energielabels, storingen, merken en vergelijkingen
- `/blog/*` voor bewijs, cases en regionale context
- `/vergelijkingen/*` voor comparison content
- `/handleidingen/*` voor merkhandleidingen
- `/advies/*` voor adviescontent en keuzehulpen
- `/airco-installatie/:citySlug` plus vaste stadspagina's zoals Maastricht, Roermond, Heerlen, Venlo, Sittard, Weert en andere Limburgse plaatsen
- `/seo/pillar-1-installatie-services/*`, `/seo/pillar-2-onderhoud-service/*`, `/seo/pillar-3-merken-modellen/*`, `/seo/pillar-4-energie-besparen/*`, `/seo/pillar-5-thuisbatterijen/*`, `/seo/pillar-6-limburg-steden/*`, `/seo/pillar-7-technische-gidsen/*`, `/seo/pillar-8-vergelijkingen/*`, `/seo/pillar-9-kosten-prijzen/*`, `/seo/pillar-10-duurzaamheid/*`

## Support- en noindexclusters
- `/airco-installatie/noindex/*` voor stappenplan, kosten en FAQ support content
- `/airco-onderhoud/noindex/*` voor checklist, seizoenen en problemen voorkomen
- `/airco-reparatie/noindex/*` voor storingen, kosten en spoed
- `/airco-service/noindex/*` voor serviceverwachtingen, contractvoordelen en regio-uitleg
- `/airco-merken/noindex/*` voor keuzehulp, modellen en vergelijkingstips
- `/energiezuinig/noindex/*` voor keuze, energielabel en stroomverbruik
- `/airco-limburg/noindex/*` voor wijkgids, gemeentenoverzicht en reistijdservice
- `/airco-technisch/noindex/*` voor technische specificaties, capaciteitstool en installatie-eisen
- `/airco-vergelijking/noindex/*` voor gids, split-vs-mobiel en checklist
- `/thuisbatterijen/noindex/*` voor ervaringen, gids Limburg, hulp kiezen, installateurs, stappen, regelgeving, merken, prijzen, vragen, huurders, senioren, zelfstandigen, werking en rendabiliteit

## Routeconventies
- Brand landings lopen onder `/landing/*`.
- Root-level commerciële of money pages staan buiten `/landing/*`, bijvoorbeeld `/airco-installatie`, `/airco-onderhoud`, `/airco-reparatie`, `/airco-service-limburg`, `/airco-kopen-limburg`, `/airco-kopen-en-laten-installeren`, `/wat-kost-airco-installatie`, `/mobiele-airco`, `/airco-met-buitenunit`, `/airco-installatie-limburg`, `/airco-installatie-prijs`, `/airco-offerte`, `/airco-installeren`, `/airco-kantoor`, `/airco-winkel`, `/airco-voor-slaapkamer`, `/airco-voor-woonkamer`, `/airco-voor-zolder`.
- Gebruik deze scheiding in prompts: brand landings zijn vooral merk- of productgericht; root-level money pages zijn bredere commerciële instappunten.

## Belangrijke clusters uit de huidige site
- Home, contact en transactieroutes vormen de top van de funnel
- Product- en merkstructuur ondersteunt commerciële intenties per model of brand
- Kennisbank, blog, advies en vergelijking vormen de informatie- en overweegfase
- Locatiepagina's bestaan in zowel vaste stadspagina's als programmatic `:citySlug` varianten
- Zoekintentie wordt uitgesplitst in indexed commerciële pagina's en noindex supportpagina's
- Thuisbatterijcontent heeft een eigen indexed cluster en een eigen noindex-supportlaag

## Wat dit betekent voor prompts
- Gebruik de bestaande structuur als bron voor echte contentvormen.
- Haal termen uit de huidige route-opbouw, niet uit generieke SEO-modellen.
- Laat prompts content voorstellen die past bij bestaande clusters, zodat publicatie meteen logisch is.
- Bouw op wat er al is: service, locatie, kennisbank, vergelijking, advies en calculatorcontent.
- Maak altijd expliciet of een voorstel voor indexed content of voor support/noindex bedoeld is.
