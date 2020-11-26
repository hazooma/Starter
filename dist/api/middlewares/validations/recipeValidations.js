"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecipeValidator = void 0;
var joi_1 = __importDefault(require("joi"));
var validator_1 = __importDefault(require("../validator"));
var createRecipe = joi_1.default.object({
    image: joi_1.default.string().uri(),
    description: joi_1.default.string().min(3).required(),
}).options({ allowUnknown: true });
var createRecipeValidator = validator_1.default(createRecipe);
exports.createRecipeValidator = createRecipeValidator;
