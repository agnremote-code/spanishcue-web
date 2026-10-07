import { catalogLessons } from '../conversation-families/catalog';
import { lessonCards } from './lessons';

export const GRAMMAR_HUB_PATH = '/spanish-grammar-lessons';
export type GrammarCode = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type GrammarActivity = {
  name: string; minutes: number; outcome: string; steps: string[];
  prompts: string[]; model: string; correction: string; adaptation: string;
};
export type GrammarLevel = {
  code: Exclude<GrammarCode, 'C2'>; slug: string; path: string;
  title: string; description: string; focus: string; intro: string;
  structures: string[]; outcomes: string[]; sequence: string[];
  activities: GrammarActivity[]; pitfalls: string[]; crossSkill: string;
  topicSlugs: string[];
};

/** The current classroom has ONE core level. Legacy reference-bank ranges do not change it. */
export function grammarLessonCards(ids: readonly number[]) {
  return lessonCards(ids).map(card => ({...card, level: catalogLessons.find(lesson => lesson.id === card.id)?.level ?? card.level}));
}
export function grammarLessonsAtLevel(code: GrammarCode) {
  return grammarLessonCards(catalogLessons.filter(l => l.category === 'Gramática' && l.level === code)
    .sort((a, b) => (a.curriculumOrder ?? a.id) - (b.curriculumOrder ?? b.id)).map(l => l.id));
}
export const grammarInventory = catalogLessons.filter(l => l.category === 'Gramática');

