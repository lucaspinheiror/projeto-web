import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Favorito } from '../../favoritos/entities/favorito.entity';
import { OneToMany } from 'typeorm';

@Entity('produtos')
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nome: string;

    @Column("decimal", { precision: 5, scale: 2 })
    preco: number;

    @CreateDateColumn({ type: 'datetime' })
    dataCriacao: Date;

    @Column({ type: 'date', nullable: false })
    dataValidade: Date;

    @OneToMany(() => Favorito, favorito => favorito.produto)
    favoritos: Favorito[];

}
