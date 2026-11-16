# Builds the cast parts with MPFB (MakeHuman): for every body, one GLB with the body and face
# (skeleton, face morphs) and one GLB per outfit, pair of shoes and hairstyle fitted to it.
# Run: blender -b --python gen2.py -- <spec.json> <outdir>
import bpy, sys, json, os, traceback, bmesh
import numpy as np
from bl_ext.user_default.mpfb.services.humanservice import HumanService
from bl_ext.user_default.mpfb.services.targetservice import TargetService
from bl_ext.user_default.mpfb.services.clothesservice import ClothesService

A = '/home/user/tools/mh/assets'
argv = sys.argv[sys.argv.index('--') + 1:]
specs = json.load(open(argv[0])); out = argv[1]
EXPR = '/root/.config/blender/4.5/extensions/user_default/mpfb/data/targets/expression/units'
MORPHS = {
    'blink': ['eye-left-closure', 'eye-right-closure'], 'wide': ['eye-left-opened-up', 'eye-right-opened-up'],
    'browDown': ['eyebrows-left-down', 'eyebrows-right-down'], 'browUp': ['eyebrows-left-up', 'eyebrows-right-up'],
    'browInner': ['eyebrows-left-inner-up', 'eyebrows-right-inner-up'], 'smile': ['mouth-corner-puller'],
    'frown': ['mouth-depression'], 'open': ['mouth-open'], 'pucker': ['mouth-pursing'], 'part': ['mouth-parling'],
}
LEGS = ('thigh', 'calf', 'foot', 'ball', 'pelvis')

def coords(obj):
    a = np.empty(len(obj.data.vertices) * 3, dtype=np.float32); obj.data.vertices.foreach_get('co', a); return a

def masked(o, m):
    g = o.vertex_groups.get(m.vertex_group)
    if g is None: return set()
    inside = {v.index for v in o.data.vertices if any(x.group == g.index and x.weight > 0.5 for x in v.groups)}
    return inside if m.invert_vertex_group else (set(range(len(o.data.vertices))) - inside)

def apply_masks(o):
    hide = set()
    for m in [m for m in o.modifiers if m.type == 'MASK']:
        hide |= masked(o, m); o.modifiers.remove(m)
    if hide:
        bm = bmesh.new(); bm.from_mesh(o.data); bm.verts.ensure_lookup_table()
        bmesh.ops.delete(bm, geom=[bm.verts[i] for i in hide], context='VERTS'); bm.to_mesh(o.data); bm.free()

def regions(o):
    # 1 for garments worn on the torso, 0 for those on the legs: each loose piece goes where most of its weight is.
    names = {g.index: g.name for g in o.vertex_groups}
    leg = np.array([sum(x.weight for x in v.groups if names[x.group].startswith(LEGS)) for v in o.data.vertices])
    bm = bmesh.new(); bm.from_mesh(o.data); bm.verts.ensure_lookup_table()
    seen = set(); value = np.ones(len(bm.verts), dtype=np.float32)
    for v in bm.verts:
        if v.index in seen: continue
        stack = [v]; island = []
        seen.add(v.index)
        while stack:
            x = stack.pop(); island.append(x.index)
            for e in x.link_edges:
                y = e.other_vert(x)
                if y.index not in seen: seen.add(y.index); stack.append(y)
        if leg[island].mean() > 0.5: value[island] = 0.0
    bm.free()
    a = o.data.attributes.new('_REGION', 'FLOAT', 'POINT'); a.data.foreach_set('value', value)

def export(objs, path):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.hide_set(False); o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', use_selection=True, export_apply=False, export_skins=True,
        export_morph=True, export_morph_normal=False, export_animations=False, export_yup=True, export_attributes=True,
        export_tangents=False, export_image_format='AUTO')

