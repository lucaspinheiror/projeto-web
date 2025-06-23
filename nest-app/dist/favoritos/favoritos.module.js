"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const favorito_entity_1 = require("./entities/favorito.entity");
const favoritos_service_1 = require("./favoritos.service");
const favoritos_controller_1 = require("./favoritos.controller");
const user_entity_1 = require("../user/entities/user.entity");
const produto_entity_1 = require("../produtos/entities/produto.entity");
let FavoritosModule = class FavoritosModule {
};
exports.FavoritosModule = FavoritosModule;
exports.FavoritosModule = FavoritosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favorito_entity_1.Favorito, user_entity_1.User, produto_entity_1.Produto])],
        controllers: [favoritos_controller_1.FavoritosController],
        providers: [favoritos_service_1.FavoritosService],
    })
], FavoritosModule);
//# sourceMappingURL=favoritos.module.js.map