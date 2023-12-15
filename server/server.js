import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http"; // Import http module
import app from "../server/index.js";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error) => console.log(error.message));

const port = process.env.PORT || 3000;
const server = http.createServer(app); // Create an http server

server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
