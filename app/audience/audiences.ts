/**
 * Two audiences, one brand. Teachers keep the home page (the commercial
 * teacher landing) and /para-profesores (the campaign-ready teacher landing);
 * learners get /aprender-espanol. Both pages are single-URL documents whose
 * UI language follows the locale cookie, like the rest of the site, so they
 * carry one clean canonical and no hreflang (see app/seo.ts).
 */
export type Audience = "academy" | "teacher" | "student";

export const ACADEMY_LANDING_PATH = "/academias";

export const TEACHER_HOME_PATH = "/";
export const TEACHER_LANDING_PATH = "/para-profesores";
export const STUDENT_LANDING_PATH = "/aprender-espanol";

/**
 * The free experience the student landing points to: the public Noche abierta
 * demo (city centre, no sign-up, no card). `from` only selects the demo's way
 * back; it never grants access.
 */
export const STUDENT_DEMO_PATH = "/demo/noche-abierta?from=aprender-espanol&level=A1";

/** Which audience a page speaks to, for the header selector and analytics. */
export function audienceForPath(pathname: string): Audience {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  if (path === ACADEMY_LANDING_PATH || path.startsWith(`${ACADEMY_LANDING_PATH}/`)) return "academy";
  return path === STUDENT_LANDING_PATH || path.startsWith(`${STUDENT_LANDING_PATH}/`) ? "student" : "teacher";
}
