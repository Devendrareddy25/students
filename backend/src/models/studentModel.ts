export class StudentModel {
    id: number;
    name: string;
    marks: number;

    constructor(id: number, name: string, marks: number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    static getSchema() {
        return {
            id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
            name: 'TEXT NOT NULL',
            marks: 'INTEGER NOT NULL'
        };
    }

    static async findAll(db: any) {
        const query = 'SELECT * FROM students';
        const result = await db.all(query);
        return result.map((row: any) => new StudentModel(row.id, row.name, row.marks));
    }

    static async findById(db: any, id: number) {
        const query = 'SELECT * FROM students WHERE id = ?';
        const row = await db.get(query, [id]);
        return row ? new StudentModel(row.id, row.name, row.marks) : null;
    }

    static async create(db: any, student: StudentModel) {
        const query = 'INSERT INTO students (name, marks) VALUES (?, ?)';
        const result = await db.run(query, [student.name, student.marks]);
        return new StudentModel(result.lastID, student.name, student.marks);
    }

    static async update(db: any, student: StudentModel) {
        const query = 'UPDATE students SET name = ?, marks = ? WHERE id = ?';
        await db.run(query, [student.name, student.marks, student.id]);
        return student;
    }
}