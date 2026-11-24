/** Older classes keep some labels and names in capitals in their data. These helpers show them in normal case. */
export const sentence = (value: string) => value.charAt(0) + value.slice(1).toLocaleLowerCase('es');
export const titleCase = (value: string) => value.toLocaleLowerCase('es').replace(/(^|[\s(«"-])(\p{L})/gu, (_, before: string, letter: string) => before + letter.toLocaleUpperCase('es'));
