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
exports.LojaController = void 0;
const common_1 = require("@nestjs/common");
const loja_service_1 = require("./loja.service");
const create_loja_dto_1 = require("./dto/create-loja.dto");
const update_loja_dto_1 = require("./dto/update-loja.dto");
const roles_guard_1 = require("../auth/roles.guard");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let LojaController = class LojaController {
    lojaService;
    constructor(lojaService) {
        this.lojaService = lojaService;
    }
    create(createLojaDto) {
        return this.lojaService.create(createLojaDto);
    }
    findAll() {
        return this.lojaService.findAll();
    }
    findOne(id) {
        return this.lojaService.findOne(+id);
    }
    update(id, updateLojaDto) {
        return this.lojaService.update(+id, updateLojaDto);
    }
    remove(id) {
        return this.lojaService.remove(+id);
    }
};
exports.LojaController = LojaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'manager'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova loja' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Loja criada com sucesso.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_loja_dto_1.CreateLojaDto]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as lojas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de lojas retornada com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma loja pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loja encontrada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Loja não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'manager'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma loja pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loja atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Loja não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_loja_dto_1.UpdateLojaDto]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'manager'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma loja pelo ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loja removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Loja não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LojaController.prototype, "remove", null);
exports.LojaController = LojaController = __decorate([
    (0, swagger_1.ApiTags)('loja'),
    (0, common_1.Controller)('loja'),
    __metadata("design:paramtypes", [loja_service_1.LojaService])
], LojaController);
//# sourceMappingURL=loja.controller.js.map