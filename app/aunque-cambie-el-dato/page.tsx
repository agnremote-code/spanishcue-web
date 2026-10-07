import LegacyLesson from "./LegacyLesson";
import GrammarPage, {grammarPageMetadata, type GrammarPageProps} from "../grammar-classroom/GrammarPage";

export const metadata=grammarPageMetadata(220);
export default async function Page({searchParams}:GrammarPageProps){
  const query=await searchParams;
  return <GrammarPage id={220} reference={query?.reference==="1"}><LegacyLesson/></GrammarPage>;
}
