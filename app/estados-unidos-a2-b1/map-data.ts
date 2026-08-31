import atlas from "./states-albers-10m.json";

type Point=[number,number];
type Geometry={type:"Polygon"|"MultiPolygon";arcs:number[][]|number[][][];properties:{name:string}};

const topology=atlas as unknown as {
  transform:{scale:[number,number];translate:[number,number]};
  arcs:number[][][];
  objects:{states:{geometries:Geometry[]}};
};

const decodedArcs:Point[][]=topology.arcs.map(arc=>{
  let x=0;
  let y=0;
  return arc.map(([dx,dy])=>{
    x+=dx;
    y+=dy;
    return [
      x*topology.transform.scale[0]+topology.transform.translate[0],
      y*topology.transform.scale[1]+topology.transform.translate[1],
    ];
  });
});

const arcPoints=(index:number)=>index<0?[...decodedArcs[~index]].reverse():decodedArcs[index];

function ringPoints(indices:number[]):Point[]{
  const points:Point[]=[];
  indices.forEach((index,part)=>{
    const next=arcPoints(index);
    points.push(...(part?next.slice(1):next));
  });
  return points;
}

function polygonPath(rings:number[][]):{d:string;points:Point[]}{
  const all:Point[]=[];
  const d=rings.map(indices=>{
    const points=ringPoints(indices);
    all.push(...points);
    return points.length?`M${points.map(([x,y])=>`${x.toFixed(2)},${y.toFixed(2)}`).join("L")}Z`:"";
  }).join("");
  return {d,points:all};
}

function geometryPath(geometry:Geometry):{d:string;points:Point[]}{
  const polygons=geometry.type==="Polygon"?[geometry.arcs as number[][]]:geometry.arcs as number[][][];
  return polygons.reduce((result,rings)=>{
    const polygon=polygonPath(rings);
    result.d+=polygon.d;
    result.points.push(...polygon.points);
    return result;
  },{d:"",points:[]} as {d:string;points:Point[]});
}

export type StateShape={name:string;d:string;cx:number;cy:number};

export const stateShapes:StateShape[]=topology.objects.states.geometries
  .filter(geometry=>geometry.properties.name!=="District of Columbia")
  .map(geometry=>{
    const {d,points}=geometryPath(geometry);
    const xs=points.map(point=>point[0]);
    const ys=points.map(point=>point[1]);
    return {
      name:geometry.properties.name,
      d,
      cx:(Math.min(...xs)+Math.max(...xs))/2,
      cy:(Math.min(...ys)+Math.max(...ys))/2,
    };
  });
