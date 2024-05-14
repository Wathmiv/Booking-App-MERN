import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
(async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri) {
      await mongoose.connect(mongoUri);
      console.log('MongoDB connected!');
    } else {
      console.log('MONGO_URI not defined');
    }
  } catch (error) {
    console.log('MongoDB connection failed:', error);
  }
})();

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});