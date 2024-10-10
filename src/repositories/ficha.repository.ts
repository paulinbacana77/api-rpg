import { AppDataSource } from '../ormconfig';
import { Repository } from 'typeorm';
import { FichaRPG } from 'src/entitys/ficha-rpg.entity';

export const fichaRepository: Repository<FichaRPG> = AppDataSource.getRepository(FichaRPG);
