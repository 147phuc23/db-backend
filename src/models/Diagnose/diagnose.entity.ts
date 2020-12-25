import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Diagnose extends BaseEntity {
    @PrimaryGeneratedColumn()
    diag_name: string;

}