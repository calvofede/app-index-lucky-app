import { Global, Module } from '@nestjs/common';
import Knex = require('knex');
import { knexSnakeCaseMappers, Model } from 'objection';
import { User } from './models/user.model';
import { Profile } from './models/profile.model';
import { Country } from './models/country.model';
import { City } from './models/city.model';
import { Address } from './models/address.model';

const models = [User, Profile, Country, City, Address];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'sqlite3',
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
