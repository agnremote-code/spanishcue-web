CREATE TABLE `billing_subscriptions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`provider` text NOT NULL,
	`provider_subscriber_id` text,
	`provider_subscription_id` text NOT NULL,
	`provider_plan_id` text NOT NULL,
	`product_code` text NOT NULL,
	`offer_code` text,
	`status` text DEFAULT 'PENDING' NOT NULL,
	`current_period_end` integer,
	`next_billing_time` integer,
	`created_at` integer NOT NULL,
	`activated_at` integer,
	`cancelled_at` integer,
	`last_payment_at` integer,
	`last_failure_at` integer,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `billing_subscriptions_provider_subscription_unique` ON `billing_subscriptions` (`provider`,`provider_subscription_id`);--> statement-breakpoint
CREATE INDEX `idx_billing_subscriptions_user_status` ON `billing_subscriptions` (`user_id`,`status`);--> statement-breakpoint
CREATE INDEX `idx_billing_subscriptions_offer_status` ON `billing_subscriptions` (`offer_code`,`status`);--> statement-breakpoint
CREATE TABLE `founder_assignments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`subscription_id` integer NOT NULL,
	`offer_code` text NOT NULL,
	`founder_number` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`subscription_id`) REFERENCES `billing_subscriptions`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `founder_assignments_user_offer_unique` ON `founder_assignments` (`user_id`,`offer_code`);--> statement-breakpoint
CREATE UNIQUE INDEX `founder_assignments_subscription_unique` ON `founder_assignments` (`subscription_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `founder_assignments_offer_number_unique` ON `founder_assignments` (`offer_code`,`founder_number`);--> statement-breakpoint
CREATE TABLE `founder_offer_state` (
	`offer_code` text PRIMARY KEY NOT NULL,
	`limit` integer NOT NULL,
	`claimed` integer DEFAULT 0 NOT NULL,
	`enabled` integer DEFAULT 1 NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `payment_webhook_events` (
	`provider` text NOT NULL,
	`event_id` text NOT NULL,
	`event_type` text NOT NULL,
	`resource_id` text,
	`received_at` integer NOT NULL,
	`processed_at` integer,
	`processing_status` text DEFAULT 'received' NOT NULL,
	`error_code` text,
	PRIMARY KEY(`provider`, `event_id`)
);
--> statement-breakpoint
CREATE INDEX `idx_payment_webhook_events_resource` ON `payment_webhook_events` (`provider`,`resource_id`);
--> statement-breakpoint
CREATE TRIGGER `founder_assignments_increment_claimed`
AFTER INSERT ON `founder_assignments`
BEGIN
  UPDATE `founder_offer_state`
  SET `claimed` = `claimed` + 1, `updated_at` = NEW.`created_at`
  WHERE `offer_code` = NEW.`offer_code`;
END;
