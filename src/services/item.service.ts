import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../entitys/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find(); // Retorna todos os itens
  }

  async create(itemDto: Partial<Item>): Promise<Item> {
    const item = this.itemRepository.create(itemDto); // Cria um novo item
    return this.itemRepository.save(item); // Salva no banco
  }
}
