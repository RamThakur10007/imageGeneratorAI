import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/ImageZify`);

    console.log(`✅ MongoDB connected succesfully`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
