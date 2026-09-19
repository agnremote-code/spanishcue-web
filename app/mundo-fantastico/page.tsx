"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { useAccessibleModal } from "../useAccessibleModal";
import "./style.css";
import {
  answerTools,
  continentCodes,
  continentColors,
  continentEnglish,
  destinations,
  megaWordbank,
  type Continent,
  type Destination,
  type Pair,
} from "./data";

type Screen = "cover" | "atlas" | "destination";
type FollowUp = { prompt: Pair; choices: Pair[] };
type Question = { prompt: Pair; starter: Pair; choices: Pair[]; follow: FollowUp; visual: number };
type GlyphName = "map" | "shuffle" | "sound" | "clear" | "home" | "plus" | "compass" | "words";
type VisualResult = { src: string; source: string; artist: string; license: string };

const continents: Array<"Todos" | Continent> = ["Todos", "América", "Europa", "África", "Asia", "Oceanía", "Antártida"];
const imageCache = new Map<string, VisualResult>();
const usedImageSources = new Map<string, Set<string>>();
const continentSlug: Record<Continent,string> = {América:"america",Europa:"europa",África:"africa",Asia:"asia",Oceanía:"oceania",Antártida:"antartida"};

function pick<T>(items:T[],variant:number):T{return items[variant%items.length]}

