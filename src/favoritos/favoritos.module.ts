import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorito } from './entities/favorito.entity';
import { FavoritosService } from './favoritos.service';
import { FavoritosController } from './favoritos.controller';
import { User } from '../user/entities/user.entity';
import { Produto } from '../produtos/entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorito, User, Produto])],
  controllers: [FavoritosController],
  providers: [FavoritosService],
})
export class FavoritosModule {}
