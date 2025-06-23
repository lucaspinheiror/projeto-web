import { Repository } from 'typeorm';
import { Favorito } from './entities/favorito.entity';
import { User } from '../user/entities/user.entity';
import { Produto } from '../produtos/entities/produto.entity';
export declare class FavoritosService {
    private readonly favoritoRepository;
    private readonly userRepository;
    private readonly produtoRepository;
    constructor(favoritoRepository: Repository<Favorito>, userRepository: Repository<User>, produtoRepository: Repository<Produto>);
    addFavorito(userId: number, produtoId: number): Promise<{
        message: string;
        favorito: Favorito;
    }>;
    removeFavorito(userId: number, produtoId: number): Promise<{
        message: string;
    }>;
    listarFavoritos(userId: number): Promise<{
        message: string;
        favoritos: Produto[];
    }>;
}
