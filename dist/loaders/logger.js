"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var transports = [];
if (process.env.NODE_ENV !== "dev" && process.env.NODE_ENV !== "staging") {
    transports.push(new winston_1.default.transports.File({
        filename: "errors.log",
        level: "error",
    }), new winston_1.default.transports.File({
        filename: "warnings.log",
        level: "warn",
    }), new winston_1.default.transports.File({
        filename: "infos.log",
        level: "info",
    }));
}
else {
    transports.push(new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.cli(), winston_1.default.format.splat()),
    }));
}
var loggerInstance = winston_1.default.createLogger({
    level: "",
    levels: winston_1.default.config.npm.levels,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), winston_1.default.format.json()),
    transports: transports,
});
exports.default = loggerInstance;
