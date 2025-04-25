import { Request, Response } from "express";
import postModel from "../../models/posts";
import { apiStatusRes } from "../../utils/errorFunction";
import errorStatus from "../../config/data";
import userModel from "../../models/user";
import { createPostType } from "../../types/globalTypes";

const createPost = async (req: Request, res: Response) => {
  const { title, description, userID } = req.body;
  try {
    const users = await userModel.findById(userID);
    if (!users) {
      return apiStatusRes(res, {
        status: errorStatus.notFound,
        message: "User not found",
      });
    }
    const posts = await postModel.create({
      created_by: users,
      post: {
        title: title,
        description: description,
      },
    });
    await posts.save();
    return apiStatusRes(res, {
      status: errorStatus.success,
      message: "Post created Successfully",
      res: posts,
    });
  } catch (error) {
    return apiStatusRes(res, {
      status: errorStatus.serverError,
      message: "Server Error",
    });
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const appPosts = await postModel.find().populate("created_by");
    if (appPosts) {
      return apiStatusRes(res, {
        status: errorStatus.success,
        message: "Posts Fetched Successfully",
        res: appPosts,
      });
    } else {
      return apiStatusRes(res, {
        status: errorStatus.invalidRequest,
        message: "Posts Fetched Successfully",
      });
    }
  } catch (error) {
    return apiStatusRes(res, {
      status: errorStatus.serverError,
      message: "Server Error",
    });
  }
};

const deletePost = async (req: Request, res: Response) => {
  const { postID } = req.query;
  try {
    if (postID) {
      await postModel.findByIdAndDelete(postID);
      return apiStatusRes(res, {
        status: errorStatus.success,  
        message: "Post Deleted Successfully",
      });
    } else {
      return apiStatusRes(res, {
        status: errorStatus.notFound,
        message: "Invalid User",
      });
    }
  } catch (error: any) {
    return apiStatusRes(res, {
      status: errorStatus.serverError,
      message: error.message,
    });
  }
};

const updatePost = async (req: Request, res:Response) => {
  const {title, description, postID} = req.query;
  try {
    const updatePost = await postModel.findByIdAndUpdate(postID);
    console.log("updatePost", updatePost);
  } catch (error) {
    console.log("error", error);
    
  }
}

export default {
  createPost,
  getAllPosts,
  deletePost,
  updatePost
};
