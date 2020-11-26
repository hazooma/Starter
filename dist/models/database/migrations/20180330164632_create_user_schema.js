"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(db) {
    return db.schema.createTableIfNotExists("users", function (table) {
        table.increments("id").primary();
        table.string("email", 64).unique().notNullable();
        table.string("name").notNullable();
        table.string("password").notNullable();
        table.string("role").notNullable().defaultTo("user");
        table.timestamps(true, true);
    });
}
exports.up = up;
function down(db) {
    return db.schema.dropTable("users");
}
exports.down = down;
