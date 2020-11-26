export class AppError extends Error {
	public code: number;
	public error?: Error;

	constructor(code: number, message: string, error?: Error) {
		super(message);

		this.code = code;
		this.error = error;
	}

	public toModel() {
		return {
			code: this.code,
			message: this.message,
		};
	}
}

export class NotFoundError extends AppError {
	constructor(message: string) {
		super(404, message);
	}
}
export class BadRequestError extends AppError {
	constructor(message: string) {
		super(400, message);
	}
}

export class UnauthorizedError extends AppError {
	constructor(message: string, error?: Error) {
		super(401, message, error);
	}
}

export class FieldValidationError extends AppError {
	public fields: FieldError[];

	constructor(message: string, fields: FieldError[], error?: Error) {
		super(422, message, error);
		this.fields = fields;
	}

	public toModel() {
		return {
			code: this.code,
			message: this.message,
			fields: this.fields,
		};
	}
}

export interface FieldError {
	message: string;
	type: string;
	path: string[];
}
