import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(user: CreateUserDTO): Promise<import("./users.dto").UserResponseDTO>;
}
