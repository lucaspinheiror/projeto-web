import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, NotFoundException, ConflictException } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('favoritos')
@Controller('favoritos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) { }

  // Só user pode aficionar favoritos
  @Post(':produtoId')
  @ApiOperation({ summary: 'Adicionar produto aos favoritos' })
  @ApiResponse({ status: 201, description: 'Produto adicionado aos favoritos com sucesso.' })
  @ApiResponse({ status: 409, description: 'Produto já está nos favoritos.' })
  @Roles('user')
  async addFavorito(@Param('produtoId') produtoId: number, @Request() req) {
    return this.favoritosService.addFavorito(req.user.userId, produtoId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar favoritos do usuário autenticado' })
  @ApiResponse({ status: 200, description: 'Lista de favoritos do usuário.' })
  @Roles('user')
  async listarFavoritos(@Request() req) {
    return this.favoritosService.listarFavoritos(req.user.userId);
  }

  @Delete(':produtoId')
  @ApiOperation({ summary: 'Remover produto dos favoritos' })
  @ApiResponse({ status: 200, description: 'Produto removido dos favoritos com sucesso.' })
  @ApiResponse({ status: 404, description: 'Favorito não encontrado.' })
  @Roles('user')
  async removeFavorito(@Param('produtoId') produtoId: number, @Request() req) {
    return this.favoritosService.removeFavorito(req.user.userId, produtoId);
  }
}
