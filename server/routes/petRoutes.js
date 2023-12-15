import express from "express";
import { getAllPets,addPet } from "../controllers/petController.js";
const router = express.Router();

router.get("/get-all-pets", getAllPets);
router.post("/add-a-pet", addPet)
export default router;
