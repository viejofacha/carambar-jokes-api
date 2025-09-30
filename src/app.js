import express from "express";
import cors from "cors";
import { sequelize } from "./db/index.js";
import "./db/models/Joke.js";
import jokesRouter from "./jokes/jokes.routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger/swagger.js";
export const app = express();
app.use(cors()); app.use(express.json());
app.get("/", (_req,res)=>res.json({status:"ok",name:"Carambar Jokes API",version:"v1"}));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/jokes", jokesRouter);
app.use((err,_req,res,_next)=>{ console.error(err); res.status(500).json({error:"Internal Server Error"}); });
export async function initDb(){ await sequelize.sync(); }
