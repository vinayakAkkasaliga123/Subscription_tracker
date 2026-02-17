import express from 'express'
const app = express()

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionsRouter from './routes/subscriptions.routes.js';
import connectToDatabase from './database/mongodb.js';

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionsRouter);

app.get('/',(req,res)=>{
    res.send("Welcome to Subscription tracker API ");
});

app.listen(PORT, async()=>{
    console.log(`server running on http://localhost:${PORT}`)
    connectToDatabase();
})

export default app 
