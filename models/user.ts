import mongoose from "mongoose";
import { MONGO_URI } from "../config/envConfig";

mongoose.connect(MONGO_URI);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        reuired: true
    },
    password: {
        tyoe: String,
        required: true
    },
    workExperience: {
        type: String,
        reuired: true,
    },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;