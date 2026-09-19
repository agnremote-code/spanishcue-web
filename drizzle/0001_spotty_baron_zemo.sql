CREATE TABLE `access_grants` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`product_code` text NOT NULL,
	`access_level` text NOT NULL,
	`source` text NOT NULL,
	`source_reference` text,
	`plan_code` text,
	`status` text NOT NULL,
	`starts_at` integer NOT NULL,
	`expires_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `access_grants_user_product_source_unique` ON `access_grants` (`user_id`,`product_code`,`source`);--> statement-breakpoint
CREATE INDEX `idx_access_grants_active_lookup` ON `access_grants` (`user_id`,`product_code`,`status`,`expires_at`);--> statement-breakpoint
CREATE TABLE `auth_identities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`provider` text NOT NULL,
	`provider_subject` text NOT NULL,
	`provider_email` text,
	`email_verified` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`last_seen_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `auth_identities_provider_subject_unique` ON `auth_identities` (`provider`,`provider_subject`);--> statement-breakpoint
CREATE INDEX `idx_auth_identities_user_id` ON `auth_identities` (`user_id`);--> statement-breakpoint
CREATE TABLE `lesson_progress` (
	`user_id` text NOT NULL,
	`lesson_id` integer NOT NULL,
	`state` text DEFAULT 'opened' NOT NULL,
	`progress_percent` integer DEFAULT 0 NOT NULL,
	`first_opened_at` integer NOT NULL,
	`last_opened_at` integer NOT NULL,
	`completed_at` integer,
	PRIMARY KEY(`user_id`, `lesson_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_lesson_progress_user_recent` ON `lesson_progress` (`user_id`,`last_opened_at`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`normalized_email` text NOT NULL,
	`display_name` text,
	`role` text DEFAULT 'teacher' NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`last_sign_in_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_normalized_email_unique` ON `users` (`normalized_email`);--> statement-breakpoint
CREATE INDEX `idx_users_status_last_sign_in` ON `users` (`status`,`last_sign_in_at`);