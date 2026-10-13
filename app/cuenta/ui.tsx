"use client";

import Link from "next/link";
import { Component, useCallback, useEffect, useState, type ReactNode } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import { dashT, type DashKey, type DashLocale } from "./copy";

export function useDash() {
  const { locale } = useI18n();
  const l: DashLocale = locale === "en" ? "en" : "es";
  return { locale: l, t: (key: DashKey, values?: Record<string, string>) => dashT(l, key, values) };
}

/** JSON API call whose failures always become a readable message. */
export async function dashApi<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, {
      cache: "no-store",
      credentials: "same-origin",
      ...init,
      headers: init?.body ? { "content-type": "application/json", ...init.headers } : init?.headers,
    });
  } catch {
    throw Object.assign(new Error("network"), { code: "network" });
  }
  const body = response.status === 204 ? null : ((await response.json().catch(() => null)) as (T & { error?: string; code?: string }) | null);
  if (!response.ok) throw Object.assign(new Error(body?.error || `HTTP ${response.status}`), { code: body?.code, status: response.status });
  return body as T;
}

export type Loadable<T> = { status: "loading" } | { status: "error"; message: string } | { status: "ready"; data: T };

/** Loads one endpoint with its own loading/error state, so one failing source never blanks the page. */
export function useLoad<T>(path: string | null) {
  const [state, setState] = useState<Loadable<T>>({ status: "loading" });
  const [version, setVersion] = useState(0);
  useEffect(() => {
    if (!path) return;
    let active = true;
    dashApi<T>(path)
      .then((data) => { if (active) setState({ status: "ready", data }); })
      .catch((error: Error) => { if (active) setState({ status: "error", message: error.message }); });
    return () => { active = false; };
  }, [path, version]);
  const reload = useCallback(() => { setState({ status: "loading" }); setVersion((v) => v + 1); }, []);
  return [state, reload] as const;
}

export function LoadState<T>({ state, onRetry, children }: { state: Loadable<T>; onRetry: () => void; children: (data: T) => ReactNode }) {
  const { t } = useDash();
  if (state.status === "loading") return <p className="cx-loading" role="status"><span className="cx-spinner" aria-hidden="true" />{t("common.loading")}</p>;
  if (state.status === "error") return <div className="cx-alert is-error" role="alert"><span>{t("common.loadError")}</span><button type="button" onClick={onRetry}>{t("common.retry")}</button></div>;
  return <>{children(state.data)}</>;
}

export function Empty({ title, copy, action }: { title: string; copy?: string; action?: ReactNode }) {
  return <div className="cx-empty"><img src="/brand/mascot/portrait.webp" alt="" width="72" height="72" /><div><strong>{title}</strong>{copy && <p>{copy}</p>}{action}</div></div>;
}

function BoundaryFallback({ onRetry }: { onRetry: () => void }) {
  const { t } = useDash();
  return <div className="cx-panel cx-boundary" role="alert">
    <strong>{t("boundary.title")}</strong>
    <p>{t("boundary.copy")}</p>
    <div className="cx-row"><button type="button" className="cx-btn is-primary" onClick={onRetry}>{t("common.retry")}</button><Link className="cx-btn" href="/cuenta">{t("boundary.home")}</Link></div>
  </div>;
}

/** A crash inside one dashboard module stays inside that module. */
export class SectionBoundary extends Component<{ children: ReactNode }, { failed: boolean; key: number }> {
  state = { failed: false, key: 0 };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error) { console.error("Account section failed", error.message); }
  render() {
    if (this.state.failed) return <BoundaryFallback onRetry={() => this.setState((s) => ({ failed: false, key: s.key + 1 }))} />;
    return <div key={this.state.key} className="cx-boundary-root">{this.props.children}</div>;
  }
}
