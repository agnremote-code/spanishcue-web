# Reino: third-party model credits

All three models are by **Quaternius**, distributed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). Author listings and original pack pages were checked on 2026-10-10. Those pages identify the models/packs as CC0 and permit personal and commercial projects. Attribution is retained for provenance; no endorsement is implied.

The files are self-contained, locally served GLB 2.0 binaries. No runtime request to Poly Pizza or Quaternius is required. Files have been renamed only.

| Local file | Model and author listing | Original pack | Bytes |
|---|---|---|---:|
| `assets/dragon.glb` | [Dragon — Quaternius](https://poly.pizza/m/3rUm1cN3yp) | [Official pack](https://quaternius.com/packs/ultimatemonsters.html) | 251,540 |
| `assets/pine.glb` | [Pine — Quaternius](https://poly.pizza/m/699sFuLCN2) | [Official pack](https://quaternius.com/packs/stylizednaturemegakit.html) | 2,261,060 |
| `assets/windmill.glb` | [Tower Windmill — Quaternius](https://poly.pizza/m/52yaPyaAAG) | [Official pack](https://quaternius.com/packs/medievalvillage.html) | 328,416 |

## Download provenance and integrity

- `dragon.glb`: [Original GLB](https://static.poly.pizza/ae5b8510-1fa5-4d53-b943-a4f3b88fb629.glb); SHA-256 `d8a12f3f819e86518f5a44984db611ffaaa800895da33928d66519e629615705`.
- `pine.glb`: [Original GLB](https://static.poly.pizza/c55b8641-4679-4a85-8bd8-2a20e79abecd.glb); SHA-256 `3a5db923999bd47281f1f38cf8451c1544acfad33d953892fa95ca74765be361`.
- `windmill.glb`: [Original GLB](https://static.poly.pizza/4807851f-46d4-4541-ae98-24ec0a525f0c.glb); SHA-256 `a547212fff5b4c99b34ccea01adbc1dc8d820b83affbd006f1cf856cc14d98bd`.

## Integration notes

- Dragon: one skinned mesh with a real joint hierarchy and eight clips: `CharacterArmature|Death`, `CharacterArmature|Fast_Flying`, `CharacterArmature|Flying_Idle`, `CharacterArmature|Headbutt`, `CharacterArmature|HitReact`, `CharacterArmature|No`, `CharacterArmature|Punch`, `CharacterArmature|Yes`. Rendered size before application scaling is approximately 3.59 × 2.44 × 2.05 units. Uses material colors, with no external textures.
- Pine: textured `Pine_3` mesh with three images embedded in the GLB. Preserve its alpha/material settings when cloning.
- Tower windmill: separate tower and blade meshes; blade node is `TowerWindmill_Blades_Cylinder.006`. Size before application scaling is approximately 7.92 × 11.41 × 4.99 units.
- These assets require no Draco or other extension decoders.
- Realm terrain, architecture, shaders, particles and procedural fallback meshes are authored for this project.
