import type { BoardBank } from "./types";

export type BoardValidationOptions = {
  comparisonTexts?: readonly string[];
};

function normalized(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9ñü\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function meaningfulTokens(value: string): Set<string> {
  const ignored = new Set(["a", "al", "de", "del", "el", "en", "es", "la", "las", "lo", "los", "o", "para", "por", "que", "se", "si", "su", "tu", "un", "una", "y"]);
  return new Set(normalized(value).split(" ").filter((token) => token.length > 2 && !ignored.has(token)));
}

function similarity(left: string, right: string): number {
  const a = meaningfulTokens(left);
  const b = meaningfulTokens(right);
  if (a.size < 3 || b.size < 3) return 0;
  const intersection = [...a].filter((token) => b.has(token)).length;
  return intersection / new Set([...a, ...b]).size;
}

export function validateBoardBank(
  bank: BoardBank,
  options: BoardValidationOptions = {},
): string[] {
  const errors: string[] = [];
  const expectedLevel = bank.id.endsWith("-b1") ? "B1" : bank.id.endsWith("-b2") ? "B2" : null;
  if (!expectedLevel || bank.level !== expectedLevel) {
    errors.push(`El nivel ${bank.level} no coincide con el ID ${bank.id}.`);
  }
  if (bank.categories.length !== 6 || new Set(bank.categories).size !== 6) {
    errors.push("El banco debe tener seis categorías únicas.");
  }
  if (bank.questions.length !== 72) errors.push("El banco debe tener 72 principales.");
  if (bank.finals.length !== 12) errors.push("El banco debe tener 12 finales.");

  for (const category of bank.categories) {
    const count = bank.questions.filter((question) => question.category === category).length;
    if (count !== 12) errors.push(`La categoría ${category} tiene ${count}; debe tener 12 principales.`);
  }

  const allIds = [
    ...bank.questions.map((question) => question.id),
    ...bank.finals.map((question) => question.id),
  ];
  const seenIds = new Set<string>();
  for (const id of allIds) {
    if (seenIds.has(id)) errors.push(`ID duplicado: ${id}.`);
    seenIds.add(id);
  }

  const promptRows = [
    ...bank.questions.map((question) => ({ id: question.id, text: question.prompt })),
    ...bank.finals.map((question) => ({ id: question.id, text: question.prompt })),
  ];
  const seenText = new Map<string, string>();
  for (const row of promptRows) {
    const key = normalized(row.text);
    if (seenText.has(key)) errors.push(`Texto duplicado: ${seenText.get(key)} y ${row.id}.`);
    seenText.set(key, row.id);
  }
  for (let left = 0; left < promptRows.length; left += 1) {
    for (let right = left + 1; right < promptRows.length; right += 1) {
      if (similarity(promptRows[left].text, promptRows[right].text) >= 0.88) {
        errors.push(`Solapamiento sustancial interno: ${promptRows[left].id} y ${promptRows[right].id}.`);
      }
    }
  }

  for (const question of bank.questions) {
    if (!bank.categories.includes(question.category)) errors.push(`Categoría desconocida en ${question.id}.`);
    if (question.followUps.length !== 2 || question.followUps.some((followUp) => normalized(followUp).length < 10)) {
      errors.push(`${question.id} debe tener dos repreguntas específicas.`);
    }
  }

  const conditionChanges = bank.questions.filter((question) => question.conditionChange).length;
  if (bank.level === "B1" && conditionChanges !== 0) {
    errors.push("B1 no debe incluir cambios de condición.");
  }
  if (bank.level === "B2" && conditionChanges !== 24) {
    errors.push(`B2 debe incluir 24 cambios de condición; tiene ${conditionChanges}.`);
  }

  for (const row of promptRows) {
    for (const comparison of options.comparisonTexts ?? []) {
      if (normalized(row.text) === normalized(comparison) || similarity(row.text, comparison) >= 0.7) {
        errors.push(`Solapamiento sustancial externo en ${row.id}: “${comparison}”.`);
        break;
      }
    }
  }

  return errors;
}
