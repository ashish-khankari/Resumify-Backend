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
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("posts", postsSchema);
export default postModel;
