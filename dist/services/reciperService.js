"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeServiceInstance = void 0;
var errors_1 = require("../api/errors");
var models_1 = require("../models");
var TABLE_NAME = "recipes";
var RecipeService = /** @class */ (function () {
    function RecipeService() {
    }
    RecipeService.prototype.create = function (recipe) {
        return __awaiter(this, void 0, Promise, function () {
            var table, insertedRecipe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.dbInstance.getConnection()];
                    case 1:
                        table = (_a.sent()).table(TABLE_NAME);
                        return [4 /*yield*/, table.insert({
                                image: recipe.image,
                                description: recipe.description,
                                user_id: recipe.user_id,
                            })];
                    case 2:
                        insertedRecipe = _a.sent();
                        recipe.id = insertedRecipe[0];
                        return [2 /*return*/, recipe];
                }
            });
        });
    };
    RecipeService.prototype.getById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var table, recipe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.dbInstance.getConnection()];
                    case 1:
                        table = (_a.sent()).table(TABLE_NAME);
                        return [4 /*yield*/, table.where({ id: id }).first()];
                    case 2:
                        recipe = _a.sent();
                        if (!recipe) {
                            throw new errors_1.NotFoundError("Recipe Not Found !");
                        }
                        return [2 /*return*/, recipe];
                }
            });
        });
    };
    RecipeService.prototype.getAll = function (_a) {
        var _b = _a.after, after = _b === void 0 ? 0 : _b, _c = _a.limit, limit = _c === void 0 ? 50 : _c;
        return __awaiter(this, void 0, Promise, function () {
            var table, recipes;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, models_1.dbInstance.getConnection()];
                    case 1:
                        table = (_d.sent()).table(TABLE_NAME);
                        return [4 /*yield*/, table
                                .select()
                                .offset(after)
                                .limit(limit)
                                .orderBy("created_at", "desc")];
                    case 2:
                        recipes = _d.sent();
                        return [2 /*return*/, recipes];
                }
            });
        });
    };
    RecipeService.prototype.delete = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var table, recipes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.dbInstance.getConnection()];
                    case 1:
                        table = (_a.sent()).table(TABLE_NAME);
                        return [4 /*yield*/, table
                                .where({
                                id: id,
                            })
                                .del("*")];
                    case 2:
                        recipes = _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RecipeService.prototype.update = function (id, recipe) {
        return __awaiter(this, void 0, Promise, function () {
            var table, newRecipe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.dbInstance.getConnection()];
                    case 1:
                        table = (_a.sent()).table(TABLE_NAME);
                        return [4 /*yield*/, table
                                .where({ id: id })
                                .update({
                                image: recipe.image,
                                description: recipe.description,
                            }, "*")
                                .select()
                                .first()];
                    case 2:
                        newRecipe = _a.sent();
                        return [2 /*return*/, newRecipe];
                }
            });
        });
    };
    return RecipeService;
}());
exports.default = RecipeService;
var RecipeServiceInstance = new RecipeService();
exports.RecipeServiceInstance = RecipeServiceInstance;
