"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.signUpValidator = void 0;
var joi_1 = __importDefault(require("joi"));
var validator_1 = __importDefault(require("../validator"));
var signUpSchema = joi_1.default.object({
    name: joi_1.default.string().alphanum().min(3).max(30).required(),
    password: joi_1.default.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .min(3)
        .required(),
    email: joi_1.default.string()
        .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    })
        .required(),
});
var signUpValidator = validator_1.default(signUpSchema);
exports.signUpValidator = signUpValidator;
var loginSchema = joi_1.default.object({
    password: joi_1.default.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .min(3)
        .required(),
    email: joi_1.default.string()
        .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    })
        .required(),
});
var loginValidator = validator_1.default(loginSchema);
exports.loginValidator = loginValidator;
