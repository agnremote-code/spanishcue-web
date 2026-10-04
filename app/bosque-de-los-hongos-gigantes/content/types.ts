export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type CategoryId = 'sobre-ti' | 'vida-real' | 'elige' | 'opinion' | 'suposiciones' | 'afirmacion' | 'compara' | 'recuerdos' | 'futuro' | 'cambia' | 'contrario' | 'final';
export type PromptType = 'open' | 'choice' | 'statement' | 'scale' | 'ranking' | 'compare' | 'suppose' | 'memory' | 'future' | 'finish' | 'reverse' | 'change-condition' | 'quick' | 'final';
export type Gloss = { es: string; en: string };
export type Prompt = { id: string; level: Level; zone: CategoryId; type: PromptType; question: string; statement?: string; choices?: string[]; followUps: string[]; glosses?: Gloss[]; support?: string[]; condition?: string; teacherNote?: string; visualCue?: string };
