import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  async register(registerDto: RegisterDto) {
    const exists = await this.userRepository.findOne({
      where: [{ nomeUsuario: registerDto.nomeUsuario }, { email: registerDto.email }],
    });

    if (exists) {
      throw new ConflictException('Nome de usuário ou email já cadastrado.');
    }

    const user = this.userRepository.create({
      ...registerDto,
      role: registerDto.role || 'user', // padrão é 'user'
    });
    await this.userRepository.save(user);
    // Remove a senha do retorno
    return plainToInstance(User, user, { excludePrefixes: ['senha'] });
  }

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({ where: { nomeUsuario: loginDto.nomeUsuario } });
    if (!user || !(await bcrypt.compare(loginDto.senha, user.senha))) {
      throw new UnauthorizedException('Usuário ou senha inválidos.');
    }
    const payload = { sub: user.id, nomeUsuario: user.nomeUsuario, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: plainToInstance(User, user, { excludePrefixes: ['senha'] }),
    };
  }

  async validateUser(nomeUsuario: string, senha: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { nomeUsuario } });

    if (user && await bcrypt.compare(senha, user.senha)) {
      return user;
    }

    return null;
  }
}