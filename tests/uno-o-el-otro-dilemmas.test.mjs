import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function importTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { choiceBank } = await importTypeScript("../app/modo-play-uno-o-el-otro/choices.ts");
const flow = await importTypeScript("../app/modo-play-uno-o-el-otro/dilemma-flow.ts");
const page = await readFile(new URL("../app/modo-play-uno-o-el-otro/page.tsx", import.meta.url), "utf8");

const normalize = (text) => text.toLocaleLowerCase("es").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zñ0-9 ]/g, "").trim();
const prompts = choiceBank.flatMap((item) => [item.afterCondition1, item.finalPrompt]);
const conditions = choiceBank.flatMap((item) => [item.condition1, item.condition2]);

test("every dilemma has exactly two explicit conditions that pressure different options", () => {
  assert.equal(choiceBank.length, 48);
  for (const item of choiceBank) {
    const name = item.options.join(" / ");
    const keys = Object.keys(item).filter((key) => /^condition\d$/.test(key));
    assert.deepEqual(keys, ["condition1", "condition2"], `${name}: debe tener condition1 y condition2 y nada más`);
    assert.ok(item.condition1.text.length > 15 && item.condition2.text.length > 15, `${name}: condición vacía`);
    assert.notEqual(item.condition1.against, item.condition2.against, `${name}: las dos condiciones castigan la misma opción`);
    assert.notEqual(item.condition1.kind, item.condition2.kind, `${name}: las dos condiciones son del mismo tipo de conflicto`);
    assert.ok(item.afterCondition1 && item.finalPrompt && item.follow, `${name}: falta una consigna`);
    assert.ok(!("changes" in item), `${name}: quedó el formato viejo de cambios sueltos`);
  }
});

test("options and conditions are not repeated across the bank", () => {
  const pairs = choiceBank.map((item) => normalize(item.options.join("|")));
  assert.equal(new Set(pairs).size, pairs.length, "hay elecciones repetidas");
  const labels = choiceBank.flatMap((item) => item.options.map(normalize));
  assert.equal(new Set(labels).size, labels.length, "hay opciones repetidas entre dilemas");
  const texts = conditions.map((condition) => normalize(condition.text));
  assert.equal(new Set(texts).size, texts.length, "hay condiciones repetidas");
});

test("conflict types are genuinely varied and money is not the default", () => {
  const counts = {};
  for (const condition of conditions) counts[condition.kind] = (counts[condition.kind] ?? 0) + 1;
  assert.ok(Object.keys(counts).length >= 18, `solo ${Object.keys(counts).length} tipos de conflicto`);
  assert.ok((counts.DINERO ?? 0) <= 4, `DINERO aparece ${counts.DINERO} veces`);
  for (const [kind, count] of Object.entries(counts)) assert.ok(count <= 9, `${kind} aparece ${count} veces`);
  const moneyWords = conditions.filter((condition) => /\b(precio|cuesta|caro|presupuesto|doble)\b/i.test(condition.text));
  assert.ok(moneyWords.length <= 3, `demasiadas condiciones de dinero disfrazadas: ${moneyWords.map((c) => c.text).join(" | ")}`);
});

test("prompts are varied and cannot be answered with sí/no/cambio/sigo igual", () => {
  const banned = /seguís igual|¿cambiás\?|mantenés tu decisión|¿la mantenés|¿mantenés/i;
  const opener = /(^|[\s:.])(¿(qué|cuál|cuáles|cómo|cuándo|cuánto|cuánta|cuántos|dónde|quién|a quién|en qué|con qué|con cuál|para qué|por qué)(?=[\s?])|(defendé|compará|convencé|explicá|contá|tenés que)(?=\s))/i;
  for (const prompt of [...prompts, ...choiceBank.map((item) => item.follow)]) {
    assert.doesNotMatch(prompt, banned, prompt);
    assert.match(prompt, opener, `consigna de sí/no o sin pedido de argumento: ${prompt}`);
  }
  assert.equal(new Set(prompts.map(normalize)).size, prompts.length, "hay consignas repetidas");
  const starts = {};
  for (const prompt of prompts) {
    const question = prompt.includes(":") ? prompt.slice(prompt.lastIndexOf(":") + 1) : prompt;
    const key = normalize(question).split(" ").slice(0, 3).join(" ");
    starts[key] = (starts[key] ?? 0) + 1;
  }
  for (const [start, count] of Object.entries(starts)) assert.ok(count <= 4, `«${start}…» se repite ${count} veces`);
});

