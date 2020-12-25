import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Patient extends BaseEntity {
    @PrimaryGeneratedColumn()
    ssn: string;

    @Column({name: 'Patient_name'})
    patient_name: string;

    @Column()
    insurance_id: number
}