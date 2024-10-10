import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaController } from '../controllers/ficha.controller';
import { FichaService } from '../services/ficha.service';
import { FichaRPG } from '../entitys/ficha-rpg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FichaRPG])],
  controllers: [FichaController],
  providers: [FichaService],
})
export class FichaModule {}
