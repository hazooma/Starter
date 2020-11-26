import Joi from "joi";
import validator from "../validator";

const signUpSchema = Joi.object({
	name: Joi.string().alphanum().min(3).max(30).required(),

	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.min(3)
		.required(),

	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		})
		.required(),
});
const signUpValidator = validator(signUpSchema);

const loginSchema = Joi.object({
	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.min(3)
		.required(),

	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		})
		.required(),
});
const loginValidator = validator(loginSchema);

export { signUpValidator, loginValidator };
