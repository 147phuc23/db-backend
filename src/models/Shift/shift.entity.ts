import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: "Shift"})
export class Shift extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    location: string;
    @Column()
    fromtime: number;
    @Column()
    totime: number;
    @Column()
    shiftdate: number;
    @Column()
    nurse_ssn: string;
    @Column()
    doctor_ssn: string;
}