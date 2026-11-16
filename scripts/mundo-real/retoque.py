"""Second pass over the packed outfit textures: takes off what the first pass left of the maker's marks.

Run from the repository root after pack2.py:  python3 scripts/mundo-real/retoque.py <folder with the original clothes>
"""
import sys
from PIL import Image, ImageFilter

TEX = 'public/mundo-real/gente/tex/'
# Thin outlines of the logos that survived as fabric-coloured pixels: a wide median leaves only the cloth.
SMOOTH = {
    'male_casualsuit06_diffuse': [(0.18, 0.09, 0.30, 0.18), (0.42, 0.09, 0.60, 0.23)],
    'male_casualsuit02_diffuse': [(0.48, 0.08, 0.64, 0.25)],
}
# Parts of another garment that the first pass painted over: taken again from the original.
RESTORE = {'male_casualsuit02_diffuse': ('male_casualsuit02/male_casualsuit02_diffuse.png', [(0.66, 0.50, 0.725, 0.84)])}

for name, boxes in SMOOTH.items():
    img = Image.open(TEX + name + '.webp').convert('RGB'); w, h = img.size
    if name in RESTORE and len(sys.argv) > 1:
        src = Image.open(f'{sys.argv[1]}/{RESTORE[name][0]}').convert('RGB').resize((w, h), Image.LANCZOS)
        for x0, y0, x1, y1 in RESTORE[name][1]:
            box = (int(x0 * w), int(y0 * h), int(x1 * w), int(y1 * h)); img.paste(src.crop(box), box)
    for x0, y0, x1, y1 in boxes:
        box = (int(x0 * w), int(y0 * h), int(x1 * w), int(y1 * h))
        patch = img.crop(box)
        for _ in range(2): patch = patch.filter(ImageFilter.MedianFilter(17))
        img.paste(patch, box)
    img.save(TEX + name + '.webp', 'WEBP', quality=80)
    print(name, 'ok')
