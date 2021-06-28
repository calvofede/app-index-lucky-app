import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import knex from 'src/database/knex';
import { User } from '../database/models/user.model';
import { RegisterDto } from './register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<any> {
    return await knex.raw('select * from user where username = ?', username);
  }

  async createUser(body: RegisterDto): Promise<User | any> {
    const user = await this.findOne(body.username);

    //Already been done at DTO level with @UserNotExists custom validator decorator
    if (user.length > 0)
      throw new BadRequestException('Error! Username already exists');

    const hashedPassword = await bcrypt.hash(body.password, 10);

    try {
      await knex.transaction(async (trx) => {
        const userInsertedId = await knex('user')
          .returning('id')
          .insert({ username: body.username, password: hashedPassword })
          .transacting(trx);
        const addressInsertedId = await knex('address')
          .returning('id')
          .insert({ city_id: body.address.cityId, street: body.address.street })
          .transacting(trx);
        await knex
          .raw(
            'insert into profile (user_id, address_id, name) VALUES (?,?,?)',
            [userInsertedId[0], addressInsertedId[0], body.name],
          )
          .transacting(trx);
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message, error.code);
    }
  }
}
