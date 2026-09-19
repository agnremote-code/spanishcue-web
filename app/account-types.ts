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

export const ACCOUNT_TAB_KEYS = [
  "inicio",
  "alumnos",
  "historial",
  "favoritos",
  "suscripcion",
  "ajustes",
] as const;

export type AccountTabKey = (typeof ACCOUNT_TAB_KEYS)[number];

export function accountTabFromValue(value: string | null | undefined): AccountTabKey {
  return ACCOUNT_TAB_KEYS.includes(value as AccountTabKey) ? (value as AccountTabKey) : "inicio";
}

type AccountLocale = "es" | "en";

const emptyAccountStates = {
  alumnos: {
    es: {
      title: "Mis alumnos",
      body: "Todavía no hay alumnos guardados. Este módulo se habilitará después de completar la base de cuentas y permisos.",
    },
    en: {
      title: "My students",
      body: "No students are stored yet. This module will be enabled after the account and permissions foundation is complete.",
    },
  },
  historial: {
    es: {
      title: "Historial de clases",
      body: "Todavía no hay clases registradas. Abrir una lección para prepararla no la marca como dictada.",
    },
    en: {
      title: "Class history",
      body: "No classes are recorded yet. Opening a lesson to prepare it does not mark it as taught.",
    },
  },
  favoritos: {
    es: {
      title: "Favoritos",
      body: "Todavía no hay favoritos guardados. La biblioteca no simula marcadores que aún no persisten en tu cuenta.",
    },
    en: {
      title: "Favorites",
      body: "No favorites are stored yet. The library does not simulate bookmarks that are not persisted to your account.",
    },
  },
} as const;

export function accountEmptyState(
  tab: "alumnos" | "historial" | "favoritos",
  locale: AccountLocale,
) {
  return { kind: "empty" as const, hasPersistedData: false, ...emptyAccountStates[tab][locale] };
}
