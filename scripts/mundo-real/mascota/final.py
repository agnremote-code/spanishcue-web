def tris(o):
    dg=bpy.context.evaluated_depsgraph_get(); me=o.evaluated_get(dg).to_mesh(); me.calc_loop_triangles(); n=len(me.loop_triangles); o.evaluated_get(dg).to_mesh_clear(); return n
def ctx(o):
    for x in bpy.context.selected_objects: x.select_set(False)
    bpy.context.view_layer.objects.active=o; o.select_set(True)
def decimate(o,ratio,protect=None):
    keys=[k.name for k in o.data.shape_keys.key_blocks] if o.data.shape_keys else []
    if not keys:
        md=o.modifiers.new('dec','DECIMATE'); md.ratio=ratio
        if protect: md.vertex_group=protect; md.vertex_group_factor=8; md.invert_vertex_group=True
        ctx(o); bpy.ops.object.modifier_move_to_index(modifier='dec',index=0); bpy.ops.object.modifier_apply(modifier='dec'); return
    src=o.copy(); src.data=o.data.copy(); bpy.context.scene.collection.objects.link(src)
    for md in src.modifiers: md.show_viewport=False
    ctx(o); o.shape_key_clear()
    md=o.modifiers.new('dec','DECIMATE'); md.ratio=ratio
    if protect: md.vertex_group=protect; md.vertex_group_factor=8; md.invert_vertex_group=True
    bpy.ops.object.modifier_move_to_index(modifier='dec',index=0); bpy.ops.object.modifier_apply(modifier='dec')
    sd=o.modifiers.new('sd','SURFACE_DEFORM'); sd.target=src; sd.falloff=4
    bpy.ops.object.modifier_move_to_index(modifier='sd',index=0)
    for kb in src.data.shape_keys.key_blocks: kb.value=0
    bpy.ops.object.surfacedeform_bind(modifier='sd')
    o.shape_key_add(name='Basis',from_mix=False)
    for name in keys[1:]:
        for kb in src.data.shape_keys.key_blocks: kb.value=0
        src.data.shape_keys.key_blocks[name].value=1
        bpy.context.view_layer.update()
        bpy.ops.object.modifier_apply_as_shapekey(keep_modifier=True,modifier='sd')
        o.data.shape_keys.key_blocks[-1].name=name
    o.modifiers.remove(o.modifiers['sd'])
    bpy.data.objects.remove(src)
