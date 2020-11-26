import * as knex from "knex";

export function up(db: knex) {
	return db.schema.createTableIfNotExists("users", (table) => {
		table.increments("id").primary();
		table.string("email", 64).unique().notNullable();
		table.string("name").notNullable();
		table.string("password").notNullable();
		table.string("role").notNullable().defaultTo("user");

		table.timestamps(true, true);
	});
}

export function down(db: knex) {
	return db.schema.dropTable("users");
}
