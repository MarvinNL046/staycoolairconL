# Programmatic SEO Locatie Framework

Dit framework is bedoeld om locatiepagina's in Limburg op schaal uit te rollen zonder thin content.

## Waar staat wat

- Data model: `src/data/programmaticLocations.ts`
- Types: `src/types/programmatic-locations.ts`
- Dynamische route: `src/pages/locations/ProgrammaticLocation.tsx`
- Route mapping: `src/App.tsx` (`/airco-installatie/:citySlug`)
- Quality checks: `scripts/validate-programmatic-locations.cjs`

## EEAT-eisen per locatie

Elke locatie moet minimaal bevatten:

1. 3+ lokale klimaat/context bullets
2. 3+ lokale installatie- of woningkenmerken
3. 6+ lokale FAQ-items (met inhoudelijke antwoorden)
4. 2+ praktijkcases
5. Expertiseblok met reviewer, datum, certificeringen en lokale projectaantallen

## Publicatieflow

1. Voeg/werk locatieprofielen bij in `programmaticLocations`.
2. Controleer lokaal met `npm run validate:locations`.
3. Controleer rendering via `/airco-installatie/<slug>`.
4. Publiceer pas na geslaagde validatie.

## Why this avoids thin content

- Inhoud wordt samengesteld uit meerdere lokale velden per plaats.
- FAQ, cases, context en expertise worden gecombineerd tot een grotere unieke corpus.
- Validator blokkeert te korte content en hoge overlap tussen locaties.
