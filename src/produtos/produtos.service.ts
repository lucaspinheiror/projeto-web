import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {

  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.repository.create(createProdutoDto);
    
    return await this.repository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.repository.findOne({ where: { id } });

    if (!produto) {
      throw new NotFoundException(`Produto com id: ${id} não encontrado`);
    }

    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    const produto = await this.findOne(id); // já lança exceção se não existir
    this.repository.merge(produto, updateProdutoDto);
    return await this.repository.save(produto);
  }

  async remove(id: number): Promise<void> {
    const produto = await this.findOne(id); // já lança exceção se não existir
    await this.repository.remove(produto);
  }
}
