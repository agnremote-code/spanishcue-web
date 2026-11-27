def render(out, views, scale, zc, res=(600,900)):
    sc=bpy.context.scene
    sc.render.engine='CYCLES'; sc.cycles.samples=16; sc.cycles.device='CPU'
    sc.render.resolution_x,sc.render.resolution_y=res
    w=bpy.data.worlds.new('w'); sc.world=w; w.use_nodes=True; w.node_tree.nodes['Background'].inputs[1].default_value=1.0
    w.node_tree.nodes['Background'].inputs[0].default_value=(0.6,0.6,0.62,1)
    L=bpy.data.lights.new('k','SUN'); L.energy=3; lo=bpy.data.objects.new('k',L); sc.collection.objects.link(lo); lo.rotation_euler=(math.radians(50),0,math.radians(30))
    cam=bpy.data.cameras.new('c'); cam.type='ORTHO'; cam.ortho_scale=scale; co=bpy.data.objects.new('c',cam); sc.collection.objects.link(co); sc.camera=co
    for ang,tag in views:
        a=math.radians(ang)
        co.location=(5*math.sin(a),-5*math.cos(a),zc); co.rotation_euler=(math.radians(90),0,a)
        sc.render.filepath=f'{out}_{tag}.png'; bpy.ops.render.render(write_still=True)
