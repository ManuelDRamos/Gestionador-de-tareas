"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_dto_1 = require("./users.dto");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
        this.idCounter = 1;
    }
    async createUser(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: this.idCounter++,
            email,
            password: hashedPassword,
        };
        this.users.push(newUser);
        return new users_dto_1.UserResponseDTO(newUser.id, newUser.email);
    }
    async getUserByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map