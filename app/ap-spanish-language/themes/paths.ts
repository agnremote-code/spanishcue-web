import { usCatalog } from "../../us-content/catalog.generated";
import { AP_PATH } from "../data";

export const AP_THEMES_PATH = `${AP_PATH}/themes`;
/** The six units of the course framework effective fall 2026, in unit order (theme "unit-1" … "unit-6"). */
export const apUnits = usCatalog.filter((entry) => entry.family === "ap").sort((a, b) => a.theme.localeCompare(b.theme));
export const apUnitPath = (slug: string) => `${AP_THEMES_PATH}/${slug}`;
/** Course framework (CED) effective fall 2026, where the unit names and recommended contexts are printed. */
export const AP_CED_URL = "https://apcentral.collegeboard.org/media/pdf/ap-spanish-language-and-culture-course-and-exam-description.pdf";
export const AP_COURSE_URL = "https://apcentral.collegeboard.org/courses/ap-spanish-language-and-culture";
