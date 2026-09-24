CREATE TABLE `billing_purchase_claims` (
	`claim_id` text PRIMARY KEY NOT NULL,
	`claim_secret_hash` text NOT NULL,
	`environment` text NOT NULL,
	`provider` text,
	`offer_code` text NOT NULL,
	`return_to` text NOT NULL,
	`status` text DEFAULT 'started' NOT NULL,
	`checkout_request_id` text,
	`approval_url` text,
	`buyer_email` text,
	`normalized_email` text,
	`provider_customer_id` text,
	`provider_subscription_id` text,
	`provider_payment_id` text,
	`provider_event_id` text,
	`provider_status` text,
	`amount_cents` integer,
	`currency` text,
	`paid_through` integer,
	`paid_at` integer,
	`claimed_user_id` text,
	`claimed_at` integer,
	`expires_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`claimed_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `billing_purchase_claims_subscription_unique` ON `billing_purchase_claims` (`provider`,`environment`,`provider_subscription_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `billing_purchase_claims_payment_unique` ON `billing_purchase_claims` (`provider`,`environment`,`provider_payment_id`);--> statement-breakpoint
CREATE INDEX `billing_purchase_claims_expiry_idx` ON `billing_purchase_claims` (`status`,`expires_at`);