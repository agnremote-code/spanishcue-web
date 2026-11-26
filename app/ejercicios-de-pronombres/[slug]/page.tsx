import { pronombres } from "../../ejercicios-gramatica/families";
import { GapRulePage, gapPageMetadata } from "../../ejercicios-gramatica/views";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return pronombres.pages.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props) { return gapPageMetadata(pronombres, (await params).slug); }

export default async function RulePage({ params }: Props) { return <GapRulePage family={pronombres} slug={(await params).slug} />; }
