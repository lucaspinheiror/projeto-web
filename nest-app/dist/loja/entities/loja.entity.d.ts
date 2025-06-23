import { Produto } from '../../produtos/entities/produto.entity';
export declare class Loja {
    id: number;
    nome: string;
    descricao?: string;
    endereco?: string;
    produtos: Produto[];
}
