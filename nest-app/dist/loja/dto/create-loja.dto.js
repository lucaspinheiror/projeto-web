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
exports.CreateLojaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateLojaDto {
    nome;
    descricao;
    endereco;
}
exports.CreateLojaDto = CreateLojaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Horti da Maria', description: 'Nome da loja' }),
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string.' }),
    (0, class_validator_1.Length)(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' }),
    __metadata("design:type", String)
], CreateLojaDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Produtos frescos e orgânicos', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string.' }),
    (0, class_validator_1.Length)(0, 200, { message: 'A descrição pode ter até 200 caracteres.' }),
    __metadata("design:type", String)
], CreateLojaDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores, 123', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'O endereço deve ser uma string.' }),
    (0, class_validator_1.Length)(0, 100, { message: 'O endereço pode ter até 100 caracteres.' }),
    __metadata("design:type", String)
], CreateLojaDto.prototype, "endereco", void 0);
//# sourceMappingURL=create-loja.dto.js.map