meshes=[o for o in bpy.data.objects if o.type=='MESH']
before={o.name:tris(o) for o in meshes}
print('BEFORE',before,sum(before.values()))
if STAGE=='final':
    # protect the face on the body
    hbz=B('head').z
    g=body.vertex_groups.new(name='protect')
    FACEW=float(args[2]) if len(args)>2 else 0.4
    g.add([v.index for v in body.data.vertices if (v.co.z>hbz-0.05 and v.co.y<B('head').y+0.02)],FACEW,'REPLACE')
    g.add([v.index for v in body.data.vertices if (B('neck_01').z-0.09<v.co.z<B('neck_01').z+0.03)],0.6,'REPLACE')
    import re
    HAND=re.compile(r'^(hand|thumb|index|middle|ring|pinky)_')
    hidx={vg.index for vg in body.vertex_groups if HAND.match(vg.name)}
    g.add([v.index for v in body.data.vertices if sum(x.weight for x in v.groups if x.group in hidx)>0.3],1.0,'REPLACE')
    plan={'Human':0.55,'Human.teeth_base':0.1,'Human.tongue01':0.4,'Human.male_casualsuit05':0.72,'Human.shoes02':0.4,'Human.short01':0.6,'Human.eyelashes01':0.6}
    print('PROTECTED', sum(1 for v in body.data.vertices if any(x.group==g.index for x in v.groups)), len(body.data.vertices))
    for n,r in plan.items():
        o=bpy.data.objects[n]; decimate(o,r,None)
    body.vertex_groups.remove(body.vertex_groups['protect'])
    # drop helper mesh
    lp=bpy.data.objects.get('Human.low-poly')
    after={o.name:tris(o) for o in bpy.data.objects if o.type=='MESH'}
    print('AFTER',after,sum(after.values()))
    # remove Root bone, rename to Mixamo
    MAP={'pelvis':'Hips','spine_01':'Spine','spine_02':'Spine1','spine_03':'Spine2','neck_01':'Neck','head':'Head'}
    for s,S_ in (('l','Left'),('r','Right')):
        MAP.update({f'clavicle_{s}':f'{S_}Shoulder',f'upperarm_{s}':f'{S_}Arm',f'lowerarm_{s}':f'{S_}ForeArm',f'hand_{s}':f'{S_}Hand',
                    f'thigh_{s}':f'{S_}UpLeg',f'calf_{s}':f'{S_}Leg',f'foot_{s}':f'{S_}Foot',f'ball_{s}':f'{S_}ToeBase'})
        for f,F in (('thumb','Thumb'),('index','Index'),('middle','Middle'),('ring','Ring'),('pinky','Pinky')):
            for i in (1,2,3): MAP[f'{f}_0{i}_{s}']=f'{S_}Hand{F}{i}'
    ctx(rig); bpy.ops.object.mode_set(mode='EDIT')
    eb=rig.data.edit_bones
    if 'Root' in eb:
        for c in eb['Root'].children: c.parent=None
        eb.remove(eb['Root'])
    bpy.ops.object.mode_set(mode='OBJECT')
    for o in bpy.data.objects:
        if o.type=='MESH' and 'Root' in o.vertex_groups: o.vertex_groups.remove(o.vertex_groups['Root'])
    for bn in rig.data.bones:
        if bn.name in MAP: bn.name='mixamorig:'+MAP[bn.name]   # vertex groups follow the rename
    rig.name='mascota'; rig.data.name='mascota'
    # scale to 1.80 m, soles at 0
    dg=bpy.context.evaluated_depsgraph_get()
    zs=[];
    for o in bpy.data.objects:
        if o.type!='MESH': continue
        me=o.evaluated_get(dg).to_mesh(); zs+= [(o.matrix_world@v.co).z for v in me.vertices]; o.evaluated_get(dg).to_mesh_clear()
    lo,hi=min(zs),max(zs); s=1.80/(hi-lo)
    print('height',hi-lo,'scale',s)
    rig.scale=(s,s,s); rig.location.z=-lo*s
    bpy.context.view_layer.update()
    for x in bpy.context.selected_objects: x.select_set(False)
    for o in bpy.data.objects: o.select_set(True)
    bpy.context.view_layer.objects.active=rig
    bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
    # names
    ren={'Human':'mascota_cuerpo','Human.male_casualsuit05':'mascota_ropa','Human.shoes02':'mascota_zapatillas','Human.short01':'mascota_pelo','Human.long01':'mascota_mullet','Human.eyebrow001':'mascota_cejas','Human.eyelashes01':'mascota_pestanas','Human.low-poly':'mascota_ojos','Human.teeth_base':'mascota_dientes','Human.tongue01':'mascota_lengua'}
    for a,b2 in ren.items():
        if a in bpy.data.objects: bpy.data.objects[a].name=b2
    for mat in bpy.data.materials:
        if not mat.use_nodes: continue
        pr=mat.node_tree.nodes.get('Principled BSDF')
        if not pr: continue
        if 'plata' in mat.name: pr.inputs['Metallic'].default_value=0.55; pr.inputs['Roughness'].default_value=0.32; continue
        if any(k in mat.name for k in ('short01','long01','eyebrow','eyelash')): continue
        for l in list(pr.inputs['Alpha'].links): mat.node_tree.links.remove(l)
        pr.inputs['Alpha'].default_value=1.0
    out=args[1]
    bpy.ops.export_scene.gltf(filepath=out,export_format='GLB',export_animations=False,export_skins=True,export_morph=True,export_yup=True,export_image_format='AUTO',export_apply=False,export_extras=False,use_selection=False)
    print('EXPORTED',out)
