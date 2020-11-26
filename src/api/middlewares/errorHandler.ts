import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

function errorMiddleware(
	error: AppError,
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const status = error.code || 500;
	const message = error.message || "Something went wrong";
	return response.status(status).send({
		status,
		message,
	});
}

export default errorMiddleware;
