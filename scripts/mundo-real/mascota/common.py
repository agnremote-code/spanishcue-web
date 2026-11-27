import bpy, bmesh, mathutils
G='/home/user/spanishcue-web/public/mundo-real/gente/m_cau'
POCKETS=[(180,110,262,167),(428,133,517,197),(428,213,517,272),(255,352,297,445),(252,462,297,553),(862,143,947,187),(862,203,942,242),(833,582,918,642)]
def load():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for p in ['cuerpo','male_casualsuit05','shoes02','short01','long01']:
        bpy.ops.import_scene.gltf(filepath=f'{G}/{p}.glb')
    rig=bpy.data.objects['Human.rig']
    for o in list(bpy.data.objects):
        if o.name.startswith('Icosphere'): bpy.data.objects.remove(o)
    for o in list(bpy.data.objects):
        if o.type=='MESH' and o.parent!=rig:
            mw=o.matrix_world.copy(); o.parent=rig; o.matrix_world=mw
            for md in o.modifiers:
                if md.type=='ARMATURE': md.object=rig
    for o in list(bpy.data.objects):
        if o.type=='ARMATURE' and o!=rig: bpy.data.objects.remove(o)
    return rig
def delete_faces(obj, pred):
    bm=bmesh.new(); bm.from_mesh(obj.data); uv=bm.loops.layers.uv.active
    dead=[f for f in bm.faces if pred(f,uv)]
    bmesh.ops.delete(bm, geom=dead, context='FACES'); bm.to_mesh(obj.data); bm.free()
def uvpx(l,uv,W=1024): u,v=l[uv].uv; return (u*W,(1-v)*W)
def in_pocket(f,uv):
    xs=[uvpx(l,uv) for l in f.loops]; cx=sum(p[0] for p in xs)/len(xs); cy=sum(p[1] for p in xs)/len(xs)
    return any(a<=cx<=c and b<=cy<=d for a,b,c,d in POCKETS)
def strip_body(rig):
    body=bpy.data.objects['Human']; m=body.data
    vals=[int(d.value) for d in m.attributes['_MASK'].data]; bits=(1<<2)|(1<<7)
    delete_faces(body, lambda f,uv: any(vals[v.index]&bits for v in f.verts))
    return body
