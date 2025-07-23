import express from "express";
import router from "./routes/homeRoute.js";
import cors from "cors";
import { db } from "./utils/db.js";
import "./models/home.js";
const app=express();
app.use(cors())
app.use(express.json());
app.use(router)
const port=3000;
db.sync().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
})