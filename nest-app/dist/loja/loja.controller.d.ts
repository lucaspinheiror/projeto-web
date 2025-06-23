import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
export declare class LojaController {
    private readonly lojaService;
    constructor(lojaService: LojaService);
    create(createLojaDto: CreateLojaDto): Promise<{
        message: string;
        loja: import("./entities/loja.entity").Loja;
    }>;
    findAll(): Promise<{
        message: string;
        lojas: import("./entities/loja.entity").Loja[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        loja: import("./entities/loja.entity").Loja;
    }>;
    update(id: string, updateLojaDto: UpdateLojaDto): Promise<{
        message: string;
        loja: import("./entities/loja.entity").Loja;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
