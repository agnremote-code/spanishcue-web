"""Shrinks the textures of the packed objects in public/mundo-real/objetos: small things do not need
512 px maps, and every map is video memory on the laptop. Geometry is left alone (merging vertices tore
thin parts such as chair backs and lamp arms). Run it after modelos.py.

  python3 scripts/mundo-real/aligerar.py [name ...]
"""
import io, json, struct, sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2] / 'public' / 'mundo-real'
# Texture side per object: the largest pieces and the paintings keep 512 px, everything else 256.
BIG = {'sofa_02', 'sofa_03', 'GothicCabinet_01', 'fancy_picture_frame_01', 'hanging_picture_frame_02'}

def lighten(path, side):
    data = path.read_bytes()
    length = struct.unpack('<I', data[12:16])[0]
    gltf = json.loads(data[20:20 + length]); blob = bytearray(data[28 + length:])
    views = gltf['bufferViews']; shrunk = 0
    for image in gltf.get('images', []):
        v = views[image['bufferView']]
        picture = Image.open(io.BytesIO(bytes(blob[v.get('byteOffset', 0):v.get('byteOffset', 0) + v['byteLength']])))
        picture.load()
        if max(picture.size) <= side: continue
        picture.thumbnail((side, side), Image.LANCZOS)
        packed = io.BytesIO(); picture.save(packed, 'WEBP', quality=80, method=6)
        while len(blob) % 4: blob.append(0)
        views.append({'buffer': 0, 'byteOffset': len(blob), 'byteLength': len(packed.getvalue())}); blob.extend(packed.getvalue())
        image['bufferView'] = len(views) - 1; shrunk += 1
    if not shrunk: return
    # Drop the bytes of the old pictures: rebuild the blob from the views still in use.
    used = sorted({a['bufferView'] for a in gltf['accessors']} | {i['bufferView'] for i in gltf.get('images', [])})
    out = bytearray(); remap = {}
    for index in used:
        v = dict(views[index]); raw = bytes(blob[v.get('byteOffset', 0):v.get('byteOffset', 0) + v['byteLength']])
        while len(out) % 4: out.append(0)
        v['byteOffset'] = len(out); out.extend(raw); remap[index] = len(remap); views[index] = v
    gltf['bufferViews'] = [views[i] for i in used]
    for a in gltf['accessors']: a['bufferView'] = remap[a['bufferView']]
    for i in gltf.get('images', []): i['bufferView'] = remap[i['bufferView']]
    while len(out) % 4: out.append(0)
    gltf['buffers'] = [{'byteLength': len(out)}]
    text = json.dumps(gltf, separators=(',', ':')).encode(); text += b' ' * (-len(text) % 4)
    total = 12 + 8 + len(text) + 8 + len(out)
    path.write_bytes(struct.pack('<III', 0x46546C67, 2, total) + struct.pack('<II', len(text), 0x4E4F534A) + text + struct.pack('<II', len(out), 0x004E4942) + bytes(out))
    print(f'{path.stem}: {shrunk} maps to {side} px, {len(data) // 1024} -> {total // 1024} KB')

if __name__ == '__main__':
    wanted = set(sys.argv[1:])
    for path in sorted(ROOT.glob('objetos/*.glb')):
        if wanted and path.stem not in wanted: continue
        lighten(path, 512 if path.stem in BIG else 256)
