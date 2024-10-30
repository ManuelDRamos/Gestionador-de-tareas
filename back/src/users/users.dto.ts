import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  @Matches(/^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, {
    message: 'El email debe tener un formato válido',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])/, {
    message:
      'La contraseña debe contener una letra mayuscula, un número y un carácter especial.',
  })
  password: string;
}

export class UserResponseDTO {
  id: number;
  email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }
}

export class LoginUserDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
