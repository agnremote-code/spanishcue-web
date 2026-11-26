"use client";
import { useState } from "react";
import styles from "../growth/growth.module.css";

/** Copy-paste code for the embeddable conjugator: the iframe plus a visible credit link. */
export default function EmbedSnippet({ verbs }: { verbs: string[] }) {
  const [verb, setVerb] = useState(verbs[0]);
  const [copied, setCopied] = useState(false);
  const code = `<iframe src="https://spanishcue.com/embed/conjugador?v=${encodeURIComponent(verb)}" title="Conjugador de verbos en español" width="100%" height="640" style="border:0;max-width:760px" loading="lazy"></iframe>\n<p><a href="https://spanishcue.com/conjugacion">Conjugador de verbos de SpanishCue</a></p>`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  };
  return (
    <div className={styles.panel}>
      {verbs.length > 1 && <label>Verbo inicial{" "}
        <select value={verb} onChange={(event) => setVerb(event.target.value)}>
          {verbs.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>}
      <textarea readOnly value={code} rows={4} style={{ width: "100%", fontFamily: "monospace", fontSize: 12, marginTop: 10 }} aria-label="Código para insertar el conjugador" onFocus={(event) => event.currentTarget.select()} />
      <div className={styles.heroActions}>
        <button type="button" className={styles.primaryButton} onClick={copy}>{copied ? "Copiado" : "Copiar código"}</button>
      </div>
    </div>
  );
}
