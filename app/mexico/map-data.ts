import geojson from "./mexico-states.geo.json";

type Position = [number, number];
type Geometry = { type: "Polygon" | "MultiPolygon"; coordinates: Position[][] | Position[][][] };
type Feature = { properties: { id: string; name: string }; geometry: Geometry };

const project = ([longitude, latitude]: Position) => [
  45 + ((longitude + 118.5) / 32.5) * 910,
  35 + ((32.8 - latitude) / 18.9) * 540,
];

function ringsFor(feature: Feature): Position[][] {
  return feature.geometry.type === "Polygon"
    ? (feature.geometry.coordinates as Position[][])
    : (feature.geometry.coordinates as Position[][][]).flat();
}

export const mexicoShapes = (geojson.features as Feature[]).map((feature) => {
  const rings = ringsFor(feature);
  const projected = rings.map((ring) => ring.map(project));
  const d = projected.map((ring) => ring.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ") + " Z").join(" ");
  const outer = projected.reduce((best, ring) => ring.length > best.length ? ring : best, projected[0]);
  const cx = outer.reduce((sum, point) => sum + point[0], 0) / outer.length;
  const cy = outer.reduce((sum, point) => sum + point[1], 0) / outer.length;
  return { code: feature.properties.id, name: feature.properties.name, d, cx, cy };
}).sort((a, b) => a.code.localeCompare(b.code));
