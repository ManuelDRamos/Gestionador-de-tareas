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
exports.LoginUserDTO = exports.UserResponseDTO = exports.CreateUserDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDTO {
}
exports.CreateUserDTO = CreateUserDTO;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, {
        message: 'El email debe tener un formato válido',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])/, {
        message: 'La contraseña debe contener una letra mayuscula, un número y un carácter especial.',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
class UserResponseDTO {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}
exports.UserResponseDTO = UserResponseDTO;
class LoginUserDTO {
}
exports.LoginUserDTO = LoginUserDTO;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "password", void 0);
//# sourceMappingURL=users.dto.js.map