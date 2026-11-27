import json, numpy as np, math, random
from PIL import Image, ImageDraw, ImageFilter
T='/home/user/spanishcue-web/public/mundo-real/gente/tex/'
O='tex/'
d=json.load(open('uvdata.json'))
rng=np.random.default_rng(7)
def arr(p): return np.asarray(Image.open(T+p).convert('RGBA')).astype(np.float32)/255
def save(a,p,q=None):
    im=Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8))
    im.save(O+p)
# ---------- flags
def flag_ar(W=360,H=230):
    im=Image.new('RGB',(W,H),(117,170,219)); D=ImageDraw.Draw(im)
    D.rectangle([0,H//3,W,2*H//3],fill=(250,250,250))
    cx,cy,r=W/2,H/2,H*0.11
    for k in range(32):
        a=k*math.pi/16; L=r*(1.9 if k%2==0 else 1.6)
        D.polygon([(cx+math.cos(a-0.09)*r*0.9,cy+math.sin(a-0.09)*r*0.9),(cx+math.cos(a)*L,cy+math.sin(a)*L),(cx+math.cos(a+0.09)*r*0.9,cy+math.sin(a+0.09)*r*0.9)],fill=(246,180,14))
    D.ellipse([cx-r,cy-r,cx+r,cy+r],fill=(246,180,14),outline=(133,52,15),width=2)
    return border(im,(235,235,235))
def flag_us(W=360,H=230):
    im=Image.new('RGB',(W,H),(255,255,255)); D=ImageDraw.Draw(im)
    for i in range(13):
        if i%2==0: D.rectangle([0,i*H/13,W,(i+1)*H/13],fill=(178,34,52))
    cw,ch=W*0.42,H*7/13
    D.rectangle([0,0,cw,ch],fill=(60,59,110))
    for r in range(9):
        n=6 if r%2==0 else 5
        for c in range(n):
            x=(c*2+(1 if r%2 else 0)+1)*cw/12; y=(r+1)*ch/10
            D.ellipse([x-3.2,y-3.2,x+3.2,y+3.2],fill=(255,255,255))
    return border(im,(196,150,62))
def border(im,col):
    W,H=im.size; B=Image.new('RGB',(W+24,H+24),col); B.paste(im,(12,12))
    D=ImageDraw.Draw(B)
    for i in range(0,W+24,5): D.line([(i,0),(i+3,11)],fill=tuple(int(c*0.8) for c in col)); D.line([(i,H+13),(i+3,H+23)],fill=tuple(int(c*0.8) for c in col))
    # embroidery texture
    a=np.asarray(B).astype(np.float32)/255
    n=rng.normal(0,0.035,a.shape[:2])[...,None]
    a=np.clip(a*(1+n),0,1)
    return Image.fromarray((a*255).astype(np.uint8))
def homography(src,dst):
    A=[];b=[]
    for (x,y),(u,v) in zip(src,dst):
        A.append([x,y,1,0,0,0,-u*x,-u*y]); b.append(u)
        A.append([0,0,0,x,y,1,-v*x,-v*y]); b.append(v)
    return np.linalg.solve(np.array(A),np.array(b))
def paste_quad(base,flag,quad,S=1):
    W,H=flag.size
    q=[(x*S,y*S) for x,y in quad]
    coeffs=homography(q,[(0,0),(W,0),(W,H),(0,H)])  # output->input
    warped=flag.convert('RGBA').transform(base.size,Image.PERSPECTIVE,coeffs,Image.BICUBIC)
    mask=Image.new('L',flag.size,255).transform(base.size,Image.PERSPECTIVE,coeffs,Image.BICUBIC)
    warped.putalpha(mask)
    base.alpha_composite(warped)
# ---------- outfit (upscaled to 2048 for crisp patches)
S=2
src=arr('male_casualsuit05_diffuse.webp')[...,:3]
src=np.asarray(Image.fromarray((src*255).astype(np.uint8)).resize((1024*S,1024*S),Image.LANCZOS)).astype(np.float32)/255
Hh,Ww=src.shape[:2]
yy,xx=np.mgrid[0:Hh,0:Ww]/S
lum=src@np.array([0.2126,0.7152,0.0722])
bg=src.max(-1)<0.06
jeans=(yy>565)&(xx<610)
def rect(r): a,b,c,e=r; return (xx>=a)&(xx<=c)&(yy>=b)&(yy<=e)
shirt=rect((595,15,705,310))|rect((855,255,985,565))
collar=rect((0,118,215,228))|rect((622,568,822,648))
out=np.zeros_like(src)
# black nylon: keep folds and seams
m=np.median(lum[~bg&~jeans&~shirt&~collar])
nyl=np.clip(0.045+(lum-m)*0.45,0.012,0.16)
nn=rng.normal(0,0.006,lum.shape)
out[...]=(nyl+nn)[...,None]*np.array([0.95,0.97,1.04])
# white tee
tee=0.90+rng.normal(0,0.012,lum.shape)
out[shirt]=(tee[...,None]*np.array([1,0.99,0.97]))[shirt]
# rib (collar)
rib=0.03+0.025*(np.sin(xx*S*1.6)>0)+rng.normal(0,0.004,lum.shape)
out[collar]=(rib[...,None]*np.array([1,1,1.05]))[collar]
# jeans: dark indigo, softer wash
mj=np.median(lum[jeans&~bg])
jl=np.clip(0.55+(lum-mj)*1.1,0.25,1.2)
ind=np.array([0.10,0.14,0.27])
sat=src-lum[...,None]
orange=(src[...,0]>src[...,2]+0.08)&jeans
jcol=jl[...,None]*ind
jcol[orange]=src[orange]*0.75
out[jeans]=jcol[jeans]
for r in [(645,810,722,892),(655,907,737,1002),(897,813,977,889),(883,907,963,1000)]:
    mm=rect(r)&~bg
    out[mm]=(0.045+nn[mm])[...,None]*np.array([0.95,0.97,1.04])
out[bg]=0
img=Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8)).convert('RGBA')
D=ImageDraw.Draw(img)
# rib cuffs and hem: dark band with fine knit
ribimg=Image.fromarray((np.clip(np.stack([rib*1.0,rib,rib*1.05],-1),0,1)*255).astype(np.uint8)).convert('RGBA')
mask=Image.new('L',img.size,0); MD=ImageDraw.Draw(mask)
for p in d['cuffs']+d['hem']: MD.polygon([(x*S,y*S) for x,y in p],fill=255)
mask=mask.filter(ImageFilter.MaxFilter(3))
img.paste(ribimg,(0,0),mask)
# zipper
for seg in d['zip']:
    if len(seg)<2: continue
    (x1,y1),(x2,y2)=seg[0],seg[1]
    if not (x1>615 and y1>675): continue
    D.line([(x1*S,y1*S),(x2*S,y2*S)],fill=(70,70,74,255),width=7)
    D.line([(x1*S,y1*S),(x2*S,y2*S)],fill=(150,150,155,255),width=3)
