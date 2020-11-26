"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../errors");
exports.default = (function (schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body).error;
        var valid = error == null;
        if (valid) {
            next();
        }
        else {
            throw new errors_1.FieldValidationError((error === null || error === void 0 ? void 0 : error.message) || "Validation Error", [
                {
                    message: (error === null || error === void 0 ? void 0 : error.message) || "",
                    path: [(error === null || error === void 0 ? void 0 : error.stack) || ""],
                    type: "Validation Error",
                },
            ]);
        }
    };
});