function questionsFor(place: Destination): Question[] {
  const countryIndex=Math.max(0,Number(place.number)-1);
  const variant=countryIndex%4;
  const q=(visual:number,prompts:Pair[],starters:Pair[],choiceSets:Pair[][],followPrompts:Pair[],followChoices:Pair[][]):Question=>({
    visual,
    prompt:pick(prompts,variant),
    starter:pick(starters,variant),
    choices:pick(choiceSets,variant),
    follow:{prompt:pick(followPrompts,variant),choices:pick(followChoices,variant)},
  });

  const worlds:Question[]=[
    q(0,
      [
        {es:`En ${place.country}, ¿querés entrar a ${place.landmark.es}?`,en:`In ${place.countryEn}, do you want to enter ${place.landmark.en}?`},
        {es:`Imaginá que estás en ${place.landmark.es}. ¿Te gusta el lugar?`,en:`Imagine you are at ${place.landmark.en}. Do you like the place?`},
        {es:`¿${place.landmark.es} es tu primera parada en ${place.country}?`,en:`Is ${place.landmark.en} your first stop in ${place.countryEn}?`},
        {es:`En ${place.country}, ¿visitás ${place.landmark.es} de día o de noche?`,en:`In ${place.countryEn}, do you visit ${place.landmark.en} by day or at night?`},
      ],
      [{es:"Quiero…",en:"I want…"},{es:"Me gusta…",en:"I like…"},{es:"Primero…",en:"First…"},{es:"Prefiero…",en:"I prefer…"}],
      [
        [{es:`entrar a ${place.landmark.es}`,en:`to enter ${place.landmark.en}`},{es:`sacar una foto en ${place.landmark.es}`,en:`to take a photo at ${place.landmark.en}`},{es:`caminar por ${place.landmark.es}`,en:`to walk around ${place.landmark.en}`}],
        [{es:`${place.landmark.es}`,en:place.landmark.en},{es:"porque es famoso / famosa",en:"because it is famous"},{es:"porque parece especial",en:"because it looks special"}],
        [{es:`visito ${place.landmark.es}`,en:`I visit ${place.landmark.en}`},{es:`voy a ${place.capital.es}`,en:`I go to ${place.capital.en}`},{es:"voy al hotel",en:"I go to the hotel"}],
        [{es:`ver ${place.landmark.es} de día`,en:`to see ${place.landmark.en} by day`},{es:`ver ${place.landmark.es} de noche`,en:`to see ${place.landmark.en} at night`},{es:"ver el atardecer",en:"to see the sunset"}],
      ],
      [
        {es:`Después de ${place.landmark.es}, ¿vas a ${place.capital.es}?`,en:`After ${place.landmark.en}, do you go to ${place.capital.en}?`},
        {es:`¿Qué parte de ${place.landmark.es} fotografiás?`,en:`What part of ${place.landmark.en} do you photograph?`},
        {es:`¿Cuánto tiempo pasás en ${place.landmark.es}?`,en:`How much time do you spend at ${place.landmark.en}?`},
        {es:`¿Con quién compartís ${place.landmark.es}?`,en:`Who do you share ${place.landmark.en} with?`},
      ],
      [
        [{es:`Sí, después voy a ${place.capital.es}`,en:`Yes, then I go to ${place.capital.en}`},{es:"No, después descanso",en:"No, then I rest"},{es:"Tal vez después",en:"Maybe later"}],
        [{es:"la entrada",en:"the entrance"},{es:"el centro",en:"the centre"},{es:"todo el paisaje",en:"the whole landscape"}],
        [{es:"una hora",en:"one hour"},{es:"tres horas",en:"three hours"},{es:"todo el día",en:"all day"}],
        [{es:"con mi familia",en:"with my family"},{es:"con una amiga / un amigo",en:"with a friend"},{es:"solo / sola",en:"alone"}],
      ]),
    q(1,
      [
        {es:`En ${place.country}, ¿probás ${place.food.es} por primera vez?`,en:`In ${place.countryEn}, do you try ${place.food.en} for the first time?`},
        {es:`¿Compartís ${place.food.es} en ${place.country} o comés solo / sola?`,en:`Do you share ${place.food.en} in ${place.countryEn} or eat alone?`},
        {es:`En ${place.country}, ¿${place.food.es} parece dulce o salado?`,en:`In ${place.countryEn}, does ${place.food.en} look sweet or salty?`},
        {es:`¿Pedís ${place.food.es} en un mercado de ${place.country}?`,en:`Do you order ${place.food.en} at a market in ${place.countryEn}?`},
      ],
      [{es:"Quiero probar…",en:"I want to try…"},{es:"Quiero compartir…",en:"I want to share…"},{es:"Parece…",en:"It looks…"},{es:"En el mercado pido…",en:"At the market I order…"}],
      [
        [place.food,{es:"una porción pequeña",en:"a small portion"},{es:"algo nuevo",en:"something new"}],
        [place.food,{es:"la comida con mi familia",en:"the food with my family"},{es:"la comida con una amiga / un amigo",en:"the food with a friend"}],
        [{es:"dulce",en:"sweet"},{es:"salado / salada",en:"salty"},{es:"muy rico / rica",en:"very tasty"}],
        [place.food,{es:"agua",en:"water"},{es:"un postre",en:"a dessert"}],
      ],
      [
        {es:`¿Comés ${place.food.es} para el almuerzo en ${place.country}?`,en:`Do you eat ${place.food.en} for lunch in ${place.countryEn}?`},
        {es:`¿Quién prueba primero ${place.food.es}?`,en:`Who tries ${place.food.en} first?`},
        {es:`¿Qué bebida tomás con ${place.food.es}?`,en:`What drink do you have with ${place.food.en}?`},
        {es:`¿Pedís otra porción de ${place.food.es}?`,en:`Do you order another portion of ${place.food.en}?`},
      ],
      [
        [{es:"Sí, para el almuerzo",en:"Yes, for lunch"},{es:"No, para la cena",en:"No, for dinner"},{es:"Para el desayuno",en:"For breakfast"}],
        [{es:"Yo primero",en:"Me first"},{es:"Mi compañero / compañera",en:"My companion"},{es:"Probamos juntos",en:"We try it together"}],
        [{es:"Tomo agua",en:"I drink water"},{es:"Tomo café",en:"I drink coffee"},{es:"Tomo té",en:"I drink tea"}],
        [{es:"Sí, otra porción",en:"Yes, another portion"},{es:"No, estoy bien",en:"No, I am fine"},{es:"Solo un poco más",en:"Just a little more"}],
      ]),
    q(2,
      [
        {es:`En ${place.country}, ¿explorás ${place.nature.es} o preferís ${place.culture.es}?`,en:`In ${place.countryEn}, do you explore ${place.nature.en} or prefer ${place.culture.en}?`},
        {es:`¿Qué color imaginás cuando pensás en ${place.nature.es}, ${place.country}?`,en:`What colour do you imagine when you think of ${place.nature.en}, ${place.countryEn}?`},
        {es:`¿Pasás un día completo en ${place.nature.es}, en ${place.country}?`,en:`Do you spend a full day in ${place.nature.en}, in ${place.countryEn}?`},
        {es:`En ${place.country}, ¿${place.culture.es} te interesa más que ${place.landmark.es}?`,en:`In ${place.countryEn}, does ${place.culture.en} interest you more than ${place.landmark.en}?`},
      ],
      [{es:"Prefiero…",en:"I prefer…"},{es:"Imagino…",en:"I imagine…"},{es:"Quiero pasar…",en:"I want to spend…"},{es:"Me interesa…",en:"I am interested in…"}],
      [
        [place.nature,place.culture,{es:"las dos cosas",en:"both things"}],
        [{es:"mucho verde",en:"a lot of green"},{es:"mucho azul",en:"a lot of blue"},{es:"muchos colores",en:"many colours"}],
        [{es:`un día en ${place.nature.es}`,en:`one day in ${place.nature.en}`},{es:"solo una mañana",en:"only one morning"},{es:"toda una semana",en:"a whole week"}],
        [place.culture,place.landmark,{es:"las dos cosas",en:"both things"}],
      ],
      [
        {es:`¿Qué hacés primero en ${place.nature.es}?`,en:`What do you do first in ${place.nature.en}?`},
        {es:`¿Sacás fotos de ${place.nature.es}?`,en:`Do you take photos of ${place.nature.en}?`},
        {es:`¿Dormís cerca de ${place.nature.es}?`,en:`Do you sleep near ${place.nature.en}?`},
        {es:`¿Con quién disfrutás ${place.culture.es}?`,en:`Who do you enjoy ${place.culture.en} with?`},
      ],
      [
        [{es:"Primero camino",en:"First I walk"},{es:"Primero miro el paisaje",en:"First I look at the landscape"},{es:"Primero descanso",en:"First I rest"}],
        [{es:"Sí, muchas fotos",en:"Yes, many photos"},{es:"Solo una foto",en:"Only one photo"},{es:"No saco fotos",en:"I do not take photos"}],
        [{es:"Sí, en un hotel",en:"Yes, in a hotel"},{es:"No, vuelvo a la ciudad",en:"No, I return to the city"},{es:"Tal vez",en:"Maybe"}],
        [{es:"con mi familia",en:"with my family"},{es:"con gente local",en:"with local people"},{es:"solo / sola",en:"alone"}],
      ]),
    q(3,
      [
        {es:`En ${place.country}, ¿buscás ${place.animal.es} en la naturaleza?`,en:`In ${place.countryEn}, do you look for ${place.animal.en} in nature?`},
        {es:`¿${place.animal.es} de ${place.country} te parece simpático o peligroso?`,en:`Does ${place.animal.en} from ${place.countryEn} look friendly or dangerous?`},
        {es:`En ${place.country}, ¿preferís ver ${place.animal.es} en libertad o en una foto?`,en:`In ${place.countryEn}, do you prefer to see ${place.animal.en} free or in a photo?`},
        {es:`Si ${place.animal.es} tiene un nombre en ${place.country}, ¿cómo se llama?`,en:`If ${place.animal.en} has a name in ${place.countryEn}, what is it called?`},
      ],
      [{es:"Quiero encontrar…",en:"I want to find…"},{es:"Me parece…",en:"It looks…"},{es:"Prefiero…",en:"I prefer…"},{es:"Se llama…",en:"It is called…"}],
      [
        [place.animal,{es:"una huella",en:"a footprint"},{es:"una foto del animal",en:"a photo of the animal"}],
        [{es:"simpático / simpática",en:"friendly"},{es:"peligroso / peligrosa",en:"dangerous"},{es:"muy interesante",en:"very interesting"}],
        [{es:`ver ${place.animal.es} en libertad`,en:`to see ${place.animal.en} free`},{es:"ver una foto",en:"to see a photo"},{es:"ver un video",en:"to see a video"}],
        [{es:"Luna",en:"Luna"},{es:"Sol",en:"Sol"},{es:`${place.country}`,en:place.countryEn}],
      ],
      [
        {es:`¿Esperás mucho para ver ${place.animal.es}?`,en:`Do you wait a long time to see ${place.animal.en}?`},
        {es:`¿Te acercás a ${place.animal.es}?`,en:`Do you go near ${place.animal.en}?`},
        {es:`¿Mostrás la foto de ${place.animal.es} a tu familia?`,en:`Do you show the photo of ${place.animal.en} to your family?`},
        {es:`¿Qué come ${place.animal.es}?`,en:`What does ${place.animal.en} eat?`},
      ],
      [
        [{es:"Sí, espero",en:"Yes, I wait"},{es:"No espero mucho",en:"I do not wait long"},{es:"Solo diez minutos",en:"Only ten minutes"}],
        [{es:"Sí, un poco",en:"Yes, a little"},{es:"No, miro de lejos",en:"No, I look from far away"},{es:"Saco una foto",en:"I take a photo"}],
        [{es:"Sí, la muestro",en:"Yes, I show it"},{es:"No, es privada",en:"No, it is private"},{es:"La comparto después",en:"I share it later"}],
        [{es:"come plantas",en:"it eats plants"},{es:"come pescado",en:"it eats fish"},{es:"No sé",en:"I do not know"}],
      ]),
    q(4,
      [
        {es:`¿Usás ${place.transport.es} para llegar a ${place.capital.es}?`,en:`Do you use ${place.transport.en} to get to ${place.capital.en}?`},
        {es:`En ${place.country}, ¿${place.transport.es} te parece rápido?`,en:`In ${place.countryEn}, does ${place.transport.en} seem fast?`},
        {es:`¿Viajás ${place.transport.es} con gente local en ${place.country}?`,en:`Do you travel ${place.transport.en} with local people in ${place.countryEn}?`},
        {es:`¿Mirás ${place.nature.es} mientras viajás ${place.transport.es}?`,en:`Do you look at ${place.nature.en} while travelling ${place.transport.en}?`},
      ],
      [{es:"Para llegar, voy…",en:"To arrive, I go…"},{es:"Me parece…",en:"It seems…"},{es:"Viajo…",en:"I travel…"},{es:"Durante el viaje…",en:"During the trip…"}],
      [
        [place.transport,{es:"en avión",en:"by plane"},{es:"en taxi",en:"by taxi"}],
        [{es:"muy rápido",en:"very fast"},{es:"un poco lento",en:"a little slow"},{es:"cómodo",en:"comfortable"}],
        [place.transport,{es:"con gente local",en:"with local people"},{es:"con turistas",en:"with tourists"}],
        [{es:`miro ${place.nature.es}`,en:`I look at ${place.nature.en}`},{es:"saco fotos",en:"I take photos"},{es:"duermo",en:"I sleep"}],
      ],
      [
        {es:`¿Comprás el boleto para ${place.transport.es} en ${place.capital.es}?`,en:`Do you buy the ticket for ${place.transport.en} in ${place.capital.en}?`},
        {es:`¿${place.transport.es} es caro o barato en ${place.country}?`,en:`Is ${place.transport.en} expensive or cheap in ${place.countryEn}?`},
        {es:`¿Hablás con alguien durante el viaje por ${place.country}?`,en:`Do you speak with someone during the trip in ${place.countryEn}?`},
        {es:`Después de ${place.transport.es}, ¿caminás?`,en:`After ${place.transport.en}, do you walk?`},
      ],
      [
        [{es:"Sí, compro un boleto",en:"Yes, I buy a ticket"},{es:"Uso una tarjeta",en:"I use a card"},{es:"Pago en el transporte",en:"I pay on the transport"}],
        [{es:"Es barato",en:"It is cheap"},{es:"Es caro",en:"It is expensive"},{es:"Está bien",en:"It is OK"}],
        [{es:"Sí, hablo un poco",en:"Yes, I speak a little"},{es:"Solo digo hola",en:"I only say hello"},{es:"No, estoy tranquilo / tranquila",en:"No, I am quiet"}],
        [{es:"Sí, camino mucho",en:"Yes, I walk a lot"},{es:"Camino poco",en:"I walk a little"},{es:"Voy al hotel",en:"I go to the hotel"}],
      ]),
    q(5,
      [
        {es:`Cuando ${place.climate.es} en ${place.country}, ¿qué llevás?`,en:`When ${place.climate.en} in ${place.countryEn}, what do you take?`},
        {es:`En ${place.country}, ¿${place.climate.es} es perfecto para caminar?`,en:`In ${place.countryEn}, is it perfect for walking when ${place.climate.en}?`},
        {es:`¿Preferís el clima de ${place.country} o el clima de tu ciudad?`,en:`Do you prefer the weather in ${place.countryEn} or the weather in your city?`},
        {es:`Cuando ${place.climate.es} en ${place.country}, ¿te quedás afuera?`,en:`When ${place.climate.en} in ${place.countryEn}, do you stay outside?`},
      ],
      [{es:"Llevo…",en:"I take…"},{es:"Para caminar…",en:"To walk…"},{es:"Prefiero…",en:"I prefer…"},{es:"Me quedo…",en:"I stay…"}],
      [
        [{es:"una campera",en:"a jacket"},{es:"un paraguas",en:"an umbrella"},{es:"agua",en:"water"}],
        [{es:"una hora",en:"one hour"},{es:"solo un poco",en:"only a little"},{es:"todo el día",en:"all day"}],
        [{es:`el clima de ${place.country}`,en:`the weather in ${place.countryEn}`},{es:"el clima de mi ciudad",en:"the weather in my city"},{es:"los dos",en:"both"}],
        [{es:"afuera",en:"outside"},{es:"en el hotel",en:"in the hotel"},{es:"en un café",en:"in a café"}],
      ],
      [
        {es:`¿Visitás ${place.landmark.es} con ese clima?`,en:`Do you visit ${place.landmark.en} in that weather?`},
        {es:`¿Tomás algo caliente en ${place.country}?`,en:`Do you drink something hot in ${place.countryEn}?`},
        {es:`¿El clima cambia tu plan en ${place.country}?`,en:`Does the weather change your plan in ${place.countryEn}?`},
        {es:`¿Sacás fotos del clima de ${place.country}?`,en:`Do you take photos of the weather in ${place.countryEn}?`},
      ],
      [
        [{es:"Sí, voy igual",en:"Yes, I go anyway"},{es:"No, voy otro día",en:"No, I go another day"},{es:"Tal vez",en:"Maybe"}],
        [{es:"Tomo café",en:"I drink coffee"},{es:"Tomo té",en:"I drink tea"},{es:"Tomo agua",en:"I drink water"}],
        [{es:"Sí, cambio el plan",en:"Yes, I change the plan"},{es:"No, sigo igual",en:"No, I continue"},{es:"Solo un poco",en:"Only a little"}],
        [{es:"Sí, muchas fotos",en:"Yes, many photos"},{es:"Solo una foto",en:"Only one photo"},{es:"No saco fotos",en:"I do not take photos"}],
      ]),
    q(6,
      [
        {es:`¿Quién quiere descubrir ${place.capital.es} con vos?`,en:`Who wants to discover ${place.capital.en} with you?`},
        {es:`¿Con quién compartís ${place.food.es} en ${place.country}?`,en:`Who do you share ${place.food.en} with in ${place.countryEn}?`},
        {es:`¿Viajás solo / sola a ${place.capital.es} o con alguien?`,en:`Do you travel alone to ${place.capital.en} or with someone?`},
        {es:`¿Tu familia quiere ver ${place.landmark.es}, en ${place.country}?`,en:`Does your family want to see ${place.landmark.en}, in ${place.countryEn}?`},
      ],
      [{es:"Viajo con…",en:"I travel with…"},{es:"Comparto con…",en:"I share with…"},{es:"Voy…",en:"I go…"},{es:"Mi familia…",en:"My family…"}],
      [
        [{es:"mi familia",en:"my family"},{es:"una amiga / un amigo",en:"a friend"},{es:"mi pareja",en:"my partner"}],
        [{es:"mi familia",en:"my family"},{es:"gente local",en:"local people"},{es:"otra persona",en:"another person"}],
        [{es:"solo / sola",en:"alone"},{es:"con una persona",en:"with one person"},{es:"con un grupo",en:"with a group"}],
        [{es:`quiere ver ${place.landmark.es}`,en:`wants to see ${place.landmark.en}`},{es:`prefiere ${place.nature.es}`,en:`prefers ${place.nature.en}`},{es:"quiere hacer todo",en:"wants to do everything"}],
      ],
      [
        {es:`¿Quién elige el primer lugar en ${place.capital.es}?`,en:`Who chooses the first place in ${place.capital.en}?`},
        {es:`¿Quién pide primero ${place.food.es}?`,en:`Who orders ${place.food.en} first?`},
        {es:`¿Conocés gente nueva en ${place.country}?`,en:`Do you meet new people in ${place.countryEn}?`},
        {es:`¿Tu familia saca una foto en ${place.landmark.es}?`,en:`Does your family take a photo at ${place.landmark.en}?`},
      ],
      [
        [{es:"Yo elijo",en:"I choose"},{es:"Mi compañero / compañera elige",en:"My companion chooses"},{es:"Elegimos juntos",en:"We choose together"}],
        [{es:"Yo primero",en:"Me first"},{es:"Otra persona primero",en:"Another person first"},{es:"Pedimos juntos",en:"We order together"}],
        [{es:"Sí, conozco gente",en:"Yes, I meet people"},{es:"Solo una persona",en:"Only one person"},{es:"No, prefiero estar solo / sola",en:"No, I prefer to be alone"}],
        [{es:"Sí, una foto familiar",en:"Yes, a family photo"},{es:"Solo yo",en:"Only me"},{es:"No sacamos fotos",en:"We do not take photos"}],
      ]),
    q(7,
      [
        {es:`¿Cuántos días necesitás para conocer ${place.country}?`,en:`How many days do you need to discover ${place.countryEn}?`},
        {es:`¿Un fin de semana alcanza para visitar ${place.capital.es}?`,en:`Is one weekend enough to visit ${place.capital.en}?`},
        {es:`En ${place.country}, ¿dormís en ${place.capital.es} o cerca de ${place.nature.es}?`,en:`In ${place.countryEn}, do you sleep in ${place.capital.en} or near ${place.nature.en}?`},
        {es:`¿Qué hacés el primer día en ${place.country}?`,en:`What do you do on the first day in ${place.countryEn}?`},
      ],
      [{es:"Necesito…",en:"I need…"},{es:"Para visitar…",en:"To visit…"},{es:"Duermo…",en:"I sleep…"},{es:"El primer día…",en:"On the first day…"}],
      [
        [{es:"tres días",en:"three days"},{es:"una semana",en:"one week"},{es:"un mes",en:"one month"}],
        [{es:"un fin de semana",en:"one weekend"},{es:"tres días",en:"three days"},{es:"una semana",en:"one week"}],
        [{es:`en ${place.capital.es}`,en:`in ${place.capital.en}`},{es:`cerca de ${place.nature.es}`,en:`near ${place.nature.en}`},{es:"en dos lugares",en:"in two places"}],
        [{es:`visito ${place.landmark.es}`,en:`I visit ${place.landmark.en}`},{es:`pruebo ${place.food.es}`,en:`I try ${place.food.en}`},{es:"descanso",en:"I rest"}],
      ],
      [
        {es:`¿Guardás un día para ${place.nature.es}?`,en:`Do you save one day for ${place.nature.en}?`},
        {es:`¿Qué hacés el domingo en ${place.capital.es}?`,en:`What do you do on Sunday in ${place.capital.en}?`},
        {es:`¿Cambias de hotel en ${place.country}?`,en:`Do you change hotels in ${place.countryEn}?`},
        {es:`¿Qué hacés la última noche en ${place.country}?`,en:`What do you do on the last night in ${place.countryEn}?`},
      ],
      [
        [{es:"Sí, un día completo",en:"Yes, one full day"},{es:"Solo una mañana",en:"Only one morning"},{es:"No tengo tiempo",en:"I do not have time"}],
        [{es:"camino por la ciudad",en:"I walk around the city"},{es:"voy a un café",en:"I go to a café"},{es:"descanso",en:"I rest"}],
        [{es:"Sí, cambio de hotel",en:"Yes, I change hotels"},{es:"No, uso un hotel",en:"No, I use one hotel"},{es:"No necesito hotel",en:"I do not need a hotel"}],
        [{es:"ceno algo rico",en:"I eat a tasty dinner"},{es:"camino de noche",en:"I walk at night"},{es:"preparo la valija",en:"I prepare my suitcase"}],
      ]),
    q(8,
      [
        {es:`En ${place.country}, ¿decís “${place.greeting.es}” cuando entrás a un mercado?`,en:`In ${place.countryEn}, do you say “${place.greeting.en}” when you enter a market?`},
        {es:`¿Podés pronunciar “${place.greeting.es}” antes de visitar ${place.landmark.es}?`,en:`Can you pronounce “${place.greeting.en}” before visiting ${place.landmark.en}?`},
        {es:`¿Usás “${place.greeting.es}” para conocer a una persona en ${place.capital.es}?`,en:`Do you use “${place.greeting.en}” to meet a person in ${place.capital.en}?`},
        {es:`¿Qué es más fácil: decir “${place.greeting.es}” o decir “${place.country}”?`,en:`What is easier: saying “${place.greeting.en}” or saying “${place.countryEn}”?`},
      ],
      [{es:"Cuando entro, digo…",en:"When I enter, I say…"},{es:"Puedo decir…",en:"I can say…"},{es:"Para saludar, digo…",en:"To greet, I say…"},{es:"Es más fácil decir…",en:"It is easier to say…"}],
      [
        [place.greeting,{es:"hola",en:"hello"},{es:"buen día",en:"good morning"}],
        [place.greeting,{es:"el nombre del lugar",en:"the name of the place"},{es:"las dos cosas",en:"both things"}],
        [place.greeting,{es:"mi nombre",en:"my name"},{es:"mucho gusto",en:"nice to meet you"}],
        [place.greeting,{es:place.country,en:place.countryEn},{es:"las dos palabras",en:"both words"}],
      ],
      [
        {es:`¿Después de “${place.greeting.es}” pedís ${place.food.es}?`,en:`After “${place.greeting.en}”, do you order ${place.food.en}?`},
        {es:`¿Repetís “${place.greeting.es}” tres veces?`,en:`Do you repeat “${place.greeting.en}” three times?`},
        {es:`¿La persona de ${place.capital.es} responde el saludo?`,en:`Does the person from ${place.capital.en} answer the greeting?`},
        {es:`¿Enseñás tu saludo a una persona de ${place.country}?`,en:`Do you teach your greeting to a person from ${place.countryEn}?`},
      ],
      [
        [{es:`Sí, después pido ${place.food.es}`,en:`Yes, then I order ${place.food.en}`},{es:"No, primero tomo agua",en:"No, first I drink water"},{es:"Primero miro el menú",en:"First I look at the menu"}],
        [{es:"Sí, tres veces",en:"Yes, three times"},{es:"Solo una vez",en:"Only once"},{es:"Más despacio",en:"More slowly"}],
        [{es:"Sí, responde",en:"Yes, the person answers"},{es:"Responde con una sonrisa",en:"The person answers with a smile"},{es:"No entiendo",en:"I do not understand"}],
        [{es:"Sí, enseño mi saludo",en:"Yes, I teach my greeting"},{es:"Solo digo hola",en:"I only say hello"},{es:"Comparamos los saludos",en:"We compare the greetings"}],
      ]),
    q(9,
      [
        {es:`Llegás a ${place.capital.es}. ¿Qué elegís primero en ${place.country}?`,en:`You arrive in ${place.capital.en}. What do you choose first in ${place.countryEn}?`},
        {es:`Tenés una mañana en ${place.country}: ¿${place.landmark.es} o ${place.food.es}?`,en:`You have one morning in ${place.countryEn}: ${place.landmark.en} or ${place.food.en}?`},
        {es:`En ${place.country}, ¿qué elegís: ${place.landmark.es}, ${place.food.es} o ${place.animal.es}?`,en:`In ${place.countryEn}, what do you choose: ${place.landmark.en}, ${place.food.en} or ${place.animal.en}?`},
        {es:`Antes de volver de ${place.country}, ¿qué recuerdo elegís?`,en:`Before returning from ${place.countryEn}, what souvenir do you choose?`},
      ],
      [{es:"Primero elijo…",en:"First I choose…"},{es:"En la mañana…",en:"In the morning…"},{es:"Elijo…",en:"I choose…"},{es:"Como recuerdo elijo…",en:"As a souvenir I choose…"}],
      [
        [{es:`visitar ${place.landmark.es}`,en:`to visit ${place.landmark.en}`},{es:`probar ${place.food.es}`,en:`to try ${place.food.en}`},{es:`ver ${place.animal.es}`,en:`to see ${place.animal.en}`}],
        [{es:`visito ${place.landmark.es}`,en:`I visit ${place.landmark.en}`},{es:`pruebo ${place.food.es}`,en:`I try ${place.food.en}`},{es:"hago las dos cosas",en:"I do both things"}],
        [place.landmark,place.food,place.animal],
        [{es:`algo de ${place.culture.es}`,en:`something from ${place.culture.en}`},{es:"una foto",en:"a photo"},{es:"comida",en:"food"}],
      ],
      [
        {es:`Después, ¿vas a ${place.nature.es}?`,en:`Then, do you go to ${place.nature.en}?`},
        {es:`Después de la mañana, ¿descansás en ${place.capital.es}?`,en:`After the morning, do you rest in ${place.capital.en}?`},
        {es:`¿Compartís tu elección con alguien de ${place.country}?`,en:`Do you share your choice with someone from ${place.countryEn}?`},
        {es:`¿Dónde guardás el recuerdo de ${place.country}?`,en:`Where do you keep the souvenir from ${place.countryEn}?`},
      ],
      [
        [{es:`Sí, después voy a ${place.nature.es}`,en:`Yes, then I go to ${place.nature.en}`},{es:"No, vuelvo al hotel",en:"No, I return to the hotel"},{es:"Tal vez mañana",en:"Maybe tomorrow"}],
        [{es:"Sí, descanso",en:"Yes, I rest"},{es:"No, sigo caminando",en:"No, I keep walking"},{es:"Voy a un café",en:"I go to a café"}],
        [{es:"Sí, con una persona local",en:"Yes, with a local person"},{es:"Con mi familia",en:"With my family"},{es:"No, es personal",en:"No, it is personal"}],
        [{es:"en mi valija",en:"in my suitcase"},{es:"en mi casa",en:"in my house"},{es:"en mi teléfono",en:"on my phone"}],
      ]),
  ];

  const rotation=(countryIndex*3)%worlds.length;
  return [...worlds.slice(rotation),...worlds.slice(0,rotation)];
}

