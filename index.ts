import express from "express";
import router from "./routes/authRoutes";
import cookieParser from "cookie-parser"
const app = express();
const PORT: number = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use( "/api/auth", router);
app.listen(PORT, () => {
    try {
        console.log("Server is running");
    } catch (error) {
        console.log("Error Starting Server");
    }
});