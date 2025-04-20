import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { apiStatusRes } from '../utils/errorFunction';
import errorStatus from "../config/data";
import { JWT_SECRET } from '../config/envConfig';

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    console.log("token", token);

    if (!token) {
        return apiStatusRes(res, { status: errorStatus.accessDenied, message: "Access Denied" });
    };
    try {
        await jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        return apiStatusRes(res, { status: errorStatus.accessDenied, message: "Access Denied" });
    }
};