function Glyph({ name }: { name: GlyphName }) {
  const content: Record<GlyphName, ReactNode> = {
    map:<><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z"/><path d="M9 4v13.5M15 6.5V20"/></>,
    shuffle:<><path d="M16 3h5v5"/><path d="m4 20 5.5-5.5M21 3l-7.5 7.5"/><path d="M4 4h2.5c4.5 0 7 16 11 16H21"/><path d="m17 16 4 4-4 4"/></>,
    sound:<><path d="M5 10v4h4l5 4V6l-5 4Z"/><path d="M17 9.5c1.2 1.1 1.2 3.9 0 5M19.5 7c3 3 3 7 0 10"/></>,
    clear:<><path d="M5 7h14M9 7V4h6v3M8 10v8M12 10v8M16 10v8M7 7l1 14h8l1-14"/></>,
    home:<><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9Z"/></>,
    words:<><path d="M4 5h16v14H4Z"/><path d="M8 9h8M8 13h5"/></>,
  };
  return <svg className="wf-glyph" viewBox="0 0 24 24" aria-hidden="true">{content[name]}</svg>;
}

function Sky({ dense = false }: { dense?: boolean }) {
  return <div className={`wf-sky ${dense ? "dense" : ""}`} aria-hidden="true"><i/><i/><i/><i/><i/><span/><span/><span/></div>;
}

