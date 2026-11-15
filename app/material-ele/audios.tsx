import Link from "next/link";
import { JsonLd, Section } from "../growth/components";
import { SITE_ORIGIN } from "../seo";
import styles from "../growth/growth.module.css";
import clips from "./audios-gratis.json";

/** A FREE listening clip of the 3D worlds Estados Unidos and México, with its
 *  transcript and questions. Built by scripts/build-ele-free-audios.mjs. */
export type FreeAudio = (typeof clips)[number];
export const freeAudios: FreeAudio[] = clips;
export const freeAudiosForLevel = (level: string) => freeAudios.filter((clip) => clip.level === level);
/** One clip per level, for the page that covers every level. */
export const freeAudioSamples = () => ["A1", "A2", "B1"].map((level) => freeAudios.find((clip) => clip.level === level)).filter((clip): clip is FreeAudio => Boolean(clip));

const duration = (seconds: number) => `PT${Math.floor(seconds / 60)}M${seconds % 60}S`;
const transcript = (clip: FreeAudio) => clip.lines.map((line) => `${clip.speakers[line.s]?.name ?? ""}: ${line.text}`).join("\n");

export function EleFreeAudios({ audios, title, intro, pathname }: { audios: FreeAudio[]; title: string; intro: string; pathname: string }) {
  if (!audios.length) return null;
  return (
    <Section id="audio-gratis" title={title} intro={intro}>
      {audios.map((clip) => (
        <div className={styles.panel} key={clip.id}>
          <JsonLd data={{ "@context": "https://schema.org", "@type": "AudioObject", name: `${clip.title} (comprensión auditiva ${clip.level})`, description: clip.context, contentUrl: `${SITE_ORIGIN}${clip.src}`, encodingFormat: "audio/mpeg", duration: duration(clip.seconds), inLanguage: "es", isAccessibleForFree: true, educationalLevel: clip.level, transcript: transcript(clip), url: `${SITE_ORIGIN}${pathname}#audio-gratis` }} />
          <h3>{clip.level} · {clip.title}</h3>
          <p>{clip.context} Voces de {clip.speakers.map((speaker) => `${speaker.name} (${speaker.country})`).join(", ")}. Duración: {clip.seconds} segundos.</p>
          <audio controls preload="none" src={clip.src} style={{ width: "100%" }}>Tu navegador no reproduce audio.</audio>
          <h4 style={{ fontWeight: 700, margin: "14px 0 4px" }}>Preguntas de comprensión</h4>
          <ol>{clip.questions.map((question) => <li key={question.q}>{question.q} <em>{question.options.join(" · ")}</em></li>)}</ol>
          <details><summary>Ver las respuestas</summary><ol>{clip.questions.map((question) => <li key={question.q}>{question.options[question.answer]}</li>)}</ol></details>
          <h4 style={{ fontWeight: 700, margin: "14px 0 4px" }}>Para conversar después</h4>
          <ul>{clip.talk.map((question) => <li key={question}>{question}</li>)}</ul>
          <details><summary>Ver la transcripción</summary>{clip.lines.map((line, index) => <p key={index}><b>{clip.speakers[line.s]?.name}:</b> {line.text}</p>)}</details>
          <p>Este audio sale de la clase gratis <Link className={styles.textLink} href={clip.worldPath}>{clip.world} en 3D</Link>, con más escuchas por nivel.</p>
        </div>
      ))}
    </Section>
  );
}
