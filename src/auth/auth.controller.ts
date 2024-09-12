import { Body, Controller, Ip, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginDto, @Ip() ip: string, @Req() req: Request) {
        return await this.authService.login(body, ip, req);
    }
}   