function Crest({ place, small = false }: { place: Destination; small?: boolean }) {
  return <div className={`wf-crest ${small ? "small" : ""}`} style={{"--place":place.color} as CSSProperties} aria-hidden="true"><i/><span>{place.number}</span><small>{continentCodes[place.continent]}</small></div>;
}

function cleanCredit(value: string | undefined) {
  if (!value) return "Wikimedia Commons";
  const node = document.createElement("div");
  node.innerHTML = value;
  return (node.textContent || "Wikimedia Commons").replace(/\s+/g," ").trim().slice(0,72);
}

function WikiVisual({query,alt,label,subLabel,className="",seed=0,group="global"}:{query:string;alt:string;label:string;subLabel:string;className?:string;seed?:number;group?:string}) {
  const cacheKey=`${query}::${seed}`;
  const [visual,setVisual] = useState<VisualResult | null>(()=>imageCache.get(cacheKey)||null);
  const [failed,setFailed] = useState(false);

  useEffect(()=>{
    const cached=imageCache.get(cacheKey);
    if(cached){
      const used=usedImageSources.get(group)||new Set<string>();used.add(cached.src);usedImageSources.set(group,used);
      const frame=window.requestAnimationFrame(()=>{setVisual(cached);setFailed(false)});
      return()=>window.cancelAnimationFrame(frame);
    }
    const controller=new AbortController();
    const frame=window.requestAnimationFrame(()=>{setVisual(null);setFailed(false)});
    const params=new URLSearchParams({action:"query",generator:"search",gsrsearch:query,gsrnamespace:"6",gsrlimit:"12",prop:"imageinfo",iiprop:"url|extmetadata",iiurlwidth:"1000",format:"json",origin:"*"});
    fetch(`https://commons.wikimedia.org/w/api.php?${params}`,{signal:controller.signal})
      .then(response=>response.ok?response.json():Promise.reject(new Error("visual")))
      .then(payload=>{
        const pages=(Object.values((payload as {query?:{pages?:Record<string,unknown>}})?.query?.pages||{}) as Array<{index?:number;imageinfo?:Array<{thumburl?:string;descriptionurl?:string;extmetadata?:Record<string,{value?:string}>}>}>).sort((a,b)=>(a.index||0)-(b.index||0));
        const candidates=pages.map(page=>page.imageinfo?.[0]).filter((info):info is NonNullable<typeof info>=>Boolean(info?.thumburl));
        const used=usedImageSources.get(group)||new Set<string>();
        const ordered=[...candidates.slice(seed%candidates.length),...candidates.slice(0,seed%candidates.length)];
        const info=ordered.find(candidate=>candidate.thumburl&&!used.has(candidate.thumburl))||ordered[0];
        if(!info?.thumburl)throw new Error("visual");
        const result={src:info.thumburl,source:info.descriptionurl||"https://commons.wikimedia.org",artist:cleanCredit(info.extmetadata?.Artist?.value),license:cleanCredit(info.extmetadata?.LicenseShortName?.value)};
        used.add(result.src);usedImageSources.set(group,used);imageCache.set(cacheKey,result);setVisual(result);
      })
      .catch(error=>{if(error?.name!=="AbortError")setFailed(true)});
    return()=>{window.cancelAnimationFrame(frame);controller.abort()};
  },[cacheKey,group,query,seed]);

  return <article className={`wf-wiki-visual ${className} ${visual?"loaded":""} ${failed?"failed":""}`}>
    {visual?<img src={visual.src} alt={alt}/>:<div className="wf-visual-loading"><i/><i/><i/></div>}
    <div className="wf-visual-shade"/>
    <div className="wf-visual-label"><span>{label}</span><b>{subLabel}</b></div>
    {visual&&<a href={visual.source} target="_blank" rel="noreferrer" title={`${visual.artist} · ${visual.license}`}>WIKIMEDIA · {visual.license}</a>}
    {failed&&<small className="wf-visual-fallback">IMAGEN NO DISPONIBLE · IMAGE UNAVAILABLE</small>}
  </article>;
}

