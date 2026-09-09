import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';
export const offerSettings=sqliteTable('offer_settings',{
 id:integer('id').primaryKey(),baseCents:integer('base_cents').notNull(),discountPercent:integer('discount_percent').notNull(),months:integer('months').notNull(),maxTeachers:integer('max_teachers').notNull(),revision:integer('revision').notNull().default(1)
});
