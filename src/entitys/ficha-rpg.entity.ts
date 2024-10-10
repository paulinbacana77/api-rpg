import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('fichas')
export class FichaRPG {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    raca: string;
}
