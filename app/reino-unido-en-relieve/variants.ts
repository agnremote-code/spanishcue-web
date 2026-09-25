import type { UKArea, Pair } from './data';
import {placesByCode} from './places';
import {a1AreaFor,a1PlacesFor,a1QuestionsFor,a1Support} from './a1';
export {a1Support};
export type UKLevel='A1'|'B1';
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
const practicalEnglish:Record<string,string[]>={
 TLC:['You have an afternoon in Durham. Visit the cathedral or walk by the river? Explain.','You are going to Newcastle with a friend. Agree where and when to eat.','It is cold on the Northumberland coast. What do you need to take?','You do not understand a word. Ask for help in two ways.'],
 TLD:['You have two days: one in Liverpool and one in Manchester. What will you do?','You want to reach the Lake District without a car. Ask about a bus.','It starts raining in Blackpool. Suggest another afternoon plan.','Compare staying in the centre and near the countryside. Which do you prefer?'],
 TLE:['You are in York looking for the station. Ask for directions.','You want to visit a market in Leeds. Invite a friend.','You are walking in the Yorkshire Dales. Choose three things for your backpack.','You arrive hungry in Whitby. Ask about local food.'],
 TLF:['You are in Nottingham and want to hear a Robin Hood story. What do you ask?','Your friend wants to go to the Peak District, but you have little time. Plan a short outing.','You see a cathedral in Lincoln. Describe where it is and what it looks like.','You want to buy clothes in Leicester. Explain what you need and how much you can spend.'],
 TLG:['You want to walk along Birmingham’s canals. Agree where to meet a friend.','You arrived late in Coventry. Explain what happened to your train.','You are in Stratford and want to visit a theatre. Ask about opening times.','Compare taking a bus and walking through the centre. Choose one.'],
 TLH:['You have a bicycle in Cambridge. Where do you want to go first?','You are looking for a quiet hotel in Norwich. Describe what you need.','You are going boating in the Broads. What do you want to take to eat?','Your train to London leaves early. Plan your morning.'],
 TLI:['You want to go to Greenwich from your hotel. Ask what transport to take.','You have three hours in London. Choose a market or a walk along the Thames.','You want to buy a gift in Camden. Say who it is for.','Your friend got lost on the Underground. Tell them where you are waiting.'],
 TLJ:['You arrive in Brighton in the morning. Plan a day by the sea.','You want to visit the Isle of Wight. Ask when the ferry leaves.','You are in Oxford looking for an inexpensive café. Ask for a recommendation.','You are walking in the South Downs. Check the weather and decide what to wear.'],
 TLK:['You have a weekend: do you prefer Bristol or Bath? Give a reason.','Your accommodation in Cornwall is far from the beach. Ask how to get there.','You are in Dartmoor and it starts raining. Talk to your companion and change the plan.','You want to stay in St Ives for a month. Describe the home you need.'],
 TLL:['You want to spend two days in Cardiff. Suggest two activities.','You see a sign in two languages and do not understand a word. Ask what it means.','You are walking near Eryri. Tell the guide how much time you have.','Compare a night in Cardiff with a night in a seaside town.'],
 TLM:['Your friend wants to visit Edinburgh and you want to visit Glasgow. Agree on a plan.','You want to visit a Scottish island. Ask about the ferry and the price.','It is very cold in the Highlands. Explain what you need to buy.','You are going to a festival in Edinburgh. Choose where to eat beforehand.'],
 TLN:['You arrive hungry in Belfast. Ask for a recommendation near the harbour.','You want to visit the Giant’s Causeway. Ask how to get there without a car.','You are walking in the Mournes with a friend. Agree on a time and what to bring.','Compare an afternoon in Derry and one on the coast. Which plan do you prefer?'],
};
export function questionsForUKArea(area: UKArea, level: UKLevel): Pair[] {
 if(level==='A1') return a1QuestionsFor(area);
 const questions=a2ByCode[area.code],translations=practicalEnglish[area.code];
 if(!questions||!translations||questions.length!==translations.length) throw new Error(`Missing practical content for ${area.code}`);
 return [...area.questions,...questions.map((es,index)=>({es,en:translations[index]}))];
}
export function placesForUKArea(area:UKArea,level:UKLevel){
 return level==='A1'?a1PlacesFor(area):placesByCode[area.code];
}
export function areaForUKLevel(area:UKArea,level:UKLevel):UKArea{
 return level==='A1'?a1AreaFor(area):area;
}
