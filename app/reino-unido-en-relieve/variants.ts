import type { UKArea, Pair } from './data';
const a2ByCode: Record<string, string[]> = {
 TLC:['Tienes una tarde en Durham. ¿Quieres visitar la catedral o caminar junto al río? Explica.','Vas a Newcastle con un amigo. Acuerden dónde comer y a qué hora.','Hace frío en la costa de Northumberland. ¿Qué necesitas llevar?','No entiendes una palabra en una conversación. Pide ayuda de dos maneras.'],
 TLD:['Tienes dos días: uno en Liverpool y otro en Manchester. ¿Qué vas a hacer?','Quieres ir al Lake District sin auto. Pregunta por un autobús.','En Blackpool empieza a llover. Propón otro plan para la tarde.','Compara dormir en el centro y dormir cerca del campo. ¿Qué prefieres?'],
 TLE:['Estás en York y buscas la estación. Pide indicaciones.','Quieres visitar un mercado en Leeds. Invita a un amigo.','Vas a caminar por los Yorkshire Dales. Elige tres cosas para la mochila.','Llegaste a Whitby con hambre. Pregunta por una comida local.'],
 TLF:['Estás en Nottingham y quieres conocer una historia de Robin Hood. ¿Qué preguntas?','Tu amigo quiere ir al Peak District, pero tienes poco tiempo. Organicen una salida corta.','En Lincoln ves una catedral. Describe dónde está y cómo es.','Quieres comprar ropa en Leicester. Explica qué buscas y cuánto puedes gastar.'],
 TLG:['Quieres pasear junto a los canales de Birmingham. Acuerda un lugar para encontrarte con un amigo.','Llegaste tarde a Coventry. Explica qué pasó con tu tren.','Estás en Stratford y quieres visitar un teatro. Pregunta por los horarios.','Compara viajar en autobús y caminar por el centro. Elige una opción.'],
 TLH:['Tienes una bicicleta en Cambridge. ¿Adónde quieres ir primero?','En Norwich buscas un hotel tranquilo. Describe lo que necesitas.','Vas a pasear en barco por los Broads. ¿Qué quieres llevar para comer?','Tu tren a Londres sale temprano. Organiza tu mañana.'],
 TLI:['Quieres ir a Greenwich desde tu hotel. Pregunta qué transporte puedes tomar.','Tienes tres horas en Londres. Elige entre un mercado y un paseo junto al Támesis.','En Camden quieres comprar un regalo. Describe para quién es.','Tu amigo se perdió en el metro. Explícale dónde lo esperas.'],
 TLJ:['Llegas a Brighton por la mañana. Organiza un día junto al mar.','Quieres ir a la isla de Wight. Pregunta cuándo sale el ferry.','Estás en Oxford y buscas una cafetería económica. Pide una recomendación.','Vas a caminar por los South Downs. Mira el clima y decide qué ropa llevar.'],
 TLK:['Tienes un fin de semana: ¿prefieres Bristol o Bath? Explica una razón.','Tu alojamiento en Cornwall está lejos de la playa. Pregunta cómo llegar.','Vas a Dartmoor y empieza a llover. Habla con tu compañero y cambia el plan.','Quieres quedarte un mes en St Ives. Describe la casa que necesitas.'],
 TLL:['Quieres pasar dos días en Cardiff. Propón dos actividades.','Ves un cartel en dos idiomas y no entiendes una palabra. Pregunta qué significa.','Vas a caminar cerca de Eryri. Explica al guía cuánto tiempo tienes.','Compara una noche en Cardiff y una noche en un pueblo junto al mar.'],
 TLM:['Tu amigo quiere ir a Edimburgo y tú a Glasgow. Acuerden un plan.','Quieres visitar una isla escocesa. Pregunta por el ferry y el precio.','Hace mucho frío en los Highlands. Explica qué necesitas comprar.','Vas a un festival en Edimburgo. Elige dónde comer antes del espectáculo.'],
 TLN:['Llegas a Belfast y tienes hambre. Pide una recomendación cerca del puerto.','Quieres visitar la Calzada del Gigante. Pregunta cómo ir sin auto.','Vas a caminar por los Mournes con un amigo. Acuerden la hora y qué llevar.','Compara una tarde en Derry y una tarde en la costa. ¿Qué plan prefieres?'],
};
export function questionsForUKArea(area: UKArea, level: 'A2'|'B1'): Pair[] {
 if(level==='B1') return area.questions;
 const questions=a2ByCode[area.code];
 if(!questions) throw new Error(`Missing A2 content for ${area.code}`);
 return questions.map(es=>({es,en:''}));
}
