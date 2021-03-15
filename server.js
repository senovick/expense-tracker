import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/posts.js';

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
