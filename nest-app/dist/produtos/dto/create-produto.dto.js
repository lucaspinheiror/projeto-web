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
exports.CreateProdutoDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_validator_2 = require("class-validator");
class CreateProdutoDto {
    nome;
    preco;
    dataCriacao;
    dataValidade;
    lojaId;
}
exports.CreateProdutoDto = CreateProdutoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alface', description: 'Nome do produto' }),
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string.' }),
    (0, class_validator_1.Length)(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' }),
    __metadata("design:type", String)
], CreateProdutoDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2.99, description: 'Preço do produto' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'O preço deve ser um número e estar entre 0 e 10.' }),
    (0, class_validator_1.Min)(0, { message: 'O preço deve ser no mínimo 0.' }),
    (0, class_validator_1.Max)(10, { message: 'O preço deve ser no máximo 10.' }),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "preco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01', description: 'Data de criação em formato ISO' }),
    (0, class_validator_1.IsDateString)({}, { message: 'A data de criação deve estar em formato ISO.' }),
    __metadata("design:type", Date)
], CreateProdutoDto.prototype, "dataCriacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-15', description: 'Data de validade em formato ISO' }),
    (0, class_validator_1.IsDateString)({}, { message: 'A data de validade deve estar em formato ISO.' }),
    __metadata("design:type", Date)
], CreateProdutoDto.prototype, "dataValidade", void 0);
__decorate([
    (0, class_validator_2.IsInt)(),
    __metadata("design:type", Number)
], CreateProdutoDto.prototype, "lojaId", void 0);
//# sourceMappingURL=create-produto.dto.js.map