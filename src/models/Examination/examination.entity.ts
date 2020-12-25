import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Examination extends BaseEntity {
    @PrimaryGeneratedColumn()
    medical_examination_id: number;
    @PrimaryGeneratedColumn()
    patient_ssn: string;

    @Column()
    shift_id: number;

    @Column()
    fromtime: number;

    @Column()
    totime: number;
}