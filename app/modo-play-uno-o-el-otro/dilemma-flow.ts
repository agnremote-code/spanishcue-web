import type { Choice, Condition } from "./choices";

/**
 * Estado de un dilema: cuántas condiciones se abrieron (0, 1 o 2) y qué opción eligió el alumno en cada ronda.
 * picks[0] = decisión inicial, picks[1] = decisión con la condición 1, picks[2] = decisión final con las dos condiciones.
 */
export type DilemmaState={revealed:0|1|2;picks:(0|1)[]};
export type Movement="INICIAL"|"MANTUVISTE"|"CAMBIASTE"|"VOLVISTE";
export type TrailStep={round:0|1|2;label:string;option:0|1;movement:Movement};

export const emptyDilemma:DilemmaState={revealed:0,picks:[]};
export const ROUND_LABELS=["DECISIÓN INICIAL","CON LA CONDICIÓN 1","CON LAS DOS CONDICIONES"] as const;
export const CONDITION_LABELS=["CONDICIÓN 1","CONDICIÓN 2"] as const;

/** Elegir en la ronda abierta. Las rondas anteriores quedan fijas: no se reescribe el historial. */
export function pickOption(state:DilemmaState,option:0|1):DilemmaState{
  const picks=state.picks.slice(0,state.revealed);
  if(picks.length<state.revealed) return state;
  return {revealed:state.revealed,picks:[...picks,option]};
}

/** Solo se abre la siguiente condición cuando el alumno ya eligió en la ronda actual. */
export function canReveal(state:DilemmaState){return state.revealed<2&&state.picks.length===state.revealed+1}

export function revealNext(state:DilemmaState):DilemmaState{
  if(!canReveal(state)) return state;
  return {revealed:(state.revealed+1) as 1|2,picks:state.picks};
}

export function isComplete(state:DilemmaState){return state.revealed===2&&state.picks.length===3}

/** Condiciones vigentes: se acumulan, nunca se reemplazan. */
export function activeConditions(choice:Choice,state:DilemmaState):{label:string;condition:Condition}[]{
  const all=[choice.condition1,choice.condition2];
  return all.slice(0,state.revealed).map((condition,i)=>({label:CONDITION_LABELS[i],condition}));
}

export function movementFor(picks:readonly (0|1)[],round:number):Movement{
  if(round===0) return "INICIAL";
  if(picks[round]===picks[round-1]) return "MANTUVISTE";
  return round===2&&picks[round]===picks[0]?"VOLVISTE":"CAMBIASTE";
}

export function decisionTrail(state:DilemmaState):TrailStep[]{
  return state.picks.map((option,i)=>({round:i as 0|1|2,label:ROUND_LABELS[i],option,movement:movementFor(state.picks,i)}));
}

/** Nombre de la opción para usar dentro de una frase: «Volver a tu lugar favorito». */
export function optionName(label:string){
  const lower=label.toLocaleLowerCase("es");
  return (lower.charAt(0).toLocaleUpperCase("es")+lower.slice(1)).replace(/\bia\b/gi,"IA");
}

/**
 * Cierre según el historial REAL de decisiones. Solo existe cuando hay tres decisiones.
 * Nunca afirma que el alumno mantuvo algo si cambió, ni al revés.
 */
export function closingPrompt(choice:Choice,picks:readonly (0|1)[]):string|null{
  if(picks.length<3) return null;
  const [first,second,final]=picks;
  const name=(option:0|1)=>`«${optionName(choice.options[option])}»`;
  const other=(option:0|1)=>(option===0?1:0) as 0|1;
  if(first===second&&second===final){
    const against=choice.condition1.against===final?1:2;
    return `Elegiste ${name(final)} en las tres decisiones, aunque la condición ${against} complica esa opción. ¿Qué tendría que pasar para que eligieras ${name(other(final))}?`;
  }
  if(first===second) return `Con la condición 1 seguiste con ${name(first)}, pero con la condición 2 pasaste a ${name(final)}. ¿Qué tiene la condición 2 que la volvió decisiva?`;
  if(second===final) return `Pasaste a ${name(second)} con la condición 1 y te quedaste ahí con la condición 2. ¿Qué argumento te hizo cambiar y cuál te hizo quedarte?`;
  return `Volviste a tu primera opción, ${name(final)}, después de pasar por ${name(second)}. Con las dos condiciones a la vista, ¿qué te convenció de volver?`;
}
