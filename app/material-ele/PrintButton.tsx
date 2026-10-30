"use client";

import styles from "./print.module.css";

/** Opens every answer key, then the browser's print dialog ("Guardar como PDF"). */
export default function PrintButton() {
  const print = () => {
    document.querySelectorAll("main details").forEach((item) => item.setAttribute("open", ""));
    window.print();
  };
  return (
    <button type="button" className={styles.printButton} onClick={print}>
      Descargar ficha en PDF
    </button>
  );
}
