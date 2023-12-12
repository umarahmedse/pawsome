import express from "express";
import { getAllPets } from "../controllers/petController.js";
const router = express.Router();

router.get("/get-all-pets", getAllPets);

export default router;
