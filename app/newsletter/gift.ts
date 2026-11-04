/** The PRO grammar class a visitor unlocks by leaving an email. Client-safe: no secrets here. */
export const GIFT_LESSON_ID = 143;
export const GIFT_LESSON_PATH = '/sistema-verbal/preterito-imperfecto-indicativo';
export const GIFT_LESSON_TITLE = 'Pretérito imperfecto';
export const GIFT_LESSON_LEVEL = 'A2';
/** One line on what the class teaches, shared by the form, /clase-gratis and the welcome email. */
export const GIFT_LESSON_PITCH = 'Hablaba, comía, vivía: describir cómo eran las cosas antes, contar hábitos del pasado y lo que estaba pasando.';
export const GIFT_AUDIO_PATH = `/audio/grammar-classroom/${GIFT_LESSON_ID}.mp3`;
/** Silent looping preview of the gift class, shown next to the signup form on /clase-gratis. */
export const GIFT_PREVIEW_VIDEO = `/grammar-previews/${GIFT_LESSON_ID}.mp4`;
export const GIFT_PREVIEW_POSTER = `/grammar-thumbnails/${GIFT_LESSON_ID}.webp`;
/** Landing with the signup form; the Worker sends visitors without the gift here. */
export const GIFT_LANDING_PATH = '/clase-gratis';
/** Browser-side marker so the popup stops asking once someone signed up or closed it. */
export const GIFT_POPUP_STORAGE_KEY = 'sc-newsletter-popup';
