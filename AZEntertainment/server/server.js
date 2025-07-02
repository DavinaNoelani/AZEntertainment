const express = require('express'); // ✅ No errors
const cors = require('cors');
const connectDB = require('./config/db.js');
const eventRoutes = require('./routes/eventRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const yoloRoutes = require('./routes/yoloRoutes.js');
// yolo server stuff / route stuff

const dotenv = require('dotenv');
dotenv.config();

(async () => {
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
    app.use((err, _, res, __) => {
        console.error(err.stack);
        res.status(500).json({ message: 'Something went wrong!' });
    });

    app.listen(port, () => console.log(`Server is running on port ${port}`));
})();
