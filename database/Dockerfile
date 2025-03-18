FROM postgres:13

ENV POSTGRES_DB=students_marks_db
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123

COPY init.sql /docker-entrypoint-initdb.d/