/**
 * Testimonials for the Google landing.
 *
 * Real comments supplied by the owner on 2026-10-14, quoted as written, with
 * each person's real first name and role, and the flag of their country. The
 * people did not want their own photos shown, so the portraits are
 * illustrative images chosen by the owner, and the section says so.
 * Spanish versions are translations of the originals, and the page says so. Learner comments are kept out of this teacher landing. While this list is
 * empty the section is not rendered.
 */
export type Flag='co'|'es'|'ar';
export const FLAGS:Record<Flag,string>={co:'Colombia',es:'Spain',ar:'Argentina'};
export type Testimonial={name:string;role:string;roleEs:string;quote:string;quoteEs:string;photo:string;flag:Flag};
export const TESTIMONIALS:Testimonial[]=[
 {name:'Jessica L.',role:'Spanish teacher',roleEs:'Profesora de español',flag:'co',photo:'/lp/voices/jessica.webp',quote:'I love that I can just open a lesson and start teaching. Everything is there and it doesn\u2019t look like another boring worksheet.',quoteEs:'Me encanta poder abrir una clase y empezar a darla. Está todo ahí y no parece otra ficha aburrida más.'},
 {name:'Daniel P.',role:'Private Spanish tutor',roleEs:'Profesor particular de español',flag:'es',photo:'/lp/voices/daniel.webp',quote:'Wasn\u2019t sure about the 3D stuff at first but it\u2019s actually really useful. Especially for getting shy students to talk.',quoteEs:'Al principio dudaba de lo del 3D, pero la verdad es que es muy útil. Sobre todo para que los alumnos tímidos hablen.'},
 {name:'Edu',role:'Spanish teacher',roleEs:'Profesor de español',flag:'ar',photo:'/lp/voices/edu.webp',quote:'Finally something that feels made for online teachers. I used to spend so much time putting lessons together. This helps a lot.',quoteEs:'Por fin algo que se siente hecho para profes online. Antes pasaba muchísimo tiempo armando clases. Esto ayuda un montón.'},
];
