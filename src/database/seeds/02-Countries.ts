import Knex = require('knex');
import { withDefaults } from '../utilities';
import faker = require('faker');
import { Country } from '../models/country.model';

const countries = function () {
  const countriesArray = [];
  for (let i = 0; i < 5; i++) {
    countriesArray.push({
      name: faker.address.country(),
    });
  }
  return withDefaults(countriesArray);
};

export async function seed(knex: Knex): Promise<any> {
  await Country.query(knex).del();
  const countriesArray = countries();
  await Country.query(knex).insert(countriesArray[0]);
  await Country.query(knex).insert(countriesArray[1]);
  await Country.query(knex).insert(countriesArray[2]);
  await Country.query(knex).insert(countriesArray[3]);
  await Country.query(knex).insert(countriesArray[4]);
}
