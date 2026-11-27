import bpy,sys,math,mathutils,bmesh
M='/tmp/claude-0/-home-user/041eefb7-235b-5b7f-8522-9f6e4ff6ed1f/scratchpad/m'
sys.path.insert(0,M)
from common import *
args=sys.argv[sys.argv.index('--')+1:]
STAGE=args[0]  # 'look' or 'final'
rig=load()
def B(n): return rig.matrix_world@rig.data.bones[n].head_local
def setimg(mat_sub,path):
    for mat in bpy.data.materials:
        if mat_sub in mat.name and mat.use_nodes:
            for n in mat.node_tree.nodes:
                if n.type=='TEX_IMAGE' and n.image and 'normal' not in n.image.name.lower():
                    img=bpy.data.images.load(path); n.image=img
                    return mat
body=strip_body(rig)
setimg('Human.body',f'{M}/tex/mascota_piel.jpg')
setimg('male_casualsuit05',f'{M}/tex/mascota_ropa.jpg')
setimg('shoes02',f'{M}/tex/mascota_zapas.jpg')
setimg('short01',f'{M}/tex/mascota_short01.png')
setimg('long01',f'{M}/tex/mascota_long01.png')
setimg('low-poly',f'{M}/tex/mascota_ojos.png')
for mat in bpy.data.materials:
    if mat.use_nodes:
        p=mat.node_tree.nodes.get('Principled BSDF')
        if not p: continue
        p.inputs['Metallic'].default_value=0
        if 'casualsuit' in mat.name: p.inputs['Roughness'].default_value=0.78
        if 'shoes' in mat.name: p.inputs['Roughness'].default_value=0.5
        if 'body' in mat.name: p.inputs['Roughness'].default_value=0.55; p.inputs['Base Color'].default_value=(1,0.93,0.86,1)
        if 'eyebrow' in mat.name: p.inputs['Base Color'].default_value=(0.32,0.25,0.17,1)
# ---- mullet: hair cards from the nape, textured with long01 strands
from mathutils.bvhtree import BVHTree
L=bpy.data.objects['Human.long01']; hb=B('head')
bmb=bmesh.new(); bmb.from_mesh(body.data); bvh=BVHTree.FromBMesh(bmb)
EAR=hb.z+0.165; NAPE=B('neck_01').z-0.03
hc=mathutils.Vector((0,hb.y+0.005,0))
def surf(theta,z,extra):
    d=mathutils.Vector((math.sin(theta),math.cos(theta),0))
    o=mathutils.Vector((hc.x,hc.y,z))
    loc,nor,i,dist=bvh.ray_cast(o+d*0.4,-d)
    if loc is None: loc=o+d*0.08
    return loc+d*extra
import random
random.seed(3)
me_bm=bmesh.new(); uvl=me_bm.loops.layers.uv.new('UVMap')
ROWS=6
for layer,(n,ext,span) in enumerate([(15,0.000,1.35),(11,0.006,1.15)]):
    for i in range(n):
        th=-span+2*span*i/(n-1)+random.uniform(-0.04,0.04)
        length=1.0-0.35*(abs(th)/span)**2
        top=EAR-0.045*(abs(th)/span)**2
        zb=top-(top-NAPE)*length
        w=0.042
        tang=mathutils.Vector((math.cos(th),-math.sin(th),0))
        u0=random.uniform(0.645,0.976-0.13); u1=u0+0.13
        verts=[]
        for r in range(ROWS):
            t=r/(ROWS-1)
            z=top+0.01-(top+0.01-zb)*t
            p=surf(th,z,ext+0.003+0.014*t**2.2)
            verts.append((me_bm.verts.new(p-tang*w/2),me_bm.verts.new(p+tang*w/2),t))
        for r in range(ROWS-1):
            a1,b1,t1=verts[r]; a2,b2,t2=verts[r+1]
            f=me_bm.faces.new((a1,b1,b2,a2))
            for l,(u,t) in zip(f.loops,[(u0,t1),(u1,t1),(u1,t2),(u0,t2)]):
                l[uvl].uv=(u,0.883-(0.883-0.02)*t)
