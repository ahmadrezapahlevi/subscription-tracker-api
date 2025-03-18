import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if (!DB_URI) {
  throw new Error('mohon periksa MONGODB_URI enviroment variable di dalam .env.<development/production>.local')
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    
    console.log(`terhubung ke database di ${NODE_ENV} mode`);
  } catch (error) {
    console.error('gagal terhubung ke database: ', error);
    
    process.exit(1);
  }
}

export default connectToDatabase;