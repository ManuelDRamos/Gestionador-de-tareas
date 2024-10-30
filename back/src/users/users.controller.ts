import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(@Body() user: CreateUserDTO) {
    try {
      const { email, password } = user;
      return await this.usersService.createUser(email, password);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
