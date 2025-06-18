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
  ) {}

  async addFavorito(userId: number, produtoId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const produto = await this.produtoRepository.findOne({ where: { id: produtoId } });
    if (!user || !produto) throw new NotFoundException('Usuário ou produto não encontrado');

    // Verifica duplicidade
    const exists = await this.favoritoRepository.findOne({ where: { user: { id: userId }, produto: { id: produtoId } } });
    if (exists) throw new ConflictException('Produto já está nos favoritos');

    const favorito = this.favoritoRepository.create({ user, produto });
    return this.favoritoRepository.save(favorito);
  }

  async removeFavorito(userId: number, produtoId: number) {
    const favorito = await this.favoritoRepository.findOne({ where: { user: { id: userId }, produto: { id: produtoId } } });
    if (!favorito) throw new NotFoundException('Favorito não encontrado');
    return this.favoritoRepository.remove(favorito);
  }
  
  async listarFavoritos(userId: number) {
    return this.favoritoRepository.find({ where: { user: { id: userId } }, relations: ['produto'] });
  }
}
