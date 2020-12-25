import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Prescription extends BaseEntity {
    @PrimaryGeneratedColumn()
    pid: number;

    @Column()
    medicalExamination: number;
    @Column()
    tid : number
}