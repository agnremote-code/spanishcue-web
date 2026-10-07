import type {PerspectiveCamera,Vector3} from 'three';

/** Fit the existing city, including rooftop markers, to the usable viewport. */
export function frameCity(camera:PerspectiveCamera,target:Vector3,width:number,height:number,zoom=1){
 const inverse=camera.quaternion.clone().invert();
 const point=target.clone();
 const tangent=Math.tan(camera.fov*Math.PI/360);
 let distance=0;
 for(const x of [-13,13])for(const z of [-14,12])for(const y of [-1,6.3]){
  point.set(x,y,z).sub(target).applyQuaternion(inverse);
  distance=Math.max(distance,point.z+Math.abs(point.x)/(tangent*(width/height)*.9),point.z+Math.abs(point.y)/(tangent*.82));
 }
 camera.position.sub(target).setLength(distance*zoom).add(target);
}
