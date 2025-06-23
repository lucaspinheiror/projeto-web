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
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produtos_service_1 = require("./produtos.service");
const create_produto_dto_1 = require("./dto/create-produto.dto");
const update_produto_dto_1 = require("./dto/update-produto.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let ProdutosController = class ProdutosController {
    produtosService;
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    create(createProdutoDto) {
        return this.produtosService.create(createProdutoDto);
    }
    findAll() {
        return this.produtosService.findAll();
    }
    findOne(id) {
        return this.produtosService.findOne(+id);
    }
    update(id, updateProdutoDto) {
        return this.produtosService.update(+id, updateProdutoDto);
    }
    remove(id) {
        return this.produtosService.remove(+id);
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'manager'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo produto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Produto criado com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produto_dto_1.CreateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os produtos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de produtos retornada com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um produto pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produto encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Produto não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'manager'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um produto pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produto atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Produto não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_produto_dto_1.UpdateProdutoDto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um produto pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produto removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Produto não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "remove", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, swagger_1.ApiTags)('produtos'),
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
//# sourceMappingURL=produtos.controller.js.map