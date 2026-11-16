# Elenco realista (public/mundo-real/gente)

Las personas realistas de los mundos 3D salen de MakeHuman (CC0) con estos guiones; no corren en CI ni en el build.

1. Blender 4.5 con la extensión MPFB y los «system assets» de MakeHuman (ropa, pelo, pieles, cejas, pestañas, ojos, dientes, lengua).
2. `blender -b --python gen2.py -- cast.json <salida>`: por cada cuerpo, `cuerpo.glb` (esqueleto y gestos de la cara) y un GLB por conjunto de ropa, calzado y peinado ajustado a ese cuerpo.
3. `python3 pack2.py <salida> <web>`: saca las texturas a WebP compartidos (`tex/`), deja el pelo en gris para teñirlo, borra logotipos de las remeras y escribe `elenco.json`.
4. Copiar `<web>` a `public/mundo-real/gente`.

Las rutas de los assets están al principio de cada guion. En tiempo de ejecución todo lo arma `app/mundo-real/persona.ts`.