const entries: Omit<GrammarLevel, 'slug' | 'path'>[] = [
  {
    code: 'A1', title: 'A1 Spanish Grammar Activities for Teachers | SPANISHCUE',
    description: 'Teach A1 Spanish grammar through objects, descriptions and routines. Use free classroom activities, sentence frames and ready-to-teach beginner lessons.',
    focus: 'Build a sentence that does something.',
    intro: 'A beginner needs a small set of words and a reason to combine them. Start with objects learners can see, give a usable sentence frame, then change one detail so the learner must make a new choice.',
    structures: ['Nouns, articles and adjective agreement', 'Ser, estar and hay in descriptions', 'Present-tense routines and basic questions', 'Possessives, demonstratives and simple connectors'],
    outcomes: ['Request the objects needed for a small office.', 'Describe a room so another person can find something.', 'Ask and answer questions about a routine.'],
    sequence: ['Name three objects and check what each noun refers to.', 'Model one complete message, then change its number or location.', 'Ask for missing information with the model still visible.', 'Hide one support and repeat the same communicative task.'],
    activities: [
      { name: 'Pack the shared office', minutes: 10, outcome: 'Agree on a useful list, using nouns, quantities and agreement.', steps: ['Offer six familiar objects: mesa, silla, libro, carpeta, ordenador, lámpara.', 'The learner chooses what two people need. Ask for quantities and one distinguishing adjective.', 'Add a third person. The learner updates the order and explains one change.'], prompts: ['Necesitamos dos sillas pequeñas y una mesa grande.', '¿Cuántas carpetas necesitas?'], model: 'Necesitamos tres carpetas rojas. La mesa es grande.', correction: 'Dos silla roja → dos sillas rojas. Both the noun and adjective agree with dos; ask the learner to change the quantity again.', adaptation: 'In a one-to-one lesson, be the supplier. In a group, give pairs different quantities to negotiate.' },
      { name: 'Find the missing object', minutes: 8, outcome: 'Distinguish existence, identity and location in a useful exchange.', steps: ['Draw a room with four objects; let the learner add one.', 'Ask what is in the room before asking where a named object is.', 'Move an object and ask the learner to correct your description.'], prompts: ['Hay una lámpara. La lámpara está junto a la mesa.', '¿La silla es cómoda? ¿Dónde está?'], model: 'Es una silla pequeña. Está al lado de la puerta.', correction: 'La silla hay aquí → la silla está aquí. Hay introduces existence; estar locates the specific object already identified.', adaptation: 'Share a simple drawing online or use objects in the classroom. Keep the location phrases visible.' },
    ],
    pitfalls: ['Do not introduce every use of ser and estar at once; keep identity, state and location in context.', 'Teach agreement within a whole phrase, so learners can hear what changes.', 'The Argentine voseo lesson is an explicitly Argentine option; select the general present lesson for tú practice.'],
    crossSkill: 'The free nouns classroom links an office reading, a recorded material order, a spoken shopping list and a short note. Let students listen for quantities before checking the transcript.',
    topicSlugs: ['ser-estar'],
  },
  {
    code: 'A2', title: 'A2 Spanish Grammar Activities for Teachers | SPANISHCUE',
    description: 'Plan A2 Spanish grammar lessons on past events, habits, instructions and duration, with speaking tasks, common errors and real classroom resources.',
    focus: 'Connect actions across time.',
    intro: 'At A2, keep the situation familiar while changing the time frame. Teach completed events and past descriptions separately before expecting a learner to weave them into an extended narrative.',
    structures: ['Pretérito perfecto, indefinido and imperfecto', 'Future predictions and affirmative/negative instructions', 'Desde, hace and duration', 'Basic time clauses and si + present'],
    outcomes: ['Put a finished outing into a clear sequence.', 'Describe a familiar place and a past routine.', 'Give a practical instruction and explain how long something has been true.'],
    sequence: ['Check the present forms needed for the situation.', 'Use a short model with one clear time frame.', 'Let learners reconstruct the order or describe the background.', 'Change a detail, then use a brief written message as an exit task.'],
    activities: [
      { name: 'Rebuild a day out', minutes: 12, outcome: 'Sequence completed events so a partner can reconstruct the outing.', steps: ['Write five infinitives: salir, llegar, visitar, comer, volver.', 'The learner invents a finished day and gives the sequence without showing notes.', 'Put one event in the wrong place; the learner repairs your timeline.'], prompts: ['Primero salí de casa. Después llegué al museo.', '¿Qué hiciste antes de volver?'], model: 'Visité el museo, comí con una amiga y volví a las seis.', correction: 'Ayer visito el museo → ayer visité el museo in this finished-event report. Ask for the final event without the written model.', adaptation: 'For a group, partners draw each other’s timelines. Online, use a shared chat or simple numbered list.' },
      { name: 'A place before and now', minutes: 10, outcome: 'Describe past habits and states without forcing a full tense contrast.', steps: ['Choose an office, café or library both speakers can imagine.', 'Ask for its old layout, opening hours and one regular activity.', 'Switch to the present and identify what has changed.'], prompts: ['Antes había dos mesas. La gente estudiaba por la tarde.', '¿Cómo era? ¿Qué hacías allí normalmente?'], model: 'La biblioteca era pequeña y abría a las nueve.', correction: 'Keep era for the description in this task. Do not claim that all long actions require imperfect: a speaker can also present a long event as bounded.', adaptation: 'Allow an invented place if the learner does not want to share personal memories.' },
    ],
    pitfalls: ['Words such as ayer are clues, not automatic tense rules.', 'Perfecto and indefinido vary across regions; teach a coherent model while recognizing alternatives.', 'Desde 2022 names a starting point; desde hace cuatro años expresses elapsed duration.'],
    crossSkill: 'Pair the indefinido classroom’s completed visit with the imperfecto classroom’s former library. Each has its own reading, audio, speaking task and writing outcome; combine them only after the separate meanings are secure.',
    topicSlugs: ['past', 'ser-estar'],
  },
  {
    code: 'B1', title: 'B1 Spanish Grammar Activities for Teachers | SPANISHCUE',
    description: 'Teach B1 Spanish grammar through stories, recommendations and practical decisions. Find subjunctive, past-tense and por/para tasks with real lesson links.',
    focus: 'Explain what happened and what you want to happen.',
    intro: 'B1 grammar gives a speaker more control over a story or a proposal. Build a task with a decision to reach: a workshop to plan, an experience to explain or a delivery to reorganize.',
    structures: ['Narrative past contrast and pluscuamperfecto', 'Present and perfect subjunctive in supported contexts', 'Conditional advice and practical hypotheses', 'Por/para, relative clauses and verbal periphrases'],
    outcomes: ['Tell an experience with background and a present-day consequence.', 'Negotiate recommendations with a change of subject.', 'Explain a cause, purpose, recipient and deadline clearly.'],
    sequence: ['Establish the situation and what the people need to decide.', 'Contrast two messages that make different commitments.', 'Keep a small bank of frames visible during negotiation.', 'Ask for a final recommendation that explains the choice.'],
    activities: [
      { name: 'Design a useful workshop', minutes: 12, outcome: 'Negotiate expectations using both facts and recommendations.', steps: ['Choose a workshop for four adults with different goals.', 'State two facts with indicative, then propose three conditions for success.', 'Reject one proposal and negotiate an alternative with a reason.'], prompts: ['El taller dura dos horas. Quiero que todos participen.', 'Es importante que haya tiempo para practicar.'], model: 'Quiero practicar y quiero que el grupo practique conmigo.', correction: 'Quiero que practicar → quiero practicar for the same subject; quiero que practiques when another person should do it.', adaptation: 'The teacher can represent two participants online. In a group, assign one priority to each person.' },
      { name: 'The delivery has changed', minutes: 10, outcome: 'Make a plan actionable by separating reason, purpose and route.', steps: ['Give the learner a parcel, a recipient and a deadline.', 'Close one street or change the meeting time.', 'Ask for a new plan containing the reason, the route and the intended result.'], prompts: ['Cambiamos el plan por la lluvia.', 'Pasamos por el centro para recoger la caja.'], model: 'La caja es para Marta. La necesitamos para el viernes.', correction: 'Ask what por Marta means in context: on her behalf or because of her. Para Marta identifies the intended recipient here; do not mark both as interchangeable.', adaptation: 'Use a real city only if both speakers know it; an invented three-street map is enough.' },
    ],
    pitfalls: ['Subjunctive does not mean unreal: me alegra que estés aquí can refer to a fact.', 'Keep B1 present-subjunctive tasks separate from the B2 past perspective.', 'In a narrative, correct the intended time relation before interrupting for every ending.'],
    crossSkill: 'The B1 por/para lesson follows a shared delivery through a reading, a recorded change of plan, negotiation and an actionable message. The past classroom adds a reading, an audio account and a written retelling.',
    topicSlugs: ['subjunctive', 'past', 'por-para'],
  },
  {
    code: 'B2', title: 'B2 Spanish Grammar Activities for Teachers | SPANISHCUE',
    description: 'Build B2 Spanish grammar lessons around reported speech, hypotheses, concession and formal notices, with teacher notes, speaking tasks and lesson previews.',
    focus: 'Keep the intention when the perspective changes.',
    intro: 'At B2, correct form is only part of the task. Learners need to preserve who said what, when a request applies and how strongly they want to commit to a claim.',
    structures: ['Imperfect and pluperfect subjunctive', 'Past and mixed hypothetical outcomes', 'Reported speech and prepositional relatives', 'Passive/impersonal notices, concession and consequences'],
    outcomes: ['Relay a request with its intended time reference intact.', 'Negotiate a hypothetical alternative and its consequences.', 'Write a notice that makes responsibility clear.'],
    sequence: ['Give a message with a speaker, listener and time anchor.', 'Ask what changes when another person relays it later.', 'Compare two acceptable versions and their effects.', 'Finish with a decision or notice for a real audience.'],
    activities: [
      { name: 'Relay the changed appointment', minutes: 12, outcome: 'Transmit information without losing the original request.', steps: ['Give a short message: the speaker asks a colleague to come tomorrow at nine.', 'Move the reporting moment forward by two days.', 'Ask the learner to relay the original request and then clarify what is still relevant now.'], prompts: ['El lunes dijo: «Ven mañana a las nueve».', 'El miércoles explicas: «Pidió que fuera el martes a las nueve».'], model: 'Pidió que fuera el martes; ahora tenemos que acordar otra fecha.', correction: 'Do not shift every tense mechanically. Establish whether the original event is past, still valid or future relative to the current speaker.', adaptation: 'Exchange voice-style messages live; no personal messages or real appointments are needed.' },
      { name: 'Negotiate a better proposal', minutes: 12, outcome: 'Use a hypothesis and concession to defend a revised plan.', steps: ['Offer two event plans, each with a practical problem.', 'The learner proposes a hypothetical change using si + imperfect subjunctive.', 'Challenge one benefit; the learner concedes it while preserving a reason for the proposal.'], prompts: ['Si tuviéramos más tiempo, incluiríamos una práctica.', 'Aunque el plan cuesta más, permite que participe todo el grupo.'], model: 'Aunque fuera más caro, lo elegiría si resolviera el problema principal.', correction: 'Si tendríamos más tiempo → si tuviéramos más tiempo for this hypothetical condition. Separate the condition from the conditional result.', adaptation: 'Ask groups to reach a joint decision; in tutoring, introduce a new constraint after the first agreement.' },
    ],
    pitfalls: ['Aunque can take different moods depending on how the information is presented; do not teach one mandatory answer without context.', 'An impersonal construction and a passive do not always communicate agency in the same way.', 'Keep past counterfactuals distinct from present hypotheses.'],
    crossSkill: 'Use the reported-speech classroom for a changed appointment or the passive/impersonal classroom for public notices. Both pair contextual reading and audio with a spoken decision and a written message.',
    topicSlugs: ['subjunctive'],
  },
  {
    code: 'C1', title: 'C1 Spanish Grammar Activities for Teachers | SPANISHCUE',
    description: 'Teach C1 Spanish grammar through ambiguity, aspect and perspective. Use editing tasks, nuanced speaking prompts and real lessons for advanced adults.',
    focus: 'Control the interpretation, not just the form.',
    intro: 'Advanced work is about the listener’s interpretation. Ask learners to defend a grammatical choice, consider a plausible alternative and reformulate without changing the message.',
    structures: ['Ambiguous reference, ellipsis and nominal groups', 'Aspect with ir/venir + gerundio and accumulated results', 'Subjunctive and temporal perspective', 'Recognition and modern paraphrase of historical verb forms'],
    outcomes: ['Identify two plausible readings and remove unwanted ambiguity.', 'Separate a process in progress from an accumulated result.', 'Explain what a reformulation preserves or loses.'],
    sequence: ['Start with a short message whose interpretation matters.', 'Ask for evidence for each plausible reading.', 'Compare a precise reformulation with a concise one.', 'Choose the version that fits the audience and justify it.'],
    activities: [
      { name: 'The editor needs a decision', minutes: 15, outcome: 'Resolve ambiguity while preserving the intended meaning.', steps: ['Write: «La crítica de la directora sorprendió al equipo».', 'Ask who might have made the criticism and who might have received it.', 'Choose a context, rewrite the sentence and defend what became clearer.'], prompts: ['¿La directora hizo la crítica o la recibió?', 'Reformula la frase para que solo quede tu lectura.'], model: 'La crítica que hizo la directora sorprendió al equipo.', correction: 'Do not accept a far-fetched interpretation simply because it is grammatically conceivable. Ask whether the surrounding context supports it.', adaptation: 'Pairs defend different readings before agreeing on an edited version. In tutoring, the teacher plays the skeptical editor.' },
      { name: 'Report progress precisely', minutes: 12, outcome: 'Distinguish gradual change, current state and completed output.', steps: ['Give a project with ten files: six reviewed, two still changing and two untouched.', 'Ask for a progress update for a colleague, then for a project sponsor.', 'Challenge an overstatement of completion and ask for a more exact version.'], prompts: ['Vamos revisando los archivos.', 'Llevamos revisados seis; los otros cuatro no están listos.'], model: 'Venimos revisando el material desde junio y tenemos preparadas seis fichas.', correction: 'Tenemos preparado seis fichas → tenemos preparadas seis fichas. This resultative participle agrees with fichas; contrast it with invariant hemos preparado.', adaptation: 'Change the audience to test register, keeping the numerical facts identical.' },
    ],
    pitfalls: ['Do not treat advanced grammar as a list of rare tenses to produce.', 'Recognizing a historical form and using it in contemporary conversation are different objectives.', 'A concise sentence can remain appropriately ambiguous; ask what the audience actually needs to know.'],
    crossSkill: 'The ambiguity classroom includes a review to edit and an audio explanation of the writer’s intention. The aspect classroom connects an archive reading, a spoken progress update and a written report.',
    topicSlugs: ['subjunctive'],
  },
];
export const grammarLevels: GrammarLevel[] = entries.map(level => ({...level, slug: level.code.toLowerCase(), path: `${GRAMMAR_HUB_PATH}/${level.code.toLowerCase()}`}));
export const grammarLevelBySlug = new Map(grammarLevels.map(level => [level.slug, level]));
