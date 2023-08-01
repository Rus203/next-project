import mongoose, { Mongoose} from 'mongoose';

let instance:Mongoose | undefined;

// singleton
export const connectDB = async (): Promise<Mongoose> => {
  if (instance) {
    return instance;
  }

  const mongoUri = process.env.MONGO_URI!;

  if (!mongoUri) {
    throw new Error('Set up mongo uri in env file');
  }
  
  const conn = await mongoose.connect(mongoUri);
  instance = conn;
  return conn;
};