function TypicalGallery({place}:{place:Destination}) {
  return <div className="wf-typical-gallery">
    <WikiVisual className="wf-visual-landmark" query={`${place.landmark.en} ${place.countryEn} landmark wide view`} alt={`${place.landmark.es}, ${place.country}`} label="LUGAR · PLACE" subLabel={place.landmark.es} seed={20} group={place.id}/>
    <WikiVisual className="wf-visual-food" query={`${place.food.en} ${place.countryEn} traditional food close up`} alt={`${place.food.es}, ${place.country}`} label="COMIDA · FOOD" subLabel={place.food.es} seed={21} group={place.id}/>
    <WikiVisual className="wf-visual-nature" query={`${place.nature.en} ${place.countryEn} landscape panorama`} alt={`${place.nature.es}, ${place.country}`} label="NATURALEZA · NATURE" subLabel={place.nature.es} seed={22} group={place.id}/>
    <div className="wf-gallery-crest"><Crest place={place} small/></div>
  </div>;
}

function questionVisual(place:Destination,index:number){
  const scenes=[
    {query:`${place.landmark.en} ${place.countryEn} landmark exterior`,label:"LUGAR · PLACE",title:place.landmark.es},
    {query:`${place.food.en} ${place.countryEn} traditional food close up`,label:"COMIDA · FOOD",title:place.food.es},
    {query:`${place.nature.en} ${place.countryEn} landscape panorama`,label:"NATURALEZA · NATURE",title:place.nature.es},
    {query:`${place.animal.en} ${place.countryEn} wildlife`,label:"ANIMAL · ANIMAL",title:place.animal.es},
    {query:`${place.transport.en} ${place.countryEn} street transport`,label:"VIAJE · TRAVEL",title:place.transport.es},
    {query:`${place.countryEn} ${place.climate.en} weather landscape`,label:"CLIMA · WEATHER",title:place.climate.es},
    {query:`${place.countryEn} family travel people street`,label:"PERSONAS · PEOPLE",title:"compañía de viaje"},
    {query:`${place.countryEn} hotel city night travel`,label:"TIEMPO · TIME",title:"días de viaje"},
    {query:`${place.culture.en} ${place.countryEn} festival people`,label:"CULTURA · CULTURE",title:place.culture.es},
    {query:`${place.capital.en} ${place.countryEn} city street aerial`,label:"LLEGADA · ARRIVAL",title:place.capital.es},
  ];
  return scenes[index]||scenes[0];
}

