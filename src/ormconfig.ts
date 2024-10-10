import { DataSource } from 'typeorm';
import { FichaRPG } from './entitys/ficha-rpg.entity';
import { Item } from './entitys/item.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        FichaRPG,
        Item,
    ],
    migrations: [],
    subscribers: [],
});
