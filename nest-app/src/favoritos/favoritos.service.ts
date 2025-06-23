import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorito } from './entities/favorito.entity';
import { User } from '../user/entities/user.entity';
import { Produto } from '../produtos/entities/produto.entity';

@Injectable()
export class FavoritosService {

  constructor(
    @InjectRepository(Favorito)
    private readonly favoritoRepository: Repository<Favorito>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) { }

  async addFavorito(userId: number, produtoId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const produto = await this.produtoRepository.findOne({ where: { id: produtoId } });
    if (!user || !produto) throw new NotFoundException('Usuário ou produto não encontrado');

    // Verifica duplicidade
    const exists = await this.favoritoRepository.findOne({ where: { user: { id: userId }, produto: { id: produtoId } } });
    if (exists) throw new ConflictException('Produto já está nos favoritos');

    const favorito = this.favoritoRepository.create({ user, produto });
    await this.favoritoRepository.save(favorito);
    return { message: 'Produto adicionado aos favoritos com sucesso', favorito };
  }

  async removeFavorito(userId: number, produtoId: number) {
    const favorito = await this.favoritoRepository.findOne({ where: { user: { id: userId }, produto: { id: produtoId } } });
    if (!favorito) throw new NotFoundException('Favorito não encontrado');
    await this.favoritoRepository.remove(favorito);
    return { message: 'Produto removido dos favoritos com sucesso' };
  }

  async listarFavoritos(userId: number) {
    const favoritos = await this.favoritoRepository.find({ where: { user: { id: userId } }, relations: ['produto'] });
    return {
      message: favoritos.length
        ? 'Lista de favoritos do usuário'
        : 'O usuário não possui favoritos.',
      favoritos: favoritos.map(fav => fav.produto),
    };
  }
}
