import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { LocalAuthGuard } from 'guards/local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
