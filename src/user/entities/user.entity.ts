import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, Unique, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Favorito } from '../../favoritos/entities/favorito.entity';


@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @Length(3, 30)
    nomeUsuario: string;

    @Column()
    @IsString()
    @Length(3, 50)
    nome: string;

    @Column()
    @Exclude() // Não retorna a senha em respostas automáticas
    @IsString()
    @Length(6, 100)
    senha: string;

    @Column()
    @IsEmail()
    email: string;

    @Column({ default: 'user' })
    @IsOptional()
    @IsString()
    role: 'user' | 'admin' | 'manager';

    @OneToMany(() => Favorito, favorito => favorito.user)
    favoritos: Favorito[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.senha && !this.senha.startsWith('$2a$')) {
            this.senha = await bcrypt.hash(this.senha, 10);
        }
    }
}