export default function MundoFantastico() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [active, setActive] = useState<Destination>(destinations[9]);
  const [atlasPick, setAtlasPick] = useState<Destination>(destinations[9]);
  const [continent, setContinent] = useState<"Todos" | Continent>("Todos");
  const [query, setQuery] = useState("");
  const [question, setQuestion] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [answerParts, setAnswerParts] = useState<Pair[]>([]);
  const [englishVisible, setEnglishVisible] = useState(true);
  const [bankOpen, setBankOpen] = useState(false);
  const closeBank = () => setBankOpen(false);
  const bankDialogRef = useAccessibleModal<HTMLDivElement>(bankOpen, closeBank);
  const [bankTab, setBankTab] = useState("country");
  const [bankQuery, setBankQuery] = useState("");

  const visibleDestinations = useMemo(() => destinations.filter(place =>
    (continent === "Todos" || place.continent === continent) &&
    `${place.country} ${place.countryEn} ${place.capital.es} ${place.continent}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [continent, query]);
  const questions = useMemo(() => questionsFor(active), [active]);
  const current = questions[question];
  const progress = Math.round(visited.size / destinations.length * 100);
  const answerEs = answerParts.map(item => item.es.replace(/[.…]+/g, "")).join(" ");
  const answerEn = answerParts.map(item => item.en.replace(/[.…]+/g, "")).join(" ");
  const destinationWords: Array<Pair & { code: string; label: Pair }> = [
    {es:active.country,en:active.countryEn,code:"PA",label:{es:"PAÍS",en:"COUNTRY"}},
    {es:active.continent,en:continentEnglish[active.continent],code:"CN",label:{es:"CONTINENTE",en:"CONTINENT"}},
    {...active.capital,code:"CA",label:{es:"CAPITAL",en:"CAPITAL"}},
    {...active.landmark,code:"LU",label:{es:"LUGAR",en:"PLACE"}},
    {...active.food,code:"CO",label:{es:"COMIDA",en:"FOOD"}},
    {...active.nature,code:"NA",label:{es:"NATURALEZA",en:"NATURE"}},
    {...active.animal,code:"AN",label:{es:"ANIMAL",en:"ANIMAL"}},
    {...active.culture,code:"CU",label:{es:"CULTURA",en:"CULTURE"}},
    {...active.transport,code:"TR",label:{es:"TRANSPORTE",en:"TRANSPORT"}},
    {...active.climate,code:"CL",label:{es:"CLIMA",en:"WEATHER"}},
  ];
  const bankCatalog = [
    {id:"country",code:"PA",label:{es:active.country,en:active.countryEn},words:destinationWords},
    {id:"phrases",code:"A0",label:{es:"Frases rápidas",en:"Quick phrases"},words:answerTools},
    ...megaWordbank,
  ];
  const normalizedBankQuery=bankQuery.trim().toLowerCase();
  const visibleBankGroups=bankCatalog
    .filter(group=>!normalizedBankQuery||group.words.some(word=>`${word.es} ${word.en}`.toLowerCase().includes(normalizedBankQuery)))
    .filter(group=>normalizedBankQuery||group.id===bankTab)
    .map(group=>({...group,words:normalizedBankQuery?group.words.filter(word=>`${word.es} ${word.en}`.toLowerCase().includes(normalizedBankQuery)):group.words}));
  const currentVisual=questionVisual(active,current.visual);

  const show = (next: Screen) => { setScreen(next); window.scrollTo({top:0,behavior:"smooth"}); };
  const enter = (place: Destination, start = 0) => { setActive(place); setAtlasPick(place); setQuestion(start); setAnswerParts([]); setBankTab("country"); setBankQuery(""); setBankOpen(false); setVisited(previous => new Set([...previous, place.id])); show("destination"); };
  const surprise = () => { const pool = destinations.filter(place => place.id !== active.id); const place = pool[Math.floor(Math.random() * pool.length)] || destinations[0]; enter(place, Math.floor(Math.random() * 10)); };
  const addPart = (part: Pair) => setAnswerParts(parts => [...parts, part]);
  const changeQuestion = (next: number) => { setQuestion(Math.max(0, Math.min(9, next))); setAnswerParts([]); document.querySelector(".wf-question-stage")?.scrollIntoView({behavior:"smooth",block:"center"}); };
  const speak = (text: string) => { if (typeof window === "undefined" || !("speechSynthesis" in window)) return; window.speechSynthesis.cancel(); const voice = new SpeechSynthesisUtterance(text); voice.lang = "es-AR"; voice.rate = .76; window.speechSynthesis.speak(voice); };

  return <main className={`wf-app ${englishVisible ? "" : "wf-spanish-only"}`}>
    <nav className="wf-nav">
      <Link href="/" className="wf-brand"><span><img src="/brand/mascot/portrait.webp" alt=""/></span><div><b>SPANISHCUE</b><small>CONVERSATION ADVENTURES</small></div></Link>
      <div className="wf-progress"><span>MUNDOS ABIERTOS · OPEN WORLDS</span><i><b style={{width:`${progress}%`}}/></i><strong>{visited.size}/40</strong></div>
      <div className="wf-nav-actions"><button onClick={surprise}><Glyph name="shuffle"/> SORPRESA</button><button onClick={() => show(screen === "cover" ? "atlas" : "cover")}><Glyph name={screen === "cover" ? "map" : "home"}/>{screen === "cover" ? " MAPA" : " INICIO"}</button></div>
    </nav>

    {screen === "cover" && <section className="wf-cover">
      <Sky dense/>
      <div className="wf-cover-copy">
        <div className="wf-kicker"><span>A0</span> PARA EMPEZAR DE CERO · START FROM ZERO</div>
        <p className="wf-overline">6 CONTINENTES · AMÉRICA = 1 CONTINENTE · 40 MUNDOS</p>
        <h1>EL MUNDO<br/><em>FANTÁSTICO</em></h1>
        <p className="wf-lead">Viajá por el planeta y hablá español desde la primera palabra.<b> Preguntas mínimas. Respuestas tocables. Wordbank completo.</b><span className="wf-en">Travel around the planet and speak Spanish from the very first word. Tiny questions, tappable answers and a complete word bank.</span></p>
        <div className="wf-cover-actions"><button onClick={() => show("atlas")}>ABRIR EL MAPA <span>→</span><small className="wf-en">OPEN THE MAP</small></button><button className="ghost" onClick={surprise}><Glyph name="shuffle"/> PAÍS SORPRESA<small className="wf-en">SURPRISE COUNTRY</small></button></div>
        <div className="wf-stats"><article><b>6</b><span>continentes<small>continents</small></span></article><article><b>40</b><span>mundos<small>worlds</small></span></article><article><b>400</b><span>preguntas A0<small>A0 questions</small></span></article><article><b>120+</b><span>palabras<small>words</small></span></article></div>
      </div>
      <div className="wf-hero-map" aria-hidden="true">
        <div className="wf-globe"><img src="/world-map.svg" alt=""/><i/><i/><i/></div>
        <span className="wf-orbit-label one">AMÉRICA · ONE CONTINENT</span><span className="wf-orbit-label two">A0 · ONE WORD COUNTS</span><span className="wf-orbit-label three">6 CONTINENTES</span>
        <div className="wf-hero-pin p1"/><div className="wf-hero-pin p2"/><div className="wf-hero-pin p3"/><div className="wf-hero-pin p4"/>
      </div>
      <div className="wf-horizon" aria-hidden="true"><i/><i/><i/></div>
    </section>}

    {screen === "atlas" && <section className="wf-atlas-screen">
      <header className="wf-atlas-head"><div><span>ATLAS MUNDIAL · WORLD ATLAS</span><h1>Elegí un continente.<br/><em>Abrí un país. Hablá.</em></h1></div><div><p>Los 40 puntos son mundos de conversación A0. América aparece como un solo continente.</p><span className="wf-en">The 40 points are A0 conversation worlds. America appears as one continent.</span><button onClick={surprise}><Glyph name="shuffle"/> QUE EL MUNDO DECIDA</button></div></header>

      <div className="wf-toolbar">
        <div className="wf-continent-tabs">{continents.map(item => <button key={item} className={continent === item ? "active" : ""} style={{"--tab":item === "Todos" ? "#ffffff" : continentColors[item]} as CSSProperties} onClick={() => setContinent(item)}>{item}<small>{item === "Todos" ? "All" : continentEnglish[item]}</small></button>)}</div>
        <label><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar país o capital · Search"/></label>
      </div>

      <section className="wf-map-layout">
        <div className="wf-map-frame">
          <header><span><Glyph name="compass"/> MAPA INTERACTIVO · INTERACTIVE MAP</span><b>{visibleDestinations.length} visibles · visible</b></header>
          <div className="wf-map-scroll">
            <div className="wf-map" aria-label="Mapa mundial interactivo con cuarenta destinos">
              <img src="/world-map.svg" alt="Mapa del mundo"/>
              <div className="wf-map-grid" aria-hidden="true"/>
              {destinations.map(place => {
                const visible = visibleDestinations.some(item => item.id === place.id);
                return <button key={place.id} disabled={!visible} onClick={() => setAtlasPick(place)} className={`wf-map-node ${atlasPick.id === place.id ? "selected" : ""} ${visited.has(place.id) ? "visited" : ""} ${visible ? "" : "hidden"}`} style={{left:`${place.x}%`,top:`${place.y}%`,"--place":place.color} as CSSProperties} aria-label={`${place.country}: ${place.title.es}`}><b>{place.number}</b><span><strong>{place.country}</strong><small>{place.countryEn}</small></span></button>;
              })}
              <div className="wf-america-note" aria-hidden="true"><b>AMÉRICA</b><span>1 CONTINENTE</span></div>
              <p className="wf-map-instruction">TOCÁ UN PUNTO · TAP A POINT</p>
            </div>
          </div>
          <footer>Mapa base: Natural Earth · CC0 <span>•</span> Los puntos son destinos de la clase, no capitales exactas.</footer>
        </div>

        <aside className="wf-portal" style={{"--place":atlasPick.color} as CSSProperties}>
          <div className="wf-portal-map"><img src="/world-map.svg" alt=""/><Crest place={atlasPick}/></div>
          <div className="wf-portal-copy"><span>{atlasPick.continent} · MUNDO {atlasPick.number}</span><small>{atlasPick.countryEn}</small><h2>{atlasPick.country}</h2><h3>{atlasPick.title.es}</h3><p className="wf-en">{atlasPick.title.en}</p><div className="wf-capital"><small>CAPITAL · CAPITAL</small><b>{atlasPick.capital.es}</b></div><div className="wf-portal-tags"><b>10 preguntas</b><b>Audio lento</b><b>Wordbank total</b></div><button onClick={() => enter(atlasPick)}>ABRIR ESTE MUNDO <span>→</span><small className="wf-en">OPEN THIS WORLD</small></button></div>
        </aside>
      </section>

      <section className="wf-country-strip"><header><span>DESTINOS · DESTINATIONS</span><b>{visited.size} abiertos · opened</b></header><div>{visibleDestinations.map(place => <button key={place.id} onClick={() => setAtlasPick(place)} className={`${atlasPick.id === place.id ? "active" : ""} ${visited.has(place.id) ? "visited" : ""}`} style={{"--place":place.color} as CSSProperties}><span>{place.number}</span><b>{place.country}</b><small>{continentCodes[place.continent]}</small></button>)}</div></section>
      {!visibleDestinations.length && <div className="wf-empty"><b>No encontramos ese lugar.</b><span>Probá otro país o una capital. · Try another country or capital.</span></div>}
    </section>}

    {screen === "destination" && <section className={`wf-world wf-continent-${continentSlug[active.continent]} wf-country-${active.id}`} style={{"--place":active.color,"--continent":continentColors[active.continent]} as CSSProperties}>
      <header className="wf-world-hero">
        <Sky/>
        <div className="wf-world-top"><button onClick={() => show("atlas")}>← MAPA · MAP</button><span>MUNDO {active.number} · {active.continent}</span><div><button className={englishVisible ? "active" : ""} onClick={() => setEnglishVisible(value => !value)}>EN {englishVisible ? "ON" : "OFF"}</button><button onClick={surprise}><Glyph name="shuffle"/> OTRO PAÍS</button></div></div>
        <div className="wf-world-copy"><small>{active.continent} · {continentEnglish[active.continent]}</small><h1>{active.country}</h1><h2>{active.countryEn}</h2><p><b>{active.title.es}</b><span className="wf-en">{active.title.en}</span></p><div className="wf-world-facts"><span><small>CAPITAL</small>{active.capital.es}</span><span><small>HOLA</small>{active.greeting.es}</span><span><small>CLIMA</small>{active.climate.es}</span></div><div className="wf-typical-chips"><b>{active.landmark.es}</b><b>{active.food.es}</b><b>{active.animal.es}</b><b>{active.culture.es}</b></div></div>
        <TypicalGallery place={active}/>
        <div className="wf-country-atmosphere" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      </header>

      <div className="wf-classroom">
        <section className="wf-rule"><span>A0 REAL · REAL A0</span><b>Una palabra es una respuesta. Una mini frase es una victoria.</b><em className="wf-en">One word is an answer. One tiny sentence is a victory.</em></section>

        <section className="wf-question-stage">
          <div className="wf-question-count"><span>PREGUNTA · QUESTION</span><b>{String(question + 1).padStart(2,"0")} <i>/ 10</i></b></div>
          <div className="wf-question-copy"><small>{active.country} · {active.countryEn}</small><h2>{current.prompt.es}</h2><p className="wf-en">{current.prompt.en}</p><div className="wf-question-actions"><button onClick={() => speak(current.prompt.es)}><Glyph name="sound"/> ESCUCHAR LENTO</button><button onClick={() => {setBankTab("country");setBankOpen(true)}}><Glyph name="words"/> WORDBANK</button></div></div>
          <div className="wf-question-picture"><WikiVisual key={`${active.id}-${question}`} query={currentVisual.query} alt={`${currentVisual.title}, ${active.country}`} label={currentVisual.label} subLabel={currentVisual.title} seed={current.visual} group={active.id}/></div>
        </section>

        <section className="wf-support">
          <button className="wf-starter" onClick={() => addPart(current.starter)}><span>1 · EMPEZÁ ASÍ · START</span><b>{current.starter.es}</b><em className="wf-en">{current.starter.en}</em><i><Glyph name="plus"/> AGREGAR</i></button>
          <article className="wf-choices"><span>2 · ELEGÍ · CHOOSE</span><div>{current.choices.map((choice, index) => <button key={`${choice.es}-${index}`} onClick={() => addPart(choice)}><b>{choice.es}</b><small className="wf-en">{choice.en}</small><i>+</i></button>)}</div></article>
          <article className="wf-follow"><span>3 · UNA MÁS · ONE MORE</span><b>{current.follow.prompt.es}</b><em className="wf-en">{current.follow.prompt.en}</em><small>TOCÁ UNA RESPUESTA · TAP AN ANSWER</small><div>{current.follow.choices.map((choice,index)=><button key={`${choice.es}-${index}`} onClick={()=>addPart(choice)}><b>{choice.es}</b><small className="wf-en">{choice.en}</small><i>+</i></button>)}</div></article>
        </section>

        <section className="wf-quick-bank"><header><div><span>WORDBANK INMEDIATO · QUICK WORDBANK</span><b>Sin bajar: tocá una palabra o abrí todo.</b></div><button onClick={() => {setBankTab("country");setBankOpen(true)}}><Glyph name="words"/> VER 120+ PALABRAS</button></header><div>{destinationWords.slice(0,8).map((word,index)=><button key={`${word.es}-${index}`} onClick={()=>addPart(word)}><small>{word.code}</small><b>{word.es}</b><span className="wf-en">{word.en}</span><i>+</i></button>)}</div></section>

        <section className="wf-builder" aria-live="polite">
          <header><div><span>CONSTRUCTOR DE FRASES · SENTENCE BUILDER</span><h2>Tocá palabras. Armá tu respuesta.</h2><p className="wf-en">Tap words. Build your answer.</p></div><div><button disabled={!answerParts.length} onClick={() => speak(answerEs)}><Glyph name="sound"/> ESCUCHAR</button><button disabled={!answerParts.length} onClick={() => setAnswerParts([])}><Glyph name="clear"/> BORRAR</button></div></header>
          <div className={`wf-answer ${answerParts.length ? "ready" : ""}`}>{answerParts.length ? answerParts.map((part, index) => <button key={`${part.es}-${index}`} onClick={() => setAnswerParts(parts => parts.filter((_, itemIndex) => index !== itemIndex))}><b>{part.es.replace(/[.…]+/g, "")}</b><small className="wf-en">{part.en.replace(/[.…]+/g, "")}</small></button>) : <p><b>Tu respuesta aparece acá…</b><span className="wf-en">Your answer appears here…</span></p>}</div>
          {answerParts.length > 0 && <div className="wf-readout"><b>{answerEs}</b><span className="wf-en">{answerEn}</span></div>}
        </section>

        <nav className="wf-question-nav"><button disabled={question === 0} onClick={() => changeQuestion(question - 1)}>← ANTERIOR · PREVIOUS</button><div>{questions.map((_, index) => <button key={index} className={question === index ? "active" : ""} onClick={() => changeQuestion(index)} aria-label={`Pregunta ${index + 1}`}>{index + 1}</button>)}</div><button onClick={() => question === 9 ? surprise() : changeQuestion(question + 1)}>{question === 9 ? "NUEVO PAÍS · NEW COUNTRY →" : "SIGUIENTE · NEXT →"}</button></nav>
      </div>

      <button className="wf-bank-fab" onClick={()=>setBankOpen(true)} aria-expanded={bankOpen}><Glyph name="words"/><span><b>WORDBANK</b><small>ABRIR SIN BAJAR · OPEN NOW</small></span><i>120+</i></button>
      {bankOpen&&<div ref={bankDialogRef} tabIndex={-1} className="wf-bank-overlay" role="dialog" aria-modal="true" aria-label="Wordbank bilingüe" onMouseDown={closeBank}><aside className="wf-bank-drawer" onMouseDown={event=>event.stopPropagation()}>
        <header><div><span>WORDBANK SIEMPRE A MANO · ALWAYS READY</span><h2>{active.country}: hablá sin buscar.</h2><p className="wf-en">Tap any word. It goes directly to your answer.</p></div><button onClick={closeBank} aria-label="Cerrar wordbank">×</button></header>
        <label className="wf-bank-search"><span>⌕</span><input autoFocus value={bankQuery} onChange={event=>setBankQuery(event.target.value)} placeholder="Buscar español o inglés · Search Spanish or English"/><button disabled={!bankQuery} onClick={()=>setBankQuery("")}>BORRAR</button></label>
        <nav className="wf-drawer-tabs">{bankCatalog.map(group=><button key={group.id} className={bankTab===group.id&&!normalizedBankQuery?"active":""} onClick={()=>{setBankTab(group.id);setBankQuery("")}}><span>{group.code}</span><b>{group.label.es}</b><small className="wf-en">{group.label.en}</small></button>)}</nav>
        <div className="wf-drawer-results">{visibleBankGroups.length?visibleBankGroups.map(group=><section key={group.id}><header><span>{group.code}</span><div><b>{group.label.es}</b><small className="wf-en">{group.label.en}</small></div><i>{group.words.length}</i></header><div>{group.words.map((word,index)=><button key={`${group.id}-${word.es}-${index}`} onClick={()=>addPart(word)}><b>{word.es}</b><small className="wf-en">{word.en}</small><i>+</i></button>)}</div></section>):<div className="wf-bank-empty"><b>No aparece esa palabra.</b><span>Probá otra búsqueda. · Try another search.</span></div>}</div>
        <footer><div><span>RESPUESTA ACTUAL · CURRENT ANSWER</span><b>{answerEs||"Todavía vacía…"}</b><small className="wf-en">{answerEn||"Still empty…"}</small></div><div><button disabled={!answerParts.length} onClick={()=>setAnswerParts([])}><Glyph name="clear"/> BORRAR</button><button onClick={closeBank}>LISTO · DONE →</button></div></footer>
      </aside></div>}
    </section>}
  </main>;
}
