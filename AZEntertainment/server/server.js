import express from 'express';
import eventRoutes from './routes/eventRoutes.js';
import userRoutes from './routes/userRoutes.js';
import yoloRoutes from './routes/yoloRoutes.js';

import connectDB from './config/db.js';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/event', eventRoutes);
app.use('/api/user', userRoutes);
app.use('/api/yolo', yoloRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
