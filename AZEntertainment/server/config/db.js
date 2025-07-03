import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI 

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
      }
    });
    console.log("✅ MongoDB connection established.".green.bold);
  } catch (err) {
    console.error("❌ MongoDB connection error:".red, err.message);
    process.exit(1); // Stop the app if DB fails
  }
};

export default connectDB;
