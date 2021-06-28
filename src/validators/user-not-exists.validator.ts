import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'UserNotExists', async: true })
@Injectable()
export class UserNotExistsValidator implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) {}

  async validate(username: string) {
    try {
      return (await this.usersService.findOne(username)).length === 0
        ? true
        : false;
    } catch (e) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return `User already exists`;
  }
}
