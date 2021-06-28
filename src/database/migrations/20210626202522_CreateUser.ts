import Knex = require('knex');

const tableName = 'user';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.string('username', 255).unique().notNullable();
    t.string('password', 255).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
