import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('loja')
@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Criar uma nova loja' })
  @ApiResponse({ status: 201, description: 'Loja criada com sucesso.' })
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojaService.create(createLojaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as lojas' })
  @ApiResponse({ status: 200, description: 'Lista de lojas retornada com sucesso.' })
  findAll() {
    return this.lojaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma loja pelo ID' })
  @ApiResponse({ status: 200, description: 'Loja encontrada.' })
  @ApiResponse({ status: 404, description: 'Loja não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.lojaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Atualizar uma loja pelo ID' })
  @ApiResponse({ status: 200, description: 'Loja atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Loja não encontrada.' })
  update(@Param('id') id: string, @Body() updateLojaDto: UpdateLojaDto) {
    return this.lojaService.update(+id, updateLojaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Remover uma loja pelo ID' })
  @ApiResponse({ status: 200, description: 'Loja removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Loja não encontrada.' })
  remove(@Param('id') id: string) {
    return this.lojaService.remove(+id);
  }
}