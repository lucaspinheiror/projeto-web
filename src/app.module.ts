import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { LojaModule } from './loja/loja.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProdutosModule,
    UserModule,
    AuthModule,
    FavoritosModule,
    LojaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
