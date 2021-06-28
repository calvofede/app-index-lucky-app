import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { DatabaseModule } from './database/database.module';
import { ProfilesModule } from './profiles/profiles.module';
import { UsersModule } from './users/users.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [
    UsersModule,
    ProfilesModule,
    AuthenticationModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisCacheModule,
  ],
})
export class AppModule {}
