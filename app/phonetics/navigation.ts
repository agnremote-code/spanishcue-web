export function isPhoneticsLesson(id: number): id is 201 | 202 {
  return id === 201 || id === 202;
}
export const phoneticsHref = (id: number) => isPhoneticsLesson(id) ? `/clase/${id}` : null;
