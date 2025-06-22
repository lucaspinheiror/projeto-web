import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loja } from './entities/loja.entity';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Loja])], // <-- ESSENCIAL!
  controllers: [LojaController],
  providers: [LojaService],
  exports: [TypeOrmModule], // (opcional, mas útil se outros módulos precisarem)
})
export class LojaModule {}