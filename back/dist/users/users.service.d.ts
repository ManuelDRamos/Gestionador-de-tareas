import { UserResponseDTO } from './users.dto';
interface User {
    id: number;
    email: string;
    password: string;
}
export declare class UsersService {
    private users;
    private idCounter;
    createUser(email: string, password: string): Promise<UserResponseDTO>;
    getUserByEmail(email: string): Promise<User | undefined>;
}
export {};
