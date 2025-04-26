import express  from 'express';
const postsRouter = express.Router();
import postsController from '../controller/postsController/postsController';
import { authorization } from '../middleware/authMiddleware';

postsRouter.post("/createPost", authorization, postsController.createPost);
postsRouter.get('/getPosts', authorization, postsController.getAllPosts);
postsRouter.delete('/deletePost', authorization, postsController.deletePost);
postsRouter.post('/updatePost', authorization, postsController.updatePost);


export default postsRouter;
