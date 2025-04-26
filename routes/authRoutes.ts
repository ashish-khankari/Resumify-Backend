import express from 'express';
const router = express.Router();
import userController from "../controller/authController/authController";
import { authorization } from '../middleware/authMiddleware';
import multer from 'multer';
const upload = multer();

router.post("/register", upload.none(), userController.registerUser);
router.get("/login", upload.none(), userController.loginUser);
router.get("/logout", authorization, userController.logoutUser)

export default router;
