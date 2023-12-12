import petModel from "../models/petModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllPets = catchAsync(async (req, res, next) => {
  console.log("first");
  const petsData = await petModel.find();
  if (!petsData) {
    return next(new AppError("No pets exist in database", 401));
  }
  res.status(200).json({
    status: "success",
    petsData,
  });
});
