CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    marks INT NOT NULL
);

INSERT INTO students (name, marks) VALUES
('Alice', 85),
('Bob', 90),
('Charlie', 78),
('David', 92),
('Eva', 88);