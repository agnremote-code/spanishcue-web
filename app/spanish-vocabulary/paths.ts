import { usCatalog } from "../us-content/catalog.generated";

export const VOCABULARY_PATH = "/spanish-vocabulary";
export const vocabularyThemes = usCatalog.filter((entry) => entry.family === "vocabulary");
export const vocabularyPath = (theme: string) => `${VOCABULARY_PATH}/${theme}`;
