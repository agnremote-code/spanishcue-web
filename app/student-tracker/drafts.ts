export function draftStorageKey(ownerScope: string): string {
  return `spanishcue:class-draft:v2:${encodeURIComponent(ownerScope)}`;
}
