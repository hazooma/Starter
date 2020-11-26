import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors";

export const checkJwt = (role: string = "user") => (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const token = req.cookies.token as string;

	let jwtPayload;

	try {
		jwtPayload = jwt.verify(token, process.env.TOKEN_SECRET || "") as any;
		console.log(jwtPayload);

		if (jwtPayload.role !== "Admin" && role !== jwtPayload.role) {
			throw new UnauthorizedError("UnAuthorized Actions");
		}
	} catch (error) {
		console.log(error);

		throw new UnauthorizedError("Un Authorized Actions");
	}
	req.body.user = jwtPayload;
	next();
};
