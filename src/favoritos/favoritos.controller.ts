import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, NotFoundException, ConflictException } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('favoritos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) { }

  // Só user pode aficionar favoritos
  @Post(':produtoId')
  @Roles('user')
  async addFavorito(@Param('produtoId') produtoId: number, @Request() req) {
    return this.favoritosService.addFavorito(req.user.userId, produtoId);
  }

  @Get()
  @Roles('user')
  async listarFavoritos(@Request() req) {
    return this.favoritosService.listarFavoritos(req.user.userId);
  }

  @Delete(':produtoId')
  @Roles('user')
  async removeFavorito(@Param('produtoId') produtoId: number, @Request() req) {
    return this.favoritosService.removeFavorito(req.user.userId, produtoId);
  }
}
