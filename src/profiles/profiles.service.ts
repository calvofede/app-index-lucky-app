import { Injectable } from '@nestjs/common';
import knex from 'src/database/knex';

@Injectable()
export class ProfilesService {
  async getProfile(userId: number) {
    const queryResponse = await knex.raw(
      'select profile.id as id, profile.name as name, address.street, ' +
        'city.name as city, country.name as country from profile ' +
        'inner join address on address.id = profile.address_id ' +
        'inner join city on city.id = address.city_id ' +
        'inner join country on country.id = city.country_id ' +
        'where user_id = ?',
      userId,
    );

    const profile = queryResponse[0];

    return {
      id: profile.id,
      name: profile.name,
      address: {
        name: profile.street,
        city: profile.city,
        country: profile.country,
      },
    };
  }
}
