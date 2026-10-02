export const reportCategories = ['text','answer','audio','image','instruction','technical','suggestion','other'] as const;
export type ReportCategory = typeof reportCategories[number];
export const reportStatuses = ['new','reviewing','accepted','rejected','resolved'] as const;
export type ReportStatus = typeof reportStatuses[number];
export type ReportContext = {
  sectionId?: string | null; activityId?: string | null; questionId?: string | null; componentId?: string | null;
  level?: string | null; locationLabel?: string | null; routePath?: string; pageUrl?: string;
  viewport?: { width: number; height: number }; build?: string | null;
};
export type LessonReportRow = {
  id: string; created_at: string; updated_at: string; user_id: string; account_id: string | null; reporter_email: string | null;
  request_key: string; lesson_id: number; lesson_slug: string; lesson_title: string; lesson_level: string; lesson_category: string;
  section_id: string | null; activity_id: string | null; question_id: string | null; component_id: string | null;
  category: ReportCategory; issue_type: 'content' | 'improvement' | 'technical'; message: string; page_url: string; route_path: string;
  context_json: string; status: ReportStatus; ai_status: string; ai_analysis: string | null; resolution: string | null;
  resolved_at: string | null; resolved_by: string | null; change_reference: string | null;
};
export class ReportError extends Error {
  constructor(message: string, public status = 400, public code = 'invalid_report') { super(message); }
}
