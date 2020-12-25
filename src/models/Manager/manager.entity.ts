import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Manager extends BaseEntity {
    @PrimaryGeneratedColumn()
    mssn: string;

    @Column()
    departmentName: string;

}