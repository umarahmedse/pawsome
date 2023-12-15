import express from "express";
import bodyParser from "body-parser";
import AppError from "./utils/appError.js";
import ExpressMongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import globalErrorHandler from "./utils/errorHandler.js";
import petRoutes from "./routes/petRoutes.js";
const limiter = rateLimit({
  max: 100, // Maximum requests per windowMs
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP - Please try again in an hour",
});

dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(limiter);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(ExpressMongoSanitize());
app.use(xss());
app.use(hpp());
/* ROUTES */
app.use("/pets", petRoutes);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);
export default app;
