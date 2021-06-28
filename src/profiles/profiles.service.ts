import { Injectable } from '@nestjs/common';
import knex from 'src/database/knex';
import { RedisCacheService } from 'src/redis-cache/redis-cache.service';

@Injectable()
export class ProfilesService {
  constructor(private cacheManager: RedisCacheService) {}

  async getProfile(userId: number) {
    let profileResponse = await this.cacheManager.get(`userId${userId}`);

    if (!profileResponse) {
      profileResponse = await knex.raw(
        'select profile.id as id, profile.name as name, address.street, ' +
          'city.name as city, country.name as country from profile ' +
          'inner join address on address.id = profile.address_id ' +
          'inner join city on city.id = address.city_id ' +
          'inner join country on country.id = city.country_id ' +
          'where user_id = ?',
        userId,
      );

      await this.cacheManager.set(`userId${userId}`, profileResponse);
    }

    const profile = profileResponse[0];

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
