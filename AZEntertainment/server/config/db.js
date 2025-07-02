import mongoose from 'mongoose';
import config from 'config';
import 'colors';

const db = config.get('mongoURI');

const connectDB = async () => {
    try {

        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB is Connected...'.rainbow);

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

}

export default connectDB;
