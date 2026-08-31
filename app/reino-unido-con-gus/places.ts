import {placesByCode as sourcePlaces,type UKPlace} from "../reino-unido-en-relieve/places";
import type {Pair} from "./data";

const p=(es:string,en:string):Pair=>({es,en});
const q=(...items:[string,string][])=>items.map(([es,en])=>p(es,en));

const basicPrompts:Record<string,Pair[]>={
  TLC:q(
    ["¿Te gusta Newcastle? Nombrá un lugar bueno para visitar.","Do you like Newcastle? Name a good place to visit."],
    ["¿Preferís una ciudad pequeña como Durham o una ciudad grande?","Do you prefer a small city like Durham or a big city?"],
    ["¿Qué elegís en Northumberland: playa, castillo o pueblo?","What do you choose in Northumberland: beach, castle or village?"],
    ["¿Querés caminar por el Muro de Adriano? ¿Cuánto tiempo?","Do you want to walk along Hadrian's Wall? For how long?"],
  ),
  TLD:q(
    ["¿Qué hacés un sábado en Manchester?","What do you do on a Saturday in Manchester?"],
    ["¿Qué te gusta más de Liverpool: la música, el fútbol o el río?","What do you like most about Liverpool: music, football or the river?"],
    ["¿Qué llevás para un día en el Lake District?","What do you take for a day in the Lake District?"],
    ["¿Te gustan las luces y la playa de Blackpool?","Do you like Blackpool's lights and beach?"],
  ),
  TLE:q(
    ["¿Qué querés hacer en Leeds: comprar, comer o salir?","What do you want to do in Leeds: shop, eat or go out?"],
    ["¿Preferís los parques o la historia industrial de Sheffield?","Do you prefer Sheffield's parks or industrial history?"],
    ["¿Te gusta caminar por ciudades antiguas como York?","Do you like walking around old cities like York?"],
    ["¿Qué hacés primero en Whitby: ir al puerto o visitar la abadía?","What do you do first in Whitby: go to the harbour or visit the abbey?"],
  ),
  TLF:q(
    ["¿Te interesa Robin Hood? ¿Qué más querés ver en Nottingham?","Are you interested in Robin Hood? What else do you want to see in Nottingham?"],
    ["¿Qué comida querés probar en Leicester?","What food do you want to try in Leicester?"],
    ["¿Preferís caminar o hacer un picnic en el Peak District?","Do you prefer walking or having a picnic in the Peak District?"],
    ["¿Qué querés visitar en Lincoln: la catedral o el castillo?","What do you want to visit in Lincoln: the cathedral or the castle?"],
  ),
  TLG:q(
    ["¿Qué lugar de Birmingham le mostrás a un visitante?","Which Birmingham place do you show a visitor?"],
    ["Coventry tiene una catedral vieja y una nueva. ¿Cuál querés ver?","Coventry has an old and a new cathedral. Which do you want to see?"],
    ["¿Te gustaría visitar un museo industrial en Black Country?","Would you like to visit an industrial museum in the Black Country?"],
    ["¿Querés ver una obra de Shakespeare en Stratford-upon-Avon?","Do you want to see a Shakespeare play in Stratford-upon-Avon?"],
  ),
  TLH:q(
    ["¿Preferís caminar o usar una bicicleta en Cambridge?","Do you prefer walking or cycling in Cambridge?"],
    ["¿Qué visitás primero en Norwich: el mercado o la catedral?","What do you visit first in Norwich: the market or the cathedral?"],
    ["¿Con quién querés viajar en barco por los Norfolk Broads?","Who do you want to travel by boat with on the Norfolk Broads?"],
    ["¿Te gusta pasar un día tranquilo junto al mar? ¿Qué hacés?","Do you like spending a quiet day by the sea? What do you do?"],
  ),
  TLI:q(
    ["¿Qué querés comer o escuchar en Brixton?","What do you want to eat or listen to in Brixton?"],
    ["¿Preferís el parque, el observatorio o el río en Greenwich?","Do you prefer the park, observatory or river in Greenwich?"],
    ["¿Qué comprás en Camden Market?","What do you buy at Camden Market?"],
    ["¿Te gustaría trabajar en Canary Wharf? ¿Por qué?","Would you like to work in Canary Wharf? Why?"],
  ),
  TLJ:q(
    ["¿Qué hacés en Brighton cuando hace buen tiempo?","What do you do in Brighton when the weather is good?"],
    ["¿Qué querés ver en Oxford?","What do you want to see in Oxford?"],
    ["¿Preferís visitar Canterbury o ver los acantilados de Dover?","Do you prefer visiting Canterbury or seeing the cliffs of Dover?"],
    ["¿Qué hacés durante un fin de semana en la isla de Wight?","What do you do during a weekend on the Isle of Wight?"],
  ),
  TLK:q(
    ["¿Qué parte de Bristol te parece más interesante?","Which part of Bristol seems most interesting to you?"],
    ["¿Te gustan las ciudades bonitas y antiguas como Bath?","Do you like beautiful old cities like Bath?"],
    ["¿Cuál es tu plan perfecto en Cornwall?","What is your perfect plan in Cornwall?"],
    ["¿Qué ropa y comida llevás a Dartmoor?","What clothes and food do you take to Dartmoor?"],
  ),
  TLL:q(
    ["¿Qué querés hacer en Cardiff?","What do you want to do in Cardiff?"],
    ["¿Querés caminar o tomar un tren para conocer Eryri?","Do you want to walk or take a train to see Eryri?"],
    ["¿Preferís una playa o un sendero en Pembrokeshire?","Do you prefer a beach or a trail in Pembrokeshire?"],
    ["¿Conocés un pueblo de los valles del sur de Gales? ¿Cómo es?","Do you know a town in the South Wales Valleys? What is it like?"],
  ),
  TLM:q(
    ["¿Qué querés visitar en Edimburgo: el castillo, la ciudad vieja o un festival?","What do you want to visit in Edinburgh: the castle, Old Town or a festival?"],
    ["¿Qué te gusta de Glasgow?","What do you like about Glasgow?"],
    ["¿Qué actividad querés hacer en los Highlands?","What activity do you want to do in the Highlands?"],
    ["¿Preferís llegar a una isla en puente o en ferry?","Do you prefer reaching an island by bridge or ferry?"],
  ),
  TLN:q(
    ["¿Qué querés ver en Belfast además del Titanic?","What do you want to see in Belfast besides the Titanic?"],
    ["¿Te gusta caminar por ciudades con murallas?","Do you like walking around walled cities?"],
    ["¿Qué parada elegís en la Causeway Coast?","Which stop do you choose on the Causeway Coast?"],
    ["¿Preferís caminar por las montañas o descansar junto al agua?","Do you prefer walking in the mountains or relaxing by the water?"],
  ),
};

export const placesByCode:Record<string,UKPlace[]>=Object.fromEntries(
  Object.entries(sourcePlaces).map(([code,places])=>[
    code,
    places.map((place,index)=>({
      ...place,
      prompt:basicPrompts[code]?.[index]??place.prompt,
    })),
  ]),
);
