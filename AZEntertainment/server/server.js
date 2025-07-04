import express from 'express';
import eventRoutes from './routes/eventRoutes.js';
import userRoutes from './routes/userRoutes.js';
import yoloRoutes from './routes/yoloRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/api/event', eventRoutes);
app.use('/api/user', userRoutes);
app.use('/api/yolo', yoloRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
