import type { MetadataRoute } from "next";
import { isFreeLesson, localLessonPath } from "./access-policy";
import { lessons } from "./lesson-catalog";
import { localizedUrl } from "./seo";

const marketingRoutes = [
  "",
  "/pricing",
  "/spanish-teacher-resources",
  "/spanish-conversation-activities",
  "/spanish-grammar-lessons",
  "/ele-recursos-profesores",
  "/online-spanish-teaching-resources",
  "/free-spanish-lesson",
  "/sistema-verbal",
  "/privacy",
  "/terms",
  "/contact",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const freeRoutes = lessons
    .filter((lesson) => isFreeLesson(lesson.id))
    .map(localLessonPath)
    .filter((path): path is string => Boolean(path));
  return [...new Set([...marketingRoutes, ...freeRoutes])].map((path) => ({
    url: localizedUrl(path, "es"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/pricing" ? 0.8 : 0.7,
    alternates: {
      languages: {
        es: localizedUrl(path, "es"),
        en: localizedUrl(path, "en"),
      },
    },
  }));
}
