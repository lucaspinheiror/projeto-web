import { Favorito } from '../../favoritos/entities/favorito.entity';
export declare class User {
    id: number;
    nomeUsuario: string;
    nome: string;
    senha: string;
    email: string;
    role: 'user' | 'admin' | 'manager';
    favoritos: Favorito[];
    hashPassword(): Promise<void>;
}
