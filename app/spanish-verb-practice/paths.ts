import { usCatalog } from "../us-content/catalog.generated";

export const VERB_PRACTICE_PATH = "/spanish-verb-practice";
export const practiceVerbs = usCatalog.filter((entry) => entry.family === "verbs");
export const verbPracticePath = (verb: string) => `${VERB_PRACTICE_PATH}/${verb}`;
