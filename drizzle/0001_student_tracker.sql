CREATE TABLE `class_records` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`student_id` text NOT NULL,
	`lesson_id` integer,
	`free_title` text,
	`starts_at` text NOT NULL,
	`timezone` text NOT NULL,
	`duration_minutes` integer,
	`status` text NOT NULL,
	`pedagogical_note` text DEFAULT '' NOT NULL,
	`next_step` text DEFAULT '' NOT NULL,
	`request_key` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`student_id`,`owner_id`) REFERENCES `students`(`id`,`owner_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `class_records_owner_request_key_unique` ON `class_records` (`owner_id`,`request_key`);--> statement-breakpoint
CREATE INDEX `class_records_owner_student_date_idx` ON `class_records` (`owner_id`,`student_id`,`starts_at`);--> statement-breakpoint
CREATE INDEX `class_records_owner_date_idx` ON `class_records` (`owner_id`,`starts_at`);--> statement-breakpoint
CREATE TABLE `students` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`alias` text NOT NULL,
	`last_name` text,
	`email` text,
	`level` text NOT NULL,
	`goal` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `students_id_owner_unique` ON `students` (`id`,`owner_id`);--> statement-breakpoint
CREATE INDEX `students_owner_status_idx` ON `students` (`owner_id`,`status`,`updated_at`);