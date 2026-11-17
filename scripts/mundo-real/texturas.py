"""Downloads the photographic surfaces of the realistic worlds from Poly Haven (CC0)
and writes them as 1024 px WebP into public/mundo-real: <name>_col / _nor / _arm.

  python3 scripts/mundo-real/texturas.py [name ...]

A surface listed as neutral has its colour map turned to a light grey that keeps
the photo's grain, so the colour each world gives the material drives the tint.
"""
import io, json, sys, urllib.request
from pathlib import Path
from PIL import Image, ImageOps

OUT = Path(__file__).resolve().parents[2] / 'public' / 'mundo-real'
# name -> neutral (tinted by the world) or natural (keeps the photo's own colour)
SURFACES = {
    'marble_01': 'neutral', 'concrete_floor_02': 'neutral', 'large_floor_tiles_02': 'neutral', 'floor_tiles_06': 'neutral',
    'asphalt_02': 'natural', 'cobblestone_floor_04': 'natural', 'leafy_grass': 'natural', 'red_brick_03': 'natural',
    'sand_01': 'natural', 'metal_plate': 'neutral', 'concrete_wall_008': 'neutral', 'wood_planks': 'natural',
}

def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'texture-fetch'})
    return urllib.request.urlopen(request, timeout=60).read()

def main(names):
    for name in names:
        files = json.loads(fetch(f'https://api.polyhaven.com/files/{name}'))
        for key, suffix in (('Diffuse', 'col'), ('nor_gl', 'nor'), ('arm', 'arm')):
            image = Image.open(io.BytesIO(fetch(files[key]['1k']['jpg']['url']))).convert('RGB').resize((1024, 1024), Image.LANCZOS)
            if suffix == 'col' and SURFACES.get(name) == 'neutral':
                grey = ImageOps.grayscale(image)
                mean = sum(grey.resize((64, 64)).getdata()) / 4096
                image = Image.merge('RGB', [grey.point(lambda v: max(0, min(255, round(215 + (v - mean) * 0.9))))] * 3)
            image.save(OUT / f'{name}_{suffix}.webp', quality=82 if suffix == 'col' else 78, method=6)
        print(name, sum((OUT / f'{name}_{s}.webp').stat().st_size for s in ('col', 'nor', 'arm')) // 1024, 'KB')

if __name__ == '__main__':
    main(sys.argv[1:] or list(SURFACES))
