import { gustar } from "../../ejercicios-gramatica/families";
import { GapRulePage, gapPageMetadata } from "../../ejercicios-gramatica/views";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return gustar.pages.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props) { return gapPageMetadata(gustar, (await params).slug); }

export default async function RulePage({ params }: Props) { return <GapRulePage family={gustar} slug={(await params).slug} />; }
