import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('/auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authenticationService.login(req.user);
  }
}
