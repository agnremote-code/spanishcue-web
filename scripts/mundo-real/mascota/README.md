# Mascota 3D (public/mundo-real/mascota/mascota.glb)

Modelo de la mascota oficial de SpanishCue a partir de las imágenes de frente, tres cuartos, perfil y espalda que mandó Ale (2026-11-27). Un solo GLB con rig estilo Mixamo (`mixamorig:*`, 52 huesos con dedos), 1,80 m, pies en Y=0, menos de 20.000 triángulos, texturas de 2048 px como máximo, gestos de cara (blink, smile, open…) y sin animaciones.

Base: el cuerpo, la campera, las zapatillas y el pelo MakeHuman (CC0) de `public/mundo-real/gente/m_cau`, re-texturados y retocados:

- `analyze.py` (Blender): busca en el UV dónde van los puños y la cintura de rib, el cierre, los parches (Argentina en el pecho izquierdo, EE. UU. en la manga derecha) y la barba de días; escribe `uvdata.json`.
- `tex.py` (Python + Pillow): bomber negra de nailon, remera blanca, jean índigo oscuro, zapatillas blancas, pelo platinado con raíz oscura, piel con barba, ojos gris verdoso.
- `build.py` + `final.py` (Blender): saca las solapas y los bolsillos de saco, arma el mullet con mechones desde la nuca, cadena con cruz y cadena del jean, baja la malla (las formas de la cara se pasan con Surface Deform), renombra los huesos a Mixamo, escala a 1,80 m y exporta.

Orden: `blender -b --python analyze.py`, `python3 tex.py`, `blender -b --python build.py -- final <salida.glb>`. Las rutas de trabajo están al principio de cada guion (`M`, `G`).

En tiempo de ejecución lo pone `app/mundo-real/mascota.ts` sobre el protagonista de Noche abierta (`?mascota=0` vuelve al dibujado).
