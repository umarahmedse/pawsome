import express from "express";
import { getAllPets } from "../controllers/petController";
const router = express.Router();

router.get("/pets/get-all-pets", getAllPets);

export default router;
