/** Fixed editorial samples: never derive access from a visitor's filters. */
export const samplesByLevel: Record<string, number[]> = { A0:[19,27], A1:[40,41], A2:[103,104], B1:[101,102], B2:[31,37], C1:[11,23], C2:[34,203] };
export const samplesByCategory: Record<string, number[]> = { 'Gramática':[40,41], 'Conversación':[103,104], 'Escucha':[105,28], 'Fonética':[201,202], 'Vocabulario':[16,204] };
export const freeLessonIds = [...new Set([...Object.values(samplesByLevel).flat(), ...Object.values(samplesByCategory).flat()])];
export const isFreeLesson = (id:number) => freeLessonIds.includes(id);
// Verified by Sites account ownership. Identity comes from dispatch, never browser state.
export function ownerFromHeaders(h: Headers) { return !!h.get('oai-authenticated-user-id') && h.get('oai-authenticated-user-email')?.trim().toLowerCase() === 'agnremote@gmail.com'; }
