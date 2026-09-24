import type { MetadataRoute } from "next";
import { isFreeLesson, localLessonPath } from "./access-policy";
import { lessons } from "./lesson-catalog";
import { resourceLessons, resourcePathForLesson } from "./resource-seo";
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

  const localizedEntries = [...new Set([...marketingRoutes, ...freeRoutes])].map((path) => ({
    url: localizedUrl(path, "es"),
    changeFrequency: (path === "" ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: path === "" ? 1 : path === "/pricing" ? 0.8 : 0.7,
    alternates: {
      languages: {
        es: localizedUrl(path, "es"),
        en: localizedUrl(path, "en"),
      },
    },
  }));

  const resourceRoutes = [
    "/resources",
    ...resourceLessons.map(resourcePathForLesson),
  ];

  const resourceEntries = resourceRoutes.map((path) => ({
    url: `https://spanishcue.com${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/resources" ? 0.8 : 0.7,
  }));

  return [...localizedEntries, ...resourceEntries];
}
