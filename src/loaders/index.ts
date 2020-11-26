import { Application, NextFunction } from "express";
import errorMiddleware from "../api/middlewares/errorHandler";
import routes from "../api/routes";
import { dbInstance } from "../models";
import expressMiddleWares from "./expressLoader";
import logger from "./logger";

export default async (app: Application) => {
	await dbInstance.schemaMigration();

	expressMiddleWares(app);
	app.use(routes);
	logger.log("info", "Express Loader has initalized successfully! ✅");

	app.use(errorMiddleware);

	return app;
};
