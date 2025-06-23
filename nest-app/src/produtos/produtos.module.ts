import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { AuthModule } from '../auth/auth.module';
import { Loja } from '../loja/entities/loja.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, Loja]),
    AuthModule, // Importa o módulo de autenticação
  ],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}