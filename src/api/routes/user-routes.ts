import { NextFunction, Router } from "express";
import { Request, Response } from "express";
import { userService } from "../../services";
import {
	loginValidator,
	signUpValidator,
} from "../middlewares/validations/userValidations";
import { catchAsync } from "../utils";

const router = Router();

router.post(
	"/signup",
	signUpValidator,
	catchAsync(async (req: Request, res: Response) => {
		const userBody: User = req.body;
		const user: User = await userService.signup(userBody);
		return res.status(200).json({ message: "User Created Successfully !" });
	}),
);

router.post(
	"/login",
	loginValidator,
	catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const userBody: User = req.body;

		const token: string = await userService.login(userBody);

		return res.status(200).json({ token });
	}),
);

export default router;
