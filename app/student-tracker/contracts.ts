export const STUDENT_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Sin definir'] as const;
export const STUDENT_STATUSES = ['active', 'archived'] as const;
export const CLASS_STATUSES = ['planned', 'taught'] as const;

export type StudentLevel = (typeof STUDENT_LEVELS)[number];
export type StudentStatus = (typeof STUDENT_STATUSES)[number];
export type ClassStatus = (typeof CLASS_STATUSES)[number];

export type Student = {
  id: string;
  ownerId: string;
  alias: string;
  lastName: string | null;
  email: string | null;
  level: StudentLevel;
  goal: string;
  status: StudentStatus;
  createdAt: string;
  updatedAt: string;
  lastClassAt?: string | null;
};

export type StudentInput = {
  alias: string;
  lastName?: string | null;
  email?: string | null;
  level: StudentLevel;
  goal?: string;
  status?: StudentStatus;
};

export type ClassRecord = {
  id: string;
  ownerId: string;
  studentId: string;
  lessonId: number | null;
  freeTitle: string | null;
  startsAt: string;
  timezone: string;
  durationMinutes: number | null;
  status: ClassStatus;
  pedagogicalNote: string;
  nextStep: string;
  requestKey: string;
  createdAt: string;
  updatedAt: string;
};

export type ClassRecordInput = {
  studentId: string;
  lessonId?: number | null;
  freeTitle?: string | null;
  startsAt: string;
  timezone: string;
  durationMinutes?: number | null;
  status: ClassStatus;
  pedagogicalNote?: string;
  nextStep?: string;
  requestKey: string;
};

export class TrackerError extends Error {
  constructor(message: string, public readonly status: number, public readonly code: string) {
    super(message);
    this.name = new.target.name;
  }
}

export class UnauthorizedError extends TrackerError {
  constructor() { super('Iniciá sesión para acceder a tus alumnos.', 401, 'unauthorized'); }
}
export class ValidationError extends TrackerError {
  constructor(message: string) { super(message, 400, 'validation_error'); }
}
export class NotFoundError extends TrackerError {
  constructor() { super('No se encontró el registro.', 404, 'not_found'); }
}
export class DuplicateRecordError extends TrackerError {
  constructor(public readonly existingId: string) {
    super('Ya existe una clase similar. Confirmá si querés repetirla intencionalmente.', 409, 'probable_duplicate');
  }
}

const cleanText = (value: unknown, field: string, max: number, required = false): string => {
  if (value == null) return '';
  if (typeof value !== 'string') throw new ValidationError(`${field} tiene un formato inválido.`);
  const cleaned = value.trim();
  if (required && !cleaned) throw new ValidationError(`${field} es obligatorio.`);
  if (cleaned.length > max) throw new ValidationError(`${field} supera ${max} caracteres.`);
  return cleaned;
};

export function requireOwnerId(value: string | null | undefined): string {
  if (!value?.trim()) throw new UnauthorizedError();
  return value.trim();
}

export function parseStudentInput(value: unknown): Required<StudentInput> {
  if (!value || typeof value !== 'object') throw new ValidationError('La ficha tiene un formato inválido.');
  const input = value as Record<string, unknown>;
  const alias = cleanText(input.alias, 'El alias', 80, true);
  const lastName = cleanText(input.lastName, 'Los apellidos', 120) || null;
  const email = cleanText(input.email, 'El email', 254).toLowerCase() || null;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ValidationError('El email no es válido.');
  if (!STUDENT_LEVELS.includes(input.level as StudentLevel)) throw new ValidationError('El nivel no es válido.');
  if (input.status != null && !STUDENT_STATUSES.includes(input.status as StudentStatus)) throw new ValidationError('El estado no es válido.');
  return {
    alias,
    lastName,
    email,
    level: input.level as StudentLevel,
    goal: cleanText(input.goal, 'El objetivo', 300),
    status: (input.status as StudentStatus | undefined) || 'active',
  };
}

function validTimezone(value: string): boolean {
  try { new Intl.DateTimeFormat('en-US', { timeZone: value }).format(); return true; } catch { return false; }
}

