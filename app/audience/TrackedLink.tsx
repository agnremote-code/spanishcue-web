"use client";

import type { ReactNode } from "react";
import { trackMarketingEvent, type MarketingEvent } from "../marketing/analytics";

/** A plain link that reports one analytics event when followed. */
export default function TrackedLink({
  href,
  event,
  placement,
  lessonId,
  className,
  children,
}: {
  href: string;
  event: MarketingEvent;
  placement: string;
  lessonId?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackMarketingEvent(event, { placement, lesson_id: lessonId, destination: href })}
    >
      {children}
    </a>
  );
}
