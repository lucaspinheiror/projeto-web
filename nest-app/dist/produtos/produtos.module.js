"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produto_entity_1 = require("./entities/produto.entity");
const produtos_service_1 = require("./produtos.service");
const produtos_controller_1 = require("./produtos.controller");
const auth_module_1 = require("../auth/auth.module");
const loja_entity_1 = require("../loja/entities/loja.entity");
let ProdutosModule = class ProdutosModule {
};
exports.ProdutosModule = ProdutosModule;
exports.ProdutosModule = ProdutosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([produto_entity_1.Produto, loja_entity_1.Loja]),
            auth_module_1.AuthModule,
        ],
        providers: [produtos_service_1.ProdutosService],
        controllers: [produtos_controller_1.ProdutosController],
    })
], ProdutosModule);
//# sourceMappingURL=produtos.module.js.map