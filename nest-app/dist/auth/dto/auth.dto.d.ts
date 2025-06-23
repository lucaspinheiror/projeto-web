export declare class RegisterDto {
    nomeUsuario: string;
    nome: string;
    senha: string;
    email: string;
    role?: 'user' | 'admin' | 'manager';
}
export declare class LoginDto {
    nomeUsuario: string;
    senha: string;
}
