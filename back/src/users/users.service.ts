import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserResponseDTO } from './users.dto';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async createUser(email: string, password: string): Promise<UserResponseDTO> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      id: this.idCounter++,
      email,
      password: hashedPassword,
    };

    this.users.push(newUser);
    return new UserResponseDTO(newUser.id, newUser.email);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
