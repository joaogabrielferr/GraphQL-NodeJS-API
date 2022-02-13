import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produtos extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nomeProduto!: string;
    
    @Column()
    fabricante!: string;

    @Column()
    quantidadeEmEstoque!: number;

    @Column({type:'float'})
    valor!: number;


}