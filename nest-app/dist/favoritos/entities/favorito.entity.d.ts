import { User } from '../../user/entities/user.entity';
import { Produto } from '../../produtos/entities/produto.entity';
export declare class Favorito {
    id: number;
    user: User;
    produto: Produto;
}
