import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fullAccessFromHeaders } from "../access-policy";
import BoardLesson from "../boards/BoardLesson";
import { b1Board } from "../boards/b1-data";

export default async function Page() {
  if (!fullAccessFromHeaders(await headers())) {
    redirect("/acceso?returnTo=%2Ftablero-de-eso-si-hablo");
  }
  return <BoardLesson bank={b1Board} />;
}
