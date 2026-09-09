CREATE TABLE `offer_settings` (
	`id` integer PRIMARY KEY NOT NULL,
	`base_cents` integer NOT NULL,
	`discount_percent` integer NOT NULL,
	`months` integer NOT NULL,
	`max_teachers` integer NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL
);
