import mongoose from "mongoose";
import { MONGO_URI } from "../config/envConfig";

mongoose.connect(MONGO_URI);
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    workExperience: {
        type: String,
        require: true,
    },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;