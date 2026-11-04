"use client";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/LocaleProvider";

/** AR$ equivalent shown ONLY to visitors who came from the ChatGPT ad (utm_source=chatgpt),
 *  kept for their browser session, checkout included (Ale, 2026-11-04). Display only: the
 *  charge stays in USD. Hidden when the rate cannot be read. */
const FLAG = "spanishcue.ars-from-chatgpt";
type Rate = { rate: number; date: string; source: string };
let rateRequest: Promise<Rate | null> | null = null;

function fromChatGptAd(): boolean {
  try {
    if (new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase() === "chatgpt") window.sessionStorage.setItem(FLAG, "1");
    return window.sessionStorage.getItem(FLAG) === "1";
  } catch {
    return new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase() === "chatgpt";
  }
}

export function useArsRate(): Rate | null {
  const [rate, setRate] = useState<Rate | null>(null);
  useEffect(() => {
    if (!fromChatGptAd()) return;
    let alive = true;
    rateRequest ??= fetch("/api/fx/ars").then(r => r.ok ? r.json() : null).then((body: unknown) => {
      const b = body as Partial<Rate> & { available?: boolean } | null;
      return b?.available && typeof b.rate === "number" && b.rate > 0 ? { rate: b.rate, date: String(b.date ?? ""), source: String(b.source ?? "") } : null;
    }).catch(() => null);
    rateRequest.then(value => { if (alive) setRate(value); });
    return () => { alive = false; };
  }, []);
  return rate;
}

function shortDate(iso: string) {
  const [, m, d] = iso.split("-");
  return d && m ? `${d}/${m}` : "";
}

/** «(≈ AR$ 30.860 al dólar oficial BCRA del 03/11; se cobra en US$…)» under a USD price. */
export default function ArsPrice({ usd, className = "ars-price" }: { usd: number; className?: string }) {
  const rate = useArsRate();
  const { locale } = useI18n();
  if (!rate || locale !== "es") return null;
  const ars = Math.round(usd * rate.rate / 10) * 10;
  const date = shortDate(rate.date);
  return <small className={className} data-ars-price="">
    (≈ AR$ {ars.toLocaleString("es-AR")} al dólar oficial{rate.source === "BCRA" ? " BCRA" : ""}{date ? ` del ${date}` : ""}; se cobra en US$ y tu banco puede sumar impuestos)
  </small>;
}
