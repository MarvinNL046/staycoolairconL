# 3D-modellen (glTF/GLB) voor de WebGL-hero-accent

Zet hier het airco-model neer als:

    public/models/airco-unit.glb   →  wordt geserveerd op /models/airco-unit.glb

Zolang dit bestand er NIET is, toont de hero gewoon de statische airco-foto
(de poster) — geen lege of lelijke 3D. Zodra het `.glb` hier staat, laadt
`src/components/three/AircoScene.ts` het automatisch (lazy, ná LCP) en draait
het langzaam rond.

## Blender-export (File ▸ Export ▸ glTF 2.0)
- **Format:** glTF Binary (.glb)
- **Include:** Selected Objects (of Visible), + Materials, + Normals, + UVs
- **Transform:** +Y Up (aan)
- **Geometry:** Apply Modifiers (aan)
- **Compression:** UIT laten (geen Draco/meshopt — de loader verwacht plain GLB)
- Houd 'm **low-poly** (< ~50k tris) en textures klein (≤ 2K) voor snelle load.

Het model wordt in code automatisch **gecentreerd en geschaald** (fit op ~3.6
units), dus je hoeft je in Blender geen zorgen te maken over exacte schaal of
positie — modelleer 'm gewoon rond de oorsprong, met de voorkant naar +Z.
