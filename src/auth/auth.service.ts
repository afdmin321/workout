import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { emailUsers, telegramUsers } from 'const/const';
import { Logger } from 'Logger/Logger';
import telegramApi from 'telegramApi/telegramApi';
import { UserType } from 'types/UserTypes';
import { UserService } from 'user/user.service';
import nodeMailer from 'utils/nodeMailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly logger: Logger,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    return this.userService
      .findOne(username)
      .then(async (user) => {
        if (user) {
          return verify(user.password, password).then((passwordIsMath) => {
            if (user && passwordIsMath) {
              return user;
            }
            throw new UnauthorizedException('User or password are incorrect');
          });
        }
        throw new UnauthorizedException('User not found');
      })
      .catch((err) => {
        this.logger.error(`AUTH: ошибка авторизации! Ошибка: ${err.message}`);
        telegramApi
          .sendMessage(telegramUsers.idAdmin, 'AUTH: ошибка авторизации!')
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `AUTH: ошибка авторизации! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new UnauthorizedException(err.message);
      });
  }

  async login(user: UserType) {
    const { id, username } = user;
    const token = this.jwtService.sign({ id, username });
    return { id, username, token };
  }
}
