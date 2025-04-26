import express from "express";
import router from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import postsRouter from "./routes/postRoutes";
import multer from "multer";
import fileRouter from "./routes/uploadFiles";

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

app.listen(PORT, () => {
  try {
    console.log("Server is running");
  } catch (error) {
    console.log("Error Starting Server");
  }
});
