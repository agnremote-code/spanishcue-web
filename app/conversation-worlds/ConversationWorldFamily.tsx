'use client';
import { ConversationFamily } from '../conversation-families/ConversationFamily';
import ConversationWorld from './ConversationWorld';
import { eliminations, absurdRules } from './data';
import { eliminationsA2, absurdRulesA2 } from './data-a2';

const closing = {
  machine: {
    A2: ['¿Qué cosa quieres conservar en tu vida? ¿Para qué la usas?', '¿Qué decisión cambiaste hoy? Cuenta una razón.', 'Elige algo de tu casa. ¿Cómo es un día sin eso?'],
    B1: ['¿Qué consecuencia te hizo reconsiderar tu decisión? Explica qué cambió.', '¿Quién ganaría y quién perdería con la eliminación que elegiste?', 'Acuerden una alternativa que resuelva el problema sin eliminar esa cosa.'],
  },
  rules: {
    A2: ['¿Qué regla te gusta más? ¿Por qué?', 'Cuenta cómo es una mañana con esa regla.', '¿Qué plan quieres hacer en ese mundo con un amigo?'],
    B1: ['Compara cómo afectaría una regla a dos personas con vidas diferentes.', 'Cuenta un día en el que la regla empieza bien pero termina causando un problema.', 'Negocien una excepción y expliquen por qué sería justa.'],
  },
};
export default function ConversationWorldFamily({mode,level='B1'}:{mode:'machine'|'rules';level?:'A2'|'B1'}) {
  return <ConversationFamily id={mode === 'machine' ? 'la-maquina-que-elimina-cosas' : 'tu-vida-con-una-regla-absurda'} title={mode === 'machine' ? 'La máquina que elimina cosas del mundo' : 'Tu vida con una regla absurda'} levels={['A2','B1']} defaultLevel={level}>{selected => <ConversationWorld key={selected} mode={mode} level={selected as 'A2'|'B1'} machineRounds={selected === 'A2' ? eliminationsA2 : eliminations} ruleRounds={selected === 'A2' ? absurdRulesA2 : absurdRules} closing={closing[mode][selected as 'A2'|'B1']} />}</ConversationFamily>;
}
