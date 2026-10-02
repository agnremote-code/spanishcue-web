export const reportCategories = ['Error de texto','Respuesta incorrecta','Audio','Imagen','Instrucción poco clara','Problema técnico','Sugerencia','Otro'] as const;
export const reportStatuses = ['new','reviewing','resolved','dismissed'] as const;
export type ReportRow = {id:string;user_id:string;user_email:string|null;lesson_id:number;lesson_slug:string;lesson_title:string;lesson_category:string;level:string;url:string;message:string;category:string;context_json:string;status:string;ai_status:string;resolution:string;created_at:string;updated_at:string;resolved_at:string|null};
