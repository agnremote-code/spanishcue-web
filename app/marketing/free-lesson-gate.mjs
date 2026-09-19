export const FREE_LESSON_SAMPLE_MS = 30_000;

export function shouldPromptFreeLessonRegistration(activeMs) {
  return activeMs >= FREE_LESSON_SAMPLE_MS;
}
