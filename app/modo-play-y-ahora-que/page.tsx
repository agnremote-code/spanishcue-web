"use client";

import {ConversationFamily} from "../conversation-families/ConversationFamily";
import {CEFR_LEVELS,type CEFRLevel} from "../conversation-families/types";
import {GameSpeech,gameDemand} from "../conversation-families/game-language";
import {nowContent} from "./levels";
import { useMemo, useState } from "react";
import PlayShell, { SpeakPrompt, type PlayStage } from "../play-mode/PlayShell";
import {
  type Situation,
  type SituationCategory,
} from "./data";

const stages: PlayStage[] = [
  { label: "REACCIÓN RÁPIDA", short: "FÁCIL", minutes: 4, color: "#1eb8c5" },
  {
    label: "LA INFORMACIÓN QUE FALTABA",
    short: "SOCIAL",
    minutes: 6,
    color: "#ff7a45",
  },
  { label: "NUEVO MENSAJE", short: "CHAT", minutes: 6, color: "#7259e8" },
  { label: "ESO PROVOCA...", short: "EFECTO", minutes: 7, color: "#e64980" },
  { label: "OTRA SOLUCIÓN", short: "CONSEJO", minutes: 6, color: "#2eb16e" },
  {
    label: "TÚ DECIDES EL FINAL",
    short: "HISTORIA",
    minutes: 6,
    color: "#f1a100",
  },
  { label: "TU TURNO", short: "BOSS", minutes: 10, color: "#315cff" },
];
const categories = [
  "TODAS",
  "VIDA COTIDIANA",
  "SOCIAL",
  "TRABAJO",
  "VIAJE",
  "DECISIÓN",
] as const;
type Mode = "session" | "free";

