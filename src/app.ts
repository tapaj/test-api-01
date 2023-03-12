// 3rd party NPM packages
import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";

// Utilities
import { env } from "./utils/env.utils";
import { logger } from "./utils/logger.utils";
import { commonRouter } from "./routes/common.routes";

const port: number = env.API_PORT;
const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", commonRouter);

app.listen(port, () => {
  logger.info(`Test API started successfully on port ${port}`);
});
