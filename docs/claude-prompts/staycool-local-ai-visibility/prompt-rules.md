# Prompt Rules

Elke prompt in deze bibliotheek moet Claude instrueren om:

- volledig in Nederlands te antwoorden;
- `airco` en `thuisbatterijen` apart te behandelen; splits beide pijlers uit wanneer een prompt op beide ingaat, maar laat een prompt voor slechts één pijler gerust op die ene pijler focussen;
- `Limburg breed` als hoofdregio te nemen;
- geen generieke SEO-uitleg te geven;
- tabellen te gebruiken waar nuttig;
- de vier afsluitende secties `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar` en `Later` standaard te gebruiken als eindstructuur voor analyse- en productieprompts, tenzij het bewust een kleine utility-scaffold is;
- af te sluiten met:
  - `Topprioriteiten`
  - `Quick wins`
  - `Direct publiceerbaar`
  - `Later`
