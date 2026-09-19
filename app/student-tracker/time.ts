import { ValidationError } from './contracts';

type DateParts = { year: number; month: number; day: number; hour: number; minute: number; second: number };

function partsAt(instant: Date, timezone: string): DateParts {
  let values: Record<string, number>;
  try {
    values = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
      timeZone: timezone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    }).formatToParts(instant).filter((part) => part.type !== 'literal').map((part) => [part.type, Number(part.value)]));
  } catch { throw new ValidationError('La zona horaria no es válida.'); }
  return values as DateParts;
}

function parseLocal(value: string): DateParts {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(value);
  if (!match) throw new ValidationError('La fecha local no es válida.');
  const [, year, month, day, hour, minute] = match;
  const parts = { year: Number(year), month: Number(month), day: Number(day), hour: Number(hour), minute: Number(minute), second: 0 };
  const check = new Date(Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute));
  if (check.getUTCFullYear() !== parts.year || check.getUTCMonth() !== parts.month - 1 || check.getUTCDate() !== parts.day || parts.hour > 23 || parts.minute > 59) throw new ValidationError('La fecha local no es válida.');
  return parts;
}

const sameParts = (left: DateParts, right: DateParts) => left.year === right.year && left.month === right.month && left.day === right.day && left.hour === right.hour && left.minute === right.minute;

export function zonedLocalToIso(localDate: string, timezone: string): string {
  const target = parseLocal(localDate);
  const targetUtc = Date.UTC(target.year, target.month - 1, target.day, target.hour, target.minute, 0);
  let guess = targetUtc;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const shown = partsAt(new Date(guess), timezone);
    const correction = targetUtc - Date.UTC(shown.year, shown.month - 1, shown.day, shown.hour, shown.minute, shown.second);
    if (correction === 0) break;
    guess += correction;
  }
  if (!sameParts(partsAt(new Date(guess), timezone), target)) throw new ValidationError('Esa hora local no existe en la zona elegida por el cambio de horario.');
  for (const offsetMinutes of [-120, -90, -60, -30, 30, 60, 90, 120]) {
    if (sameParts(partsAt(new Date(guess + offsetMinutes * 60_000), timezone), target)) {
      throw new ValidationError('Esa hora local ocurre dos veces por el cambio estacional. Elegí una hora distinta para evitar ambigüedad.');
    }
  }
  return new Date(guess).toISOString();
}

export function isoToZonedLocal(iso: string, timezone: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) throw new ValidationError('La fecha guardada no es válida.');
  const parts = partsAt(date, timezone);
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${parts.year}-${pad(parts.month)}-${pad(parts.day)}T${pad(parts.hour)}:${pad(parts.minute)}`;
}
