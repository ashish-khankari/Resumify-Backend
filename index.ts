import express from "express";
import router from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import postsRouter from "./routes/postRoutes";
import multer from "multer";
import fileRouter from "./routes/uploadFiles";
import mongoose from "mongoose";
import { MONGO_URI } from "./config/envConfig";

const upload = multer({ dest: "uploads/" });
const app = express();
const PORT: number = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routers
app.use("/api/auth", router);
app.use("/api/post", postsRouter);
app.use("/api/file", fileRouter);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");

    // Start server only after DB connection
    app.listen(Number(PORT) || 3000, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
  });

// app.listen(PORT, () => {
//   try {
//     console.log("Server is running");
//   } catch (error) {
//     console.log("Error Starting Server");
//   }
// });
