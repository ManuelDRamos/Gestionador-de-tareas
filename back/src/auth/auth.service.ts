import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [];
  private idCounter = 1;

  constructor(private jwtService: JwtService) {}

  async register(user: Partial<User>) {
    const { email, password } = user;

    const foundUser = this.users.find((u) => u.email === email);

    if (foundUser) {
      throw new BadRequestException('Usuario ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      throw new BadRequestException('Error de encriptación');
    }

    const newUser: User = {
      id: this.idCounter++,
      email,
      password: hashedPassword,
    };

    this.users.push(newUser);

    return { email };
  }

  async login(email: string, password: string) {
    const foundUser = this.users.find((u) => u.email === email);

    if (!foundUser) {
      throw new BadRequestException('Credenciales inválidas');
    }

    const passwordValid = await bcrypt.compare(password, foundUser.password);

    if (!passwordValid) {
      throw new BadRequestException('Credenciales inválidas');
    }

    const userPayload = {
      id: foundUser.id,
      email: foundUser.email,
    };

    const token = this.jwtService.sign(userPayload);

    return {
      message: 'El usuario ha iniciado sesión correctamente',
      token,
    };
  }
}
