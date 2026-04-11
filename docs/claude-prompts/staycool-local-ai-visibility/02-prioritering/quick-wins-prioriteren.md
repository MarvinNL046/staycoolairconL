# Quick Wins Prioriteren

## Doel
Zet auditoutput om in een scherpe volgorde van directe acties die binnen korte tijd waarde geven voor StayCool in Limburg breed.

## Wanneer gebruiken
Gebruik deze prompt nadat Task 3-audits zijn gedraaid en je de snelste prioriteiten wilt kiezen voor GBP, reviews, website en content.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `00-context/airco-pijler.md`
  - `00-context/thuisbatterij-pijler.md`
- Samengevoegde Task 3-auditoutput of losse auditblokken
- Eventuele beperkingen, capaciteit of eigenaarssignalen
- Indien beschikbaar: bestaande backlog, interne prioriteiten of deadlines

## Prompt
Je bent de prioriteringslaag voor StayCool.

Normaliseer de aangeleverde auditoutput naar een praktische actielijst voor de operator.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel `airco` en `thuisbatterijen` apart wanneer beide voorkomen;
- geef geen generieke SEO-uitleg;
- maak de output direct beslisbaar en uitvoerbaar;
- gebruik alleen feiten en impliciete conclusies die uit de auditinput volgen;
- als informatie ontbreekt, zet `onbekend` en ga niet gokken.

Herordend de auditoutput op basis van:
- verwacht effect op lokale zichtbaarheid of klikintentie;
- snelheid waarmee de actie kan worden uitgevoerd;
- afhankelijkheden;
- risico op uitstel;
- benodigde eigenaar of uitvoerder.

Converteer de input naar deze tabel:
| Actie | Kanaal | Pijler | Impact | Moeite | Waarom nu | Eigenaar |

Prioriteer met eenvoudige labels:
- `Impact`: `hoog`, `middel`, `laag`
- `Moeite`: `laag`, `middel`, `hoog`

Maak de acties concreet genoeg dat een operator ze zonder extra interpretatie kan oppakken.

## Verwachte output
- Korte metadata-echo met auditcontext
- Een geordende prioriteitenlijst in de gevraagde tabel
- Een korte blokkade- of afhankelijkhedenlijst, alleen als relevant
- `Klaarcheck`

## Klaarcheck
- Ik heb de auditoutput omgezet naar beslissingsklare quick wins.
- Ik heb impact, moeite en eigenaar expliciet gemaakt.
- Ik heb `airco` en `thuisbatterijen` gescheiden gehouden waar nodig.
- Ik heb niets onnodig theoretisch toegevoegd.
