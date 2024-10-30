import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from 'src/users/users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(user: CreateUserDTO): Promise<{
        email: string;
    }>;
    signIn(credentials: LoginUserDTO): Promise<{
        message: string;
        token: string;
    }>;
}
