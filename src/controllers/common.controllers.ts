import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { APIResponse } from "../utils/api-response.utils";
import { logger } from "../utils/logger.utils";

export const getStatus = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.debug("getStatus(): Started");

  return res.status(StatusCodes.OK).json(APIResponse.ok("Test API is active"));
};
