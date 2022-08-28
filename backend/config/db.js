import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DBconnection = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true, not supported in mongoose v6
    });
    console.log(`Database Connected: ${DBconnection.connection.host}`);
  } catch (error) {
    console.error(`Failed Connection: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
