import { errorFunction } from "../types/globalTypes";
import { Response } from "express";
export const apiStatusRes = (res: Response, data: errorFunction): void => {
  res
    .status(data.status)
    .json({
      status: data.status,
      message: data.message,
      res: data.res,
      token: data.token,
    });
};
