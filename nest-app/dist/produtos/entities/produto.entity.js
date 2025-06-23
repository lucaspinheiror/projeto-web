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
exports.Produto = void 0;
const typeorm_1 = require("typeorm");
const favorito_entity_1 = require("../../favoritos/entities/favorito.entity");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const loja_entity_1 = require("../../loja/entities/loja.entity");
let Produto = class Produto {
    id;
    nome;
    preco;
    dataCriacao;
    dataValidade;
    favoritos;
    loja;
};
exports.Produto = Produto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Produto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Produto.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Produto.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime' }),
    __metadata("design:type", Date)
], Produto.prototype, "dataCriacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Produto.prototype, "dataValidade", void 0);
__decorate([
    (0, typeorm_2.OneToMany)(() => favorito_entity_1.Favorito, favorito => favorito.produto),
    __metadata("design:type", Array)
], Produto.prototype, "favoritos", void 0);
__decorate([
    (0, typeorm_3.ManyToOne)(() => loja_entity_1.Loja, loja => loja.produtos),
    __metadata("design:type", loja_entity_1.Loja)
], Produto.prototype, "loja", void 0);
exports.Produto = Produto = __decorate([
    (0, typeorm_1.Entity)('produtos')
], Produto);
//# sourceMappingURL=produto.entity.js.map