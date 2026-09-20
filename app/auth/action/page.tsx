import type { Locale } from "../../i18n/messages";
import VerificationAction from "./VerificationAction";
import "./style.css";

function localeFromParam(value: string | undefined): Locale {
  return value?.toLowerCase().startsWith("en") ? "en" : "es";
}

export default async function VerificationActionPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; oobCode?: string; lang?: string; status?: string; continueUrl?: string }>;
}) {
  const params = await searchParams;
  let language = params.lang;
  try {
    // Admin links may carry Firebase's default lang. Our allowlisted continue
    // URL preserves the language chosen at signup without altering its code.
    const continuation = new URL(params.continueUrl ?? "");
    if (continuation.origin === "https://spanishcue.com" && continuation.pathname === "/auth/action") {
      language = continuation.searchParams.get("lang") ?? language;
    }
  } catch { /* Legacy links need only their lang parameter. */ }
  return (
    <VerificationAction
      mode={params.mode ?? ""}
      oobCode={params.oobCode ?? ""}
      locale={localeFromParam(language)}
      verified={params.status === "success"}
    />
  );
}
