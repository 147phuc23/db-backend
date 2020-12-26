import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
export class Patient extends BaseEntity {
    @PrimaryColumn()
    ssn: string;

    @Column({name: 'Patient_name'})
    patient_name: string;

    @Column()
    insurance_id: number
}