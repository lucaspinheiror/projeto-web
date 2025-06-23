import { Favorito } from '../../favoritos/entities/favorito.entity';
import { Loja } from '../../loja/entities/loja.entity';
export declare class Produto {
    id: number;
    nome: string;
    preco: number;
    dataCriacao: Date;
    dataValidade: Date;
    favoritos: Favorito[];
    loja: Loja;
}
