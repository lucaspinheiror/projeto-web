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
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("./entities/produto.entity");
const loja_entity_1 = require("../loja/entities/loja.entity");
let ProdutosService = class ProdutosService {
    produtoRepository;
    lojaRepository;
    constructor(produtoRepository, lojaRepository) {
        this.produtoRepository = produtoRepository;
        this.lojaRepository = lojaRepository;
    }
    async create(createProdutoDto) {
        const { lojaId, ...dadosProduto } = createProdutoDto;
        const loja = await this.lojaRepository.findOne({ where: { id: lojaId } });
        if (!loja)
            throw new common_1.NotFoundException('Loja não encontrada');
        const produto = this.produtoRepository.create({ ...dadosProduto, loja });
        return this.produtoRepository.save(produto);
    }
    async findAll() {
        return await this.produtoRepository.find();
    }
    async findOne(id) {
        const produto = await this.produtoRepository.findOne({ where: { id } });
        if (!produto) {
            throw new common_1.NotFoundException(`Produto com id: ${id} não encontrado`);
        }
        return produto;
    }
    async update(id, updateProdutoDto) {
        const produto = await this.findOne(id);
        this.produtoRepository.merge(produto, updateProdutoDto);
        return await this.produtoRepository.save(produto);
    }
    async remove(id) {
        const produto = await this.findOne(id);
        await this.produtoRepository.remove(produto);
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __param(1, (0, typeorm_1.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map