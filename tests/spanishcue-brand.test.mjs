import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = (path) => readFile(path, "utf8");

test("the public brand surface uses the SPANISHCUE positioning", async () => {
  const [layout, library, brand, messages] = await Promise.all([
    source("app/layout.tsx"),
    source("app/Library.tsx"),
    source("app/SpanishCueBrand.tsx"),
    source("app/i18n/messages.ts"),
  ]);
  assert.match(messages, /SPANISHCUE · Choose\. Open\. Teach\./);
  assert.match(library, /SpanishCueHero/);
  assert.match(messages, /Stop building every lesson from scratch/);
  assert.match(brand, /CHOOSE\. OPEN\. TEACH\./);
  assert.match(brand, /spanishcue-hero-online\.webp/);
  assert.match(brand, /spanishcue-global-stage\.webp/);
  assert.match(layout, /LocaleProvider/);
  assert.match(library, /LanguageSwitcher/);
  assert.doesNotMatch(library, /SORPRÉNDEME|Sorpréndeme/);
});

test("the international stage includes all 21 Spanish-speaking cultures", async () => {
  const [brand, messages] = await Promise.all([
    source("app/SpanishCueBrand.tsx"),
    source("app/i18n/messages.ts"),
  ]);
  const countryEntries = brand.match(/^  \["[^\n]+\],$/gm) ?? [];
  assert.equal(countryEntries.length, 21);
  for (const country of ["México", "España", "Puerto Rico", "Guinea Ecuatorial"]) {
    assert.match(messages, new RegExp(country));
  }
});

test("the official young man in black replaces legacy mascot assets on product surfaces", async () => {
  const [library, brand, access, success] = await Promise.all([
    source("app/Library.tsx"),
    source("app/SpanishCueBrand.tsx"),
    source("app/acceso/page.tsx"),
    source("app/pro/success/page.tsx"),
  ]);
  for (const surface of [library, brand, access, success]) {
    assert.match(surface, /\/brand\/mascot\//);
  }
  assert.doesNotMatch(`${library}\n${brand}\n${success}`, /chespanish-guide-avatar|\/mascots\//);
});

test("visible library features use distinct official mascot poses", async () => {
  const [library, brand, banner, entry] = await Promise.all([
    source("app/Library.tsx"),
    source("app/SpanishCueBrand.tsx"),
    source("app/NewLessonsBanner.tsx"),
    source("app/autoestudio/LibraryEntry.tsx"),
  ]);
  for (const asset of [
    "/autoestudio/mascot/writing.webp",
    "/brand/mascot/walking.webp",
    "/brand/mascot/seated.webp",
    "/brand/mascot/speaking.webp",
    "/brand/mascot/studying.webp",
  ]) {
    assert.match(library, new RegExp(asset.replaceAll("/", "\\/")));
  }
  const visibleRoutes = library.slice(library.indexOf('className="route-divider"'), library.indexOf("<AutoestudioLibraryEntry"));
  const poses = [brand.match(/sc-mascot-cue[^]*?src="([^"]+)"/)?.[1], banner.match(/new-lessons-intro[^]*?src="([^"]+)"/)?.[1], ...[...visibleRoutes.matchAll(/src="(\/(?:brand|autoestudio)\/mascot\/[^"]+)"/g)].map(match => match[1]), entry.match(/ae-library-entry-art[^]*?src="([^"]+)"/)?.[1]];
  assert.equal(poses.length, 8);
  assert.equal(new Set(poses).size, poses.length, "hero, banner and library paths should not repeat one cutout");
  assert.doesNotMatch(library, /route-symbol route-mouth|route-symbol route-vocabulary/);
});

test("the main library flow omits the oversized grammar curriculum banner", async () => {
  const library = await source("app/Library.tsx");
  assert.doesNotMatch(library, /<section className="curriculum-strip">/);
});

test("the brand system has mobile and reduced-motion safeguards", async () => {
  const css = await source("app/spanishcue-brand.css");
  assert.match(css, /@media\(max-width:760px\)/);
  assert.match(css, /@media\(max-width:420px\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
});

test("legacy auth and storage contracts remain unchanged", async () => {
  const [session, library] = await Promise.all([
    source("app/firebase-session.ts"),
    source("app/Library.tsx"),
  ]);
  assert.match(session, /x-chespanish-user-uid/);
  assert.match(session, /CHESPANISH_OWNER_UID/);
  assert.match(library, /chespanish-favorites/);
  assert.match(library, /chespanish-plan/);
});

test("public navigation, dialogs and payment status keep their accessibility contracts", async () => {
  const [library, brand, modalHook, argentoRoleplays, roulette, wordbank, success, globals, account, auth] = await Promise.all([
    source("app/Library.tsx"),
    source("app/SpanishCueBrand.tsx"),
    source("app/useAccessibleModal.ts"),
    source("app/argento-roleplays/page.tsx"),
    source("app/life-roulette/page.tsx"),
    source("app/mundo-fantastico/page.tsx"),
    source("app/pro/success/SuccessClient.tsx"),
    source("app/globals.css"),
    source("app/cuenta/style.css"),
    source("app/ingresar/style.css"),
  ]);
  assert.match(library, /href="#main-content"/);
  assert.match(brand, /id="main-content" tabIndex=\{-1\}/);
  for (const surface of [argentoRoleplays, roulette, wordbank]) {
    assert.match(surface, /useAccessibleModal/);
    assert.match(surface, /aria-modal="true"/);
  }
  assert.match(modalHook, /event\.key === "Escape"/);
  assert.match(modalHook, /event\.key !== "Tab"/);
  assert.match(modalHook, /element\.inert = true/);
  assert.match(modalHook, /returnFocus\?\.focus\(\)/);
  assert.match(success, /role="status" aria-live="polite" aria-atomic="true"/);
  assert.match(globals, /color:#5f7078/);
  assert.match(account, /color: #1b6a89/);
  assert.match(account, /color: #536873/);
  assert.match(auth, /color: #5f7078/);
});