tail=bpy.data.meshes.new('mascota_mullet'); me_bm.to_mesh(tail); me_bm.free()
old=L.data; L.data=tail; L.data.materials.append(old.materials[0])
for vg in list(L.vertex_groups): L.vertex_groups.remove(vg)
g=L.vertex_groups.new(name='head'); g.add([v.index for v in L.data.vertices],1.0,'REPLACE')
L.matrix_world=mathutils.Matrix.Identity(4); L.matrix_parent_inverse=rig.matrix_world.inverted()
# ---- jacket: no cargo pockets (a bomber has none); patch the holes under them
J=bpy.data.objects['Human.male_casualsuit05']
bm=bmesh.new(); bm.from_mesh(J.data); uv=bm.loops.layers.uv.active
LAPELS=[(315,50,415,280),(720,80,815,305)]
def in_rect(f,rs):
    xs=[uvpx(l,uv) for l in f.loops]; cx=sum(p[0] for p in xs)/len(xs); cy=sum(p[1] for p in xs)/len(xs)
    return any(a<=cx<=c and b2<=cy<=d for a,b2,c,d in rs)
bmesh.ops.delete(bm,geom=[f for f in bm.faces if in_pocket(f,uv) or in_rect(f,LAPELS)],context='FACES')
bnd=[e for e in bm.edges if e.is_boundary]
# group boundary edges into loops
seen=set(); loops=[]
for e in bnd:
    if e in seen: continue
    stack=[e]; grp=[]
    while stack:
        x=stack.pop()
        if x in seen: continue
        seen.add(x); grp.append(x)
        for v in x.verts:
            for y in v.link_edges:
                if y.is_boundary and y not in seen: stack.append(y)
    loops.append(grp)
s3=B('spine_03')
for grp in loops:
    vs={v for e in grp for v in e.verts}; c=sum((v.co for v in vs),mathutils.Vector())/len(vs)
    if len(grp)<150 and c.y<-0.04 and abs(c.x)>0.03 and c.z<s3.z+0.25:
        r=bmesh.ops.holes_fill(bm,edges=grp,sides=0)
        for f in r['faces']:
            for l in f.loops: l[uv].uv=(150/1024,1-400/1024)
bmesh.ops.triangulate(bm,faces=[f for f in bm.faces if len(f.verts)>4])
bm.to_mesh(J.data); bm.free()
# ---- chains
def tube(name,pts,radius,bone,mat_color,cyclic=False):
    cu=bpy.data.curves.new(name,'CURVE'); cu.dimensions='3D'; cu.bevel_depth=radius; cu.bevel_resolution=1; cu.resolution_u=3
    sp=cu.splines.new('POLY'); sp.points.add(len(pts)-1)
    for p,c in zip(sp.points,pts): p.co=(c[0],c[1],c[2],1)
    sp.use_cyclic_u=cyclic
    o=bpy.data.objects.new(name,cu); bpy.context.scene.collection.objects.link(o)
    bpy.context.view_layer.objects.active=o; o.select_set(True)
    bpy.ops.object.convert(target='MESH'); o=bpy.context.view_layer.objects.active; o.select_set(False)
    return finish(o,bone,mat_color)
def finish(o,bone,mat_color):
    mat=bpy.data.materials.get('mascota_plata') or bpy.data.materials.new('mascota_plata')
    mat.use_nodes=True; p=mat.node_tree.nodes['Principled BSDF']; p.inputs['Base Color'].default_value=mat_color; p.inputs['Metallic'].default_value=1; p.inputs['Roughness'].default_value=0.3
    o.data.materials.clear(); o.data.materials.append(mat)
    o.parent=rig
    g=o.vertex_groups.new(name=bone); g.add([v.index for v in o.data.vertices],1.0,'REPLACE')
    md=o.modifiers.new('Armature','ARMATURE'); md.object=rig
    return o
