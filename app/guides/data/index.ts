export * from "./types";

import { coreGuides } from "./core";
import { preplyGuides } from "./preply";
import { italkiGuides } from "./italki";
import { otherPlatformGuides } from "./other-platforms";
import { pricingBusinessGuides } from "./pricing-business";
import { operationsRetentionGuides } from "./operations-retention";
import { tutorNicheGuides } from "./tutor-niches";

export const tutorBusinessGuides = [
  ...preplyGuides,
  ...italkiGuides,
  ...otherPlatformGuides,
  ...pricingBusinessGuides,
  ...operationsRetentionGuides,
  ...tutorNicheGuides,
];

export const teachingGuides = [
  ...coreGuides,
  ...tutorBusinessGuides,
];

export const teachingGuideBySlug = new Map(
  teachingGuides.map((guide) => [guide.slug, guide]),
);
