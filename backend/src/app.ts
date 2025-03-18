import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/studentRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/students', studentRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});