"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.users = [];
        this.idCounter = 1;
    }
    async register(user) {
        const { email, password } = user;
        const foundUser = this.users.find((u) => u.email === email);
        if (foundUser) {
            throw new common_1.BadRequestException('Usuario ya está registrado');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            throw new common_1.BadRequestException('Error de encriptación');
        }
        const newUser = {
            id: this.idCounter++,
            email,
            password: hashedPassword,
        };
        this.users.push(newUser);
        return { email };
    }
    async login(email, password) {
        const foundUser = this.users.find((u) => u.email === email);
        if (!foundUser) {
            throw new common_1.BadRequestException('Credenciales inválidas');
        }
        const passwordValid = await bcrypt.compare(password, foundUser.password);
        if (!passwordValid) {
            throw new common_1.BadRequestException('Credenciales inválidas');
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map