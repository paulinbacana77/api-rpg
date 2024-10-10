import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FichaRPG } from '../entitys/ficha-rpg.entity';

@Injectable()
export class FichaService {
  constructor(
    @InjectRepository(FichaRPG)
    private fichaRepository: Repository<FichaRPG>,
  ) {}

  async findAll(): Promise<FichaRPG[]> {
    return this.fichaRepository.find(); 
  }

  async create(fichaDto: Partial<FichaRPG>): Promise<FichaRPG> {
    const ficha = this.fichaRepository.create(fichaDto); 
    return this.fichaRepository.save(ficha); 
  }
}
