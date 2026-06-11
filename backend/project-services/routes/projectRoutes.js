import express from "express";
import { getAllProjects } from "../controller/projectController.js";

const router = express.Router();

router.get('/',getAllProjects);

export default router;