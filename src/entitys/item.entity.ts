import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('itens')
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;
}