def build(spec):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.preferences.addon_enable(module='bl_ext.user_default.mpfb')
    d = f"{out}/{spec['id']}"; os.makedirs(d, exist_ok=True)
    macro = TargetService.get_default_macro_info_dict()
    macro.update({k: spec[k] for k in ('gender', 'age', 'muscle', 'weight', 'height', 'proportions', 'cupsize', 'firmness') if k in spec})
    macro['race'] = spec['race']
    base = HumanService.create_human(mask_helpers=True, detailed_helpers=False, extra_vertex_groups=True, feet_on_ground=False, scale=0.1, macro_detail_dict=macro)
    HumanService.add_builtin_rig(base, 'game_engine', import_weights=True)
    HumanService.set_character_skin(f"{A}/skins/{spec['skin']}/{spec['skin']}.mhmat", base, skin_type='GAMEENGINE')
    def add(kind, name, asset_type):
        before = set(bpy.data.objects)
        HumanService.add_mhclo_asset(f'{A}/{kind}/{name}/{name}.mhclo', base, asset_type=asset_type, subdiv_levels=0, material_type='GAMEENGINE')
        return [o for o in bpy.data.objects if o not in before][0]
    face = [add('eyes', 'low-poly', 'Eyes'), add('eyebrows', spec.get('eyebrows', 'eyebrow001'), 'Eyebrows'),
            add('eyelashes', 'eyelashes01', 'Eyelashes'), add('teeth', 'teeth_base', 'Teeth'), add('tongue', 'tongue01', 'Tongue')]
    # Outfits, shoes and hair: each one notes which body vertices it covers in a bit of _MASK.
    mask = np.zeros(len(base.data.vertices), dtype=np.float32)
    parts = []; bits = {}
    for kind, names in (('clothes', spec['clothes'] + spec['shoes']), ('hair', spec['hair'])):
        for name in names:
            known = set(m.name for m in base.modifiers)
            o = add(kind, name, 'Hair' if kind == 'hair' else 'Clothes')
            hide = set()
            for m in [m for m in base.modifiers if m.name not in known and m.type == 'MASK']:
                hide |= masked(base, m); base.modifiers.remove(m)
            if hide:
                bits[name] = len(bits); mask[list(hide)] += 2 ** bits[name]
            parts.append((kind, name, o))
    base.data.attributes.new('_MASK', 'FLOAT', 'POINT').data.foreach_set('value', mask)
    race = max(spec['race'].items(), key=lambda kv: kv[1])[0]
    TargetService.bake_targets(base)
    base.shape_key_add(name='Basis', from_mix=False)
    for name, units in MORPHS.items():
        for u in units: TargetService.load_target(base, f'{EXPR}/{race}/{u}.target.gz', weight=1.0, name='u_' + u)
        key = base.shape_key_add(name=name, from_mix=True); key.value = 0
        for u in units: base.shape_key_remove(base.data.shape_keys.key_blocks['u_' + u])
    moving = [o for o in face if 'low-poly' not in o.name]
    rest = {o.name: coords(o) for o in moving}; moved = {}
    for name in MORPHS:
        base.data.shape_keys.key_blocks[name].value = 1
        for o in moving:
            ClothesService.fit_clothes_to_human(o, base, set_parent=False); moved[(o.name, name)] = coords(o)
        base.data.shape_keys.key_blocks[name].value = 0
    for o in moving:
        o.data.vertices.foreach_set('co', rest[o.name]); o.data.update()
        o.shape_key_add(name='Basis', from_mix=False)
        for name in MORPHS:
            k = o.shape_key_add(name=name, from_mix=False); k.data.foreach_set('co', moved[(o.name, name)]); k.value = 0
    for o in [base] + face + [p[2] for p in parts]: apply_masks(o)
    arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]
    export([base, arm] + face, f'{d}/cuerpo.glb')
    for kind, name, o in parts:
        if kind == 'clothes' and not name.startswith('shoes'): regions(o)
        export([o, arm], f'{d}/{name}.glb')
    json.dump({'bits': bits}, open(f'{d}/info.json', 'w'))
    print('BUILT', spec['id'], bits, [(o.name, len(o.data.vertices)) for o in [base] + [p[2] for p in parts]])

for spec in specs:
    try: build(spec)
    except Exception: traceback.print_exc()
