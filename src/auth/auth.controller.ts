import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { User } from 'src/users/models/user';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth-guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
//   @UseGuards(JwtAuthGuard)
  login(@Req() req: Request): { access_token: string } {
    return this.authService.login(req.user as User);
  }
}
