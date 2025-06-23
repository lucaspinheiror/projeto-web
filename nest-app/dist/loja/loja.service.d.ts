import { Repository } from 'typeorm';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojaService {
    private readonly lojaRepository;
    constructor(lojaRepository: Repository<Loja>);
    create(createLojaDto: CreateLojaDto): Promise<{
        message: string;
        loja: Loja;
    }>;
    findAll(): Promise<{
        message: string;
        lojas: Loja[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        loja: Loja;
    }>;
    update(id: number, updateLojaDto: UpdateLojaDto): Promise<{
        message: string;
        loja: Loja;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
