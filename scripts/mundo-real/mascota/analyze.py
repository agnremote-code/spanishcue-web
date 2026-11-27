import sys,json,math; sys.path.insert(0,'/tmp/claude-0/-home-user/041eefb7-235b-5b7f-8522-9f6e4ff6ed1f/scratchpad/m')
from common import *
rig=load()
J=bpy.data.objects['Human.male_casualsuit05']
# pockets kept (the panel has holes under them)
out={}
arm=rig.matrix_world
def bone(n): return arm@rig.data.bones[n].head_local
bm=bmesh.new(); bm.from_mesh(J.data); uv=bm.loops.layers.uv.active
reg=J.data.attributes['_REGION']; R=[d.value for d in reg.data]
img=None
import numpy as np
im=bpy.data.images['male_casualsuit05_diffuse']; W,H=im.size; px=np.array(im.pixels[:]).reshape(H,W,4)
def texcol(f):
    u=sum(l[uv].uv[0] for l in f.loops)/len(f.loops); v=sum(l[uv].uv[1] for l in f.loops)/len(f.loops)
    return px[min(H-1,int(v*H)),min(W-1,int(u*W))][:3]
hand={s:bone('hand_'+s) for s in 'lr'}; fore={s:bone('lowerarm_'+s) for s in 'lr'}
cuffs=[];hem=[]
upper=[f for f in bm.faces if all(R[v.index]>0.5 for v in f.verts)]
zmin=min(v.co.z for f in upper for v in f.verts)
for f in upper:
    c=f.calc_center_median()
    for s in 'lr':
        d=(hand[s]-fore[s]).normalized(); t=(c-hand[s]).dot(d)
        if -0.075<t<0.05 and (c-hand[s]).length<0.12: cuffs.append([uvpx(l,uv) for l in f.loops])
    if c.z<zmin+0.055: hem.append([uvpx(l,uv) for l in f.loops])
out['cuffs']=cuffs; out['hem']=hem
SHIRT=[(595,15,705,310),(855,255,985,565)]
def is_shirt(f):
    xs=[uvpx(l,uv) for l in f.loops]; cx=sum(p[0] for p in xs)/len(xs); cy=sum(p[1] for p in xs)/len(xs)
    return any(a<=cx<=c and b<=cy<=d for a,b,c,d in SHIRT)
bnde=[e for e in bm.edges if e.is_boundary]
seen=set(); big=set()
for e in bnde:
    if e in seen: continue
    stack=[e]; grp=[]
    while stack:
        x=stack.pop()
        if x in seen: continue
        seen.add(x); grp.append(x)
        for v in x.verts:
            for y in v.link_edges:
                if y.is_boundary and y not in seen: stack.append(y)
    if len(grp)>=60: big.update(grp)
zip=[]
for e in bm.edges:
    if e not in big: continue
    fs=[f for f in e.link_faces if all(R[v.index]>0.5 for v in f.verts) and not is_shirt(f)]
    if len(fs)!=1: continue
    c=(e.verts[0].co+e.verts[1].co)/2
    if c.y<-0.05 and abs(c.x)<0.16 and c.z>zmin+0.01 and c.z<bone('spine_03').z+0.2:
        f=fs[0]; pts=[]
        for l in f.loops:
            if l.vert in e.verts: pts.append(uvpx(l,uv))
        zip.append(pts)
out['zip']=zip
# raycast patches
from mathutils.bvhtree import BVHTree

