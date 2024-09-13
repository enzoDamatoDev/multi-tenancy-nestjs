import { Body, Controller, Get, Ip, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login-dto';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    async login(@Body() body: LoginDto, @Ip() ip: string, @Req() req: Request) {
        return await this.authService.login(body, ip, req);
    }

    @Get('user')
    async user(@Req() req) {
        return req.user;
    }
}   
