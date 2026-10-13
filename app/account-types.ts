export const TEACHER_LIBRARY_PRODUCT = "teacher_library";

export type AccountRole = "owner" | "teacher";
export type AccountStatus = "active" | "disabled";
export type AccessLevel = "free" | "full";

export type AccountAccess = {
  userId: string;
  email: string;
  displayName: string | null;
  role: AccountRole;
  status: AccountStatus;
  accessLevel: AccessLevel;
  accessSource: string | null;
  accessExpiresAt: number | null;
};

export type TeacherAccount = AccountAccess & {
  createdAt: number;
  lastSignInAt: number;
};

/** /cuenta sections, in sidebar order (`/cuenta?tab=<key>`). */
export const ACCOUNT_TAB_KEYS = [
  "inicio",
  "alumnos",
  "historial",
  "autoestudio",
  "favoritos",
  "suscripcion",
  "ajustes",
] as const;

export type AccountTabKey = (typeof ACCOUNT_TAB_KEYS)[number];

export function accountTabFromValue(value: string | null | undefined): AccountTabKey {
  return ACCOUNT_TAB_KEYS.includes(value as AccountTabKey) ? (value as AccountTabKey) : "inicio";
}
