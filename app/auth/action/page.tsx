import type { Locale } from "../../i18n/messages";
import VerificationAction from "./VerificationAction";
import "./style.css";

function localeFromParam(value: string | undefined): Locale {
  return value?.toLowerCase().startsWith("en") ? "en" : "es";
}

export default async function VerificationActionPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; oobCode?: string; lang?: string; status?: string }>;
}) {
  const params = await searchParams;
  return (
    <VerificationAction
      mode={params.mode ?? ""}
      oobCode={params.oobCode ?? ""}
      locale={localeFromParam(params.lang)}
      verified={params.status === "success"}
    />
  );
}
