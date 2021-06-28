import { Global, Module } from '@nestjs/common';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';

@Global()
@Module({
  imports: [RedisCacheModule],
  controllers: [ProfilesController],
  providers: [ProfilesService],
  exports: [],
})
export class ProfilesModule {}
