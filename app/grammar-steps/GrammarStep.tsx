"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import "./style.css";

type GrammarStepProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  accent?: string;
  className?: string;
  defaultOpen?: boolean;
  kind?: "core" | "optional";
  children: ReactNode;
};

export default function GrammarStep({
  number,
  eyebrow,
  title,
  description,
  accent,
  className = "",
  defaultOpen = true,
  kind = "core",
  children,
}: GrammarStepProps) {
  const [open, setOpen] = useState(defaultOpen);
  const reactId = useId().replace(/:/g, "");
  const panelId = `grammar-step-${reactId}`;
  const style = accent
    ? ({ "--gs-accent": accent } as CSSProperties)
    : undefined;

  return (
    <section
      className={`grammar-step ${open ? "is-open" : ""} ${className}`.trim()}
      style={style}
      data-grammar-step
      data-grammar-kind={kind}
      data-default-state={defaultOpen ? "open" : "closed"}
    >
      <button
        type="button"
        className="grammar-step-summary"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="grammar-step-number">{number}</span>
        <span className="grammar-step-heading">
          <small>{eyebrow}</small>
          <strong>{title}</strong>
          {description && <em>{description}</em>}
        </span>
        <span className="grammar-step-action" aria-hidden="true">
          <b>{open ? "CERRAR" : "ABRIR"}</b>
          <i>⌄</i>
        </span>
      </button>
      <div id={panelId} className="grammar-step-panel" aria-hidden={!open}>
        <div className="grammar-step-clip">
          <div className="grammar-step-body">{children}</div>
        </div>
      </div>
    </section>
  );
}