test("the five requested paths produce history-accurate text in every dilemma", () => {
  const paths = { "A→A→A": [0, 0, 0], "A→B→A": [0, 1, 0], "A→B→B": [0, 1, 1], "B→B→B": [1, 1, 1], "B→A→B": [1, 0, 1], "A→A→B": [0, 0, 1] };
  for (const item of choiceBank) {
    for (const [label, picks] of Object.entries(paths)) {
      let state = flow.emptyDilemma;
      assert.equal(flow.canReveal(state), false, "no se puede abrir la condición 1 sin decidir");
      state = flow.pickOption(state, picks[0]);
      assert.deepEqual(flow.activeConditions(item, state), []);
      state = flow.revealNext(state);
      assert.equal(flow.canReveal(state), false, "no se puede abrir la condición 2 sin volver a decidir");
      assert.deepEqual(flow.activeConditions(item, state).map((c) => c.label), ["CONDICIÓN 1"]);
      state = flow.pickOption(state, picks[1]);
      state = flow.revealNext(state);
      state = flow.pickOption(state, picks[2]);
      assert.equal(flow.isComplete(state), true);

      const active = flow.activeConditions(item, state);
      assert.deepEqual(active.map((c) => c.label), ["CONDICIÓN 1", "CONDICIÓN 2"], `${label}: la etapa final debe tener las dos condiciones`);
      assert.equal(active[0].condition.text, item.condition1.text);
      assert.equal(active[1].condition.text, item.condition2.text);
      assert.deepEqual(state.picks, picks, `${label}: se perdió el historial`);

      const trail = flow.decisionTrail(state).map((step) => step.movement);
      assert.equal(trail[0], "INICIAL");
      assert.equal(trail[1], picks[1] === picks[0] ? "MANTUVISTE" : "CAMBIASTE", `${label}`);
      assert.equal(trail[2], picks[2] === picks[1] ? "MANTUVISTE" : picks[2] === picks[0] ? "VOLVISTE" : "CAMBIASTE", `${label}`);

      const closing = flow.closingPrompt(item, state.picks);
      const final = `«${flow.optionName(item.options[picks[2]])}»`;
      assert.ok(closing.includes(final), `${label}: el cierre no nombra la opción final real`);
      if (picks[0] === picks[1] && picks[1] === picks[2]) assert.match(closing, /en las tres decisiones/);
      else assert.doesNotMatch(closing, /en las tres decisiones/, `${label}: dice que nunca cambió`);
      if (picks[0] !== picks[1]) assert.doesNotMatch(closing, /^Con la condición 1 seguiste/, `${label}: dice que mantuvo cuando cambió`);
      if (picks[0] === picks[1] && picks[1] !== picks[2]) assert.match(closing, /seguiste con .* pasaste a/);
      if (picks[0] !== picks[1] && picks[1] === picks[2]) assert.match(closing, /^Pasaste a/);
      if (picks[0] !== picks[1] && picks[2] === picks[0]) assert.match(closing, /^Volviste a tu primera opción/);
    }
  }
});

test("choosing again in an open round replaces only that round, and restart clears everything", () => {
  let state = flow.pickOption(flow.emptyDilemma, 0);
  state = flow.pickOption(state, 1);
  assert.deepEqual(state.picks, [1]);
  state = flow.revealNext(state);
  state = flow.pickOption(state, 0);
  state = flow.pickOption(state, 1);
  assert.deepEqual(state.picks, [1, 1], "la decisión inicial no se puede reescribir desde la ronda 2");
  assert.equal(flow.closingPrompt(choiceBank[0], state.picks), null);
  assert.deepEqual(flow.emptyDilemma, { revealed: 0, picks: [] });
});

test("the dilemma screen uses one consistent condition vocabulary and shows both conditions", () => {
  for (const legacy of ["SEGUNDO CAMBIO", "PRIMER CAMBIO", "Primero decidiste", "Apareció otra condición", "seguís igual", "MANTENER", "CAMBIAR</button>", "CAMBIÓ LA REGLA", "DOS CAMBIOS POSIBLES"]) {
    assert.ok(!page.includes(legacy), `quedó el texto viejo «${legacy}»`);
  }
  assert.match(page, /LAS DOS CONDICIONES SIGUEN VIGENTES/);
  assert.match(page, /activeConditions\(dilemma,state\)/);
  assert.match(page, /REINICIAR DILEMA/);
  assert.match(page, /setDilemma\(emptyDilemma\)/);
});
