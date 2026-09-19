import type { BoardBank, BoardSession } from "./types";

export type RandomSource = () => number;

function shuffled<T>(items: readonly T[], random: RandomSource): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const candidate = Math.floor(random() * (index + 1));
    const swapIndex = Math.max(0, Math.min(index, candidate));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function unique<T>(items: readonly T[]): T[] {
  return [...new Set(items)];
}

function eligibleIds(bank: BoardBank, categories: readonly string[]): string[] {
  const validCategories = unique(categories).filter((category) => bank.categories.includes(category));
  if (validCategories.length === 0) {
    throw new Error("Elegí al menos una categoría válida para empezar.");
  }
  return bank.questions
    .filter((question) => validCategories.includes(question.category))
    .map((question) => question.id);
}

export function createSession(
  bank: BoardBank,
  categories: readonly string[],
  random: RandomSource = Math.random,
): BoardSession {
  const selectedCategories = unique(categories).filter((category) => bank.categories.includes(category));
  const queue = shuffled(eligibleIds(bank, selectedCategories), random);
  const currentId = queue[0] ?? null;
  return {
    version: 1,
    bankId: bank.id,
    selectedCategories,
    queue,
    cursor: 0,
    currentId,
    visited: currentId ? [currentId] : [],
    skipped: [],
    depthById: {},
    deepened: false,
    exhausted: queue.length === 0,
  };
}

export function advanceSession(
  session: BoardSession,
  options: { skipped?: boolean } = {},
): BoardSession {
  const skipped = options.skipped && session.currentId
    ? unique([...session.skipped, session.currentId])
    : session.skipped;
  const nextCursor = session.cursor + 1;
  if (nextCursor >= session.queue.length) {
    return {
      ...session,
      cursor: session.queue.length,
      currentId: null,
      skipped,
      deepened: false,
      exhausted: true,
    };
  }
  const currentId = session.queue[nextCursor];
  return {
    ...session,
    cursor: nextCursor,
    currentId,
    visited: unique([...session.visited, currentId]),
    skipped,
    deepened: Boolean(session.depthById[currentId]),
    exhausted: false,
  };
}

export function previousSession(session: BoardSession): BoardSession {
  if (session.queue.length === 0 || session.cursor <= 0) return session;
  const cursor = Math.min(session.cursor - 1, session.queue.length - 1);
  const currentId = session.queue[cursor];
  return {
    ...session,
    cursor,
    currentId,
    deepened: Boolean(session.depthById[currentId]),
    exhausted: false,
  };
}

export function setDeepened(session: BoardSession, deepened: boolean): BoardSession {
  if (!session.currentId) return session;
  return {
    ...session,
    deepened,
    depthById: { ...session.depthById, [session.currentId]: deepened },
  };
}

export function resetSession(
  bank: BoardBank,
  categories: readonly string[],
  random: RandomSource = Math.random,
): BoardSession {
  return createSession(bank, categories, random);
}

export function serializeSession(session: BoardSession): string {
  return JSON.stringify(session);
}

export function restoreSession(
  bank: BoardBank,
  serialized: string | null,
  random: RandomSource = Math.random,
): BoardSession | null {
  if (!serialized) return null;
  let candidate: Partial<BoardSession>;
  try {
    candidate = JSON.parse(serialized) as Partial<BoardSession>;
  } catch {
    return null;
  }
  if (!candidate || typeof candidate !== "object") return null;
  if (candidate.version !== 1 || candidate.bankId !== bank.id || !Array.isArray(candidate.selectedCategories)) {
    return null;
  }
  const selectedCategories = unique(candidate.selectedCategories)
    .filter((category): category is string => typeof category === "string" && bank.categories.includes(category));
  if (selectedCategories.length === 0) return null;

  const eligible = eligibleIds(bank, selectedCategories);
  const eligibleSet = new Set(eligible);
  const savedQueue = Array.isArray(candidate.queue)
    ? unique(candidate.queue.filter((id): id is string => typeof id === "string" && eligibleSet.has(id)))
    : [];
  const missing = eligible.filter((id) => !savedQueue.includes(id));
  const queue = [...savedQueue, ...shuffled(missing, random)];
  const savedCursor = Number.isInteger(candidate.cursor) ? Number(candidate.cursor) : 0;
  const currentIndex = typeof candidate.currentId === "string" ? queue.indexOf(candidate.currentId) : -1;
  const cursor = currentIndex >= 0
    ? currentIndex
    : Math.max(0, Math.min(savedCursor, queue.length));
  const exhausted = Boolean(candidate.exhausted) || cursor >= queue.length;
  const currentId = exhausted ? null : queue[cursor] ?? null;
  const visited = Array.isArray(candidate.visited)
    ? unique(candidate.visited.filter((id): id is string => typeof id === "string" && eligibleSet.has(id)))
    : [];
  if (currentId && !visited.includes(currentId)) visited.push(currentId);
  const skipped = Array.isArray(candidate.skipped)
    ? unique(candidate.skipped.filter((id): id is string => typeof id === "string" && eligibleSet.has(id)))
    : [];
  const rawDepth = candidate.depthById && typeof candidate.depthById === "object" ? candidate.depthById : {};
  const depthById = Object.fromEntries(
    Object.entries(rawDepth).filter(([id, value]) => eligibleSet.has(id) && typeof value === "boolean"),
  );

  return {
    version: 1,
    bankId: bank.id,
    selectedCategories,
    queue,
    cursor,
    currentId,
    visited,
    skipped,
    depthById,
    deepened: currentId ? Boolean(depthById[currentId]) : false,
    exhausted,
  };
}