export function parseClassRecordInput(value: unknown): Required<ClassRecordInput> {
  if (!value || typeof value !== 'object') throw new ValidationError('El registro tiene un formato inválido.');
  const input = value as Record<string, unknown>;
  const studentId = cleanText(input.studentId, 'El alumno', 80, true);
  const lessonId = input.lessonId == null || input.lessonId === '' ? null : Number(input.lessonId);
  if (lessonId !== null && (!Number.isSafeInteger(lessonId) || lessonId <= 0)) throw new ValidationError('La clase SpanishCue no es válida.');
  const freeTitle = cleanText(input.freeTitle, 'El título', 160) || null;
  if ((lessonId === null) === (freeTitle === null)) throw new ValidationError('Elegí una clase SpanishCue o escribí un solo título libre.');
  const startsAt = cleanText(input.startsAt, 'La fecha', 40, true);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(startsAt) || Number.isNaN(Date.parse(startsAt))) {
    throw new ValidationError('La fecha debe ser una fecha ISO válida.');
  }
  const timezone = cleanText(input.timezone, 'La zona horaria', 80, true);
  if (!validTimezone(timezone)) throw new ValidationError('La zona horaria no es válida.');
  const durationMinutes = input.durationMinutes == null || input.durationMinutes === '' ? null : Number(input.durationMinutes);
  if (durationMinutes !== null && (!Number.isInteger(durationMinutes) || durationMinutes < 1 || durationMinutes > 480)) {
    throw new ValidationError('La duración debe estar entre 1 y 480 minutos.');
  }
  if (!CLASS_STATUSES.includes(input.status as ClassStatus)) throw new ValidationError('El estado de la clase no es válido.');
  const requestKey = cleanText(input.requestKey, 'La clave de envío', 100, true);
  if (requestKey.length < 8) throw new ValidationError('La clave de envío es demasiado corta.');
  return {
    studentId,
    lessonId,
    freeTitle,
    startsAt,
    timezone,
    durationMinutes,
    status: input.status as ClassStatus,
    pedagogicalNote: cleanText(input.pedagogicalNote, 'La nota pedagógica', 4000),
    nextStep: cleanText(input.nextStep, 'El próximo paso', 1000),
    requestKey,
  };
}

export function parseStudentPatch(value: unknown): Partial<Required<StudentInput>> {
  if (!value || typeof value !== 'object') throw new ValidationError('La ficha tiene un formato inválido.');
  const input = value as Record<string, unknown>;
  const parsed: Partial<Required<StudentInput>> = {};
  if ('alias' in input) parsed.alias = cleanText(input.alias, 'El alias', 80, true);
  if ('lastName' in input) parsed.lastName = cleanText(input.lastName, 'Los apellidos', 120) || null;
  if ('email' in input) {
    parsed.email = cleanText(input.email, 'El email', 254).toLowerCase() || null;
    if (parsed.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parsed.email)) throw new ValidationError('El email no es válido.');
  }
  if ('level' in input) {
    if (!STUDENT_LEVELS.includes(input.level as StudentLevel)) throw new ValidationError('El nivel no es válido.');
    parsed.level = input.level as StudentLevel;
  }
  if ('goal' in input) parsed.goal = cleanText(input.goal, 'El objetivo', 300);
  if ('status' in input) {
    if (!STUDENT_STATUSES.includes(input.status as StudentStatus)) throw new ValidationError('El estado no es válido.');
    parsed.status = input.status as StudentStatus;
  }
  if (!Object.keys(parsed).length) throw new ValidationError('No hay cambios válidos.');
  return parsed;
}

export function parseClassRecordPatch(value: unknown): Partial<Omit<Required<ClassRecordInput>, 'requestKey'>> {
  if (!value || typeof value !== 'object') throw new ValidationError('El registro tiene un formato inválido.');
  const input = value as Record<string, unknown>;
  const merged = {
    studentId: input.studentId ?? 'placeholder',
    lessonId: input.lessonId ?? null,
    freeTitle: input.freeTitle ?? (input.lessonId == null ? 'placeholder' : null),
    startsAt: input.startsAt ?? '2000-01-01T00:00:00.000Z',
    timezone: input.timezone ?? 'UTC',
    durationMinutes: input.durationMinutes ?? null,
    status: input.status ?? 'planned',
    pedagogicalNote: input.pedagogicalNote ?? '',
    nextStep: input.nextStep ?? '',
    requestKey: 'patch-key',
  };
  const parsed = parseClassRecordInput(merged);
  const patch: Partial<Omit<Required<ClassRecordInput>, 'requestKey'>> = {};
  for (const key of ['studentId', 'lessonId', 'freeTitle', 'startsAt', 'timezone', 'durationMinutes', 'status', 'pedagogicalNote', 'nextStep'] as const) {
    if (key in input) patch[key] = parsed[key] as never;
  }
  if (!Object.keys(patch).length) throw new ValidationError('No hay cambios válidos.');
  return patch;
}