function rotateTake<T>(items: readonly T[], start: number, count: number) {
  return Array.from(
    { length: Math.min(count, items.length) },
    (_, offset) => items[(start + offset) % items.length],
  );
}
function SessionTools({
  mode,
  onMode,
  onNew,
}: {
  mode: Mode;
  onMode: (mode: Mode) => void;
  onNew: () => void;
}) {
  return (
    <div className="session-tools">
      <div>
        <b>
          {mode === "session"
            ? "SESIÓN RECOMENDADA · 45 MIN"
            : "MODO LIBRE · BANCO COMPLETO"}
        </b>
        <span>
          {mode === "session"
            ? "12 jugadas equilibradas · no hace falta completar el banco"
            : "Elige cualquier tipo y navega sin límite"}
        </span>
      </div>
      <nav>
        <button
          className={mode === "session" ? "active" : ""}
          onClick={() => onMode("session")}
        >
          SESIÓN RECOMENDADA
        </button>
        <button
          className={mode === "free" ? "active" : ""}
          onClick={() => onMode("free")}
        >
          MODO LIBRE
        </button>
        {mode === "session" && (
          <button className="new-session" onClick={onNew}>
            NUEVA SESIÓN ↻
          </button>
        )}
      </nav>
    </div>
  );
}
function BankNav({
  index,
  onPrevious,
  onNext,
  onShuffle,
  onSame,
  label,
}: {
  index: number;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  onSame?: () => void;
  label: string;
}) {
  return (
    <div className="bank-nav">
      <button onClick={onPrevious}>← ANTERIOR</button>
      <span>
        <small>{label}</small>
        <b>JUGADA {String(index + 1).padStart(2, "0")}</b>
      </span>
      <div>
        <button onClick={onShuffle}>MEZCLAR ↻</button>
        {onSame && <button onClick={onSame}>OTRA DE ESTE TIPO</button>}
        <button onClick={onNext}>SIGUIENTE →</button>
      </div>
    </div>
  );
}
function SituationFilters({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <nav className="situation-filters" aria-label="Tipo de situación">
      {categories.map((item) => (
        <button
          key={item}
          className={value === item ? "active" : ""}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default function YAhoraQue() {return <ConversationFamily id="modo-play-y-ahora-que" title="¿Y ahora qué?" levels={CEFR_LEVELS} defaultLevel="B1">{level=><NowActivity key={level} level={level}/>}</ConversationFamily>;}
function NowActivity({level}:{level:CEFRLevel}) {
  const {adviceCases,bossPrompts,chats,finalQuestions,situations,stories}=useMemo(()=>nowContent(level),[level]);
  const [stage, setStage] = useState(0);
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("session");
  const [sessionSeed, setSessionSeed] = useState(0);
  const [category, setCategory] = useState<string>("TODAS");
  const [reaction, setReaction] = useState<string | null>(null);
  const [cue, setCue] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [effectOpen, setEffectOpen] = useState(false);
  const [adviceStep, setAdviceStep] = useState(0);
  const [storyStep, setStoryStep] = useState(0);
  const [bossMode, setBossMode] = useState<"boss" | "talk">("boss");
  const [finalIndex, setFinalIndex] = useState(0);
  const consequencePool = useMemo(
    () => situations.filter((item) => item.consequence),
    [situations],
  );
  const infoPool = useMemo(
    () => situations.filter((item) => item.missingInfo),
    [situations],
  );
  const recommended = useMemo(() => {
    const pick = (type: SituationCategory) => {
      const pool = situations.filter((item) => item.category === type);
      return pool[sessionSeed % pool.length];
    };
    return {
      reaction: [pick("VIDA COTIDIANA"), pick("VIAJE"), pick("DECISIÓN")],
      social: rotateTake(infoPool, sessionSeed, 2),
      chat: rotateTake(chats, sessionSeed * 2, 2),
      effect: rotateTake(consequencePool, sessionSeed * 2, 2),
      advice: rotateTake(adviceCases, sessionSeed, 1),
      story: rotateTake(stories, sessionSeed, 1),
      boss: rotateTake(bossPrompts, sessionSeed, 1),
    };
  }, [consequencePool, infoPool, sessionSeed,situations,chats,adviceCases,stories,bossPrompts]);
  const reactionPool =
    mode === "session"
      ? recommended.reaction
      : situations.filter(
          (item) => category === "TODAS" || item.category === category,
        );
  const socialPool = mode === "session" ? recommended.social : infoPool;
  const chatPool = mode === "session" ? recommended.chat : chats;
  const effectPool = mode === "session" ? recommended.effect : consequencePool;
  const advicePool = mode === "session" ? recommended.advice : adviceCases;
  const storyPool = mode === "session" ? recommended.story : stories;
  const bossPool = mode === "session" ? recommended.boss : bossPrompts;
  const currentSituation = reactionPool[index % reactionPool.length];
  const currentSocial = socialPool[index % socialPool.length];
  const currentChat = chatPool[index % chatPool.length];
  const currentEffect = effectPool[index % effectPool.length];
  const currentAdvice = advicePool[index % advicePool.length];
  const currentStory = storyPool[index % storyPool.length];
  const currentBoss = bossPool[index % bossPool.length];
  const activeLength = [
    reactionPool.length,
    socialPool.length,
    chatPool.length,
    effectPool.length,
    advicePool.length,
    storyPool.length,
    bossPool.length,
  ][stage];
  const resetCard = () => {
    setReaction(null);
    setCue(null);
    setInfoOpen(false);
    setChatStep(0);
    setEffectOpen(false);
    setAdviceStep(0);
    setStoryStep(0);
    setBossMode("boss");
  };
  const changeStage = (next: number) => {
    setStage(next);
    setIndex(0);
    setCategory("TODAS");
    resetCard();
  };
  const changeMode = (next: Mode) => {
    setMode(next);
    setIndex(0);
    setCategory("TODAS");
    resetCard();
  };
  const move = (amount: number) => {
    setIndex((value) => (value + amount + activeLength) % activeLength);
    resetCard();
  };
  const shuffle = () => {
    if (activeLength < 2) return;
    setIndex((value) => {
      let next = value % activeLength;
      while (next === value % activeLength)
        next = Math.floor(Math.random() * activeLength);
      return next;
    });
    resetCard();
  };
  const nextSameType = (pool: Situation[], current: Situation) => {
    const start = index % pool.length;
    for (let offset = 1; offset <= pool.length; offset++) {
      const candidate = (start + offset) % pool.length;
      if (pool[candidate].category === current.category) {
        setIndex(candidate);
        resetCard();
        return;
      }
    }
    move(1);
  };
  const chooseCategory = (value: string) => {
    setCategory(value);
    setIndex(0);
    resetCard();
  };

  return (
    <PlayShell supportLevel={level}
      lesson={`${level} · MODO PLAY · 02`}
      title="¿Y AHORA QUÉ?"
      stages={stages}
      stage={stage}
      onStageChange={changeStage}
      powerMode="situation"
    >
      <GameSpeech level={level} model={stage===4?"Prueba el cine. / Try the cinema. Quédate en casa. / Stay home.":stage===2?"Hola. Sí, voy. / Hello. Yes, I am coming.":"Yo pido ayuda. / I ask for help. Yo espero. / I wait."}/>
      <SessionTools
        mode={mode}
        onMode={changeMode}
        onNew={() => {
          setSessionSeed((value) => value + 1);
          setIndex(0);
          resetCard();
        }}
      />
      {stage === 0 && (
        <>
          <span className="play-kicker">
            SITUACIÓN → REACCIÓN → DI EXACTAMENTE QUÉ HACES
          </span>
          {mode === "free" && (
            <SituationFilters value={category} onChange={chooseCategory} />
          )}
          <div className="scenario-card">
            <span className="scenario-icon">{currentSituation.icon}</span>
            <small>
              {currentSituation.category} · NIVEL {currentSituation.level}
            </small>
            <h2>{currentSituation.text}</h2>
          </div>
          <SpeakPrompt>¿Qué haces?</SpeakPrompt>
          <div className="reaction-grid">
            {currentSituation.reactions.map((item) => (
              <button
                key={item}
                className={reaction === item ? "active" : ""}
                onClick={() => setReaction(item)}
              >
                {item}
              </button>
            ))}
          </div>
          {reaction && (
            <SpeakPrompt tone="coral">
              Elegiste {reaction.toLowerCase()}. {currentSituation.follow}
            </SpeakPrompt>
          )}
          <BankNav
            index={index % reactionPool.length}
            label={mode === "session" ? "SESIÓN 45'" : "BANCO DE 40"}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
            onShuffle={shuffle}
            onSame={() => nextSameType(reactionPool, currentSituation)}
          />
        </>
      )}
      {stage === 1 && (
        <>
          <span className="play-kicker">
            OPINA PRIMERO · DESPUÉS ABRE EL DATO
          </span>
          <div className="scenario-card">
            <span className="scenario-icon">...</span>
            <small>{currentSocial.category}</small>
            <h2>{currentSocial.text}</h2>
          </div>
          <SpeakPrompt>{gameDemand[level]}</SpeakPrompt>
          <div className="cue-row">
            {currentSocial.cues.map((item) => (
              <button key={item} onClick={() => setCue(item)}>
                {item}
              </button>
            ))}
          </div>
          {cue && (
            <SpeakPrompt tone="coral">
              Usa la idea «{cue.toLowerCase()}» y di exactamente cómo
              actuarías.
            </SpeakPrompt>
          )}
          {!infoOpen && (
            <button className="reveal-button" onClick={() => setInfoOpen(true)}>
              HAY ALGO QUE NO SABÍAS ↓
            </button>
          )}
          {infoOpen && (
            <>
              <div className="twist-card">
                <small>NUEVA INFORMACIÓN</small>
                <b>{currentSocial.missingInfo}</b>
              </div>
              <SpeakPrompt tone="lime">
                ¿Cambia tu opinión? ¿Qué harías ahora y por qué?
              </SpeakPrompt>
            </>
          )}
          <BankNav
            index={index % socialPool.length}
            label={mode === "session" ? "SESIÓN 45'" : "6 DATOS NUEVOS"}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
            onShuffle={shuffle}
          />
        </>
      )}
      {stage === 2 && (
        <>
          <span className="play-kicker">
            UN MENSAJE POR VEZ · RESPONDE ANTES DE ABRIR EL SIGUIENTE
          </span>
          <div className="chat-window">
            <header>
              <span>{currentChat.name.slice(0, 1)}</span>
              <div>
                <b>{currentChat.name}</b>
                <small>{currentChat.role}</small>
              </div>
              <i>EN LÍNEA</i>
            </header>
            <div className="chat-stack">
              {currentChat.messages.slice(0, chatStep + 1).map((message) => (
                <div className="chat-bubble" key={message}>
                  {message}
                </div>
              ))}
            </div>
          </div>
          <SpeakPrompt>{currentChat.prompts[chatStep]}</SpeakPrompt>
          {chatStep < 2 && (
            <button
              className="reveal-button"
              onClick={() => setChatStep((value) => value + 1)}
            >
              NUEVO MENSAJE ↓
            </button>
          )}
          {chatStep === 2 && (
            <SpeakPrompt tone="coral">
              {level==='A0'?'Di dos frases del chat. / Say two phrases from the chat.':'Responde al mensaje completo en voz alta.'}
            </SpeakPrompt>
          )}
          <BankNav
            index={index % chatPool.length}
            label={mode === "session" ? "2 CHATS EN ESTA SESIÓN" : "10 CHATS"}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
            onShuffle={shuffle}
          />
        </>
      )}
      {stage === 3 && (
        <>
          <span className="play-kicker">
            DECIDE · JUSTIFICA · DESCUBRE EL RESULTADO
          </span>
          <div className="scenario-card">
            <span className="scenario-icon">→</span>
            <small>{currentEffect.category}</small>
            <h2>{currentEffect.text}</h2>
          </div>
          <div className="reaction-grid">
            {currentEffect.reactions.map((item) => (
              <button
                key={item}
                className={reaction === item ? "active" : ""}
                onClick={() => setReaction(item)}
              >
                {item}
              </button>
            ))}
          </div>
          {reaction && (
            <SpeakPrompt>
              {level==='A0'?`${reaction}. / Say your chosen phrase aloud.`:`¿Por qué elegiste ${reaction.toLowerCase()}? Di qué esperas que pase.`}
            </SpeakPrompt>
          )}
          {reaction && !effectOpen && (
            <button
              className="reveal-button"
              onClick={() => setEffectOpen(true)}
            >
              VER CONSECUENCIA ↓
            </button>
          )}
          {effectOpen && (
            <>
              <div className="twist-card">
                <small>RESULTADO</small>
                <b>{currentEffect.consequence}</b>
              </div>
              <SpeakPrompt tone="coral">
                {gameDemand[level]}
              </SpeakPrompt>
            </>
          )}
          <BankNav
            index={index % effectPool.length}
            label={mode === "session" ? "SESIÓN 45'" : "18 CONSECUENCIAS"}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
            onShuffle={shuffle}
            onSame={() => nextSameType(effectPool, currentEffect)}
          />
        </>
      )}
      {stage === 4 && (
        <>
          <span className="play-kicker">
            CONSEJO → OBJECIÓN → PLAN B → PLAN C
          </span>
          <div className="person-card">
            <span>{currentAdvice.name.slice(0, 1)}</span>
            <div>
              <small>{currentAdvice.topic}</small>
              <b>{currentAdvice.name}</b>
            </div>
          </div>
          <div className="scenario-card compact-scenario">
            <h2>«{currentAdvice.problem}»</h2>
          </div>
          <SpeakPrompt>
            {gameDemand[level]}
          </SpeakPrompt>
          {adviceStep === 0 && (
            <button className="reveal-button" onClick={() => setAdviceStep(1)}>
              ESCUCHAR SU RESPUESTA ↓
            </button>
          )}
          {adviceStep >= 1 && (
            <div className="twist-card">
              <small>
                {adviceStep === 1
                  ? "PERO..."
                  : adviceStep === 2
                    ? "NO QUIERE TU CONSEJO · PLAN B"
                    : "TAMPOCO FUNCIONA · PLAN C"}
              </small>
              <b>
                {adviceStep === 1
                  ? currentAdvice.objection
                  : adviceStep === 2
                    ? currentAdvice.refusal
                    : currentAdvice.lastRefusal}
              </b>
            </div>
          )}
          {adviceStep === 1 && (
            <SpeakPrompt tone="coral">
              {gameDemand[level]}
            </SpeakPrompt>
          )}
          {adviceStep === 1 && currentAdvice.refusal && (
            <button className="reveal-button" onClick={() => setAdviceStep(2)}>
              NO QUIERE HACER ESO ↓
            </button>
          )}
          {adviceStep === 2 && (
            <>
              <SpeakPrompt tone="lime">
                {gameDemand[level]}
              </SpeakPrompt>
              <button
                className="reveal-button"
                onClick={() => setAdviceStep(3)}
              >
                TAMPOCO QUIERE ESO ↓
              </button>
            </>
          )}
          {adviceStep === 3 && (
            <SpeakPrompt tone="coral">
              {gameDemand[level]}
            </SpeakPrompt>
          )}
          <BankNav
            index={index % advicePool.length}
            label={mode === "session" ? "SESIÓN 45'" : "8 PERSONAS"}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
            onShuffle={shuffle}
          />
        </>
      )}
      {stage === 5 && (
        <>
          <span className="play-kicker">
            TRES PASOS · EL FINAL CAMBIA CON TU DECISIÓN
          </span>
          <div className="story-progress">
            {currentStory.steps.map((_, step) => (
              <span key={step} className={step <= storyStep ? "active" : ""}>
                {step + 1}
              </span>
            ))}
          </div>
          <div className="scenario-card">
            <span className="scenario-icon">{storyStep + 1}</span>
            <small>{currentStory.title}</small>
            <h2>{currentStory.steps[storyStep]}</h2>
          </div>
          <SpeakPrompt>
            {currentStory.questions[storyStep]} {level==='A0'?'Di el modelo. / Say the model.':'Explica qué haces exactamente.'}
          </SpeakPrompt>
          {storyStep < 2 && (
            <button
              className="reveal-button"
              onClick={() => setStoryStep((value) => value + 1)}
            >
              SIGUIENTE PASO ↓
            </button>
          )}
          {storyStep === 2 && (
            <SpeakPrompt tone="lime">
              {gameDemand[level]}
            </SpeakPrompt>
          )}
          <BankNav
            index={index % storyPool.length}
            label={mode === "session" ? "HISTORIA DE LA SESIÓN" : "5 HISTORIAS"}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
            onShuffle={shuffle}
          />
        </>
      )}
      {stage === 6 && (
        <>
          {bossMode === "boss" ? (
            <>
              <span className="play-kicker">
                BOSS ROUND · SIN BOTONES DE RESPUESTA
              </span>
              <h2 className="boss-word">¿Y AHORA QUÉ?</h2>
              <div className="scenario-card">
                <span className="scenario-icon">{level}</span>
                <h2>{currentBoss}</h2>
              </div>
              <SpeakPrompt>
                {gameDemand[level]}
              </SpeakPrompt>
              <BankNav
                index={index % bossPool.length}
                label={
                  mode === "session" ? "BOSS DE LA SESIÓN" : "8 BOSS PROMPTS"
                }
                onPrevious={() => move(-1)}
                onNext={() => move(1)}
                onShuffle={shuffle}
              />
              <button
                className="primary-play"
                onClick={() => setBossMode("talk")}
              >
                CONVERSACIÓN ABIERTA →
              </button>
            </>
          ) : (
            <>
              <span className="play-kicker">
                10 MIN · VIDA REAL · SIN EXAMEN
              </span>
              <h2 className="play-question">
                {finalQuestions[finalIndex].question}
              </h2>
              <SpeakPrompt>
                {finalQuestions[finalIndex].follow} {level==='A0'?'Pregunta: ¿Y tú? / Ask: And you?':'Escucha al profesor y haz una pregunta relacionada.'}
              </SpeakPrompt>
              <BankNav
                index={finalIndex}
                label="CONVERSACIÓN FINAL · 12 PREGUNTAS"
                onPrevious={() =>
                  setFinalIndex(
                    (value) =>
                      (value - 1 + finalQuestions.length) %
                      finalQuestions.length,
                  )
                }
                onNext={() =>
                  setFinalIndex((value) => (value + 1) % finalQuestions.length)
                }
                onShuffle={() =>
                  setFinalIndex((value) => {
                    let next = value;
                    while (next === value)
                      next = Math.floor(Math.random() * finalQuestions.length);
                    return next;
                  })
                }
              />
              <button
                className="primary-play"
                onClick={() => setBossMode("boss")}
              >
                ← VOLVER AL BOSS ROUND
              </button>
            </>
          )}
        </>
      )}
    </PlayShell>
  );
}
