import express from 'express';
import { authorization } from '../middleware/authMiddleware';
import multer from 'multer';
import fileController from '../controller/fileController/fileController';

const upload = multer({ dest: "uploads/" });

const fileRouter = express.Router();

fileRouter.post("/uploadFiles", authorization, upload.single("files"), fileController.uploadFiles);
export default fileRouter;
