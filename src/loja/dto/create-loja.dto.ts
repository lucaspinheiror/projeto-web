import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Length } from 'class-validator';

export class CreateLojaDto {
  @ApiProperty({ example: 'Horti da Maria', description: 'Nome da loja' })
  @IsString({ message: 'O nome deve ser uma string.' })
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  nome: string;

  @ApiProperty({ example: 'Produtos frescos e orgânicos', required: false })
  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string.' })
  @Length(0, 200, { message: 'A descrição pode ter até 200 caracteres.' })
  descricao?: string;

  @ApiProperty({ example: 'Rua das Flores, 123', required: false })
  @IsOptional()
  @IsString({ message: 'O endereço deve ser uma string.' })
  @Length(0, 100, { message: 'O endereço pode ter até 100 caracteres.' })
  endereco?: string;
}