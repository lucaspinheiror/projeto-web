import { FavoritosService } from './favoritos.service';
export declare class FavoritosController {
    private readonly favoritosService;
    constructor(favoritosService: FavoritosService);
    addFavorito(produtoId: number, req: any): Promise<{
        message: string;
        favorito: import("./entities/favorito.entity").Favorito;
    }>;
    listarFavoritos(req: any): Promise<{
        message: string;
        favoritos: import("../produtos/entities/produto.entity").Produto[];
    }>;
    removeFavorito(produtoId: number, req: any): Promise<{
        message: string;
    }>;
}
