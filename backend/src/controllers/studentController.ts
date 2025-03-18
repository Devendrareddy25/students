export class StudentController {
    private students: any[] = [];

    public getAllStudents(req: any, res: any) {
        res.json(this.students);
    }

    public getStudentById(req: any, res: any) {
        const studentId = parseInt(req.params.id);
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Student not found');
        }
    }

    public createStudent(req: any, res: any) {
        const newStudent = req.body;
        newStudent.id = this.students.length + 1; // Simple ID assignment
        this.students.push(newStudent);
        res.status(201).json(newStudent);
    }

    public updateStudent(req: any, res: any) {
        const studentId = parseInt(req.params.id);
        const index = this.students.findIndex(s => s.id === studentId);
        if (index !== -1) {
            this.students[index] = { ...this.students[index], ...req.body };
            res.json(this.students[index]);
        } else {
            res.status(404).send('Student not found');
        }
    }
}