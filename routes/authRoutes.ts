import express  from 'express';
const router = express.Router();
import userController from "../controller/authController/authController"; 
import { authorization } from '../middleware/authMiddleware';

router.post("/register", userController.registerUser);
router.get("/login", userController.loginUser);
router.get("/logout", authorization, userController.logoutUser)

export default router;
