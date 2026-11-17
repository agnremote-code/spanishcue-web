// Lists every clip Autoestudio can play (theory examples, vocabulary, listening
// scripts, «Escucha y elige» items, quiz audio…) for scripts/generate-autoestudio-audio.py.
// Prints JSON: [{ key, text, voice, level }], deduplicated, lowest level first.
import { build } from "esbuild";

const built = await build({
  stdin: {
    contents: `export { modulesByLevel } from './app/autoestudio/curriculum/course'; export { moduleClips } from './app/autoestudio/curriculum/audio-clips';`,
    resolveDir: process.cwd(),
    loader: "ts",
  },
  bundle: true, format: "esm", platform: "node", write: false, logLevel: "error",
});
const course = await import("data:text/javascript;base64," + Buffer.from(built.outputFiles[0].text).toString("base64"));
const clips = new Map();
for (const [level, modules] of Object.entries(course.modulesByLevel)) {
  for (const module of modules) {
    for (const clip of course.moduleClips(module)) {
      if (!clips.has(clip.key)) clips.set(clip.key, { key: clip.key, text: clip.text, voice: clip.voice ?? "es-MX-f", level });
    }
  }
}
process.stdout.write(JSON.stringify([...clips.values()]));
