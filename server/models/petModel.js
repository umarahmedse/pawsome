import mongoose from "mongoose";
import AppError from "../utils/appError.js";
const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    petImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    petDescription: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
PetSchema.pre("save", async function (next) {
  const existingPet = await this.constructor.findOne({
    petName: this.userId,
  });

  if (existingPet && !existingPet._id.equals(this._id)) {
    // If a duplicate booking is found for the same user and course, prevent saving
    const error = new AppError("Pet Already In Catalogue", 404);
    return next(error);
  }

  next();
});
const petModel = mongoose.model("Pets", PetSchema);
export default petModel;
