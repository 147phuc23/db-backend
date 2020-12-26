import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name:"Prescription"})
export class Prescription extends BaseEntity {
    @PrimaryGeneratedColumn()
    pid: number;

    @Column()
    medicalExamination_id: number;
    @Column()
    tid : number
}