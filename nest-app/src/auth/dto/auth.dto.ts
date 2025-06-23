import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(3, 30)
  nomeUsuario: string;

  @IsString()
  @Length(3, 50)
  nome: string;

  @IsString()
  @Length(6, 100)
  senha: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  role?: 'user' | 'admin' | 'manager';
}

export class LoginDto {
  @IsString()
  nomeUsuario: string;

  @IsString()
  senha: string;
}