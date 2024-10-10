import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FichaController } from './controllers/ficha.controller';
import { ItemController } from './controllers/item.controller';
import { FichaService } from './services/ficha.service';
import { ItemService } from './services/item.service';
import { FichaRPG } from './entitys/ficha-rpg.entity';
import { Item } from './entitys/item.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [FichaRPG, Item],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([FichaRPG, Item]),
  ],
  controllers: [AppController, FichaController, ItemController],
  providers: [AppService, FichaService, ItemService],
})
export class AppModule {}
