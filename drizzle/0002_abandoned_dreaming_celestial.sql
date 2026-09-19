CREATE TABLE `founder_leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`normalized_email` text NOT NULL,
	`display_name` text,
	`account_id` text,
	`source_path` text DEFAULT '/' NOT NULL,
	`offer_price_cents` integer NOT NULL,
	`offer_revision` integer NOT NULL,
	`status` text DEFAULT 'reserved' NOT NULL,
	`marketing_consent_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `founder_leads_normalized_email_unique` ON `founder_leads` (`normalized_email`);--> statement-breakpoint
CREATE INDEX `idx_founder_leads_status_created` ON `founder_leads` (`status`,`created_at`);--> statement-breakpoint
PRAGMA optimize;
