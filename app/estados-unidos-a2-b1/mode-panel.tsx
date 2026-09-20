"use client";

import { useMemo, useState } from "react";
import { dcBonus, states, usaModes, type USState } from "./state-data";

type Mode = (typeof usaModes)[number];
type IdealCategory = "live" | "work" | "vacation" | "eat" | "retire";
const idealCategories: Array<[IdealCategory, string]> = [["live", "LIVE"], ["work", "WORK"], ["vacation", "VACATION"], ["eat", "EAT"], ["retire", "RETIRE"]];

export function USModeDeck({ active, onOpen, onRandom }: { active: USState; onOpen: (state: USState) => void; onRandom: () => void }) {
  const [mode, setMode] = useState<Mode>("EXPLORE");
  const [ideal, setIdeal] = useState<Partial<Record<IdealCategory, string>>>({});
  const options = useMemo(() => {
    const index = states.findIndex((state) => state.code === active.code);
    return [active, states[(index + 17) % states.length], states[(index + 33) % states.length]];
  }, [active]);
  const chooseMode = (next: Mode) => {
    setMode(next);
    if (next === "RANDOM") onRandom();
  };
  return <section className="us50-mode-deck" aria-label="United States conversation modes">
    <nav>{usaModes.map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => chooseMode(item)}>{item}</button>)}</nav>
    {mode === "EXPLORE" && <div className="us50-mode-copy"><b>Choose any of the 50 states.</b><span>Every state opens five zero-knowledge A2 prompts and one optional B1 extension.</span></div>}
    {mode === "THIS OR THAT" && <div className="us50-mode-challenge"><span>THIS OR THAT</span><h3>{options[0].name} or {options[1].name}?</h3><p>Choose first. Then compare daily routine, weather, distance and free time.</p><div>{options.slice(0, 2).map((state) => <button key={state.code} onClick={() => onOpen(state)}>{state.name}<small>{state.hook.es}</small></button>)}</div></div>}
    {mode === "WHERE WOULD YOU LIVE?" && <div className="us50-mode-challenge"><span>ONE YEAR · THREE OPTIONS</span><h3>Where would you live?</h3><p>Think about work, transport, housing, climate and the kind of weekend you want.</p><div>{options.map((state) => <button key={state.code} onClick={() => onOpen(state)}>{state.name}<small>{state.hook.es}</small></button>)}</div></div>}
    {mode === "YOUR COUNTRY VS USA" && <div className="us50-mode-challenge"><span>PERSONAL COMPARISON</span><h3>{active.name} vs. your country</h3><p>Where is it easier to move around, meet people, rest and plan a weekend? Use your own life as evidence.</p><button onClick={() => onOpen(active)}>OPEN {active.name.toUpperCase()} →</button></div>}
    {mode === "MY UNITED STATES" && <div className="us50-ideal"><span>FINAL · MY UNITED STATES</span><h3>Build a five-state personal map.</h3><div>{idealCategories.map(([key, label]) => <label key={key}><b>{label}</b><select value={ideal[key] || ""} onChange={(event) => setIdeal({ ...ideal, [key]: event.target.value })}><option value="">Choose a state</option>{states.map((state) => <option key={state.code} value={state.code}>{state.name}</option>)}</select></label>)}</div><p>{Object.keys(ideal).length === 5 ? "Your map is complete. Defend the five choices and explain which one was hardest." : "Choose one state for each part of your ideal United States."}</p></div>}
    <aside className="us50-dc-bonus"><span>{dcBonus.label.es}</span><b>{dcBonus.name}</b><p>{dcBonus.hook.es}</p><small>{dcBonus.questions[0].es}</small></aside>
  </section>;
}
