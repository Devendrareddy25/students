import React, { useEffect, useState } from 'react';

const StudentList: React.FC = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Student Marks</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name}: {student.marks}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;