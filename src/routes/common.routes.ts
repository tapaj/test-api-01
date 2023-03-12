import { Router } from "express";

import { getStatus } from "../controllers/common.controllers";

export const commonRouter = Router();

commonRouter.get("/", getStatus);
