CREATE TABLE IF NOT EXISTS `lesson_reports` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`user_email` text,
	`lesson_id` integer NOT NULL,
	`lesson_slug` text NOT NULL,
	`lesson_title` text NOT NULL,
	`lesson_category` text NOT NULL,
	`level` text NOT NULL,
	`url` text NOT NULL,
	`message` text NOT NULL CHECK(length(message) BETWEEN 3 AND 2000),
	`category` text DEFAULT 'Otro' NOT NULL,
	`context_json` text DEFAULT '{}' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL CHECK(status IN ('new','reviewing','resolved','dismissed')),
	`ai_status` text DEFAULT 'pending' NOT NULL,
	`resolution` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`resolved_at` text
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `lesson_reports_user_time` ON `lesson_reports` (`user_id`,`created_at`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `lesson_reports_status_time` ON `lesson_reports` (`status`,`created_at`);