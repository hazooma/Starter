"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(db) {
    return db.schema.createTableIfNotExists("recipes", function (table) {
        table.increments("id").primary();
        table.string("description").notNullable();
        table.string("image").notNullable();
        table
            .integer("user_id")
            .unsigned()
            .references("users.id")
            .onDelete("CASCADE");
        table.timestamps(true, true);
    });
}
exports.up = up;
function down(db) {
    return db.schema.dropTable("recipes");
}
exports.down = down;
