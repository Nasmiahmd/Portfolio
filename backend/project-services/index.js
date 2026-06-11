import express from "express";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js"
import cors from "cors";

const app = express();

dotenv.config()

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/api", projectRoutes);




connectdb().then(()=>{
    app.listen(5001, () => {
        console.log("Server Started");
    })
});

