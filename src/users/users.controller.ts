// users.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async registerUser(@Body() user: User): Promise<User> {
    console.log('registerUser', user);
    
    return this.usersService.registerUser(user);
  }

  @Post('login')
  async loginUser(@Body() credentials: { email: string; password: string }) {
    return this.usersService.loginUser(credentials);
  }
}