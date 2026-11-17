"""Downloads scanned objects from Poly Haven (CC0) and packs each one as a small
self-contained GLB in public/mundo-real/objetos: only positions, normals, UVs
and indices, textures as 512 px WebP.

  python3 scripts/mundo-real/modelos.py [name ...]
"""
import io, json, struct, sys, urllib.request
from pathlib import Path
from PIL import Image

OUT = Path(__file__).resolve().parents[2] / 'public' / 'mundo-real' / 'objetos'
MODELS = [
    'potted_plant_04', 'anthurium_botany_01', 'fern_02', 'calathea_orbifolia_01',
    'sofa_02', 'sofa_03', 'modern_arm_chair_01', 'ArmChair_01', 'Ottoman_01', 'SchoolChair_01', 'GreenChair_01', 'mid_century_lounge_chair',
    'CoffeeTable_01', 'coffee_table_round_01', 'side_table_01', 'round_wooden_table_01', 'WoodenTable_01', 'wooden_table_02',
    'steel_frame_shelves_01', 'wooden_display_shelves_01', 'Shelf_01', 'GothicCabinet_01', 'vintage_wooden_drawer_01', 'ClassicNightstand_01', 'GothicBed_01',
    'modern_ceiling_lamp_01', 'desk_lamp_arm_01', 'Television_01', 'fancy_picture_frame_01', 'hanging_picture_frame_02', 'standing_picture_frame_01',
    'ceramic_vase_01', 'ceramic_vase_02', 'brass_vase_03', 'WetFloorSign_01', 'CashRegister_01', 'metal_trash_can', 'cardboard_box_01', 'throw_pillows_01',
    'street_lamp_01', 'wooden_picnic_table', 'plastic_monobloc_chair_01', 'CoffeeCart_01',
]
KEEP = ('POSITION', 'NORMAL', 'TEXCOORD_0')

def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'texture-fetch'}), timeout=120).read()

def pack(name):
    files = json.loads(fetch(f'https://api.polyhaven.com/files/{name}'))['gltf']['1k']['gltf']
    gltf = json.loads(fetch(files['url']))
    include = files['include']
    buffers = [fetch(include[b['uri']]['url']) for b in gltf['buffers']]
    blob = bytearray()
    views = []
    def view(data, target=None):
        while len(blob) % 4: blob.append(0)
        entry = {'buffer': 0, 'byteOffset': len(blob), 'byteLength': len(data)}
        if target: entry['target'] = target
        blob.extend(data); views.append(entry)
        return len(views) - 1
    SIZE = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}
    BYTES = {5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4}
    accessors, remap = [], {}
    def accessor(index, target):
        if index in remap: return remap[index]
        a = dict(gltf['accessors'][index])
        v = gltf['bufferViews'][a['bufferView']]
        width = SIZE[a['type']] * BYTES[a['componentType']]
        start = v.get('byteOffset', 0) + a.get('byteOffset', 0)
        stride = v.get('byteStride') or width
        source = buffers[v['buffer']]
        data = b''.join(source[start + i * stride:start + i * stride + width] for i in range(a['count'])) if stride != width else source[start:start + a['count'] * width]
        a['bufferView'] = view(data, target); a.pop('byteOffset', None)
        accessors.append(a); remap[index] = len(accessors) - 1
        return remap[index]
    triangles = 0
    for mesh in gltf['meshes']:
        for prim in mesh['primitives']:
            prim['attributes'] = {k: accessor(v, 34962) for k, v in prim['attributes'].items() if k in KEEP}
            if 'indices' in prim:
                prim['indices'] = accessor(prim['indices'], 34963); triangles += accessors[prim['indices']]['count'] // 3
            prim.pop('targets', None)
    for i, image in enumerate(gltf.get('images', [])):
        picture = Image.open(io.BytesIO(fetch(include[image['uri']]['url'])))
        picture = picture.convert('RGBA' if picture.mode in ('RGBA', 'LA', 'P') else 'RGB')
        picture.thumbnail((512, 512), Image.LANCZOS)
        out = io.BytesIO(); picture.save(out, 'WEBP', quality=80, method=6)
        gltf['images'][i] = {'bufferView': view(out.getvalue()), 'mimeType': 'image/webp'}
    for texture in gltf.get('textures', []):
        texture['extensions'] = {'EXT_texture_webp': {'source': texture.pop('source')}}
    for material in gltf.get('materials', []):
        material.get('normalTexture', {}).pop('scale', None) if False else None
    gltf['extensionsUsed'] = sorted(set(gltf.get('extensionsUsed', [])) | {'EXT_texture_webp'})
    gltf['extensionsRequired'] = ['EXT_texture_webp']
    gltf['accessors'] = accessors; gltf['bufferViews'] = views
    while len(blob) % 4: blob.append(0)
    gltf['buffers'] = [{'byteLength': len(blob)}]
    text = json.dumps(gltf, separators=(',', ':')).encode()
    text += b' ' * (-len(text) % 4)
    total = 12 + 8 + len(text) + 8 + len(blob)
    (OUT / f'{name}.glb').write_bytes(struct.pack('<III', 0x46546C67, 2, total) + struct.pack('<II', len(text), 0x4E4F534A) + text + struct.pack('<II', len(blob), 0x004E4942) + bytes(blob))
    print(f'{name}: {triangles} tris, {total // 1024} KB')

if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    for model in sys.argv[1:] or MODELS:
        try: pack(model)
        except Exception as error: print(model, 'FAILED', error)
