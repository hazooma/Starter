import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";

const applyMiddleWares = (app: Application) => {
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }));

	// parse application/json
	app.use(bodyParser.json());

	app.use(helmet());

	app.use(cors({ origin: "*" }));
	app.use(morgan("combined"));
	app.use(cookieParser());
};

export default applyMiddleWares;
