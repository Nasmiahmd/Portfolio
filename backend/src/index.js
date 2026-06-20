import express from "express";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import cors from "cors";
import dns from "dns/promises";
import path from "path";

dns.setServers(["1.1.1.1"]);

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: 'http://localhost:5173'
    })); 
}

app.use(express.json());
app.use("/api", projectRoutes);

// Production setup
if (process.env.NODE_ENV === "production") {
    // Changed "../frontend/dist" to "./frontend/dist" since __dirname is the project root
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*any", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started on port ${PORT}`);
    });
});