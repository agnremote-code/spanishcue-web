import {
  ClassRecord,
  ClassRecordInput,
  DuplicateRecordError,
  NotFoundError,
  ValidationError,
  Student,
  parseClassRecordInput,
  parseClassRecordPatch,
  parseStudentInput,
  parseStudentPatch,
  requireOwnerId,
} from './contracts';

export interface StudentTrackerRepository {
  listStudents(ownerId: string): Promise<Student[]>;
  getStudent(ownerId: string, id: string): Promise<Student | null>;
  insertStudent(student: Student): Promise<Student>;
  updateStudent(ownerId: string, id: string, patch: Partial<Student>): Promise<Student | null>;
  deleteStudent(ownerId: string, id: string): Promise<boolean>;
  listClassRecords(ownerId: string, studentId?: string): Promise<ClassRecord[]>;
  getClassRecord(ownerId: string, id: string): Promise<ClassRecord | null>;
  findClassRecordByRequestKey(ownerId: string, requestKey: string): Promise<ClassRecord | null>;
  findProbableDuplicate(ownerId: string, input: Required<ClassRecordInput>): Promise<ClassRecord | null>;
  insertClassRecord(record: ClassRecord): Promise<ClassRecord>;
  updateClassRecord(ownerId: string, id: string, patch: Partial<ClassRecord>): Promise<ClassRecord | null>;
  deleteClassRecord(ownerId: string, id: string): Promise<boolean>;
}

type ServiceOptions = { now?: () => string; id?: () => string; lessonIds?: Iterable<number> };

const csvCell = (value: unknown): string => {
  let text = value == null ? '' : String(value);
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
};

export class StudentTrackerService {
  private readonly now: () => string;
  private readonly id: () => string;
  private readonly lessonIds: Set<number>;

  constructor(private readonly repository: StudentTrackerRepository, options: ServiceOptions = {}) {
    this.now = options.now || (() => new Date().toISOString());
    this.id = options.id || (() => crypto.randomUUID());
    this.lessonIds = new Set(options.lessonIds || []);
  }

  async listStudents(owner: string): Promise<Student[]> {
    const ownerId = requireOwnerId(owner);
    return this.repository.listStudents(ownerId);
  }

  async createStudent(owner: string, raw: unknown): Promise<Student> {
    const ownerId = requireOwnerId(owner);
    const input = parseStudentInput(raw);
    const timestamp = this.now();
    return this.repository.insertStudent({ id: this.id(), ownerId, ...input, createdAt: timestamp, updatedAt: timestamp });
  }

  async updateStudent(owner: string, id: string, raw: unknown): Promise<Student> {
    const ownerId = requireOwnerId(owner);
    if (!(await this.repository.getStudent(ownerId, id))) throw new NotFoundError();
    const result = await this.repository.updateStudent(ownerId, id, { ...parseStudentPatch(raw), updatedAt: this.now() });
    if (!result) throw new NotFoundError();
    return result;
  }

  async deleteStudent(owner: string, id: string): Promise<void> {
    const ownerId = requireOwnerId(owner);
    if (!(await this.repository.deleteStudent(ownerId, id))) throw new NotFoundError();
  }

  async listClassRecords(owner: string, studentId?: string): Promise<ClassRecord[]> {
    const ownerId = requireOwnerId(owner);
    if (studentId && !(await this.repository.getStudent(ownerId, studentId))) throw new NotFoundError();
    return this.repository.listClassRecords(ownerId, studentId);
  }

  async createClassRecord(owner: string, raw: unknown, options: { allowDuplicate?: boolean } = {}): Promise<ClassRecord> {
    const ownerId = requireOwnerId(owner);
    const input = parseClassRecordInput(raw);
    if (input.lessonId !== null && !this.lessonIds.has(input.lessonId)) throw new ValidationError('La clase SpanishCue no existe.');
    if (!(await this.repository.getStudent(ownerId, input.studentId))) throw new NotFoundError();
    const retried = await this.repository.findClassRecordByRequestKey(ownerId, input.requestKey);
    if (retried) return retried;
    const duplicate = await this.repository.findProbableDuplicate(ownerId, input);
    if (duplicate && !options.allowDuplicate) throw new DuplicateRecordError(duplicate.id);
    const timestamp = this.now();
    return this.repository.insertClassRecord({ id: this.id(), ownerId, ...input, createdAt: timestamp, updatedAt: timestamp });
  }

  async updateClassRecord(owner: string, id: string, raw: unknown): Promise<ClassRecord> {
    const ownerId = requireOwnerId(owner);
    const current = await this.repository.getClassRecord(ownerId, id);
    if (!current) throw new NotFoundError();
    const patch = parseClassRecordPatch(raw);
    const validated = parseClassRecordInput({ ...current, ...patch, requestKey: current.requestKey });
    if (validated.lessonId !== null && !this.lessonIds.has(validated.lessonId)) throw new ValidationError('La clase SpanishCue no existe.');
    const normalizedPatch = Object.fromEntries(
      Object.keys(patch).map((key) => [key, validated[key as keyof typeof validated]])
    ) as Partial<ClassRecord>;
    if (validated.studentId !== current.studentId && !(await this.repository.getStudent(ownerId, validated.studentId))) throw new NotFoundError();
    const result = await this.repository.updateClassRecord(ownerId, id, { ...normalizedPatch, updatedAt: this.now() });
    if (!result) throw new NotFoundError();
    return result;
  }

  async deleteClassRecord(owner: string, id: string): Promise<void> {
    const ownerId = requireOwnerId(owner);
    if (!(await this.repository.deleteClassRecord(ownerId, id))) throw new NotFoundError();
  }

  async exportCsv(owner: string): Promise<string> {
    const ownerId = requireOwnerId(owner);
    const [students, records] = await Promise.all([
      this.repository.listStudents(ownerId),
      this.repository.listClassRecords(ownerId),
    ]);
    const rows: unknown[][] = [['student_alias', 'last_name', 'email', 'level', 'goal', 'student_status', 'class_date', 'timezone', 'duration_minutes', 'class_status', 'lesson_id', 'free_title', 'pedagogical_note', 'next_step']];
    for (const student of students) {
      const history = records.filter((record) => record.studentId === student.id);
      if (!history.length) rows.push([student.alias, student.lastName, student.email, student.level, student.goal, student.status, '', '', '', '', '', '', '', '']);
      for (const record of history) rows.push([
        student.alias, student.lastName, student.email, student.level, student.goal, student.status,
        record.startsAt, record.timezone, record.durationMinutes, record.status, record.lessonId,
        record.freeTitle, record.pedagogicalNote, record.nextStep,
      ]);
    }
    return '\uFEFF' + rows.map((row) => row.map(csvCell).join(',')).join('\r\n');
  }
}
