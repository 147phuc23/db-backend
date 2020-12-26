import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Examination"})
export class Examination extends BaseEntity {
    @PrimaryColumn()
    medical_examination_id: number;
    
    @PrimaryColumn()
    patient_ssn: string;

    @Column()
    shift_id: number;

    @Column()
    fromtime: number;

    @Column()
    totime: number;
}