"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
exports.catchAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};
