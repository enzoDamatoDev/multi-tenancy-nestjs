import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [JwtModule.register({
    global: true,
    secret: "secret",
    signOptions: { expiresIn: '1d' },
  }),]
})
export class AuthModule {}
