import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { DatabaseModule } from './database/database.module';
import { ProfilesModule } from './profiles/profiles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ProfilesModule, AuthenticationModule, DatabaseModule],
})
export class AppModule {}
