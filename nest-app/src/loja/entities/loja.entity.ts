import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../produtos/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'ID da loja' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Horti da Maria', description: 'Nome da loja' })
  nome: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'Produtos frescos e orgânicos', required: false })
  descricao?: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'Rua das Flores, 123', required: false })
  endereco?: string;

  @OneToMany(() => Produto, produto => produto.loja)
  @ApiProperty({ type: () => [Produto], description: 'Produtos da loja', required: false })
  produtos: Produto[];
}