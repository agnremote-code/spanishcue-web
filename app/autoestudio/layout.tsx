import "./autoestudio.css";
import type { ReactNode } from "react";

/**
 * Homework is Spanish practice with its own English lines: a browser translator would turn the
 * exercises themselves into English and fight every React update. The whole area opts out of page
 * translation (`translate="no"` for the standard, `notranslate` for Chrome and Edge).
 */
export default function AutoestudioLayout({ children }: { children: ReactNode }) {
  return <div className="notranslate ae-notranslate" translate="no" style={{ display: "contents" }}>{children}</div>;
}
