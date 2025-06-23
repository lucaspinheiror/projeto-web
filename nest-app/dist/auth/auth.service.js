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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const class_transformer_1 = require("class-transformer");
let AuthService = class AuthService {
    userRepository;
    jwtService;
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const exists = await this.userRepository.findOne({
            where: [{ nomeUsuario: registerDto.nomeUsuario }, { email: registerDto.email }],
        });
        if (exists) {
            throw new common_1.ConflictException('Nome de usuário ou email já cadastrado.');
        }
        const user = this.userRepository.create({
            ...registerDto,
            role: registerDto.role || 'user',
        });
        await this.userRepository.save(user);
        return {
            message: 'Usuário registrado com sucesso!',
            user: (0, class_transformer_1.plainToInstance)(user_entity_1.User, user, { excludePrefixes: ['senha'] }),
        };
    }
    async login(loginDto) {
        const user = await this.userRepository.findOne({ where: { nomeUsuario: loginDto.nomeUsuario } });
        if (!user || !(await bcrypt.compare(loginDto.senha, user.senha))) {
            throw new common_1.UnauthorizedException('Usuário ou senha inválidos.');
        }
        const payload = { sub: user.id, nomeUsuario: user.nomeUsuario, role: user.role };
        return {
            message: 'Login realizado com sucesso!',
            access_token: this.jwtService.sign(payload),
            user: (0, class_transformer_1.plainToInstance)(user_entity_1.User, user, { excludePrefixes: ['senha'] }),
        };
    }
    async validateUser(nomeUsuario, senha) {
        const user = await this.userRepository.findOne({ where: { nomeUsuario } });
        if (user && await bcrypt.compare(senha, user.senha)) {
            return user;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map