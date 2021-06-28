import { Request, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guards';
import { ProfilesService } from './profiles.service';

@Controller('profile')
export class ProfilesController {
  constructor(private authenticationService: ProfilesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return this.authenticationService.getProfile(req.user.userId);
  }
}
