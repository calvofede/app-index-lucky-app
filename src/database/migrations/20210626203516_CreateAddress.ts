import Knex = require('knex');

const tableName = 'address';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.integer('cityId').references('id').inTable('city');
    t.string('street', 100).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
