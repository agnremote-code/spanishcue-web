/** Fixed editorial samples: never derive access from a visitor's filters. */
export const samplesByLevel: Record<string, number[]> = { A0:[19,27], A1:[40,41], A2:[103,104], B1:[101,102], B2:[31,37], C1:[11,23], C2:[34,203] };
export const samplesByCategory: Record<string, number[]> = { 'Gramática':[40,41], 'Conversación':[103,104], 'Escucha':[105,28], 'Fonética':[201,202], 'Vocabulario':[16,204] };
export const freeLessonIds = [...new Set([...Object.values(samplesByLevel).flat(), ...Object.values(samplesByCategory).flat()])];
export const isFreeLesson = (id:number) => freeLessonIds.includes(id);

export type UserRole = 'visitor' | 'authenticated_free' | 'pro' | 'owner';

export type UserSession = {
  userId: string | null;
  email: string | null;
  displayName: string | null;
  fullName: string | null;
  role: UserRole;
  isOwner: boolean;
  isPro: boolean;
  isAuthenticated: boolean;
};

export function isOwnerEmail(email: string | null | undefined): boolean {
  return !!email && email.trim().toLowerCase() === 'agnremote@gmail.com';
}

/** Verified by Sites account ownership. Must remain self-contained for static serialization in client protection scripts. */
export function ownerFromHeaders(h: Headers): boolean {
  return !!h.get('oai-authenticated-user-id') && h.get('oai-authenticated-user-email')?.trim().toLowerCase() === 'agnremote@gmail.com';
}

/** Extensible placeholder for database subscription lookup (populated in Task 03/04). */
export function checkSubscriptionEntitlement(): boolean {
  return false;
}

/** Evaluates whether user has PRO entitlement (owner or active subscription). */
export function isProUser(h: Headers): boolean {
  const userId = h.get('oai-authenticated-user-id');
  const email = h.get('oai-authenticated-user-email');
  if (!userId || !email) return false;
  if (isOwnerEmail(email)) return true;
  return checkSubscriptionEntitlement();
}

/** Parses headers to construct a full authoritative session object. */
export function getUserSessionFromHeaders(h: Headers): UserSession {
  const userId = h.get('oai-authenticated-user-id');
  const email = h.get('oai-authenticated-user-email');
  const encodedFullName = h.get('oai-authenticated-user-full-name');
  const encoding = h.get('oai-authenticated-user-full-name-encoding');

  if (!userId || !email) {
    return {
      userId: null,
      email: null,
      displayName: null,
      fullName: null,
      role: 'visitor',
      isOwner: false,
      isPro: false,
      isAuthenticated: false,
    };
  }

  let fullName: string | null = null;
  if (encodedFullName && encoding === 'percent-encoded-utf-8') {
    try {
      fullName = decodeURIComponent(encodedFullName);
    } catch {
      fullName = null;
    }
  }

  const displayName = fullName || email;
  const isOwner = isOwnerEmail(email);
  const isPro = isOwner || checkSubscriptionEntitlement();

  let role: UserRole = 'authenticated_free';
  if (isOwner) role = 'owner';
  else if (isPro) role = 'pro';

  return {
    userId,
    email,
    displayName,
    fullName,
    role,
    isOwner,
    isPro,
    isAuthenticated: true,
  };
}