def cross(name,c,size,bone):
    bm=bmesh.new()
    for sx,sz,oz in [(size*0.22,size,0),(size*0.62,size*0.22,size*0.18)]:
        r=bmesh.ops.create_cube(bm,size=1)
        for v in r['verts']: v.co=mathutils.Vector((v.co.x*sx+c[0],v.co.y*size*0.12+c[1],v.co.z*sz+c[2]+oz))
    me=bpy.data.meshes.new(name); bm.to_mesh(me); o=bpy.data.objects.new(name,me); bpy.context.scene.collection.objects.link(o)
    return finish(o,bone,(0.8,0.8,0.82,1))
# find neck surface to hang the chain on the body/tee
nk=B('neck_01'); s3=B('spine_03')
hairs=[bpy.data.objects['Human.long01'],bpy.data.objects['Human.short01']]
for h in hairs: h.hide_viewport=True
bpy.context.view_layer.update()
dg=bpy.context.evaluated_depsgraph_get()
def onsurf(x,z,front=True,off=0.004):
    o=mathutils.Vector((x,-0.6 if front else 0.6,z)); d=mathutils.Vector((0,1 if front else -1,0))
    hit,loc,nor,idx,obj,mat=bpy.context.scene.ray_cast(dg,o,d)
    return (loc+nor*off) if hit else None
pts=[]
N=24
for i in range(N+1):
    t=i/N; a=math.pi*(t-0.5)  # -90..90 deg across the front
    x=math.sin(a)*0.058
    z=nk.z-0.015-0.055*math.cos(a)**2
    p=onsurf(x,z)
    if p: pts.append(tuple(p))
# close behind the neck
for i in range(1,8):
    a=math.pi/2+math.pi*i/8
    pts.append((math.sin(a)*0.062, nk.y+0.035-math.cos(a)*0.0, nk.z-0.01))
for h in hairs: h.hide_viewport=False
chain=tube('mascota_cadena',pts,0.0022,'spine_03',(0.8,0.8,0.82,1),cyclic=True)
front=min(pts[:N+1],key=lambda p:p[2])
fp=onsurf(0,front[2]-0.03,off=0.006) if False else None
cross('mascota_cruz',(front[0],front[1]-0.006,front[2]-0.026),0.034,'spine_03')
# wallet chain: front belt loop on his right hip, sagging, round to the back pocket
pv=B('pelvis')
for h in hairs: h.hide_viewport=True
bpy.context.view_layer.update(); dg=bpy.context.evaluated_depsgraph_get()
def side(y,z,off=0.004):
    o=mathutils.Vector((-0.6,y,z)); hit,loc,nor,idx,obj,mat=bpy.context.scene.ray_cast(dg,o,mathutils.Vector((1,0,0)))
    return (loc+nor*off) if hit else None
wc=[]
for i in range(13):
    t=i/12
    z=pv.z-0.03-0.075*math.sin(math.pi*t)
    if t<0.45:
        p=onsurf(-0.105-0.06*(t/0.45),z)
    else:
        p=side(-0.06+0.17*((t-0.45)/0.55),z)
    if p: wc.append(tuple(p))
for h in hairs: h.hide_viewport=False
tube('mascota_cadena_jean',wc,0.0026,'pelvis',(0.8,0.8,0.82,1))
mid=min(wc,key=lambda p:p[2])
cross('mascota_cruz_jean',(mid[0]-0.006,mid[1],mid[2]-0.028),0.03,'pelvis')
[bpy.data.objects.remove(o) for o in list(bpy.data.objects) if o.name.startswith('Icosphere')]
exec(open(f'{M}/final.py').read())
bpy.ops.wm.save_as_mainfile(filepath=f'{M}/mascota_{STAGE}.blend')
if STAGE=='look':
    exec(open(f'{M}/rig_render.py').read())
    render(f'{M}/lk',[(0,'front'),(330,'q'),(90,'side'),(180,'back')],1.95,0.0)
    render(f'{M}/hd',[(0,'front'),(330,'q'),(90,'side'),(160,'back')],0.5,0.70,(600,600))
