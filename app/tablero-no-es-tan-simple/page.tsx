import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fullAccessFromHeaders } from "../access-policy";
import BoardLesson from "../boards/BoardLesson";
import { b2Board } from "../boards/b2-data";

export default async function Page() {
  if (!fullAccessFromHeaders(await headers())) {
    redirect("/acceso?returnTo=%2Ftablero-no-es-tan-simple");
  }
  return <BoardLesson bank={b2Board} />;
}
