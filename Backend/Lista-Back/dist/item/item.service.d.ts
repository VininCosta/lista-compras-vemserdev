import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
export declare class ItemService {
    private readonly repository;
    constructor(repository: Repository<Item>);
    create(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<Item>;
    remove(id: string): Promise<Item>;
}
