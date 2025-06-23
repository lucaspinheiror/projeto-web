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
exports.FavoritosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const favorito_entity_1 = require("./entities/favorito.entity");
const user_entity_1 = require("../user/entities/user.entity");
const produto_entity_1 = require("../produtos/entities/produto.entity");
let FavoritosService = class FavoritosService {
    favoritoRepository;
    userRepository;
    produtoRepository;
    constructor(favoritoRepository, userRepository, produtoRepository) {
        this.favoritoRepository = favoritoRepository;
        this.userRepository = userRepository;
        this.produtoRepository = produtoRepository;
    }
    async addFavorito(userId, produtoId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const produto = await this.produtoRepository.findOne({ where: { id: produtoId } });
        if (!user || !produto)
            throw new common_1.NotFoundException('Usuário ou produto não encontrado');
        const exists = await this.favoritoRepository.findOne({ where: { user: { id: userId }, produto: { id: produtoId } } });
        if (exists)
            throw new common_1.ConflictException('Produto já está nos favoritos');
        const favorito = this.favoritoRepository.create({ user, produto });
        await this.favoritoRepository.save(favorito);
        return { message: 'Produto adicionado aos favoritos com sucesso', favorito };
    }
    async removeFavorito(userId, produtoId) {
        const favorito = await this.favoritoRepository.findOne({ where: { user: { id: userId }, produto: { id: produtoId } } });
        if (!favorito)
            throw new common_1.NotFoundException('Favorito não encontrado');
        await this.favoritoRepository.remove(favorito);
        return { message: 'Produto removido dos favoritos com sucesso' };
    }
    async listarFavoritos(userId) {
        const favoritos = await this.favoritoRepository.find({ where: { user: { id: userId } }, relations: ['produto'] });
        return {
            message: favoritos.length
                ? 'Lista de favoritos do usuário'
                : 'O usuário não possui favoritos.',
            favoritos: favoritos.map(fav => fav.produto),
        };
    }
};
exports.FavoritosService = FavoritosService;
exports.FavoritosService = FavoritosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorito_entity_1.Favorito)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FavoritosService);
//# sourceMappingURL=favoritos.service.js.map