import { Post } from '@nestjs/common';
import { Controller, Body } from '@nestjs/common';
import { RegisterDto } from './register.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() request: RegisterDto) {
    return this.usersService.createUser(request);
  }
}
