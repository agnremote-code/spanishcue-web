# Packs the generator's GLBs for the web: textures leave the files and become shared WebP images
# (gente/tex), hair turns neutral grey so it can be tinted, and each outfit's material records the
# mean brightness of its upper and lower garments (used to tint them without losing the weave).
import json, struct, sys, os, io, glob
import numpy as np
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
os.makedirs(f'{dst}/tex', exist_ok=True)
HAIR = ('bob', 'long', 'ponytail', 'braid', 'afro', 'short')
done = {}
TEE = [(0, 0, 1, 0.45), (0.7, 0.55, 1, 0.9)]
PLAIN = {'female_casualsuit01_diffuse': ('blue', TEE), 'female_casualsuit02_diffuse': ('blue', TEE),
         'male_casualsuit02_diffuse': ('blue', [(0, 0, 1, 0.37), (0.68, 0, 1, 1)]), 'male_casualsuit06_diffuse': ('white', [(0, 0, 1, 0.4)])}

def size_for(name):
    n = name.lower()
    if 'skin' in n: return 1024
    if 'normal' in n: return 512
    if any(k in n for k in ('eye', 'teeth', 'tongue', 'lash', 'brow')): return 256
    if any(n.startswith(k) for k in HAIR): return 512
    if 'shoes' in n: return 256
    return 1024

def save_image(name, data):
    if name in done: return done[name]
    img = Image.open(io.BytesIO(data)); alpha = img.mode in ('RGBA', 'LA', 'P')
    img = img.convert('RGBA' if alpha else 'RGB')
    s = min(size_for(name), img.width); img = img.resize((s, s * img.height // img.width), Image.LANCZOS)
    if any(name.lower().startswith(k) for k in HAIR) and 'normal' not in name.lower():
        a = np.asarray(img.convert('RGBA')).astype(np.float32); l = a[..., :3] @ np.array([.299, .587, .114])
        w = a[..., 3] > 100; mean = l[w].mean() if w.any() else 128
        g = np.clip(l / mean * 150, 0, 255)
        a[..., 0] = a[..., 1] = a[..., 2] = g; img = Image.fromarray(a.astype(np.uint8), 'RGBA')
    if name in PLAIN:
        # Take the maker's logo and trims off the T-shirts: those pixels become plain fabric.
        a = np.asarray(img.convert('RGB')).astype(np.int32).copy(); h, w = a.shape[:2]
        for x0, y0, x1, y1 in PLAIN[name][1]:
            box = a[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)]
            r, g, b = box[..., 0], box[..., 1], box[..., 2]
            fabric = (b > r + 40) if PLAIN[name][0] == 'blue' else ((box.max(-1) - box.min(-1) < 22) & (box.mean(-1) > 150))
            if fabric.any(): box[~fabric] = np.median(box[fabric], axis=0)
        img = Image.fromarray(a.astype(np.uint8), 'RGB')
    file = f'{name}.webp'; img.save(f'{dst}/tex/{file}', 'WEBP', quality=80)
    done[name] = (file, np.asarray(img.convert('RGB')).astype(np.float32) / 255); return done[name]

COMP = {5120: 'i1', 5121: 'u1', 5122: 'i2', 5123: 'u2', 5125: 'u4', 5126: 'f4'}
N = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}

