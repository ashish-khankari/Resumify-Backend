import mongoose from "mongoose";
import { MONGO_URI } from "../config/envConfig";

mongoose.connect(MONGO_URI);

const userSchema = new mongoose.Schema({
    
})