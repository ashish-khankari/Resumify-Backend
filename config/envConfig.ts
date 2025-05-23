import dotenv from 'dotenv';

dotenv.config();
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET || "default-secret";
export const MONGO_URI = process.env.MONGO_URI || "";
export const NODE_ENV = process.env.NODE_ENV || "development";
