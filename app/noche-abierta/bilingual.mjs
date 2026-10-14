// A0 reads everything twice: the Spanish line and, under it, its English.
// Content files keep both as { es, en }; the UI and the engine carry one
// string with a line break between them, so every existing text path keeps
// working and the Bi component splits it back for the screen.
export const BI_BREAK = "\n";
export const bi = (pair) => (typeof pair === "string" ? pair : `${pair.es}${BI_BREAK}${pair.en}`);
export const isBilingual = (text) => typeof text === "string" && text.includes(BI_BREAK);
export const esOf = (text) => (typeof text === "string" ? text.split(BI_BREAK)[0] : "");
export const enOf = (text) => (isBilingual(text) ? text.slice(text.indexOf(BI_BREAK) + 1) : "");
