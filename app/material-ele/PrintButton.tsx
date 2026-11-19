"use client";

import styles from "./print.module.css";

/** Opens every answer key, then the browser's print dialog ("Guardar como PDF"). */
export default function PrintButton({ label = "Descargar ficha en PDF" }: { label?: string }) {
  const print = () => {
    document.querySelectorAll("main details").forEach((item) => item.setAttribute("open", ""));
    window.print();
  };
  return (
    <button type="button" className={styles.printButton} onClick={print}>
      {label}
    </button>
  );
}
