import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Loja } from '../loja/entities/loja.entity';
export declare class ProdutosService {
    private readonly produtoRepository;
    private readonly lojaRepository;
    constructor(produtoRepository: Repository<Produto>, lojaRepository: Repository<Loja>);
    create(createProdutoDto: CreateProdutoDto): Promise<Produto>;
    findAll(): Promise<Produto[]>;
    findOne(id: number): Promise<Produto>;
    update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto>;
    remove(id: number): Promise<void>;
}
