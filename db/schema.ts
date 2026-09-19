import { foreignKey, index, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';
export const offerSettings=sqliteTable('offer_settings',{
 id:integer('id').primaryKey(),baseCents:integer('base_cents').notNull(),discountPercent:integer('discount_percent').notNull(),months:integer('months').notNull(),maxTeachers:integer('max_teachers').notNull(),revision:integer('revision').notNull().default(1)
});

export const students = sqliteTable('students', {
  id: text('id').primaryKey(),
  ownerId: text('owner_id').notNull(),
  alias: text('alias').notNull(),
  lastName: text('last_name'),
  email: text('email'),
  level: text('level').notNull(),
  goal: text('goal').notNull().default(''),
  status: text('status').notNull().default('active'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => [
  uniqueIndex('students_id_owner_unique').on(table.id, table.ownerId),
  index('students_owner_status_idx').on(table.ownerId, table.status, table.updatedAt),
]);

export const classRecords = sqliteTable('class_records', {
  id: text('id').primaryKey(),
  ownerId: text('owner_id').notNull(),
  studentId: text('student_id').notNull(),
  lessonId: integer('lesson_id'),
  freeTitle: text('free_title'),
  startsAt: text('starts_at').notNull(),
  timezone: text('timezone').notNull(),
  durationMinutes: integer('duration_minutes'),
  status: text('status').notNull(),
  pedagogicalNote: text('pedagogical_note').notNull().default(''),
  nextStep: text('next_step').notNull().default(''),
  requestKey: text('request_key').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
}, (table) => [
  foreignKey({
    columns: [table.studentId, table.ownerId],
    foreignColumns: [students.id, students.ownerId],
  }).onDelete('cascade'),
  uniqueIndex('class_records_owner_request_key_unique').on(table.ownerId, table.requestKey),
  index('class_records_owner_student_date_idx').on(table.ownerId, table.studentId, table.startsAt),
  index('class_records_owner_date_idx').on(table.ownerId, table.startsAt),
]);
