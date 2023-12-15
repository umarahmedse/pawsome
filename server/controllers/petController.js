import petModel from "../models/petModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { v2 as cloudinary } from "cloudinary";
export const getAllPets = catchAsync(async (req, res, next) => {
  const petsData = await petModel.find();
  if (!petsData) {
    return next(new AppError("No pets exist in database", 401));
  }
  res.status(200).json({
    status: "success",
    petsData,
  });
});

export const addPet = catchAsync(async (req, res, next) => {
  const bodyData = req.body;
  const petsData = await petModel.create(bodyData);
  res.status(200).json({
    status: "success",
    petsData,
  });
});
