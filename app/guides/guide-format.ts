import type { TeachingGuide } from "./data";

export function guideModifiedDate(guide: TeachingGuide): string {
  return guide.lastReviewed || guide.publishedAt;
}

export function formatReviewedDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
