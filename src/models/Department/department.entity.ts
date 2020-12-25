import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    dname: string;

    @Column()
    depiction: string;

}