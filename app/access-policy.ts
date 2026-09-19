/** Two fixed samples per category; filters never change access permissions. */
export const samplesByCategory: Record<string, number[]> = { 'Gramática':[40,41], 'Conversación':[103,29], 'Escucha':[105,28], 'Fonética':[201,202], 'Vocabulario':[16,204] };
export const freeLessonIds = [...new Set(Object.values(samplesByCategory).flat())];
export const isFreeLesson = (id:number) => freeLessonIds.includes(id);
/** Audio collections attached to the two public listening samples. */
export const freeAudioPrefixes = new Set(['hotel','latam']);
export type RoutableLesson = {id:number;path?:string;special?:boolean};
export function normalizeLocalPath(pathname:string) {
  const normalized=(pathname.startsWith('/')?pathname:`/${pathname}`).replace(/\/{2,}/g,'/').replace(/\/+$/, '');
  return normalized||'/';
}
export function localLessonPath(lesson:RoutableLesson) {
  const path=lesson.path||(lesson.special?'/choose-conversation':`/clase/${lesson.id}`);
  return /^https?:\/\//i.test(path)?null:normalizeLocalPath(path);
}
export function lessonAtPath<T extends RoutableLesson>(pathname:string,lessonList:readonly T[]) {
  const normalized=normalizeLocalPath(pathname);
  return lessonList.find(lesson=>localLessonPath(lesson)===normalized);
}
// These headers are stripped and recreated by our Worker after Firebase verifies the session.
export function ownerFromHeaders(h: Headers) { return h.get('x-chespanish-owner') === '1'; }
export function signedInFromHeaders(h: Headers) { return Boolean(h.get('x-chespanish-user-uid')); }
export function emailFromHeaders(h: Headers) { return h.get('x-chespanish-user-email')?.trim().toLowerCase() ?? null; }
export function accountIdFromHeaders(h: Headers) { return h.get('x-chespanish-account-id')?.trim() || null; }
export function roleFromHeaders(h: Headers) { return h.get('x-chespanish-role') === 'owner' ? 'owner' : 'teacher'; }
export function fullAccessFromHeaders(h: Headers) { return ownerFromHeaders(h) || h.get('x-chespanish-access-level') === 'full'; }

export type UserRole = 'visitor' | 'authenticated_free' | 'pro' | 'owner';

export type UserSession = {
  userId: string | null;
  accountId: string | null;
  email: string | null;
  displayName: string | null;
  role: UserRole;
  isOwner: boolean;
  isPro: boolean;
  isAuthenticated: boolean;
};

/** Builds display state from identity headers that the Worker has already verified and recreated. */
export function getUserSessionFromHeaders(h: Headers): UserSession {
  const isAuthenticated = signedInFromHeaders(h);
  if (!isAuthenticated) {
    return {
      userId: null,
      accountId: null,
      email: null,
      displayName: null,
      role: 'visitor',
      isOwner: false,
      isPro: false,
      isAuthenticated: false,
    };
  }

  const email = emailFromHeaders(h);
  const isOwner = ownerFromHeaders(h);
  const hasFullAccess = fullAccessFromHeaders(h);
  const role: UserRole = isOwner ? 'owner' : hasFullAccess ? 'pro' : 'authenticated_free';
  return {
    userId: h.get('x-chespanish-user-uid'),
    accountId: accountIdFromHeaders(h),
    email,
    displayName: email,
    role,
    isOwner,
    isPro: hasFullAccess,
    isAuthenticated: true,
  };
}

/** Accepts only same-origin relative navigation targets. */
export function safeRelativeReturnPath(value: string | null | undefined, fallback = '/') {
  if (!value || !value.startsWith('/')) return fallback;
  try {
    const decoded = decodeURIComponent(value);
    const slashNormalized = decoded.replace(/\\/g, '/');
    if (slashNormalized.startsWith('//') || /[\u0000-\u001f\u007f]/.test(decoded)) return fallback;
    const base = new URL('https://spanishcue.local');
    const target = new URL(value, base);
    if (target.origin !== base.origin) return fallback;
    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return fallback;
  }
}
