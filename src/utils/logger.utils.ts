import winston from "winston";
import { env } from "./env.utils";

// Setting logging level depending on the type of environment the code is running on.
// If the code is running in development, we want all the debug information.
// If the code is running in production, we just want logging for info or higher.
const loggerLevel: string = env.NODE_ENV === "production" ? "info" : "debug";

export const logger = winston.createLogger({
  level: loggerLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
  transports: [new winston.transports.Console()],
});
