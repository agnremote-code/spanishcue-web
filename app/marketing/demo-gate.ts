/** Free 3D demos that ask for a free account after the 30 s sample, keyed by path. */
const demoLessons: Record<string, { lessonId: number; lessonTitle: string }> = {
  "/demo/noche-abierta": { lessonId: 223, lessonTitle: "Noche abierta" },
  "/demo/hospital-san-casi-vivo": { lessonId: 240, lessonTitle: "Hospital San Casi Vivo" },
};

export function demoGateLesson(pathname: string) {
  return demoLessons[pathname.replace(/\/+$/, "")] ?? null;
}