paste_quad(img,flag_ar(),d['ar']['quad'],S)
paste_quad(img,flag_us(),d['us']['quad'],S)
img.convert('RGB').save(O+'mascota_ropa.jpg',quality=90)
# ---------- shoes: white leather, cream sole
s=arr('shoes02_diffuse.webp')[...,:3]; sl=s@np.array([0.2126,0.7152,0.0722])
k=(sl-sl.mean())/max(1e-3,sl.std())
w=np.clip(0.86+k*0.05,0.6,0.97)[...,None]*np.array([1,1,0.985])
Image.fromarray((w*255).astype(np.uint8)).resize((512,512),Image.LANCZOS).save(O+'mascota_zapas.jpg',quality=90)
# ---------- hair: platinum with darker roots
for h in ['short01','long01']:
    a=arr(h+'_diffuse.webp'); l=a[...,:3]@np.array([0.2126,0.7152,0.0722])
    t=np.clip((l-0.15)/0.75,0,1)[...,None]
    root=np.array([0.42,0.36,0.27]); plat=np.array([0.95,0.90,0.78])
    c=root*(1-t)+plat*t
    out=np.concatenate([c,a[...,3:]],-1)
    save(out,'mascota_'+h+'.png')
# ---------- skin with stubble
sk=Image.open(T+'piel_young_caucasian_male.webp').convert('RGB')
W=sk.size[0]; f=W/1024
wm=Image.new('L',sk.size,0); WD=ImageDraw.Draw(wm)
for t in d['stubble']: WD.polygon([(x*f,y*f) for x,y in t['p']],fill=int(255*t['w']))
wm=wm.filter(ImageFilter.GaussianBlur(4*f))
a=np.asarray(sk).astype(np.float32)/255
wa=np.asarray(wm).astype(np.float32)/255
dots=(rng.random(wa.shape)<0.45).astype(np.float32)
dots=np.asarray(Image.fromarray((dots*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))).astype(np.float32)/255
st=np.array([0.36,0.28,0.19])
al=(wa*0.62*(0.35+0.65*dots))[...,None]
a=a*np.array([1.0,0.92,0.83]); a=a*(1-al)+st*al
Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).save(O+'mascota_piel.jpg',quality=92)
# ---------- eyes: grey-green hazel
e=arr('brown_eye.webp'); rgb=e[...,:3]; l=rgb@np.array([0.2126,0.7152,0.0722])
satm=(rgb.max(-1)-rgb.min(-1))>0.08
iris=np.stack([l*0.78,l*1.0,l*0.92],-1)*1.25
rgb[satm]=np.clip(iris[satm],0,1)
save(np.concatenate([rgb,e[...,3:]],-1),'mascota_ojos.png')
print('ok')
