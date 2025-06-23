import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Loja } from '../loja/entities/loja.entity';

@Injectable()
export class ProdutosService {

  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    @InjectRepository(Loja)
    private readonly lojaRepository: Repository<Loja>,
  ) { }

  // ...existing code...
  async create(createProdutoDto: CreateProdutoDto) {
    const { lojaId, ...dadosProduto } = createProdutoDto;
    const loja = await this.lojaRepository.findOne({ where: { id: lojaId } });
    if (!loja) throw new NotFoundException('Loja não encontrada');

    const produto = this.produtoRepository.create({ ...dadosProduto, loja });
    return this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: ['loja'], // Isso faz o join com a loja!
    });
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: ['loja'],
    });
    if (!produto) throw new NotFoundException('Produto não encontrado.');
    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    const produto = await this.findOne(id); // já lança exceção se não existir
    this.produtoRepository.merge(produto, updateProdutoDto);
    return await this.produtoRepository.save(produto);
  }

  async remove(id: number): Promise<void> {
    const produto = await this.findOne(id); // já lança exceção se não existir
    await this.produtoRepository.remove(produto);
  }
}
