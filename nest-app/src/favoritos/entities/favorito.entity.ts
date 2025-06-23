import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Produto } from '../../produtos/entities/produto.entity';

@Entity()
@Unique(['user', 'produto'])
export class Favorito {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.favoritos, { eager: true})
    user: User;

    @ManyToOne(() => Produto, produto => produto.favoritos, { eager: true })
    produto: Produto;
}
