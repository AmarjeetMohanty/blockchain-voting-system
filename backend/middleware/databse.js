import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@voting.hyxer4h.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;