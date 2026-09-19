CREATE TABLE `billing_checkout_locks` (
	`environment` text NOT NULL,
	`user_id` text NOT NULL,
	`product_code` text NOT NULL,
	`request_id` text NOT NULL,
	`status` text NOT NULL,
	`provider_subscription_id` text,
	`approval_url` text,
	`held_until` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	PRIMARY KEY(`environment`, `user_id`, `product_code`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `billing_checkout_locks_request_unique` ON `billing_checkout_locks` (`environment`,`request_id`);--> statement-breakpoint
CREATE TABLE `billing_outbox_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`provider` text NOT NULL,
	`environment` text NOT NULL,
	`event_key` text NOT NULL,
	`event_name` text NOT NULL,
	`user_id` text NOT NULL,
	`subscription_id` integer NOT NULL,
	`payment_id` integer,
	`occurred_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	`delivered_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`subscription_id`) REFERENCES `billing_subscriptions`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`payment_id`) REFERENCES `billing_payments`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `billing_outbox_events_key_unique` ON `billing_outbox_events` (`provider`,`environment`,`event_key`);--> statement-breakpoint
CREATE INDEX `idx_billing_outbox_events_pending` ON `billing_outbox_events` (`event_name`,`environment`,`delivered_at`,`created_at`);--> statement-breakpoint
CREATE TABLE `billing_payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`subscription_id` integer NOT NULL,
	`provider` text NOT NULL,
	`environment` text NOT NULL,
	`provider_payment_id` text NOT NULL,
	`provider_event_id` text,
	`amount_cents` integer NOT NULL,
	`currency` text NOT NULL,
	`status` text NOT NULL,
	`occurred_at` integer NOT NULL,
	`paid_through` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`subscription_id`) REFERENCES `billing_subscriptions`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `billing_payments_provider_payment_unique` ON `billing_payments` (`provider`,`environment`,`provider_payment_id`);--> statement-breakpoint
CREATE INDEX `idx_billing_payments_subscription_status` ON `billing_payments` (`subscription_id`,`status`,`occurred_at`);--> statement-breakpoint
DROP INDEX `billing_subscriptions_provider_subscription_unique`;--> statement-breakpoint
DROP INDEX `idx_billing_subscriptions_user_status`;--> statement-breakpoint
ALTER TABLE `billing_subscriptions` ADD `environment` text DEFAULT 'sandbox' NOT NULL;--> statement-breakpoint
ALTER TABLE `billing_subscriptions` ADD `first_payment_at` integer;--> statement-breakpoint
ALTER TABLE `billing_subscriptions` ADD `paid_through` integer;--> statement-breakpoint
CREATE UNIQUE INDEX `billing_subscriptions_provider_subscription_unique` ON `billing_subscriptions` (`provider`,`environment`,`provider_subscription_id`);--> statement-breakpoint
CREATE INDEX `idx_billing_subscriptions_user_status` ON `billing_subscriptions` (`user_id`,`environment`,`status`);--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_payment_webhook_events` (
	`provider` text NOT NULL,
	`environment` text DEFAULT 'sandbox' NOT NULL,
	`event_id` text NOT NULL,
	`event_type` text NOT NULL,
	`resource_id` text,
	`received_at` integer NOT NULL,
	`processed_at` integer,
	`processing_status` text DEFAULT 'received' NOT NULL,
	`error_code` text,
	PRIMARY KEY(`provider`, `environment`, `event_id`)
);
--> statement-breakpoint
INSERT INTO `__new_payment_webhook_events`("provider", "environment", "event_id", "event_type", "resource_id", "received_at", "processed_at", "processing_status", "error_code") SELECT "provider", 'sandbox', "event_id", "event_type", "resource_id", "received_at", "processed_at", "processing_status", "error_code" FROM `payment_webhook_events`;--> statement-breakpoint
DROP TABLE `payment_webhook_events`;--> statement-breakpoint
ALTER TABLE `__new_payment_webhook_events` RENAME TO `payment_webhook_events`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `idx_payment_webhook_events_resource` ON `payment_webhook_events` (`provider`,`environment`,`resource_id`);
