import { Injectable } from '@nestjs/common';
import { LoginDto } from './login-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    private users = [{id:1,email:"teste@teste.com", password: "123456", active: true}];
    async login(body: LoginDto, ip: string, req: Request) {
        const user = await this.findOne(body.email);
        if (!user || user.password !== body.password || !user.active) {
            throw new Error("Invalid email or password");
        }

        return {access_token: await this.jwtService.signAsync({id : user.id,email: user.email})};
      }

      async findOne(email: string) {
          return await this.users.find(user => user.email === email);
      }
}
