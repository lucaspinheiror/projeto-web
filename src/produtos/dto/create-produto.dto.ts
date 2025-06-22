import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsString, Length, Max, Min } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateProdutoDto {

    @ApiProperty({ example: 'Alface', description: 'Nome do produto' })
    @IsString({ message: 'O nome deve ser uma string.' }) // Mensagens de erro personalizadas
    @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
    nome: string;

    @ApiProperty({ example: 2.99, description: 'Preço do produto' })
    @Type(() => Number) // Faz a conversão do valor para Number
    @IsNumber({}, { message: 'O preço deve ser um número e estar entre 0 e 10.' })
    @Min(0, { message: 'O preço deve ser no mínimo 0.' })
    @Max(10, { message: 'O preço deve ser no máximo 10.' })
    preco: number;

    @ApiProperty({ example: '2023-10-01', description: 'Data de criação em formato ISO' })
    @IsDateString({}, { message: 'A data de criação deve estar em formato ISO.' })
    dataCriacao: Date;

    @ApiProperty({ example: '2023-10-15', description: 'Data de validade em formato ISO' })
    @IsDateString({}, { message: 'A data de validade deve estar em formato ISO.' })
    dataValidade: Date;

    @IsInt()
    lojaId: number;
}
