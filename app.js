import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import  userRouter from './routes/user.routes.js'
import  authRouter from './routes/auth.routes.js'
import  subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'
import arcjetMiddleware from './middlewares/arcjet.middleware.js'
import workrouter from './routes/workflow.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workrouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('selamat datang di api reja');
})

app.listen(PORT, async () => {
  console.log(`server api berjalan di http://localhost:${ PORT }`);
  
  await connectToDatabase();
})
