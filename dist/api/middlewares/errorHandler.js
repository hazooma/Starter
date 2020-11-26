"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(error, request, response, next) {
    var status = error.code || 500;
    var message = error.message || "Something went wrong";
    return response.status(status).send({
        status: status,
        message: message,
    });
}
exports.default = errorMiddleware;
