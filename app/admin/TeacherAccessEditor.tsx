"use client";

import { useMemo, useState } from "react";
import type { TeacherAccount } from "../account-types";

function readableDate(timestamp: number) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp * 1000));
}

export default function TeacherAccessEditor({ initial }: { initial: TeacherAccount[] }) {
  const [accounts, setAccounts] = useState(initial);
  const [query, setQuery] = useState("");
  const [workingId, setWorkingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return accounts;
    return accounts.filter((account) =>
      [account.email, account.displayName ?? "", account.role]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [accounts, query]);

  const changeAccess = async (account: TeacherAccount) => {
    const accessLevel = account.accessLevel === "full" ? "free" : "full";
    setWorkingId(account.userId);
    setMessage("");
    try {
      const response = await fetch("/api/admin/teachers", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId: account.userId, accessLevel }),
        credentials: "same-origin",
      });
      const body = (await response.json()) as TeacherAccount & { error?: string };
      if (!response.ok) throw new Error(body.error || "No pudimos cambiar el acceso.");
      setAccounts((current) =>
        current.map((item) =>
          item.userId === account.userId
            ? { ...item, ...body, createdAt: item.createdAt, lastSignInAt: item.lastSignInAt }
            : item,
        ),
      );
      setMessage(`Acceso actualizado para ${account.email}.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No pudimos cambiar el acceso.");
    } finally {
      setWorkingId(null);
    }
  };

  return (
    <section className="teacher-access-editor">
      <div className="teacher-access-heading">
        <div>
          <p>CUENTAS REALES</p>
          <h2>Profesores registrados</h2>
          <span>{accounts.length} {accounts.length === 1 ? "cuenta" : "cuentas"}</span>
        </div>
        <label>
          Buscar
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre o email"
          />
        </label>
      </div>
      {visible.length ? (
        <div className="teacher-access-list">
          {visible.map((account) => (
            <article key={account.userId}>
              <div>
                <strong>{account.displayName || account.email}</strong>
                {account.displayName && <span>{account.email}</span>}
                <small>Último acceso: {readableDate(account.lastSignInAt)}</small>
              </div>
              <div className="teacher-access-status">
                <span data-level={account.accessLevel}>
                  {account.role === "owner" ? "PROPIETARIO" : account.accessLevel === "full" ? "COMPLETO" : "GRATUITO"}
                </span>
                <button
                  type="button"
                  disabled={account.role === "owner" || workingId === account.userId}
                  onClick={() => void changeAccess(account)}
                >
                  {workingId === account.userId
                    ? "GUARDANDO…"
                    : account.accessLevel === "full"
                      ? "QUITAR ACCESO COMPLETO"
                      : "DAR ACCESO COMPLETO"}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="teacher-access-empty">
          {accounts.length ? "No hay resultados para esa búsqueda." : "Las cuentas aparecerán aquí cuando los profesores se registren."}
        </p>
      )}
      <p className="teacher-access-message" role="status" aria-live="polite">{message}</p>
    </section>
  );
}
