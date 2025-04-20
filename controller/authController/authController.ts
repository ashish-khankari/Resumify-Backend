import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../models/user";
import { apiStatusRes } from "../../utils/errorFunction";
import errorStatus from "../../config/data";
import { JWT_SECRET } from "../../config/envConfig";

const invalid_Request = errorStatus.invalidRequest;
const server_Error = errorStatus.serverError;
const success = errorStatus.success;
const not_found = errorStatus.notFound;

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password, workExperience } = req.body;
  try {
    let salt: string = await bcrypt.genSalt(10);
    let hash: string = await bcrypt.hash(password, salt);
    const isRegistered = await userModel.findOne({ email });
    if (isRegistered) {
      return apiStatusRes(res, {
        status: invalid_Request,
        message: "User already registered",
      });
    } else {
      await userModel.create({
        username,
        email,
        password: hash,
        workExperience,
      });
      return apiStatusRes(res, {
        status: success,
        message: "User Registerd Successfully",
      });
    }
  } catch (error) {
    return apiStatusRes(res, { status: server_Error, message: "Server Error" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const validatePassword = user?.password
      ? await bcrypt.compare(password, user.password)
      : false;
    const validateEmail = email === user?.email;
    const token = await jwt.sign({ email }, JWT_SECRET);
    res.cookie("access_token", token);

    if (validateEmail && validatePassword) {
      return apiStatusRes(res, {
        status: success,
        message: "User Logged In",
        res: user,
        token
      });
    } else {
      return apiStatusRes(res, {
        status: invalid_Request,
        message: "In-valid credentials",
      });
    }
  } catch (error: any) {
    return apiStatusRes(res, { status: server_Error, message: error.message });
  }
};

const logoutUser = async (req: Request, res: Response) => {
  try {
    res.clearCookie("access_token");
    return apiStatusRes(res, {
      status: errorStatus.success,
      message: "Successfully logged out"
    });
      } catch (error: any) {
    console.log(error.message)
  }
}

export default { registerUser, loginUser, logoutUser };
