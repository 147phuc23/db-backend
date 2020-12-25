import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class TestResult extends BaseEntity {
    @PrimaryGeneratedColumn()
    tid: string;
    @PrimaryGeneratedColumn()
    medicalExamination_id: number;
    @Column()
    note: string;
    @Column()
    result: string;
    @Column()
    type_name: string;
    @Column()
    doctor_assign_ssn: string;
    @Column()
    doctor_take_ssn: string;
}