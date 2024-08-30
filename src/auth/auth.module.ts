import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from 'auth/auth.controller';
import { AuthService } from 'auth/auth.service';
import { LoggerModule } from 'Logger/LoggerModule';
import { JwtStrategy } from 'strategies/jwt.strategy';
import { LocalStrategy } from 'strategies/local.strategy';
import { UserModule } from 'user/user.module';

@Module({
  imports: [
    LoggerModule,
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
