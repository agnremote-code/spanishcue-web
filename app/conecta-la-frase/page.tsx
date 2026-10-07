import LegacyLesson from "./LegacyLesson";
import GrammarPage, {grammarPageMetadata, type GrammarPageProps} from "../grammar-classroom/GrammarPage";

export const metadata=grammarPageMetadata(211);
export default async function Page({searchParams}:GrammarPageProps){
  const query=await searchParams;
  return <GrammarPage id={211} reference={query?.reference==="1"}><LegacyLesson/></GrammarPage>;
}
