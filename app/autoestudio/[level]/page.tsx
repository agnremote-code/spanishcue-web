import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { fullAccessFromHeaders } from "../../access-policy";
import { publishedLevels } from "../curriculum/course";
import { shareSessionFromHeaders } from "../session-display";
import LevelMap from "../LevelMap";

export function generateStaticParams() {
  return publishedLevels().map((level) => ({ level: level.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }): Promise<Metadata> {
  const { level: id } = await params;
  const level = publishedLevels().find((candidate) => candidate.id === id);
  if (!level) return {};
  return {
    title: `Autoestudio ${level.code}: ${level.name} | SPANISHCUE`,
    description: `${level.modules.length} semanas de autoestudio ${level.code}. ${level.outcome}`,
  };
}

export default async function Page({ params }: { params: Promise<{ level: string }> }) {
  const { level: id } = await params;
  const levels = publishedLevels();
  const index = levels.findIndex((candidate) => candidate.id === id);
  if (index < 0) notFound();
  const next = levels[index + 1];
  const h = await headers();
  const session = shareSessionFromHeaders(h);
  return <LevelMap level={levels[index]} fullAccess={fullAccessFromHeaders(h) || session?.level === id} session={session} nextLevel={next ? { id: next.id, code: next.code } : null} />;
}
