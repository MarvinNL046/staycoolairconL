# SEO Service Pages Overlap Audit

Doel: de nieuwe root-level servicepagina's als lead capture SEO machine publiceren zonder onnodige keyword cannibalization.

## Nieuwe architectuur

- Nieuwe servicepagina's staan op root-level URL's.
- De content wordt centraal beheerd in `src/data/servicePages.ts`.
- De rendering gebeurt via `src/pages/ServiceLandingPage.tsx`.
- Exacte overlap wordt waar mogelijk vervangen door de nieuwe template.
- Bestaande contentpagina's blijven alleen staan als ze een duidelijk andere intent hebben.

## Routebeslissingen

| Bestaande route | Beslissing | Reden |
| --- | --- | --- |
| `/airco-installatie-limburg` | keep + upgrade | Exacte money-page overlap. Deze route moet de nieuwe data-driven servicepage gebruiken. |
| `/airco-installatie-prijs` | keep | Bestaande bredere prijslanding zonder Limburg-slug. Nieuwe `/airco-installatie-prijs-limburg` krijgt lokale prijsintentie. |
| `/airco-kopen-limburg` | keep | Bestaande koop-intent page blijft breder. Nieuwe `/airco-kopen-en-laten-installeren-limburg` focust op complete aankoop plus montage. |
| `/airco-kopen-en-laten-installeren` | keep | Nationale/bredere intent zonder Limburg. Nieuwe Limburg-route focust lokaal. |
| `/multi-split-airco-installatie` | keep | Bestaande algemene systeemtype pagina. Nieuwe `/multi-split-airco-installatie-limburg` focust lokaal. |
| `/split-airco-installatie` | keep | Algemene split-installatie pagina. Nieuwe single/multi split Limburg pages krijgen lokale intent. |
| `/airco-voor-slaapkamer` | keep | Bestaande algemene ruimtepagina. Nieuwe `/airco-voor-slaapkamer-installeren-limburg` focust lokale installatie-intent. |
| `/airco-voor-woonkamer` | keep | Bestaande algemene ruimtepagina. Nieuwe `/airco-voor-woonkamer-installeren-limburg` focust lokale installatie-intent. |
| `/airco-voor-zolder` | keep | Bestaande algemene ruimtepagina. Nieuwe `/airco-voor-zolder-installeren-limburg` focust lokale installatie-intent. |
| `/airco-met-buitenunit` | keep | Product-/type landing. Nieuwe `/airco-met-buitenunit-plaatsen-limburg` focust lokale montage. |
| `/airco-service-limburg` | keep | Brede servicehub. Nieuwe onderhoud/reparatie/storing pages splitsen specifieke service-intent uit. |
| `/airco-reparatie` | keep | Algemene reparatielanding. Nieuwe `/airco-reparatie-limburg` focust lokale high-intent reparatie. |
| `/airco-onderhoud` | keep | Algemene onderhoudslanding. Nieuwe `/airco-onderhoud-limburg` focust lokale onderhoudslead. |
| `/kennisbank/airco-installatie-limburg` | noindex overwegen | Informatieve kennisbank overlap met money page. Behouden als kennisartikel kan, maar voorkom indexconcurrentie. |
| `/kennisbank/airco-onderhoud-limburg` | noindex overwegen | Informatieve kennisbank overlap met nieuwe onderhoud money page. |
| `/kennisbank/aircospecialist-limburg` | noindex overwegen | Overlap met nieuwe `/airco-specialist-limburg` lead-intent pagina. |

## Routes die moeten redirecten

Nu geen automatische redirects toegevoegd. Aanbevolen redirects na controle in analytics/Search Console:

- `/kennisbank/airco-installatie-limburg` naar `/airco-installatie-limburg` als de kennisbankpagina geen unieke trafficwaarde heeft.
- `/kennisbank/airco-onderhoud-limburg` naar `/airco-onderhoud-limburg` als de onderhoudsleadpagina beter converteert.
- `/kennisbank/aircospecialist-limburg` naar `/airco-specialist-limburg` als de intent vooral commercieel blijkt.

## Routes die beter op noindex kunnen

- Informatieve kennisbankvarianten met exact dezelfde hoofdkeyword als een nieuwe servicepagina.
- Noindex pagina's onder bestaande `/noindex/` routes blijven ongewijzigd.
- Brede blogartikelen blijven indexeerbaar als ze top-of-funnel intent hebben en intern naar de servicepagina linken.

## Mogelijke cannibalization-risico's

- `/airco-installatie-limburg` versus `/kennisbank/airco-installatie-limburg`
- `/airco-onderhoud-limburg` versus `/kennisbank/airco-onderhoud-limburg`
- `/airco-specialist-limburg` versus `/kennisbank/aircospecialist-limburg`
- `/airco-installatie-prijs-limburg` versus `/airco-laten-installeren-kosten-limburg`
- `/welke-airco-heb-ik-nodig-limburg` versus `/beste-airco-voor-woning-limburg`

## Interne linking-regels

- Money pages linken naar prijs/offerte en systeemtype pagina's.
- Ruimtepagina's linken naar vermogen berekenen, single split en verwante ruimtes.
- Systeemtype pagina's linken naar single/multi split, buitenunit en prijs/offerte pagina's.
- Onderhoudspagina's linken onderling naar reinigen, bijvullen, storing en reparatie.
- Adviespagina's linken naar offerte, vergelijken en beste airco voor woning.
