"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var errors_1 = require("../errors");
exports.checkJwt = function (role) {
    if (role === void 0) { role = "user"; }
    return function (req, res, next) {
        var token = req.cookies.token;
        var jwtPayload;
        try {
            jwtPayload = jwt.verify(token, process.env.TOKEN_SECRET || "");
            console.log(jwtPayload);
            if (jwtPayload.role !== "Admin" && role !== jwtPayload.role) {
                throw new errors_1.UnauthorizedError("UnAuthorized Actions");
            }
        }
        catch (error) {
            console.log(error);
            throw new errors_1.UnauthorizedError("Un Authorized Actions");
        }
        req.body.user = jwtPayload;
        next();
    };
};