def patch(origin,direction,right,up,w,h):
    dg=bpy.context.evaluated_depsgraph_get()
    hit,loc,nor,idx,obj,mat=bpy.context.scene.ray_cast(dg,origin,direction)
    assert obj.name==J.name, obj.name
    me=obj.evaluated_get(dg).data
    poly=me.polygons[idx]; uvl=me.uv_layers.active.data
    li=list(poly.loop_indices)
    # pick the triangle of the polygon containing loc (fan)
    best=None
    for k in range(1,len(li)-1):
        tri=[li[0],li[k],li[k+1]]
        P=[me.vertices[me.loops[t].vertex_index].co.copy() for t in tri]
        c=(P[0]+P[1]+P[2])/3; d=(c-loc).length
        if best is None or d<best[0]: best=(d,tri,P)
    _,tri,P=best
    U=[mathutils.Vector((uvl[t].uv[0]*1024,(1-uvl[t].uv[1])*1024)) for t in tri]
    e1=P[1]-P[0]; e2=P[2]-P[0]
    def to_uv(q):
        qq=q-P[0]
        d00=e1.dot(e1);d01=e1.dot(e2);d11=e2.dot(e2);d20=qq.dot(e1);d21=qq.dot(e2); den=d00*d11-d01*d01
        b1=(d11*d20-d01*d21)/den; b2=(d00*d21-d01*d20)/den
        return list(U[0]+(U[1]-U[0])*b1+(U[2]-U[0])*b2)
    n=nor.normalized(); r=(right-n*right.dot(n)).normalized(); u=(up-n*up.dot(n)).normalized()
    corners=[loc-r*w/2+u*h/2, loc+r*w/2+u*h/2, loc+r*w/2-u*h/2, loc-r*w/2-u*h/2]
    return {'quad':[to_uv(q) for q in corners],'loc':list(loc)}
sp=bone('spine_03'); up_l=bone('upperarm_r'); el=bone('lowerarm_r')
Z=mathutils.Vector((0,0,1)); X=mathutils.Vector((1,0,0))
# Argentina: his left chest (+x), front is -y
out['ar']=patch(mathutils.Vector((0.125,-1,sp.z+0.235)),mathutils.Vector((0,1,0)),X,Z,0.085,0.055)
# USA: his right sleeve outer side, 9cm below shoulder
a=up_l+(el-up_l).normalized()*0.10
axis=(el-up_l).normalized(); outward=mathutils.Vector((-1,0,0)); outward=(outward-axis*outward.dot(axis)).normalized()
out['us']=patch(a+outward*0.5,-outward,mathutils.Vector((0,-1,0)),-axis,0.075,0.05)
# skin regions
body=strip_body(rig)
bb=bmesh.new(); bb.from_mesh(body.data); buv=bb.loops.layers.uv.active
hb=bone('head')
headv=[v for v in bb.verts if v.co.z>hb.z-0.12 and v.co.z<hb.z+0.2]
nose=min(headv,key=lambda v:v.co.y)
out['nose']=list(nose.co); out['head']=list(hb)
nz=nose.co.z; mouth=mathutils.Vector((0,nose.co.y+0.012,nz-0.035))
def stub(co):
    if co.z>nz-0.012 or co.z<hb.z-0.13: return 0
    if co.y>hb.y+0.02: return 0
    dx=abs(co.x)
    lip=((dx/0.03)**2+((co.z-mouth.z)/0.013)**2)
    if lip<1 and co.y<mouth.y+0.02: return 0
    w=1.0
    # fade at top (cheeks) and toward ears
    w*=min(1,(nz-0.012-co.z)/0.02)
    w*=min(1,max(0,(hb.y+0.02-co.y)/0.03))
    # neck: fade below jaw
    jaw=hb.z-0.075
    if co.z<jaw: w*=max(0,1-(jaw-co.z)/0.018)
    return max(0,min(1,w))
tris=[]
for f in bb.faces:
    ws=[stub(v.co) for v in f.verts]
    if max(ws)>0: tris.append({'p':[uvpx(l,buv) for l in f.loops],'w':sum(ws)/len(ws)})
out['stubble']=tris
# eyebrow slit: on his right brow (-x), outer third; find brow height ~ nose top
# take vertices of body near eyebrow mesh
eb=bpy.data.objects['Human.eyebrow001']
ebz=max(v.co.z for v in eb.data.vertices); ebxs=[v.co for v in eb.data.vertices if v.co.x<0]
cx=sum(c.x for c in ebxs)/len(ebxs)
out['brow']={'x':cx,'z':ebz}
json.dump(out,open('/tmp/claude-0/-home-user/041eefb7-235b-5b7f-8522-9f6e4ff6ed1f/scratchpad/m/uvdata.json','w'))
print('OK cuffs',len(cuffs),'hem',len(hem),'stub',len(tris),out['ar']['quad'],out['us']['quad'],'nose',out['nose'],'brow',out['brow'])
