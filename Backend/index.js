import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import userRoutre from './route/user.route.js';
dotenv.config();
const port = process.env.PORT || 4000
const URI = process.env.MongodbURI;
//connect to mongodb
try {
    mongoose.connect(URI, {
    });
    console.log('Connected to MongoDB');
    
} catch (error) {
   console.log(error);
}

app.use(cors());
app.use(express.json());
//defining routes
app.use('/book', bookRoute);
app.use('/user', userRoutre);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})