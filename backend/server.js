import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});