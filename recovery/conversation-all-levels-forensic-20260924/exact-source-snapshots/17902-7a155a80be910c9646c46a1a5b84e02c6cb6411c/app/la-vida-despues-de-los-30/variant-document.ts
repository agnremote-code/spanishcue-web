import activityDocument from "./activity-document";
import { zoneIds, type LifeLevel, type LifeActivities } from "./variants";

/** Reuse the original camera, body map, dialogs, styles and button behavior.
 * Only the authored text and level-specific persistence are replaced in memory.
 * The B1 caller receives the untouched original document itself.
 */
export function documentForLifeLevel(level: LifeLevel, activities: LifeActivities): string {
  if (level === "B1") return activityDocument;
  const sourceIds = [...activityDocument.matchAll(/\{id:'([^']+)',part:/g)].map(match => match[1]);
  const questionBanks = [...activityDocument.matchAll(/questions:\[([^\]]*)\]/g)];
  if (sourceIds.length !== zoneIds.length || questionBanks.length !== zoneIds.length ||
      sourceIds.some((id, index) => id !== zoneIds[index]) ||
      activities.zones.length !== zoneIds.length ||
      activities.zones.some((zone, index) => zone.id !== zoneIds[index] || zone.missions.length !== 5)) {
    throw new Error("The life map's ten five-point zones no longer match the authored missions");
  }
  let bank = 0;
  const encoded = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const help = `<dialog id="help-dialog" aria-labelledby="help-title"><div class="dialog-top"><span class="dialog-crumb">SPANISHCUE · CONVERSACIÓN ${level}</span><button type="button" class="close-button" data-close="help-dialog" aria-label="Cerrar ayuda">×</button></div><div class="dialog-body help-copy"><h2 class="help-title" id="help-title">Una zona. Cinco misiones.</h2><div class="step"><span class="step-no">1</span><div>Elegí una parte del cuerpo y una de sus cinco misiones orales.</div></div><div class="step"><span class="step-no">2</span><div>Hablá con otra persona; escuchá y hacé una pregunta nueva. Las frases de apoyo son opcionales.</div></div><div class="step"><span class="step-no">3</span><div>Marcá como conversada una misión cuando terminen y elegí otra zona.</div></div><p>No hace falta tener más de 30: podés hablar de una persona imaginaria. Podés pasar cualquier misión.</p><p><b>Clase de 45 minutos:</b> 5 para abrir, 8 para explorar, 12 para conversar, 15 para cambiar de perspectiva y 5 para cerrar.</p><p><b>Apoyos opcionales ${level}:</b></p><div class="resource-row">${activities.supports.map(s => `<span>${encoded(s)}</span>`).join("")}</div><p style="font-size:11px;color:var(--muted);margin-top:23px">Teclado: Tab para recorrer los botones; Enter para elegir; Esc para cerrar una misión o volver al cuerpo. Dentro de una misión, usá ← y → para cambiarla.</p></div></dialog>`;
  return activityDocument
    .replace(/questions:\[([^\]]*)\]/g, () => {
      const list = JSON.stringify(activities.zones[bank++].missions).replaceAll("<", "\\u003c");
      return `questions:${list}`;
    })
    .replace("const storageKey='spanishcue-vida-30-b1-v1'", `const storageKey='spanishcue-vida-30-${level.toLowerCase()}-v1'`)
    .replace('<span class="level">B1</span>', `<span class="level">${level}</span>`)
    .replace('Actividad de conversación B1 de SPANISHCUE:', `Actividad de conversación ${level} de SPANISHCUE:`)
    .replace('Elegí una pregunta para abrir la conversación', 'Elegí una misión para abrir la conversación')
    .replace('Elegí una parte del cuerpo y respondé', 'Elegí una parte del cuerpo y conversá')
    .replace('10 zonas · 50 preguntas · Sin un orden fijo', '10 zonas · 50 misiones · Sin un orden fijo')
    .replaceAll('Pregunta ${i+1}', 'Misión ${i+1}')
    .replace("' · Pregunta '+(selected+1)", "' · Misión '+(selected+1)")
    .replace(/<p class="speaking-hint">[\s\S]*?<\/p>/, `<p class="speaking-hint"><b>Para conversar:</b> ${encoded(activities.speakingHelp)}</p>`)
    .replace(/<dialog id="help-dialog"[\s\S]*?<\/dialog>/, help);
}
