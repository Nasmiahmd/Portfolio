import express from "express";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js"
import cors from "cors";
import dns from "dns/promises";

dns.setServers(["1.1.1.1"]);

const app = express();

dotenv.config()

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: 'http://localhost:5173'
    })); // Allow fetch data from backend to frontend
}

app.use(express.json());

app.use("/api", projectRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectdb().then(()=>{
    app.listen(5001, () => {
        console.log("Server Started");
    })
});

