import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(createProdutoDto: CreateProdutoDto): Promise<import("./entities/produto.entity").Produto>;
    findAll(): Promise<import("./entities/produto.entity").Produto[]>;
    findOne(id: string): Promise<import("./entities/produto.entity").Produto>;
    update(id: string, updateProdutoDto: UpdateProdutoDto): Promise<import("./entities/produto.entity").Produto>;
    remove(id: string): Promise<void>;
}
