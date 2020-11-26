import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { BadRequestError, NotFoundError } from "../api/errors";

import { dbInstance } from "../models";
const TABLE_NAME = "users";

export default class UserService {
	public async signup(user: User): Promise<User> {
		const table = (await dbInstance.getConnection()).table(TABLE_NAME);
		const existing = await table.where({ email: user.email });

		if (existing.length) {
			throw new BadRequestError("User Already Exists !");
		}

		const insertedUser = await table.insert({
			email: user.email,
			name: user.name,
			password: this.getHash(user.password),
		});
		user.id = insertedUser[0];
		return user;
	}

	public async login(user: User): Promise<string> {
		const table = (await dbInstance.getConnection()).table(TABLE_NAME);

		const existing = await table.where({
			email: user.email,
		});

		if (!existing.length) {
			throw new NotFoundError("User doesn't Exists !");
		}

		const dbUser: User = existing[0];
		console.log(user.password);

		console.log(this.getHash(user.password) + "   " + dbUser.password);
		const isValid = bcrypt.compareSync(user.password, dbUser.password);

		if (!isValid) {
			throw new BadRequestError("Password is wrong !");
		}

		const token = this.generateAccessToken(dbUser);

		return token;
	}
	private generateAccessToken(user: User) {
		return jwt.sign(
			{
				id: user.id,
				role: user.role,
			},
			process.env.TOKEN_SECRET || "",
			{
				expiresIn: "18000s",
			},
		);
	}

	private getHash(pass: string) {
		const hash = bcrypt.hashSync(pass);
		return hash;
	}
}

const UserServiceInstance = new UserService();
export { UserServiceInstance };
