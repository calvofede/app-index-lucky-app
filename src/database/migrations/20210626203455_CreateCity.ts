import Knex = require('knex');

const tableName = 'city';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.integer('countryId').references('id').inTable('country');
    t.string('name', 100).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
