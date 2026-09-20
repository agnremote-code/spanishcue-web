import { env } from 'cloudflare:workers';
import type { ClassRecord, Student } from '../app/student-tracker/contracts';
import { StudentTrackerService, type StudentTrackerRepository } from '../app/student-tracker/service';
import { lessons } from '../app/lesson-catalog';

type StudentRow = {
  id: string; owner_id: string; alias: string; last_name: string | null; email: string | null;
  level: Student['level'] | 'A0'; goal: string; status: Student['status']; created_at: string; updated_at: string;
  last_class_at?: string | null;
};
type ClassRow = {
  id: string; owner_id: string; student_id: string; lesson_id: number | null; free_title: string | null;
  starts_at: string; timezone: string; duration_minutes: number | null; status: ClassRecord['status'];
  pedagogical_note: string; next_step: string; request_key: string; created_at: string; updated_at: string;
};

const studentFromRow = (row: StudentRow): Student => ({
  id: row.id, ownerId: row.owner_id, alias: row.alias, lastName: row.last_name, email: row.email,
  level: row.level === 'A0' ? 'A1' : row.level,
  goal: row.goal, status: row.status, createdAt: row.created_at, updatedAt: row.updated_at,
  lastClassAt: row.last_class_at ?? null,
});
const classFromRow = (row: ClassRow): ClassRecord => ({
  id: row.id, ownerId: row.owner_id, studentId: row.student_id, lessonId: row.lesson_id, freeTitle: row.free_title,
  startsAt: row.starts_at, timezone: row.timezone, durationMinutes: row.duration_minutes, status: row.status,
  pedagogicalNote: row.pedagogical_note, nextStep: row.next_step, requestKey: row.request_key,
  createdAt: row.created_at, updatedAt: row.updated_at,
});

export class D1StudentTrackerRepository implements StudentTrackerRepository {
  constructor(private readonly db: D1Database) {}

