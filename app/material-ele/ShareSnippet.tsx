"use client";
import { useState } from "react";
import styles from "../growth/growth.module.css";

/** «Compartir en tu aula virtual»: an HTML card teachers paste into Moodle, Canvas or Google Classroom.
 *  A link, never an iframe: the site keeps X-Frame-Options DENY, and a link is what the LMS editors accept. */
export default function ShareSnippet({ path, title, description }: { path: string; title: string; description: string }) {
  const url = `https://spanishcue.com${path}`;
  const html = `<p><a href="${url}"><strong>${title}</strong></a><br>${description}<br><small>Material ELE de SpanishCue</small></p>`;
  const [copied, setCopied] = useState<"" | "html" | "link">("");
  const copy = async (kind: "html" | "link") => {
    try { await navigator.clipboard.writeText(kind === "html" ? html : url); setCopied(kind); window.setTimeout(() => setCopied(""), 2000); } catch { setCopied(""); }
  };
  return (
    <div className={styles.panel}>
      <h3>Compartir en tu aula virtual</h3>
      <p>Pega este bloque en Moodle, Canvas, Google Classroom o tu web: queda como una tarjeta con el enlace a esta página.</p>
      <textarea readOnly value={html} rows={3} style={{ width: "100%", fontFamily: "monospace", fontSize: 12 }} aria-label="Código HTML para compartir" onFocus={(event) => event.currentTarget.select()} />
      <div className={styles.heroActions}>
        <button type="button" className={styles.primaryButton} onClick={() => copy("html")}>{copied === "html" ? "Copiado" : "Copiar bloque HTML"}</button>
        <button type="button" className={styles.secondaryButton} onClick={() => copy("link")}>{copied === "link" ? "Copiado" : "Copiar solo el enlace"}</button>
      </div>
    </div>
  );
}
