CREATE TABLE `lesson_reports` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`user_id` text NOT NULL,
	`account_id` text,
	`reporter_email` text,
	`request_key` text NOT NULL,
	`lesson_id` integer NOT NULL,
	`lesson_slug` text NOT NULL,
	`lesson_title` text NOT NULL,
	`lesson_level` text NOT NULL,
	`lesson_category` text NOT NULL,
	`section_id` text,
	`activity_id` text,
	`question_id` text,
	`component_id` text,
	`category` text NOT NULL,
	`issue_type` text NOT NULL,
	`message` text NOT NULL,
	`page_url` text NOT NULL,
	`route_path` text NOT NULL,
	`context_json` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`ai_status` text DEFAULT 'unprocessed' NOT NULL,
	`ai_analysis` text,
	`resolution` text,
	`resolved_at` text,
	`resolved_by` text,
	`change_reference` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lesson_reports_user_request_unique` ON `lesson_reports` (`user_id`,`request_key`);--> statement-breakpoint
CREATE INDEX `lesson_reports_user_created_idx` ON `lesson_reports` (`user_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `lesson_reports_status_created_idx` ON `lesson_reports` (`status`,`created_at`);