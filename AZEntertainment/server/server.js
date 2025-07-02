// import express from 'express';
import cors from 'cors';
// import colors from 'colors';
import connectDB from './config/db.js';
import eventRoutes from './routes/eventRoutes.js';
import userRoutes from './routes/userRoutes.js';
import yoloRoutes from './routes/yoloRoutes.js';
// yolo server stuff / route stuff

import dotenv from 'dotenv';
dotenv.config();

try {
    await connectDB();
} catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
}

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/yolo', yoloRoutes);

// Error handling middleware
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