  async listStudents(ownerId: string): Promise<Student[]> {
    const result = await this.db.prepare(`SELECT students.*, MAX(class_records.starts_at) AS last_class_at
      FROM students LEFT JOIN class_records ON class_records.student_id = students.id AND class_records.owner_id = students.owner_id
      WHERE students.owner_id = ? GROUP BY students.id ORDER BY students.status ASC, students.alias COLLATE NOCASE ASC`).bind(ownerId).all<StudentRow>();
    return result.results.map(studentFromRow);
  }
  async getStudent(ownerId: string, id: string): Promise<Student | null> {
    const row = await this.db.prepare('SELECT * FROM students WHERE owner_id = ? AND id = ? LIMIT 1').bind(ownerId, id).first<StudentRow>();
    return row ? studentFromRow(row) : null;
  }
  async insertStudent(student: Student): Promise<Student> {
    await this.db.prepare(`INSERT INTO students (id, owner_id, alias, last_name, email, level, goal, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
      student.id, student.ownerId, student.alias, student.lastName, student.email, student.level, student.goal,
      student.status, student.createdAt, student.updatedAt,
    ).run();
    return student;
  }
  async updateStudent(ownerId: string, id: string, patch: Partial<Student>): Promise<Student | null> {
    const current = await this.getStudent(ownerId, id);
    if (!current) return null;
    const next = { ...current, ...patch };
    const result = await this.db.prepare(`UPDATE students SET alias = ?, last_name = ?, email = ?, level = ?, goal = ?, status = ?, updated_at = ?
      WHERE owner_id = ? AND id = ?`).bind(
      next.alias, next.lastName, next.email, next.level, next.goal, next.status, next.updatedAt, ownerId, id,
    ).run();
    return result.meta.changes ? next : null;
  }
  async deleteStudent(ownerId: string, id: string): Promise<boolean> {
    const result = await this.db.prepare('DELETE FROM students WHERE owner_id = ? AND id = ?').bind(ownerId, id).run();
    return result.meta.changes > 0;
  }
  async listClassRecords(ownerId: string, studentId?: string): Promise<ClassRecord[]> {
    const statement = studentId
      ? this.db.prepare('SELECT * FROM class_records WHERE owner_id = ? AND student_id = ? ORDER BY starts_at DESC').bind(ownerId, studentId)
      : this.db.prepare('SELECT * FROM class_records WHERE owner_id = ? ORDER BY starts_at DESC').bind(ownerId);
    const result = await statement.all<ClassRow>();
    return result.results.map(classFromRow);
  }
  async getClassRecord(ownerId: string, id: string): Promise<ClassRecord | null> {
    const row = await this.db.prepare('SELECT * FROM class_records WHERE owner_id = ? AND id = ? LIMIT 1').bind(ownerId, id).first<ClassRow>();
    return row ? classFromRow(row) : null;
  }
  async findClassRecordByRequestKey(ownerId: string, requestKey: string): Promise<ClassRecord | null> {
    const row = await this.db.prepare('SELECT * FROM class_records WHERE owner_id = ? AND request_key = ? LIMIT 1').bind(ownerId, requestKey).first<ClassRow>();
    return row ? classFromRow(row) : null;
  }
  async findProbableDuplicate(ownerId: string, input: Parameters<StudentTrackerRepository['findProbableDuplicate']>[1]): Promise<ClassRecord | null> {
    const row = await this.db.prepare(`SELECT * FROM class_records WHERE owner_id = ? AND student_id = ? AND starts_at = ?
      AND COALESCE(lesson_id, 0) = COALESCE(?, 0) AND COALESCE(free_title, '') = COALESCE(?, '') LIMIT 1`).bind(
      ownerId, input.studentId, input.startsAt, input.lessonId, input.freeTitle,
    ).first<ClassRow>();
    return row ? classFromRow(row) : null;
  }
  async insertClassRecord(record: ClassRecord): Promise<ClassRecord> {
    try {
      await this.db.prepare(`INSERT INTO class_records (id, owner_id, student_id, lesson_id, free_title, starts_at, timezone,
        duration_minutes, status, pedagogical_note, next_step, request_key, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
        record.id, record.ownerId, record.studentId, record.lessonId, record.freeTitle, record.startsAt, record.timezone,
        record.durationMinutes, record.status, record.pedagogicalNote, record.nextStep, record.requestKey,
        record.createdAt, record.updatedAt,
      ).run();
      return record;
    } catch (error) {
      const existing = await this.findClassRecordByRequestKey(record.ownerId, record.requestKey);
      if (existing) return existing;
      throw error;
    }
  }
  async updateClassRecord(ownerId: string, id: string, patch: Partial<ClassRecord>): Promise<ClassRecord | null> {
    const current = await this.getClassRecord(ownerId, id);
    if (!current) return null;
    const next = { ...current, ...patch };
    const result = await this.db.prepare(`UPDATE class_records SET student_id = ?, lesson_id = ?, free_title = ?, starts_at = ?, timezone = ?,
      duration_minutes = ?, status = ?, pedagogical_note = ?, next_step = ?, updated_at = ? WHERE owner_id = ? AND id = ?`).bind(
      next.studentId, next.lessonId, next.freeTitle, next.startsAt, next.timezone, next.durationMinutes, next.status,
      next.pedagogicalNote, next.nextStep, next.updatedAt, ownerId, id,
    ).run();
    return result.meta.changes ? next : null;
  }
  async deleteClassRecord(ownerId: string, id: string): Promise<boolean> {
    const result = await this.db.prepare('DELETE FROM class_records WHERE owner_id = ? AND id = ?').bind(ownerId, id).run();
    return result.meta.changes > 0;
  }
}

export function getStudentTrackerService(): StudentTrackerService {
  const db = (env as { DB?: D1Database }).DB;
  if (!db) throw new Error('Cloudflare D1 binding `DB` is unavailable.');
  return new StudentTrackerService(new D1StudentTrackerRepository(db), { lessonIds: lessons.map((lesson) => lesson.id) });
}
