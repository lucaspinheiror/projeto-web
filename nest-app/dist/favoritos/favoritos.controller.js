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
exports.FavoritosController = void 0;
const common_1 = require("@nestjs/common");
const favoritos_service_1 = require("./favoritos.service");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let FavoritosController = class FavoritosController {
    favoritosService;
    constructor(favoritosService) {
        this.favoritosService = favoritosService;
    }
    async addFavorito(produtoId, req) {
        return this.favoritosService.addFavorito(req.user.userId, produtoId);
    }
    async listarFavoritos(req) {
        return this.favoritosService.listarFavoritos(req.user.userId);
    }
    async removeFavorito(produtoId, req) {
        return this.favoritosService.removeFavorito(req.user.userId, produtoId);
    }
};
exports.FavoritosController = FavoritosController;
__decorate([
    (0, common_1.Post)(':produtoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar produto aos favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Produto adicionado aos favoritos com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Produto já está nos favoritos.' }),
    (0, roles_decorator_1.Roles)('user'),
    __param(0, (0, common_1.Param)('produtoId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FavoritosController.prototype, "addFavorito", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar favoritos do usuário autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de favoritos do usuário.' }),
    (0, roles_decorator_1.Roles)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FavoritosController.prototype, "listarFavoritos", null);
__decorate([
    (0, common_1.Delete)(':produtoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover produto dos favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Produto removido dos favoritos com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Favorito não encontrado.' }),
    (0, roles_decorator_1.Roles)('user'),
    __param(0, (0, common_1.Param)('produtoId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FavoritosController.prototype, "removeFavorito", null);
exports.FavoritosController = FavoritosController = __decorate([
    (0, swagger_1.ApiTags)('favoritos'),
    (0, common_1.Controller)('favoritos'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [favoritos_service_1.FavoritosService])
], FavoritosController);
//# sourceMappingURL=favoritos.controller.js.map