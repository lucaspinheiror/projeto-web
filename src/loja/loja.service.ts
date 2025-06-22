import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja)
    private readonly lojaRepository: Repository<Loja>,
  ) {}

  async create(createLojaDto: CreateLojaDto) {
    const loja = this.lojaRepository.create(createLojaDto);
    await this.lojaRepository.save(loja);
    return { message: 'Loja criada com sucesso.', loja };
  }

  async findAll() {
    const lojas = await this.lojaRepository.find({ relations: ['produtos'] });
    return { message: 'Lista de lojas retornada com sucesso.', lojas };
  }

  async findOne(id: number) {
    const loja = await this.lojaRepository.findOne({ where: { id }, relations: ['produtos'] });
    if (!loja) throw new NotFoundException('Loja não encontrada.');
    return { message: 'Loja encontrada.', loja };
  }

  async update(id: number, updateLojaDto: UpdateLojaDto) {
    const loja = await this.lojaRepository.findOne({ where: { id } });
    if (!loja) throw new NotFoundException('Loja não encontrada.');
    Object.assign(loja, updateLojaDto);
    await this.lojaRepository.save(loja);
    return { message: 'Loja atualizada com sucesso.', loja };
  }

  async remove(id: number) {
    const loja = await this.lojaRepository.findOne({ where: { id } });
    if (!loja) throw new NotFoundException('Loja não encontrada.');
    await this.lojaRepository.remove(loja);
    return { message: 'Loja removida com sucesso.' };
  }
}