import { Router } from 'express';
import StudentController from '../controllers/studentController';

const router = Router();
const studentController = new StudentController();

export function setRoutes(app) {
    app.use('/api/students', router);
    router.get('/', studentController.getAllStudents.bind(studentController));
    router.get('/:id', studentController.getStudentById.bind(studentController));
    router.post('/', studentController.createStudent.bind(studentController));
    router.put('/:id', studentController.updateStudent.bind(studentController));
}