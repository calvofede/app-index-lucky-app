import { Global, Module } from '@nestjs/common';
import { UserNotExistsValidator } from 'src/validators/user-not-exists.validator';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Global()
@Module({
  controllers: [UsersController],
  providers: [UsersService, UserNotExistsValidator],
  exports: [UsersService],
})
export class UsersModule {}
