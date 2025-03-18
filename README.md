# Students Marks Application

This project is a full-stack application that allows users to manage student marks. It consists of a backend built with TypeScript and Express, a frontend built with React, and a database to store student information.

## Project Structure

```
students-marks-app
├── backend                # Backend application
│   ├── src
│   │   ├── controllers    # Controller for handling requests
│   │   ├── models         # Model for database interaction
│   │   ├── routes         # Routes for API endpoints
│   │   └── app.ts         # Entry point for the backend
│   ├── package.json       # Backend dependencies
│   ├── tsconfig.json      # TypeScript configuration for backend
│   └── Dockerfile         # Dockerfile for backend
├── frontend               # Frontend application
│   ├── src
│   │   ├── components      # React components
│   │   ├── App.tsx        # Main application component
│   │   └── index.tsx      # Entry point for the frontend
│   ├── package.json       # Frontend dependencies
│   ├── tsconfig.json      # TypeScript configuration for frontend
│   └── Dockerfile         # Dockerfile for frontend
├── database               # Database setup
│   ├── init.sql          # SQL commands for initializing the database
│   └── Dockerfile         # Dockerfile for database
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)

### Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd students-marks-app
   ```

2. **Build and run the application using Docker Compose:**
   ```
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: Open your browser and go to `http://localhost:3000`
   - Backend API: Access the API at `http://localhost:5000/api/students`

### Usage

- You can create, read, update, and delete student records through the frontend interface.
- The backend API handles all requests and interacts with the database to manage student data.

### Deployment

This application can be deployed on AWS ECS using Docker. Ensure that you have the necessary configurations for your ECS cluster and task definitions.

### License

This project is licensed under the MIT License. See the LICENSE file for details.