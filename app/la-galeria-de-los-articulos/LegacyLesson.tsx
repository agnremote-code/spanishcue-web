import type { Metadata } from "next";
import GrammarWorld from "../grammar-worlds/GrammarWorld";
import { articleGallery } from "../grammar-worlds/data";

export const metadata: Metadata = { title: "La Galería de los Artículos · SPANISHCUE", description: articleGallery.subtitle };
export default function Page() { return <GrammarWorld data={articleGallery} />; }
