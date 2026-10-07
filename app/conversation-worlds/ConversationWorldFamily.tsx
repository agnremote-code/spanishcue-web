'use client';
import { ConversationFamily } from '../conversation-families/ConversationFamily';
import ConversationWorld from './ConversationWorld';
import { eliminations, absurdRules } from './data';
import { eliminationsA2, absurdRulesA2 } from './data-a2';
import { eliminationsB2, absurdRulesB2, worldGuidesB2, worldClosingB2 } from './data-b2';
import { eliminationsA0, absurdRulesA0, worldGuidesA0, worldClosingA0 } from './data-a0';
import { eliminationsA1, absurdRulesA1, worldGuidesA1, worldClosingA1 } from './data-a1';
import { eliminationsC1, absurdRulesC1, worldGuidesC1, worldClosingC1 } from './data-c1';
import { eliminationsC2, absurdRulesC2, worldGuidesC2, worldClosingC2 } from './data-c2';
import type { WorldLevel, WorldElimination, WorldRule, WorldGuide } from './types';

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
type WorldVariant = { machineRounds: WorldElimination[]; ruleRounds: WorldRule[]; closing: Record<'machine'|'rules', string[]>; guide?: Record<'machine'|'rules', WorldGuide> };
const variants: Record<WorldLevel, WorldVariant> = {
  A0: { machineRounds: eliminationsA0, ruleRounds: absurdRulesA0, closing: worldClosingA0, guide: worldGuidesA0 },
  A1: { machineRounds: eliminationsA1, ruleRounds: absurdRulesA1, closing: worldClosingA1, guide: worldGuidesA1 },
  A2: { machineRounds: eliminationsA2, ruleRounds: absurdRulesA2, closing: {machine: closing.machine.A2, rules: closing.rules.A2} },
  B1: { machineRounds: eliminations, ruleRounds: absurdRules, closing: {machine: closing.machine.B1, rules: closing.rules.B1} },
  B2: { machineRounds: eliminationsB2, ruleRounds: absurdRulesB2, closing: worldClosingB2, guide: worldGuidesB2 },
  C1: { machineRounds: eliminationsC1, ruleRounds: absurdRulesC1, closing: worldClosingC1, guide: worldGuidesC1 },
  C2: { machineRounds: eliminationsC2, ruleRounds: absurdRulesC2, closing: worldClosingC2, guide: worldGuidesC2 },
};
export default function ConversationWorldFamily({mode,level='B1'}:{mode:'machine'|'rules';level?:WorldLevel}) {
  return <ConversationFamily id={mode === 'machine' ? 'la-maquina-que-elimina-cosas' : 'tu-vida-con-una-regla-absurda'} title={mode === 'machine' ? 'La máquina que elimina cosas del mundo' : 'Tu vida con una regla absurda'} levels={['A0','A1','A2','B1','B2','C1','C2']} defaultLevel={level}>{selected => {
    const variant = variants[selected as WorldLevel];
    return <ConversationWorld key={selected} mode={mode} level={selected as WorldLevel} machineRounds={variant.machineRounds} ruleRounds={variant.ruleRounds} closing={variant.closing[mode]} guide={variant.guide?.[mode]} />;
  }}</ConversationFamily>;
}
