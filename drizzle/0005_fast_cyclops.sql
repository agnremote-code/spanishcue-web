DROP TRIGGER `founder_assignments_increment_claimed`;--> statement-breakpoint
DROP INDEX `founder_assignments_user_offer_unique`;--> statement-breakpoint
DROP INDEX `founder_assignments_subscription_unique`;--> statement-breakpoint
DROP INDEX `founder_assignments_offer_number_unique`;--> statement-breakpoint
ALTER TABLE `founder_assignments` ADD `environment` text DEFAULT 'sandbox' NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `founder_assignments_user_offer_unique` ON `founder_assignments` (`environment`,`user_id`,`offer_code`);--> statement-breakpoint
CREATE UNIQUE INDEX `founder_assignments_subscription_unique` ON `founder_assignments` (`environment`,`subscription_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `founder_assignments_offer_number_unique` ON `founder_assignments` (`environment`,`offer_code`,`founder_number`);--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_founder_offer_state` (
	`environment` text DEFAULT 'sandbox' NOT NULL,
	`offer_code` text NOT NULL,
	`limit` integer NOT NULL,
	`claimed` integer DEFAULT 0 NOT NULL,
	`enabled` integer DEFAULT 1 NOT NULL,
	`updated_at` integer NOT NULL,
	PRIMARY KEY(`environment`, `offer_code`)
);
--> statement-breakpoint
INSERT INTO `__new_founder_offer_state`("environment", "offer_code", "limit", "claimed", "enabled", "updated_at") SELECT 'sandbox', "offer_code", "limit", "claimed", "enabled", "updated_at" FROM `founder_offer_state`;--> statement-breakpoint
DROP TABLE `founder_offer_state`;--> statement-breakpoint
ALTER TABLE `__new_founder_offer_state` RENAME TO `founder_offer_state`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TRIGGER `founder_assignments_increment_claimed`
AFTER INSERT ON `founder_assignments`
BEGIN
  UPDATE `founder_offer_state`
  SET `claimed` = `claimed` + 1, `updated_at` = NEW.`created_at`
  WHERE `environment` = NEW.`environment` AND `offer_code` = NEW.`offer_code`;
END;
