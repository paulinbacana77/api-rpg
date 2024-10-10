import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from '../controllers/item.controller';
import { ItemService } from '../services/item.service';
import { Item } from '../entitys/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
