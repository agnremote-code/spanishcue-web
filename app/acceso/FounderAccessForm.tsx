"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";

type FormStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export default function FounderAccessForm({
  defaultEmail,
  priceLabel,
  returnTo,
}: {
  defaultEmail: string;
  priceLabel: string;
  returnTo: string;
}) {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(defaultEmail);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/founder-access", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, returnTo, website }),
      });
      if (!response.ok) throw new Error(t("founder.reserveError"));
      setStatus({
        kind: "success",
        message: t("founder.reservedMessage"),
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : t("founder.reserveError"),
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="founder-success" role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>
        <div>
          <h3>{t("founder.reservedTitle")}</h3>
          <p>{status.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="founder-form" onSubmit={submit}>
      <div className="founder-form-heading">
        <span>{t("founder.step")}</span>
        <p>{t("founder.emailNotice")}</p>
      </div>
      <label>
        {t("founder.name")} <span>({t("founder.optional")})</span>
        <input
          type="text"
          autoComplete="name"
          maxLength={80}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={t("founder.namePlaceholder")}
        />
      </label>
      <label>
        {t("auth.email")}
        <input
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="teacher@example.com"
        />
      </label>
      <label className="founder-honeypot" aria-hidden="true">
        {t("founder.website")}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>
      <button type="submit" disabled={status.kind === "submitting"}>
        {status.kind === "submitting" ? t("founder.reserving") : t("founder.wantPrice", { price: priceLabel })}
        <span aria-hidden="true">→</span>
      </button>
      <p className="founder-reassurance">
        <span>✓ {t("founder.noPayment")}</span><span>✓ {t("founder.noCard")}</span><span>✓ {t("founder.priorNotice")}</span>
      </p>
      <small>
        {t("founder.consent")} <Link href="/privacy">{t("auth.privacyPolicy")}</Link>
      </small>
      {status.kind === "error" && (
        <p className="founder-form-error" role="alert">{status.message}</p>
      )}
    </form>
  );
}
