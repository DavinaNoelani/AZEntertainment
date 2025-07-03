import express from 'express';
import cors from 'cors';

import eventRoutes from './routes/eventRoutes.js';
import userRoutes from './routes/userRoutes.js';
import yoloRoutes from './routes/yoloRoutes.js';
import run from './config/db.js';

import dotenv from 'dotenv';
dotenv.config();

(async () => {
    try {
        await run();
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
    app.use((err, _, res, __) => {
        const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
        res.status(statusCode);
        res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        });
    });

    app.listen(port, () => console.log(`Server is running on port ${port}`));
})();
