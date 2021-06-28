import Knex = require('knex');
import { City } from '../models/city.model';
import { withDefaults } from '../utilities';
import faker = require('faker');

const cities = function () {
  const citiesArray = [];
  for (let i = 0; i < 20; i++) {
    citiesArray.push({
      countryId: faker.datatype.number({
        min: 1,
        max: 5,
      }),
      name: faker.address.city(),
    });
  }
  return withDefaults(citiesArray);
};

export async function seed(knex: Knex): Promise<any> {
  await City.query(knex).del();
  return await cities().forEach(async (element) => {
    await City.query(knex).insert(element);
  });
}
