import { Global, Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';

@Global()
@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService],
  exports: [],
})
export class ProfilesModule {}
