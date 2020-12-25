import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Medicine extends BaseEntity {
    @PrimaryGeneratedColumn()
    mname: string;

    @Column()
    expiry_date: number;

}