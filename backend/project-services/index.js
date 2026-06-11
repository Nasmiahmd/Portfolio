import express from "express";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
const app = express();

dotenv.config()

connectdb().then(()=>{
    app.listen(5001, () => {
        console.log("Server Started");
    })
})

