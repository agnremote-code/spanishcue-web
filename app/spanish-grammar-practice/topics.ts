import { usCatalog } from "../us-content/catalog.generated";
import { PRACTICE_PATH, practiceTopics } from "./data";

/** Topics added through the US plan: bodies live in public/us-content/grammar, only this index is bundled. */
export const assetTopics = usCatalog
  .filter((entry) => entry.family === "grammar")
  .map((entry) => ({ slug: entry.slug, path: `${PRACTICE_PATH}/${entry.slug}`, h1: entry.title, levels: entry.level, group: entry.theme }));

/** Every topic in reading order: the ten original ones first, then the asset topics. Used for the hub and the next-topic chain. */
export const allTopics = [
  ...practiceTopics.map((topic) => ({ slug: topic.slug, path: topic.path, h1: topic.h1, levels: topic.levels, group: topic.group as string })),
  ...assetTopics,
];
