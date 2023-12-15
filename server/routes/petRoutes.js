import express from "express";
import { getAllPets, addPet, deletePet } from "../controllers/petController.js";
const router = express.Router();

router.get("/get-all-pets", getAllPets);
router.post("/add-a-pet", addPet);
router.delete("/delete-a-pet", deletePet);

export default router;
