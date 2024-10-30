import { JwtService } from '@nestjs/jwt';
interface User {
    id: number;
    email: string;
    password: string;
}
export declare class AuthService {
    private jwtService;
    private users;
    private idCounter;
    constructor(jwtService: JwtService);
    register(user: Partial<User>): Promise<{
        email: string;
    }>;
    login(email: string, password: string): Promise<{
        message: string;
        token: string;
    }>;
}
export {};
