import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from '../services/item.service';
import { Item } from '../entitys/item.entity';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async todosItems(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Post()
  async criarItem(@Body() itemDto: Partial<Item>): Promise<Item> {
    return this.itemService.create(itemDto);
  }
}
