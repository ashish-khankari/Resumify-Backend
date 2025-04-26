import express from "express";
import router from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import postsRouter from "./routes/postRoutes";
import multer from "multer";
import fileRouter from "./routes/uploadFiles";
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./config/envConfig";
import dotenv from 'dotenv';

dotenv.config();
const upload = multer({ dest: "uploads/" });
const app = express();
// const PORT: number = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routers
app.use("/api/auth", router);
app.use("/api/post", postsRouter);
app.use("/api/file", fileRouter);

const port = process.env.PORT || 3000;
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");

    // Start server only after DB connection
    app.listen(Number(port), () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
  });

// app.listen(port, () => {
//   try {
//     console.log("Server is running");
//   } catch (error) {
//     console.log("Error Starting Server");
//   }
// });
