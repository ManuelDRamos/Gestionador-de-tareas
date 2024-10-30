export declare class CreateUserDTO {
    email: string;
    password: string;
}
export declare class UserResponseDTO {
    id: number;
    email: string;
    constructor(id: number, email: string);
}
export declare class LoginUserDTO {
    email: string;
    password: string;
}
