import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const DB_PATH = process.env.DB_PATH || "./data.sqlite";
export const sequelize = new Sequelize({ dialect: "sqlite", storage: DB_PATH, logging: false });
