import mongoose from "mongoose";
import { MONGO_URI } from "../config/envConfig";

mongoose.connect(MONGO_URI);

const postsSchema = new mongoose.Schema(
  {
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    post: {
      title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      isLiked: {
        type: Boolean,
        require: true,
      },
      likesCount: {
        type: Number,
      },
      comments: {
        type: String,
      },
      commentsCount: {
        type: Number,
      }
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("posts", postsSchema);
export default postModel;
