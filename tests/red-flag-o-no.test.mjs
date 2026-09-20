import assert from "node:assert/strict";
import test from "node:test";

import * as engine from "../app/red-flag-o-no/engine.mjs";

const {
  getLevelConfig,
  getRoundForIndex,
  keyAction,
  moveIndex,
  pickRandomIndex,
} = engine;

test("each Red Flag o No level supplies a complete 45-minute conversation deck", () => {
  const expectedFirst = {
    A2: "Tu pareja tarda mucho en responder los mensajes casi todos los días.",
    B1: "Tu pareja es muy cariñosa en persona, pero en público actúa como si no te conociera.",
    B2: "Tu pareja no te presenta a nadie importante de su vida después de varios meses, pero dice que es una persona muy privada.",
  };

  for (const level of ["A2", "B1", "B2"]) {
    const config = getLevelConfig(level);
    assert.equal(config.level, level);
    assert.equal(config.situations.length, 18);
    assert.equal(config.followUps.length, 8);
    assert.equal(config.situations[0], expectedFirst[level]);
    assert.equal(new Set(config.situations).size, 18);
  }
});

test("the lesson progresses through six quick, six ambiguous and six deep situations", () => {
  assert.deepEqual(
    [0, 5, 6, 11, 12, 17].map(getRoundForIndex),
    ["quick", "quick", "ambiguous", "ambiguous", "deep", "deep"],
  );
});

test("next and previous navigation wrap without leaving the deck", () => {
  assert.equal(moveIndex(17, 18, 1), 0);
  assert.equal(moveIndex(0, 18, -1), 17);
  assert.equal(moveIndex(7, 18, 1), 8);
});

test("random navigation always changes the situation when alternatives exist", () => {
  assert.equal(pickRandomIndex(3, 18, () => 3 / 18), 4);
  assert.equal(pickRandomIndex(0, 1, () => 0), 0);
});

test("keyboard shortcuts map to the visible lesson actions", () => {
  assert.equal(keyAction("g"), "green");
  assert.equal(keyAction("r"), "red");
  assert.equal(keyAction(" "), "reveal");
  assert.equal(keyAction("ArrowLeft"), "previous");
  assert.equal(keyAction("ArrowRight"), "next");
  assert.equal(keyAction("s"), "random");
  assert.equal(keyAction("Escape"), null);
});

test("global shortcuts never override standard keyboard behavior on interactive controls", () => {
  for (const tagName of ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"]) {
    assert.equal(engine.shouldHandleShortcut({ tagName, isContentEditable: false }), false);
  }
  assert.equal(engine.shouldHandleShortcut({ tagName: "DIV", isContentEditable: true }), false);
  assert.equal(
    engine.shouldHandleShortcut({
      tagName: "SPAN",
      isContentEditable: false,
      closest: () => ({ tagName: "BUTTON" }),
    }),
    false,
  );
  assert.equal(engine.shouldHandleShortcut({ tagName: "MAIN", isContentEditable: false }), true);
});

test("small editorial accent text meets WCAG AA contrast on white", () => {
  const luminance = (hex) => {
    const channels = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16) / 255)
      .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  for (const level of ["A2", "B1", "B2"]) {
    const foreground = luminance(getLevelConfig(level).accentText);
    assert.ok(1.05 / (foreground + 0.05) >= 4.5, `${level} accent text must meet 4.5:1`);
  }
});

test("unknown levels are rejected instead of silently using the wrong lesson", () => {
  assert.throws(() => getLevelConfig("C1"), /Nivel no disponible/);
});