def pack(path, outpath):
    f = open(path, 'rb'); f.read(12); l, _ = struct.unpack('<II', f.read(8)); j = json.loads(f.read(l)); l, _ = struct.unpack('<II', f.read(8)); bin = f.read(l)
    views = j['bufferViews']
    def view(i): v = views[i]; return bin[v.get('byteOffset', 0):v.get('byteOffset', 0) + v['byteLength']]
    def accessor(i):
        a = j['accessors'][i]; v = views[a['bufferView']]; n = N[a['type']]
        dt = np.dtype('<' + COMP[a['componentType']]); stride = v.get('byteStride', dt.itemsize * n)
        raw = np.frombuffer(bin, dtype=np.uint8, count=stride * (a['count'] - 1) + dt.itemsize * n, offset=v.get('byteOffset', 0) + a.get('byteOffset', 0))
        return np.lib.stride_tricks.as_strided(raw, (a['count'], dt.itemsize * n), (stride, 1)).copy().view(dt).reshape(a['count'], n)
    pixels = {}
    image_views = set()
    for k, im in enumerate(j.get('images', [])):
        image_views.add(im['bufferView'])
        file, px = save_image(im.get('name', f'img{k}'), view(im.pop('bufferView')))
        im.pop('mimeType', None); im['uri'] = '../tex/' + file; pixels[k] = px
    # Mean brightness of each region of an outfit.
    for mesh in j['meshes']:
        for p in mesh['primitives']:
            at = p['attributes']
            if '_REGION' not in at or 'material' not in p: continue
            mat = j['materials'][p['material']]
            t = mat.get('pbrMetallicRoughness', {}).get('baseColorTexture')
            if not t: continue
            px = pixels[j['textures'][t['index']]['source']]; uv = accessor(at['TEXCOORD_0']); reg = accessor(at['_REGION'])[:, 0]
            x = np.clip((uv[:, 0] % 1) * px.shape[1], 0, px.shape[1] - 1).astype(int); y = np.clip((uv[:, 1] % 1) * px.shape[0], 0, px.shape[0] - 1).astype(int)
            lum = (px[y, x] ** 2.2) @ np.array([.2126, .7152, .0722])
            mat['extras'] = {'lum': [round(float(lum[reg < .5].mean()) if (reg < .5).any() else 0.5, 3), round(float(lum[reg >= .5].mean()) if (reg >= .5).any() else 0.5, 3)]}
    # Rebuild the binary without the images.
    blob = bytearray(); remap = {}; kept = []
    for i, v in enumerate(views):
        if i in image_views: continue
        while len(blob) % 4: blob.append(0)
        data = view(i); nv = dict(v); nv['byteOffset'] = len(blob); nv['buffer'] = 0; blob.extend(data); remap[i] = len(kept); kept.append(nv)
    j['bufferViews'] = kept
    for a in j['accessors']:
        if 'bufferView' in a: a['bufferView'] = remap[a['bufferView']]
        if 'sparse' in a:
            a['sparse']['indices']['bufferView'] = remap[a['sparse']['indices']['bufferView']]; a['sparse']['values']['bufferView'] = remap[a['sparse']['values']['bufferView']]
    for s in j.get('skins', []): pass
    while len(blob) % 4: blob.append(0)
    j['buffers'] = [{'byteLength': len(blob)}]
    js = json.dumps(j, separators=(',', ':')).encode()
    while len(js) % 4: js += b' '
    os.makedirs(os.path.dirname(outpath), exist_ok=True)
    with open(outpath, 'wb') as o:
        o.write(struct.pack('<4sII', b'glTF', 2, 28 + len(js) + len(blob))); o.write(struct.pack('<I4s', len(js), b'JSON')); o.write(js)
        o.write(struct.pack('<I4s', len(blob), b'BIN\0')); o.write(blob)

index = {}; skins = {}
for d in sorted(glob.glob(f'{src}/*/')):
    body = os.path.basename(d.rstrip('/')); info = json.load(open(d + 'info.json'))
    for g in sorted(glob.glob(d + '*.glb')): pack(g, f'{dst}/{body}/{os.path.basename(g)}')
    index[body] = info['bits']
for p in sorted(glob.glob('/home/user/tools/mh/assets/skins/*/*diffuse*.png')):
    name = os.path.basename(os.path.dirname(p))
    if 'special' in name or 'toon' in name: continue
    img = Image.open(p).convert('RGB').resize((1024, 1024), Image.LANCZOS); img.save(f'{dst}/tex/piel_{name}.webp', 'WEBP', quality=80)
    a = np.asarray(img).astype(np.float32) / 255; c = a[380:640, 60:330].reshape(-1, 3).mean(0); skins[name] = [round(float(v), 3) for v in c]
json.dump({'cuerpos': index, 'pieles': skins}, open(f'{dst}/elenco.json', 'w'), separators=(',', ':'))
os.system(f'du -sh {dst} {dst}/tex {dst}/*/ | cat')
