import { ObjectSchema } from "joi";
import { FieldValidationError } from "../errors";
export default (schema: ObjectSchema) => {
	return (req: any, res: any, next: any) => {
		const { error } = schema.validate(req.body);
		const valid = error == null;
		if (valid) {
			next();
		} else {
			throw new FieldValidationError(error?.message || "Validation Error", [
				{
					message: error?.message || "",
					path: [error?.stack || ""],
					type: "Validation Error",
				},
			]);
		}
	};
};
