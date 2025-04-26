import mongoose from 'mongoose';
import { MONGO_URI } from '../config/envConfig';

mongoose.connect(MONGO_URI);

const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  path: String,
  size: Number,
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const fileModel = mongoose.model("files", fileSchema);
export default fileModel;