import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: User;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        access_token: string;
        user: User;
    }>;
    validateUser(nomeUsuario: string, senha: string): Promise<User | null>;
}
