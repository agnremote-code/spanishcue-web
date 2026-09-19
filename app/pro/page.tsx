import { redirect } from "next/navigation";

/** Canonical public pricing URL. The contextual paywall keeps the requested
 * lesson in returnTo, so both flows use one source of checkout truth. */
export default function ProPage() {
  redirect("/acceso");
}
