import Knex = require('knex');

const tableName = 'country';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.string('name', 100).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
