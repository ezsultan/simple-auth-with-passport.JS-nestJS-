import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/models/user';
import { UsersService } from 'src/users/users.service';
import { jwtSecret } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreerExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  validate(validatePayload: { email: string; sub: string }): User | null {
    return this.userService.getUserByEmail(validatePayload.email);
  }
}
