export type Level = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type CategoryId = 'sobre-ti' | 'vida-real' | 'elige' | 'opinion' | 'suposiciones' | 'afirmacion' | 'compara' | 'recuerdos' | 'futuro' | 'cambia' | 'contrario' | 'final';
export type PromptType = 'open' | 'choice' | 'statement' | 'scale' | 'ranking' | 'compare' | 'suppose' | 'memory' | 'future' | 'finish' | 'reverse' | 'change-condition' | 'quick' | 'final';
import type {ConversationGloss} from '../../conversation-vocabulary/types';
export type Gloss = ConversationGloss;
export type Prompt = { id: string; level: Level; zone: CategoryId; type: PromptType; question: string; statement?: string; choices?: string[]; followUps: string[]; glosses?: Gloss[]; support?: string[]; condition?: string; teacherNote?: string; visualCue?: string;
 /** Expedition stations: the landmark sets the scene, choices react, an open question follows. */
 station?: boolean; scene?: string; reactions?: string[]; open?: string };
