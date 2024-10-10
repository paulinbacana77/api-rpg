import { AppDataSource } from '../ormconfig';
import { DataSource } from 'typeorm';
import { Item } from '../entitys/item.entity';
export class ItemRepository {
    private dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    public async findAll(): Promise<Item[]> {
        return this.dataSource.getRepository(Item).find();
    }

    public async createItem(name: string): Promise<Item> {
        const item = new Item();
        item.nome = name;

        return this.dataSource.getRepository(Item).save(item);
    }
}
