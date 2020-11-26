"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidationError = exports.UnauthorizedError = exports.BadRequestError = exports.NotFoundError = exports.AppError = void 0;
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(code, message, error) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.error = error;
        return _this;
    }
    AppError.prototype.toModel = function () {
        return {
            code: this.code,
            message: this.message,
        };
    };
    return AppError;
}(Error));
exports.AppError = AppError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        return _super.call(this, 404, message) || this;
    }
    return NotFoundError;
}(AppError));
exports.NotFoundError = NotFoundError;
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        return _super.call(this, 400, message) || this;
    }
    return BadRequestError;
}(AppError));
exports.BadRequestError = BadRequestError;
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message, error) {
        return _super.call(this, 401, message, error) || this;
    }
    return UnauthorizedError;
}(AppError));
exports.UnauthorizedError = UnauthorizedError;
var FieldValidationError = /** @class */ (function (_super) {
    __extends(FieldValidationError, _super);
    function FieldValidationError(message, fields, error) {
        var _this = _super.call(this, 422, message, error) || this;
        _this.fields = fields;
        return _this;
    }
    FieldValidationError.prototype.toModel = function () {
        return {
            code: this.code,
            message: this.message,
            fields: this.fields,
        };
    };
    return FieldValidationError;
}(AppError));
exports.FieldValidationError = FieldValidationError;
