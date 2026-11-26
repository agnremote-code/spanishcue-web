import { dudas } from "../../ejercicios-gramatica/families";
import { GapRulePage, gapPageMetadata } from "../../ejercicios-gramatica/views";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return dudas.pages.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props) { return gapPageMetadata(dudas, (await params).slug); }

export default async function RulePage({ params }: Props) { return <GapRulePage family={dudas} slug={(await params).slug} />; }
