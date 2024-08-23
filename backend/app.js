import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api.js';

dotenv.config();
const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

app.use('/api', apiRoutes)

mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        //LISTEN FOR REQUESTS
        // we chose port 4000, when it listens we fire function
        app.listen(process.env.APP_PORT, () => {
        console.log('connected to db and listening on port', process.env.APP_PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



app.use(cors({ origin: true }));

app.get('/', (req, res) => {
    res.json({"Hello": "World",
            "Version": 2})
})
