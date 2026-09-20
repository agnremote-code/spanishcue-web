CREATE TABLE `verification_email_deliveries` (
	`id` text PRIMARY KEY NOT NULL,
	`identity` text NOT NULL,
	`recipient` text NOT NULL,
	`request_key` text NOT NULL,
	`kind` text NOT NULL,
	`status` text DEFAULT 'sending' NOT NULL,
	`requested_at` integer NOT NULL,
	`provider_id` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `verification_email_request_unique` ON `verification_email_deliveries` (`identity`,`request_key`);--> statement-breakpoint
CREATE INDEX `verification_email_recipient_time` ON `verification_email_deliveries` (`recipient`,`requested_at`);