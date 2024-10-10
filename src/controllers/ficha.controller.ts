import { Controller, Get, Post, Body } from '@nestjs/common';
import { FichaService } from '../services/ficha.service';
import { FichaRPG } from '../entitys/ficha-rpg.entity';

@Controller('fichas')
export class FichaController {
  constructor(private readonly fichaService: FichaService) {}

  @Get()
  async todasFichas(): Promise<FichaRPG[]> {
    return this.fichaService.findAll();
  }

  @Post()
  async criarFicha(@Body() fichaDto: Partial<FichaRPG>): Promise<FichaRPG> {
    return this.fichaService.create(fichaDto);
  }
}
