import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: import("../user/entities/user.entity").User;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        access_token: string;
        user: import("../user/entities/user.entity").User;
    }>;
    logout(): {
        message: string;
    };
}
