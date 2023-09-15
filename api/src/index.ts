import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import authRouter from './routers/auth.router';
import "reflect-metadata";

const app = express();
app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Router
app.use("/api/v1/auth", authRouter);

const port: string | undefined = process.env.PORT;


const connect = async() =>  {
    try {
        app.listen(port, () => console.log(`Server listen app from http://locahost:${port}`));
    } catch (error) {
        console.log("Mongoose Db connected failure");
        console.log(error);
    }
}

connect();