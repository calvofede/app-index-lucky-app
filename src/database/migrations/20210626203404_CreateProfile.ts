import Knex = require('knex');

const tableName = 'profile';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.integer('userId').references('id').inTable('user');
    t.integer('addressId').references('id').inTable('address');
    t.string('name', 255).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
