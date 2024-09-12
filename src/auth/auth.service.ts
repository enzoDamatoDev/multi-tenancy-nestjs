import { Injectable } from '@nestjs/common';
import { LoginDto } from './login-dto';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {

    private users = [{email:"teste@teste.com", password: "123456", active: true}];
    async login(body: LoginDto, ip: string, req: Request) {
        const user = await this.findOne(body.email);
        if (!user || user.password !== body.password || !user.active) {
            throw new Error("Invalid email or password");
        }

        return user;
      }

      async findOne(email: string) {
          return await this.users.find(user => user.email === email);
      }
}
