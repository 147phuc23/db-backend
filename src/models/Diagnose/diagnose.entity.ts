import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name:"Diagnose"})
export class Diagnose extends BaseEntity {
    @PrimaryGeneratedColumn()
    diag_name: string;

}