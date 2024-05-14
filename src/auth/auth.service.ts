import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { UserType } from 'types/UserTypes';
import { UserService } from 'user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    const passwordIsMath = await verify(user.password, password);
    if (user && passwordIsMath) {
      return user;
    }
    throw new UnauthorizedException('User or password are incorrect');
  }

  async login(user: UserType) {
    const { id, username } = user;
    const token = this.jwtService.sign({ id, username });
    return { id, username, token };
  }
}
