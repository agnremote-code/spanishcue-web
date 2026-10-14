/**
 * Testimonials for the Google landing.
 *
 * Real comments supplied by the owner on 2026-10-14, quoted as written, with
 * each person's real first name, initial and role. They did not want their
 * photos shown, so the cards use a neutral initials mark instead of a face:
 * no generated portraits. Learner comments are kept out of this teacher
 * landing. While this list is empty the section is not rendered.
 */
export type Testimonial={name:string;role:string;quote:string};
export const TESTIMONIALS:Testimonial[]=[
 {name:'Jessica L.',role:'Spanish teacher',quote:'I love that I can just open a lesson and start teaching. Everything is there and it doesn\u2019t look like another boring worksheet.'},
 {name:'Daniel P.',role:'Private Spanish tutor',quote:'Wasn\u2019t sure about the 3D stuff at first but it\u2019s actually really useful. Especially for getting shy students to talk.'},
 {name:'Emma K.',role:'Spanish teacher',quote:'Finally something that feels made for online teachers. I used to spend so much time putting lessons together. This helps a lot.'},
];
