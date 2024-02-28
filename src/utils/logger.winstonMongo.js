import winston from "winston";
import "winston-mongodb";

const logConfig = {
  transports: [
    winston.add(
      new winston.transports.MongoDB({
        options: { useUnifiedTopology: true },
        db: "mongodb://localhost:27017/ecommerce",
        collection: "logs",
        tryReconnect: true, 
        level: "error",
      })
    ),
    new winston.transports.Console({ level: "silly" }), 

    new winston.transports.File({
      filename: "./logs/winstoneMongo.log",
      level: "info", 
    }),
  ],
};

export const logger = winston.createLogger(logConfig);