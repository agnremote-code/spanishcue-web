export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type GuidePillar = "teach-spanish" | "tutor-business";

export type GuideCluster =
  | "grammar"
  | "conversation"
  | "listening"
  | "pronunciation"
  | "vocabulary"
  | "methodology"
  | "preply"
  | "italki"
  | "other-platforms"
  | "pricing-business"
  | "operations-retention"
  | "tutor-niches";

export type GuidePlatform =
  | "Preply"
  | "italki"
  | "Verbling"
  | "Superprof"
  | "AmazingTalker";

export type GuideOfficialSource = {
  label: string;
  url: string;
};

export type TeachingGuide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readingTime: string;
  keywords: string[];
  sections: GuideSection[];
  relatedHref: string;
  relatedLabel: string;
  pillar: GuidePillar;
  cluster: GuideCluster;
  publishedAt: string;
  relatedLessonIds?: number[];
  relatedGuideSlugs?: string[];
  platform?: GuidePlatform;
  lastReviewed?: string;
  officialSources?: GuideOfficialSource[];
  containsVolatilePlatformFacts?: boolean;
};
