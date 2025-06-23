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
exports.Loja = void 0;
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("../../produtos/entities/produto.entity");
const swagger_1 = require("@nestjs/swagger");
let Loja = class Loja {
    id;
    nome;
    descricao;
    endereco;
    produtos;
};
exports.Loja = Loja;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID da loja' }),
    __metadata("design:type", Number)
], Loja.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Horti da Maria', description: 'Nome da loja' }),
    __metadata("design:type", String)
], Loja.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Produtos frescos e orgânicos', required: false }),
    __metadata("design:type", String)
], Loja.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores, 123', required: false }),
    __metadata("design:type", String)
], Loja.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produto, produto => produto.loja),
    (0, swagger_1.ApiProperty)({ type: () => [produto_entity_1.Produto], description: 'Produtos da loja', required: false }),
    __metadata("design:type", Array)
], Loja.prototype, "produtos", void 0);
exports.Loja = Loja = __decorate([
    (0, typeorm_1.Entity)()
], Loja);
//# sourceMappingURL=loja.entity.js.map