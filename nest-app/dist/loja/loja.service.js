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
exports.LojaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const loja_entity_1 = require("./entities/loja.entity");
let LojaService = class LojaService {
    lojaRepository;
    constructor(lojaRepository) {
        this.lojaRepository = lojaRepository;
    }
    async create(createLojaDto) {
        const loja = this.lojaRepository.create(createLojaDto);
        await this.lojaRepository.save(loja);
        return { message: 'Loja criada com sucesso.', loja };
    }
    async findAll() {
        const lojas = await this.lojaRepository.find({ relations: ['produtos'] });
        return { message: 'Lista de lojas retornada com sucesso.', lojas };
    }
    async findOne(id) {
        const loja = await this.lojaRepository.findOne({ where: { id }, relations: ['produtos'] });
        if (!loja)
            throw new common_1.NotFoundException('Loja não encontrada.');
        return { message: 'Loja encontrada.', loja };
    }
    async update(id, updateLojaDto) {
        const loja = await this.lojaRepository.findOne({ where: { id } });
        if (!loja)
            throw new common_1.NotFoundException('Loja não encontrada.');
        Object.assign(loja, updateLojaDto);
        await this.lojaRepository.save(loja);
        return { message: 'Loja atualizada com sucesso.', loja };
    }
    async remove(id) {
        const loja = await this.lojaRepository.findOne({ where: { id } });
        if (!loja)
            throw new common_1.NotFoundException('Loja não encontrada.');
        await this.lojaRepository.remove(loja);
        return { message: 'Loja removida com sucesso.' };
    }
};
exports.LojaService = LojaService;
exports.LojaService = LojaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loja_entity_1.Loja)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LojaService);
//# sourceMappingURL=loja.service.js.map